const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

const SCRAPER_KEY = process.env.SCRAPER_API_KEY || '81c9a23e3daeb02e8140b6aa5783f916';
const PAGE_URL    = 'https://in.investing.com/indices/gift-nifty-50-c1-futures';

async function fetchPage(url, render) {
  const proxy = `http://api.scraperapi.com?api_key=${SCRAPER_KEY}&url=${encodeURIComponent(url)}${render ? '&render=true' : ''}`;
  const res   = await fetch(proxy);
  return res.text();
}

function extractNumber(str) {
  if (!str) return null;
  const num = parseFloat(str.replace(/,/g, ''));
  return isNaN(num) ? null : num;
}

app.get('/', (req, res) => {
  res.json({ status: 'Gift Nifty proxy running ✓' });
});

// ── /raw — debug HTML patterns ────────────────────────────────
app.get('/raw', async (req, res) => {
  try {
    const html = await fetchPage(PAGE_URL, false);

    const nextDataIdx  = html.indexOf('__NEXT_DATA__');
    const lastNumeric  = html.indexOf('lastNumeric');
    const dataLast     = html.indexOf('data-last');
    const prevClose    = html.indexOf('prevClose');

    // Find any number in Gift Nifty price range 20000-29999
    const priceMatch = html.match(/\b(2[0-9]\d{3}\.\d{2})\b/);

    // Get next data snippet
    let nextSnippet = 'not found';
    if (nextDataIdx > 0) {
      nextSnippet = html.substring(nextDataIdx, nextDataIdx + 300);
    }

    // Get lastNumeric snippet
    let lastNumericSnippet = 'not found';
    if (lastNumeric > 0) {
      lastNumericSnippet = html.substring(Math.max(0, lastNumeric - 50), lastNumeric + 100);
    }

    res.json({
      htmlLength:          html.length,
      nextDataIdx,
      lastNumericIdx:      lastNumeric,
      dataLastIdx:         dataLast,
      prevCloseIdx:        prevClose,
      firstPriceInRange:   priceMatch ? priceMatch[1] : 'not found',
      nextDataSnippet:     nextSnippet,
      lastNumericSnippet,
    });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── /quote — extract price from page ─────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const html = await fetchPage(PAGE_URL, false);

    // Try to extract from __NEXT_DATA__ JSON blob
    const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
    if (nextDataMatch) {
      try {
        const data  = JSON.parse(nextDataMatch[1]);
        const props = JSON.stringify(data);
        const price = props.match(/"(?:last|lastNumeric|currentPrice|price)"\s*:\s*([\d.]+)/);
        const change= props.match(/"(?:change|netChange)"\s*:\s*(-?[\d.]+)/);
        const pct   = props.match(/"(?:changePercent|pChange)"\s*:\s*(-?[\d.]+)/);

        if (price) {
          return res.json({
            ok:        true,
            price:     parseFloat(price[1]),
            change:    change ? parseFloat(change[1]) : null,
            changePct: pct    ? parseFloat(pct[1])    : null,
            source:    'investing.com __NEXT_DATA__',
          });
        }
      } catch(e) {}
    }

    // Fallback: find first number in Gift Nifty price range
    const priceMatch = html.match(/\b(2[0-9]\d{3}\.\d{2})\b/);
    if (priceMatch) {
      return res.json({
        ok:     true,
        price:  parseFloat(priceMatch[1]),
        source: 'investing.com page (regex)',
      });
    }

    res.status(500).json({ ok: false, error: 'Price not found in page', htmlLength: html.length });

  } catch(e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
