import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Ocean Health & Travel',
  description: 'Ocean Health & Travel cookie policy. How we use cookies on our website.',
}

export default function CookiePolicy() {
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff}
        a{text-decoration:none;color:inherit}
        .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}
        nav{background:rgba(255,255,255,.96);backdrop-filter:blur(12px);box-shadow:0 1px 0 rgba(0,0,0,.08);position:sticky;top:0;z-index:500}
        .nav-inner{height:66px;display:flex;align-items:center;justify-content:space-between}
        .logo{display:flex;align-items:center}
        .nav-links{display:flex;gap:2rem;list-style:none;align-items:center}
        .nav-links a{font-size:13px;color:#444;transition:color .2s}
        .nav-links a:hover{color:#085041}
        .btn-nav{border:1px solid #085041;padding:8px 18px;border-radius:7px;font-size:13px;font-weight:500;color:#085041!important;transition:all .2s}
        .btn-nav:hover{background:#085041;color:#fff!important}
        .hero{background:#fafaf9;border-bottom:1px solid #f0ede8;padding:60px 0 40px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#1D9E75;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(28px,3.5vw,42px);line-height:1.15;letter-spacing:-.02em;color:#1a1a1a;margin-bottom:.75rem;font-weight:400}
        .updated{font-size:12px;color:#bbb;margin-top:.5rem}
        .content{max-width:760px;margin:0 auto;padding:4rem 2.5rem}
        h2{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#1a1a1a;letter-spacing:-.01em;margin:2.5rem 0 .75rem}
        h2:first-child{margin-top:0}
        p{font-size:15px;color:#444;line-height:1.85;margin-bottom:1.1rem;font-weight:300}
        table{width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:14px}
        th{text-align:left;padding:.75rem 1rem;background:#fafaf9;border-bottom:1px solid #f0ede8;font-weight:500;font-size:12px;text-transform:uppercase;letter-spacing:.06em;color:#999}
        td{padding:.75rem 1rem;border-bottom:1px solid #f5f4f2;color:#444;font-weight:300;line-height:1.6}
        tr:last-child td{border-bottom:none}
        footer{background:#111;padding:2rem 0}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal a{color:#666}
        @media(max-width:600px){.inner{padding:0 1.25rem}.content{padding:2.5rem 1.25rem}table{font-size:12px}}
      `}</style>

      <nav>
        <div className="inner nav-inner">
          <a href="/" className="logo">
            <img src="/logo.png" alt="Ocean Health &amp; Travel" style={{height:'44px',width:'auto',display:'block'}} />
          </a>
          <ul className="nav-links">
            <li><a href="/#services">Treatments</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="https://wa.me/447441904858" target="_blank" className="btn-nav">Free quote</a></li>
          </ul>
        </div>
      </nav>

      <div className="hero">
        <div className="inner">
          <div className="kicker">Legal</div>
          <h1>Cookie Policy</h1>
          <div className="updated">Last updated: June 2025</div>
        </div>
      </div>

      <div className="content">
        <h2>What are cookies?</h2>
        <p>Cookies are small text files placed on your device when you visit a website. They help websites function correctly, remember your preferences, and provide analytics information.</p>

        <h2>How we use cookies</h2>
        <p>Ocean Health &amp; Travel uses a minimal set of cookies necessary to operate our website. We do not use advertising cookies or share cookie data with third-party advertising networks.</p>

        <h2>Types of cookies we use</h2>
        <table>
          <thead>
            <tr><th>Cookie type</th><th>Purpose</th><th>Duration</th></tr>
          </thead>
          <tbody>
            <tr><td>Essential / functional</td><td>Required for the website to function correctly. Cannot be disabled.</td><td>Session</td></tr>
            <tr><td>Analytics (optional)</td><td>Help us understand how visitors use our website (page views, traffic sources). No personally identifiable information is collected.</td><td>Up to 2 years</td></tr>
          </tbody>
        </table>

        <h2>Third-party cookies</h2>
        <p>Our website may load resources from third-party services including Google Fonts. These services may set their own cookies. We do not control third-party cookies and recommend reviewing the privacy policies of these services.</p>

        <h2>Managing cookies</h2>
        <p>You can control and delete cookies through your browser settings. Disabling essential cookies may affect the functionality of our website. For guidance on managing cookies in your browser:</p>
        <p>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{color:'#085041',fontWeight:500}}>Google Chrome</a> ·{' '}
          <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" target="_blank" rel="noopener noreferrer" style={{color:'#085041',fontWeight:500}}>Firefox</a> ·{' '}
          <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{color:'#085041',fontWeight:500}}>Safari</a>
        </p>

        <h2>Contact</h2>
        <p>For questions about our use of cookies:<br />Email: info@oceanhealthtravel.com<br />Ocean Health &amp; Travel Ltd, 17 Green Lanes, London, N16 9BS<br />Company no. 16186647</p>
      </div>

      <footer>
        <div className="inner">
          <div className="footer-legal">
            © 2025 Ocean Health &amp; Travel Ltd · Company no. 16186647 ·{' '}
            <a href="/privacy-policy">Privacy policy</a> ·{' '}
            <a href="/cookie-policy">Cookie policy</a> ·{' '}
            <a href="/complaints-policy">Complaints policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}
