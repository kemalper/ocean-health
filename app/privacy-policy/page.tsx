import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ocean Health & Travel',
  description: 'Ocean Health & Travel privacy policy. How we collect, use, and protect your personal data under UK GDPR.',
}

export default function PrivacyPolicy() {
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
        footer{background:#111;padding:2rem 0}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal a{color:#666}
        @media(max-width:600px){.inner{padding:0 1.25rem}.content{padding:2.5rem 1.25rem}}
      `}</style>

      <Nav />

      <div className="hero">
        <div className="inner">
          <div className="kicker">Legal</div>
          <h1>Privacy Policy</h1>
          <div className="updated">Last updated: June 2025</div>
        </div>
      </div>

      <div className="content">
        <h2>Who we are</h2>
        <p>Ocean Health &amp; Travel Ltd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is registered in England &amp; Wales (Company no. 16186647), with registered office at 17 Green Lanes, London, N16 9BS. We are registered with the Information Commissioner&apos;s Office (ICO) as a data controller under UK GDPR.</p>

        <h2>What data we collect</h2>
        <ul>
          <li>Contact details: name, email address, phone number</li>
          <li>Medical information: treatment goals, clinical documents, X-rays, referral letters, medical history — provided voluntarily by you for the purpose of obtaining a coordination quote</li>
          <li>Communication records: WhatsApp messages, emails, and other correspondence</li>
          <li>Technical data: IP address, browser type, pages visited (via website analytics)</li>
        </ul>

        <h2>How we use your data</h2>
        <ul>
          <li>To provide our medical tourism coordination services</li>
          <li>To obtain quotes from partner hospitals on your behalf</li>
          <li>To arrange travel, accommodation, and interpreter services</li>
          <li>To communicate with you about your treatment enquiry or booking</li>
          <li>To comply with legal and regulatory obligations</li>
          <li>To improve our website and services (analytics only)</li>
        </ul>

        <h2>Legal basis for processing</h2>
        <p>We process your data on the following legal bases under UK GDPR:</p>
        <ul>
          <li><strong>Contract:</strong> Processing necessary to provide our coordination services</li>
          <li><strong>Legitimate interests:</strong> Business communications and service improvement</li>
          <li><strong>Explicit consent:</strong> Processing of special category health data — you provide this voluntarily when submitting medical information for a coordination quote</li>
          <li><strong>Legal obligation:</strong> Compliance with UK law</li>
        </ul>

        <h2>Who we share your data with</h2>
        <ul>
          <li>Partner hospitals and clinics in Istanbul — to obtain treatment quotes and arrange your care</li>
          <li>Hotel and transfer providers — to arrange your accommodation and transportation</li>
          <li>Professional interpreters — to facilitate clinical appointments</li>
          <li>Your UK GP — post-discharge documentation, on your request only</li>
          <li>We do not sell your data to third parties</li>
        </ul>

        <h2>International transfers</h2>
        <p>Your data will be transferred to Turkey for the purpose of arranging your medical treatment. Turkey is not currently recognised by the UK as providing an adequate level of data protection. We implement appropriate safeguards — including contractual protections — when transferring data to Turkish partner organisations.</p>

        <h2>How long we keep your data</h2>
        <p>We retain your personal data for 7 years following the completion of your coordination, in line with standard business record-keeping requirements. Medical records provided by you are retained for the duration of your coordination and deleted thereafter unless you request otherwise.</p>

        <h2>Your rights</h2>
        <p>Under UK GDPR, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Correct inaccurate data</li>
          <li>Request erasure of your data (subject to legal obligations)</li>
          <li>Object to processing or request restriction</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time (where processing is based on consent)</li>
          <li>Lodge a complaint with the ICO: ico.org.uk / 0303 123 1113</li>
        </ul>

        <h2>Cookies</h2>
        <p>We use essential cookies to operate our website. For full details, see our <a href="/cookie-policy" style={{color:'#085041',fontWeight:500}}>Cookie Policy</a>.</p>

        <h2>Contact</h2>
        <p>For data protection enquiries or to exercise your rights:<br />Email: info@oceanhealthtravel.com<br />Post: Ocean Health &amp; Travel Ltd, 17 Green Lanes, London, N16 9BS<br />Company no. 16186647</p>
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
