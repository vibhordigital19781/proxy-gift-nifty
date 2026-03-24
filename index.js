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
