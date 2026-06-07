import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Booking Confirmed — InverGo Design',
  description: 'Thank you for booking a free scope call with InverGo Design.',
};

export default function ThankYouPage() {
  return (
    <>
      <style>{`
        :root {
          --bg: #0A0A0F; --bg2: #0d0f1c; --bg3: #0f1c46;
          --accent: #018abd; --teal: #02F6C0;
          --accentg: linear-gradient(135deg,#018abd,#02F6C0);
          --white: #f0f2ff; --muted: #8a8fba;
          --border: rgba(1,138,189,0.18);
          --font-head: 'Syne', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        *{margin:0;padding:0;box-sizing:border-box;}
        body{background:var(--bg)!important;color:var(--white);font-family:var(--font-body);}
        .ty-wrap{min-height:100vh;background:var(--bg);display:flex;flex-direction:column;}
        .ty-nav{padding:18px 5%;display:flex;align-items:center;border-bottom:1px solid var(--border);background:rgba(10,10,15,0.9);}
        .ty-main{flex:1;display:flex;align-items:center;justify-content:center;padding:80px 5%;position:relative;overflow:hidden;}
        .ty-bg::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:700px;background:radial-gradient(circle,rgba(2,246,192,.08) 0%,transparent 65%);pointer-events:none;}
        .ty-bg::after{content:'';position:absolute;top:20%;right:10%;width:400px;height:400px;background:radial-gradient(circle,rgba(1,138,189,.1) 0%,transparent 65%);pointer-events:none;}
        .ty-card{position:relative;z-index:1;max-width:640px;width:100%;text-align:center;}
        .ty-icon{width:88px;height:88px;border-radius:50%;background:rgba(2,246,192,.1);border:2px solid rgba(2,246,192,.3);display:flex;align-items:center;justify-content:center;margin:0 auto 32px;animation:ty-pop .5s ease;}
        @keyframes ty-pop{0%{transform:scale(0.5);opacity:0;}100%{transform:scale(1);opacity:1;}}
        .ty-check{font-size:2.4rem;}
        .ty-tag{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);font-weight:600;margin-bottom:16px;display:block;}
        .ty-h1{font-family:var(--font-head);font-size:clamp(2rem,5vw,3.2rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin-bottom:20px;}
        .ty-hl{background:var(--accentg);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
        .ty-sub{font-size:1.05rem;color:var(--muted);line-height:1.75;margin-bottom:40px;max-width:500px;margin-left:auto;margin-right:auto;}
        .ty-steps{background:var(--bg2);border:1px solid var(--border);border-radius:16px;padding:32px;margin-bottom:40px;text-align:left;}
        .ty-steps-title{font-family:var(--font-head);font-size:.85rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);margin-bottom:20px;}
        .ty-step{display:flex;gap:16px;align-items:flex-start;margin-bottom:16px;}
        .ty-step:last-child{margin-bottom:0;}
        .ty-step-num{width:28px;height:28px;border-radius:50%;background:rgba(1,138,189,.15);border:1px solid rgba(1,138,189,.3);display:flex;align-items:center;justify-content:center;font-family:var(--font-head);font-size:.75rem;font-weight:800;color:var(--accent);flex-shrink:0;}
        .ty-step-text h4{font-family:var(--font-head);font-size:.9rem;font-weight:700;margin-bottom:4px;}
        .ty-step-text p{font-size:.83rem;color:var(--muted);line-height:1.6;}
        .ty-btn{display:inline-block;background:var(--accentg);color:#0A0A0F;font-family:var(--font-body);font-weight:600;font-size:1rem;padding:14px 32px;border-radius:8px;text-decoration:none;transition:opacity .2s,transform .2s;}
        .ty-btn:hover{opacity:.9;transform:translateY(-2px);}
        .ty-btn-outline{display:inline-block;background:transparent;color:var(--white);font-family:var(--font-body);font-weight:400;font-size:.9rem;padding:14px 24px;border-radius:8px;border:1px solid var(--border);text-decoration:none;margin-left:12px;transition:border-color .2s;}
        .ty-btn-outline:hover{border-color:rgba(1,138,189,.4);}
        .ty-footer{padding:24px 5%;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;}
        .ty-footer p{font-size:.78rem;color:var(--muted);}
        @media(max-width:600px){
          .ty-btn-outline{margin-left:0;margin-top:12px;}
        }
      `}</style>

      <div className="ty-wrap">
        {/* NAV */}
        <nav className="ty-nav">
          <Image src="/img/logo-head.png" alt="InverGo Design" width={150} height={38} style={{objectFit:'contain'}} />
        </nav>

        {/* MAIN */}
        <main className="ty-main">
          <div className="ty-bg"></div>
          <div className="ty-card">
            <div className="ty-icon">
              <span className="ty-check">✓</span>
            </div>

            <span className="ty-tag">Booking Confirmed</span>
            <h1 className="ty-h1">You&apos;re on the calendar. <span className="ty-hl">Let&apos;s build something great.</span></h1>
            <p className="ty-sub">A confirmation email is on its way. Our team will be ready for your free 15-minute scope call — no pitch, no pressure, just clarity.</p>

            <div className="ty-steps">
              <p className="ty-steps-title">What happens next</p>
              <div className="ty-step">
                <div className="ty-step-num">1</div>
                <div className="ty-step-text">
                  <h4>Check your email</h4>
                  <p>You&apos;ll receive a calendar invite with the call link. Add it to your calendar so you don&apos;t miss it.</p>
                </div>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">2</div>
                <div className="ty-step-text">
                  <h4>We review your business</h4>
                  <p>Before the call, our team will look at your current online presence and prepare a tailored recommendation.</p>
                </div>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">3</div>
                <div className="ty-step-text">
                  <h4>15-minute scope call</h4>
                  <p>We scope your project, recommend the right package, and send a written scope document within 24 hours.</p>
                </div>
              </div>
              <div className="ty-step">
                <div className="ty-step-num">4</div>
                <div className="ty-step-text">
                  <h4>Your site goes live in 21 days</h4>
                  <p>Once you approve the scope and make the first payment, your build slot is locked and the clock starts.</p>
                </div>
              </div>
            </div>

            <div>
              <Link href="/" className="ty-btn">Go to InverGo Design</Link>
              <Link href="/landing" className="ty-btn-outline">Back to the offer</Link>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="ty-footer">
          <Image src="/img/logo-head.png" alt="InverGo Design" width={120} height={30} style={{objectFit:'contain'}} />
          <p>© 2025 Invergo Design. Starting at $795 · Live in 21 days.</p>
          <p>Questions? <a href="mailto:sales@invergodesign.com" style={{color:'var(--accent)',textDecoration:'none'}}>sales@invergodesign.com</a></p>
        </footer>
      </div>
    </>
  );
}
