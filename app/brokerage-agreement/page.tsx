import type { Metadata } from 'next'
import Nav from '@/app/components/Nav'

export const metadata: Metadata = {
  title: 'Medical Services Brokerage Agreement | Ocean Health & Travel',
  description: 'Summary of the Ocean Health & Travel Medical Services Brokerage Agreement — terms of coordination service.',
}

export default function BrokerageAgreement() {
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
        .highlight{background:#fffbeb;border:1px solid #fde68a;border-radius:12px;padding:1.25rem 1.5rem;margin:1.5rem 0}
        .highlight p{margin:0;color:#92400e;font-size:14px}
        footer{background:#111;padding:2rem 0}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal a{color:#666}
        @media(max-width:600px){.inner{padding:0 1.25rem}.content{padding:2.5rem 1.25rem}}
      `}</style>

      <Nav />

      <div className="hero">
        <div className="inner">
          <div className="kicker">Legal</div>
          <h1>Medical Services Brokerage Agreement</h1>
          <div className="updated">Last updated: June 2025</div>
        </div>
      </div>

      <div className="content">
        <div className="highlight">
          <p><strong>Summary:</strong> This page summarises the key terms of our Medical Services Brokerage Agreement. The full agreement is provided to patients before any booking is confirmed. By engaging our services, you agree to these terms.</p>
        </div>

        <h2>Who we are</h2>
        <p>Ocean Health &amp; Travel Ltd (&quot;the Coordinator&quot;) is a medical tourism coordination company registered in England &amp; Wales (Company no. 16186647). We act as an intermediary between patients and JCI-accredited medical facilities in Istanbul, Turkey.</p>

        <h2>Nature of our service</h2>
        <p>We are a coordinator, not a medical provider. Our services include:</p>
        <ul>
          <li>Obtaining treatment quotes from partner hospitals on your behalf</li>
          <li>Arranging airport transfers, hotel accommodation, and interpretation services</li>
          <li>Liaising between you and the treating provider throughout your stay</li>
          <li>Forwarding post-discharge documentation to your UK GP on request</li>
        </ul>
        <p>We do not provide medical advice, clinical assessments, or treatment. All clinical decisions rest with the treating physician at the partner hospital.</p>

        <h2>Fees and payment</h2>
        <ul>
          <li>Ocean Health &amp; Travel does not charge a coordination fee to patients. Our commercial arrangements are with partner hospitals. All treatment costs are specified in your itemised quote and agreed before booking</li>
          <li>Treatment costs are paid directly to the treating provider or held in a designated client account on their behalf</li>
          <li>Client payments are held in a designated client account, separate from operating funds</li>
          <li>All fees are confirmed in writing before any payment is taken</li>
          <li>Flights are not included in any package</li>
        </ul>

        <h2>Cancellation and refunds</h2>
        <ul>
          <li>Cancellation terms are specified in your individual coordination agreement</li>
          <li>Any non-refundable elements of your package are specified in your individual coordination agreement</li>
          <li>Treatment deposits paid to hospitals are subject to each hospital&apos;s own cancellation policy</li>
          <li>We will provide all reasonable assistance in the event of cancellation due to medical reasons</li>
        </ul>

        <h2>Limitation of liability</h2>
        <p>Ocean Health &amp; Travel&apos;s liability is limited to the coordination fee paid. We are not liable for:</p>
        <ul>
          <li>Clinical outcomes, surgical complications, or medical negligence — these are the responsibility of the treating provider</li>
          <li>Force majeure events including flight cancellations, natural disasters, or political events</li>
          <li>Losses arising from inaccurate information provided by the patient</li>
        </ul>

        <h2>Governing law</h2>
        <p>This agreement is governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

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
