const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

const SCRAPER_KEY  = process.env.SCRAPER_API_KEY || '81c9a23e3daeb02e8140b6aa5783f916';
const GN_URL       = 'https://in.investing.com/indices/gift-nifty-50-c1-futures';
const GBN_URL      = 'https://in.investing.com/indices/gift-nifty-bank-c1-futures';

async function fetchPage(url) {
  const proxy = `http://api.scraperapi.com?api_key=${SCRAPER_KEY}&url=${encodeURIComponent(url)}`;
  const res   = await fetch(proxy);
  return res.text();
}

function extractQuote(html) {
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error('__NEXT_DATA__ not found');

  const str = JSON.stringify(JSON.parse(match[1]));

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

  if (!price) throw new Error('Price not found');

  const change    = (price && prevClose) ? parseFloat((price - prevClose).toFixed(2)) : null;
  const changePct = (price && prevClose) ? parseFloat(((price - prevClose) / prevClose * 100).toFixed(2)) : null;

  return { ok: true, price, prevClose, open, high, low, volume, change, changePct,
           source: 'investing.com', timestamp: new Date().toISOString() };
}

app.get('/', (req, res) => {
  res.json({ status: 'Gift Nifty proxy running ✓', endpoints: ['/quote', '/quote-bank'] });
});

// ── Gift Nifty 50 ─────────────────────────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const html = await fetchPage(GN_URL);
    res.json(extractQuote(html));
  } catch(e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ── Gift Bank Nifty ───────────────────────────────────────────
app.get('/quote-bank', async (req, res) => {
  try {
    const html = await fetchPage(GBN_URL);
    res.json(extractQuote(html));
  } catch(e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
