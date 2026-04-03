<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

  <!-- ── PRIMARY META ─────────────────────────────────────────────────────── -->
  <title id="page-title">Bazaar Watch — India's Sharpest Real-Time Market Dashboard</title>
  <meta name="description"        id="page-desc" content="Live Nifty 50, Sensex, Bank Nifty, Gift Nifty, Gift Bank Nifty, pre-market cues, F&O heatmap, commodities and India stock news — all in one dashboard."/>
  <meta name="keywords"           content="Nifty 50 live, Sensex today, Bank Nifty live, Gift Nifty live, Gift Bank Nifty, India market dashboard, NSE BSE live, pre-market cues India, F&O heatmap, India VIX, USDINR live, Dow Jones mini live, S&P 500 mini live, Nasdaq mini live, crude oil price India, Dollar Index live, pre-market discussion India"/>
  <meta name="author"             content="Bazaar Watch"/>
  <meta name="robots"             content="index, follow"/>
  <link rel="canonical"           id="page-canonical" href="https://bazaarwatch.in/"/>

  <!-- ── FAVICON ──────────────────────────────────────────────────────────── -->
  <link rel="icon"             type="image/x-icon"    href="/favicon.ico"/>
  <link rel="icon"             type="image/svg+xml"   href="/favicon.svg"/>
  <link rel="apple-touch-icon" sizes="180x180"        href="/apple-touch-icon.png"/>
  <link rel="manifest"                                href="/site.webmanifest"/>
  <meta name="theme-color"    content="#FF9933"/>

  <!-- ── OPEN GRAPH — controls WhatsApp, LinkedIn, Facebook previews ──────── -->
  <meta property="og:type"        content="website"/>
  <meta property="og:site_name"   content="Bazaar Watch"/>
  <meta property="og:url"         id="og-url"   content="https://bazaarwatch.in/"/>
  <meta property="og:title"       id="og-title" content="Bazaar Watch — India's Sharpest Real-Time Market Dashboard"/>
  <meta property="og:description" id="og-desc"  content="Live Nifty 50, Sensex, Bank Nifty, F&O heatmap, Gift Nifty, commodities and pre-market analysis — India's sharpest market dashboard."/>
  <meta property="og:image"       content="https://bazaarwatch.in/og-image.png"/>
  <meta property="og:locale"      content="en_IN"/>

  <!-- ── TWITTER / X CARD ─────────────────────────────────────────────────── -->
  <meta name="twitter:card"        content="summary_large_image"/>
  <meta name="twitter:site"        content="@bazaarwatch"/>
  <meta name="twitter:title"       id="tw-title" content="Bazaar Watch — India's Live Market Dashboard"/>
  <meta name="twitter:description" id="tw-desc"  content="Live Nifty 50, Sensex, Bank Nifty, F&O heatmap, Gift Nifty, commodities and pre-market analysis — India's sharpest market dashboard."/>
  <meta name="twitter:image"       content="https://bazaarwatch.in/og-image.png"/>

  <!-- ── SCHEMA MARKUP — tells Google exactly what this site is ───────────── -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Bazaar Watch",
    "url": "https://bazaarwatch.in",
    "description": "India real-time stock market dashboard with live Nifty 50, Sensex, Bank Nifty, F&O heatmap, Gift Nifty, commodities, global cues and pre-market analysis.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
    "author": { "@type": "Organization", "name": "Bazaar Watch", "url": "https://bazaarwatch.in" },
    "inLanguage": "en-IN",
    "audience": { "@type": "Audience", "audienceType": "Indian stock market investors and traders" }
  }
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Vollkorn+SC:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet"/>
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
    body{background:var(--bg);color:var(--text);font-family:'Vollkorn',serif;min-height:100vh;overflow-x:hidden}
    ::-webkit-scrollbar{width:5px;height:5px}
    ::-webkit-scrollbar-track{background:var(--bg)}
    ::-webkit-scrollbar-thumb{background:var(--border2);border-radius:4px}
    @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.15;transform:scale(.6)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
    @keyframes spin{to{transform:rotate(360deg)}}
    .live-dot{animation:pulse 2s ease-in-out infinite}

    /* ── NAV ── */
    .topnav{
      position:sticky;top:0;z-index:500;
      background:rgba(6,10,14,.97);
      border-bottom:1px solid var(--border);
      backdrop-filter:blur(12px);
      display:flex;flex-direction:column;
    }
    .nav-row1{
      height:54px;display:flex;align-items:center;
      justify-content:space-between;padding:0 20px;gap:12px;
    }
    .nav-row2{
      display:flex;align-items:center;justify-content:center;gap:2px;
      padding:0 14px;height:36px;
      border-top:1px solid var(--border);
      overflow-x:auto;-webkit-overflow-scrolling:touch;
      scrollbar-width:none;
    }
    .nav-row2::-webkit-scrollbar{display:none}
    .nav-left{display:flex;align-items:center;gap:12px;min-width:0}
    .logo{display:flex;align-items:center;gap:9px;flex-shrink:0}
    .flag{display:flex;flex-direction:column;gap:2px}
    .flag span{width:3px;height:5px;border-radius:2px}
    .logo-text{font-family:'Vollkorn SC',serif;font-size:20px;letter-spacing:3px;color:#e2e8f0;line-height:1;font-weight:700}
    .logo-sub{font-size:8px;color:var(--text3);letter-spacing:1.5px}
    .nav-right{display:flex;align-items:center;gap:10px;flex-shrink:0}
    .mkt-badge{font-family:'Space Mono',monospace;font-size:9px;padding:2px 7px;border-radius:3px;letter-spacing:1px;font-weight:700;white-space:nowrap}
    .live-wrap{display:flex;align-items:center;gap:5px;font-family:'Space Mono',monospace;font-size:11px}
    .clock{font-family:'Space Mono',monospace;font-size:11px;color:var(--text3);white-space:nowrap}
    .nav-tab{
      flex-shrink:0;padding:5px 13px;border-radius:5px;border:none;
      cursor:pointer;font-size:12px;font-family:'Vollkorn',serif;font-weight:500;
      background:transparent;color:var(--text3);transition:all .15s;white-space:nowrap;
    }
    .nav-tab:hover{color:var(--saffron)}
    .nav-tab.active{background:rgba(255,153,51,.14);color:var(--saffron);font-weight:600}

    /* ── TICKER ── */
    .ticker-wrap{background:var(--bg2);border-bottom:1px solid var(--border);height:44px;overflow:hidden}

    /* ── CONTENT ── */
    .content{padding:14px 20px 40px}
    .tab-panel{display:none}.tab-panel.active{display:block}

    /* ── SECTION HEADER ── */
    .sh{display:flex;align-items:center;gap:10px;margin-bottom:12px;margin-top:2px}
    .sh-t{font-family:'Vollkorn SC',serif;font-size:16px;letter-spacing:2px;line-height:1}
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
    .pc-lbl{font-family:'Vollkorn SC',serif;font-size:11px;letter-spacing:1.5px;margin-bottom:3px}
    .pc-price{font-family:'Space Mono',monospace;font-size:18px;font-weight:700;margin:3px 0;min-height:27px}
    .pc-sub{font-size:9px;color:var(--text3);margin-bottom:7px}
    .chip{display:inline-flex;align-items:center;padding:2px 7px;border-radius:4px;font-family:'Space Mono',monospace;font-size:10px;font-weight:700;min-width:60px}
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
    .gn-info h2{font-family:'Vollkorn SC',serif;font-size:14px;letter-spacing:2px;color:var(--saffron);margin-bottom:4px}
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
    @media(max-width:600px){
      .g6,.g5,.g4{grid-template-columns:1fr}
      .logo-sub{display:none}
      .clock{display:none}
      .mkt-badge{display:none}
    }
  </style>
</head>
<body>

<!-- ══ NAV ══ -->
<nav class="topnav">
  <!-- Row 1: Logo + Live indicator -->
  <div class="nav-row1">
    <div class="logo" style="display:flex;align-items:center;gap:11px;text-decoration:none;cursor:pointer" onclick="ST('home',document.querySelector('.nav-tab'))">
      <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0">
        <rect width="44" height="44" rx="8" fill="#FF9933"/>
        <text x="22" y="32" font-family="Georgia,serif" font-size="20" font-weight="700" fill="#060a0e" text-anchor="middle" letter-spacing="-1">BW</text>
      </svg>
      <div>
        <div style="font-family:'Vollkorn SC',serif;font-size:18px;letter-spacing:3px;color:#e2e8f0;line-height:1;font-weight:700">BAZAAR WATCH</div>
        <div style="font-size:8px;color:var(--text3);letter-spacing:1.5px;margin-top:2px">NSE · BSE · MCX · GLOBAL</div>
      </div>
    </div>
    <div class="nav-right">
      <span class="mkt-badge" id="mkt-badge" style="color:#4caf50;background:rgba(76,175,80,.12);border:1px solid rgba(76,175,80,.2)">MARKETS</span>
      <div class="live-wrap">
        <div class="live-dot" id="live-dot" style="width:7px;height:7px;border-radius:50%;background:#4caf50"></div>
        <span id="live-lbl" style="color:#4caf50">LIVE</span>
      </div>
      <div class="clock" id="clock"></div>
    </div>
  </div>
  <!-- Row 2: Scrollable tabs — works on both desktop and mobile -->
  <div class="nav-row2" id="nav-tabs-row">
    <button class="nav-tab active" onclick="ST('home',this)">🌅 Markets</button>
    <button class="nav-tab" onclick="ST('commodities',this)">⚡ Commodities</button>
    <button class="nav-tab" onclick="ST('global',this)">🌍 Global</button>
    <button class="nav-tab" onclick="ST('heatmap',this)">🔥 Heatmap</button>
    <button class="nav-tab" onclick="ST('analysis',this)">📝 Analysis</button>
  </div>
</nav>

<!-- ══ CUSTOM TICKER — backend powered ══ -->
<div id="custom-ticker" style="background:var(--bg2);border-bottom:1px solid var(--border);height:46px;overflow:hidden;position:relative;display:flex;align-items:center">
  <div id="ticker-track" style="display:flex;align-items:center;white-space:nowrap;position:absolute;animation:tickerScroll 150s linear infinite">
    <div id="ticker-inner" style="display:inline-flex;align-items:center"></div>
    <div id="ticker-clone"  style="display:inline-flex;align-items:center"></div>
  </div>
</div>
<style>
@keyframes tickerScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
#ticker-track:hover{animation-play-state:paused}
.t-item{display:inline-flex;align-items:center;gap:9px;padding:0 22px;height:46px;border-right:1px solid var(--border);flex-shrink:0}
.t-name{font-family:'Vollkorn SC',serif;font-size:15px;letter-spacing:2px;color:var(--text3)}
.t-price{font-family:'Space Mono',monospace;font-size:13px;font-weight:700}
.t-chg{font-family:'Space Mono',monospace;font-size:11px}
.t-up{color:#4caf50}.t-dn{color:#f44336}.t-flat{color:var(--text3)}
</style>

<div id="stale-warn" style="display:none;background:rgba(255,153,51,0.12);border-bottom:1px solid rgba(255,153,51,0.3);padding:6px 20px;font-size:10px;color:#FF9933;font-family:'Space Mono',monospace;letter-spacing:1px;text-align:center">
  ⚠ SHOWING CACHED DATA — LIVE BACKEND UNREACHABLE — PRICES MAY BE STALE
</div>
<div class="content">

<!-- ════════════════════════════════════
     HOME TAB — Markets + Pre-Market merged
════════════════════════════════════ -->
<div id="tab-home" class="tab-panel active">
  <!-- GIFT NIFTY + GIFT BANK NIFTY -->
  <div id="gift-nifty" class="g2 gap" style="scroll-margin-top:100px">

    <div class="card" style="border-color:rgba(255,153,51,0.25);background:linear-gradient(135deg,rgba(255,153,51,0.06),rgba(19,136,8,0.03))">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div>
          <div style="font-family:'Vollkorn SC',serif;font-size:15px;letter-spacing:2px;color:#FF9933">🎁 GIFT NIFTY 50 — LIVE</div>
          <div style="font-size:9px;color:var(--text3);letter-spacing:1px">NSE IFSC · GIFT CITY · 21 hrs/day</div>
        </div>
        <div class="live-dot" style="width:7px;height:7px;border-radius:50%;background:#4caf50" id="gn-dot"></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:14px">
        <span style="font-family:'Space Mono',monospace;font-size:32px;font-weight:700;color:var(--text)" id="gn-price">—</span>
        <span style="font-family:'Space Mono',monospace;font-size:13px" id="gn-chg">—</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px">
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'Space Mono',monospace">High</div>
          <div style="font-size:13px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px" id="gn-high">—</div>
        </div>
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'Space Mono',monospace">Low</div>
          <div style="font-size:13px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px" id="gn-low">—</div>
        </div>
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'Space Mono',monospace">Prev Close</div>
          <div style="font-size:13px;font-family:'Space Mono',monospace;color:var(--text);margin-top:2px" id="gn-prev">—</div>
        </div>
      </div>
      <div style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace" id="gn-ts">Connecting…</div>
    </div>

    <div id="gift-bank-nifty" class="card" style="border-color:rgba(129,199,132,0.25);background:linear-gradient(135deg,rgba(129,199,132,0.06),rgba(19,136,8,0.03));scroll-margin-top:100px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div>
          <div style="font-family:'Vollkorn SC',serif;font-size:15px;letter-spacing:2px;color:#81c784">🏦 GIFT BANK NIFTY — LIVE</div>
          <div style="font-size:9px;color:var(--text3);letter-spacing:1px">NSE IFSC · GIFT CITY · 21 hrs/day</div>
        </div>
        <div class="live-dot" style="width:7px;height:7px;border-radius:50%;background:#4caf50" id="gbn-dot"></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:12px;margin-bottom:14px">
        <span style="font-family:'Space Mono',monospace;font-size:32px;font-weight:700;color:var(--text)" id="gbn-price">—</span>
        <span style="font-family:'Space Mono',monospace;font-size:13px" id="gbn-chg">—</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:10px">
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'Space Mono',monospace">High</div>
          <div style="font-size:13px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px" id="gbn-high">—</div>
        </div>
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'Space Mono',monospace">Low</div>
          <div style="font-size:13px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px" id="gbn-low">—</div>
        </div>
        <div style="background:var(--bg3);border-radius:6px;padding:8px 10px">
          <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--text3);font-family:'Space Mono',monospace">Prev Close</div>
          <div style="font-size:13px;font-family:'Space Mono',monospace;color:var(--text);margin-top:2px" id="gbn-prev">—</div>
        </div>
      </div>
      <div style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace" id="gbn-ts">Connecting…</div>
    </div>

  </div>

  <!-- PRE-MARKET CUES -->
  <div id="pre-market" class="sh" style="scroll-margin-top:100px">
    <span style="font-size:15px">🌙</span>
    <div><div class="sh-t" style="color:#67e8f9">PRE-MARKET CUES</div><div class="sh-s">US MARKETS · DOLLAR · BONDS · GOLD · CRUDE</div></div>
    <div class="sh-l" style="background:linear-gradient(90deg,rgba(103,232,249,.3),transparent)"></div>
  </div>
  <div class="g4 gap">
    <div class="pc cu"><div style="display:flex;justify-content:space-between;align-items:center"><div class="pc-lbl" style="color:#4184e4">⚡ DOW JONES <span style="font-size:7px;background:rgba(255,183,77,0.15);color:#ffb74d;border:1px solid rgba(255,183,77,0.3);border-radius:3px;padding:1px 4px;letter-spacing:1px;font-family:'Space Mono',monospace;vertical-align:middle">CFD</span></div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">^DJI</div></div><div style="height:95px;margin-top:6px;border-radius:5px;overflow:hidden;margin-left:-14px;margin-right:-14px;margin-bottom:-13px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"FOREXCOM:DJI","width":"100%","height":95,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="pc cu"><div style="display:flex;justify-content:space-between;align-items:center"><div class="pc-lbl" style="color:#a78bfa">📈 S&amp;P 500 <span style="font-size:7px;background:rgba(255,183,77,0.15);color:#ffb74d;border:1px solid rgba(255,183,77,0.3);border-radius:3px;padding:1px 4px;letter-spacing:1px;font-family:'Space Mono',monospace;vertical-align:middle">CFD</span></div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">^GSPC</div></div><div style="height:95px;margin-top:6px;border-radius:5px;overflow:hidden;margin-left:-14px;margin-right:-14px;margin-bottom:-13px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"FOREXCOM:SPXUSD","width":"100%","height":95,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="pc cu"><div style="display:flex;justify-content:space-between;align-items:center"><div class="pc-lbl" style="color:#67e8f9">💻 NASDAQ <span style="font-size:7px;background:rgba(255,183,77,0.15);color:#ffb74d;border:1px solid rgba(255,183,77,0.3);border-radius:3px;padding:1px 4px;letter-spacing:1px;font-family:'Space Mono',monospace;vertical-align:middle">CFD</span></div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">^IXIC</div></div><div style="height:95px;margin-top:6px;border-radius:5px;overflow:hidden;margin-left:-14px;margin-right:-14px;margin-bottom:-13px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"FOREXCOM:NSXUSD","width":"100%","height":95,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="pc "><div style="display:flex;justify-content:space-between;align-items:center"><div class="pc-lbl" style="color:#4fc3f7">💵 USD/INR</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">FX</div></div><div style="height:95px;margin-top:6px;border-radius:5px;overflow:hidden;margin-left:-14px;margin-right:-14px;margin-bottom:-13px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"FX_IDC:USDINR","width":"100%","height":95,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
  </div>
  <div class="g4 gap">
    <div class="pc "><div style="display:flex;justify-content:space-between;align-items:center"><div class="pc-lbl" style="color:#f472b6">💹 DOLLAR INDEX <span style="font-size:7px;background:rgba(255,183,77,0.15);color:#ffb74d;border:1px solid rgba(255,183,77,0.3);border-radius:3px;padding:1px 4px;letter-spacing:1px;font-family:'Space Mono',monospace;vertical-align:middle">CFD</span></div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">DXY</div></div><div style="height:95px;margin-top:6px;border-radius:5px;overflow:hidden;margin-left:-14px;margin-right:-14px;margin-bottom:-13px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"CAPITALCOM:DXY","width":"100%","height":95,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="pc "><div style="display:flex;justify-content:space-between;align-items:center"><div class="pc-lbl" style="color:#ef9a9a">🏛️ US 10Y YIELD <span style="font-size:7px;background:rgba(255,183,77,0.15);color:#ffb74d;border:1px solid rgba(255,183,77,0.3);border-radius:3px;padding:1px 4px;letter-spacing:1px;font-family:'Space Mono',monospace;vertical-align:middle">CFD</span></div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">Bonds</div></div><div style="height:95px;margin-top:6px;border-radius:5px;overflow:hidden;margin-left:-14px;margin-right:-14px;margin-bottom:-13px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"CAPITALCOM:US10","width":"100%","height":95,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="pc cg"><div style="display:flex;justify-content:space-between;align-items:center"><div class="pc-lbl" style="color:#d4af37">🥇 GOLD</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/oz</div></div><div style="height:95px;margin-top:6px;border-radius:5px;overflow:hidden;margin-left:-14px;margin-right:-14px;margin-bottom:-13px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"TVC:GOLD","width":"100%","height":95,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div class="pc "><div style="display:flex;justify-content:space-between;align-items:center"><div class="pc-lbl" style="color:#ffb74d">🛢️ CRUDE WTI</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/bbl</div></div><div style="height:95px;margin-top:6px;border-radius:5px;overflow:hidden;margin-left:-14px;margin-right:-14px;margin-bottom:-13px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"TVC:USOIL","width":"100%","height":95,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
  </div>

  <!-- AI MARKET SUMMARY — COMPACT INLINE CARD -->
  <div class="gap" style="display:grid;grid-template-columns:1fr;max-width:100%">
    <div style="background:var(--bg2);border:1px solid rgba(103,232,249,0.2);border-radius:9px;padding:10px 14px;background:linear-gradient(135deg,rgba(103,232,249,0.04),rgba(139,92,246,0.03))">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;gap:8px">
        <div style="display:flex;align-items:center;gap:7px;min-width:0">
          <span style="font-size:12px;flex-shrink:0">🤖</span>
          <div style="font-family:'Vollkorn SC',serif;font-size:12px;letter-spacing:2px;color:#67e8f9;white-space:nowrap">AI MARKET SUMMARY</div>
          <span style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;white-space:nowrap" id="summary-ts"></span>
        </div>
        <button onclick="toggleSummaryEdit()" id="edit-btn" style="background:rgba(103,232,249,0.1);border:1px solid rgba(103,232,249,0.3);color:#67e8f9;font-size:9px;padding:2px 8px;border-radius:4px;cursor:pointer;font-family:'Space Mono',monospace;flex-shrink:0;white-space:nowrap">✏ Edit</button>
      </div>
      <!-- Article text — wraps naturally, compact line-height -->
      <div id="summary-text" style="font-size:12px;color:var(--text);line-height:1.6;font-family:'Vollkorn',serif;word-wrap:break-word;overflow-wrap:break-word;max-height:160px;overflow-y:auto">
        <span style="color:var(--text3);font-style:italic;font-size:11px">No summary posted yet — click ✏ Edit to add today's market outlook.</span>
      </div>
      <!-- Edit mode (hidden by default) -->
      <div id="summary-edit-box" style="display:none;margin-top:8px">
        <textarea id="summary-input" placeholder="e.g. NIFTY opened strong at 22,850 amid positive global cues. Key resistance at 23,000. FII bought ₹3,200 Cr yesterday." style="width:100%;min-height:80px;background:var(--bg3);border:1px solid rgba(103,232,249,0.3);border-radius:6px;color:var(--text);font-family:'Vollkorn',serif;font-size:12px;line-height:1.6;padding:8px 10px;resize:vertical;outline:none;margin-bottom:6px;word-wrap:break-word"></textarea>
        <div style="display:flex;gap:8px;justify-content:flex-end">
          <button onclick="cancelSummaryEdit()" style="background:transparent;border:1px solid var(--border2);color:var(--text3);font-size:10px;padding:3px 10px;border-radius:4px;cursor:pointer;font-family:'Space Mono',monospace">Cancel</button>
          <button onclick="saveSummary()" style="background:rgba(103,232,249,0.15);border:1px solid rgba(103,232,249,0.4);color:#67e8f9;font-size:10px;padding:3px 10px;border-radius:4px;cursor:pointer;font-family:'Space Mono',monospace;font-weight:700">💾 Save</button>
        </div>
      </div>
    </div>
  </div>



  <!-- INDIAN INDICES -->
  <div id="indian-indices" class="sh" style="scroll-margin-top:100px">
    <span style="font-size:15px">🇮🇳</span>
    <div><div class="sh-t" style="color:#FF9933">INDIAN INDICES</div><div class="sh-s">NSE · BSE · YAHOO FINANCE · LIVE</div></div>
    <div class="sh-l" style="background:linear-gradient(90deg,rgba(255,153,51,.3),transparent)"></div>
    <span style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace" id="idx-ts"></span>
  </div>
  <div class="g6 gap" id="indian-grid">
    <div class="pc ci"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div class="pc-lbl" style="color:#f0c040">NIFTY 50</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">NSE</div></div><div style="font-family:'Space Mono',monospace;font-size:22px;font-weight:700;color:#f0c040;line-height:1" id="p-n50">—</div><div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:4px" id="ch-n50">—</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px"><div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">HIGH</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px;font-weight:600" id="hi-n50">—</div></div><div style="background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">LOW</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px;font-weight:600" id="lo-n50">—</div></div></div><div class="shine"></div></div>
    <div class="pc ci"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div class="pc-lbl" style="color:#4fc3f7">SENSEX</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">BSE</div></div><div style="font-family:'Space Mono',monospace;font-size:22px;font-weight:700;color:#4fc3f7;line-height:1" id="p-sx">—</div><div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:4px" id="ch-sx">—</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px"><div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">HIGH</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px;font-weight:600" id="hi-sx">—</div></div><div style="background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">LOW</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px;font-weight:600" id="lo-sx">—</div></div></div><div class="shine"></div></div>
    <div class="pc ci"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div class="pc-lbl" style="color:#81c784">BANK NIFTY</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">NSE</div></div><div style="font-family:'Space Mono',monospace;font-size:22px;font-weight:700;color:#81c784;line-height:1" id="p-bn">—</div><div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:4px" id="ch-bn">—</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px"><div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">HIGH</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px;font-weight:600" id="hi-bn">—</div></div><div style="background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">LOW</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px;font-weight:600" id="lo-bn">—</div></div></div><div class="shine"></div></div>
    <div class="pc ci"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div class="pc-lbl" style="color:#ce93d8">NIFTY IT</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">NSE</div></div><div style="font-family:'Space Mono',monospace;font-size:22px;font-weight:700;color:#ce93d8;line-height:1" id="p-it">—</div><div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:4px" id="ch-it">—</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px"><div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">HIGH</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px;font-weight:600" id="hi-it">—</div></div><div style="background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">LOW</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px;font-weight:600" id="lo-it">—</div></div></div><div class="shine"></div></div>
    <div class="pc ci"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div class="pc-lbl" style="color:#ffb74d">MIDCAP 100</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">NSE</div></div><div style="font-family:'Space Mono',monospace;font-size:22px;font-weight:700;color:#ffb74d;line-height:1" id="p-mc">—</div><div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:4px" id="ch-mc">—</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px"><div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">HIGH</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px;font-weight:600" id="hi-mc">—</div></div><div style="background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">LOW</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px;font-weight:600" id="lo-mc">—</div></div></div><div class="shine"></div></div>
    <div class="pc ci"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div class="pc-lbl" style="color:#ef9a9a">INDIA VIX</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">Vol</div></div><div style="font-family:'Space Mono',monospace;font-size:22px;font-weight:700;color:#ef9a9a;line-height:1" id="p-vix">—</div><div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:4px" id="ch-vix">—</div><div class="shine"></div></div>
  </div>

  <!-- NEWS + WORLD MARKETS -->
  <div id="market-news" class="gnews gap" style="scroll-margin-top:100px">
    <div class="card">
      <div class="sh" style="margin-bottom:10px">
        <span style="font-size:15px">📰</span>
        <div><div class="sh-t" style="color:#FF9933">MARKET NEWS</div><div class="sh-s">INDIA · GLOBAL MACRO · COMMODITIES · LIVE</div></div>
      </div>
      <div id="news-list" style="max-height:450px;overflow-y:auto">
        <div style="color:var(--text3);font-size:11px;padding:20px;text-align:center">Loading news…</div>
      </div>
      <div style="padding-top:8px;border-top:1px solid var(--border);margin-top:8px;font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;display:flex;justify-content:space-between">
        <span id="news-updated"></span>
        <span>Refreshes every 5 min</span>
      </div>
    </div>
      <div id="india-stocks-news" class="card" style="border-color:rgba(76,175,80,0.2);scroll-margin-top:100px">
        <div class="sh" style="margin-bottom:8px">
          <span style="font-size:15px">📈</span>
          <div>
            <div class="sh-t" style="color:#81c784">INDIA STOCKS NEWS</div>
            <div class="sh-s">NSE · BSE · CORPORATE · EARNINGS · LAST 24 HRS</div>
          </div>
        </div>

        <!-- Filter row: Category -->
        <div style="display:flex;align-items:center;gap:5px;margin-bottom:10px;flex-wrap:wrap">
          <span style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px;flex-shrink:0">🏷 TYPE:</span>
          <button onclick="setSnFilter('cat','all',this)" id="snf-catall" class="snf-cat snf-active" style="font-size:9px;padding:2px 8px;border-radius:3px;border:1px solid rgba(129,199,132,0.4);background:rgba(129,199,132,0.15);color:#81c784;cursor:pointer;font-family:'Space Mono',monospace;white-space:nowrap">ALL</button>
          <button onclick="setSnFilter('cat','RESULT',this)" id="snf-result" class="snf-cat" style="font-size:9px;padding:2px 8px;border-radius:3px;border:1px solid var(--border);background:transparent;color:var(--text3);cursor:pointer;font-family:'Space Mono',monospace;white-space:nowrap">RESULT</button>
          <button onclick="setSnFilter('cat','CORP ACTION',this)" id="snf-corp" class="snf-cat" style="font-size:9px;padding:2px 8px;border-radius:3px;border:1px solid var(--border);background:transparent;color:var(--text3);cursor:pointer;font-family:'Space Mono',monospace;white-space:nowrap">CORP ACTION</button>
          <button onclick="setSnFilter('cat','IPO',this)" id="snf-ipo" class="snf-cat" style="font-size:9px;padding:2px 8px;border-radius:3px;border:1px solid var(--border);background:transparent;color:var(--text3);cursor:pointer;font-family:'Space Mono',monospace;white-space:nowrap">IPO</button>
          <button onclick="setSnFilter('cat','DEAL',this)" id="snf-deal" class="snf-cat" style="font-size:9px;padding:2px 8px;border-radius:3px;border:1px solid var(--border);background:transparent;color:var(--text3);cursor:pointer;font-family:'Space Mono',monospace;white-space:nowrap">DEAL</button>
          <button onclick="setSnFilter('cat','ALERT',this)" id="snf-alert" class="snf-cat" style="font-size:9px;padding:2px 8px;border-radius:3px;border:1px solid var(--border);background:transparent;color:var(--text3);cursor:pointer;font-family:'Space Mono',monospace;white-space:nowrap">ALERT</button>
          <button onclick="setSnFilter('cat','FII/DII',this)" id="snf-fii" class="snf-cat" style="font-size:9px;padding:2px 8px;border-radius:3px;border:1px solid var(--border);background:transparent;color:var(--text3);cursor:pointer;font-family:'Space Mono',monospace;white-space:nowrap">FII/DII</button>
        </div>

        <div id="stock-news-list" style="max-height:410px;overflow-y:auto">
          <div style="color:var(--text3);font-size:11px;padding:20px;text-align:center">Loading stocks news…</div>
        </div>
        <div style="padding-top:8px;border-top:1px solid var(--border);margin-top:8px;font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;display:flex;justify-content:space-between;align-items:center">
          <span id="stock-news-updated"></span>
          <span id="sn-count" style="color:var(--text3)">Refreshes every 5 min</span>
        </div>
      </div>

      <script>
      // ── Stock News Filters ────────────────────────────────────────────────────
      window._snAllItems   = [];   // full list stored after fetch
      window._snTimeFilter = 'all';
      window._snCatFilter  = 'all';

      function setSnFilter(type, val, btn) {
        if (type === 'time') {
          window._snTimeFilter = val;
          document.querySelectorAll('.snf-btn').forEach(b => {
            b.style.background = 'transparent';
            b.style.color = 'var(--text3)';
            b.style.borderColor = 'var(--border)';
          });
        } else {
          window._snCatFilter = val;
          document.querySelectorAll('.snf-cat').forEach(b => {
            b.style.background = 'transparent';
            b.style.color = 'var(--text3)';
            b.style.borderColor = 'var(--border)';
          });
        }
        btn.style.background = 'rgba(129,199,132,0.15)';
        btn.style.color = '#81c784';
        btn.style.borderColor = 'rgba(129,199,132,0.4)';
        applySnFilters();
      }

      function getItemTag(title) {
        const tl = (title||'').toLowerCase();
        if (/dividend|bonus|split|buyback|rights issue/.test(tl)) return 'CORP ACTION';
        if (/result|profit|revenue|ebitda|pat|quarterly/.test(tl)) return 'RESULT';
        if (/ipo|listing|allotment/.test(tl)) return 'IPO';
        if (/circuit|f&o ban|sebi|penalty|order/.test(tl)) return 'ALERT';
        if (/merger|acquisition|stake|block deal|bulk deal/.test(tl)) return 'DEAL';
        if (/fii|fpi|dii/.test(tl)) return 'FII/DII';
        return 'NSE/BSE';
      }

      function applySnFilters() {
        const el = document.getElementById('stock-news-list');
        if (!el || !_snAllItems.length) return;

        const now = Date.now();
        const cutoff = _snTimeFilter === '24h' ? 24*3600*1000
                     : _snTimeFilter === '48h' ? 48*3600*1000
                     : Infinity;

        let list = _snAllItems.filter(item => {
          // Time filter
          try {
            const d = new Date(item.time);
            if (!isNaN(d) && cutoff !== Infinity && (now - d.getTime()) > cutoff) return false;
          } catch(e) {}
          // Category filter
          if (_snCatFilter !== 'all' && getItemTag(item.title) !== _snCatFilter) return false;
          return true;
        });

        const countEl = document.getElementById('sn-count');
        if (countEl) countEl.textContent = list.length + ' stories · refreshes every 5 min';

        if (!list.length) {
          el.innerHTML = '<div style="color:var(--text3);font-size:11px;padding:20px;text-align:center">No stories match the selected filters — try widening the time or category</div>';
          return;
        }

        el.innerHTML = list.map(item => {
          const rawSrc = (item.source||'');
          const src = rawSrc
            .replace('Economic Times','ET').replace('Moneycontrol News','MC')
            .replace('Business Standard','BS').replace('ET Markets','ET')
            .replace('ET Stocks','ET').replace('CNBC TV18','CNBCTV18')
            .replace('Livemint','Mint').replace('NDTV Profit','NDTV Profit')
            .replace('Hindu BusinessLine','BL').replace('Financial Express','FE');
          const tag = getItemTag(item.title);
          let tagCol = '#81c784', tagBg = 'rgba(129,199,132,0.12)';
          if (tag==='CORP ACTION') { tagCol='#ffb74d'; tagBg='rgba(255,183,77,0.12)'; }
          else if (tag==='RESULT') { tagCol='#67e8f9'; tagBg='rgba(103,232,249,0.12)'; }
          else if (tag==='IPO') { tagCol='#ce93d8'; tagBg='rgba(206,147,216,0.12)'; }
          else if (tag==='ALERT') { tagCol='#f44336'; tagBg='rgba(244,67,54,0.12)'; }
          else if (tag==='DEAL') { tagCol='#4184e4'; tagBg='rgba(65,132,228,0.12)'; }
          else if (tag==='FII/DII') { tagCol='#a78bfa'; tagBg='rgba(167,139,250,0.12)'; }

          // Relative time
          let timeStr = '';
          try {
            const d = new Date(item.time);
            if (!isNaN(d)) {
              const diff = now - d.getTime();
              if (diff < 3600000) timeStr = Math.round(diff/60000) + 'm ago';
              else if (diff < 86400000) timeStr = Math.round(diff/3600000) + 'h ago';
              else timeStr = d.toLocaleDateString('en-IN',{day:'numeric',month:'short'});
            }
          } catch(e){}

          return `<a href="${item.link||'#'}" target="_blank" rel="noopener"
            style="display:flex;flex-direction:column;gap:4px;padding:9px 12px;border-bottom:1px solid var(--border);text-decoration:none;transition:background .12s"
            onmouseover="this.style.background='rgba(76,175,80,0.05)'"
            onmouseout="this.style.background='transparent'">
            <div style="font-size:12px;color:var(--text);line-height:1.4">${item.title||''}</div>
            <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap">
              <span style="font-size:8px;background:${tagBg};color:${tagCol};padding:1px 6px;border-radius:3px;font-family:'Space Mono',monospace;font-weight:700">${tag}</span>
              <span style="font-size:9px;background:rgba(129,199,132,0.08);color:var(--text3);padding:1px 5px;border-radius:3px;font-family:'Space Mono',monospace">${src}</span>
              ${timeStr?`<span style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">${timeStr}</span>`:''}
            </div>
          </a>`;
        }).join('');
      }
      </script>
  </div>

  <!-- DISCUSSION FORUM — Google Auth -->
  <div id="market-discussion" class="card gap" style="border-color:rgba(255,153,51,0.15);scroll-margin-top:100px">
    <div class="sh" style="margin-bottom:14px">
      <span style="font-size:15px">💬</span>
      <div><div class="sh-t" style="color:#FF9933">MARKET DISCUSSION</div><div class="sh-s">SHARE YOUR VIEWS · LOGIN WITH GOOGLE</div></div>
    </div>

    <!-- ── FIREBASE SETUP NOTICE — delete once configured ── -->
    <div id="fb-setup-warn" style="padding:14px;background:rgba(255,153,51,0.07);border:1px solid rgba(255,153,51,0.2);border-radius:8px;margin-bottom:14px;font-size:11px;color:var(--text3);line-height:1.9">
      <div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:1.5px;color:#FF9933;margin-bottom:8px">⚙ FIREBASE SETUP REQUIRED — ONE TIME</div>
      <ol style="padding-left:16px;display:flex;flex-direction:column;gap:4px">
        <li>Go to <a href="https://console.firebase.google.com" target="_blank" style="color:#67e8f9">console.firebase.google.com</a> → New Project</li>
        <li>Enable <b style="color:var(--text)">Authentication → Google</b> sign-in provider</li>
        <li>Enable <b style="color:var(--text)">Firestore Database</b> (start in test mode)</li>
        <li>Project Settings → Your apps → Add Web App → copy the <b style="color:var(--text)">firebaseConfig</b> object</li>
        <li>Paste it into <code style="color:#67e8f9">FIREBASE_CONFIG</code> below and delete this box</li>
      </ol>
    </div>

    <div id="discussion-app">
      <!-- login state -->
      <div id="disc-login" style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--bg3);border-radius:8px;margin-bottom:14px;gap:12px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:10px">
          <img id="disc-avatar" src="" style="width:30px;height:30px;border-radius:50%;display:none;border:1px solid var(--border2)">
          <span id="disc-username" style="font-size:12px;color:var(--text2)">Not signed in</span>
        </div>
        <button id="disc-auth-btn" onclick="discToggleAuth()" style="display:flex;align-items:center;gap:7px;background:#fff;border:none;border-radius:6px;padding:7px 14px;font-size:12px;font-weight:600;color:#3c4043;cursor:pointer;font-family:'Vollkorn',serif">
          <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>
          Sign in with Google
        </button>
      </div>

      <!-- compose -->
      <div id="disc-compose" style="display:none;margin-bottom:14px">
        <textarea id="disc-input" placeholder="Share your market view, trade idea, or question…" maxlength="500" style="width:100%;min-height:80px;background:var(--bg3);border:1px solid var(--border2);border-radius:8px;color:var(--text);font-family:'Vollkorn',serif;font-size:13px;line-height:1.7;padding:10px 12px;resize:vertical;outline:none"></textarea>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px">
          <span id="disc-charcount" style="font-size:10px;color:var(--text3);font-family:'Space Mono',monospace">500 chars left</span>
          <button onclick="discPost()" style="background:rgba(255,153,51,0.15);border:1px solid rgba(255,153,51,0.4);color:#FF9933;font-size:11px;font-weight:700;padding:5px 16px;border-radius:5px;cursor:pointer;font-family:'Space Mono',monospace">POST →</button>
        </div>
      </div>

      <!-- feed -->
      <div id="disc-feed" style="display:flex;flex-direction:column;gap:10px;max-height:420px;overflow-y:auto">
        <div style="text-align:center;padding:24px;color:var(--text3);font-size:11px">Loading discussion…</div>
      </div>
    </div>
  </div>

  <!-- Firebase SDK -->
  <script type="module">
    import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
    import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
    import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

    // ── PASTE YOUR FIREBASE CONFIG HERE ──────────────────────────────────────────
    const FIREBASE_CONFIG = {
      apiKey: "PASTE_API_KEY",
      authDomain: "PASTE_AUTH_DOMAIN",
      projectId: "PASTE_PROJECT_ID",
      storageBucket: "PASTE_STORAGE_BUCKET",
      messagingSenderId: "PASTE_SENDER_ID",
      appId: "PASTE_APP_ID"
    };
    // ─────────────────────────────────────────────────────────────────────────────

    if (FIREBASE_CONFIG.apiKey === 'PASTE_API_KEY') {
      document.getElementById('disc-feed').innerHTML = '<div style="text-align:center;padding:24px;color:var(--text3);font-size:11px">⚙ Firebase not configured yet — follow the setup steps above.</div>';
      return;
    }

    document.getElementById('fb-setup-warn').style.display = 'none';

    const app  = initializeApp(FIREBASE_CONFIG);
    const auth = getAuth(app);
    const db   = getFirestore(app);
    const provider = new GoogleAuthProvider();

    // Auth state
    onAuthStateChanged(auth, user => {
      const btn      = document.getElementById('disc-auth-btn');
      const uname    = document.getElementById('disc-username');
      const avatar   = document.getElementById('disc-avatar');
      const compose  = document.getElementById('disc-compose');
      if (user) {
        uname.textContent = user.displayName || user.email;
        uname.style.color = '#FF9933';
        avatar.src = user.photoURL || '';
        avatar.style.display = user.photoURL ? 'block' : 'none';
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg> Sign out';
        btn.style.background = 'rgba(255,100,100,0.12)';
        btn.style.border = '1px solid rgba(255,100,100,0.3)';
        btn.style.color = '#ef9a9a';
        compose.style.display = 'block';
      } else {
        uname.textContent = 'Not signed in';
        uname.style.color = 'var(--text2)';
        avatar.style.display = 'none';
        btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg> Sign in with Google';
        btn.style.background = '#fff';
        btn.style.border = 'none';
        btn.style.color = '#3c4043';
        compose.style.display = 'none';
      }
    });

    window.discToggleAuth = async () => {
      if (auth.currentUser) { await signOut(auth); }
      else { try { await signInWithPopup(auth, provider); } catch(e) { console.error(e); } }
    };

    // Char counter
    document.getElementById('disc-input').addEventListener('input', function() {
      document.getElementById('disc-charcount').textContent = (500 - this.value.length) + ' chars left';
    });

    // Post comment
    window.discPost = async () => {
      const user = auth.currentUser;
      const text = document.getElementById('disc-input').value.trim();
      if (!user) { alert('Please sign in first.'); return; }
      if (!text) return;
      await addDoc(collection(db, 'bazaar_comments'), {
        text, uid: user.uid,
        name: user.displayName || 'Trader',
        photo: user.photoURL || '',
        ts: serverTimestamp()
      });
      document.getElementById('disc-input').value = '';
      document.getElementById('disc-charcount').textContent = '500 chars left';
    };

    // Live feed
    const q = query(collection(db, 'bazaar_comments'), orderBy('ts','desc'), limit(50));
    onSnapshot(q, snap => {
      const feed = document.getElementById('disc-feed');
      if (snap.empty) {
        feed.innerHTML = '<div style="text-align:center;padding:24px;color:var(--text3);font-size:11px">No comments yet. Be the first to share your view!</div>';
        return;
      }
      feed.innerHTML = snap.docs.map(doc => {
        const d = doc.data();
        const ts = d.ts ? new Date(d.ts.seconds*1000).toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit',hour12:true,timeZone:'Asia/Kolkata'}) : '...';
        const initials = (d.name||'T')[0].toUpperCase();
        const avatar = d.photo
          ? `<img src="${d.photo}" style="width:30px;height:30px;border-radius:50%;flex-shrink:0;border:1px solid var(--border2)">`
          : `<div style="width:30px;height:30px;border-radius:50%;background:rgba(255,153,51,0.2);border:1px solid rgba(255,153,51,0.3);display:flex;align-items:center;justify-content:center;font-family:'Vollkorn SC',serif;font-size:14px;color:#FF9933;flex-shrink:0">${initials}</div>`;
        return `<div style="background:var(--bg3);border-radius:8px;padding:10px 12px;display:flex;gap:10px;align-items:flex-start">
          ${avatar}
          <div style="flex:1;min-width:0">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;gap:8px;flex-wrap:wrap">
              <span style="font-size:11px;font-weight:600;color:#FF9933">${d.name||'Trader'}</span>
              <span style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">${ts} IST</span>
            </div>
            <div style="font-size:12px;color:var(--text);line-height:1.6;word-break:break-word">${d.text.replace(/</g,'&lt;')}</div>
          </div>
        </div>`;
      }).join('');
    });
  </script>



</div><!-- end home -->

<!-- ════ COMMODITIES ════ -->
<div id="tab-commodities" class="tab-panel">
  <div id="gold" class="sh" style="scroll-margin-top:100px"><span style="font-size:15px">🥇</span><div>
    <div class="sh-t" style="color:#d4af37">BULLION</div>
    <div class="sh-s">COMEX · USD · LIVE</div>
  </div><div class="sh-l" style="background:linear-gradient(90deg,rgba(212,175,55,.3),transparent)"></div></div>
  <div class="g2 gap">
    <div class="card cg"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:2px;color:#d4af37">🥇 GOLD (XAU/USD)</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/oz</div></div><div class="tv" style="height:190px;margin:-14px;margin-top:8px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"TVC:GOLD","width":"100%","height":190,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div id="silver" class="card cg" style="scroll-margin-top:100px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:2px;color:#adb5bd">🥈 SILVER (XAG/USD)</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/oz</div></div><div class="tv" style="height:190px;margin:-14px;margin-top:8px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"TVC:SILVER","width":"100%","height":190,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
  </div>

  <div id="crude" class="sh" style="scroll-margin-top:100px"><span style="font-size:15px">⚡</span><div>
    <div class="sh-t" style="color:#ffb74d">ENERGY</div>
    <div class="sh-s">NYMEX · USD · LIVE</div>
  </div><div class="sh-l" style="background:linear-gradient(90deg,rgba(255,183,77,.3),transparent)"></div></div>
  <div class="g2 gap">
    <div class="card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:2px;color:#ffb74d">🛢️ CRUDE OIL WTI</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/bbl</div></div><div class="tv" style="height:190px;margin:-14px;margin-top:8px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"TVC:USOIL","width":"100%","height":190,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
    <div id="natural-gas" class="card" style="scroll-margin-top:100px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:2px;color:#80cbc4">🔥 NATURAL GAS</div><div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/mmBtu</div></div><div class="tv" style="height:190px;margin:-14px;margin-top:8px"><div class="tradingview-widget-container__widget"></div><script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>{"symbol":"CAPITALCOM:NATURALGAS","width":"100%","height":190,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}</script></div></div>
  </div>

  <div id="base-metals" class="sh" style="scroll-margin-top:100px"><span style="font-size:15px">⚙️</span><div>
    <div class="sh-t" style="color:#90caf9">BASE METALS</div>
    <div class="sh-s">COMEX/LME · USD · LIVE</div>
  </div><div class="sh-l" style="background:linear-gradient(90deg,rgba(144,202,249,.3),transparent)"></div></div>
  <div class="g4 gap">
    <div id="copper" class="card" style="border-color:rgba(224,123,74,0.25);scroll-margin-top:100px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:2px;color:#e07b4a">🔶 COPPER</div>
        <div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/lb · COMEX</div>
      </div>
      <div style="font-family:'Space Mono',monospace;font-size:26px;font-weight:700;color:#e07b4a;line-height:1;margin-bottom:8px" id="p-copper-comm">—</div>
      <div style="font-family:'Space Mono',monospace;font-size:11px;margin-bottom:14px" id="c-copper-comm">—</div>
      <div style="background:var(--bg3);border-radius:5px;padding:7px 10px;font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">MCX / LME · LIVE DATA</div>
    </div>
    <div id="aluminium" class="card" style="border-color:rgba(144,202,249,0.25);scroll-margin-top:100px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:2px;color:#90caf9">🔷 ALUMINIUM</div>
        <div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/t · LME</div>
      </div>
      <div style="font-family:'Space Mono',monospace;font-size:26px;font-weight:700;color:#90caf9;line-height:1;margin-bottom:8px" id="p-alum2">—</div>
      <div style="font-family:'Space Mono',monospace;font-size:11px;margin-bottom:14px" id="c-alum2">—</div>
      <div style="background:var(--bg3);border-radius:5px;padding:7px 10px;font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">MCX / LME · LIVE DATA</div>
    </div>
    <div id="zinc" class="card" style="border-color:rgba(79,195,247,0.25);scroll-margin-top:100px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:2px;color:#4fc3f7">🔵 ZINC</div>
        <div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">$/t · LME</div>
      </div>
      <div style="font-family:'Space Mono',monospace;font-size:26px;font-weight:700;color:#4fc3f7;line-height:1;margin-bottom:8px" id="p-zinc2">—</div>
      <div style="font-family:'Space Mono',monospace;font-size:11px;margin-bottom:14px" id="c-zinc2">—</div>
      <div style="background:var(--bg3);border-radius:5px;padding:7px 10px;font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">MCX / LME · LIVE DATA</div>
    </div>
    <div id="nickel" class="card" style="border-color:rgba(179,157,219,0.25);scroll-margin-top:100px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <div style="font-family:'Vollkorn SC',serif;font-size:13px;letter-spacing:2px;color:#b39ddb">⚫ NICKEL</div>
        <div style="font-size:8px;color:var(--text3);font-family:'Space Mono',monospace">USD/t</div>
      </div>
      <div class="tv" style="height:160px;margin:-14px;margin-top:8px">
        <div class="tradingview-widget-container__widget"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
        {"symbol":"CAPITALCOM:NICKEL","width":"100%","height":160,"locale":"en","dateRange":"1D","colorTheme":"dark","isTransparent":true,"autosize":true}
        </script>
      </div>
    </div>
  </div>

  <div id="commodity-news" class="gnews gap" style="margin-top:4px;scroll-margin-top:100px">
    <div class="card">
      <div class="sh" style="margin-bottom:10px">
        <span style="font-size:15px">📰</span>
        <div><div class="sh-t" style="color:#d4af37">COMMODITY NEWS</div>
        <div class="sh-s">ET · BS · MC · REUTERS · OILPRICE · LIVE</div></div>
      </div>
      <div id="comm-news-list" style="max-height:400px;overflow-y:auto">
        <div style="color:var(--text3);font-size:11px;padding:20px;text-align:center">Loading commodity news…</div>
      </div>
    </div>
    <div class="card">
      <div class="sh" style="margin-bottom:10px">
        <span style="font-size:15px">🌍</span>
        <div><div class="sh-t" style="color:#4caf50">GLOBAL COMMODITY OVERVIEW</div></div>
      </div>
      <div class="tv h400"><div class="tradingview-widget-container__widget"></div>
      <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
      {"colorTheme":"dark","dateRange":"1D","showChart":false,"locale":"en","isTransparent":true,"showSymbolLogo":true,"width":"100%","height":400,
      "tabs":[{"title":"Commodities","symbols":[
        {"s":"TVC:GOLD","d":"Gold"},{"s":"TVC:SILVER","d":"Silver"},
        {"s":"TVC:USOIL","d":"Crude WTI"},{"s":"CAPITALCOM:NATURALGAS","d":"Natural Gas"},
        {"s":"TVC:COPPER","d":"Copper"},{"s":"MCX:ALUMINIUM1!","d":"Aluminium"},
        {"s":"MCX:ZINC1!","d":"Zinc"},{"s":"MCX:NICKEL1!","d":"Nickel"}
      ],"originalTitle":"Commodities"}]}
      </script></div>
    </div>
  </div>

</div><!-- end commodities -->


<!-- ════ GLOBAL ════ -->
<div id="tab-global" class="tab-panel">
  <!-- Forex + Bonds side by side mini charts -->
  <div id="us-markets" class="g2 gap" style="scroll-margin-top:100px">
    <div id="dxy" class="card" style="scroll-margin-top:100px">
      <div class="sh" style="margin-bottom:8px">
        <span style="font-size:13px">💱</span>
        <div><div class="sh-t" style="color:#f472b6">DOLLAR INDEX — DXY</div><div class="sh-s">US DOLLAR STRENGTH · DAILY</div></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px"><div style="font-family:'Space Mono',monospace;font-size:22px;font-weight:700;color:#f472b6" id="p-dxy-g">—</div><div style="font-family:'Space Mono',monospace;font-size:10px" id="c-dxy-g">—</div></div>
      <div class="tv h200"><div class="tradingview-widget-container__widget"></div>
      <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
      {"autosize":true,"symbol":"CAPITALCOM:DXY","interval":"D","timezone":"Asia/Kolkata","theme":"dark","style":"2","locale":"en","hide_volume":true,"enable_publishing":false,"backgroundColor":"rgba(10,15,22,1)","gridColor":"rgba(20,30,46,1)","save_image":false,"support_host":"https://www.tradingview.com"}
      </script></div>
    </div>
    <div id="us-bonds" class="card" style="scroll-margin-top:100px">
      <div class="sh" style="margin-bottom:8px">
        <span style="font-size:13px">🏛️</span>
        <div><div class="sh-t" style="color:#ef9a9a">US 10Y TREASURY YIELD</div><div class="sh-s">BOND MARKET · KEY RATE INDICATOR</div></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:10px;margin-bottom:6px"><div style="font-family:'Space Mono',monospace;font-size:22px;font-weight:700;color:#ef9a9a" id="p-us10y">—</div><div style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">% yield</div></div>
      <div class="tv h200"><div class="tradingview-widget-container__widget"></div>
      <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
      {"autosize":true,"symbol":"FRED:DGS10","interval":"W","timezone":"Asia/Kolkata","theme":"dark","style":"2","locale":"en","hide_volume":true,"enable_publishing":false,"backgroundColor":"rgba(10,15,22,1)","gridColor":"rgba(20,30,46,1)","save_image":false,"support_host":"https://www.tradingview.com"}
      </script></div>
    </div>
  </div>

  <!-- Global Markets widget — intraday 1D only -->
  <div id="global-overview" class="card cu gap" style="padding:0;overflow:hidden;scroll-margin-top:100px">
    <div style="padding:12px 15px 8px;border-bottom:1px solid var(--border)">
      <div style="font-family:'Vollkorn SC',serif;font-size:14px;letter-spacing:2px;color:#4184e4">🌍 GLOBAL MARKETS</div>
      <div style="font-size:9px;color:var(--text3);letter-spacing:1px;margin-top:2px">EUROPE · ASIA · FOREX · BONDS · INTRADAY</div>
    </div>
    <div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js" async>
    {"colorTheme":"dark","dateRange":"1D","showChart":true,"locale":"en","isTransparent":true,"showSymbolLogo":true,"width":"100%","height":500,
    "tabs":[
      {"title":"Europe","symbols":[
        {"s":"INDEX:UKX","d":"FTSE 100"},{"s":"XETR:DAX","d":"DAX"},
        {"s":"INDEX:CAC40","d":"CAC 40"},{"s":"INDEX:SMI","d":"Swiss SMI"},
        {"s":"INDEX:IBEX35","d":"IBEX 35"},{"s":"INDEX:FTSEMIB","d":"FTSE MIB Italy"},
        {"s":"EURONEXT:AEX","d":"AEX Netherlands"},{"s":"INDEX:OMX","d":"OMX Stockholm"}
      ],"originalTitle":"Europe"},
      {"title":"Asia","symbols":[
        {"s":"INDEX:NKY","d":"Nikkei 225"},{"s":"HSI:HSI","d":"Hang Seng"},
        {"s":"SSE:000001","d":"Shanghai"},{"s":"KRX:KOSPI","d":"KOSPI"},
        {"s":"ASX:XJO","d":"ASX 200"},{"s":"SGX:STI","d":"Singapore"},
        {"s":"IDX:COMPOSITE","d":"Jakarta"},{"s":"TWSE:TAIEX","d":"Taiwan"}
      ],"originalTitle":"Asia"},
      {"title":"Forex","symbols":[
        {"s":"FX_IDC:USDINR","d":"USD/INR"},{"s":"FX:EURUSD","d":"EUR/USD"},
        {"s":"FX:GBPUSD","d":"GBP/USD"},{"s":"FX:USDJPY","d":"USD/JPY"},
        {"s":"FX:USDCNH","d":"USD/CNH"},{"s":"TVC:DXY","d":"Dollar Index"},
        {"s":"FX:AUDUSD","d":"AUD/USD"},{"s":"FX:USDCHF","d":"USD/CHF"}
      ],"originalTitle":"Forex"},
      {"title":"Bonds","symbols":[
        {"s":"TVC:US10Y","d":"US 10Y Yield"},{"s":"TVC:US05Y","d":"US 5Y Yield"},
        {"s":"TVC:US03Y","d":"US 3Y Yield"},{"s":"TVC:US01Y","d":"US 1Y Yield"},
        {"s":"TVC:US30Y","d":"US 30Y Yield"},{"s":"EUREX:FGBL1!","d":"German Bund"},
        {"s":"EUREX:FGBM1!","d":"Euro Bobl"},{"s":"TVC:IN10Y","d":"India 10Y Yield"}
      ],"originalTitle":"Bonds"}
    ]}
    </script>
  </div>

  <!-- Economic Calendar — full width, India focused -->
  <div id="economic-calendar" class="card gap" style="scroll-margin-top:100px">
    <div class="sh" style="margin-bottom:10px">
      <span style="font-size:15px">📅</span>
      <div><div class="sh-t" style="color:#FF9933">ECONOMIC CALENDAR</div><div class="sh-s">HIGH IMPACT EVENTS · INDIA · US · EU · JAPAN · CHINA</div></div>
    </div>
    <div class="tv h500"><div class="tradingview-widget-container__widget"></div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-events.js" async>
    {"colorTheme":"dark","isTransparent":true,"width":"100%","height":500,"locale":"en","importanceFilter":"0,1","countryFilter":"in,us,eu,gb,jp,cn,au,ca","showActual":true,"showPrevious":true,"showForecast":true}
    </script></div>
  </div>

</div>

<!-- ════ HEATMAP ════ -->
<div id="tab-heatmap" class="tab-panel">
<div id="fno-heatmap" class="card" style="padding:0;overflow:hidden;scroll-margin-top:100px">

    <!-- Header bar -->
    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid var(--border);flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-family:'Vollkorn SC',serif;font-size:16px;letter-spacing:2.5px;color:#FF9933">🇮🇳 INDIA F&O STOCKS — HEATMAP</div>
        <div style="font-size:9px;color:var(--text3);letter-spacing:1px;margin-top:2px">NSE · BSE F&O SEGMENT · ~160 STOCKS · BOX SIZE = MAGNITUDE OF MOVE · COLOUR = DIRECTION</div>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        <!-- Legend -->
        <div style="display:flex;align-items:center;gap:6px;font-size:9px;font-family:'Space Mono',monospace">
          <div style="width:28px;height:14px;border-radius:3px;background:#1b5e20"></div><span style="color:var(--text3)">&gt;3%</span>
          <div style="width:28px;height:14px;border-radius:3px;background:#388e3c"></div><span style="color:var(--text3)">1-3%</span>
          <div style="width:28px;height:14px;border-radius:3px;background:#2d4257"></div><span style="color:var(--text3)">~0%</span>
          <div style="width:28px;height:14px;border-radius:3px;background:#c62828"></div><span style="color:var(--text3)">1-3%</span>
          <div style="width:28px;height:14px;border-radius:3px;background:#7f0000"></div><span style="color:var(--text3)">&gt;3%</span>
        </div>
        <!-- View toggle -->
        <div style="display:flex;gap:4px">
          <button onclick="setHmView('sector')" id="hm-btn-sector" style="font-size:9px;font-family:'Space Mono',monospace;padding:3px 10px;border-radius:4px;border:1px solid rgba(255,153,51,0.4);background:rgba(255,153,51,0.15);color:#FF9933;cursor:pointer;letter-spacing:1px">BY SECTOR</button>
          <button onclick="setHmView('flat')" id="hm-btn-flat" style="font-size:9px;font-family:'Space Mono',monospace;padding:3px 10px;border-radius:4px;border:1px solid var(--border);background:transparent;color:var(--text3);cursor:pointer;letter-spacing:1px">ALL STOCKS</button>
        </div>
        <span style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace" id="hm-ts"></span>
        <button onclick="loadHeatmap(true)" style="font-size:9px;font-family:'Space Mono',monospace;padding:3px 8px;border-radius:4px;border:1px solid var(--border2);background:transparent;color:var(--text3);cursor:pointer">↻</button>
      </div>
    </div>

    <!-- Tooltip -->
    <div id="hm-tooltip" style="display:none;position:fixed;z-index:9999;pointer-events:none;background:rgba(6,10,14,0.97);border:1px solid var(--border2);border-radius:8px;padding:10px 14px;font-family:'Space Mono',monospace;min-width:160px;box-shadow:0 8px 32px rgba(0,0,0,0.5)"></div>

    <!-- Heatmap canvas -->
    <div id="hm-container" style="width:100%;position:relative;background:var(--bg);overflow:hidden">
      <div id="hm-loading" style="height:600px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:var(--text3)">
        <div style="width:32px;height:32px;border:2px solid var(--border2);border-top-color:#FF9933;border-radius:50%;animation:spin 0.8s linear infinite"></div>
        <div style="font-size:11px;letter-spacing:1px">LOADING F&O STOCKS...</div>
      </div>
      <div id="hm-map" style="display:none;padding:8px;position:relative;overflow:hidden"></div>
    </div>

  </div>

<!-- NIFTY FUTURES — OI, PCR, Levels ─────────────────────────── -->
  <div class="sh">
    <span style="font-size:15px">📊</span>
    <div><div class="sh-t" style="color:#FF9933">NIFTY FUTURES & OPTIONS DATA</div>
    <div class="sh-s">INDEX · FUTURES · OI · PCR · OPTIONS</div></div>
    <div class="sh-l" style="background:linear-gradient(90deg,rgba(255,153,51,.3),transparent)"></div>
  </div>

  <!-- Row 1: Near-month F&O index cards from Yahoo Finance backend -->
  <div class="g4 gap">
    <div class="card">
      <div style="font-family:'Vollkorn SC',serif;font-size:11px;letter-spacing:2px;color:#f0c040;margin-bottom:6px">NIFTY 50 — NEAR FUT</div>
      <div style="font-family:'Space Mono',monospace;font-size:20px;font-weight:700;color:#f0c040;line-height:1.1" id="hm-p-n50">—</div>
      <div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:5px" id="hm-ch-n50">—</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px"><div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">HIGH</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px;font-weight:600" id="hm-hi-n50">—</div></div><div style="background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">LOW</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px;font-weight:600" id="hm-lo-n50">—</div></div></div>
      <div style="font-size:8px;color:var(--text3);margin-top:6px;font-family:'Space Mono',monospace">Yahoo Finance · Cached</div>
    </div>
    <div class="card">
      <div style="font-family:'Vollkorn SC',serif;font-size:11px;letter-spacing:2px;color:#81c784;margin-bottom:6px">BANK NIFTY — NEAR FUT</div>
      <div style="font-family:'Space Mono',monospace;font-size:20px;font-weight:700;color:#81c784;line-height:1.1" id="hm-p-bn">—</div>
      <div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:5px" id="hm-ch-bn">—</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px"><div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">HIGH</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px;font-weight:600" id="hm-hi-bn">—</div></div><div style="background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">LOW</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px;font-weight:600" id="hm-lo-bn">—</div></div></div>
      <div style="font-size:8px;color:var(--text3);margin-top:6px;font-family:'Space Mono',monospace">Yahoo Finance · Cached</div>
    </div>
    <div class="card">
      <div style="font-family:'Vollkorn SC',serif;font-size:11px;letter-spacing:2px;color:#4fc3f7;margin-bottom:6px">SENSEX — NEAR FUT</div>
      <div style="font-family:'Space Mono',monospace;font-size:20px;font-weight:700;color:#4fc3f7;line-height:1.1" id="hm-p-sx">—</div>
      <div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:5px" id="hm-ch-sx">—</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px;margin-top:6px"><div style="background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">HIGH</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#4caf50;margin-top:2px;font-weight:600" id="hm-hi-sx">—</div></div><div style="background:rgba(244,67,54,0.08);border:1px solid rgba(244,67,54,0.15);border-radius:4px;padding:4px 6px"><div style="font-size:7px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px">LOW</div><div style="font-size:10px;font-family:'Space Mono',monospace;color:#f44336;margin-top:2px;font-weight:600" id="hm-lo-sx">—</div></div></div>
      <div style="font-size:8px;color:var(--text3);margin-top:6px;font-family:'Space Mono',monospace">Yahoo Finance · Cached</div>
    </div>
    <div class="card">
      <div style="font-family:'Vollkorn SC',serif;font-size:11px;letter-spacing:2px;color:#ef9a9a;margin-bottom:6px">INDIA VIX — VOLATILITY</div>
      <div style="font-family:'Space Mono',monospace;font-size:20px;font-weight:700;color:#ef9a9a;line-height:1.1" id="hm-p-vix">—</div>
      <div style="font-family:'Space Mono',monospace;font-size:10px;margin-top:5px" id="hm-ch-vix">—</div>
      <div style="font-size:8px;color:var(--text3);margin-top:6px;font-family:'Space Mono',monospace">Yahoo Finance · Cached</div>
    </div>
  </div>


  <!-- Row 2: OI Analysis + PCR + Key Levels — built from backend data -->
  <div class="g2 gap">

    <!-- Top OI Stocks -->
    <div class="card">
      <div class="sh" style="margin-bottom:10px">
        <span style="font-size:13px">🔥</span>
        <div><div class="sh-t" style="color:#FF9933">HIGH OI — F&O STOCKS</div>
        <div class="sh-s">TOP OPEN INTEREST · NSE F&O SEGMENT · LIVE</div></div>
      </div>
      <div id="oi-table" style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-family:'Space Mono',monospace;font-size:10px">
          <thead>
            <tr style="border-bottom:1px solid var(--border2);color:var(--text3)">
              <th style="text-align:left;padding:5px 8px;letter-spacing:1px">SYMBOL</th>
              <th style="text-align:right;padding:5px 8px;letter-spacing:1px">PRICE</th>
              <th style="text-align:right;padding:5px 8px;letter-spacing:1px">CHG%</th>
              <th style="text-align:right;padding:5px 8px;letter-spacing:1px">SECTOR</th>
            </tr>
          </thead>
          <tbody id="oi-tbody">
            <tr><td colspan="4" style="text-align:center;padding:20px;color:var(--text3)">Loading heatmap data…</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Index Option Chain Data -->
    <div class="card">
      <div class="sh" style="margin-bottom:12px">
        <span style="font-size:13px">📊</span>
        <div><div class="sh-t" style="color:#67e8f9">INDEX OPTION DATA</div>
        <div class="sh-s">PCR · MAX PAIN · OI · NEAR EXPIRY</div></div>
      </div>
      <div id="opt-section">
        <!-- PCR Gauges -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
          <div style="background:var(--bg3);border-radius:6px;padding:10px">
            <div style="font-size:8px;color:var(--text3);letter-spacing:1px;margin-bottom:4px">NIFTY PCR (OI)</div>
            <div style="display:flex;align-items:baseline;gap:6px">
              <div style="font-size:18px;font-weight:700;font-family:'Space Mono',monospace;color:#f0c040" id="opt-nifty-pcr">—</div>
              <div style="font-size:9px;font-family:'Space Mono',monospace" id="opt-nifty-pcr-signal" style="color:var(--text3)">—</div>
            </div>
            <div style="margin-top:6px;height:4px;background:var(--bg2);border-radius:2px;overflow:hidden">
              <div id="opt-nifty-pcr-bar" style="height:100%;width:50%;background:linear-gradient(90deg,#f44336,#ff9800,#4caf50);border-radius:2px;transition:width .3s"></div>
            </div>
          </div>
          <div style="background:var(--bg3);border-radius:6px;padding:10px">
            <div style="font-size:8px;color:var(--text3);letter-spacing:1px;margin-bottom:4px">BANKNIFTY PCR (OI)</div>
            <div style="display:flex;align-items:baseline;gap:6px">
              <div style="font-size:18px;font-weight:700;font-family:'Space Mono',monospace;color:#81c784" id="opt-bn-pcr">—</div>
              <div style="font-size:9px;font-family:'Space Mono',monospace" id="opt-bn-pcr-signal" style="color:var(--text3)">—</div>
            </div>
            <div style="margin-top:6px;height:4px;background:var(--bg2);border-radius:2px;overflow:hidden">
              <div id="opt-bn-pcr-bar" style="height:100%;width:50%;background:linear-gradient(90deg,#f44336,#ff9800,#4caf50);border-radius:2px;transition:width .3s"></div>
            </div>
          </div>
        </div>
        <!-- Max Pain + Expiry -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px">
          <div style="background:var(--bg3);border-radius:6px;padding:10px">
            <div style="font-size:8px;color:var(--text3);letter-spacing:1px;margin-bottom:4px">NIFTY MAX PAIN</div>
            <div style="font-size:16px;font-weight:700;font-family:'Space Mono',monospace;color:#a78bfa" id="opt-nifty-mp">—</div>
            <div style="font-size:8px;color:var(--text3);margin-top:3px;font-family:'Space Mono',monospace" id="opt-nifty-expiry">—</div>
          </div>
          <div style="background:var(--bg3);border-radius:6px;padding:10px">
            <div style="font-size:8px;color:var(--text3);letter-spacing:1px;margin-bottom:4px">BANKNIFTY MAX PAIN</div>
            <div style="font-size:16px;font-weight:700;font-family:'Space Mono',monospace;color:#4fc3f7" id="opt-bn-mp">—</div>
            <div style="font-size:8px;color:var(--text3);margin-top:3px;font-family:'Space Mono',monospace" id="opt-bn-expiry">—</div>
          </div>
        </div>
        <!-- Top OI Strikes -->
        <div style="margin-bottom:8px">
          <div style="font-size:9px;color:var(--text3);letter-spacing:1px;margin-bottom:8px;font-family:'Space Mono',monospace">NIFTY — TOP OI STRIKES</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
            <div>
              <div style="font-size:7px;color:#4caf50;letter-spacing:1px;margin-bottom:4px">CALL OI (RESISTANCE)</div>
              <div id="opt-nifty-call-oi" style="font-family:'Space Mono',monospace;font-size:10px">
                <div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border)"><span style="color:var(--text3)">—</span><span style="color:#4caf50">—</span></div>
                <div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border)"><span style="color:var(--text3)">—</span><span style="color:#4caf50">—</span></div>
                <div style="display:flex;justify-content:space-between;padding:3px 0"><span style="color:var(--text3)">—</span><span style="color:#4caf50">—</span></div>
              </div>
            </div>
            <div>
              <div style="font-size:7px;color:#f44336;letter-spacing:1px;margin-bottom:4px">PUT OI (SUPPORT)</div>
              <div id="opt-nifty-put-oi" style="font-family:'Space Mono',monospace;font-size:10px">
                <div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border)"><span style="color:var(--text3)">—</span><span style="color:#f44336">—</span></div>
                <div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border)"><span style="color:var(--text3)">—</span><span style="color:#f44336">—</span></div>
                <div style="display:flex;justify-content:space-between;padding:3px 0"><span style="color:var(--text3)">—</span><span style="color:#f44336">—</span></div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding:8px;background:var(--bg3);border-radius:6px;font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">
          * NSE Option Chain · Near-month expiry · Updates every 3 min during market hours · <span id="opt-ts">—</span>
        </div>
      </div>
    </div>

  </div>

  <!-- NSE F&O Overview — cached heatmap data -->
  <div class="card gap">
    <div class="sh" style="margin-bottom:10px">
      <span style="font-size:13px">🌡️</span>
      <div><div class="sh-t" style="color:#4caf50">NSE F&O — MARKET OVERVIEW</div>
      <div class="sh-s">TOP F&O STOCKS · LAST CACHED · <span id="fno-ts" style="color:#4caf50"></span></div></div>
    </div>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-family:'Space Mono',monospace;font-size:10px">
        <thead><tr style="border-bottom:1px solid var(--border2)">
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-weight:400">#</th>
          <th style="text-align:left;padding:4px 8px;color:var(--text3);font-weight:400">SYMBOL</th>
          <th style="text-align:right;padding:4px 8px;color:var(--text3);font-weight:400">PRICE</th>
          <th style="text-align:right;padding:4px 8px;color:var(--text3);font-weight:400">CHG%</th>
          <th style="text-align:right;padding:4px 8px;color:var(--text3);font-weight:400">SECTOR</th>
        </tr></thead>
        <tbody id="fno-tbody">
          <tr><td colspan="5" style="text-align:center;padding:20px;color:var(--text3)">Loads when heatmap data is available…</td></tr>
        </tbody>
      </table>
    </div>
  </div>


<!-- ════ ANALYSIS TAB ════ -->
<div id="tab-analysis" class="tab-panel">

  <!-- Article Reader Modal -->
  <div id="article-modal" style="display:none;position:fixed;inset:0;z-index:900;background:rgba(4,8,14,.92);backdrop-filter:blur(8px);overflow-y:auto" onclick="if(event.target===this)closeArticle()">
    <div style="max-width:780px;margin:40px auto;background:var(--bg2);border:1px solid var(--border2);border-radius:14px;overflow:hidden;position:relative">
      <!-- Close -->
      <button onclick="closeArticle()" style="position:absolute;top:14px;right:16px;background:rgba(255,255,255,0.06);border:1px solid var(--border2);color:var(--text3);width:30px;height:30px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;z-index:10">✕</button>
      <!-- Header band -->
      <div id="art-header" style="padding:28px 36px 20px;border-bottom:1px solid var(--border)">
        <div id="art-cat-badge" style="display:inline-block;font-family:'Space Mono',monospace;font-size:9px;font-weight:700;letter-spacing:2px;padding:3px 10px;border-radius:4px;margin-bottom:12px"></div>
        <h1 id="art-title" style="font-family:'Vollkorn SC',serif;font-size:26px;letter-spacing:1px;color:#e2e8f0;line-height:1.3;margin-bottom:10px"></h1>
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
          <span id="art-ticker" style="font-family:'Space Mono',monospace;font-size:11px;color:var(--saffron)"></span>
          <span id="art-date" style="font-size:10px;color:var(--text3);font-family:'Space Mono',monospace"></span>
          <span id="art-author" style="font-size:10px;color:var(--text3)"></span>
        </div>
      </div>
      <!-- TradingView chart (injected if ticker set) -->
      <div id="art-chart-wrap" style="display:none;border-bottom:1px solid var(--border)">
        <div id="art-chart" style="height:260px"></div>
      </div>
      <!-- Body -->
      <div id="art-body" style="padding:28px 36px 36px;font-family:'Vollkorn',serif;font-size:15px;line-height:1.9;color:var(--text)"></div>
      <!-- Footer actions -->
      <div style="padding:14px 36px 20px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
        <button id="art-edit-btn" onclick="editCurrentArticle()" style="background:rgba(255,153,51,0.1);border:1px solid rgba(255,153,51,0.3);color:#FF9933;font-size:10px;padding:4px 14px;border-radius:5px;cursor:pointer;font-family:'Space Mono',monospace">✏ Edit</button>
        <button onclick="closeArticle()" style="background:transparent;border:1px solid var(--border2);color:var(--text3);font-size:10px;padding:4px 14px;border-radius:5px;cursor:pointer;font-family:'Space Mono',monospace">Close</button>
      </div>
    </div>
  </div>

  <!-- Article Editor Modal -->
  <div id="article-editor" style="display:none;position:fixed;inset:0;z-index:950;background:rgba(4,8,14,.95);backdrop-filter:blur(8px);overflow-y:auto">
    <div style="max-width:780px;margin:40px auto;background:var(--bg2);border:1px solid var(--border2);border-radius:14px;overflow:hidden">
      <div style="padding:20px 28px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
        <div style="font-family:'Vollkorn SC',serif;font-size:14px;letter-spacing:2px;color:#FF9933" id="editor-title-label">NEW ARTICLE</div>
        <button onclick="closeEditor()" style="background:transparent;border:1px solid var(--border2);color:var(--text3);font-size:11px;padding:3px 12px;border-radius:4px;cursor:pointer;font-family:'Space Mono',monospace">✕ Cancel</button>
      </div>
      <div style="padding:22px 28px;display:flex;flex-direction:column;gap:14px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div>
            <label style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px;display:block;margin-bottom:5px">CATEGORY</label>
            <select id="ed-category" style="width:100%;background:var(--bg3);border:1px solid var(--border2);color:var(--text);font-family:'Space Mono',monospace;font-size:11px;padding:7px 10px;border-radius:6px;outline:none">
              <option value="stock">📈 Stock Analysis</option>
              <option value="commodity">🥇 Commodity Analysis</option>
            </select>
          </div>
          <div>
            <label style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px;display:block;margin-bottom:5px">TICKER / SYMBOL (optional)</label>
            <input id="ed-ticker" placeholder="e.g. RELIANCE, GOLD, NIFTY50" style="width:100%;background:var(--bg3);border:1px solid var(--border2);color:var(--text);font-family:'Space Mono',monospace;font-size:11px;padding:7px 10px;border-radius:6px;outline:none" />
          </div>
        </div>
        <div>
          <label style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px;display:block;margin-bottom:5px">ARTICLE TITLE</label>
          <input id="ed-title" placeholder="e.g. Reliance Industries — Q4 FY26 Deep Dive" style="width:100%;background:var(--bg3);border:1px solid var(--border2);color:var(--text);font-family:'Vollkorn SC',serif;font-size:15px;padding:9px 12px;border-radius:6px;outline:none" />
        </div>
        <div>
          <label style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px;display:block;margin-bottom:5px">AUTHOR (optional)</label>
          <input id="ed-author" placeholder="e.g. Bazaar Watch Research" style="width:100%;background:var(--bg3);border:1px solid var(--border2);color:var(--text);font-family:'Vollkorn',serif;font-size:12px;padding:7px 10px;border-radius:6px;outline:none" />
        </div>
        <div>
          <label style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace;letter-spacing:1px;display:block;margin-bottom:5px">ARTICLE BODY — supports blank lines between paragraphs</label>
          <textarea id="ed-body" rows="16" placeholder="Write your analysis here...

Each blank line creates a new paragraph.

Use **bold text** with double asterisks.
Use ==highlighted== with double equals for key data points." style="width:100%;background:var(--bg3);border:1px solid var(--border2);color:var(--text);font-family:'Vollkorn',serif;font-size:13px;line-height:1.7;padding:10px 12px;border-radius:6px;outline:none;resize:vertical"></textarea>
        </div>
        <div style="display:flex;gap:10px;justify-content:flex-end">
          <button onclick="deleteCurrentArticle()" id="ed-delete-btn" style="display:none;background:rgba(244,67,54,0.1);border:1px solid rgba(244,67,54,0.3);color:#f44336;font-size:10px;padding:5px 16px;border-radius:5px;cursor:pointer;font-family:'Space Mono',monospace">🗑 Delete</button>
          <button onclick="saveArticle()" style="background:rgba(255,153,51,0.15);border:1px solid rgba(255,153,51,0.4);color:#FF9933;font-size:11px;font-weight:700;padding:6px 22px;border-radius:5px;cursor:pointer;font-family:'Space Mono',monospace">💾 Publish</button>
        </div>
      </div>
    </div>
  </div>

  <!-- ── Analysis Tab Content ── -->
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;flex-wrap:wrap;gap:12px">
    <div>
      <div style="font-family:'Vollkorn SC',serif;font-size:22px;letter-spacing:3px;color:#e2e8f0">📝 ANALYSIS</div>
      <div style="font-size:10px;color:var(--text3);letter-spacing:1.5px;margin-top:3px;font-family:'Space Mono',monospace">STOCK RESEARCH · COMMODITY ANALYSIS · BAZAAR WATCH</div>
    </div>
    <button onclick="newArticle()" style="background:rgba(255,153,51,0.12);border:1px solid rgba(255,153,51,0.35);color:#FF9933;font-size:11px;font-weight:700;padding:7px 18px;border-radius:6px;cursor:pointer;font-family:'Space Mono',monospace;letter-spacing:1px">+ NEW ARTICLE</button>
  </div>

  <!-- Stock Analysis section -->
  <div class="sh" style="margin-bottom:14px">
    <span style="font-size:15px">📈</span>
    <div><div class="sh-t" style="color:#4caf50">STOCK ANALYSIS</div><div class="sh-s">FUNDAMENTAL · TECHNICAL · EARNINGS DEEP-DIVES</div></div>
    <div class="sh-l" style="background:linear-gradient(90deg,rgba(76,175,80,.3),transparent)"></div>
  </div>
  <div id="stock-articles-grid" class="gap" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px">
    <div style="border:1px dashed var(--border2);border-radius:10px;padding:28px;text-align:center;color:var(--text3);font-size:12px;font-family:'Vollkorn',serif;font-style:italic">
      No stock analyses yet — click <strong style="color:#FF9933">+ New Article</strong> to write your first
    </div>
  </div>

  <!-- Commodity Analysis section -->
  <div class="sh" style="margin-bottom:14px;margin-top:6px">
    <span style="font-size:15px">🥇</span>
    <div><div class="sh-t" style="color:#d4af37">COMMODITY ANALYSIS</div><div class="sh-s">GOLD · CRUDE · METALS · ENERGY · AGRI</div></div>
    <div class="sh-l" style="background:linear-gradient(90deg,rgba(212,175,55,.3),transparent)"></div>
  </div>
  <div id="commodity-articles-grid" class="gap" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px">
    <div style="border:1px dashed var(--border2);border-radius:10px;padding:28px;text-align:center;color:var(--text3);font-size:12px;font-family:'Vollkorn',serif;font-style:italic">
      No commodity analyses yet — click <strong style="color:#FF9933">+ New Article</strong> to write your first
    </div>
  </div>

</div><!-- end analysis tab -->

<style>
.art-card {
  background:var(--bg2);border:1px solid var(--border);border-radius:10px;
  padding:20px 22px;cursor:pointer;transition:all .18s;position:relative;overflow:hidden;
}
.art-card:hover { border-color:rgba(255,153,51,.35); background:var(--bg3); transform:translateY(-2px); box-shadow:0 6px 24px rgba(0,0,0,.3); }
.art-card-cat { font-family:'Space Mono',monospace;font-size:8px;font-weight:700;letter-spacing:2px;padding:2px 8px;border-radius:3px;display:inline-block;margin-bottom:10px }
.art-card-title { font-family:'Vollkorn SC',serif;font-size:15px;letter-spacing:.5px;color:#e2e8f0;line-height:1.4;margin-bottom:8px }
.art-card-excerpt { font-family:'Vollkorn',serif;font-size:12px;color:var(--text2);line-height:1.6;margin-bottom:12px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden }
.art-card-meta { display:flex;align-items:center;gap:10px;flex-wrap:wrap }
.art-card-ticker { font-family:'Space Mono',monospace;font-size:10px;color:var(--saffron);font-weight:700 }
.art-card-date { font-family:'Space Mono',monospace;font-size:9px;color:var(--text3) }
.art-card-shine { position:absolute;top:0;right:0;width:80px;height:80px;background:radial-gradient(circle,rgba(255,153,51,.06),transparent);pointer-events:none }
</style>

<script>
// ── Article System ──────────────────────────────────────────────────────────
const ART_KEY = 'bw_articles_v1';
let _articles = [];
let _editingId = null;
let _viewingId = null;

function loadArticles() {
  try { _articles = JSON.parse(localStorage.getItem(ART_KEY) || '[]'); } catch(e) { _articles = []; }
}
function saveArticles() {
  try { localStorage.setItem(ART_KEY, JSON.stringify(_articles)); } catch(e) {}
}

function renderArticleGrids() {
  loadArticles();
  const stockGrid  = document.getElementById('stock-articles-grid');
  const commGrid   = document.getElementById('commodity-articles-grid');
  if (!stockGrid || !commGrid) return;

  const stocks = _articles.filter(a => a.category === 'stock');
  const comms  = _articles.filter(a => a.category === 'commodity');

  const empty = (label) =>
    `<div style="border:1px dashed var(--border2);border-radius:10px;padding:28px;text-align:center;color:var(--text3);font-size:12px;font-family:'Vollkorn',serif;font-style:italic">
      No ${label} yet — click <strong style="color:#FF9933">+ New Article</strong> to write your first
    </div>`;

  stockGrid.innerHTML = stocks.length ? stocks.map(artCard).join('') : empty('stock analyses');
  commGrid.innerHTML  = comms.length  ? comms.map(artCard).join('')  : empty('commodity analyses');
}

function artCard(a) {
  const excerpt = (a.body || '').replace(/\*\*/g,'').replace(/==/g,'').split('
').filter(l=>l.trim())[0] || '';
  const dateStr = a.date ? new Date(a.date).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}) : '';
  const catCol  = a.category === 'stock' ? '#4caf50' : '#d4af37';
  const catBg   = a.category === 'stock' ? 'rgba(76,175,80,0.12)' : 'rgba(212,175,55,0.12)';
  const catLbl  = a.category === 'stock' ? '📈 STOCK' : '🥇 COMMODITY';
  return `<div class="art-card" onclick="openArticle('${a.id}')">
    <div class="art-card-shine"></div>
    <div class="art-card-cat" style="background:${catBg};color:${catCol}">${catLbl}</div>
    <div class="art-card-title">${a.title || 'Untitled'}</div>
    <div class="art-card-excerpt">${excerpt}</div>
    <div class="art-card-meta">
      ${a.ticker ? `<span class="art-card-ticker">${a.ticker}</span>` : ''}
      ${dateStr  ? `<span class="art-card-date">${dateStr}</span>` : ''}
      ${a.author ? `<span style="font-size:9px;color:var(--text3);font-family:'Vollkorn',serif">${a.author}</span>` : ''}
    </div>
  </div>`;
}

function openArticle(id) {
  loadArticles();
  const a = _articles.find(x => x.id === id);
  if (!a) return;
  _viewingId = id;

  // ── Update meta for this article (for sharing while article is open)
  const artSlug  = (a.title||'untitled').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  const artUrl   = `https://bazaarwatch.in/analysis/${artSlug}`;
  const artExcerpt = (a.body||'').replace(/\*\*/g,'').replace(/==/g,'').split('\n').filter(l=>l.trim())[0]||'';
  document.title = `${a.title||'Analysis'} — Bazaar Watch`;
  const ogTitle = document.getElementById('og-title');
  const ogDesc  = document.getElementById('og-desc');
  const ogUrl   = document.getElementById('og-url');
  const twTitle = document.getElementById('tw-title');
  const twDesc  = document.getElementById('tw-desc');
  if (ogTitle) ogTitle.setAttribute('content', `${a.title} — Bazaar Watch`);
  if (ogDesc)  ogDesc.setAttribute('content', artExcerpt.slice(0,160));
  if (ogUrl)   ogUrl.setAttribute('content', artUrl);
  if (twTitle) twTitle.setAttribute('content', `${a.title} — Bazaar Watch`);
  if (twDesc)  twDesc.setAttribute('content', artExcerpt.slice(0,160));
  history.pushState({ tab:'analysis', artId: a.id }, a.title, `#analysis/${artSlug}`);

  // ── Article schema markup ──────────────────────────────────────────────────
  const existingSchema = document.getElementById('article-schema');
  if (existingSchema) existingSchema.remove();
  const schema = document.createElement('script');
  schema.id   = 'article-schema';
  schema.type = 'application/ld+json';
  schema.text = JSON.stringify({
    "@context":       "https://schema.org",
    "@type":          "Article",
    "headline":       a.title || '',
    "description":    artExcerpt.slice(0, 160),
    "author":         { "@type": "Person", "name": a.author || "Bazaar Watch Research" },
    "publisher":      { "@type": "Organization", "name": "Bazaar Watch", "url": "https://bazaarwatch.in" },
    "datePublished":  a.date || new Date().toISOString(),
    "dateModified":   a.updatedAt || a.date || new Date().toISOString(),
    "url":            artUrl,
    "about":          a.ticker ? { "@type": "Thing", "name": a.ticker } : undefined,
    "articleSection": a.category === 'stock' ? 'Stock Analysis' : 'Commodity Analysis',
    "inLanguage":     "en-IN"
  });
  document.head.appendChild(schema);

  const catCol = a.category === 'stock' ? '#4caf50' : '#d4af37';
  const catBg  = a.category === 'stock' ? 'rgba(76,175,80,0.12)' : 'rgba(212,175,55,0.12)';
  const catLbl = a.category === 'stock' ? '📈 STOCK ANALYSIS' : '🥇 COMMODITY ANALYSIS';

  document.getElementById('art-cat-badge').textContent = catLbl;
  document.getElementById('art-cat-badge').style.cssText = `background:${catBg};color:${catCol};display:inline-block;font-family:'Space Mono',monospace;font-size:9px;font-weight:700;letter-spacing:2px;padding:3px 10px;border-radius:4px;margin-bottom:12px`;
  document.getElementById('art-title').textContent  = a.title || 'Untitled';
  document.getElementById('art-ticker').textContent = a.ticker ? `⬡ ${a.ticker}` : '';
  document.getElementById('art-date').textContent   = a.date ? new Date(a.date).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'}) : '';
  document.getElementById('art-author').textContent = a.author ? `by ${a.author}` : '';

  // Render body — blank lines = paragraphs, **text** = bold, ==text== = highlight
  const bodyHtml = (a.body || '').split(/

+/).map(para => {
    const p = para.trim();
    if (!p) return '';
    const html = p
      .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#e2e8f0">$1</strong>')
      .replace(/==(.+?)==/g, '<mark style="background:rgba(255,153,51,0.18);color:#FF9933;padding:1px 4px;border-radius:3px">$1</mark>')
      .replace(/
/g, '<br>');
    return `<p style="margin:0 0 18px 0">${html}</p>`;
  }).join('');
  document.getElementById('art-body').innerHTML = bodyHtml || '<p style="color:var(--text3);font-style:italic">No content yet.</p>';

  // TradingView chart if ticker provided
  const chartWrap = document.getElementById('art-chart-wrap');
  const chartDiv  = document.getElementById('art-chart');
  if (a.ticker && a.tvSymbol) {
    chartWrap.style.display = 'block';
    chartDiv.innerHTML = '';
    const s = document.createElement('script');
    s.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    s.async = true;
    s.text = JSON.stringify({ symbol: a.tvSymbol, width:'100%', height:260, locale:'en', dateRange:'3M', colorTheme:'dark', isTransparent:true, autosize:true });
    chartDiv.appendChild(s);
  } else {
    chartWrap.style.display = 'none';
    chartDiv.innerHTML = '';
  }

  document.getElementById('article-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeArticle() {
  document.getElementById('article-modal').style.display = 'none';
  document.body.style.overflow = '';
  _viewingId = null;
  // Restore analysis page meta
  updatePageMeta('analysis');
  // Remove article schema
  const s = document.getElementById('article-schema');
  if (s) s.remove();
}

function newArticle() {
  const pwd = prompt('Admin password:');
  if (!pwd) return;
  if (pwd !== (localStorage.getItem('bw_admin_pwd') || pwd)) {
    if (!localStorage.getItem('bw_admin_pwd')) {
      if (confirm(`Set "${pwd}" as admin password?`)) localStorage.setItem('bw_admin_pwd', pwd);
      else return;
    } else { alert('Incorrect password.'); return; }
  }
  _editingId = null;
  document.getElementById('editor-title-label').textContent = 'NEW ARTICLE';
  document.getElementById('ed-title').value    = '';
  document.getElementById('ed-category').value = 'stock';
  document.getElementById('ed-ticker').value   = '';
  document.getElementById('ed-author').value   = '';
  document.getElementById('ed-body').value     = '';
  document.getElementById('ed-delete-btn').style.display = 'none';
  document.getElementById('article-editor').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function editCurrentArticle() {
  if (!_viewingId) return;
  const pwd = prompt('Admin password:');
  if (!pwd || pwd !== localStorage.getItem('bw_admin_pwd')) { alert('Incorrect password.'); return; }
  loadArticles();
  const a = _articles.find(x => x.id === _viewingId);
  if (!a) return;
  _editingId = _viewingId;
  closeArticle();
  document.getElementById('editor-title-label').textContent = 'EDIT ARTICLE';
  document.getElementById('ed-title').value    = a.title || '';
  document.getElementById('ed-category').value = a.category || 'stock';
  document.getElementById('ed-ticker').value   = a.ticker || '';
  document.getElementById('ed-author').value   = a.author || '';
  document.getElementById('ed-body').value     = a.body || '';
  document.getElementById('ed-delete-btn').style.display = 'block';
  document.getElementById('article-editor').style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeEditor() {
  document.getElementById('article-editor').style.display = 'none';
  document.body.style.overflow = '';
  _editingId = null;
}

function saveArticle() {
  loadArticles();
  const title    = document.getElementById('ed-title').value.trim();
  const category = document.getElementById('ed-category').value;
  const ticker   = document.getElementById('ed-ticker').value.trim().toUpperCase();
  const author   = document.getElementById('ed-author').value.trim();
  const body     = document.getElementById('ed-body').value.trim();
  if (!title) { alert('Please add a title.'); return; }
  if (!body)  { alert('Please add article content.'); return; }

  // Map common tickers to TradingView symbols
  const tvMap = {
    'RELIANCE':'NSE:RELIANCE','TCS':'NSE:TCS','INFY':'NSE:INFY','HDFC':'NSE:HDFCBANK',
    'HDFCBANK':'NSE:HDFCBANK','ICICIBANK':'NSE:ICICIBANK','SBIN':'NSE:SBIN',
    'NIFTY':'NSE:NIFTY','NIFTY50':'NSE:NIFTY','BANKNIFTY':'NSE:BANKNIFTY',
    'GOLD':'TVC:GOLD','SILVER':'TVC:SILVER','CRUDE':'TVC:USOIL','CRUDEOIL':'TVC:USOIL',
    'NATURALGAS':'TVC:NATURALGAS','COPPER':'TVC:COPPER','ALUMINIUM':'MCX:ALUMINIUM1!',
    'ZINC':'MCX:ZINC1!','NICKEL':'MCX:NICKEL1!',
  };
  const tvSymbol = ticker ? (tvMap[ticker] || (ticker.includes(':') ? ticker : `NSE:${ticker}`)) : '';

  if (_editingId) {
    const idx = _articles.findIndex(x => x.id === _editingId);
    if (idx >= 0) {
      _articles[idx] = { ..._articles[idx], title, category, ticker, tvSymbol, author, body, updatedAt: new Date().toISOString() };
    }
  } else {
    _articles.unshift({
      id: 'art_' + Date.now(),
      title, category, ticker, tvSymbol, author, body,
      date: new Date().toISOString(),
    });
  }
  saveArticles();
  closeEditor();
  renderArticleGrids();
}

function deleteCurrentArticle() {
  if (!_editingId) return;
  if (!confirm('Delete this article permanently?')) return;
  loadArticles();
  _articles = _articles.filter(x => x.id !== _editingId);
  saveArticles();
  closeEditor();
  renderArticleGrids();
}

// Keyboard close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeArticle(); closeEditor(); }
});

// Init
loadArticles();
renderArticleGrids();
</script>

</div><!-- end content -->

<footer>
  <p>© 2026 Bazaar Watch · India's Market Dashboard · Data: <a href="https://www.tradingview.com" target="_blank">TradingView</a> · <a href="https://finnhub.io" target="_blank">Finnhub</a> · <a href="https://gold-api.com" target="_blank">gold-api.com</a> · NSE · BSE · For informational purposes only</p>
</footer>

<script>
// ── CONFIG ─────────────────────────────────────────────────────────────────────
const API = 'https://stock-api-1-lvk1.onrender.com';
const GN_PROXY = 'https://proxy-gift-nifty.onrender.com';
const CACHE_KEY = 'bw_cache_v2';
const STALE_WARN_S = 300; // warn after 5 min stale

// ── LOCAL STORAGE CACHE — show last known values on load ─────────────────────
function saveToCache(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({data, ts: Date.now()})); } catch(e){}
}
function loadFromCache() {
  try {
    const c = JSON.parse(localStorage.getItem(CACHE_KEY)||'null');
    return c && c.data ? c : null;
  } catch(e) { return null; }
}

// ── PAGE META — unique title + description per tab ────────────────────────────
const PAGE_META = {
  home: {
    title: "Bazaar Watch — India's Sharpest Real-Time Market Dashboard",
    desc:  "Live Nifty 50, Sensex, Bank Nifty, Gift Nifty, Gift Bank Nifty, pre-market cues, F&O heatmap, commodities and India stock news — India's sharpest market dashboard.",
    url:   "https://bazaarwatch.in/",
    hash:  "",
    keywords: "Nifty 50 live, Sensex today, Bank Nifty live, Gift Nifty live, Gift Bank Nifty, India market dashboard, NSE BSE live, pre-market cues India, F&O heatmap, India VIX, USDINR live, Dow Jones mini live, S&P 500 mini live, Nasdaq mini live, crude oil price India, Dollar Index live, pre-market discussion India"
  },
  commodities: {
    title: "Commodities Live — Gold, Silver, Crude Oil, Natural Gas, Metals | Bazaar Watch",
    desc:  "Live gold price India, silver, crude oil chart, natural gas chart, copper, aluminium, zinc, nickel and commodity news — MCX and international prices updated every minute.",
    url:   "https://bazaarwatch.in/commodities",
    hash:  "#commodities",
    keywords: "gold price today India, silver price MCX, crude oil price chart today, crude oil live India, natural gas price chart, natural gas MCX live, copper price, aluminium MCX, commodity news India, commodity prices live"
  },
  global: {
    title: "Global Markets Live — Dow Jones, S&P 500, Nasdaq, Forex, Economic Calendar | Bazaar Watch",
    desc:  "Live Dow Jones, S&P 500, Nasdaq, European and Asian indices, USD/INR, Dollar Index, US treasury yields and economic calendar — global cues for Indian traders.",
    url:   "https://bazaarwatch.in/global",
    hash:  "#global",
    keywords: "Dow Jones live India, S&P 500 today, Nasdaq live, global market overview India, USD INR live, Dollar Index DXY, US market India time, economic calendar India, high impact events today, RBI calendar, Fed calendar"
  },
  heatmap: {
    title: "NSE F&O Heatmap — India Stocks Live by Sector | Bazaar Watch",
    desc:  "Live F&O heatmap of 160+ NSE stocks grouped by sector. See which sectors are moving, PCR, max pain and top OI strikes for Nifty and Bank Nifty.",
    url:   "https://bazaarwatch.in/heatmap",
    hash:  "#heatmap",
    keywords: "NSE heatmap today, F&O stocks heatmap, India stock heatmap live, Nifty PCR today, Bank Nifty max pain, NSE sector heatmap, F&O ban list today"
  },
  analysis: {
    title: "Stock & Commodity Analysis — Research by Bazaar Watch",
    desc:  "In-depth stock and commodity analysis by Bazaar Watch Research. Fundamental breakdowns, technical levels and trade ideas on Nifty 50 stocks, gold, crude oil and more.",
    url:   "https://bazaarwatch.in/analysis",
    hash:  "#analysis",
    keywords: "stock analysis India, commodity analysis, Nifty 50 stock research, gold analysis India, crude oil outlook, Indian stock fundamental analysis"
  }
};

function updatePageMeta(name) {
  const m = PAGE_META[name] || PAGE_META.home;

  // Title
  document.title = m.title;
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = m.title;

  // Meta description
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', m.desc);

  // Meta keywords — update per page
  const kwEl = document.querySelector('meta[name="keywords"]');
  if (kwEl && m.keywords) kwEl.setAttribute('content', m.keywords);

  // Canonical
  const canon = document.getElementById('page-canonical');
  if (canon) canon.setAttribute('href', m.url);

  // Open Graph
  const ogUrl   = document.getElementById('og-url');
  const ogTitle = document.getElementById('og-title');
  const ogDesc  = document.getElementById('og-desc');
  if (ogUrl)   ogUrl.setAttribute('content', m.url);
  if (ogTitle) ogTitle.setAttribute('content', m.title);
  if (ogDesc)  ogDesc.setAttribute('content', m.desc);

  // Twitter
  const twTitle = document.getElementById('tw-title');
  const twDesc  = document.getElementById('tw-desc');
  if (twTitle) twTitle.setAttribute('content', m.title);
  if (twDesc)  twDesc.setAttribute('content', m.desc);

  // Hash URL — updates browser URL bar without page reload
  if (m.hash !== undefined) {
    const newUrl = m.hash ? window.location.pathname + m.hash : window.location.pathname;
    history.pushState({ tab: name }, m.title, newUrl);
  }

  // Per-page schema markup — swap out on tab switch
  const pageSchemas = {
    home: { "@type":"WebApplication", "applicationCategory":"FinanceApplication", "name":"Bazaar Watch", "url":"https://bazaarwatch.in", "description": "India real-time stock market dashboard.", "operatingSystem":"All", "offers":{"@type":"Offer","price":"0","priceCurrency":"INR"} },
    commodities: { "@type":"WebPage", "name":"Commodities Live | Bazaar Watch", "url":"https://bazaarwatch.in/commodities", "description":"Live commodity prices — gold, silver, crude oil, natural gas, metals.", "about":{"@type":"FinancialProduct","name":"MCX Commodity Prices"} },
    global: { "@type":"WebPage", "name":"Global Markets Live | Bazaar Watch", "url":"https://bazaarwatch.in/global", "description":"Live global market overview for Indian traders — US, Europe, Asia, Forex, Bonds, Economic Calendar." },
    heatmap: { "@type":"WebPage", "name":"NSE F&O Heatmap | Bazaar Watch", "url":"https://bazaarwatch.in/heatmap", "description":"Live F&O stock heatmap of 160+ NSE stocks by sector with PCR and max pain." },
    analysis: { "@type":"CollectionPage", "name":"Stock & Commodity Analysis | Bazaar Watch", "url":"https://bazaarwatch.in/analysis", "description":"Stock and commodity research articles by Bazaar Watch Research." }
  };
  const sc = pageSchemas[name];
  if (sc) {
    let ps = document.getElementById('page-schema');
    if (!ps) { ps = document.createElement('script'); ps.id = 'page-schema'; ps.type = 'application/ld+json'; document.head.appendChild(ps); }
    ps.text = JSON.stringify({ "@context":"https://schema.org", ...sc, "author":{"@type":"Organization","name":"Bazaar Watch","url":"https://bazaarwatch.in"}, "inLanguage":"en-IN" });
  }
}

// Handle browser back/forward button
window.addEventListener('popstate', (e) => {
  if (e.state && e.state.tab) {
    const tab = e.state.tab;
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
  }
});

// On load — set active tab from URL hash
(function initFromHash() {
  const hash = window.location.hash.replace('#','');
  const validTabs = ['home','commodities','global','heatmap','analysis'];
  if (hash && validTabs.includes(hash)) {
    setTimeout(() => {
      const btn = document.querySelector(`.nav-tab[onclick*="ST('${hash}'"]`);
      ST(hash, btn);
    }, 0);
  }
})();

// ── TAB SWITCHING ──────────────────────────────────────────────────────────────
function ST(name, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  if (btn) btn.classList.add('active');
  updatePageMeta(name);
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
  ll.style.color = col; ll.textContent = lbl === 'NSE OPEN' ? 'LIVE' : lbl;
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
function setChange(id, change, pchange) {
  const el = document.getElementById(id); if (!el) return;
  if (change == null) return;
  const up = parseFloat(change) >= 0;
  el.textContent = (up?'▲ +':'▼ ') + Math.abs(parseFloat(change)).toFixed(2) +
    ' (' + (up?'+':'') + parseFloat(pchange||0).toFixed(2) + '%)';
  el.style.color = up ? 'var(--up)' : 'var(--dn)';
}

// ── POPULATE ALL DATA ──────────────────────────────────────────────────────────
function populateData(data, isStale) {
  const idx = data.indices || {};
  const met = data.metals  || {};
  const us  = data.us      || {};

  // Stale warning
  if (isStale) {
    const staleEl = document.getElementById('stale-warn');
    if (staleEl) staleEl.style.display = 'block';
  }

  // ── Indian indices ──────────────────────────────────────────────────────────
  const idxMap = [
    ['nifty50',   'p-n50', 'ch-n50', 'hi-n50', 'lo-n50', fi],
    ['sensex',    'p-sx',  'ch-sx',  'hi-sx',  'lo-sx',  fi],
    ['banknifty', 'p-bn',  'ch-bn',  'hi-bn',  'lo-bn',  fi],
    ['niftyit',   'p-it',  'ch-it',  'hi-it',  'lo-it',  fi],
    ['midcap100', 'p-mc',  'ch-mc',  'hi-mc',  'lo-mc',  fi],
    ['indiavix',  'p-vix', 'ch-vix', null,     null,     fu],
  ];
  idxMap.forEach(([key, pid, chid, hiid, loid, fmt]) => {
    if (!idx[key]) return;
    setEl(pid, fmt(idx[key].price));
    setChange(chid, idx[key].change, idx[key].pchange);
    if (hiid && idx[key].high) setEl(hiid, fmt(idx[key].high));
    if (loid && idx[key].low)  setEl(loid, fmt(idx[key].low));
  });
  if (data.timestamp) {
    const ts = new Date(data.timestamp).toLocaleTimeString('en-IN',{timeZone:'Asia/Kolkata',hour12:true});
    setEl('idx-ts', 'Updated ' + ts);
  }

  // ── Metals ──────────────────────────────────────────────────────────────────
  const metMap = [
    ['gold_usd',      'p-gold',   'c-gold',   'p-gold2',   'c-gold2'],
    ['silver_usd',    'p-silver', 'c-silver', 'p-silver2', 'c-silver2'],
    ['crude_usd',     'p-crude',  'c-crude',  'p-crude2',  'c-crude2'],
    ['natgas_usd',    'p-natgas', 'c-natgas', 'p-natgas2', 'c-natgas2'],
    ['aluminium_usd', 'p-alum',   'c-alum',   'p-alum2', 'c-alum2'],
    ['zinc_usd',      'p-zinc',   'c-zinc',   'p-zinc2', 'c-zinc2'],
    ['nickel_usd',    'p-nickel', 'c-nickel', 'p-nickel-comm', 'c-nickel-comm'],
    ['copper_usd',    'p-copper', 'c-copper', 'p-copper-comm', 'c-copper-comm'],
  ];
  metMap.forEach(([key, pid, cid, pid2, cid2]) => {
    if (!met[key]) return;
    setEl(pid, fd(met[key].price));
    setChange(cid, met[key].change, met[key].pchange);
    if (pid2) {
      setEl(pid2, fd(met[key].price));
      setChange(cid2, met[key].change, met[key].pchange);
    }
  });

  // ── US Markets ──────────────────────────────────────────────────────────────
  const usMap = [
    ['dow',    'p-dow', 'c-dow', 'hi-dow', 'lo-dow'],
    ['sp500',  'p-sp',  'c-sp',  'hi-sp',  'lo-sp'],
    ['nasdaq', 'p-nq',  'c-nq',  'hi-nq',  'lo-nq'],
  ];
  usMap.forEach(([key, pid, cid, hiid, loid]) => {
    if (!us[key]) return;
    setEl(pid, fu(us[key].price));
    setChange(cid, us[key].change, us[key].pchange);
    if (us[key].high) setEl(hiid, fu(us[key].high));
    if (us[key].low)  setEl(loid, fu(us[key].low));
  });
  if (us.dxy) { setEl('p-dxy', fu(us.dxy.price)); setChip('c-dxy', us.dxy.pchange);
  setEl('p-dxy-g', fu(us.dxy.price)); setChange('c-dxy-g', us.dxy.change, us.dxy.pchange); }

  // ── Ticker
  buildTicker(data);

  // ── Heatmap tab — F&O index cards (unique IDs) ──────────────────────────────
  const hmIdxMap = [
    ['nifty50',   'hm-p-n50', 'hm-ch-n50', 'hm-hi-n50', 'hm-lo-n50', fi],
    ['banknifty', 'hm-p-bn',  'hm-ch-bn',  'hm-hi-bn',  'hm-lo-bn',  fi],
    ['sensex',    'hm-p-sx',  'hm-ch-sx',  'hm-hi-sx',  'hm-lo-sx',  fi],
    ['indiavix',  'hm-p-vix', 'hm-ch-vix', null,         null,        fu],
  ];
  hmIdxMap.forEach(([key, pid, chid, hiid, loid, fmt]) => {
    if (!idx[key]) return;
    setEl(pid, fmt(idx[key].price));
    setChange(chid, idx[key].change, idx[key].pchange);
    if (hiid && idx[key].high) setEl(hiid, fmt(idx[key].high));
    if (loid && idx[key].low)  setEl(loid, fmt(idx[key].low));
  });

  // ── Option chain data (from backend /api/all → data.options) ───────────────
  try { renderOptionData(data.options); } catch(e){}

    // ── Gift Nifty from /api/all ─────────────────────────────────────────────────
  const gn  = data.giftnifty     || {};
  const gbn = data.giftbanknifty || {};
  if (gn.price)  renderGiftWidget('gn',  gn);
  if (gbn.price) renderGiftWidget('gbn', gbn);

  // ── News ─────────────────────────────────────────────────────────────────────
  if (data.news && data.news.length) renderNews(data.news);

  // ── AI Summary ── (disabled — now manual mode; edit via ✏ button) ───────────
  const summ = {}; // data.summary disabled until API plan is active
  if (summ.summary) {
    const el = document.getElementById('summary-text');
    const ts = document.getElementById('summary-ts');
    if (el) {
      el.innerHTML = summ.summary.split('\n').filter(l=>l.trim())
        .map(l=>`<p style="margin-bottom:6px">${l}</p>`).join('');
    }
    if (ts && summ.generated_at) {
      ts.textContent = 'Generated ' + new Date(summ.generated_at).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Kolkata'}) + ' IST';
    }
  }
}

// ── LOAD DATA ──────────────────────────────────────────────────────────────────
async function loadData() {
  // Show cached data instantly while fetching
  const cached = loadFromCache();
  if (cached) populateData(cached.data, false);

  try {
    const res  = await fetch(`${API}/api/all`, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    saveToCache(data);
    populateData(data, false);
    console.log('✅ Data loaded from backend');
  } catch(e) {
    console.warn('Backend fetch failed:', e.message);
    // Show stale data warning if cached data is old
    const cached = loadFromCache();
    if (cached) {
      const ageMin = (Date.now() - cached.ts) / 60000;
      if (ageMin > 5) populateData(cached.data, true);
    }
  }
}

loadData();
setInterval(loadData, 3000);

// ── NSE DIRECT NEWS — corporate announcements from NSE India ─────────────────
async function loadNseNews() {
  try {
    const r = await fetch(`${API}/api/nse-news`, { signal: AbortSignal.timeout(18000) });
    if (!r.ok) return;
    const d = await r.json();
    if (!d.ok || !d.items || !d.items.length) return;

    // Merge NSE items into _snAllItems — deduplicate by title prefix
    const existing  = window._snAllItems || [];
    const existKeys = new Set(existing.map(i => (i.title||'').slice(0, 50)));
    const fresh     = d.items.filter(i => !existKeys.has((i.title||'').slice(0, 50)));

    if (fresh.length) {
      // NSE items go at the top — they're the most authoritative
      window._snAllItems = [...fresh, ...existing];
      if (typeof applySnFilters === 'function') applySnFilters();
      console.log(`[NSE] +${fresh.length} announcements merged`);
    }
  } catch(e) {
    console.warn('[NSE] news load failed:', e.message);
  }
}

// Load NSE news after main data, then every 3 minutes
setTimeout(loadNseNews, 3000);
setInterval(loadNseNews, 180000);

// ── GIFT NIFTY WIDGETS (direct proxy calls) ───────────────────────────────────
function renderGiftWidget(pre, q) {
  if (!q || !q.price) return;
  const up = parseFloat(q.change||0) >= 0;
  const g  = id => document.getElementById(id);
  if (g(pre+'-price')) g(pre+'-price').textContent = parseFloat(q.price).toFixed(2);
  if (g(pre+'-chg')) {
    g(pre+'-chg').textContent = (up?'▲ +':'▼ ') + Math.abs(parseFloat(q.change||0)).toFixed(2) +
      ' (' + (up?'+':'') + parseFloat(q.changePct||0).toFixed(2) + '%)';
    g(pre+'-chg').style.color = up ? 'var(--up)' : 'var(--dn)';
  }
  if (g(pre+'-high')) g(pre+'-high').textContent = q.high ? parseFloat(q.high).toFixed(2) : '—';
  if (g(pre+'-low'))  g(pre+'-low').textContent  = q.low  ? parseFloat(q.low).toFixed(2)  : '—';
  if (g(pre+'-prev')) g(pre+'-prev').textContent = q.prevClose ? parseFloat(q.prevClose).toFixed(2) : '—';
  const dot = document.getElementById(pre+'-dot');
  if (dot) dot.style.background = '#4caf50';
  const ts = document.getElementById(pre+'-ts');
  if (ts) ts.textContent = 'Updated ' + new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false}) + ' IST';
}

async function loadGiftNifty() {
  try {
    const r = await fetch(GN_PROXY + '/quote', {signal: AbortSignal.timeout(15000)});
    const q = await r.json();
    if (q.ok) renderGiftWidget('gn', q);
  } catch(e) {}
}

async function loadGiftBankNifty() {
  try {
    const r = await fetch(GN_PROXY + '/quote-bank', {signal: AbortSignal.timeout(15000)});
    const q = await r.json();
    if (q.ok) renderGiftWidget('gbn', q);
  } catch(e) {}
}

loadGiftNifty();
loadGiftBankNifty();
setInterval(loadGiftNifty,     60000);
setInterval(loadGiftBankNifty, 60000);

// ── MANUAL SUMMARY — edit & save locally ──────────────────────────────────────
(function initManualSummary() {
  const el = document.getElementById('summary-text');
  const ts = document.getElementById('summary-ts');
  const saved = localStorage.getItem('bazaar_manual_summary');
  const savedTs = localStorage.getItem('bazaar_manual_summary_ts');
  if (saved && el) {
    // Render as flowing article paragraphs — tight spacing
    el.innerHTML = saved.split('\n').filter(l=>l.trim())
      .map(l=>`<p style="margin:0 0 4px 0">${l}</p>`).join('');
    if (ts && savedTs) ts.textContent = '· ' + savedTs;
  }
})();

function toggleSummaryEdit() {
  const box = document.getElementById('summary-edit-box');
  const input = document.getElementById('summary-input');
  const display = document.getElementById('summary-text');
  const btn = document.getElementById('edit-btn');
  if (box.style.display === 'none') {
    const pwd = prompt('Enter admin password to edit:');
    if (!pwd || pwd !== localStorage.getItem('bw_admin_pwd')) {
      // First time: set the password
      if (!localStorage.getItem('bw_admin_pwd') && pwd) {
        if (confirm('No password set yet. Set "' + pwd + '" as your admin password?')) {
          localStorage.setItem('bw_admin_pwd', pwd);
        } else { return; }
      } else {
        alert('Incorrect password.');
        return;
      }
    }
    // Load existing text into textarea (strip HTML tags)
    const raw = localStorage.getItem('bazaar_manual_summary') || '';
    input.value = raw;
    box.style.display = 'block';
    display.style.display = 'none';
    btn.textContent = '✕ Close';
    input.focus();
  } else {
    cancelSummaryEdit();
  }
}

function cancelSummaryEdit() {
  document.getElementById('summary-edit-box').style.display = 'none';
  document.getElementById('summary-text').style.display = 'block';
  document.getElementById('edit-btn').textContent = '✏ Edit';
}

function saveSummary() {
  const input = document.getElementById('summary-input');
  const el = document.getElementById('summary-text');
  const ts = document.getElementById('summary-ts');
  const text = input.value.trim();
  if (!text) { alert('Please enter a summary before saving.'); return; }
  const now = new Date().toLocaleString('en-IN', {day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit',hour12:true,timeZone:'Asia/Kolkata'}) + ' IST';
  localStorage.setItem('bazaar_manual_summary', text);
  localStorage.setItem('bazaar_manual_summary_ts', now);
  el.innerHTML = text.split('\n').filter(l=>l.trim())
    .map(l=>`<p style="margin:0 0 5px 0">${l}</p>`).join('');
  if (ts) ts.textContent = '· ' + now;
  const preview = document.getElementById('summary-preview');
  if (preview) { preview.textContent = text.split('\n').filter(l=>l.trim())[0] || ''; preview.style.fontStyle='normal'; }
  cancelSummaryEdit();
}

// Legacy stub — no longer used but kept to avoid any reference errors
async function loadSummary() { toggleSummaryEdit(); }

function toggleSummaryPanel() {
  const body = document.getElementById('summary-body');
  const chevron = document.getElementById('summary-chevron');
  const open = body.style.display !== 'none';
  body.style.display = open ? 'none' : 'block';
  if (chevron) chevron.style.transform = open ? '' : 'rotate(180deg)';
}

// ── INDIA STOCKS NEWS — Source-gated, filing-aware filter ────────────────────

// ONLY accept items from these Indian financial news sources
const INDIA_SOURCES = [
  'economic times','et markets','et stocks','et now','moneycontrol',
  'business standard','livemint','mint','cnbc tv18','cnbctv18',
  'ndtv profit','zeebiz','financial express','hindu businessline',
  'businessline','the print business','bse india','nse india',
  'et commodities','bs markets','mc markets','profit.ndtv'
];

// Corporate action / NSE-BSE filing keywords — the PRIMARY signal
const FILING_KEYWORDS = [
  // Exchange filings & disclosures
  'nse filing','bse filing','exchange filing','board meeting outcome',
  'board approves','board declares','board recommends',
  'intimation to','disclosure under','regulation 30','sebi regulation',
  'material information','trading window','insider trading',
  'postal ballot','agm notice','egm notice','annual general meeting',
  'extraordinary general meeting','record date','ex-date','ex-dividend',
  // Corporate actions
  'dividend declared','interim dividend','final dividend','special dividend',
  'bonus shares','bonus issue','rights issue','rights entitlement',
  'stock split','share split','face value','buyback offer',
  'open offer','delisting','voluntary delisting','compulsory delisting',
  'preferential allotment','qip','qualified institutional placement',
  'esop','employee stock','warrant conversion',
  // Results & performance
  'quarterly results','q1 results','q2 results','q3 results','q4 results',
  'q1fy','q2fy','q3fy','q4fy','full year results','annual results',
  'net profit','net loss','operating profit','ebitda','revenue from operations',
  'pat rises','pat falls','profit rises','profit falls','profit jumps',
  'profit slumps','revenue up','revenue down','margins expand','margins shrink',
  // Deals & restructuring
  'merger','amalgamation','demerger','spin-off','stake sale',
  'acquires stake','increases stake','reduces stake','block deal','bulk deal',
  'strategic investment','joint venture','mou signed','agreement signed',
  // NSE/BSE market events
  'upper circuit','lower circuit','circuit breaker','suspended from trading',
  'f&o ban','added to f&o ban','removed from f&o ban',
  'nifty 50 addition','nifty 50 exclusion','nifty 50 inclusion',
  'sensex addition','sensex exclusion','index rebalancing',
  'sebi order','sebi penalty','sebi notice','sebi investigation',
  'ipo opens','ipo closes','ipo allotment','ipo listing','ipo gmp',
  'sme ipo','mainboard ipo','anchor allotment',
  // FII/DII activity
  'fii buys','fii sells','fpi buys','fpi sells','dii buys','dii sells',
  'fii net','fpi net','institutional buying','institutional selling',
  // Nifty 50 + key midcap companies (full names to avoid false matches)
  'reliance industries','reliance jio','reliance retail',
  'tata consultancy','tcs quarterly','tcs q','infosys quarterly','infosys q',
  'wipro quarterly','wipro q','hcl technologies','tech mahindra quarterly',
  'hdfc bank quarterly','hdfc bank q','icici bank quarterly','icici bank q',
  'kotak mahindra bank','state bank of india','sbi quarterly','sbi q',
  'axis bank quarterly','axis bank q','bajaj finance quarterly',
  'bajaj finserv','bajaj auto quarterly','maruti suzuki quarterly',
  'tata motors quarterly','mahindra and mahindra','hero motocorp',
  'asian paints quarterly','hindustan unilever','itc limited quarterly',
  'sun pharmaceutical','dr reddy\'s','cipla quarterly','divi\'s lab',
  'adani ports','adani enterprises','adani green','adani total gas',
  'tata steel quarterly','jsw steel quarterly','hindalco quarterly',
  'ongc quarterly','bpcl quarterly','ntpc quarterly','power grid quarterly',
  'ultratech cement','larsen and toubro','l&t quarterly',
  'zomato quarterly','paytm quarterly','nykaa quarterly',
  'irctc quarterly','avenue supermarts','dmart quarterly',
  'titan company quarterly','indusind bank quarterly'
];

// Hard reject — international companies, international markets, commodities, reco
const STOCK_EXCLUDE = [
  // Source-level: reject if source is not Indian (catch-all for WSJ, Reuters etc.)
  // Content-level exclusions:
  'deepseek','openai','chatgpt','anthropic','spacex',          // international tech news
  'apple inc','microsoft corp','google llc','amazon.com','tesla inc','nvidia corp',
  'wall street','new york stock','nyse:','nasdaq:','s&p 500',
  'dow jones','ftse 100','dax index','nikkei','hang seng',
  'arabica coffee','coffee prices','cocoa prices','wheat futures','corn futures',
  'crude oil prices','brent crude','wti crude','natural gas prices',
  'gold prices','silver prices','opec output','opec production',
  'federal reserve','us fed','fomc meeting','ecb rate','bank of japan',
  'us treasury yield','dollar index','eur/usd','usd/jpy',
  // Broker recommendations
  'target price','price target','buy rating','sell rating','hold rating',
  'overweight','underweight','outperform','underperform',
  'initiates coverage','maintains buy','maintains sell','maintains hold',
  'goldman sachs','morgan stanley','jp morgan','citigroup','ubs research',
  'nomura research','jefferies','hsbc research','macquarie research',
  'motilal oswal target','kotak securities target','icicidirect target',
  'sharekhan target','axis securities target','edelweiss target'
];

function renderStockNews(items) {
  const el = document.getElementById('stock-news-list');
  if (!el) return;

  const strictFiltered = items.filter(i => {
    const t = (i.title || '').toLowerCase();
    const src = (i.source || '').toLowerCase();
    const isIndianSource = INDIA_SOURCES.some(s => src.includes(s));
    if (!isIndianSource) return false;
    if (STOCK_EXCLUDE.some(k => t.includes(k))) return false;
    return FILING_KEYWORDS.some(k => t.includes(k));
  });

  // Fallback: if strict filter returns < 4 items, use all Indian-source news
  const broadFiltered = items.filter(i => {
    const src = (i.source || '').toLowerCase();
    return INDIA_SOURCES.some(s => src.includes(s)) &&
           !STOCK_EXCLUDE.some(k => (i.title||'').toLowerCase().includes(k));
  });

  const filtered = strictFiltered.length >= 4 ? strictFiltered : broadFiltered;

  // Store for filter system — always use window to avoid let scoping issues
  window._snAllItems = filtered;
  if (typeof applySnFilters === 'function') {
    applySnFilters();
  } else {
    // Fallback: render directly if filter system not ready
    if (!filtered.length) {
      el.innerHTML = '<div style="color:var(--text3);font-size:11px;padding:20px;text-align:center">No NSE/BSE filings or corporate action news right now — check back shortly</div>';
    } else {
      el.innerHTML = filtered.map(item => {
        const rawSrc = (item.source||'');
        const src = rawSrc
          .replace('Economic Times','ET').replace('Moneycontrol News','MC')
          .replace('Business Standard','BS').replace('ET Markets','ET')
          .replace('ET Stocks','ET').replace('CNBC TV18','CNBCTV18')
          .replace('Livemint','Mint').replace('NDTV Profit','NDTV Profit')
          .replace('Hindu BusinessLine','BL').replace('Financial Express','FE');
        const tl = (item.title||'').toLowerCase();
        let tag = 'NSE/BSE', tagCol = '#81c784', tagBg = 'rgba(129,199,132,0.12)';
        if (/dividend|bonus|split|buyback|rights issue/.test(tl)) { tag='CORP ACTION'; tagCol='#ffb74d'; tagBg='rgba(255,183,77,0.12)'; }
        else if (/result|profit|revenue|ebitda|pat|quarterly/.test(tl)) { tag='RESULT'; tagCol='#67e8f9'; tagBg='rgba(103,232,249,0.12)'; }
        else if (/ipo|listing|allotment/.test(tl)) { tag='IPO'; tagCol='#ce93d8'; tagBg='rgba(206,147,216,0.12)'; }
        else if (/circuit|f&o ban|sebi|penalty|order/.test(tl)) { tag='ALERT'; tagCol='#f44336'; tagBg='rgba(244,67,54,0.12)'; }
        else if (/merger|acquisition|stake|block deal|bulk deal/.test(tl)) { tag='DEAL'; tagCol='#4184e4'; tagBg='rgba(65,132,228,0.12)'; }
        else if (/fii|fpi|dii/.test(tl)) { tag='FII/DII'; tagCol='#a78bfa'; tagBg='rgba(167,139,250,0.12)'; }
        let timeStr = '';
        try { const d=new Date(item.time); if(!isNaN(d)) timeStr=d.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true,timeZone:'Asia/Kolkata'}); } catch(e){}
        return `<a href="${item.link||'#'}" target="_blank" rel="noopener"
          style="display:flex;flex-direction:column;gap:4px;padding:9px 12px;border-bottom:1px solid var(--border);text-decoration:none;transition:background .12s"
          onmouseover="this.style.background='rgba(76,175,80,0.05)'"
          onmouseout="this.style.background='transparent'">
          <div style="font-size:12px;color:var(--text);line-height:1.4">${item.title||''}</div>
          <div style="display:flex;gap:5px;align-items:center;flex-wrap:wrap">
            <span style="font-size:8px;background:${tagBg};color:${tagCol};padding:1px 6px;border-radius:3px;font-family:'Space Mono',monospace;font-weight:700">${tag}</span>
            <span style="font-size:9px;background:rgba(129,199,132,0.08);color:var(--text3);padding:1px 5px;border-radius:3px;font-family:'Space Mono',monospace">${src}</span>
            ${timeStr?`<span style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">${timeStr}</span>`:''}
          </div>
        </a>`;
      }).join('');
    }
  }
  const tsEl = document.getElementById('stock-news-updated');
  if (tsEl) tsEl.textContent = 'Updated ' + new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Kolkata'}) + ' IST';
}

// ── NEWS RENDERER ─────────────────────────────────────────────────────────────
// Economic news keywords — what MATTERS to traders
const ECON_KEYWORDS = [
  // Indian macro/policy
  'rbi','repo rate','interest rate','inflation','cpi','wpi','gdp','iip','fiscal deficit',
  'monetary policy','rate hike','rate cut','budget','economic','current account',
  'trade deficit','forex reserve','rupee','usd inr',
  // Global macro (affects Indian markets)
  'fed','federal reserve','fomc','ecb','bank of england','boj','pboc',
  'dollar index','us jobs','nonfarm payroll','us inflation','us gdp',
  'china gdp','global growth','recession','yield curve','treasury',
  'us market','wall street','nasdaq','dow jones','s&p',
  // Commodities
  'gold','silver','crude oil','oil price','natural gas','opec',
  'copper','metal','commodity','mcx',
  // Corporate events
  'quarterly result','q1','q2','q3','q4','earnings','net profit',
  'revenue','annual result','stock split','dividend','bonus share',
  'buyback','rights issue','ipo','listing','merger','acquisition',
  // Indian market structure
  'fii','dii','sebi','nifty','sensex','bank nifty','india vix',
  'circuit breaker','upper circuit','lower circuit',
  // Geopolitics affecting markets
  'sanctions','tariff','trade war','oil supply','opec cut',
  'geopolitical','middle east','ukraine','china taiwan'
];

// Broker recommendation words to EXCLUDE
const EXCLUDE_WORDS = [
  'target price','target of','buy call','sell call','rating','upgrade','downgrade',
  'overweight','underweight','outperform','underperform','hold rating',
  'brokerage','analyst','recommend','price target','initiates','coverage',
  'buy hdfc','sell hdfc','buy reliance','sell reliance',
  'buy sbi','sell sbi','buy tcs','sell tcs',
  'emkay','kotak','icicidirect','sharekhan','motilal','axis securities',
  'edelweiss','geojit','prabhudas','mofsl','nomura target','goldman target',
  'jp morgan target','morgan stanley target','citi target','ubs target'
];

function isRelevant(title) {
  const t = (title||'').toLowerCase();
  // First exclude broker recommendations
  if (EXCLUDE_WORDS.some(k => t.includes(k))) return false;
  // Then check for economic relevance
  return ECON_KEYWORDS.some(k => t.includes(k));
}

function renderNews(items) {
  const el = document.getElementById('news-list');
  if (!el) return;
  const filtered = items.filter(i => isRelevant(i.title));
  const list = filtered.length >= 5 ? filtered : items;
  el.innerHTML = list.map(item => {
    const src = (item.source||'')
      .replace('Economic Times','ET').replace('Moneycontrol News','MC')
      .replace('Business Standard','BS').replace('ET Markets','ET')
      .replace('ET Stocks','ET').replace('ET Commodities','ET Commodities')
      .replace('BS Economy','BS').replace('CNBC TV18','').replace('CNBC','');
    let timeStr = '';
    try {
      const d = new Date(item.time);
      if (!isNaN(d)) timeStr = d.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:true,timeZone:'Asia/Kolkata'});
    } catch(e){}
    return `<a href="${item.link||'#'}" target="_blank" rel="noopener"
      style="display:flex;flex-direction:column;gap:5px;padding:10px 12px;border-bottom:1px solid var(--border);text-decoration:none;transition:background .12s"
      onmouseover="this.style.background='rgba(255,153,51,0.04)'"
      onmouseout="this.style.background='transparent'">
      <div style="font-size:12px;color:var(--text);line-height:1.4">${item.title||''}</div>
      <div style="display:flex;gap:6px;align-items:center">
        <span style="font-size:9px;background:rgba(255,153,51,0.12);color:var(--saffron);padding:1px 6px;border-radius:3px;font-family:'Space Mono',monospace">${src}</span>
        ${timeStr?`<span style="font-size:9px;color:var(--text3);font-family:'Space Mono',monospace">${timeStr}</span>`:''}
      </div>
    </a>`;
  }).join('');
  setEl('news-updated', 'Updated ' + new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Kolkata'}) + ' IST');

  // Stock-specific news feed
  renderStockNews(items);

  // Commodity news
  const commKw = ['gold','silver','crude','oil','gas','mcx','copper','zinc','alumin','nickel','metal','commodity','platinum'];
  const commEl = document.getElementById('comm-news-list');
  if (commEl) {
    const comm = items.filter(i => commKw.some(k => (i.title||'').toLowerCase().includes(k)));
    if (comm.length) {
      commEl.innerHTML = comm.map(item => {
        const src = (item.source||'').replace('Economic Times','ET').replace('ET Commodities','ET Commodities').replace('Moneycontrol News','MC').replace('Business Standard','BS');
        return `<a href="${item.link||'#'}" target="_blank" rel="noopener"
          style="display:flex;flex-direction:column;gap:4px;padding:9px 12px;border-bottom:1px solid var(--border);text-decoration:none"
          onmouseover="this.style.background='rgba(212,175,55,0.04)'"
          onmouseout="this.style.background='transparent'">
          <div style="font-size:12px;color:var(--text);line-height:1.4">${item.title||''}</div>
          <span style="font-size:9px;background:rgba(212,175,55,0.12);color:#d4af37;padding:1px 6px;border-radius:3px;font-family:'Space Mono',monospace;width:fit-content">${src}</span>
        </a>`;
      }).join('');
    } else {
      commEl.innerHTML = '<div style="color:var(--text3);font-size:11px;padding:16px;text-align:center">No commodity news at the moment</div>';
    }
  }
}

// ══════════════════════════════════════════════════════════════════════════════
// INDIA F&O HEATMAP v3 — Proper squarified treemap
// ══════════════════════════════════════════════════════════════════════════════
let hmData = [];
let hmView = 'sector';
const S_GAP = 5;   // sector outer gap — gridlines
const C_GAP = 1;   // cell inner gap  
const LBL_H = 20;  // sector label height

function setHmView(v) {
  hmView = v;
  ['sector','flat'].forEach(id => {
    const b = document.getElementById('hm-btn-'+id);
    if (!b) return;
    b.style.background  = id===v ? 'rgba(255,153,51,0.15)' : 'transparent';
    b.style.color       = id===v ? '#FF9933' : 'var(--text3)';
    b.style.borderColor = id===v ? 'rgba(255,153,51,0.4)' : 'var(--border)';
  });
  if (hmData.length) renderHeatmap(hmData);
}

// Colour scale matching TradingView
function hmCol(p) {
  p = parseFloat(p);
  if (p >=  5) return '#0a4a1a';
  if (p >=  3) return '#145e28';
  if (p >=  1.5) return '#1a7a35';
  if (p >=  0.3) return '#1e8f3c';
  if (p >= -0.3) return '#162330';
  if (p >= -1.5) return '#8b1a1a';
  if (p >= -3)   return '#9e2020';
  if (p >= -5)   return '#b52525';
  return '#cc2a2a';
}

// ── Squarified Treemap (Bruls 2000) ──────────────────────────────────────────
// items must be sorted descending by value before calling
function squarify(items, x, y, w, h) {
  const result = [];
  _sq(items.map(i => ({...i})), x, y, w, h, result);
  return result;
}

function _sq(items, x, y, w, h, out) {
  if (!items.length) return;
  if (items.length === 1) {
    out.push({...items[0], x, y, w, h});
    return;
  }

  const total  = items.reduce((s, i) => s + i.value, 0);
  const horiz  = w >= h;           // lay strip along the short side
  const strip  = horiz ? h : w;   // strip thickness dimension

  let row = [], rowSum = 0, prevWorst = Infinity;

  for (let i = 0; i < items.length; i++) {
    const item    = items[i];
    const trySum  = rowSum + item.value;
    const tryRow  = [...row, item];
    const worst   = worstAR(tryRow, trySum, strip, total, w, h);

    if (row.length > 0 && worst > prevWorst) {
      // This item makes it worse — commit current row
      layoutRow(row, rowSum, total, x, y, w, h, horiz, strip, out);
      const placed = rowSum / total;
      if (horiz) _sq(items.slice(i), x, y + h * placed, w, h * (1 - placed), out);
      else        _sq(items.slice(i), x + w * placed, y, w * (1 - placed), h, out);
      return;
    }
    row.push(item);
    rowSum    = trySum;
    prevWorst = worst;
  }
  // Commit final row
  layoutRow(row, rowSum, total, x, y, w, h, horiz, strip, out);
}

function worstAR(row, rowSum, strip, total, w, h) {
  if (!rowSum) return Infinity;
  const horiz     = w >= h;
  const rowLength = (rowSum / total) * (horiz ? h : w);  // wrong — fix
  // rowLength = thickness of this strip
  const thickness = (rowSum / total) * strip;
  let worst = 0;
  row.forEach(item => {
    const len = (item.value / rowSum) * (horiz ? w : h);
    const ar  = thickness > len ? thickness / len : len / thickness;
    if (ar > worst) worst = ar;
  });
  return worst;
}

function layoutRow(row, rowSum, total, x, y, w, h, horiz, strip, out) {
  const thickness = (rowSum / total) * (horiz ? h : w);
  let cursor = horiz ? x : y;
  row.forEach(item => {
    const len = (item.value / rowSum) * (horiz ? w : h);
    if (horiz) out.push({...item, x: cursor, y, w: len, h: thickness});
    else        out.push({...item, x, y: cursor, w: thickness, h: len});
    cursor += len;
  });
}

// ── Sector weights (approx market cap weight in NIFTY index) ─────────────────
const SECTOR_WEIGHT = {
  'Banking':10,'Finance':4,'IT':8,'Energy':7,'Auto':6,'Pharma':5,
  'FMCG':5,'Industrials':5,'Metals':4,'Consumer':4,'Telecom':3,
  'Utilities':3,'Insurance':3,'Cement':3,'Chemicals':2,'Real Estate':2,
  'Healthcare':2,'Capital Mkts':2,'New Age Tech':1
};

// ── Main render ──────────────────────────────────────────────────────────────
function renderHeatmap(stocks) {
  const container = document.getElementById('hm-map');
  const loading   = document.getElementById('hm-loading');
  if (!container || !stocks.length) return;
  loading.style.display   = 'none';
  container.style.display = 'block';

  const CW = container.parentElement.clientWidth - 16;
  const CH = Math.max(Math.round(window.innerHeight * 0.82), 620);
  container.style.height   = CH + 'px';
  container.style.position = 'relative';
  container.style.overflow = 'hidden';

  if (hmView === 'flat') renderFlat(stocks, container, CW, CH);
  else                   renderSector(stocks, container, CW, CH);
}

function renderSector(stocks, container, CW, CH) {
  // Group by sector
  const sMap = {};
  stocks.forEach(s => { (sMap[s.sector] = sMap[s.sector]||[]).push(s); });

  // Sector value = index weight (not activity) → stable layout
  const sItems = Object.entries(sMap).map(([name, ss]) => ({
    name,
    stocks: ss.sort((a,b) => Math.abs(b.pchange)-Math.abs(a.pchange)),
    value:  (SECTOR_WEIGHT[name]||1) * ss.length   // weight × count
  })).sort((a,b) => b.value - a.value);

  const sRects = squarify(sItems, 0, 0, CW, CH);

  let html = `<svg width="${CW}" height="${CH}" style="position:absolute;inset:0;display:block;pointer-events:none">`;
  // sector backgrounds & labels drawn in SVG for crispness
  sRects.forEach(sr => {
    const x = sr.x+S_GAP, y = sr.y+S_GAP, w = sr.w-S_GAP*2, h = sr.h-S_GAP*2;
    if (w < 20 || h < 20) return;
    const avgP = sr.stocks.reduce((s,x)=>s+parseFloat(x.pchange),0)/sr.stocks.length;
    html += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="0" fill="rgba(8,14,22,0.0)" stroke="#0a0f18" stroke-width="${S_GAP}"/>`;
    // Inner rounded card
    html += `<rect x="${x+1}" y="${y+1}" width="${w-2}" height="${h-2}" rx="6" fill="rgba(10,16,26,0.85)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>`;
    if (h > 36) {
      const lblY = y + LBL_H - 5;
      // Label background
      html += `<rect x="${x+1}" y="${y+1}" width="${w-2}" height="${LBL_H}" rx="5" fill="rgba(5,10,18,0.95)"/>`;
      html += `<text x="${x+8}" y="${lblY}" font-family="Vollkorn SC,serif" font-size="12" font-weight="600" letter-spacing="1.5" fill="#a8c4d4">${sr.name.toUpperCase()}</text>`;
      const pTxt = (avgP>=0?'+':'')+avgP.toFixed(1)+'%';
      html += `<text x="${x+w-8}" y="${lblY}" font-family="Space Mono,monospace" font-size="10" font-weight="700" text-anchor="end" fill="${avgP>=0?'#4caf50':'#f44336'}">${pTxt}</text>`;
      html += `<line x1="${x+1}" y1="${y+LBL_H}" x2="${x+w-1}" y2="${y+LBL_H}" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>`;
    }
  });
  html += `</svg>`;

  // Stock cells as positioned divs (allows text overflow handling)
  sRects.forEach(sr => {
    const sx = sr.x+S_GAP, sy = sr.y+S_GAP, sw = sr.w-S_GAP*2, sh = sr.h-S_GAP*2;
    if (sw < 20 || sh < 20) return;
    const hasLbl = sh > 36;
    const innerY = sy + (hasLbl ? LBL_H : 0);
    const innerH = sh - (hasLbl ? LBL_H : 0);
    if (innerH < 10) return;

    const stItems = sr.stocks.map(s => ({
      ...s, value: Math.max(Math.abs(parseFloat(s.pchange)), 0.08)
    })).sort((a,b) => b.value - a.value);

    const stRects = squarify(stItems, sx, innerY, sw, innerH);

    stRects.forEach(st => {
      const cx = st.x+C_GAP, cy = st.y+C_GAP;
      const cw = Math.max(0, st.w-C_GAP*2), ch = Math.max(0, st.h-C_GAP*2);
      if (cw < 6 || ch < 6) return;
      const p   = parseFloat(st.pchange);
      const bg  = hmCol(p);
      const tc  = Math.abs(p)<0.3 ? '#3a5569' : '#fff';
      const arr = p>=0?'▲':'▼';
      const fs  = Math.max(7, Math.min(14, cw/5));
      const fs2 = Math.max(6, Math.min(11, cw/6.5));
      const showSym  = cw>18  && ch>14;
      const showPct  = cw>16  && ch>26;
      const showPts  = cw>40  && ch>38;   // show points change
      const showPrc  = cw>55  && ch>52;   // show price
      const showOHLC = cw>80  && ch>72;   // show O/H/L

      const pts   = parseFloat(st.change||0).toFixed(1);
      const prc   = parseFloat(st.price||0).toLocaleString('en-IN',{maximumFractionDigits:1});
      const high  = st.high  ? parseFloat(st.high).toLocaleString('en-IN',{maximumFractionDigits:1})  : null;
      const low   = st.low   ? parseFloat(st.low).toLocaleString('en-IN',{maximumFractionDigits:1})   : null;

      html += `<div onmouseenter="showHmTip(event,'${st.symbol}','${st.name}',${st.price},${st.change},${st.pchange},'${st.sector}')" onmouseleave="hideHmTip()" style="position:absolute;left:${cx}px;top:${cy}px;width:${cw}px;height:${ch}px;background:${bg};border-radius:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;cursor:default;border:1px solid rgba(0,0,0,0.25);gap:1px">
        ${showSym?`<div style="font-family:'Space Mono',monospace;font-size:${fs}px;font-weight:700;color:${tc};line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:96%;text-align:center;padding:0 2px">${st.symbol}</div>`:''}
        ${showPct?`<div style="font-size:${fs2}px;color:${tc};opacity:0.95;line-height:1.1;font-weight:600">${arr}${Math.abs(p).toFixed(2)}%</div>`:''}
        ${showPts?`<div style="font-size:${Math.max(6,fs2-1)}px;color:${tc};opacity:0.75;line-height:1.1">${p>=0?'+':''}${pts}</div>`:''}
        ${showPrc?`<div style="font-size:${Math.max(6,fs2-1)}px;color:${tc};opacity:0.65;line-height:1.1">₹${prc}</div>`:''}
        ${showOHLC&&high&&low?`<div style="font-size:6.5px;color:${tc};opacity:0.55;line-height:1.1;letter-spacing:0.3px">H:${high} L:${low}</div>`:''}
      </div>`;
    });
  });

  container.innerHTML = html;
}

function renderFlat(stocks, container, CW, CH) {
  const items = stocks.map(s => ({...s, value: Math.max(Math.abs(parseFloat(s.pchange)),0.08)}))
                      .sort((a,b)=>b.value-a.value);
  const rects = squarify(items, 0, 0, CW, CH);
  let html = '';
  rects.forEach(st => {
    const cx=st.x+C_GAP, cy=st.y+C_GAP, cw=Math.max(0,st.w-C_GAP*2), ch=Math.max(0,st.h-C_GAP*2);
    if (cw<6||ch<6) return;
    const p=parseFloat(st.pchange), bg=hmCol(p), tc=Math.abs(p)<0.3?'#3a5569':'#fff';
    const arr=p>=0?'▲':'▼', fs=Math.max(7,Math.min(14,cw/5)), fs2=Math.max(6,Math.min(11,cw/6.5));
    const fPts = parseFloat(st.change||0).toFixed(1);
    const fPrc = parseFloat(st.price||0).toLocaleString('en-IN',{maximumFractionDigits:1});
    const fH   = st.high ? parseFloat(st.high).toLocaleString('en-IN',{maximumFractionDigits:1}) : null;
    const fL   = st.low  ? parseFloat(st.low).toLocaleString('en-IN',{maximumFractionDigits:1})  : null;
    html += `<div onmouseenter="showHmTip(event,'${st.symbol}','${st.name}',${st.price},${st.change},${st.pchange},'${st.sector}')" onmouseleave="hideHmTip()" style="position:absolute;left:${cx}px;top:${cy}px;width:${cw}px;height:${ch}px;background:${bg};border-radius:5px;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;cursor:default;border:1px solid rgba(0,0,0,0.25);gap:1px">
      ${cw>18&&ch>14?`<div style="font-family:'Space Mono',monospace;font-size:${fs}px;font-weight:700;color:${tc};line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:96%;text-align:center;padding:0 2px">${st.symbol}</div>`:''}
      ${cw>16&&ch>26?`<div style="font-size:${fs2}px;color:${tc};opacity:0.95;font-weight:600;line-height:1.1">${arr}${Math.abs(p).toFixed(2)}%</div>`:''}
      ${cw>40&&ch>38?`<div style="font-size:${Math.max(6,fs2-1)}px;color:${tc};opacity:0.75;line-height:1.1">${p>=0?'+':''}${fPts}</div>`:''}
      ${cw>55&&ch>52?`<div style="font-size:${Math.max(6,fs2-1)}px;color:${tc};opacity:0.65;line-height:1.1">₹${fPrc}</div>`:''}
      ${cw>80&&ch>70&&fH&&fL?`<div style="font-size:6.5px;color:${tc};opacity:0.5;line-height:1.1">H:${fH} L:${fL}</div>`:''}
    </div>`;
  });
  container.innerHTML = `<div style="position:absolute;inset:0">${html}</div>`;
}

// ── Tooltip ──────────────────────────────────────────────────────────────────
function showHmTip(e, sym, name, price, change, pchange, sector) {
  const tip = document.getElementById('hm-tooltip');
  if (!tip) return;
  const up=parseFloat(pchange)>=0, p=Math.abs(parseFloat(pchange)).toFixed(2), ch=(parseFloat(change)).toFixed(2);
  tip.innerHTML=`
    <div style="font-size:14px;font-weight:700;color:#e2e8f0;margin-bottom:3px">${sym}</div>
    <div style="font-size:10px;color:#7a96ab;margin-bottom:8px">${name} · ${sector}</div>
    <div style="font-size:18px;color:${up?'#4caf50':'#ef5350'};font-weight:700;margin-bottom:3px">${up?'▲':'▼'} ${p}%</div>
    <div style="font-size:12px;color:#c9d8e8">₹ ${parseFloat(price).toLocaleString('en-IN',{maximumFractionDigits:2})}</div>
    <div style="font-size:10px;color:#7a96ab;margin-top:2px">${up?'+':''}${ch} pts today</div>`;
  tip.style.display='block';
  posHmTip(e);
}
function posHmTip(e) {
  const tip=document.getElementById('hm-tooltip');
  if(!tip||tip.style.display==='none') return;
  const x=e.clientX+14, y=e.clientY-10;
  tip.style.left=(x+220>window.innerWidth?x-235:x)+'px';
  tip.style.top=(y+160>window.innerHeight?y-170:y)+'px';
}
function hideHmTip() { const t=document.getElementById('hm-tooltip'); if(t) t.style.display='none'; }
document.addEventListener('mousemove', posHmTip);

// ── Load & cache ─────────────────────────────────────────────────────────────
async function loadHeatmap(force) {
  const loading=document.getElementById('hm-loading'), map=document.getElementById('hm-map');
  if(loading){ loading.style.display='flex'; loading.innerHTML='<div style="width:32px;height:32px;border:2px solid rgba(255,153,51,0.25);border-top-color:#FF9933;border-radius:50%;animation:spin 0.8s linear infinite"></div><div style="font-size:10px;letter-spacing:1.5px;color:var(--text3);margin-top:14px;font-family:Space Mono,monospace">LOADING F&O STOCKS…</div>'; }
  if(map) map.style.display='none';

  if(!force){
    try{
      const c=JSON.parse(localStorage.getItem('bw_heatmap')||'null');
      if(c&&(Date.now()-c.ts)<300000&&c.data.length>50){
        hmData=c.data; renderHeatmap(hmData);
        try { renderOITable(hmData); } catch(e){}
        try { renderFOOverview(hmData); } catch(e){}
        setEl('hm-ts','Cached '+new Date(c.ts).toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false})+' IST');
        return;
      }
    }catch(e){}
  }

  try{
    const r=await fetch(API+'/api/heatmap',{signal:AbortSignal.timeout(90000)});
    if(!r.ok) throw new Error('HTTP '+r.status);
    const data=await r.json();
    if(data.length>10){
      hmData=data;
      try{ localStorage.setItem('bw_heatmap',JSON.stringify({data,ts:Date.now()})); }catch(e){}
      renderHeatmap(hmData);
      try { renderOITable(hmData); } catch(e){}
      try { renderFOOverview(hmData); } catch(e){}
      setEl('hm-ts',(function(){ const ist=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'})); const t=ist.getHours()*100+ist.getMinutes(); const wd=ist.getDay()>=1&&ist.getDay()<=5; return (wd&&t>=915&&t<=1530?'Live':'Last Close')+' · '+new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false})+' IST'; })());
    }
  }catch(e){
    if(loading){ loading.innerHTML=`<div style="color:var(--text3);font-size:11px;text-align:center;padding:40px">Backend offline — heatmap loads when Render is running<br><span style="font-size:9px;opacity:0.5;display:block;margin-top:4px">${e.message}</span></div>`; loading.style.display='flex'; }
  }
}

let _hmRT;
window.addEventListener('resize',()=>{ clearTimeout(_hmRT); _hmRT=setTimeout(()=>{ if(hmData.length) renderHeatmap(hmData); },250); });

// Watch for heatmap tab becoming active
(function() {
  const hmTab = document.getElementById('tab-heatmap');
  if (!hmTab) return;
  new MutationObserver(() => {
    if (hmTab.classList.contains('active') && !hmData.length) loadHeatmap(false);
  }).observe(hmTab, { attributes: true, attributeFilter: ['class'] });
})();

// ── CUSTOM TICKER — built from backend data ──────────────────────────────────
function buildTicker(data) {
  const idx = data.indices || {};
  const met = data.metals  || {};
  const us  = data.us      || {};
  const gn  = data.giftnifty || {};

  const items = [
    // Indian indices
    {n:'NIFTY 50',   v:idx.nifty50,    fmt:fi, col:'#f0c040'},
    {n:'SENSEX',     v:idx.sensex,     fmt:fi, col:'#4fc3f7'},
    {n:'BANK NIFTY', v:idx.banknifty,  fmt:fi, col:'#81c784'},
    {n:'NIFTY IT',   v:idx.niftyit,    fmt:fi, col:'#ce93d8'},
    {n:'MIDCAP',     v:idx.midcap100,  fmt:fi, col:'#ffb74d'},
    {n:'INDIA VIX',  v:idx.indiavix,   fmt:fu, col:'#ef9a9a'},
    // Gift Nifty
    ...(gn.price ? [{n:'GIFT NIFTY', v:{price:gn.price,pchange:gn.changePct,change:gn.change}, fmt:fi, col:'#FF9933'}] : []),
    // Metals & Energy
    {n:'GOLD',       v:met.gold_usd,   fmt:fd, col:'#d4af37'},
    {n:'SILVER',     v:met.silver_usd, fmt:fd, col:'#adb5bd'},
    {n:'CRUDE WTI',  v:met.crude_usd,  fmt:fd, col:'#ffb74d'},
    {n:'NAT GAS',    v:met.natgas_usd, fmt:fd, col:'#80cbc4'},
    {n:'COPPER',     v:met.copper_usd, fmt:fd, col:'#e07b4a'},
    {n:'ALUMINIUM',  v:met.aluminium_usd, fmt:fd, col:'#90caf9'},
    {n:'NICKEL',     v:met.nickel_usd, fmt:fd, col:'#b39ddb'},
    // US & FX
    {n:'DOW',        v:us.dow,         fmt:fu, col:'#4184e4'},
    {n:'S&P 500',    v:us.sp500,       fmt:fu, col:'#a78bfa'},
    {n:'NASDAQ',     v:us.nasdaq,      fmt:fu, col:'#67e8f9'},
    {n:'DXY',        v:us.dxy,         fmt:fu, col:'#f472b6'},
  ].filter(i => i.v && i.v.price);

  if (!items.length) return;

  function mkItem(i) {
    const p   = parseFloat(i.v.pchange || 0);
    const cls = p > 0 ? 't-up' : p < 0 ? 't-dn' : 't-flat';
    const arr = p > 0 ? '▲' : p < 0 ? '▼' : '■';
    return `<div class="t-item">
      <span class="t-name">${i.n}</span>
      <span class="t-price" style="color:${i.col}">${i.fmt(i.v.price)}</span>
      <span class="t-chg ${cls}">${arr} ${Math.abs(p).toFixed(2)}%</span>
    </div>`;
  }

  const html = items.map(mkItem).join('');
  const inner = document.getElementById('ticker-inner');
  const clone  = document.getElementById('ticker-clone');
  if (inner) inner.innerHTML = html;
  if (clone)  clone.innerHTML = html;

  // Adjust speed based on content width
  const track = document.getElementById('ticker-track');
  if (track && inner) {
    const w     = inner.scrollWidth;
    const speed = Math.max(100, w / 70);
    track.style.animationDuration = speed + 's';
  }
}

// ── NIFTY FUTURES — OI TABLE + PIVOT LEVELS ──────────────────────────────────
function renderOITable(heatmapData) {
  const tbody = document.getElementById('oi-tbody');
  if (!tbody || !heatmapData || !heatmapData.length) return;

  // Sort by absolute % change descending (highest movers = highest activity)
  const sorted = [...heatmapData]
    .sort((a,b) => Math.abs(b.pchange) - Math.abs(a.pchange))
    .slice(0, 15);

  tbody.innerHTML = sorted.map(s => {
    const up = parseFloat(s.pchange) >= 0;
    const col = up ? '#4caf50' : '#f44336';
    const arr = up ? '▲' : '▼';
    return `<tr style="border-bottom:1px solid var(--border);transition:background .1s"
               onmouseover="this.style.background='rgba(255,153,51,0.04)'"
               onmouseout="this.style.background='transparent'">
      <td style="padding:6px 8px;color:var(--text);font-weight:600">${s.symbol}</td>
      <td style="padding:6px 8px;text-align:right;color:var(--text)">₹${parseFloat(s.price||0).toLocaleString('en-IN',{maximumFractionDigits:1})}</td>
      <td style="padding:6px 8px;text-align:right;color:${col};font-weight:600">${arr}${Math.abs(parseFloat(s.pchange)).toFixed(2)}%</td>
      <td style="padding:6px 8px;text-align:right;color:var(--text3);font-size:9px">${s.sector||''}</td>
    </tr>`;
  }).join('');
}

// ── INDEX OPTION DATA — PCR, Max Pain, Top OI Strikes ───────────────────────
function renderOptionData(opts) {
  if (!opts) return;
  const fi = v => parseFloat(v).toLocaleString('en-IN',{maximumFractionDigits:0});

  // Nifty PCR
  if (opts.nifty_pcr != null) {
    const pcr = parseFloat(opts.nifty_pcr);
    setEl('opt-nifty-pcr', pcr.toFixed(2));
    const sig = pcr > 1.2 ? 'BULLISH' : pcr > 0.8 ? 'NEUTRAL' : 'BEARISH';
    const sigCol = pcr > 1.2 ? '#4caf50' : pcr > 0.8 ? '#ff9800' : '#f44336';
    const sigEl = document.getElementById('opt-nifty-pcr-signal');
    if (sigEl) { sigEl.textContent = sig; sigEl.style.color = sigCol; }
    const barEl = document.getElementById('opt-nifty-pcr-bar');
    if (barEl) barEl.style.width = Math.min(Math.max(pcr/2*100, 5), 100) + '%';
  }

  // Bank Nifty PCR
  if (opts.bn_pcr != null) {
    const pcr = parseFloat(opts.bn_pcr);
    setEl('opt-bn-pcr', pcr.toFixed(2));
    const sig = pcr > 1.2 ? 'BULLISH' : pcr > 0.8 ? 'NEUTRAL' : 'BEARISH';
    const sigCol = pcr > 1.2 ? '#4caf50' : pcr > 0.8 ? '#ff9800' : '#f44336';
    const sigEl = document.getElementById('opt-bn-pcr-signal');
    if (sigEl) { sigEl.textContent = sig; sigEl.style.color = sigCol; }
    const barEl = document.getElementById('opt-bn-pcr-bar');
    if (barEl) barEl.style.width = Math.min(Math.max(pcr/2*100, 5), 100) + '%';
  }

  // Max Pain
  if (opts.nifty_maxpain) { setEl('opt-nifty-mp', fi(opts.nifty_maxpain)); }
  if (opts.bn_maxpain) { setEl('opt-bn-mp', fi(opts.bn_maxpain)); }
  if (opts.nifty_expiry) { setEl('opt-nifty-expiry', 'Expiry: ' + opts.nifty_expiry); }
  if (opts.bn_expiry) { setEl('opt-bn-expiry', 'Expiry: ' + opts.bn_expiry); }

  // Top OI Strikes — Nifty Calls
  if (opts.nifty_call_oi && opts.nifty_call_oi.length) {
    const el = document.getElementById('opt-nifty-call-oi');
    if (el) el.innerHTML = opts.nifty_call_oi.slice(0,3).map(s =>
      `<div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border)"><span style="color:var(--text)">${fi(s.strike)}</span><span style="color:#4caf50">${(s.oi/100000).toFixed(1)}L</span></div>`
    ).join('');
  }
  // Top OI Strikes — Nifty Puts
  if (opts.nifty_put_oi && opts.nifty_put_oi.length) {
    const el = document.getElementById('opt-nifty-put-oi');
    if (el) el.innerHTML = opts.nifty_put_oi.slice(0,3).map(s =>
      `<div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border)"><span style="color:var(--text)">${fi(s.strike)}</span><span style="color:#f44336">${(s.oi/100000).toFixed(1)}L</span></div>`
    ).join('');
  }

  setEl('opt-ts', new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false})+' IST');
}

// ── F&O Overview table (stocks #16–40 from heatmap) ─────────────────────────
function renderFOOverview(heatmapData) {
  const tbody = document.getElementById('fno-tbody');
  if (!tbody || !heatmapData || !heatmapData.length) return;
  const sorted = [...heatmapData]
    .sort((a,b) => Math.abs(b.pchange) - Math.abs(a.pchange))
    .slice(15, 40);
  if (!sorted.length) return;
  tbody.innerHTML = sorted.map((s, i) => {
    const up = parseFloat(s.pchange) >= 0;
    const col = up ? '#4caf50' : '#f44336';
    const arr = up ? '▲' : '▼';
    return `<tr style="border-bottom:1px solid var(--border);transition:background .1s"
               onmouseover="this.style.background='rgba(255,153,51,0.04)'"
               onmouseout="this.style.background='transparent'">
      <td style="padding:6px 8px;color:var(--text3)">${i+16}</td>
      <td style="padding:6px 8px;color:var(--text);font-weight:600">${s.symbol}</td>
      <td style="padding:6px 8px;text-align:right;color:var(--text)">₹${parseFloat(s.price||0).toLocaleString('en-IN',{maximumFractionDigits:1})}</td>
      <td style="padding:6px 8px;text-align:right;color:${col};font-weight:600">${arr}${Math.abs(parseFloat(s.pchange)).toFixed(2)}%</td>
      <td style="padding:6px 8px;text-align:right;color:var(--text3);font-size:9px">${s.sector||''}</td>
    </tr>`;
  }).join('');
  const ts = document.getElementById('fno-ts');
  if (ts) ts.textContent = new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit',hour12:false})+' IST';
}

</script>

</body>
</html>
