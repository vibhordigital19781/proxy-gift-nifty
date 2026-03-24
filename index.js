const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

const SCRAPER_KEY = process.env.SCRAPER_API_KEY || '81c9a23e3daeb02e8140b6aa5783f916';
const PAIR_ID     = '1209767';

async function scraperFetch(targetUrl) {
  const proxy = `http://api.scraperapi.com?api_key=${SCRAPER_KEY}&url=${encodeURIComponent(targetUrl)}`;
  const res   = await fetch(proxy);
  const text  = await res.text();
  return text; // return raw text for debugging
}

app.get('/', (req, res) => {
  res.json({ status: 'Gift Nifty proxy running ✓', source: 'investing.com via ScraperAPI', pair: PAIR_ID });
});

// ── DEBUG: see raw response from investing.com ────────────────
app.get('/debug', async (req, res) => {
  try {
    // Test 3 different URLs and return raw responses
    const url1 = `https://api.investing.com/api/financialdata/${PAIR_ID}/?fields-list=id,name,lastNumeric,last,lastClose,change,changePercent,high,low,open,volume,time&lang_id=56&domain_id=in`;
    const url2 = `https://in.investing.com/indices/gift-nifty-50-c1-futures`;
    const url3 = `https://api.investing.com/api/financialdata/assets/getAssetsData`;

    const raw1 = await scraperFetch(url1);

    res.json({
      url1_first200: raw1.substring(0, 200),
      url1_isHTML: raw1.trim().startsWith('<'),
      url1_length: raw1.length,
    });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── DEBUG 2: try the investing.com search API ─────────────────
app.get('/debug2', async (req, res) => {
  try {
    const url = `https://api.investing.com/api/search/v2/search?q=gift+nifty&lang_id=56&domain_id=in`;
    const raw = await scraperFetch(url);
    res.json({
      first500: raw.substring(0, 500),
      isHTML: raw.trim().startsWith('<'),
    });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── DEBUG 3: try the quotes endpoint directly ─────────────────
app.get('/debug3', async (req, res) => {
  try {
    const url = `https://api.investing.com/api/financialdata/quotes?pairIds=${PAIR_ID}&fields=last,high,low,open,prev_close,change,change_percent&lang_id=56&domain_id=in`;
    const raw = await scraperFetch(url);
    res.json({
      first500: raw.substring(0, 500),
      isHTML: raw.trim().startsWith('<'),
    });
  } catch(e) {
    res.json({ error: e.message });
  }
});

// ── /quote ────────────────────────────────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const url  = `https://api.investing.com/api/financialdata/${PAIR_ID}/?fields-list=id,name,lastNumeric,last,lastClose,change,changePercent,high,low,open,volume,time&lang_id=56&domain_id=in`;
    const text = await scraperFetch(url);
    if (text.trim().startsWith('<')) throw new Error('Got HTML');
    const data = JSON.parse(text);
    const q    = data?.data?.[0] || {};
    if (!q.lastNumeric && !q.last) throw new Error('Empty quote data — raw: ' + text.substring(0, 100));
    res.json({ ok: true, price: q.lastNumeric || q.last, prevClose: q.lastClose, change: q.change, changePct: q.changePercent, high: q.high, low: q.low, open: q.open, volume: q.volume, source: 'investing.com' });
  } catch(e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ── /history ──────────────────────────────────────────────────
app.get('/history', async (req, res) => {
  const resolution = req.query.resolution || '5';
  const now  = Math.floor(Date.now() / 1000);
  const from = parseInt(req.query.from) || now - 86400;
  const to   = parseInt(req.query.to)   || now;

  try {
    const tvcUrl = `https://tvc4.investing.com/${now}/1/1/8/history?symbol=${PAIR_ID}&resolution=${resolution}&from=${from}&to=${to}`;
    const text   = await scraperFetch(tvcUrl);
    if (text.trim().startsWith('<')) throw new Error('Got HTML from TVC');
    const data = JSON.parse(text);
    if (data?.s === 'ok' && data.t?.length) {
      const candles = data.t.map((t, i) => ({ time: t, open: data.o[i], high: data.h[i], low: data.l[i], close: data.c[i] })).filter(c => c.close);
      return res.json({ ok: true, candles, source: 'investing.com TVC' });
    }
    throw new Error('TVC no candles — status: ' + data?.s + ' raw: ' + text.substring(0, 100));
  } catch(e1) {
    try {
      const tfMap  = { '1':'Minutes1','5':'Minutes5','15':'Minutes15','60':'Hours1','D':'Daily' };
      const tf     = tfMap[resolution] || 'Minutes5';
      const fDate  = new Date(from*1000).toISOString().split('T')[0];
      const tDate  = new Date(to*1000).toISOString().split('T')[0];
      const apiUrl = `https://api.investing.com/api/financialdata/historical/${PAIR_ID}?start-date=${fDate}&end-date=${tDate}&time-frame=${tf}&add-missing-rows=false`;
      const text2  = await scraperFetch(apiUrl);
      if (text2.trim().startsWith('<')) throw new Error('Got HTML from historical API');
      const data2  = JSON.parse(text2);
      const candles = (data2?.data || []).map(row => ({
        time:  Math.floor(new Date(row.rowDateRaw || row.rowDate).getTime() / 1000),
        open:  parseFloat(row.last_open || 0), high: parseFloat(row.last_max || 0),
        low:   parseFloat(row.last_min || 0),  close: parseFloat(row.last_close || row.last || 0),
      })).filter(c => c.close).reverse();
      if (!candles.length) throw new Error('No candles — raw: ' + text2.substring(0, 100));
      return res.json({ ok: true, candles, source: 'investing.com historical' });
    } catch(e2) {
      res.status(500).json({ ok: false, error: e1.message, fallback: e2.message });
    }
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
