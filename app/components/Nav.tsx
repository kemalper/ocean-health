'use client'
import { useState, useEffect } from 'react'

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20get%20a%20free%20quote'

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!transparent) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  return (
    <>
      <style>{`
        .nav{position:${transparent ? 'fixed' : 'sticky'};top:0;left:0;right:0;z-index:500;transition:background .3s,box-shadow .3s}
        .nav.scrolled{background:rgba(255,255,255,.96);backdrop-filter:blur(12px);box-shadow:0 1px 0 rgba(0,0,0,.08)}
        .nav:not(.scrolled){background:transparent}
        .nav-inner{max-width:1160px;margin:0 auto;padding:0 2.5rem;height:66px;display:flex;align-items:center;justify-content:space-between}
        .nav-logo{display:flex;align-items:center}
        .nav-links{display:flex;gap:2rem;list-style:none;align-items:center}
        .nav-links a{font-size:13px;transition:color .2s;text-decoration:none}
        .nav.scrolled .nav-links a{color:#444}
        .nav:not(.scrolled) .nav-links a{color:rgba(255,255,255,.85)}
        .nav-links a:hover{color:#085041}
        .nav:not(.scrolled) .nav-links a:hover{color:#fff}
        .btn-nav{border:1px solid #085041;padding:8px 18px;border-radius:7px;font-size:13px;font-weight:500;transition:all .2s;text-decoration:none}
        .nav.scrolled .btn-nav{border-color:#085041;color:#085041}
        .nav:not(.scrolled) .btn-nav{border-color:rgba(255,255,255,.5);color:#fff}
        .btn-nav:hover{background:#085041!important;color:#fff!important}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px;background:none;border:none}
        .hamburger span{display:block;width:22px;height:2px;border-radius:2px;transition:all .3s}
        .nav.scrolled .hamburger span{background:#1a1a1a}
        .nav:not(.scrolled) .hamburger span{background:#fff}
        .mobile-menu{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,.98);backdrop-filter:blur(20px);z-index:999;flex-direction:column;align-items:center;justify-content:center;gap:2rem}
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

      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/logo.png" alt="Ocean Health & Travel" style={{height:'40px',width:'auto',display:'block'}} />
          </a>
          <ul className="nav-links">
            <li><a href="/#compare">Why Istanbul</a></li>
            <li><a href="/#services">Treatments</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/pre-operative-assessment" style={{color:"#1D9E75",fontWeight:600}}>Pre-assessment</a></li>
            <li><a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-nav">Free quote</a></li>
          </ul>
          <button className="hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/#compare" onClick={() => setOpen(false)}>Why Istanbul</a>
        <a href="/#services" onClick={() => setOpen(false)}>Treatments</a>
        <a href="/about" onClick={() => setOpen(false)}>About</a>
        <a href="/faq" onClick={() => setOpen(false)}>FAQ</a>
        <a href="/contact" onClick={() => setOpen(false)}>Contact</a>
        <a href="/pre-operative-assessment" onClick={() => setOpen(false)} style={{color:"#085041"}}>Pre-assessment</a>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mobile-btn" onClick={() => setOpen(false)}>💬 Free quote</a>
      </div>
    </>
  )
}
