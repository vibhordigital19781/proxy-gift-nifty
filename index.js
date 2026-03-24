const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

const SCRAPER_KEY = process.env.SCRAPER_API_KEY || '81c9a23e3daeb02e8140b6aa5783f916';
const PAGE_URL    = 'https://in.investing.com/indices/gift-nifty-50-c1-futures';

async function fetchPage(url, render = false) {
  const proxy = `http://api.scraperapi.com?api_key=${SCRAPER_KEY}&url=${encodeURIComponent(url)}${render ? '&render=true' : ''}`;
  const res   = await fetch(proxy);
  return res.text();
}

// Extract number from string like "23,150.50" or "23150.50"
function extractNumber(str) {
  if (!str) return null;
  const clean = str.replace(/,/g, '');
  const num   = parseFloat(clean);
  return isNaN(num) ? null : num;
}

// Parse price data from investing.com HTML
function parsePrice(html) {
  const result = {};

  // Try multiple patterns investing.com uses to embed price data

  // 1. JSON-LD structured data
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (jsonLdMatch) {
    try {
      const jsonLd = JSON.parse(jsonLdMatch[1]);
      if (jsonLd.price) result.price = extractNumber(jsonLd.price);
    } catch(e) {}
  }

  // 2. Meta tags
  const metaPrice = html.match(/property="price"[^>]*content="([^"]+)"/);
  if (metaPrice) result.price = result.price || extractNumber(metaPrice[1]);

  // 3. data-last-value attribute (common in investing.com)
  const dataLast = html.match(/data-last-value="([0-9,\.]+)"/);
  if (dataLast) result.price = result.price || extractNumber(dataLast[1]);

  // 4. Inline JS variables
  const jsLast = html.match(/"last(?:Price|Numeric|Value)"?\s*:\s*"?([0-9,\.]+)"?/);
  if (jsLast) result.price = result.price || extractNumber(jsLast[1]);

  // 5. Look for the price in common HTML patterns
  const priceSpan = html.match(/class="[^"]*(?:last-price|instrument-price|text-2xl)[^"]*"[^>]*>([0-9,\.]+)</);
  if (priceSpan) result.price = result.price || extractNumber(priceSpan[1]);

  // Extract change
  const changeMatch = html.match(/"(?:change|netChange)"\s*:\s*"?([-0-9,\.]+)"?/);
  if (changeMatch) result.change = extractNumber(changeMatch[1]);

  const changePctMatch = html.match(/"(?:changePercent|pChange|percentChange)"\s*:\s*"?([-0-9,\.]+)"?/);
  if (changePctMatch) result.changePct = extractNumber(changePctMatch[1]);

  return result;
}

app.get('/', (req, res) => {
  res.json({ status: 'Gift Nifty proxy running ✓', source: 'investing.com page scrape' });
});

// ── /raw — see raw HTML snippet for debugging ─────────────────
app.get('/raw', async (req, res) => {
  try {
    const html = await fetchPage(PAGE_URL, false);
    // Return a sample of the HTML around price-related content
    const priceIdx = html.search(/data-last|last-price|lastNumeric|lastPrice/i);
    res.json({
      htmlLength:   html.length,
      priceIdx,
      snippet:      priceIdx > 0 ? html.substring(Math.max(0, priceIdx-100), priceIdx+200) : 'not found',
      metaSnippet:  html.match(/og:title[^>]+content="([^"]+)"/)? html.match(/og:title[^>]+content="([^"]+)"/) [1] : '',
    });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── /quote — live Gift Nifty price ───────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const html   = await fetchPage(PAGE_URL, false);
    const parsed = parsePrice(html);

    if (!parsed.price) {
      // Try with JS rendering if static scrape didn't find price
      const html2   = await fetchPage(PAGE_URL, true);
      const parsed2 = parsePrice(html2);

      if (!parsed2.price) {
        return res.status(500).json({
          ok: false,
          error: 'Could not extract price from page',
          htmlLength: html.length,
          html2Length: html2.length,
        });
      }

      return res.json({
        ok:       true,
        price:    parsed2.price,
        change:   parsed2.change,
        changePct:parsed2.changePct,
        source:   'investing.com (rendered)',
      });
    }

    res.json({
      ok:        true,
      price:     parsed.price,
      change:    parsed.change,
      changePct: parsed.changePct,
      source:    'investing.com',
    });

  } catch(e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
