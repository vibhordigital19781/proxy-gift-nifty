<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bazaar Watch — India's Market Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Teko:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>
  <style>
    :root{
      --saffron:#FF9933;--ig:#138808;
      --bg:#060a0e;--bg2:#0a0f16;--bg3:#0d1421;
      --border:#141e2e;--border2:#1a2535;
      --text:#c9d8e8;--text2:#7a96ab;--text3:#2d4257;
      --up:#4caf50;--dn:#f44336;--gold:#d4af37;
    }
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{background:var(--bg);color:var(--text);font-family:'DM Sans',sans-serif;min-height:100vh;overflow-x:hidden}
    ::-webkit-scrollbar{width:5px;height:5px}
    ::-webkit-scrollbar-track{background:var(--bg)}
    ::-webkit-scrollbar-thumb{background:var(--border2);border-radius:4px}
    @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.15;transform:scale(.6)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
    .live-dot{animation:pulse 2s ease-in-out infinite}

    /* ── NAV ── */
    .topnav{position:sticky;top:0;z-index:500;background:rgba(6,10,14,.97);border-bottom:1px solid var(--border);backdrop-filter:blur(12px);height:54px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;gap:12px}
    .nav-left{display:flex;align-items:center;gap:12px;min-width:0}
    .logo{display:flex;align-items:center;gap:9px;flex-shrink:0}
    .flag{display:flex;flex-direction:column;gap:2px}
    .flag span{width:3px;height:5px;border-radius:2px}
    .logo-text{font-family:'Teko',sans-serif;font-size:21px;letter-spacing:3px;color:#e2e8f0;line-height:1}
    .logo-sub{font-size:8px;color:var(--text3);letter-spacing:2px}
    .nav-div{width:1px;height:24px;background:var(--border2);flex-shrink:0}
    .nav-tabs{display:flex;gap:2px;flex-wrap:nowrap}
    .nav-tab{padding:5px 11px;border-radius:5px;border:none;cursor:pointer;font-size:12px;font-family:'DM Sans',sans-serif;background:transparent;color:var(--text3);transition:all .15s;white-space:nowrap}
    .nav-tab:hover{color:var(--saffron)}
    .nav-tab.active{background:rgba(255,153,51,.14);color:var(--saffron);font-weight:600}
    .nav-right{display:flex;align-items:center;gap:10px;flex-shrink:0}
    .mkt-badge{font-family:'JetBrains Mono',monospace;font-size:9px;padding:2px 7px;border-radius:3px;letter-spacing:1px;font-weight:700;white-space:nowrap}
    .live-wrap{display:flex;align-items:center;gap:5px;font-family:'JetBrains Mono',monospace;font-size:11px}
    .clock{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3);white-space:nowrap}

    /* ── TICKER ── */
    .ticker-wrap{background:var(--bg2);border-bottom:1px solid var(--border);height:44px;overflow:hidden}

    /* ── CONTENT ── */
    .content{padding:14px 20px 40px}
    .tab-panel{display:none}.tab-panel.active{display:block}

    /* ── SECTION HEADER ── */
    .sh{display:flex;align-items:center;gap:10px;margin-bottom:12px;margin-top:2px}
    .sh-t{font-family:'Teko',sans-serif;font-size:16px;letter-spacing:2px;line-height:1}
    .sh-s{font-size:9px;color:var(--text3);letter-spacing:1px;margin-top:1px}
    .sh-l{flex:1;height:1px}

    /* ── GRIDS ── */
    .g6{display:grid;grid-template-columns:repeat(6,1fr);gap:10px}
    .g5{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
    .g4{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
    .g3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
    .g2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .gnews{display:grid;grid-template-columns:1.6fr 1fr;gap:14px}
    .gap{margin-bottom:16px}

    /* ── CARD ── */
    .card{background:var(--bg2);border:1px solid var(--border);border-radius:9px;padding:13px 15px;overflow:hidden}
    .ci{box-shadow:0 0 0 1px rgba(255,153,51,.09),0 4px 20px rgba(255,153,51,.04)}
    .cg{box-shadow:0 0 0 1px rgba(212,175,55,.15),0 4px 20px rgba(212,175,55,.05)}
    .cu{box-shadow:0 0 0 1px rgba(65,132,228,.1),0 4px 20px rgba(65,132,228,.04)}

    /* ── PRICE CARD ── */
    .pc{background:var(--bg2);border:1px solid var(--border);border-radius:9px;padding:13px 15px;position:relative;overflow:hidden;animation:fadeUp .3s ease forwards}
    .pc-lbl{font-family:'Teko',sans-serif;font-size:11px;letter-spacing:1.5px;margin-bottom:3px}
    .pc-price{font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:700;margin:3px 0;min-height:27px}
    .pc-sub{font-size:9px;color:var(--text3);margin-bottom:7px}
    .chip{display:inline-flex;align-items:center;padding:2px 7px;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:10px;font-weight:700;min-width:60px}
    .up-chip{background:rgba(76,175,80,.1);color:var(--up);border:1px solid rgba(76,175,80,.2)}
    .dn-chip{background:rgba(244,67,54,.1);color:var(--dn);border:1px solid rgba(244,67,54,.2)}
    .na-chip{background:rgba(100,100,100,.1);color:var(--text3);border:1px solid rgba(100,100,100,.2)}
    .shine{position:absolute;top:0;right:0;width:55px;height:55px;background:radial-gradient(circle,rgba(255,153,51,.05),transparent);pointer-events:none}

    /* ── GIFT NIFTY BANNER ── */
    .gn-banner{
      background:linear-gradient(135deg,rgba(255,153,51,.1),rgba(19,136,8,.06));
      border:1px solid rgba(255,153,51,.25);border-radius:10px;
      padding:14px 18px;margin-bottom:16px;
      display:grid;grid-template-columns:1fr 2fr;gap:16px;align-items:start;
    }
    .gn-info h2{font-family:'Teko',sans-serif;font-size:14px;letter-spacing:2px;color:var(--saffron);margin-bottom:4px}
    .gn-info p{font-size:11px;color:var(--text3);line-height:1.5;margin-bottom:10px}
    .gn-link{display:inline-flex;align-items:center;gap:5px;background:rgba(255,153,51,.1);border:1px solid rgba(255,153,51,.25);border-radius:5px;padding:5px 12px;font-size:11px;color:var(--saffron);text-decoration:none;font-weight:600;transition:all .15s}
    .gn-link:hover{background:rgba(255,153,51,.2)}

    /* ── TV WIDGET ── */
    .tv{width:100%;border-radius:6px;overflow:hidden}
    .h140{height:140px}.h300{height:300px}.h360{height:360px}
    .h400{height:400px}.h450{height:450px}.h500{height:500px}.h600{height:600px}

    footer{text-align:center;padding:14px 20px;font-size:9px;color:var(--text3);letter-spacing:1px;border-top:1px solid var(--border)}
    footer a{color:var(--text3);text-decoration:none}footer a:hover{color:var(--saffron)}

    @media(max-width:1300px){.g6{grid-template-columns:repeat(3,1fr)}.g5{grid-template-columns:repeat(3,1fr)}.g4{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:900px){.gnews,.g3,.g2,.gn-banner{grid-template-columns:1fr}.g6,.g5,.g4{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:600px){.g6,.g5,.g4{grid-template-columns:1fr}.nav-tabs{display:none}}
  </style>
</head>
<body>

<!-- ══ NAV ══ -->
<nav class="topnav">
  <div class="nav-left">
    <div class="logo">
      <div class="flag">
        <span style="background:#FF9933"></span>
        <span style="background:#fff"></span>
        <span style="background:#138808"></span>
      </div>
      <div>
        <div class="logo-text">BAZAAR WATCH</div>
        <div class="logo-sub">NSE · BSE · MCX · GLOBAL</div>
      </div>
    </div>
    <div class="nav-div"></div>
    <nav class="nav-tabs">
      <button class="nav-tab active" onclick="ST('home',this)">🌅 Markets</button>
      <button class="nav-tab" onclick="ST('commodities',this)">Commodities</button>
      <button class="nav-tab" onclick="ST('global',this)">Global</button>
      <button class="nav-tab" onclick="ST('heatmap',this)">🔥 Heatmap</button>
    </nav>
  </div>
  <div class="nav-right">
    <span class="mkt-badge" id="mkt-badge" style="color:#4caf50;background:rgba(76,175,80,.12);border:1px solid rgba(76,175,80,.2)">MARKETS</span>
    <div class="live-wrap">
      <div class="live-dot" id="live-dot" style="width:7px;height:7px;border-radius:50%;background:#4caf50"></div>
      <span id="live-lbl" style="color:#4caf50">LIVE</span>
    </div>
    <div class="clock" id="clock"></div>
  </div>
</nav>

<!-- ══ TICKER ══ -->
<div class="ticker-wrap">
  <div class="tradingview-widget-container" style="height:44px">
    <div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
    {"symbols":[
      {"proName":"NSE:NIFTY","title":"Nifty 50"},
      {"proName":"BSE:SENSEX","title":"Sensex"},
      {"proName":"NSE:BANKNIFTY","title":"Bank Nifty"},
      {"proName":"NSE:CNXIT","title":"Nifty IT"},
      {"proName":"COMEX:GC1!","title":"Gold"},
      {"proName":"COMEX:SI1!","title":"Silver"},
      {"proName":"NYMEX:CL1!","title":"Crude Oil"},
      {"proName":"FX_IDC:USDINR","title":"USD/INR"},
      {"proName":"TVC:US10Y","title":"US 10Y"},
      {"proName":"COMEX:HG1!","title":"Copper"},
      {"proName":"TVC:ALUMINUM","title":"Aluminium"},
      {"proName":"TVC:ZINC","title":"Zinc"}
    ],"showSymbolLogo":true,"isTransparent":true,"displayMode":"adaptive","colorTheme":"dark","locale":"en"}
    </script>
  </div>
</div>

<div class="content">

<!-- ════════════════════════════════════
     HOME TAB — Markets + Pre-Market merged
════════════════════════════════════ -->
<div id="tab-home" class="tab-panel active">

  <!-- GIFT NIFTY + GIFT BANK NIFTY — side by side -->
  <div class="g2 gap">

    <!-- GIFT NIFTY 50 -->
    <div class="card" style="border-color:rgba(255,153,51,0.25);background:linear-gradient(135deg,rgba(255,153,51,0.06),rgba(19,136,8,0.03))">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:6px">
        <div>
          <div style="font-family:'Teko',sans-serif;font-size:15px;letter-spacing:2px;color:#FF9933">&#127873; GIFT NIFTY 50 &mdash; LIVE</div>
          <div style="font-size:9px;color:var(--text3);letter-spacing:1px">NSE IFSC &middot; GIFT CITY &middot; investing.com &middot; 21 hrs/day</div>
        </div>
        <div class="live-dot" style="width:7px;height:7px;border-radius:50%;background:#4caf50" id="gn-dot"></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:14px">
        <span style="font-family:'JetBrains Mono',monospace;font-size:32px;font-weight:700;color:var(--text)" id="gn-price">&mdash;</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:13px" id="gn-chg">&mdash;</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'JetBrains Mono',monospace">High</div>
          <div style="font-size:13px;font-family:'JetBrains Mono',monospace;color:#4caf50;margin-top:2px" id="gn-high">&mdash;</div>
        </div>
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'JetBrains Mono',monospace">Low</div>
          <div style="font-size:13px;font-family:'JetBrains Mono',monospace;color:#f44336;margin-top:2px" id="gn-low">&mdash;</div>
        </div>
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'JetBrains Mono',monospace">Prev Close</div>
          <div style="font-size:13px;font-family:'JetBrains Mono',monospace;color:var(--text);margin-top:2px" id="gn-prev">&mdash;</div>
        </div>
      </div>
      <div style="font-size:9px;color:var(--text3);font-family:'JetBrains Mono',monospace" id="gn-ts">Connecting&hellip;</div>
    </div>

    <!-- GIFT BANK NIFTY -->
    <div class="card" style="border-color:rgba(129,199,132,0.25);background:linear-gradient(135deg,rgba(129,199,132,0.06),rgba(19,136,8,0.03))">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:6px">
        <div>
          <div style="font-family:'Teko',sans-serif;font-size:15px;letter-spacing:2px;color:#81c784">&#127968; GIFT BANK NIFTY &mdash; LIVE</div>
          <div style="font-size:9px;color:var(--text3);letter-spacing:1px">NSE IFSC &middot; GIFT CITY &middot; investing.com &middot; 21 hrs/day</div>
        </div>
        <div class="live-dot" style="width:7px;height:7px;border-radius:50%;background:#4caf50" id="gbn-dot"></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:14px">
        <span style="font-family:'JetBrains Mono',monospace;font-size:32px;font-weight:700;color:var(--text)" id="gbn-price">&mdash;</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:13px" id="gbn-chg">&mdash;</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px">
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'JetBrains Mono',monospace">High</div>
          <div style="font-size:13px;font-family:'JetBrains Mono',monospace;color:#4caf50;margin-top:2px" id="gbn-high">&mdash;</div>
        </div>
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'JetBrains Mono',monospace">Low</div>
          <div style="font-size:13px;font-family:'JetBrains Mono',monospace;color:#f44336;margin-top:2px" id="gbn-low">&mdash;</div>
        </div>
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'JetBrains Mono',monospace">Prev Close</div>
          <div style="font-size:13px;font-family:'JetBrains Mono',monospace;color:var(--text);margin-top:2px" id="gbn-prev">&mdash;</div>
        </div>
      </div>
      <div style="font-size:9px;color:var(--text3);font-family:'JetBrains Mono',monospace" id="gbn-ts">Connecting&hellip;</div>
    </div>

  </div>

  <!-- AI MARKET SUMMARY -->
  <div class="card gap" style="border-color:rgba(103,232,249,0.2);background:linear-gradient(135deg,rgba(103,232,249,0.04),rgba(139,92,246,0.03))">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-family:'Teko',sans-serif;font-size:15px;letter-spacing:2px;color:#67e8f9">&#129302; AI MARKET SUMMARY</div>
        <div style="font-size:9px;color:var(--text3);letter-spacing:1px">DEEPSEEK &middot; GLOBAL CUES &middot; NIFTY OUTLOOK &middot; AUTO-UPDATED</div>
      </div>
      <span style="font-size:9px;color:var(--text3);font-family:'JetBrains Mono',monospace" id="summary-ts"></span>
    </div>
    <div id="summary-text" style="font-size:13px;color:var(--text);line-height:1.8;min-height:60px;font-family:'DM Sans',sans-serif">
      <span style="color:var(--text3)">Loading market summary&hellip;</span>
    </div>
    <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px">
      <span style="font-size:9px;color:var(--text3)">Powered by DeepSeek AI &middot; Based on live market data</span>
      <button onclick="loadSummary()" style="background:rgba(103,232,249,0.1);border:1px solid rgba(103,232,249,0.3);color:#67e8f9;font-size:10px;padding:3px 10px;border-radius:4px;cursor:pointer;font-family:'JetBrains Mono',monospace">&#8635; Refresh</button>
    </div>
  </div>

  <!-- INDIAN INDICES — from Render backend -->
  <div class="sh">
    <span style="font-size:15px">🇮🇳</span>
    <div><div class="sh-t" style="color:#FF9933">INDIAN INDICES</div><div class="sh-s">NSE · BSE · LIVE VIA BACKEND</div></div>
    <div class="sh-l" style="background:linear-gradient(90deg,rgba(255,153,51,.3),transparent)"></div>
    <span style="font-size:9px;color:var(--text3);font-family:'JetBrains Mono',monospace" id="idx-ts"></span>
  </div>
  <div class="g6 gap" id="indian-grid">
    <div class="pc ci"><div class="pc-lbl" style="color:#f0c040">NIFTY 50</div><div class="pc-price" id="p-n50" style="color:#f0c040">—</div><div class="pc-sub">NSE</div><span class="chip na-chip" id="c-n50">—</span><div class="shine"></div></div>
    <div class="pc ci"><div class="pc-lbl" style="color:#4fc3f7">SENSEX</div><div class="pc-price" id="p-sx" style="color:#4fc3f7">—</div><div class="pc-sub">BSE</div><span class="chip na-chip" id="c-sx">—</span><div class="shine"></div></div>
    <div class="pc ci"><div class="pc-lbl" style="color:#81c784">BANK NIFTY</div><div class="pc-price" id="p-bn" style="color:#81c784">—</div><div class="pc-sub">NSE</div><span class="chip na-chip" id="c-bn">—</span><div class="shine"></div></div>
    <div class="pc ci"><div class="pc-lbl" style="color:#ce93d8">NIFTY IT</div><div class="pc-price" id="p-it" style="color:#ce93d8">—</div><div class="pc-sub">NSE</div><span class="chip na-chip" id="c-it">—</span><div class="shine"></div></div>
    <div class="pc ci"><div class="pc-lbl" style="color:#ffb74d">NIFTY MIDCAP</div><div class="pc-price" id="p-mc" style="color:#ffb74d">—</div><div class="pc-sub">NSE</div><span class="chip na-chip" id="c-mc">—</span><div class="shine"></div></div>
    <div class="pc ci"><div class="pc-lbl" style="color:#ef9a9a">INDIA VIX</div><div class="pc-price" id="p-vix" style="color:#ef9a9a">—</div><div class="pc-sub">NSE Volatility</div><span class="chip na-chip" id="c-vix">—</span><div class="shine"></div></div>
  </div>

  <!-- PRE-MARKET CUES -->
  <div class="sh">
    <span style="font-size:15px">🌙</span>
    <div><div class="sh-t" style="color:#67e8f9">PRE-MARKET CUES</div><div class="sh-s">US FUTURES · FOREX · BACKEND</div></div>
    <div class="sh-l" style="background:linear-gradient(90deg,rgba(103,232,249,.3),transparent)"></div>
  </div>
  <div class="g4 gap">
    <!-- Dow Jones ETF (DIA) — Finnhub -->
    <div class="pc cu">
      <div class="pc-lbl" style="color:#4184e4">⚡ DOW (DIA ETF)</div>
      <div class="pc-price" id="p-dow" style="color:#4184e4">—</div>
      <div class="pc-sub">Finnhub · Free tier ETF proxy</div>
      <span class="chip na-chip" id="c-dow">—</span>
    </div>
    <!-- S&P 500 ETF (SPY) — Finnhub -->
    <div class="pc cu">
      <div class="pc-lbl" style="color:#a78bfa">📈 S&P 500 (SPY)</div>
      <div class="pc-price" id="p-sp" style="color:#a78bfa">—</div>
      <div class="pc-sub">Finnhub · Free tier ETF proxy</div>
      <span class="chip na-chip" id="c-sp">—</span>
    </div>
    <!-- Nasdaq ETF (QQQ) — Finnhub -->
    <div class="pc cu">
      <div class="pc-lbl" style="color:#67e8f9">💻 NASDAQ (QQQ)</div>
      <div class="pc-price" id="p-nq" style="color:#67e8f9">—</div>
      <div class="pc-sub">Finnhub · Free tier ETF proxy</div>
      <span class="chip na-chip" id="c-nq">—</span>
    </div>
    <!-- USD/INR — TradingView (always works) -->
    <div class="card">
      <div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#4fc3f7;margin-bottom:5px">💵 USD/INR</div>
      <div class="tv h140">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
        {"symbol":"FX_IDC:USDINR","width":"100%","height":140,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}
        </script>
      </div>
    </div>
  </div>

  <!-- KEY METRICS ROW -->
  <div class="sh">
    <span style="font-size:15px">💱</span>
    <div class="sh-t" style="color:#80cbc4">KEY METRICS</div>
    <div class="sh-l" style="background:linear-gradient(90deg,rgba(128,203,196,.3),transparent)"></div>
  </div>
  <div class="g4 gap">
    <!-- Gold — gold-api.com via backend -->
    <div class="pc cg">
      <div class="pc-lbl" style="color:#d4af37">🥇 GOLD (XAU/USD)</div>
      <div class="pc-price" id="p-gold" style="color:#d4af37">—</div>
      <div class="pc-sub">COMEX · USD/oz · gold-api.com</div>
      <span class="chip na-chip" id="c-gold">—</span>
    </div>
    <!-- Silver — gold-api.com via backend -->
    <div class="pc cg">
      <div class="pc-lbl" style="color:#adb5bd">🥈 SILVER (XAG/USD)</div>
      <div class="pc-price" id="p-silver" style="color:#adb5bd">—</div>
      <div class="pc-sub">COMEX · USD/oz · gold-api.com</div>
      <span class="chip na-chip" id="c-silver">—</span>
    </div>
    <!-- Crude Oil — Finnhub via backend -->
    <div class="pc">
      <div class="pc-lbl" style="color:#ffb74d">🛢️ CRUDE OIL (WTI)</div>
      <div class="pc-price" id="p-crude" style="color:#ffb74d">—</div>
      <div class="pc-sub">NYMEX · USD/bbl · Finnhub</div>
      <span class="chip na-chip" id="c-crude">—</span>
    </div>
    <!-- Dollar Index / US 10Y — TradingView -->
    <div class="card">
      <div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#ef9a9a;margin-bottom:5px">🏛️ US 10Y YIELD</div>
      <div class="tv h140">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
        {"symbol":"TVC:US10Y","width":"100%","height":140,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}
        </script>
      </div>
    </div>
  </div>

  <!-- NEWS + WORLD MARKETS -->
  <div class="gnews gap">
    <div class="card">
      <div class="sh" style="margin-bottom:10px"><span style="font-size:15px">📰</span><div><div class="sh-t" style="color:#FF9933">FINANCIAL NEWS</div><div class="sh-s">INDIA · GLOBAL · LIVE</div></div></div>
      <div class="tv h450">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-timeline.js" async>
        {"feedMode":"market","market":"stock","isTransparent":true,"displayMode":"regular","width":"100%","height":450,"colorTheme":"dark","locale":"en"}
        </script>
      </div>
    </div>
    <div class="card">
      <div class="sh" style="margin-bottom:10px"><span style="font-size:15px">🌏</span><div><div class="sh-t" style="color:#4caf50">WORLD MARKETS</div></div></div>
      <div class="tv h450">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
        {"colorTheme":"dark","dateRange":"1D","showChart":false,"locale":"en","isTransparent":true,"showSymbolLogo":true,"width":"100%","height":450,
        "tabs":[{"title":"Indices","symbols":[
          {"s":"INDEX:NKY","d":"Nikkei 225"},{"s":"HSI:HSI","d":"Hang Seng"},
          {"s":"SSE:000001","d":"Shanghai"},{"s":"INDEX:UKX","d":"FTSE 100"},
          {"s":"XETR:DAX","d":"DAX"},{"s":"INDEX:CAC40","d":"CAC 40"},
          {"s":"KRX:KOSPI","d":"KOSPI"},{"s":"ASX:XJO","d":"ASX 200"},
          {"s":"BMFBOVESPA:IBOV","d":"IBOVESPA"},{"s":"SGX:STI","d":"STI"}
        ],"originalTitle":"Indices"}]}
        </script>
      </div>
    </div>
  </div>

  <!-- ASIAN MARKETS -->
  <div class="card gap">
    <div class="sh" style="margin-bottom:10px"><span style="font-size:15px">🌏</span><div><div class="sh-t" style="color:#4caf50">ASIAN MARKETS — PRE-OPEN CUES</div><div class="sh-s">NIKKEI · HANG SENG · SHANGHAI · KOSPI</div></div></div>
    <div class="tv h400">
      <div class="tradingview-widget-container__widget"></div>
      <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
      {"colorTheme":"dark","dateRange":"1D","showChart":true,"locale":"en","isTransparent":true,"showSymbolLogo":true,"width":"100%","height":400,
      "tabs":[{"title":"Asia","symbols":[
        {"s":"INDEX:NKY","d":"Nikkei 225"},{"s":"HSI:HSI","d":"Hang Seng"},
        {"s":"SSE:000001","d":"Shanghai"},{"s":"KRX:KOSPI","d":"KOSPI"},
        {"s":"ASX:XJO","d":"ASX 200"},{"s":"SGX:STI","d":"Singapore"},
        {"s":"IDX:COMPOSITE","d":"Jakarta"},{"s":"TWSE:TAIEX","d":"Taiwan"}
      ],"originalTitle":"Asia"}]}
      </script>
    </div>
  </div>

</div><!-- end home -->

<!-- ════ COMMODITIES ════ -->
<div id="tab-commodities" class="tab-panel">

  <div class="sh"><span style="font-size:15px">🥇</span><div><div class="sh-t" style="color:#d4af37">PRECIOUS METALS</div><div class="sh-s">COMEX · USD · LIVE PRICE + CHART</div></div><div class="sh-l" style="background:linear-gradient(90deg,rgba(212,175,55,.3),transparent)"></div></div>
  <div class="g4 gap">
    <div class="pc cg"><div class="pc-lbl" style="color:#d4af37">🥇 GOLD (XAU/USD)</div><div class="pc-price" id="p-gold2" style="color:#d4af37">—</div><div class="pc-sub">USD/oz · gold-api.com</div><span class="chip na-chip" id="c-gold2">—</span></div>
    <div class="pc cg"><div class="pc-lbl" style="color:#adb5bd">🥈 SILVER (XAG/USD)</div><div class="pc-price" id="p-silver2" style="color:#adb5bd">—</div><div class="pc-sub">USD/oz · gold-api.com</div><span class="chip na-chip" id="c-silver2">—</span></div>
    <div class="pc"><div class="pc-lbl" style="color:#ffb74d">🛢️ CRUDE WTI</div><div class="pc-price" id="p-crude2" style="color:#ffb74d">—</div><div class="pc-sub">USD/bbl · Finnhub</div><span class="chip na-chip" id="c-crude2">—</span></div>
    <div class="pc"><div class="pc-lbl" style="color:#80cbc4">🔥 NATURAL GAS</div><div class="pc-price">—</div><div class="pc-sub">USD/mmBtu · TradingView chart below</div><span class="chip na-chip">—</span></div>
  </div>
  <div class="g2 gap">
    <div class="card cg">
      <div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#d4af37;margin-bottom:7px">🥇 GOLD — COMEX CHART</div>
      <div class="tv h300"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>{"autosize":true,"symbol":"COMEX:GC1!","interval":"D","timezone":"Asia/Kolkata","theme":"dark","style":"1","locale":"en","enable_publishing":false,"backgroundColor":"rgba(10,15,22,1)","gridColor":"rgba(20,30,46,1)","save_image":false,"support_host":"https://www.tradingview.com"}</script></div>
    </div>
    <div class="card cg">
      <div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#adb5bd;margin-bottom:7px">🥈 SILVER — COMEX CHART</div>
      <div class="tv h300"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>{"autosize":true,"symbol":"COMEX:SI1!","interval":"D","timezone":"Asia/Kolkata","theme":"dark","style":"1","locale":"en","enable_publishing":false,"backgroundColor":"rgba(10,15,22,1)","gridColor":"rgba(20,30,46,1)","save_image":false,"support_host":"https://www.tradingview.com"}</script></div>
    </div>
  </div>

  <div class="sh"><span style="font-size:15px">⚙️</span><div><div class="sh-t" style="color:#ffb74d">BASE METALS</div><div class="sh-s">COMEX/LME · USD</div></div><div class="sh-l" style="background:linear-gradient(90deg,rgba(255,183,77,.3),transparent)"></div></div>
  <div class="g4 gap">
    <div class="card"><div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#e07b4a;margin-bottom:5px">🔶 COPPER — COMEX</div><div class="tv h140"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"COMEX:HG1!","width":"100%","height":140,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="card"><div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#90caf9;margin-bottom:5px">🔷 ALUMINIUM — LME</div><div class="tv h140"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"TVC:ALUMINUM","width":"100%","height":140,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="card"><div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#4fc3f7;margin-bottom:5px">🔵 ZINC — LME</div><div class="tv h140"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"TVC:ZINC","width":"100%","height":140,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="card"><div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#b39ddb;margin-bottom:5px">⚫ NICKEL — LME</div><div class="tv h140"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"TVC:NICKEL","width":"100%","height":140,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
  </div>

  <div class="sh"><span style="font-size:15px">⚡</span><div><div class="sh-t" style="color:#ffb74d">ENERGY</div><div class="sh-s">NYMEX · USD</div></div><div class="sh-l" style="background:linear-gradient(90deg,rgba(255,183,77,.3),transparent)"></div></div>
  <div class="g2 gap">
    <div class="card"><div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#ffb74d;margin-bottom:7px">🛢️ CRUDE OIL WTI — NYMEX</div><div class="tv h300"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>{"autosize":true,"symbol":"NYMEX:CL1!","interval":"D","timezone":"Asia/Kolkata","theme":"dark","style":"1","locale":"en","enable_publishing":false,"backgroundColor":"rgba(10,15,22,1)","gridColor":"rgba(20,30,46,1)","save_image":false,"support_host":"https://www.tradingview.com"}</script></div></div>
    <div class="card"><div style="font-family:'Teko';font-size:12px;letter-spacing:1.5px;color:#80cbc4;margin-bottom:7px">🔥 NATURAL GAS — NYMEX</div><div class="tv h300"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>{"autosize":true,"symbol":"NYMEX:NG1!","interval":"D","timezone":"Asia/Kolkata","theme":"dark","style":"1","locale":"en","enable_publishing":false,"backgroundColor":"rgba(10,15,22,1)","gridColor":"rgba(20,30,46,1)","save_image":false,"support_host":"https://www.tradingview.com"}</script></div></div>
  </div>

</div><!-- end commodities -->

<!-- ════ GLOBAL ════ -->
<div id="tab-global" class="tab-panel">
  <div class="card gap">
    <div class="sh" style="margin-bottom:10px"><span style="font-size:15px">🌍</span><div><div class="sh-t" style="color:#4caf50">GLOBAL MARKETS OVERVIEW</div><div class="sh-s">INDICES · FUTURES · FOREX · BONDS</div></div></div>
    <div class="tv h600"><div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
    {"colorTheme":"dark","dateRange":"1D","showChart":true,"locale":"en","isTransparent":true,"showSymbolLogo":true,"width":"100%","height":600,
    "tabs":[
      {"title":"Indices","symbols":[{"s":"INDEX:NKY","d":"Nikkei 225"},{"s":"HSI:HSI","d":"Hang Seng"},{"s":"INDEX:UKX","d":"FTSE 100"},{"s":"XETR:DAX","d":"DAX"},{"s":"INDEX:CAC40","d":"CAC 40"},{"s":"KRX:KOSPI","d":"KOSPI"},{"s":"ASX:XJO","d":"ASX 200"},{"s":"BMFBOVESPA:IBOV","d":"IBOVESPA"}],"originalTitle":"Indices"},
      {"title":"Futures","symbols":[{"s":"COMEX:GC1!","d":"Gold"},{"s":"COMEX:SI1!","d":"Silver"},{"s":"NYMEX:CL1!","d":"Crude Oil"},{"s":"COMEX:HG1!","d":"Copper"},{"s":"NYMEX:NG1!","d":"Natural Gas"}],"originalTitle":"Futures"},
      {"title":"Forex","symbols":[{"s":"FX_IDC:USDINR","d":"USD/INR"},{"s":"FX_IDC:EURUSD","d":"EUR/USD"},{"s":"FX_IDC:GBPUSD","d":"GBP/USD"},{"s":"FX_IDC:USDJPY","d":"USD/JPY"},{"s":"TVC:DXY","d":"Dollar Index"}],"originalTitle":"Forex"},
      {"title":"Bonds","symbols":[{"s":"TVC:US10Y","d":"US 10Y"},{"s":"TVC:US02Y","d":"US 2Y"},{"s":"TVC:IN10Y","d":"India 10Y"}],"originalTitle":"Bonds"}
    ]}
    </script></div>
  </div>
  <div class="card gap">
    <div class="sh" style="margin-bottom:10px"><span style="font-size:15px">📅</span><div><div class="sh-t" style="color:#FF9933">ECONOMIC CALENDAR</div><div class="sh-s">GLOBAL EVENTS · INDIA FOCUS</div></div></div>
    <div class="tv h450"><div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-events.js" async>
    {"colorTheme":"dark","isTransparent":true,"width":"100%","height":450,"locale":"en","importanceFilter":"-1,0,1","countryFilter":"in,us,eu,gb,jp,cn,au,ca"}
    </script></div>
  </div>
</div>

<!-- ════ HEATMAP ════ -->
<div id="tab-heatmap" class="tab-panel">
  <div class="card gap">
    <div class="sh" style="margin-bottom:10px"><span style="font-size:15px">🔥</span><div><div class="sh-t" style="color:#FF9933">NIFTY 500 — SECTORAL HEATMAP</div><div class="sh-s">NSE · SECTOR GROUPED · SIZE = MARKET CAP</div></div></div>
    <div class="tv h500"><div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js" async>
    {"exchanges":[],"dataSource":"NIFTY500","grouping":"sector","blockSize":"market_cap_basic","blockColor":"change","locale":"en","symbolUrl":"","colorTheme":"dark","hasTopBar":true,"isDataSetEnabled":true,"isZoomEnabled":true,"hasSymbolTooltip":true,"isMonoSize":false,"width":"100%","height":500}
    </script></div>
  </div>
  <div class="card gap">
    <div class="sh" style="margin-bottom:10px"><span style="font-size:15px">📊</span><div><div class="sh-t" style="color:#f0c040">NIFTY 50 — HEATMAP</div><div class="sh-s">NSE · TOP 50 STOCKS</div></div></div>
    <div class="tv h500"><div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js" async>
    {"exchanges":[],"dataSource":"NIFTY50","grouping":"sector","blockSize":"market_cap_basic","blockColor":"change","locale":"en","symbolUrl":"","colorTheme":"dark","hasTopBar":true,"isDataSetEnabled":true,"isZoomEnabled":true,"hasSymbolTooltip":true,"isMonoSize":false,"width":"100%","height":500}
    </script></div>
  </div>
</div>

</div><!-- end content -->

<footer>
  <p>© 2026 Bazaar Watch · India's Market Dashboard · Data: <a href="https://www.tradingview.com" target="_blank">TradingView</a> · <a href="https://finnhub.io" target="_blank">Finnhub</a> · <a href="https://gold-api.com" target="_blank">gold-api.com</a> · NSE · BSE · For informational purposes only</p>
</footer>

<script>
// ── CONFIG ─────────────────────────────────────────────────────────────────────
// Replace with your Render backend URL
const API = 'https://stock-api-8v8d.onrender.com';

// ── TAB SWITCHING ──────────────────────────────────────────────────────────────
function ST(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  if (btn) btn.classList.add('active');
}

// ── CLOCK ──────────────────────────────────────────────────────────────────────
function tick() {
  document.getElementById('clock').textContent = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
  }).format(new Date()) + ' IST';
}
tick(); setInterval(tick, 1000);

// ── MARKET STATUS ──────────────────────────────────────────────────────────────
function mktStatus() {
  const ist = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const t = ist.getHours() * 100 + ist.getMinutes(), wd = ist.getDay() >= 1 && ist.getDay() <= 5;
  let lbl, col, bg;
  if (wd && t >= 915 && t <= 1530)  { lbl='NSE OPEN';   col='#4caf50'; bg='rgba(76,175,80,.12)';  }
  else if (wd && t >= 900 && t<915) { lbl='PRE-OPEN';   col='#FF9933'; bg='rgba(255,153,51,.12)'; }
  else                               { lbl='NSE CLOSED'; col='#ef5350'; bg='rgba(239,83,80,.12)';  }
  const b = document.getElementById('mkt-badge');
  b.textContent = lbl; b.style.color = col; b.style.background = bg; b.style.border = `1px solid ${col}44`;
  document.getElementById('live-dot').style.background = col;
  const ll = document.getElementById('live-lbl');
  ll.style.color = col;
  ll.textContent = lbl === 'NSE OPEN' ? 'LIVE' : lbl;
}
mktStatus(); setInterval(mktStatus, 30000);

// ── HELPERS ────────────────────────────────────────────────────────────────────
const fi = n => n ? parseFloat(n).toLocaleString('en-IN', { maximumFractionDigits: 2 }) : '—';
const fu = n => n ? parseFloat(n).toLocaleString('en-US', { maximumFractionDigits: 2 }) : '—';
const fd = n => n ? parseFloat(n).toFixed(2) : '—';

function setEl(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }

function setChip(id, pch) {
  const el = document.getElementById(id); if (!el || pch == null) return;
  const up = parseFloat(pch) >= 0;
  el.className = 'chip ' + (up ? 'up-chip' : 'dn-chip');
  el.textContent = (up ? '▲ +' : '▼ ') + Math.abs(parseFloat(pch)).toFixed(2) + '%';
}

// ── FETCH FROM RENDER BACKEND ──────────────────────────────────────────────────
async function loadData() {
  try {
    const res  = await fetch(`${API}/api/all`, { signal: AbortSignal.timeout(15000) });
    const data = await res.json();

    // ── Indian indices ────────────────────────────────────────────────────
    const idx = data.indices || {};
    const idxMap = [
      ['nifty50',   'p-n50',  'c-n50',  fi],
      ['sensex',    'p-sx',   'c-sx',   fi],
      ['banknifty', 'p-bn',   'c-bn',   fi],
      ['niftyit',   'p-it',   'c-it',   fi],
      ['midcap100', 'p-mc',   'c-mc',   fi],
      ['indiavix',  'p-vix',  'c-vix',  fu],
    ];
    idxMap.forEach(([key, pid, cid, fmt]) => {
      if (idx[key]) {
        setEl(pid, fmt(idx[key].price));
        setChip(cid, idx[key].pchange);
      }
    });

    // timestamp
    if (data.timestamp) {
      const ts = new Date(data.timestamp).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour12: true });
      setEl('idx-ts', 'Updated ' + ts);
    }

    // ── Metals ───────────────────────────────────────────────────────────
    const met = data.metals || {};
    if (met.gold_usd) {
      setEl('p-gold',   fd(met.gold_usd.price)); setChip('c-gold',   met.gold_usd.pchange);
      setEl('p-gold2',  fd(met.gold_usd.price)); setChip('c-gold2',  met.gold_usd.pchange);
    }
    if (met.silver_usd) {
      setEl('p-silver',  fd(met.silver_usd.price)); setChip('c-silver',  met.silver_usd.pchange);
      setEl('p-silver2', fd(met.silver_usd.price)); setChip('c-silver2', met.silver_usd.pchange);
    }
    if (met.crude_usd) {
      setEl('p-crude',  fd(met.crude_usd.price)); setChip('c-crude',  met.crude_usd.pchange);
      setEl('p-crude2', fd(met.crude_usd.price)); setChip('c-crude2', met.crude_usd.pchange);
    }

    // ── US markets ───────────────────────────────────────────────────────
    const us = data.us || {};
    if (us.dow)    { setEl('p-dow', fu(us.dow.price));    setChip('c-dow', us.dow.pchange);    }
    if (us.sp500)  { setEl('p-sp',  fu(us.sp500.price));  setChip('c-sp',  us.sp500.pchange);  }
    if (us.nasdaq) { setEl('p-nq',  fu(us.nasdaq.price)); setChip('c-nq',  us.nasdaq.pchange); }

    console.log('✅ Data loaded from backend');

  } catch (e) {
    console.log('Backend fetch failed:', e.message);
  }
}

// Load immediately + every 60s
loadData();
setInterval(loadData, 60000);

// ── GIFT NIFTY WIDGETS ────────────────────────────────────────
const GN_API  = 'https://proxy-gift-nifty.onrender.com';
// Gift Bank Nifty pairId on investing.com = 1209768
const GBN_API = 'https://stock-api-8v8d.onrender.com';

function setGiftWidget(prefix, q, dotId, tsId) {
  if (!q || !q.ok) return;
  const up = parseFloat(q.change) >= 0;
  const el = id => document.getElementById(id);

  el(prefix+'-price').textContent = q.price ? parseFloat(q.price).toFixed(2) : '—';

  const chgEl = el(prefix+'-chg');
  if (q.change != null) {
    chgEl.textContent = (up?'▲ +':'▼ ') + Math.abs(parseFloat(q.change)).toFixed(2) +
      ' (' + (up?'+':'') + parseFloat(q.changePct).toFixed(2) + '%)';
    chgEl.style.color = up ? '#4caf50' : '#f44336';
  }

  if (el(prefix+'-high')) el(prefix+'-high').textContent = q.high ? parseFloat(q.high).toFixed(2) : '—';
  if (el(prefix+'-low'))  el(prefix+'-low').textContent  = q.low  ? parseFloat(q.low).toFixed(2)  : '—';
  if (el(prefix+'-prev')) el(prefix+'-prev').textContent = q.prevClose ? parseFloat(q.prevClose).toFixed(2) : '—';

  const dot = document.getElementById(dotId);
  if (dot) dot.style.background = '#4caf50';

  const ts = document.getElementById(tsId);
  if (ts) ts.textContent = 'Updated ' + new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false}) + ' IST';
}

async function loadGiftNifty() {
  try {
    const r = await fetch(GN_API + '/quote', {signal: AbortSignal.timeout(15000)});
    const q = await r.json();
    setGiftWidget('gn', q, 'gn-dot', 'gn-ts');
  } catch(e) {
    console.log('Gift Nifty fetch failed:', e.message);
    const ts = document.getElementById('gn-ts');
    if (ts) ts.textContent = 'Retrying…';
  }
}

async function loadGiftBankNifty() {
  try {
    // Gift Bank Nifty from main backend
    const r = await fetch(GN_API + '/quote-bank', {signal: AbortSignal.timeout(15000)});
    const q = await r.json();
    setGiftWidget('gbn', q, 'gbn-dot', 'gbn-ts');
  } catch(e) {
    console.log('Gift Bank Nifty fetch failed:', e.message);
    const ts = document.getElementById('gbn-ts');
    if (ts) ts.textContent = 'Retrying…';
  }
}

// ── AI MARKET SUMMARY ─────────────────────────────────────────
let summaryLoaded = false;

async function loadSummary() {
  const el  = document.getElementById('summary-text');
  const ts  = document.getElementById('summary-ts');
  if (!el) return;

  el.innerHTML = '<span style="color:var(--text3)">Generating AI summary…</span>';

  try {
    const r = await fetch(GBN_API + '/api/summary', {signal: AbortSignal.timeout(30000)});
    const d = await r.json();

    if (d.summary) {
      // Format with line breaks
      el.innerHTML = d.summary
        .split('\n')
        .filter(l => l.trim())
        .map(l => `<p style="margin-bottom:6px">${l}</p>`)
        .join('');
      if (ts) ts.textContent = 'Generated ' + new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false}) + ' IST';
      summaryLoaded = true;
    } else {
      el.innerHTML = '<span style="color:var(--text3)">Summary unavailable — check back shortly</span>';
    }
  } catch(e) {
    el.innerHTML = '<span style="color:var(--text3)">Could not load summary. Will retry shortly.</span>';
    console.log('Summary failed:', e.message);
  }
}

// Load Gift Nifty immediately + every 60s
loadGiftNifty();
loadGiftBankNifty();
setInterval(loadGiftNifty, 60000);
setInterval(loadGiftBankNifty, 60000);

// Load summary immediately + every 30 mins
loadSummary();
setInterval(loadSummary, 30 * 60 * 1000);

</script>

</body>
</html>
