// gift-nifty-server/index.js
// Deploy this to Render as a free Node.js web service

const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

// Allow your Netlify domain — update this!
const ALLOWED_ORIGINS = [
  'https://YOUR-SITE.netlify.app',   // ← replace with your Netlify URL
  'http://localhost:3000',            // for local dev
  'http://localhost:5500',
];

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || ALLOWED_ORIGINS.some(o => origin.startsWith(o))) cb(null, true);
    else cb(new Error('Not allowed by CORS'));
  }
}));

app.use(express.json());

const PAIR_ID = '1209767'; // Gift Nifty 50 — GIFc1 on investing.com

// ── Headers that mimic a real browser ────────────────────────
function investingHeaders() {
  return {
    'User-Agent':      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36',
    'Accept':          'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
    'Origin':          'https://in.investing.com',
    'Referer':         'https://in.investing.com/indices/gift-nifty-50-c1-futures-chart',
    'domain-id':       'in',
  };
}

// ── GET /quote — live price + OHLV ───────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const url = `https://api.investing.com/api/financialdata/${PAIR_ID}/` +
      `?fields-list=id,name,lastNumeric,last,lastClose,change,changePercent,high,low,open,volume,time&lang_id=1`;

    const r    = await fetch(url, { headers: investingHeaders() });
    const data = await r.json();
    const q    = data?.data?.[0] || {};

    res.json({
      ok:        true,
      price:     q.lastNumeric || q.last,
      prevClose: q.lastClose,
      change:    q.change,
      changePct: q.changePercent,
      high:      q.high,
      low:       q.low,
      open:      q.open,
      volume:    q.volume,
      time:      q.time,
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ── GET /history — OHLCV candles ─────────────────────────────
app.get('/history', async (req, res) => {
  const resolution = req.query.resolution || '5';
  const from       = req.query.from || Math.floor(Date.now()/1000) - 86400;
  const to         = req.query.to   || Math.floor(Date.now()/1000);

  try {
    // Primary: TVC chart endpoint (same one investing.com uses internally)
    const tvcUrl = `https://tvc4.investing.com/283a4f5c8a498f1729538676a3a95ade/${Math.floor(Date.now()/1000)}/1/1/8/history` +
      `?symbol=${PAIR_ID}&resolution=${resolution}&from=${from}&to=${to}`;

    const r    = await fetch(tvcUrl, { headers: investingHeaders() });
    const data = await r.json();

    if (data?.s === 'ok' && data.t?.length) {
      const candles = data.t.map((t, i) => ({
        time:  t,
        open:  data.o[i],
        high:  data.h[i],
        low:   data.l[i],
        close: data.c[i],
      })).filter(c => c.close);

      return res.json({ ok: true, candles, source: 'tvc' });
    }

    // Fallback: financial data API
    const tfMap = { '1':'Minutes1','5':'Minutes5','15':'Minutes15','60':'Hours1','D':'Daily' };
    const tf       = tfMap[resolution] || 'Minutes5';
    const fromDate = new Date(from*1000).toISOString().split('T')[0];
    const toDate   = new Date(to*1000).toISOString().split('T')[0];

    const apiUrl = `https://api.investing.com/api/financialdata/historical/${PAIR_ID}` +
      `?start-date=${fromDate}&end-date=${toDate}&time-frame=${tf}&add-missing-rows=false`;

    const r2    = await fetch(apiUrl, { headers: investingHeaders() });
    const data2 = await r2.json();

    const candles = (data2?.data || []).map(row => ({
      time:  Math.floor(new Date(row.rowDateRaw || row.rowDate).getTime()/1000),
      open:  parseFloat(row.last_open  || row.open_price  || 0),
      high:  parseFloat(row.last_max   || row.high_price  || 0),
      low:   parseFloat(row.last_min   || row.low_price   || 0),
      close: parseFloat(row.last_close || row.last        || 0),
    })).filter(c => c.close).reverse();

    res.json({ ok: true, candles, source: 'api-fallback' });

  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ── Health check ──────────────────────────────────────────────
app.get('/', (req, res) => res.json({ status: 'Gift Nifty proxy running ✓' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
