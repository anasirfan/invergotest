'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  useEffect(() => {
    // Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    // Calendly booking complete → Meta Lead event
    const handleCalendly = (e) => {
      if (e.data.event && e.data.event === 'calendly.event_scheduled') {
        if (window.fbq) window.fbq('track', 'Lead');
        window.location.href = '/thank-you';
      }
    };
    window.addEventListener('message', handleCalendly);

    // Meta Pixel
    const pixelScript = document.createElement('script');
    pixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1746849639827377');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(pixelScript);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1746849639827377&ev=PageView&noscript=1"/>';
    document.body.appendChild(noscript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
      document.head.removeChild(pixelScript);
      window.removeEventListener('message', handleCalendly);
    };
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/invergodesign/30min' });
    }
  };

  return (
    <>
      <style>{`
        :root {
          --bg: #0A0A0F; --bg2: #0d0f1c; --bg3: #0f1c46;
          --accent: #018abd; --accent2: #02F6C0;
          --accentg: linear-gradient(135deg,#018abd,#02F6C0);
          --teal: #02F6C0; --white: #f0f2ff; --muted: #8a8fba;
          --border: rgba(1,138,189,0.18);
          --font-head: 'Syne', sans-serif; --font-body: 'DM Sans', sans-serif;
        }
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;}
        html{scroll-behavior:smooth;}
        body{background:var(--bg)!important;color:var(--white);font-family:var(--font-body);font-size:16px;line-height:1.7;overflow-x:hidden;}
        .lp-wrap{background:var(--bg);min-height:100vh;}


        /* NAV */
        .lp-nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 5%;display:flex;align-items:center;justify-content:space-between;background:rgba(10,10,15,0.88);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);}
        .lp-nav-cta{background:var(--accentg);color:#0A0A0F;font-family:var(--font-body);font-weight:600;font-size:.85rem;padding:10px 22px;border:none;border-radius:6px;cursor:pointer;}
        .lp-nav-cta:hover{opacity:.85;}

        /* HERO */
        .lp-hero{min-height:100vh;display:flex;align-items:center;padding:120px 5% 80px;position:relative;overflow:hidden;background:var(--bg);}
        .lp-hero-bg{position:absolute;inset:0;z-index:0;}
        .lp-hero-bg::before{content:'';position:absolute;top:-200px;right:-200px;width:700px;height:700px;background:radial-gradient(circle,rgba(1,138,189,.15) 0%,transparent 65%);border-radius:50%;}
        .lp-hero-bg::after{content:'';position:absolute;bottom:-100px;left:-100px;width:500px;height:500px;background:radial-gradient(circle,rgba(2,246,192,.1) 0%,transparent 65%);border-radius:50%;}
        .lp-grid-bg{position:absolute;inset:0;background-image:linear-gradient(rgba(1,138,189,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(1,138,189,.04) 1px,transparent 1px);background-size:60px 60px;}
        .lp-hero-content{position:relative;z-index:1;max-width:780px;}
        .lp-pill{display:inline-flex;align-items:center;gap:8px;background:rgba(1,138,189,.12);border:1px solid rgba(1,138,189,.3);border-radius:100px;padding:6px 16px;font-size:.78rem;color:#7dd8ef;letter-spacing:.06em;text-transform:uppercase;margin-bottom:28px;}
        .lp-pill::before{content:'';width:6px;height:6px;border-radius:50%;background:#018abd;animation:lp-pulse 2s infinite;}
        @keyframes lp-pulse{0%,100%{opacity:1;}50%{opacity:.3;}}
        .lp-h1{font-family:var(--font-head);font-size:clamp(2.4rem,5.5vw,4.2rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin-bottom:24px;}
        .lp-hl{background:var(--accentg);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .lp-hl2{color:var(--teal);}
        .lp-sub{font-size:1.1rem;color:var(--muted);max-width:580px;margin-bottom:36px;font-weight:300;line-height:1.75;}
        .lp-sub strong{color:var(--white);font-weight:500;}
        .lp-btn-primary{display:inline-block;background:var(--accentg);color:#0A0A0F;font-family:var(--font-body);font-weight:600;font-size:1rem;padding:16px 36px;border-radius:8px;border:none;cursor:pointer;text-decoration:none;transition:transform .2s,opacity .2s;}
        .lp-btn-primary:hover{transform:translateY(-2px);opacity:.9;}
        .lp-btn-secondary{display:inline-block;background:transparent;color:var(--white);font-family:var(--font-body);font-weight:400;font-size:1rem;padding:16px 28px;border-radius:8px;border:1px solid var(--border);cursor:pointer;text-decoration:none;margin-left:12px;transition:border-color .2s;}
        .lp-btn-secondary:hover{border-color:rgba(1,138,189,.5);}
        .lp-trust{margin-top:56px;display:flex;align-items:center;gap:32px;flex-wrap:wrap;}
        .lp-trust-item .num{font-family:var(--font-head);font-size:1.8rem;font-weight:800;}
        .lp-trust-item .num span{background:var(--accentg);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .lp-trust-item .label{font-size:.78rem;color:var(--muted);letter-spacing:.04em;}
        .lp-trust-div{width:1px;height:40px;background:var(--border);}

        /* SECTIONS */
        .lp-section{padding:80px 5%;}
        .lp-section-alt{background:var(--bg2);}
        .lp-section-tag{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);font-weight:600;margin-bottom:14px;display:block;}
        .lp-section-header{text-align:center;margin-bottom:64px;}
        .lp-h2{font-family:var(--font-head);font-size:clamp(1.6rem,3.5vw,2.6rem);font-weight:800;letter-spacing:-.03em;margin-bottom:12px;}
        .lp-section-sub{color:var(--muted);max-width:540px;margin:0 auto;font-size:.95rem;}

        /* PROOF */
        .lp-proof-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;}
        .lp-proof-card{background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:28px;position:relative;overflow:hidden;transition:border-color .2s,transform .2s;}
        .lp-proof-card:hover{border-color:rgba(1,138,189,.4);transform:translateY(-3px);}
        .lp-proof-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--accentg);}
        .lp-proof-client{font-size:.78rem;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;margin-bottom:6px;}
        .lp-proof-result{font-family:var(--font-head);font-size:1.8rem;font-weight:800;margin-bottom:4px;}
        .lp-proof-result span{background:var(--accentg);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .lp-proof-metric{font-size:.82rem;color:var(--teal);margin-bottom:12px;}
        .lp-proof-detail{font-size:.85rem;color:var(--muted);line-height:1.6;}

        /* LOGOS */
        .lp-logos{padding:48px 5%;border-bottom:1px solid var(--border);background:var(--bg);}
        .lp-logos-label{text-align:center;font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:28px;}
        .lp-logos-row{display:flex;align-items:center;justify-content:center;gap:48px;flex-wrap:wrap;}
        .lp-logo-item{font-family:var(--font-head);font-weight:700;font-size:1rem;color:rgba(138,143,186,.4);letter-spacing:.05em;text-transform:uppercase;}

        /* HOW GRID */
        .lp-how-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
        .lp-how-card{background:var(--bg2);border:1px solid var(--border);border-radius:14px;padding:32px;display:flex;gap:20px;align-items:flex-start;transition:border-color .2s;}
        .lp-how-card:hover{border-color:rgba(1,138,189,.35);}
        .lp-how-icon{width:44px;height:44px;border-radius:10px;background:rgba(1,138,189,.12);border:1px solid rgba(1,138,189,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1.2rem;}
        .lp-how-card h3{font-family:var(--font-head);font-size:1rem;font-weight:700;margin-bottom:8px;}
        .lp-how-card p{font-size:.87rem;color:var(--muted);line-height:1.65;}

        /* GUARANTEE */
        .lp-guarantee-inner{max-width:900px;margin:0 auto;display:flex;gap:60px;align-items:center;}
        .lp-guarantee-badge{flex-shrink:0;width:140px;height:140px;border-radius:50%;border:2px solid var(--accent);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;}
        .lp-guarantee-badge .big{font-family:var(--font-head);font-size:2rem;font-weight:800;background:var(--accentg);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;}
        .lp-guarantee-badge .small{font-size:.65rem;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-top:4px;}
        .lp-guarantee-text p{color:var(--muted);font-size:.93rem;margin-bottom:24px;line-height:1.75;}

        /* PACKAGES */
        .lp-pkg-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:56px;}
        .lp-pkg-card{background:var(--bg2);border:1px solid var(--border);border-radius:16px;padding:36px 28px;position:relative;overflow:hidden;transition:transform .2s;}
        .lp-pkg-card:hover{transform:translateY(-4px);}
        .lp-pkg-card.featured{border:1px solid rgba(1,138,189,.5);background:var(--bg3);}
        .lp-pkg-card.featured::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--accentg);}
        .lp-pkg-badge{display:inline-block;font-size:.7rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:4px 12px;border-radius:100px;margin-bottom:20px;background:rgba(1,138,189,.15);color:#7dd8ef;border:1px solid rgba(1,138,189,.25);}
        .lp-pkg-badge.hot{background:rgba(2,246,192,.12);color:#02F6C0;border-color:rgba(2,246,192,.3);}
        .lp-pkg-name{font-family:var(--font-head);font-size:1.4rem;font-weight:800;margin-bottom:6px;}
        .lp-pkg-price{font-family:var(--font-head);font-size:2.4rem;font-weight:800;margin-bottom:4px;background:var(--accentg);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .lp-pkg-pages{font-size:.82rem;color:var(--muted);margin-bottom:24px;}
        .lp-pkg-divider{height:1px;background:var(--border);margin-bottom:20px;}
        .lp-pkg-features{list-style:none;margin-bottom:28px;}
        .lp-pkg-features li{font-size:.87rem;color:var(--muted);padding:6px 0;display:flex;align-items:flex-start;gap:10px;line-height:1.5;}
        .lp-pkg-features li::before{content:'✓';color:var(--teal);font-weight:700;flex-shrink:0;}
        .lp-pkg-features li.no{color:rgba(138,143,186,.35);}
        .lp-pkg-features li.no::before{content:'—';color:rgba(138,143,186,.3);}
        .lp-pkg-cta{display:block;width:100%;padding:14px;text-align:center;border-radius:8px;font-family:var(--font-body);font-weight:600;font-size:.93rem;cursor:pointer;transition:all .2s;text-decoration:none;border:none;}
        .lp-pkg-cta.primary{background:var(--accentg);color:#0A0A0F;}
        .lp-pkg-cta.primary:hover{opacity:.88;}
        .lp-pkg-cta.outline{background:transparent;color:var(--white);border:1px solid var(--border);}
        .lp-pkg-cta.outline:hover{border-color:rgba(1,138,189,.4);}

        /* PROCESS */
        .lp-process-steps{margin-top:56px;position:relative;}
        .lp-process-steps::before{content:'';position:absolute;left:28px;top:0;bottom:0;width:1px;background:var(--border);}
        .lp-step{display:flex;gap:28px;margin-bottom:40px;position:relative;}
        .lp-step-num{width:56px;height:56px;border-radius:50%;border:1px solid rgba(1,138,189,.4);background:var(--bg);display:flex;align-items:center;justify-content:center;font-family:var(--font-head);font-weight:800;font-size:.9rem;color:var(--accent);flex-shrink:0;position:relative;z-index:1;}
        .lp-step-body h3{font-family:var(--font-head);font-size:1.05rem;font-weight:700;margin-bottom:8px;padding-top:14px;}
        .lp-step-body p{font-size:.88rem;color:var(--muted);line-height:1.7;}

        /* TABLE */
        .lp-compare-table{width:100%;border-collapse:collapse;margin-top:40px;}
        .lp-compare-table th{font-family:var(--font-head);font-size:.78rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;padding:14px 20px;text-align:left;border-bottom:1px solid var(--border);color:var(--muted);}
        .lp-compare-table th:not(:first-child){text-align:center;}
        .lp-compare-table td{padding:14px 20px;font-size:.88rem;border-bottom:1px solid rgba(1,138,189,.07);}
        .lp-compare-table td:not(:first-child){text-align:center;}
        .lp-compare-table tr:hover td{background:rgba(1,138,189,.03);}
        .lp-item-name{color:var(--white);font-weight:500;}
        .lp-item-price{color:var(--muted);font-size:.78rem;display:block;margin-top:2px;}
        .lp-check{color:var(--teal);}
        .lp-cross{color:rgba(138,143,186,.3);}
        .lp-val{color:var(--white);font-size:.85rem;}

        /* FINAL CTA */
        .lp-final-cta{padding:120px 5%;position:relative;overflow:hidden;text-align:center;background:var(--bg);}
        .lp-final-cta-bg::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:400px;background:radial-gradient(ellipse,rgba(1,138,189,.12) 0%,transparent 65%);}
        .lp-final-content{position:relative;z-index:1;max-width:700px;margin:0 auto;}
        .lp-cta-note{font-size:.78rem;color:var(--muted);margin-top:16px;opacity:.7;}
        .lp-form-input{background:rgba(255,255,255,.035);border:1px solid var(--border);border-radius:8px;padding:14px 16px;color:var(--white);font-family:var(--font-body);font-size:.9rem;outline:none;width:100%;transition:border-color .2s;}
        .lp-form-input:focus{border-color:rgba(1,138,189,.5);}
        .lp-form-input::placeholder{color:rgba(138,143,186,.6);}


        /* FOOTER */
        .lp-footer{padding:32px 5%;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;background:var(--bg);}
        .lp-footer p{font-size:.78rem;color:var(--muted);}

        @media(max-width:768px){
          .lp-trust{gap:20px;}
          .lp-how-grid{grid-template-columns:1fr;}
          .lp-pkg-grid{grid-template-columns:1fr;}
          .lp-guarantee-inner{flex-direction:column;text-align:center;gap:32px;}
          .lp-process-steps::before{display:none;}
          .lp-footer{flex-direction:column;text-align:center;}
          .lp-form-grid{grid-template-columns:1fr!important;}
        }
      `}</style>

      <div className="lp-wrap">
        {/* NAV */}
        <nav className="lp-nav">
          <Image src="/img/logo-head.png" alt="InverGo Design" width={160} height={40} style={{objectFit:'contain'}} />
          <button className="lp-nav-cta" onClick={openCalendly}>Book Free Scope Call</button>
        </nav>

        {/* HERO */}
        <section className="lp-hero">
          <div className="lp-hero-bg"><div className="lp-grid-bg"></div></div>
          <div className="lp-hero-content">
            <div className="lp-pill">Shopify &amp; WordPress Development</div>
            <h1 className="lp-h1">How Business Owners Get a <span className="lp-hl">Revenue-Ready Website</span> Live in <span className="lp-hl2">21 Days</span></h1>
            <p className="lp-sub">We scope the project in one call, build to a fixed timeline, and deliver a site that is <strong>live, tested, and converting</strong> — or we work for free until it is. Starting at $795.</p>
            <div>
              <button className="lp-btn-primary" onClick={openCalendly}>Book Your Free Scope Call</button>
              <a href="#packages" className="lp-btn-secondary">See Packages</a>
            </div>
            <div className="lp-trust">
              <div className="lp-trust-item"><div className="num"><span>40+</span></div><div className="label">Sites Delivered</div></div>
              <div className="lp-trust-div"></div>
              <div className="lp-trust-item"><div className="num"><span>21</span></div><div className="label">Day Guarantee</div></div>
              <div className="lp-trust-div"></div>
              <div className="lp-trust-item"><div className="num"><span>$0</span></div><div className="label">If We Miss the Deadline</div></div>
              <div className="lp-trust-div"></div>
              <div className="lp-trust-item"><div className="num">50<span style={{fontSize:'1rem',verticalAlign:'middle'}}>%</span></div><div className="label">Only on Completion</div></div>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="lp-section lp-section-alt" style={{borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
          <div style={{textAlign:'center',marginBottom:'8px'}}><span className="lp-section-tag">Proof our builds work</span></div>
          <h2 className="lp-h2" style={{textAlign:'center',marginBottom:'8px'}}>Real Sites. Real Results. <span className="lp-hl">Real Revenue.</span></h2>
          <p style={{textAlign:'center',color:'var(--muted)',marginBottom:'56px',fontSize:'.95rem'}}>Every number below came from a site we built and delivered on time.</p>
          <div className="lp-proof-grid">
            {[
              {client:'Fashion Boutique · Marble Package',result:'+340%',metric:'Organic traffic in 60 days',detail:'Built with full SEO setup, Google Search Console integration, and a blog section. First page ranking in 8 weeks from launch.'},
              {client:'Leather Goods Brand · Marble Package',result:'96 hrs',metric:'First online order after launch',detail:'Previously selling only through DMs. Full Shopify build, mobile-optimised checkout. First sale came in 4 days after going live.'},
              {client:'Home Decor Store · Diamond Package',result:'4.1×',metric:'ROAS on Meta ads post-launch',detail:'Speed-optimised build with Meta Pixel, abandoned cart flow, and Google Merchant setup. Ad performance increased the week the site went live.'},
              {client:'Consulting Firm · Granite Package',result:'11 days',metric:'Scope call to live website',detail:'3-page professional site with payment gateway. Client had been quoted $3,200 by a local agency. We delivered in 11 days for $795.'},
              {client:'F&B Brand · Marble Package',result:'$0',metric:'Extra charged beyond package price',detail:'Fixed price. Fixed scope. Fixed timeline. No surprise invoices. What we quoted on the call was what they paid on completion.'},
              {client:'Skincare Brand · Diamond Package',result:'18 days',metric:'Full Diamond build — start to live',detail:'Custom UX, speed optimisation, promo pop-ups, Meta Pixel, Google Merchant, abandoned cart — everything. Delivered 3 days ahead of schedule.'},
            ].map((c,i) => (
              <div className="lp-proof-card" key={i}>
                <p className="lp-proof-client">{c.client}</p>
                <p className="lp-proof-result"><span>{c.result}</span></p>
                <p className="lp-proof-metric">{c.metric}</p>
                <p className="lp-proof-detail">{c.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOGOS */}
        <div className="lp-logos" style={{borderBottom:'1px solid var(--border)'}}>
          <p className="lp-logos-label">Platforms we build on</p>
          <div className="lp-logos-row">
            {['Shopify','WordPress','WooCommerce','Elementor','Liquid','Webflow'].map(p => <span className="lp-logo-item" key={p}>{p}</span>)}
          </div>
        </div>

        {/* STATEMENT */}
        <section className="lp-section lp-section-alt" style={{borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
          <div style={{maxWidth:'820px',margin:'0 auto',textAlign:'center'}}>
            <p style={{fontFamily:'var(--font-head)',fontSize:'clamp(1.3rem,2.8vw,2rem)',fontWeight:700,lineHeight:1.4,letterSpacing:'-.02em'}}>Last year, <span className="lp-hl">more than 50% of all purchases</span> on the internet were made after a Google search. A slow, broken, or non-existent website is not a minor problem. <span style={{color:'var(--teal)'}}>It is a revenue leak.</span></p>
            <p style={{color:'var(--muted)',marginTop:'20px',fontSize:'.95rem'}}>Invergo builds websites that rank, convert, and keep working long after the project closes.</p>
          </div>
        </section>

        {/* HOW */}
        <section className="lp-section" style={{background:'var(--bg)'}}>
          <div style={{maxWidth:'1100px',margin:'0 auto'}}>
            <div className="lp-section-header">
              <span className="lp-section-tag">Why we&apos;re different</span>
              <h2 className="lp-h2">We Don&apos;t Just Build Websites. <span className="lp-hl">We Build Revenue Infrastructure.</span></h2>
              <p className="lp-section-sub">Every decision in our build process is made with one question in mind: does this help the site make money?</p>
            </div>
            <div className="lp-how-grid">
              {[
                {icon:'⚡',title:'Speed-first development',desc:'Every second of load time above 3 seconds loses 20% of visitors. We optimise for Core Web Vitals on every build, not just Diamond packages.'},
                {icon:'🎯',title:'SEO foundations built in',desc:'On-page SEO, schema markup, sitemap, and Google Search Console setup are standard. Not add-ons. Your site is findable the day it goes live.'},
                {icon:'📊',title:'Analytics from day one',desc:'Google Analytics and GSC connected and verified before handover. You can see exactly who visits, where they came from, and what they did.'},
                {icon:'🛡️',title:'Secure by default',desc:'SSL certificate, firewall configuration (Diamond), and clean code architecture. No plugin bloat. No security vulnerabilities shipped on delivery.'},
                {icon:'🔄',title:'Ad-ready infrastructure',desc:'Meta Pixel, Google Merchant Centre, abandoned cart flows, and exit-intent pop-ups — Diamond builds are engineered for business owners running paid ads.'},
                {icon:'📋',title:'Fixed scope. Fixed price.',desc:'We send a written scope document before any work begins. No revision surprises. No scope creep invoices. What we agree on the call is what you pay.'},
              ].map((c,i) => (
                <div className="lp-how-card" key={i}>
                  <div className="lp-how-icon">{c.icon}</div>
                  <div><h3>{c.title}</h3><p>{c.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="lp-section lp-section-alt" style={{borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)'}}>
          <div className="lp-guarantee-inner">
            <div className="lp-guarantee-badge">
              <div className="big">21</div>
              <div className="small">Day Guarantee</div>
            </div>
            <div className="lp-guarantee-text">
              <h2 className="lp-h2" style={{marginBottom:'12px'}}>Invergo <span className="lp-hl">Delivery Guarantee:</span> If we miss your launch date, we work for free until it&apos;s done.</h2>
              <p>Every project gets a written scope document, a fixed delivery date, and milestone check-ins every 5 working days. If we miss the agreed launch date for any reason within our control, all remaining work is completed at zero charge. We have never triggered this clause. We are telling you about it because the guarantee is what makes the timeline real.</p>
              <button className="lp-btn-primary" onClick={openCalendly}>Book Your Free Scope Call</button>
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="lp-section" id="packages" style={{background:'var(--bg)'}}>
          <div style={{maxWidth:'1100px',margin:'0 auto'}}>
            <div className="lp-section-header">
              <span className="lp-section-tag">Transparent pricing</span>
              <h2 className="lp-h2">Three Packages. <span className="lp-hl">One Standard of Quality.</span></h2>
              <p className="lp-section-sub">Every package includes a written scope, fixed timeline, and handover documentation.</p>
            </div>
            <div className="lp-pkg-grid">
              <div className="lp-pkg-card">
                <div className="lp-pkg-badge">Granite</div>
                <div className="lp-pkg-name">Credibility Site</div>
                <div className="lp-pkg-price">$795</div>
                <div className="lp-pkg-pages">3 pages · Theme UX · Delivered in 14 days</div>
                <div className="lp-pkg-divider"></div>
                <ul className="lp-pkg-features">
                  <li>3 professional pages</li><li>Theme-based UX/UI design</li><li>2 rounds of revisions</li>
                  <li>Payment gateway integration</li><li>2 hours post-launch support</li><li>SSL certificate</li>
                  <li className="no">Content creation</li><li className="no">On-page SEO</li>
                  <li className="no">Google Analytics + GSC</li><li className="no">Blog section</li>
                </ul>
                <button className="lp-pkg-cta outline" onClick={openCalendly}>Book Free Scope Call</button>
              </div>
              <div className="lp-pkg-card featured">
                <div className="lp-pkg-badge hot">Most Popular · Marble</div>
                <div className="lp-pkg-name">Growth Site</div>
                <div className="lp-pkg-price">$1,299</div>
                <div className="lp-pkg-pages">4 pages · Theme UX · Delivered in 21 days</div>
                <div className="lp-pkg-divider"></div>
                <ul className="lp-pkg-features">
                  <li>4 professional pages</li><li>Theme-based UX/UI design</li><li>3 rounds of revisions</li>
                  <li>Original content creation</li><li>On-page SEO foundations</li>
                  <li>Google Analytics + GSC setup</li><li>Blog section included</li>
                  <li>Domain &amp; hosting setup</li><li>5 hours post-launch support</li><li>SSL certificate</li>
                </ul>
                <button className="lp-pkg-cta primary" onClick={openCalendly}>Book Free Scope Call</button>
              </div>
              <div className="lp-pkg-card">
                <div className="lp-pkg-badge">Diamond</div>
                <div className="lp-pkg-name">Ad-Ready Site</div>
                <div className="lp-pkg-price">$2,000+</div>
                <div className="lp-pkg-pages">Up to 7 pages · Custom UX · Timeline agreed on scope call</div>
                <div className="lp-pkg-divider"></div>
                <ul className="lp-pkg-features">
                  <li>Up to 7 pages, custom UX/UI</li><li>4 rounds of revisions</li>
                  <li>Speed optimisation (Core Web Vitals)</li><li>Meta Pixel setup &amp; verification</li>
                  <li>Google Merchant Centre setup</li><li>Abandoned cart recovery flow</li>
                  <li>Promo pop-ups (exit-intent)</li><li>Firewall configuration</li>
                  <li>10 hours post-launch support</li><li>Everything in Marble included</li>
                </ul>
                <button className="lp-pkg-cta outline" onClick={openCalendly}>Book Free Scope Call</button>
              </div>
            </div>
            <p style={{textAlign:'center',fontSize:'.8rem',color:'var(--muted)',marginTop:'20px'}}>All packages: 50% upfront / 50% on delivery. Need something custom? <button onClick={openCalendly} style={{color:'var(--accent)',background:'none',border:'none',cursor:'pointer',fontSize:'.8rem'}}>Book a call.</button></p>
          </div>
        </section>

        {/* FEATURE TABLE */}
        <section className="lp-section" style={{background:'var(--bg2)'}}>
          <div style={{maxWidth:'900px',margin:'0 auto'}}>
            <div className="lp-section-header">
              <span className="lp-section-tag">Full comparison</span>
              <h2 className="lp-h2">Every Feature. <span className="lp-hl">Every Package.</span></h2>
              <p className="lp-section-sub">No asterisks. No fine print. This is exactly what each package includes.</p>
            </div>
            <div style={{overflowX:'auto'}}>
              <table className="lp-compare-table">
                <thead>
                  <tr>
                    <th style={{width:'40%'}}>Feature</th>
                    <th>Granite<br/><small style={{fontWeight:400,color:'var(--muted)'}}>$795</small></th>
                    <th>Marble<br/><small style={{fontWeight:400,color:'var(--muted)'}}>$1,299</small></th>
                    <th>Diamond<br/><small style={{fontWeight:400,color:'var(--muted)'}}>$2,000+</small></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Pages','3','4','Up to 7'],
                    ['Design','Theme','Theme','Custom'],
                    ['Revisions','2','3','4'],
                  ].map(([f,...v],i) => (
                    <tr key={i}><td><span className="lp-item-name">{f}</span></td>{v.map((val,j) => <td key={j}><span className="lp-val">{val}</span></td>)}</tr>
                  ))}
                  {[
                    ['Content creation','$150/page standalone',false,true,true],
                    ['On-page SEO','$250 standalone',false,true,true],
                    ['Speed optimisation','$300 standalone',false,false,true],
                    ['Google Analytics + GSC','$200 standalone',false,true,true],
                    ['Blog section','$250 standalone',false,true,true],
                    ['Payment gateway','$100/gateway standalone',true,true,true],
                    ['Domain & hosting','$300/yr standalone',false,true,true],
                    ['SSL certificate','$500 standalone',false,true,true],
                    ['Firewall','$500 standalone',false,false,true],
                    ['Abandoned cart flow','$500 standalone',false,false,true],
                    ['Google Merchant setup','$500 standalone',false,false,true],
                    ['Meta Pixel setup','$200 standalone',false,false,true],
                    ['Promo pop-ups','$200 standalone',false,true,true],
                  ].map(([f,p,...vals],i) => (
                    <tr key={i}>
                      <td><span className="lp-item-name">{f}</span><span className="lp-item-price">{p}</span></td>
                      {vals.map((v,j) => <td key={j}>{v ? <span className="lp-check">✓</span> : <span className="lp-cross">—</span>}</td>)}
                    </tr>
                  ))}
                  <tr><td><span className="lp-item-name">Support hours</span></td><td><span className="lp-val">2 hrs</span></td><td><span className="lp-val">5 hrs</span></td><td><span className="lp-val">10 hrs</span></td></tr>
                  <tr><td><span className="lp-item-name">Delivery timeline</span></td><td><span className="lp-val">14 days</span></td><td><span className="lp-val">21 days</span></td><td><span className="lp-val">Scoped</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="lp-section lp-section-alt" style={{borderTop:'1px solid var(--border)'}}>
          <div style={{maxWidth:'900px',margin:'0 auto'}}>
            <div className="lp-section-header">
              <span className="lp-section-tag">Our 8-step process</span>
              <h2 className="lp-h2">From Scope Call to <span className="lp-hl">Live Website</span> — Every Step Explained.</h2>
              <p className="lp-section-sub">We tell you exactly what happens at every stage. No black boxes. No mystery gaps where projects die.</p>
            </div>
            <div className="lp-process-steps">
              {[
                ['01','Free scope call (15 minutes)','We understand your business, your goals, and which package fits. You receive a written scope document within 24 hours. No obligation. No pitch. Just clarity on exactly what you\'d get.'],
                ['02','Scope agreement & first payment (50%)','You approve the scope document and pay the first 50%. This locks in your build slot, your timeline, and your delivery date. The clock starts here.'],
                ['03','Content & asset collection','We send a structured checklist — logo, brand colours, product images, copy notes. The timeline clock runs from the date you return this checklist, not from payment.'],
                ['04','Design & first review (day 5–7)','We deliver the homepage design and main layout for your first review. You give feedback. We revise. This is milestone one of our 5-day check-in system.'],
                ['05','Full build (remaining pages & functionality)','All pages built, all integrations connected — payment gateway, SEO, analytics, SSL — and all content placed. Internal QA completed on desktop and mobile.'],
                ['06','Client review & final revisions','Full site delivered for your review. You give consolidated feedback. We complete your remaining revision rounds. This is your last chance to adjust before go-live.'],
                ['07','Final payment & go-live','You pay the remaining 50% only when the site is approved. We point the domain, run final checks, and push the site live. You receive all credentials and access.'],
                ['08','Handover & support period','You receive a full handover document: all logins, platform access, and a short video walkthrough of how to manage your site. Your support hours start here.'],
              ].map(([num,title,desc]) => (
                <div className="lp-step" key={num}>
                  <div className="lp-step-num">{num}</div>
                  <div className="lp-step-body"><h3>{title}</h3><p>{desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="lp-final-cta" id="cta-form">
          <div className="lp-final-cta-bg"></div>
          <div className="lp-final-content">
            <span className="lp-section-tag">Get started</span>
            <h2 className="lp-h2" style={{marginBottom:'16px'}}>You Don&apos;t Need Another Agency. <span className="lp-hl">You Need a Partner Who Delivers.</span></h2>
            <p style={{color:'var(--muted)',marginBottom:'36px',fontSize:'1rem',lineHeight:1.75}}>We scope every project in writing, commit to a launch date, and only collect the second payment when you have a live site you are satisfied with. Book a free 15-minute call this week. No pitch. No pressure.</p>
            <div style={{background:'var(--bg2)',border:'1px solid var(--border)',borderRadius:'16px',padding:'36px',marginTop:'8px'}}>
              <div className="calendly-inline-widget" data-url="https://calendly.com/invergodesign/30min?hide_gdpr_banner=1&background_color=0d0f1c&text_color=f0f2ff&primary_color=018abd" style={{minWidth:'320px',height:'700px'}}></div>
            </div>
            <p className="lp-cta-note">We respond to every submission within 4 business hours. No automated sequences. A real person from our team.</p>
            <div style={{display:'flex',justifyContent:'center',gap:'32px',marginTop:'32px',flexWrap:'wrap'}}>
              {[['40+','Sites delivered'],['21 days','Guaranteed delivery'],['50%','Only on completion']].map(([n,l]) => (
                <div style={{textAlign:'center'}} key={n}><div style={{fontFamily:'var(--font-head)',fontSize:'1.3rem',fontWeight:800,background:'var(--accentg)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>{n}</div><div style={{fontSize:'.75rem',color:'var(--muted)'}}>{l}</div></div>
              ))}
              <div style={{textAlign:'center'}}><div style={{fontFamily:'var(--font-head)',fontSize:'1.3rem',fontWeight:800,color:'var(--teal)'}}>$0</div><div style={{fontSize:'.75rem',color:'var(--muted)'}}>If we miss deadline</div></div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="lp-footer">
          <Image src="/img/logo-head.png" alt="InverGo Design" width={140} height={35} style={{objectFit:'contain'}} />
          <p>© 2025 Invergo Design. Shopify &amp; WordPress Development.</p>
          <p>Starting at $795 · Live in 21 days · 50% on completion</p>
        </footer>
      </div>
    </>
  );
}
