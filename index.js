const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

const SCRAPER_KEY = process.env.SCRAPER_API_KEY || '81c9a23e3daeb02e8140b6aa5783f916';
const PAGE_URL    = 'https://in.investing.com/indices/gift-nifty-50-c1-futures';

async function fetchPage(url) {
  const proxy = `http://api.scraperapi.com?api_key=${SCRAPER_KEY}&url=${encodeURIComponent(url)}`;
  const res   = await fetch(proxy);
  return res.text();
}

app.get('/', (req, res) => {
  res.json({ status: 'Gift Nifty proxy running ✓', source: 'investing.com' });
});

// ── GET /quote ─────────────────────────────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const html = await fetchPage(PAGE_URL);

    // Extract __NEXT_DATA__ JSON blob
    const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
    if (!match) throw new Error('__NEXT_DATA__ not found in page');

    const data     = JSON.parse(match[1]);
    const str      = JSON.stringify(data);

    // Extract all relevant price fields using precise regex
    const get = (pattern) => {
      const m = str.match(pattern);
      return m ? parseFloat(m[1]) : null;
    };

    const price     = get(/"(?:last|lastPrice|currentPrice|price|lastNumeric)"\s*:\s*([\d.]+)/);
    const prevClose = get(/"(?:prevClose|previousClose|lastClose|prev_close)"\s*:\s*([\d.]+)/);
    const open      = get(/"(?:open|openPrice|open_price)"\s*:\s*([\d.]+)/);
    const high      = get(/"(?:high|highPrice|high_price|dayHigh)"\s*:\s*([\d.]+)/);
    const low       = get(/"(?:low|lowPrice|low_price|dayLow)"\s*:\s*([\d.]+)/);
    const volume    = get(/"(?:volume|vol)"\s*:\s*([\d.]+)/);
    const change    = get(/"(?:change|netChange|net_change)"\s*:\s*(-?[\d.]+)/);
    const changePct = get(/"(?:changePercent|pChange|percentChange|change_percent)"\s*:\s*(-?[\d.]+)/);

    // Calculate change from price and prevClose if not directly found
    const calcChange    = (price && prevClose) ? parseFloat((price - prevClose).toFixed(2)) : change;
    const calcChangePct = (price && prevClose) ? parseFloat(((price - prevClose) / prevClose * 100).toFixed(2)) : changePct;

    if (!price) throw new Error('Price not found in __NEXT_DATA__');

    res.json({
      ok:        true,
      price,
      prevClose,
      open,
      high,
      low,
      volume,
      change:    calcChange,
      changePct: calcChangePct,
      source:    'investing.com',
      timestamp: new Date().toISOString(),
    });

  } catch(e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => console.log(`Gift Nifty proxy running on port ${PORT}`));
