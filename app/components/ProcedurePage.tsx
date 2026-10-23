import Link from 'next/link'
import Nav from '@/app/components/Nav'
import UKPatientInfo from '@/app/components/UKPatientInfo'
import RelatedTreatments from '@/app/components/RelatedTreatments'
import { PLASTIC, type Procedure } from '@/app/lib/procedures'

const INCLUDED = [
  'Airport transfers in Istanbul',
  'Hotel accommodation near the hospital',
  'A professional interpreter at your appointments',
  'Coordination with the hospital from enquiry to discharge',
  'English-language discharge documentation, sent to your GP on request',
]

export default function ProcedurePage({ p }: { p: Procedure }) {
  const cat = p.category ?? PLASTIC
  const wa = `https://wa.me/447441904858?text=${encodeURIComponent(`Hello, I'd like to enquire about ${p.name.toLowerCase()} in Istanbul`)}`
  const SITE = 'https://www.oceanhealthtravel.com'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: p.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: cat.label, item: `${SITE}${cat.href}` },
          { '@type': 'ListItem', position: 3, name: p.name, item: `${SITE}/treatments/${p.slug}` },
        ],
      },
      {
        '@type': 'MedicalWebPage',
        name: p.metaTitle,
        url: `${SITE}/treatments/${p.slug}`,
        description: p.metaDescription,
        about: { '@type': 'MedicalProcedure', name: p.name },
      },
    ],
  }
  return (
    <div className="pp">
      <style>{`
        .pp{--bg:#FAF8F4;--band:#F2EEE5;--ink:#12202B;--muted:#5B6770;--line:#E6E0D4;--green:#0B6B55;--green-d:#08503F;--soft:#E3F0EA;background:var(--bg);color:var(--ink);font-family:'Inter',sans-serif;line-height:1.6}
        .pp *{box-sizing:border-box}
        .pp a{color:inherit;text-decoration:none}
        .pp .in{max-width:1280px;margin:0 auto;padding:0 2.5rem}
        .pp h1,.pp h2,.pp h3{font-family:'DM Serif Display',serif;font-weight:400;color:var(--ink);letter-spacing:-.02em;margin:0}
        .pp h1{font-size:clamp(34px,4.2vw,54px);line-height:1.06;letter-spacing:-.025em}
        .pp h1 em{font-style:italic;color:var(--green)}
        .pp h2{font-size:clamp(26px,3vw,36px);line-height:1.15;margin-bottom:1rem}
        .pp h3{font-size:20px;margin-bottom:.5rem}
        .pp .crumb{font-size:13px;color:var(--muted);padding-top:28px}
        .pp .crumb a:hover{color:var(--green)}
        .pp .hero{padding:24px 0 64px;border-bottom:1px solid var(--line)}
        .pp .hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:4rem;align-items:center;margin-top:2rem}
        .pp .kick{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--green);font-weight:600;margin-bottom:1rem}
        .pp .sub{font-size:17px;color:var(--muted);max-width:560px;margin:1.25rem 0 2rem}
        .pp .actions{display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap}
        .pp .btn{display:inline-flex;align-items:center;padding:15px 26px;border-radius:10px;background:var(--green);color:#fff!important;font-weight:600;font-size:15px}
        .pp .btn:hover{background:var(--green-d)}
        .pp .link{font-size:15px;border-bottom:1px solid var(--ink)}
        .pp .link:hover{color:var(--green);border-color:var(--green)}
        .pp .card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:1.75rem}
        .pp .card-t{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:.75rem}
        .pp .row{display:flex;justify-content:space-between;gap:1rem;padding:.8rem 0;border-bottom:1px solid var(--line);font-size:15px}
        .pp .row:last-of-type{border-bottom:none}
        .pp .row span:first-child{color:var(--muted)}
        .pp .row b{font-weight:600;text-align:right}
        .pp .row .g{color:var(--green-d)}
        .pp .fine{font-size:12px;color:var(--muted);margin-top:.75rem}
        .pp .sec{padding:72px 0}
        .pp .sec.alt{background:var(--band)}
        .pp .cols{display:grid;grid-template-columns:1.4fr .6fr;gap:4rem;align-items:start}
        .pp p{margin:0 0 1rem;color:var(--ink);font-size:16px}
        .pp ul{margin:0;padding:0;list-style:none}
        .pp li{position:relative;padding-left:20px;margin-bottom:.6rem;font-size:15.5px}
        .pp li::before{content:'';position:absolute;left:0;top:.65em;width:6px;height:6px;border-radius:50%;background:var(--green)}
        .pp .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:1.5rem}
        .pp .step{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.25rem 1.35rem}
        .pp .step small{font-size:12px;color:var(--green);font-weight:600;letter-spacing:.08em}
        .pp .step p{font-size:14.5px;color:var(--muted);margin:.4rem 0 0}
        .pp details{border-bottom:1px solid var(--line);padding:1rem 0}
        .pp summary{cursor:pointer;font-weight:600;font-size:16px;list-style:none}
        .pp summary::-webkit-details-marker{display:none}
        .pp summary::after{content:'+';float:right;color:var(--green);font-size:20px;line-height:1}
        .pp details[open] summary::after{content:'–'}
        .pp details p{color:var(--muted);margin:.75rem 0 0;font-size:15px}
        .pp .note{background:var(--band);border:1px solid var(--line);border-radius:14px;padding:1.25rem 1.5rem;font-size:14px;color:var(--muted)}
        .pp .note strong{color:var(--ink);margin-right:.3em}
        .pp .cta{background:var(--ink);border-radius:20px;padding:3rem;text-align:center;color:#fff}
        .pp .cta h2{color:#fff}
        .pp .cta p{color:rgba(255,255,255,.7);max-width:520px;margin:0 auto 1.5rem}
        .pp .cta .btn{background:var(--green)}
        .pp footer{background:var(--ink);padding:2rem 0}
        .pp .legal{font-size:12px;color:rgba(255,255,255,.55);line-height:1.8}
        .pp .legal a{color:rgba(255,255,255,.75)}
        @media(max-width:900px){
          .pp .in{padding:0 1.25rem}
          .pp .hero-grid,.pp .cols{grid-template-columns:1fr;gap:2rem}
          .pp .steps{grid-template-columns:1fr}
          .pp .sec{padding:48px 0}
          .pp .cta{padding:2rem 1.25rem}
        }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <header className="hero">
        <div className="in">
          <div className="crumb">
            <Link href="/">Home</Link> › <Link href={cat.href}>{cat.label}</Link> › {p.name}
          </div>
          <div className="hero-grid">
            <div>
              <div className="kick">{cat.kicker}</div>
              <h1>{p.h1} <em>{p.h1em}</em></h1>
              <p className="sub">{p.sub}</p>
              <div className="actions">
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn">Get a free quote</a>
                <a href="#faq" className="link">Read FAQs ↓</a>
              </div>
            </div>
            <div className="card">
              <div className="card-t">Price comparison</div>
              <div className="row"><span>Istanbul (OHT)</span><b className="g">{p.price.istanbul}</b></div>
              <div className="row"><span>UK private (typical)</span><b>{p.price.uk}</b></div>
              <div className="row"><span>Compared with UK</span><b>{p.price.saving}</b></div>
              <div className="row"><span>Stay in Istanbul</span><b>{p.price.stay}</b></div>
              <div className="fine">Prices indicative. No coordination fee is charged to patients. Flights not included. UK figures are published guide prices, October 2026.</div>
            </div>
          </div>
        </div>
      </header>

      <section className="sec">
        <div className="in cols">
          <div>
            <h2>{p.name} in Istanbul: what to expect</h2>
            {p.overview.map(t => <p key={t}>{t}</p>)}
            <h3 style={{ marginTop: '2rem' }}>Who it is for</h3>
            <ul>{p.suitability.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="card">
            <div className="card-t">Included in every package</div>
            <ul>{INCLUDED.map(t => <li key={t}>{t}</li>)}</ul>
            <div className="fine">Flights are not included. The surgeon and hospital fees are listed in your itemised quote.</div>
          </div>
        </div>
      </section>

      <section className="sec alt">
        <div className="in">
          <h2>How it works</h2>
          <div className="steps">
            {p.steps.map((s, i) => (
              <div className="step" key={s.t}>
                <small>STEP {i + 1}</small>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="in cols">
          <div>
            <h2>Risks and things to consider</h2>
            <p>All surgery carries risk. Your surgeon will go through these with you and the consent form will list them in full. They include:</p>
            <ul>{p.risks.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
          <div className="note">
            <strong>Important:</strong> Ocean Health &amp; Travel is a medical coordination service, not a medical provider. We do not provide medical advice or surgical assessments. All clinical decisions, including suitability for surgery, technique and post-operative management, rest with your treating surgeon at the partner hospital. This page is general information, not medical advice.
          </div>
        </div>
      </section>

      <section className="sec alt" id="faq">
        <div className="in" style={{ maxWidth: 900 }}>
          <h2>Frequently asked questions</h2>
          {p.faqs.map(f => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="sec">
        <div className="in">
          <div className="cta">
            <h2>Ready to find out what {p.name.toLowerCase()} costs for you?</h2>
            <p>Tell us what you are considering. Itemised quote within 48 hours, naming the hospital and surgeon.</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn">Get a free quote</a>
          </div>
        </div>
      </section>

      <UKPatientInfo current={p.slug} flying={p.flying} />
      <RelatedTreatments current={p.slug} related={p.related} />

      <footer>
        <div className="in">
          <div className="legal">
            © {new Date().getFullYear()} Ocean Health &amp; Travel Ltd · Registered in England &amp; Wales · Company no. 16186647<br />
            London: 17 Green Lanes, N16 9BS · Fethiye: Karagözler Mah., Fevzi Çakmak Cad. No:11/A, Muğla ·{' '}
            <a href="mailto:info@oceanhealthtravel.com">info@oceanhealthtravel.com</a> · <a href="tel:+447441904858">+44 7441 904858</a><br />
            Flights not included · No coordination fee charged to patients · Coordinator, not a medical provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating provider. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </div>
  )
}
