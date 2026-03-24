const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

// ── Config ────────────────────────────────────────────────────
const SCRAPER_KEY = process.env.SCRAPER_API_KEY || '81c9a23e3daeb02e8140b6aa5783f916';
const PAIR_ID     = '1209767'; // Gift Nifty 50 GIFc1

// ── ScraperAPI fetch ──────────────────────────────────────────
async function scraperFetch(targetUrl) {
  const proxy = `http://api.scraperapi.com?api_key=${SCRAPER_KEY}&url=${encodeURIComponent(targetUrl)}`;
  const res   = await fetch(proxy, { timeout: 15000 });
  const text  = await res.text();
  if (text.trim().startsWith('<')) throw new Error('Got HTML — investing.com blocked');
  return JSON.parse(text);
}

// ── Investing.com headers (sent via ScraperAPI) ───────────────
// ScraperAPI handles headers/rotation automatically

// ── Health check ──────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    status: 'Gift Nifty proxy running ✓',
    source: 'investing.com via ScraperAPI',
    pair:   PAIR_ID,
  });
});

// ── GET /quote ────────────────────────────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const url  = `https://api.investing.com/api/financialdata/${PAIR_ID}/?fields-list=id,name,lastNumeric,last,lastClose,change,changePercent,high,low,open,volume,time&lang_id=56&domain_id=in`;
    const data = await scraperFetch(url);
    const q    = data?.data?.[0] || {};

    if (!q.lastNumeric && !q.last) throw new Error('Empty quote data');

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
      source:    'investing.com',
    });
  } catch(e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ── GET /history ──────────────────────────────────────────────
app.get('/history', async (req, res) => {
  const resolution = req.query.resolution || '5';
  const now  = Math.floor(Date.now() / 1000);
  const from = parseInt(req.query.from) || now - 86400;
  const to   = parseInt(req.query.to)   || now;

  // Try 1: TVC chart endpoint
  try {
    const tvcUrl = `https://tvc4.investing.com/${now}/1/1/8/history?symbol=${PAIR_ID}&resolution=${resolution}&from=${from}&to=${to}`;
    const data   = await scraperFetch(tvcUrl);

    if (data?.s === 'ok' && data.t?.length) {
      const candles = data.t.map((t, i) => ({
        time:  t,
        open:  data.o[i],
        high:  data.h[i],
        low:   data.l[i],
        close: data.c[i],
      })).filter(c => c.close);

      return res.json({ ok: true, candles, source: 'investing.com TVC' });
    }
    throw new Error('TVC returned no candles');

  } catch(e1) {

    // Try 2: financial data historical API
    try {
      const tfMap    = { '1':'Minutes1','5':'Minutes5','15':'Minutes15','30':'Minutes30','60':'Hours1','D':'Daily' };
      const tf       = tfMap[resolution] || 'Minutes5';
      const fromDate = new Date(from*1000).toISOString().split('T')[0];
      const toDate   = new Date(to*1000).toISOString().split('T')[0];
      const apiUrl   = `https://api.investing.com/api/financialdata/historical/${PAIR_ID}?start-date=${fromDate}&end-date=${toDate}&time-frame=${tf}&add-missing-rows=false`;
      const data2    = await scraperFetch(apiUrl);

      const candles = (data2?.data || []).map(row => ({
        time:  Math.floor(new Date(row.rowDateRaw || row.rowDate).getTime() / 1000),
        open:  parseFloat(row.last_open  || row.open_price  || 0),
        high:  parseFloat(row.last_max   || row.high_price  || 0),
        low:   parseFloat(row.last_min   || row.low_price   || 0),
        close: parseFloat(row.last_close || row.last        || 0),
      })).filter(c => c.close).reverse();

      if (!candles.length) throw new Error('No candles from historical API');
      return res.json({ ok: true, candles, source: 'investing.com historical' });

    } catch(e2) {
      res.status(500).json({ ok: false, error: e1.message, fallback: e2.message });
    }
  }
});

app.listen(PORT, () => console.log(`Gift Nifty proxy running on port ${PORT}`));
