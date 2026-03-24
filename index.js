const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

// ── Config ────────────────────────────────────────────────────
const SCRAPER_API_KEY = process.env.SCRAPER_API_KEY || '81c9a23e3daeb02e8140b6aa5783f916';
const PAIR_ID         = '1209767'; // Gift Nifty 50 GIFc1 on investing.com
const YAHOO_TICKER    = '%5ENSEI'; // ^NSEI Nifty 50

// ── IST Market Hours ──────────────────────────────────────────
// Pre-market  : 06:30 – 09:15 IST → use investing.com via ScraperAPI
// Market hours: 09:15 – 15:30 IST → use Yahoo Finance (free, no limits)
// After hours : 15:30 – 06:30 IST → show last price, no refresh

function getISTHour() {
  const now = new Date();
  const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  return ist.getHours() + ist.getMinutes() / 60;
}

function getMarketSession() {
  const h = getISTHour();
  if (h >= 6.5 && h < 9.25)  return 'premarket';   // 06:30–09:15
  if (h >= 9.25 && h < 15.5) return 'market';       // 09:15–15:30
  return 'closed';
}

// ── ScraperAPI fetch helper ───────────────────────────────────
async function scraperFetch(targetUrl) {
  const proxy = `http://api.scraperapi.com?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(targetUrl)}`;
  const res   = await fetch(proxy);
  const text  = await res.text();
  if (text.trim().startsWith('<')) throw new Error('Got HTML — blocked');
  return JSON.parse(text);
}

// ── Yahoo Finance fetch helper ────────────────────────────────
async function yahooFetch(interval, range) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${YAHOO_TICKER}?interval=${interval}&range=${range}&includePrePost=false`;
  const res  = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 Chrome/122 Safari/537.36' }
  });
  return res.json();
}

// ── Interval maps ─────────────────────────────────────────────
const INVESTING_RES = { '1':'1','5':'5','15':'15','60':'60','D':'D' };
const YAHOO_MAP     = {
  '1':  { interval:'1m',  range:'1d'  },
  '5':  { interval:'5m',  range:'5d'  },
  '15': { interval:'15m', range:'5d'  },
  '60': { interval:'60m', range:'1mo' },
  'D':  { interval:'1d',  range:'1y'  },
};

// ── Health check ──────────────────────────────────────────────
app.get('/', (req, res) => {
  const session = getMarketSession();
  res.json({
    status:  'Gift Nifty proxy running ✓',
    session,
    source:  session === 'premarket' ? 'investing.com via ScraperAPI'
           : session === 'market'    ? 'Yahoo Finance ^NSEI'
           : 'closed — last price only',
    ist_hour: getISTHour().toFixed(2),
  });
});

// ── GET /quote ────────────────────────────────────────────────
app.get('/quote', async (req, res) => {
  const session = getMarketSession();

  try {
    if (session === 'premarket') {
      // investing.com via ScraperAPI
      const url  = `https://api.investing.com/api/financialdata/${PAIR_ID}/?fields-list=id,name,lastNumeric,last,lastClose,change,changePercent,high,low,open,volume,time&lang_id=56&domain_id=in`;
      const data = await scraperFetch(url);
      const q    = data?.data?.[0] || {};
      return res.json({
        ok: true, session,
        price:     q.lastNumeric || q.last,
        prevClose: q.lastClose,
        change:    q.change,
        changePct: q.changePercent,
        high:      q.high,
        low:       q.low,
        open:      q.open,
        volume:    q.volume,
        source:    'investing.com',
      });
    }

    // Yahoo Finance (market hours or closed)
    const json = await yahooFetch('1m', '1d');
    const meta = json?.chart?.result?.[0]?.meta;
    if (!meta) throw new Error('No Yahoo data');

    const price     = meta.regularMarketPrice;
    const prevClose = meta.previousClose || meta.chartPreviousClose;
    const change    = price - prevClose;
    const changePct = (change / prevClose) * 100;

    res.json({
      ok: true, session,
      price:     price.toFixed(2),
      prevClose: prevClose.toFixed(2),
      change:    change.toFixed(2),
      changePct: changePct.toFixed(2),
      high:      meta.regularMarketDayHigh?.toFixed(2),
      low:       meta.regularMarketDayLow?.toFixed(2),
      open:      meta.regularMarketOpen?.toFixed(2),
      volume:    meta.regularMarketVolume,
      source:    'Yahoo ^NSEI',
    });

  } catch(e) {
    res.status(500).json({ ok: false, error: e.message, session });
  }
});

// ── GET /history ──────────────────────────────────────────────
app.get('/history', async (req, res) => {
  const resolution = req.query.resolution || '5';
  const session    = getMarketSession();

  try {
    if (session === 'premarket') {
      // investing.com candles via ScraperAPI
      const now  = Math.floor(Date.now() / 1000);
      const from = parseInt(req.query.from) || now - 86400;
      const to   = parseInt(req.query.to)   || now;
      const url  = `https://tvc4.investing.com/${now}/1/1/8/history?symbol=${PAIR_ID}&resolution=${resolution}&from=${from}&to=${to}`;

      const data    = await scraperFetch(url);
      if (data?.s !== 'ok' || !data.t?.length) throw new Error('No candles from investing.com');

      const candles = data.t.map((t, i) => ({
        time: t, open: data.o[i], high: data.h[i], low: data.l[i], close: data.c[i],
      })).filter(c => c.close);

      return res.json({ ok: true, candles, source: 'investing.com', session });
    }

    // Yahoo Finance
    const { interval, range } = YAHOO_MAP[resolution] || YAHOO_MAP['5'];
    const json   = await yahooFetch(interval, range);
    const result = json?.chart?.result?.[0];
    if (!result) throw new Error('No Yahoo data');

    const { timestamp, indicators } = result;
    const { open, high, low, close } = indicators.quote[0];

    const candles = [];
    for (let i = 0; i < timestamp.length; i++) {
      if (!close[i] || !open[i]) continue;
      candles.push({
        time:  timestamp[i],
        open:  parseFloat(open[i].toFixed(2)),
        high:  parseFloat(high[i].toFixed(2)),
        low:   parseFloat(low[i].toFixed(2)),
        close: parseFloat(close[i].toFixed(2)),
      });
    }

    res.json({ ok: true, candles, source: 'Yahoo ^NSEI', session });

  } catch(e) {
    res.status(500).json({ ok: false, error: e.message, session });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
