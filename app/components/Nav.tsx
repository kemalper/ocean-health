'use client'
import { useState, useEffect } from 'react'

type Group = { title: string; sub: string; items: [string, string][]; all?: [string, string]; tint?: boolean }
const T = '/treatments/'
const GROUPS: Group[] = [
  { title: 'Plastic surgery', sub: 'Breast, body and face', items: [
    ['Breast augmentation', T + 'breast-augmentation-istanbul'], ['Liposuction', T + 'liposuction-istanbul'],
    ['Tummy tuck', T + 'tummy-tuck-istanbul'], ['Brazilian butt lift', T + 'bbl-istanbul'],
    ['Rhinoplasty', T + 'rhinoplasty-istanbul'], ['Mini facelift', T + 'mini-facelift-istanbul'],
  ], all: ['All plastic surgery', T + 'plastic-surgery-istanbul'] },
  { title: 'Neurosurgery', sub: 'Imaging and records required. The neurosurgeon decides.', tint: true, items: [
    ['Lumbar disc surgery', T + 'lumbar-disc-istanbul'], ['Cervical disc surgery', T + 'cervical-disc-istanbul'],
    ['Deep brain stimulation', T + 'deep-brain-stimulation-turkey'],
  ], all: ['All neurosurgery', T + 'neurosurgery-istanbul'] },
  { title: 'Dental', sub: 'Implants and dental treatment', items: [
    ['Dental implants', T + 'dental-implants-turkey'], ['Dental treatment', T + 'dental-istanbul'],
  ] },
  { title: 'Aesthetic medicine', sub: 'Non-surgical: Hydrafacial, mesotherapy, Scarlet X, PRP and PRF, microneedling, peels. From £180.', items: [],
    all: ['Aesthetic medicine', T + 'aesthetic-medicine-istanbul'] },
  { title: 'More treatments', sub: 'Other specialties', items: [
    ['Hair transplant', T + 'hair-transplant-istanbul'], ['Eye surgery', T + 'ophthalmology-istanbul'],
    ['LASIK', T + 'lasik-istanbul'], ['Knee replacement', T + 'knee-replacement-turkey'], ['Urology', T + 'urology-istanbul'],
  ] },
]

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20get%20a%20free%20quote'

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)

  useEffect(() => {
    if (!transparent) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMega(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <style>{`
        .nav{position:${transparent ? 'fixed' : 'sticky'};top:0;left:0;right:0;z-index:500;transition:background .3s,box-shadow .3s}
        .nav.scrolled{background:rgba(250,248,244,.98);backdrop-filter:blur(12px);box-shadow:0 1px 0 #E6E0D4}
        .nav:not(.scrolled){background:transparent}
        .nav-inner{max-width:1280px;margin:0 auto;padding:0 2.5rem;height:84px;display:flex;align-items:center;justify-content:space-between}
        .nav-logo{display:flex;align-items:center}
        .nav-logo img{height:64px!important;width:auto}
        @media(max-width:900px){.nav-inner{height:66px}.nav-logo img{height:44px!important}}
        .nav-links{display:flex;gap:2.25rem;list-style:none;align-items:center}
        .nav-links a{font-size:14px;transition:color .2s;text-decoration:none}
        .nav.scrolled .nav-links a{color:#3A4852}
        .nav:not(.scrolled) .nav-links a{color:rgba(255,255,255,.85)}
        .nav-links a:hover{color:#085041}
        .nav:not(.scrolled) .nav-links a:hover{color:#fff}
        .btn-nav{border:1px solid #085041;padding:8px 18px;border-radius:7px;font-size:13px;font-weight:500;transition:all .2s;text-decoration:none}
        .nav.scrolled .btn-nav{border-color:#085041;color:#085041}
        .nav:not(.scrolled) .btn-nav{border-color:rgba(255,255,255,.5);color:#fff}
        .nav.scrolled .nav-links a.btn-nav{background:#0B6B55;border-color:#0B6B55;color:#fff;padding:11px 22px;border-radius:10px;font-size:14px;font-weight:600}
        .nav.scrolled .nav-links a.btn-nav:hover{background:#08503F!important;border-color:#08503F}
        .btn-nav:hover{background:#085041!important;color:#fff!important}
        .nav-trig{background:none;border:0;padding:0;font:inherit;font-size:14px;cursor:pointer;transition:color .2s}
        .nav.scrolled .nav-trig{color:#3A4852}
        .nav:not(.scrolled) .nav-trig{color:rgba(255,255,255,.85)}
        .nav-trig:hover,.nav-trig[aria-expanded=true]{color:#0B6B55!important}
        .mega{display:none;position:absolute;top:100%;left:0;right:0;background:#fff;border-bottom:1px solid #E6E0D4;box-shadow:0 12px 24px rgba(18,32,43,.08)}
        .mega.open{display:block}
        .mega-grid{max-width:1280px;margin:0 auto;padding:26px 2.5rem 28px;display:grid;grid-template-columns:repeat(5,1fr);gap:26px}
        .mega h4{font-family:'DM Serif Display',serif;font-weight:400;font-size:17px;margin:0 0 4px;color:#12202B}
        .mega .msub{font-size:12px;color:#5B6770;margin:0 0 10px;line-height:1.45}
        .mega .mcol a{display:block;font-size:14px;padding:4px 0;color:#2b3a45;text-decoration:none}
        .mega .mcol a:hover{color:#0B6B55}
        .mega .mcol a.mall{color:#0B6B55;font-weight:600;margin-top:6px}
        .mega .mcol.tint{background:#E3F0EA;border-radius:12px;padding:14px 16px;margin:-14px -4px}
        @media(max-width:1000px){.mega-grid{grid-template-columns:repeat(3,1fr)}}
        .mg{width:100%;max-width:340px;border-bottom:1px solid #E6E0D4;padding:.75rem 0}
        .mg summary{list-style:none;cursor:pointer;font-family:'DM Serif Display',serif;font-size:22px;display:flex;justify-content:space-between;color:#1a1a1a}
        .mg summary::-webkit-details-marker{display:none}
        .mg summary::after{content:'+';color:#0B6B55}
        .mg[open] summary::after{content:'–'}
        .mg .mg-sub{font-size:13px;color:#5B6770;margin:.4rem 0 .2rem}
        .mobile-menu .mg a{display:block;font-family:'Inter',sans-serif;font-size:16px;padding:7px 0 7px 4px}
        .mobile-menu .mg a.mall{color:#0B6B55;font-weight:600}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px;background:none;border:none}
        .hamburger span{display:block;width:22px;height:2px;border-radius:2px;transition:all .3s}
        .nav.scrolled .hamburger span{background:#1a1a1a}
        .nav:not(.scrolled) .hamburger span{background:#fff}
        .mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(250,248,244,.99);backdrop-filter:blur(20px);z-index:999;flex-direction:column;align-items:center;justify-content:flex-start;gap:1.25rem;overflow-y:auto;padding:5rem 1.5rem 2.5rem}
        .mobile-menu.open{display:flex}
        .mobile-menu a{font-family:'DM Serif Display',serif;font-size:28px;color:#1a1a1a;text-decoration:none;font-weight:400;letter-spacing:-.02em;transition:color .2s}
        .mobile-menu a:hover{color:#085041}
        .mobile-menu-close{position:absolute;top:1.5rem;right:1.5rem;background:none;border:none;cursor:pointer;font-size:28px;color:#1a1a1a;line-height:1}
        .mobile-btn{background:#085041;color:#fff!important;border:none;padding:14px 32px;border-radius:10px;font-size:16px;font-weight:600;font-family:'Inter',sans-serif;margin-top:1rem;text-decoration:none}
        @media(max-width:768px){
          .nav-links{display:none}
          .hamburger{display:flex}
          .nav-inner{padding:0 1.25rem}
        }
      `}</style>

      <nav className={`nav${scrolled ? ' scrolled' : ''}`} onMouseLeave={() => setMega(false)}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/logo.png" alt="Ocean Health & Travel" style={{height:'40px',width:'auto',display:'block'}} />
          </a>
          <ul className="nav-links">
            <li><a href="/#compare">Prices</a></li>
            <li onMouseEnter={() => setMega(true)}><button type="button" className="nav-trig" aria-expanded={mega} aria-controls="mega-menu" onClick={() => setMega(m => !m)}>Treatments ▾</button></li>
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/pre-operative-assessment">Pre-assessment</a></li>
            <li><a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-nav">Free quote</a></li>
          </ul>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span/><span/><span/>
          </button>
        </div>
        <div id="mega-menu" className={`mega${mega ? ' open' : ''}`}>
          <div className="mega-grid">
            {GROUPS.map(g => (
              <div key={g.title} className={`mcol${g.tint ? ' tint' : ''}`}>
                <h4>{g.title}</h4>
                <p className="msub">{g.sub}</p>
                {g.items.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
                {g.all && <a className="mall" href={g.all[1]}>{g.all[0]} →</a>}
              </div>
            ))}
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/#compare" onClick={() => setOpen(false)}>Prices</a>
        {GROUPS.map(g => (
          <details key={g.title} className="mg">
            <summary>{g.title}</summary>
            <p className="mg-sub">{g.sub}</p>
            {g.items.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
            {g.all && <a className="mall" href={g.all[1]} onClick={() => setOpen(false)}>{g.all[0]} →</a>}
          </details>
        ))}
        <a href="/about" onClick={() => setOpen(false)}>About</a>
        <a href="/faq" onClick={() => setOpen(false)}>FAQ</a>
        <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="/pre-operative-assessment" onClick={() => setOpen(false)}>Pre-assessment</a>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mobile-btn" onClick={() => setOpen(false)}>Free quote</a>
      </div>
    </>
  )
}
