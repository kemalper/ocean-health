import Link from 'next/link'
import Nav from '@/app/components/Nav'

export type InfoSection = {
  title: string
  paras?: string[]
  bullets?: string[]
  steps?: { t: string; d: string }[]
  note?: { label: string; text: string }
  link?: { href: string; label: string }
  alt?: boolean
}

export type InfoPageProps = {
  slug: string
  crumb: string
  kicker: string
  h1: string
  h1em: string
  sub: string
  sections: InfoSection[]
  faqs?: { q: string; a: string }[]
  ctaTitle: string
  ctaText: string
  waText: string
}

export default function InfoPage(p: InfoPageProps) {
  const wa = `https://wa.me/447441904858?text=${encodeURIComponent(p.waText)}`
  const SITE = 'https://www.oceanhealthtravel.com'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      ...(p.faqs && p.faqs.length
        ? [{
            '@type': 'FAQPage',
            mainEntity: p.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }]
        : []),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: p.crumb, item: `${SITE}/${p.slug}` },
        ],
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
        .pp .crumb{font-size:13px;color:var(--muted);padding-top:28px}
        .pp .crumb a:hover{color:var(--green)}
        .pp .hero{padding:24px 0 56px;border-bottom:1px solid var(--line)}
        .pp .kick{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--green);font-weight:600;margin:2rem 0 1rem}
        .pp .sub{font-size:17px;color:var(--muted);max-width:680px;margin:1.25rem 0 0}
        .pp .btn{display:inline-flex;align-items:center;padding:15px 26px;border-radius:10px;background:var(--green);color:#fff!important;font-weight:600;font-size:15px}
        .pp .btn:hover{background:var(--green-d)}
        .pp .sec{padding:60px 0}
        .pp .sec.alt{background:var(--band)}
        .pp .body{max-width:860px}
        .pp p{margin:0 0 1rem;font-size:16px}
        .pp ul{margin:0 0 1rem;padding:0;list-style:none}
        .pp li{position:relative;padding-left:20px;margin-bottom:.6rem;font-size:15.5px}
        .pp li::before{content:'';position:absolute;left:0;top:.65em;width:6px;height:6px;border-radius:50%;background:var(--green)}
        .pp .steps{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-top:1rem}
        .pp .step{background:#fff;border:1px solid var(--line);border-radius:14px;padding:1.25rem 1.35rem}
        .pp .step b{display:block;font-weight:600;margin-bottom:.3rem}
        .pp .step p{font-size:14.5px;color:var(--muted);margin:0}
        .pp .note{background:#fff;border:1px solid var(--line);border-left:4px solid var(--green);border-radius:12px;padding:1.1rem 1.4rem;font-size:15px;margin-top:1rem}
        .pp .note strong{color:var(--ink);margin-right:.3em}
        .pp details{border-bottom:1px solid var(--line);padding:1rem 0}
        .pp summary{cursor:pointer;font-weight:600;font-size:16px;list-style:none}
        .pp summary::-webkit-details-marker{display:none}
        .pp summary::after{content:'+';float:right;color:var(--green);font-size:20px;line-height:1}
        .pp details[open] summary::after{content:'–'}
        .pp details p{color:var(--muted);margin:.75rem 0 0;font-size:15px}
        .pp .cta{background:var(--ink);border-radius:20px;padding:3rem;text-align:center;color:#fff}
        .pp .cta h2{color:#fff}
        .pp .cta p{color:rgba(255,255,255,.7);max-width:520px;margin:0 auto 1.5rem}
        .pp footer{background:var(--ink);padding:2rem 0}
        .pp .legal{font-size:12px;color:rgba(255,255,255,.55);line-height:1.8}
        .pp .legal a{color:rgba(255,255,255,.75)}
        @media(max-width:900px){
          .pp .in{padding:0 1.25rem}
          .pp .steps{grid-template-columns:1fr}
          .pp .sec{padding:44px 0}
          .pp .cta{padding:2rem 1.25rem}
        }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />

      <header className="hero">
        <div className="in">
          <div className="crumb"><Link href="/">Home</Link> › {p.crumb}</div>
          <div className="kick">{p.kicker}</div>
          <h1>{p.h1} <em>{p.h1em}</em></h1>
          <p className="sub">{p.sub}</p>
        </div>
      </header>

      {p.sections.map(s => (
        <section key={s.title} className={`sec${s.alt ? ' alt' : ''}`}>
          <div className="in">
            <div className="body">
              <h2>{s.title}</h2>
              {s.paras?.map(t => <p key={t}>{t}</p>)}
              {s.bullets && <ul>{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>}
              {s.steps && (
                <div className="steps">
                  {s.steps.map(st => (
                    <div className="step" key={st.t}><b>{st.t}</b><p>{st.d}</p></div>
                  ))}
                </div>
              )}
              {s.link && <p><Link href={s.link.href} style={{ color: 'var(--green)', borderBottom: '1px solid var(--green)' }}>{s.link.label}</Link></p>}
              {s.note && <div className="note"><strong>{s.note.label}</strong>{s.note.text}</div>}
            </div>
          </div>
        </section>
      ))}

      {p.faqs && p.faqs.length > 0 && (
        <section className="sec alt">
          <div className="in">
            <div className="body">
              <h2>Common questions</h2>
              {p.faqs.map(f => (
                <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="in">
          <div className="cta">
            <h2>{p.ctaTitle}</h2>
            <p>{p.ctaText}</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn">Message us on WhatsApp</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="in">
          <div className="legal">
            © {new Date().getFullYear()} Ocean Health &amp; Travel Ltd · Registered in England &amp; Wales · Company no. 16186647<br />
            London: 17 Green Lanes, N16 9BS ·{' '}
            <a href="mailto:info@oceanhealthtravel.com">info@oceanhealthtravel.com</a> · <a href="tel:+447441904858">+44 7441 904858</a><br />
            Flights not included · No coordination fee charged to patients · Coordinator, not a medical provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating provider. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </div>
  )
}
