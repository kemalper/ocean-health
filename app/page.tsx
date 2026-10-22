'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Nav from '@/app/components/Nav'
import { UK_PRICES } from '@/app/lib/ukPrices'

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20get%20a%20free%20quote'

const procedures: Record<string, { headers: string[], rows: string[][] }> = {
  cosmetic: {
    headers: ['Procedure', 'UK private', 'Istanbul (OHT)', 'Saving'],
    rows: [
      ['Rhinoplasty', UK_PRICES.rhinoplasty.typical, 'from £3,200', '~45–65%'],
      ['Breast augmentation', UK_PRICES.breastAugmentation.typical, 'from £6,000', 'Comparable'],
      ['Breast reduction (incl. implants)', '£8,000 – £10,000', 'from £6,300', 'up to 40%'],
      ['Liposuction', UK_PRICES.liposuction.range, 'from £2,500', 'Varies'],
      ['Mini facelift', UK_PRICES.facelift.range, 'from £5,000', '~15–40%'],
      ['Tummy tuck', '£5,000 – £10,000', 'from £3,500', 'up to 65%'],
    ]
  },
  dental: {
    headers: ['Procedure', 'UK private', 'Istanbul (OHT)', 'Saving'],
    rows: [
      ['Dental implant (single)', '£1,500 – £3,500', 'from £350', '~75–90%'],
      ['Zirconium crown', '£700 – £1,200', 'from £150', '~75%'],
      ['Porcelain veneers (per tooth)', '£600 – £1,000', 'from £180', '~70%'],
      ['Full-arch restoration', '£15,000 – £25,000', 'from £4,500', '~70%'],
    ]
  },
  ortho: {
    headers: ['Procedure', 'NHS wait / UK private', 'Istanbul (OHT)', 'Saving'],
    rows: [
      ['Knee replacement', '£10,000 – £17,000', 'from £3,500 · 2–3 wks', '~65–80%'],
      ['Hip replacement', '12–18 mo / £12,000–£16,000', 'from £4,000 · 2–3 wks', '65–75%'],
      ['Lumbar disc surgery', '6–12 mo / £8,000–£12,000', 'from £4,000 · 2–3 wks', '50–65%'],
    ]
  },
  ophth: {
    headers: ['Procedure', 'UK private', 'Istanbul (OHT)', 'Saving'],
    rows: [
      ['LASIK (per eye)', '£1,500 – £2,500', 'from £600', '60–75%'],
      ['Cataract surgery', '£2,000 – £3,500', 'from £800', '~65%'],
      ['Premium lens replacement', '£3,000 – £5,000', 'from £1,200', '~65%'],
    ]
  },
  neuro: {
    headers: ['Procedure', 'UK private', 'Istanbul (OHT)', 'Saving'],
    rows: [
      ['Deep brain stimulation', '£30,000+', 'from $30,000 (~£23,700)', 'from ~20%'],
      ['Lumbar disc herniation', '£8,000 – £15,000', 'from $5,000 (~£3,950)', '55–75%'],
      ['Cervical disc herniation', '£10,000 – £18,000', 'from $6,000 (~£4,750)', '55–75%'],
    ]
  }
}

const ORG_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ocean Health & Travel',
  legalName: 'Ocean Health & Travel Ltd',
  url: 'https://www.oceanhealthtravel.com',
  logo: 'https://www.oceanhealthtravel.com/logo.png',
  description: 'UK-registered medical tourism coordinator connecting international patients with JCI-accredited Istanbul clinics. A coordinator, not a medical provider.',
  email: 'info@oceanhealthtravel.com',
  telephone: '+44 7441 904858',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '17 Green Lanes',
    addressLocality: 'London',
    postalCode: 'N16 9BS',
    addressCountry: 'GB',
  },
  identifier: { '@type': 'PropertyValue', propertyID: 'Companies House (England & Wales)', value: '16186647' },
}


const FEATURED: { name: string; link: string; img: string; items: string; price: string; tag?: string }[] = [
  { name: 'Plastic & cosmetic surgery', link: '/treatments/plastic-surgery-istanbul', img: '/treatments/consultation.jpg', items: 'Rhinoplasty, facelift, breast surgery, liposuction, tummy tuck, BBL, eyelid and ear surgery', price: 'Rhinoplasty from £3,200 · Breast from £6,000' },
  { name: 'Neurosurgery', link: '/treatments/neurosurgery-istanbul', img: '/treatments/neurosurgery.jpg', items: 'Deep brain stimulation, pituitary and glial tumours, acoustic neuroma, disc herniation', price: 'DBS from £23,700 · Free pre-assessment', tag: 'Specialist assessment' },
]

const ROWS: { name: string; link: string; img: string; summary: string; price: string; tag?: string; external?: boolean }[] = [
  { name: 'Ophthalmology', link: '/treatments/ophthalmology-istanbul', img: '/treatments/ophthalmology.jpg', summary: 'LASIK and laser refractive surgery, cataract and lens replacement, eyelid surgery', price: 'LASIK from £600 per eye' },
  { name: 'Orthopaedics', link: '/treatments/knee-replacement-turkey', img: '/treatments/orthopaedics.jpg', summary: 'Knee and hip replacement, sports injuries, ligament and cartilage repair', price: 'Knee replacement from £3,500' },
  { name: 'Dental', link: '/treatments/dental-istanbul', img: '/treatments/dental.jpg', summary: 'Implants, zirconium crowns and veneers, smile design, orthodontics, root canal', price: 'Implants from £350 each' },
  { name: 'Hair transplantation', link: '/treatments/hair-transplant-istanbul', img: '/hair-transplant.jpg', summary: 'FUE and DHI techniques, PRP for hair restoration', price: 'Contact us for pricing' },
  { name: 'Aesthetic medicine', link: WA_URL, img: '/treatments/aesthetic.jpg', summary: 'Mesotherapy, Hydrafacial, Scarlet X skin tightening', price: 'From £180', external: true },
]

const ICON = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const

const COORD = [
  { icon: <svg {...ICON}><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>, t: 'Airport transfer', d: 'Pre-confirmed transfers between airport, hotel and hospital.' },
  { icon: <svg {...ICON}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>, t: 'Hotel & accommodation', d: 'Hotels close to your hospital, matched to your recovery needs.' },
  { icon: <svg {...ICON}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, t: 'Interpretation', d: 'A professional interpreter at every appointment.' },
  { icon: <svg {...ICON}><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="M9 12h6M9 16h4"/></svg>, t: 'GP documentation', d: 'Discharge notes in English, forwarded to your GP on request.' },
]

const STEPS = [
  { t: 'Enquiry', d: 'Send us your treatment and preferred dates by WhatsApp or email.', when: 'Day 0' },
  { t: 'Itemised quote', d: 'Hospital, surgeon, hotel and transfers set out line by line.', when: 'Within 48 hours' },
  { t: 'Booking', d: 'Hospital, hotel and transfers confirmed; pre-operative instructions sent.', when: 'After you accept' },
  { t: 'Treatment', d: 'An interpreter at every appointment and full liaison with the hospital.', when: 'In Istanbul' },
  { t: 'GP documents', d: 'Discharge notes in English forwarded to your GP.', when: 'On request' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('cosmetic')
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    setTimeout(() => {
      revealRefs.current.forEach(el => {
        if (el && el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible')
      })
    }, 50)
    return () => observer.disconnect()
  }, [])

  const ref = (el: HTMLElement | null) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el) }

  return (
    <div className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD).replace(/</g, '\\u003c') }}
      />
      <style>{`
        .home{--bg:#FAF8F4;--band:#F2EEE5;--ink:#12202B;--muted:#5B6770;--line:#E6E0D4;--green:#0B6B55;--green-d:#08503F;--soft:#E3F0EA;background:var(--bg);color:var(--ink);font-family:'Inter',sans-serif;-webkit-font-smoothing:antialiased}
        .home *,.home *::before,.home *::after{box-sizing:border-box}
        .home a{text-decoration:none;color:inherit}
        .home .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}
        .home .serif,.home h1,.home h2,.home h3{font-family:'DM Serif Display',serif;font-weight:400;color:var(--ink)}
        .reveal{opacity:0;transform:translateY(18px);transition:opacity .6s ease,transform .6s ease}
        .reveal.visible{opacity:1;transform:none}
        @media(prefers-reduced-motion:reduce){.reveal{opacity:1;transform:none;transition:none}}
        .eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--green);font-weight:600;margin-bottom:1.1rem}
        .btn{display:inline-flex;align-items:center;gap:8px;padding:15px 26px;border-radius:10px;font-size:15px;font-weight:600;transition:background .2s,transform .2s;font-family:'Inter',sans-serif;cursor:pointer;border:none}
        .home .btn-primary{background:var(--green);color:#fff}
        .btn-primary:hover{background:var(--green-d);transform:translateY(-1px)}
        .home .btn-link{color:var(--ink);font-size:15px;font-weight:500;border-bottom:1px solid var(--ink);padding-bottom:2px}
        .btn-link:hover{color:var(--green);border-color:var(--green)}
        .hero{padding:56px 0 64px}
        .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:4.5rem;align-items:start}
        .hero-text{padding-top:2.5rem}
        .hero h1{font-size:clamp(34px,4vw,52px);line-height:1.04;letter-spacing:-.025em;margin-bottom:1.5rem}
        .hero h1 em{font-style:italic;color:var(--green)}
        .hero-sub{font-size:18px;line-height:1.65;color:var(--muted);max-width:530px;margin-bottom:2.25rem}
        .hero-actions{display:flex;gap:1.75rem;align-items:center;flex-wrap:wrap}
        .hero-media{position:relative;border-radius:22px;overflow:hidden;aspect-ratio:4/5;background:var(--band)}
        .hero-note{position:absolute;left:16px;right:16px;bottom:16px;background:rgba(250,248,244,.95);backdrop-filter:blur(8px);border-radius:14px;padding:14px 18px;font-size:13px;line-height:1.55;color:var(--ink)}
        .hero-note b{display:block;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:var(--green);margin-bottom:3px}
        .trust{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
        .home .trust-inner{display:flex;gap:.75rem 2.25rem;flex-wrap:wrap;padding-top:1.15rem;padding-bottom:1.15rem}
        .ti{display:flex;align-items:center;gap:9px;font-size:13px;color:var(--muted)}
        .ti i{width:6px;height:6px;border-radius:50%;background:var(--green);flex-shrink:0}
        .sec{padding:6.5rem 0;scroll-margin-top:72px}
        .home h2{font-size:clamp(30px,3.6vw,46px);line-height:1.1;letter-spacing:-.02em;margin-bottom:1rem}
        .home .sec-head h2{margin-bottom:0}
        .home .kicker{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--green);font-weight:600;margin-bottom:1.1rem}
        .sec.band{background:var(--band)}
        .sec-head{display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:end;margin-bottom:2.75rem}
        .sec-head h2{font-size:clamp(30px,3.6vw,46px);line-height:1.1;letter-spacing:-.02em}
        .sec-sub{font-size:16px;line-height:1.7;color:var(--muted)}
        .tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1.25rem}
        .tab{background:transparent;border:1px solid var(--line);padding:9px 18px;border-radius:100px;font-size:13px;font-weight:500;cursor:pointer;font-family:'Inter',sans-serif;color:var(--muted);transition:all .2s}
        .tab:hover{border-color:var(--green);color:var(--green)}
        .tab.active{background:var(--ink);border-color:var(--ink);color:#fff}
        .table-wrap{background:#fff;border:1px solid var(--line);border-radius:16px;overflow:hidden}
        .home table{width:100%;border-collapse:collapse}
        .home th{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);font-weight:600;padding:1rem 1.4rem;text-align:left;border-bottom:1px solid var(--line)}
        .home td{padding:1.05rem 1.4rem;border-bottom:1px solid #F1EDE4;font-size:14.5px}
        .home tr:last-child td{border-bottom:none}
        .home td:first-child{font-weight:500}
        .td-uk{color:var(--muted)}
        .td-oht{color:var(--green-d);font-weight:600}
        .saving{background:var(--soft);color:var(--green-d);font-weight:600;border-radius:20px;padding:4px 12px;font-size:12px;white-space:nowrap;display:inline-block}
        .table-foot{padding:1rem 1.4rem;border-top:1px solid var(--line);font-size:12.5px;color:var(--muted);line-height:1.65}
        .table-foot summary{cursor:pointer;color:var(--green-d);font-weight:500;margin-top:.4rem}
        .table-foot p{margin-top:.6rem}
        .neuro-warn{background:#FFF8E6;border:1px solid #F2DDA4;border-radius:10px;padding:.85rem 1.1rem;margin-bottom:1rem;font-size:13px;color:#7A5410;line-height:1.6}
        .feat-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2rem}
        .feat{display:block;background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden;transition:transform .25s,box-shadow .25s}
        .feat:hover{transform:translateY(-3px);box-shadow:0 14px 40px rgba(18,32,43,.08)}
        .feat-img{position:relative;aspect-ratio:16/9;background:var(--band)}
        .feat-body{padding:1.5rem 1.6rem 1.7rem}
        .feat h3{font-size:26px;letter-spacing:-.01em;margin-bottom:.5rem}
        .feat-items{font-size:14px;color:var(--muted);line-height:1.65;margin-bottom:1rem}
        .feat-price{font-size:13.5px;font-weight:600;color:var(--green-d)}
        .row-list{border-top:1px solid var(--line)}
        .row{display:grid;grid-template-columns:72px 1fr auto 24px;gap:1.25rem;align-items:center;padding:1.1rem .25rem;border-bottom:1px solid var(--line);transition:background .2s}
        .row:hover{background:rgba(255,255,255,.6)}
        .row-img{position:relative;width:72px;height:56px;border-radius:10px;overflow:hidden;background:var(--band)}
        .row-name{font-family:'DM Serif Display',serif;font-size:20px}
        .row-sum{font-size:13.5px;color:var(--muted);margin-top:2px}
        .row-tag{display:inline-block;font-size:11px;background:#FFF8E6;color:#7A5410;border-radius:4px;padding:2px 8px;margin-left:8px;font-family:'Inter',sans-serif;vertical-align:middle}
        .row-price{font-size:13.5px;font-weight:600;color:var(--green-d);text-align:right}
        .row-arrow{color:var(--muted)}
        .also{font-size:14px;color:var(--muted);margin-top:1.5rem;line-height:1.7}
        .also a{color:var(--green-d);font-weight:500;border-bottom:1px solid currentColor}
        .coord-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem}
        .coord-icon{width:48px;height:48px;border-radius:12px;background:#fff;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;color:var(--green);margin-bottom:1.1rem}
        .coord-t{font-family:'DM Serif Display',serif;font-size:20px;margin-bottom:.5rem}
        .coord-d{font-size:14px;color:var(--muted);line-height:1.65}
        .fine{font-size:12.5px;color:var(--muted);margin-top:2.5rem;line-height:1.7;max-width:760px}
        .how-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:5rem;align-items:start}
        .how-side{position:sticky;top:96px}
        .how-side h2{font-size:clamp(30px,3.6vw,46px);line-height:1.1;letter-spacing:-.02em;margin-bottom:1rem}
        .step{display:grid;grid-template-columns:56px 1fr auto;gap:1rem;padding:1.5rem 0;border-bottom:1px solid var(--line);align-items:start}
        .step:first-child{border-top:1px solid var(--line)}
        .step-n{font-family:'DM Serif Display',serif;font-size:34px;color:var(--green);line-height:1}
        .step-t{font-size:17px;font-weight:600;margin-bottom:.3rem}
        .step-d{font-size:14px;color:var(--muted);line-height:1.65}
        .step-when{font-size:12px;font-weight:600;color:var(--green-d);background:var(--soft);border-radius:20px;padding:4px 12px;white-space:nowrap}
        .rev-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:2rem}
        .cta-box{background:var(--ink);border-radius:24px;padding:4.5rem 3rem;text-align:center}
        .cta-box h2{color:#fff;font-size:clamp(30px,3.6vw,46px);margin-bottom:1rem}
        .cta-box p{font-size:16px;color:rgba(255,255,255,.7);line-height:1.7;margin:0 auto 2.25rem;max-width:520px}
        .cta-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
        .home .btn-cta-w{background:#fff;color:var(--ink);padding:15px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex}
        .home .btn-cta-o{border:1px solid rgba(255,255,255,.35);color:#fff;padding:15px 28px;border-radius:10px;font-size:15px;display:inline-flex}
        .btn-cta-o:hover{background:rgba(255,255,255,.08)}
        .home .wa-pill{display:inline-flex;align-items:center;gap:10px;background:var(--green);color:#fff;border-radius:100px;padding:14px 24px;font-size:14px;font-weight:500;margin-bottom:2rem}
        .wa-pill:hover{background:var(--green-d)}
        .home footer{background:var(--ink);padding:3.5rem 0 2rem}
        .footer-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:2rem;padding-bottom:2rem;border-bottom:1px solid rgba(255,255,255,.12);margin-bottom:1.5rem}
        .footer-brand{font-size:13px;color:rgba(255,255,255,.6);line-height:1.7;max-width:330px}
        .footer-brand-name{font-family:'DM Serif Display',serif;font-size:20px;color:#fff;margin-bottom:.75rem}
        .footer-links{display:flex;gap:3.5rem;flex-wrap:wrap}
        .footer-col h4{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.45);font-weight:600;margin-bottom:1rem}
        .footer-col a{display:block;font-size:13.5px;color:rgba(255,255,255,.75);margin-bottom:.55rem}
        .footer-col a:hover{color:#fff}
        .footer-legal{font-size:12px;color:rgba(255,255,255,.5);line-height:1.8}
        .footer-legal a{color:rgba(255,255,255,.7)}
        .footer-legal em{font-style:normal;color:rgba(255,255,255,.4)}
        .fbadges{display:flex;gap:8px;flex-wrap:wrap;margin-top:1rem}
        .fbadge{display:flex;align-items:center;gap:6px;font-size:11px;color:rgba(255,255,255,.65);border:1px solid rgba(255,255,255,.18);border-radius:5px;padding:4px 10px}
        .fbadge-dot{width:6px;height:6px;border-radius:50%;background:#5CC9A4}
        @media(max-width:1024px){.coord-grid{grid-template-columns:repeat(2,1fr)}.how-grid{grid-template-columns:1fr;gap:2.5rem}.how-side{position:static}}
        @media(max-width:900px){.hero-text{padding-top:0}.hero h1 br{display:none}.hero-grid{grid-template-columns:1fr;gap:2.5rem}.hero-media{aspect-ratio:16/11}.sec-head{grid-template-columns:1fr;gap:1rem}.feat-grid{grid-template-columns:1fr}.rev-grid{grid-template-columns:1fr}}
        @media(max-width:768px){.sec{padding:4.5rem 0}.row{grid-template-columns:64px 1fr 20px}.row-price{display:none}.step{grid-template-columns:44px 1fr}.step-when{grid-column:2;justify-self:start}.cta-box{padding:3rem 1.5rem}}
        @media(max-width:640px){.home thead{display:none}.home table{min-width:0}.home tr{display:grid;grid-template-columns:1fr 1fr;gap:6px 12px;padding:1rem 1.1rem;border-bottom:1px solid #F1EDE4}.home tr:last-child{border-bottom:none}.home td{padding:0;border:0}.home td:first-child{grid-column:1/-1;font-family:'DM Serif Display',serif;font-size:18px;font-weight:400}.home td[data-l]::before{content:attr(data-l);display:block;font-size:10.5px;text-transform:uppercase;letter-spacing:.07em;color:var(--muted);margin-bottom:2px}}
        @media(max-width:480px){.home .inner{padding:0 1.25rem}.coord-grid{grid-template-columns:1fr}.hero{padding-top:36px}}
      `}</style>

      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="inner hero-grid">
          <div className="hero-text">
            <div className="eyebrow">UK-registered coordinator · Istanbul</div>
            <h1>Private treatment in Istanbul,<br /><em>arranged by one coordinator.</em></h1>
            <p className="hero-sub">
              We arrange private treatment at JCI-accredited hospitals in Istanbul: itemised quotes, hotel and transfers, an interpreter at your appointments, and discharge notes for your GP. Hospitals pay us; you pay no coordination fee.
            </p>
            <div className="hero-actions">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Get a free quote</a>
              <a href="#compare" className="btn-link">See how prices compare</a>
            </div>
          </div>
          <div className="hero-media">
            <Image src="/hero-reception.jpg" alt="Hospital reception and waiting area" fill priority sizes="(max-width:900px) 100vw, 520px" style={{objectFit:'cover'}} />
            <div className="hero-note">
              <b>Itemised quote within 48 hours</b>
              Names the hospital and surgeon before you commit to anything.
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust">
        <div className="inner trust-inner">
          {['UK Companies House no. 16186647','ICO registered · UK GDPR','JCI-accredited hospitals','No coordination fee to patients'].map(t => (
            <div key={t} className="ti"><i></i>{t}</div>
          ))}
        </div>
      </div>

      {/* PRICE COMPARISON */}
      <section className="sec" id="compare">
        <div className="inner">
          <div className="sec-head reveal" ref={ref}>
            <div>
              <div className="eyebrow">Prices</div>
              <h2>Compare before you decide.</h2>
            </div>
            <p className="sec-sub">Indicative UK private ranges set against our Istanbul starting prices. Every quote is itemised, so you can check it line by line against a UK provider.</p>
          </div>

          <div className="reveal" ref={ref}>
            <div className="tabs">
              {[['cosmetic','Cosmetic surgery'],['dental','Dental'],['ortho','Orthopaedics'],['ophth','Ophthalmology'],['neuro','Neurosurgery']].map(([id,label]) => (
                <button key={id} className={`tab${activeTab===id?' active':''}`} onClick={() => setActiveTab(id)}>{label}</button>
              ))}
            </div>
            {activeTab === 'neuro' && (
              <div className="neuro-warn"><strong>Important:</strong> Most neurosurgical procedures require specialist referral and full clinical assessment (DBS offers a free pre-assessment with no referral needed to start). Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with the treating neurosurgical team. Elective procedures only.</div>
            )}
            <div className="table-wrap">
              <table>
                <thead><tr>{procedures[activeTab].headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {procedures[activeTab].rows.map(row => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td className="td-uk" data-l={procedures[activeTab].headers[1]}>{row[1]}</td>
                      <td className="td-oht" data-l={procedures[activeTab].headers[2]}>{row[2]}</td>
                      <td data-l={procedures[activeTab].headers[3]}><span className="saving">{row[3]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="table-foot">
                UK figures are indicative ranges from published UK private provider prices. Istanbul figures are starting prices subject to clinical assessment. We are paid by partner hospitals, which may influence which hospitals we work with.
                <details>
                  <summary>How we calculate these figures</summary>
                  <p>UK figures are indicative ranges based on published prices from UK private providers; Istanbul figures are starting prices subject to individual clinical assessment. Percentages compare our starting price with the UK range shown; &ldquo;up to&rdquo; figures use the top of that range, and &ldquo;Comparable&rdquo; or &ldquo;Varies&rdquo; means a like-for-like saving cannot be shown.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec band" id="services">
        <div className="inner">
          <div className="sec-head reveal" ref={ref}>
            <div>
              <div className="eyebrow">Treatments</div>
              <h2>What we coordinate.</h2>
            </div>
            <p className="sec-sub">Elective treatment across the specialties below. Each page sets out what is typically involved, what the price covers and how a quote works.</p>
          </div>

          <div className="feat-grid">
            {FEATURED.map((s,i) => (
              <a key={s.name} href={s.link} className={`feat reveal d${i+1}`} ref={ref}>
                <div className="feat-img"><Image src={s.img} alt={s.name} fill sizes="(max-width:900px) 100vw, 560px" style={{objectFit:'cover'}} /></div>
                <div className="feat-body">
                  <h3>{s.name}{s.tag && <span className="row-tag">{s.tag}</span>}</h3>
                  <div className="feat-items">{s.items}</div>
                  <div className="feat-price">{s.price} →</div>
                </div>
              </a>
            ))}
          </div>

          <div className="row-list reveal" ref={ref}>
            {ROWS.map(r => (
              <a key={r.name} href={r.link} className="row" {...(r.external ? {target:'_blank', rel:'noopener noreferrer'} : {})}>
                <div className="row-img"><Image src={r.img} alt={r.name} fill sizes="72px" style={{objectFit:'cover'}} /></div>
                <div>
                  <div className="row-name">{r.name}{r.tag && <span className="row-tag">{r.tag}</span>}</div>
                  <div className="row-sum">{r.summary}</div>
                </div>
                <div className="row-price">{r.price}</div>
                <div className="row-arrow" aria-hidden="true">→</div>
              </a>
            ))}
          </div>
          <p className="also">
            Also: <a href="/treatments/urology-istanbul">urology &amp; men&apos;s health</a>. Treatment not listed? We coordinate across specialties &mdash; <a href={WA_URL} target="_blank" rel="noopener noreferrer">ask us on WhatsApp</a>.
          </p>
        </div>
      </section>

      {/* WHAT IS INCLUDED */}
      <section className="sec" id="coordination">
        <div className="inner">
          <div className="sec-head reveal" ref={ref}>
            <div>
              <div className="eyebrow">Included in every package</div>
              <h2>What is included.</h2>
            </div>
            <p className="sec-sub">We are a coordinator, not a medical provider. Every package includes the following logistics.</p>
          </div>
          <div className="coord-grid">
            {COORD.map((c,i) => (
              <div key={c.t} className={`reveal d${i+1}`} ref={ref}>
                <div className="coord-icon">{c.icon}</div>
                <div className="coord-t">{c.t}</div>
                <div className="coord-d">{c.d}</div>
              </div>
            ))}
          </div>
          <p className="fine">
            Ocean Health &amp; Travel is a coordinator, not a medical provider. All clinical decisions rest with your treating provider. Flights not included. No coordination fee is charged to patients. Elective procedures only &mdash; not suitable for emergencies.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec band" id="how-it-works">
        <div className="inner how-grid">
          <div className="how-side reveal" ref={ref}>
            <div className="eyebrow">The process</div>
            <h2>How it works.</h2>
            <p className="sec-sub">From your first message to discharge notes for your GP, one coordinator handles the logistics.</p>
          </div>
          <div>
            {STEPS.map((s,i) => (
              <div key={s.t} className="step reveal" ref={ref}>
                <div className="step-n">{i+1}</div>
                <div><div className="step-t">{s.t}</div><div className="step-d">{s.d}</div></div>
                <div className="step-when">{s.when}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="sec band" id="stories">
        <div className="inner">
          <div className="reveal" ref={ref}>
            <div className="kicker">Patient stories</div>
            <h2>Patient reviews</h2>
          </div>
          <div className="rev-grid">
            <div style={{background:'#fff',border:'1px solid #f0ede8',borderRadius:'16px',padding:'1.75rem'}}>
              <div style={{display:'flex',gap:'4px',marginBottom:'1rem'}}>
                {[1,2,3,4,5].map(i => <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
              </div>
              <div style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',fontStyle:'normal',color:'#1a1a1a',lineHeight:1.7,marginBottom:'1.25rem',fontWeight:400}}>&ldquo;I had a urology treatment arranged by Ocean Health &amp; Travel and I am extremely satisfied with the entire process. From the initial consultation to the procedure and follow-up, everything was well organized and transparent. The doctors and nurses were experienced, attentive, and explained each step clearly. Logistics such as appointments, transportation, and hospital coordination were handled smoothly. I confidently recommend Ocean Health &amp; Travel to anyone seeking high-quality care.&rdquo;</div>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#E1F5EE',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'DM Serif Display',serif",fontSize:'13px',color:'#085041',flexShrink:0}}>OG</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>Ozan G.</div>
                  <div style={{fontSize:'12px',color:'#888'}}>Urology &middot; Istanbul &middot; Google Review</div>
                </div>
              </div>
            </div>
            <div style={{background:'#fff',border:'1px solid #f0ede8',borderRadius:'16px',padding:'1.75rem'}}>
              <div style={{display:'flex',gap:'4px',marginBottom:'1rem'}}>
                {[1,2,3,4,5].map(i => <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
              </div>
              <div style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',fontStyle:'normal',color:'#1a1a1a',lineHeight:1.7,marginBottom:'1.25rem',fontWeight:400}}>&ldquo;I had the best experience with Ocean Health. From the first port of call, consultation, procedure and follow up care was absolutely faultless. I was anxious and worried about having dental treatment abroad but I had absolutely nothing to worry about. Everything was taken care of and to the highest of standards. I have a constant smile on my face thanks to this wonderful company.&rdquo;</div>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#E1F5EE',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'DM Serif Display',serif",fontSize:'13px',color:'#085041',flexShrink:0}}>SS</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>Savannah S.</div>
                  <div style={{fontSize:'12px',color:'#888'}}>Dental (full crowns) &middot; Google Review</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'1.5rem'}}>
            <a href="https://www.google.com/search?q=Ocean+Health+Travel+reviews" target="_blank" rel="noopener noreferrer" style={{fontSize:'13px',color:'#085041',fontWeight:500}}>Read all reviews on Google →</a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="inner">
          <div style={{textAlign:'center',marginBottom:'1.5rem'}} className="reveal" ref={ref}>
            <a href={WA_URL} target="_blank" className="wa-pill">
              Message us on WhatsApp
            </a>
          </div>
          <div className="cta-box reveal" ref={ref}>
            <h2>Tell us what you need</h2>
            <p>Send us your treatment and preferred dates. You will receive an itemised quote within 48 hours, with no obligation. Elective procedures only.</p>
            <div className="cta-actions">
              <a href={WA_URL} target="_blank" className="btn-cta-w">Get a free quote</a>
              <a href="mailto:info@oceanhealthtravel.com" className="btn-cta-o">Email us</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-brand-name">Ocean Health &amp; Travel</div>
              <p>UK-registered medical tourism coordinator. Connecting international patients with JCI-accredited Istanbul clinics.</p>
              <div className="fbadges">
                {['JCI-accredited hospitals','UK GDPR / ICO','Companies House'].map(b => (
                  <div key={b} className="fbadge"><div className="fbadge-dot"></div>{b}</div>
                ))}
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Treatments</h4>
                <a href="#services">Cosmetic surgery</a>
                <a href="#services">Dental</a>
                <a href="#services">Ophthalmology</a>
                <a href="#services">Neurosurgery</a>
                <a href="/treatments/urology-istanbul">Urology & men's health</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="/about">About us</a>
                <a href="#how-it-works">How it works</a>
                <a href="/faq">FAQ</a>
                <a href="mailto:info@oceanhealthtravel.com">Contact</a>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <a href="/privacy-policy">Privacy policy</a>
                <a href="/complaints-policy">Complaints policy</a>
                <a href="/cookie-policy">Cookie policy</a>
                <a href="/brokerage-agreement">Brokerage agreement</a>
              </div>
            </div>
          </div>
          <div className="footer-legal">
            © {new Date().getFullYear()} Ocean Health &amp; Travel Ltd · Registered in England &amp; Wales · Company no. 16186647 · ICO registered · UK GDPR compliant<br />
            London: 17 Green Lanes, N16 9BS · Fethiye: Karagözler Mah., Fevzi Çakmak Cad. No:11/A, Muğla ·{' '}
            <a href="mailto:info@oceanhealthtravel.com">info@oceanhealthtravel.com</a> ·{' '}
            <a href="tel:+447441904858">+44 7441 904858</a><br />
            Flights not included · No coordination fee charged to patients · Coordinator, not a medical provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating provider. Patients should seek urgent local medical care if required after returning home. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </div>
  )
}
