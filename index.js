const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());
const express = require('express');
const cors    = require('cors');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(cors());

// ^NSEI  = Nifty 50 spot  (tracks Gift Nifty very closely, free, no blocks)
// GIFc1.NSE would be ideal but Yahoo doesn't carry it
const TICKER = '^NSEI';

const INTERVAL_MAP = {
  '1':  { interval: '1m',  range: '1d'   },
  '5':  { interval: '5m',  range: '5d'   },
  '15': { interval: '15m', range: '5d'   },
  '30': { interval: '30m', range: '5d'   },
  '60': { interval: '60m', range: '1mo'  },
  'D':  { interval: '1d',  range: '1y'   },
  'W':  { interval: '1wk', range: '2y'   },
};

function yahooHeaders() {
  return {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122 Safari/537.36',
    'Accept': 'application/json',
  };
}

// ── Health check ──────────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({ status: 'Gift Nifty proxy running ✓', source: 'Yahoo Finance (^NSEI)' });
});

// ── GET /quote ────────────────────────────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(TICKER)}?interval=1m&range=1d`;
    const r   = await fetch(url, { headers: yahooHeaders() });
    const json = await r.json();
    const meta = json?.chart?.result?.[0]?.meta;
    if (!meta) throw new Error('No data from Yahoo');

    const price     = meta.regularMarketPrice;
    const prevClose = meta.previousClose || meta.chartPreviousClose;
    const change    = price - prevClose;
    const changePct = (change / prevClose) * 100;

    res.json({
      ok:        true,
      price:     price.toFixed(2),
      prevClose: prevClose.toFixed(2),
      change:    change.toFixed(2),
      changePct: changePct.toFixed(2),
      high:      meta.regularMarketDayHigh?.toFixed(2),
      low:       meta.regularMarketDayLow?.toFixed(2),
      open:      meta.regularMarketOpen?.toFixed(2),
      volume:    meta.regularMarketVolume,
      time:      new Date().toISOString(),
      source:    'Yahoo Finance ^NSEI',
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ── GET /history ──────────────────────────────────────────────
app.get('/history', async (req, res) => {
  const resolution = req.query.resolution || '5';
  const { interval, range } = INTERVAL_MAP[resolution] || INTERVAL_MAP['5'];

  try {
    const url  = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(TICKER)}` +
      `?interval=${interval}&range=${range}&includePrePost=false`;
    const r    = await fetch(url, { headers: yahooHeaders() });
    const json = await r.json();
    const result = json?.chart?.result?.[0];
    if (!result) throw new Error('No chart data from Yahoo');

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

    res.json({ ok: true, candles, source: 'Yahoo Finance ^NSEI' });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
const PAIR_ID = '1209767'; // Gift Nifty 50 GIFc1

const UA = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
];
const getUA = () => UA[Math.floor(Math.random() * UA.length)];

function headers() {
  return {
    'User-Agent':       getUA(),
    'Accept':           'application/json, text/plain, */*',
    'Accept-Language':  'en-US,en;q=0.9',
    'Accept-Encoding':  'gzip, deflate, br',
    'Referer':          'https://in.investing.com/indices/gift-nifty-50-c1-futures-chart',
    'Origin':           'https://in.investing.com',
    'domain-id':        'in',
    'X-Requested-With': 'XMLHttpRequest',
  };
}

app.get('/', (req, res) => {
  res.json({ status: 'Gift Nifty proxy running ✓' });
});

// ── /quote ────────────────────────────────────────────────────
app.get('/quote', async (req, res) => {
  try {
    const url  = `https://api.investing.com/api/financialdata/${PAIR_ID}/?fields-list=id,name,lastNumeric,last,lastClose,change,changePercent,high,low,open,volume,time&lang_id=56&domain_id=in`;
    const r    = await fetch(url, { headers: headers() });
    const text = await r.text();
    if (text.trim().startsWith('<')) throw new Error('HTML response — blocked');
    const data = JSON.parse(text);
    const q    = data?.data?.[0] || {};
    res.json({
      ok: true,
      price: q.lastNumeric || q.last,
      prevClose: q.lastClose,
      change: q.change,
      changePct: q.changePercent,
      high: q.high, low: q.low, open: q.open, volume: q.volume, time: q.time,
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

// ── /history ──────────────────────────────────────────────────
app.get('/history', async (req, res) => {
  const resolution = req.query.resolution || '5';
  const now  = Math.floor(Date.now() / 1000);
  const from = parseInt(req.query.from) || now - 86400;
  const to   = parseInt(req.query.to)   || now;

  const tfMap = { '1':'PT1M','5':'PT5M','15':'PT15M','30':'PT30M','60':'PT1H','D':'P1D','W':'P1W' };

  // Try 1: TVC endpoint
  try {
    const tvcUrl = `https://tvc4.investing.com/${Math.floor(Date.now()/1000)}/1/1/8/history` +
      `?symbol=${PAIR_ID}&resolution=${resolution}&from=${from}&to=${to}`;
    const r    = await fetch(tvcUrl, { headers: headers() });
    const text = await r.text();
    if (!text.trim().startsWith('<')) {
      const data = JSON.parse(text);
      if (data?.s === 'ok' && data.t?.length) {
        const candles = data.t.map((t, i) => ({
          time: t, open: data.o[i], high: data.h[i], low: data.l[i], close: data.c[i],
        })).filter(c => c.close);
        return res.json({ ok: true, candles, source: 'tvc' });
      }
    }
    throw new Error('TVC blocked or empty');
  } catch (e1) {

    // Try 2: chart historical API
    try {
      const period   = resolution === 'D' ? 'P1Y' : resolution === '60' ? 'P1M' : 'P1W';
      const interval = tfMap[resolution] || 'PT5M';
      const apiUrl   = `https://api.investing.com/api/financialdata/${PAIR_ID}/historical/chart/` +
        `?period=${period}&interval=${interval}&pointscount=120`;
      const r2    = await fetch(apiUrl, { headers: headers() });
      const text2 = await r2.text();
      if (text2.trim().startsWith('<')) throw new Error('API also blocked');
      const data2   = JSON.parse(text2);
      const candles = (data2?.data?.chart || []).map(row => ({
        time: Math.floor(row[0] / 1000), open: row[1], high: row[2], low: row[3], close: row[4],
      })).filter(c => c.close);
      return res.json({ ok: true, candles, source: 'chart-api' });
    } catch (e2) {

      // Try 3: historical data endpoint
      try {
        const fromDate = new Date(from*1000).toISOString().split('T')[0];
        const toDate   = new Date(to*1000).toISOString().split('T')[0];
        const tfMap2   = { '1':'Minutes1','5':'Minutes5','15':'Minutes15','60':'Hours1','D':'Daily' };
        const tf       = tfMap2[resolution] || 'Minutes5';
        const apiUrl3  = `https://api.investing.com/api/financialdata/historical/${PAIR_ID}` +
          `?start-date=${fromDate}&end-date=${toDate}&time-frame=${tf}&add-missing-rows=false`;
        const r3    = await fetch(apiUrl3, { headers: headers() });
        const text3 = await r3.text();
        if (text3.trim().startsWith('<')) throw new Error('All endpoints blocked');
        const data3   = JSON.parse(text3);
        const candles = (data3?.data || []).map(row => ({
          time:  Math.floor(new Date(row.rowDateRaw || row.rowDate).getTime() / 1000),
          open:  parseFloat(row.last_open  || 0),
          high:  parseFloat(row.last_max   || 0),
          low:   parseFloat(row.last_min   || 0),
          close: parseFloat(row.last_close || row.last || 0),
        })).filter(c => c.close).reverse();
        return res.json({ ok: true, candles, source: 'historical-api' });
      } catch (e3) {
        res.status(500).json({ ok: false, error: e1.message, e2: e2.message, e3: e3.message });
      }
    }
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
