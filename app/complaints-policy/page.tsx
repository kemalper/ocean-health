import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Complaints Policy | Ocean Health & Travel',
  description: 'Ocean Health & Travel complaints policy. How to raise a concern or complaint about our coordination services.',
}

export default function ComplaintsPolicy() {
  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff}
        a{text-decoration:none;color:inherit}
        .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}
.nav-links a:hover{color:#085041}
        .btn-
.btn-nav:hover{background:#085041;color:#fff!important}
        .hero{background:#fafaf9;border-bottom:1px solid #f0ede8;padding:60px 0 40px}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#1D9E75;margin-bottom:1rem}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(28px,3.5vw,42px);line-height:1.15;letter-spacing:-.02em;color:#1a1a1a;margin-bottom:.75rem;font-weight:400}
        .updated{font-size:12px;color:#bbb;margin-top:.5rem}
        .content{max-width:760px;margin:0 auto;padding:4rem 2.5rem}
        h2{font-family:'DM Serif Display',serif;font-size:22px;font-weight:400;color:#1a1a1a;letter-spacing:-.01em;margin:2.5rem 0 .75rem}
        h2:first-child{margin-top:0}
        p{font-size:15px;color:#444;line-height:1.85;margin-bottom:1.1rem;font-weight:300}
        ul{list-style:none;padding:0;margin-bottom:1.1rem}
        ul li{font-size:15px;color:#444;line-height:1.85;padding-left:16px;position:relative;font-weight:300;margin-bottom:.4rem}
        ul li::before{content:'·';position:absolute;left:0;color:#1D9E75;font-weight:700;font-size:18px}
        .highlight{background:#f0faf5;border:1px solid #c6f0de;border-radius:12px;padding:1.25rem 1.5rem;margin:1.5rem 0}
        .highlight p{margin:0;color:#085041;font-size:14px}
        footer{background:#111;padding:2rem 0;margin-top:0}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal a{color:#666}
        @media(max-width:600px){.inner{padding:0 1.25rem}.content{padding:2.5rem 1.25rem}}
      `}</style>

      <Nav />

      <div className="hero">
        <div className="inner">
          <div className="kicker">Legal</div>
          <h1>Complaints Policy</h1>
          <div className="updated">Last updated: June 2025</div>
        </div>
      </div>

      <div className="content">
        <h2>Our commitment</h2>
        <p>Ocean Health &amp; Travel Ltd is committed to providing a high-quality coordination service. We take all complaints seriously and aim to resolve concerns promptly, fairly, and transparently.</p>
        <p>This policy applies to complaints about Ocean Health &amp; Travel Ltd&apos;s coordination services. Complaints about clinical care should be directed to the treating provider — we will assist in facilitating this communication where appropriate.</p>

        <div className="highlight">
          <p><strong>Important:</strong> Ocean Health &amp; Travel is a medical tourism coordinator, not a medical provider. We are not responsible for clinical outcomes, surgical decisions, or post-operative complications. Clinical complaints must be directed to the treating provider&apos;s patient relations team.</p>
        </div>

        <h2>What you can complain about</h2>
        <p>You may raise a complaint with us about:</p>
        <ul>
          <li>The quality or accuracy of our coordination services</li>
          <li>Communication failures or delays on our part</li>
          <li>Inaccuracies in your itemised quote or billing</li>
          <li>Failure to arrange agreed services (transfer, hotel, interpretation)</li>
          <li>Handling of your personal data</li>
          <li>Any other aspect of our coordination service</li>
        </ul>

        <h2>How to raise a complaint</h2>
        <p>Complaints can be submitted by:</p>
        <ul>
          <li><strong>Email:</strong> info@oceanhealthtravel.com — please use the subject line "Formal Complaint"</li>
          <li><strong>Post:</strong> Ocean Health &amp; Travel Ltd, 17 Green Lanes, London, N16 9BS, United Kingdom</li>
        </ul>
        <p>Please include: your full name, contact details, the dates of your treatment, a clear description of your complaint, and any supporting documentation.</p>

        <h2>How we handle complaints</h2>
        <ul>
          <li><strong>Acknowledgement:</strong> We will acknowledge receipt of your complaint within 3 working days</li>
          <li><strong>Investigation:</strong> We will investigate your complaint and aim to provide a full response within 14 working days</li>
          <li><strong>Resolution:</strong> If your complaint cannot be resolved within 14 working days, we will write to explain the delay and provide an updated timeline</li>
          <li><strong>Final response:</strong> Our final response will set out our findings, any action taken, and any remedy offered</li>
        </ul>

        <h2>Clinical complaints</h2>
        <p>If your complaint relates to clinical care received at one of our partner hospitals, you should contact the hospital&apos;s patient relations team directly. Ocean Health &amp; Travel will assist in facilitating communication with the hospital where possible, but we are not able to adjudicate on clinical matters.</p>
        <p>For UK-based follow-up concerns, your UK GP or NHS provider is the appropriate first point of contact.</p>

        <h2>Escalation</h2>
        <p>If you are not satisfied with our response, you may refer your complaint to:</p>
        <ul>
          <li>The Information Commissioner&apos;s Office (ICO) — for data protection complaints: ico.org.uk</li>
          <li>Citizens Advice — for general consumer advice: citizensadvice.org.uk</li>
          <li>Your local Trading Standards office</li>
        </ul>

        <h2>Contact</h2>
        <p>Ocean Health &amp; Travel Ltd<br />17 Green Lanes, London, N16 9BS<br />United Kingdom<br />Email: info@oceanhealthtravel.com<br />Tel: +44 7441 904858<br />Company no. 16186647</p>
      </div>

      <footer>
        <div className="inner">
          <div className="footer-legal">
            © {new Date().getFullYear()} Ocean Health &amp; Travel Ltd · Company no. 16186647 ·{' '}
            <a href="/privacy-policy">Privacy policy</a> ·{' '}
            <a href="/cookie-policy">Cookie policy</a> ·{' '}
            <a href="/complaints-policy">Complaints policy</a>
          </div>
        </div>
      </footer>
    </>
  )
}
