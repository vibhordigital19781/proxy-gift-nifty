const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

const SCRAPER_KEY = process.env.SCRAPER_API_KEY || '81c9a23e3daeb02e8140b6aa5783f916';

// ScraperAPI with JS rendering to get dynamic price data
async function scraperFetch(url, render = false) {
  const proxy = `http://api.scraperapi.com?api_key=${SCRAPER_KEY}&url=${encodeURIComponent(url)}${render ? '&render=true' : ''}`;
  const res   = await fetch(proxy);
  return res.text();
}

app.get('/', (req, res) => {
  res.json({ status: 'Gift Nifty proxy running ✓', source: 'investing.com via ScraperAPI' });
});

// ── Debug: try different investing.com price endpoints ────────
app.get('/debug4', async (req, res) => {
  try {
    // This is the actual endpoint investing.com uses for live quotes
    const url = `https://in.investing.com/indices/gift-nifty-50-c1-futures`;
    const html = await scraperFetch(url, true); // render JS
    
    // Extract price from HTML using regex
    const priceMatch = html.match(/"last":"?([0-9,]+\.?[0-9]*)"?/) ||
                       html.match(/data-last-value="([0-9,]+\.?[0-9]*)"/);
    
    res.json({
      htmlLength: html.length,
      priceFound: priceMatch ? priceMatch[1] : 'not found',
      sample: html.substring(0, 300),
    });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── Debug: try investing.com real-time data endpoint ──────────
app.get('/debug5', async (req, res) => {
  try {
    const url  = `https://in.investing.com/api/financialdata/1209767/?fields-list=id,name,lastNumeric,last,lastClose,change,changePercent,high,low,open,volume&domain_id=in&lang_ID=56`;
    const text = await scraperFetch(url);
    res.json({ first300: text.substring(0, 300), isHTML: text.trim().startsWith('<') });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── Debug: try without domain_id ─────────────────────────────
app.get('/debug6', async (req, res) => {
  try {
    const url  = `https://in.investing.com/api/financialdata/1209767/`;
    const text = await scraperFetch(url);
    res.json({ first300: text.substring(0, 300), isHTML: text.trim().startsWith('<') });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── /quote — best working endpoint ───────────────────────────
app.get('/quote', async (req, res) => {
  try {
    // Try in.investing.com domain (India) with correct params
    const url  = `https://in.investing.com/api/financialdata/1209767/?fields-list=id,name,lastNumeric,last,lastClose,change,changePercent,high,low,open,volume&domain_id=in&lang_ID=56`;
    const text = await scraperFetch(url);
    
    if (text.trim().startsWith('<')) throw new Error('Got HTML');
    const data = JSON.parse(text);
    const q    = data?.data?.[0] || {};
    
    if (!q.lastNumeric && !q.last) {
      throw new Error('Empty — raw: ' + text.substring(0, 150));
    }

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
      source:    'investing.com',
    });
  } catch(e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
