'use client'
import { useEffect, useRef, useState } from 'react'

const WA_URL = 'https://wa.me/447441904858?text=Hello%2C%20I%27d%20like%20to%20get%20a%20free%20quote'

const procedures: Record<string, { headers: string[], rows: string[][] }> = {
  cosmetic: {
    headers: ['Procedure', 'UK private', 'Istanbul (OHT)', 'Saving'],
    rows: [
      ['Rhinoplasty', '£4,000 – £7,000', 'from £3,200', 'up to 55%'],
      ['Breast augmentation', '£5,000 – £8,000', 'from £5,500', 'up to 50%'],
      ['Breast reduction (incl. implants)', '£8,000 – £10,000', 'from £6,300', 'up to 40%'],
      ['Liposuction', '£3,000 – £8,500', 'from £2,500', 'up to 70%'],
      ['Face & neck lift', '£7,000 – £12,000', 'from £5,000', 'up to 60%'],
      ['Tummy tuck', '£5,000 – £10,000', 'from £3,500', 'up to 65%'],
    ]
  },
  dental: {
    headers: ['Procedure', 'UK private', 'Istanbul (OHT)', 'Saving'],
    rows: [
      ['Dental implant (single)', '£2,000 – £2,800', 'from £350', '~80%'],
      ['Zirconium crown', '£700 – £1,200', 'from £150', '~75%'],
      ['Porcelain veneers (per tooth)', '£600 – £1,000', 'from £180', '~70%'],
      ['Full-arch restoration', '£15,000 – £25,000', 'from £4,500', '~70%'],
    ]
  },
  ortho: {
    headers: ['Procedure', 'NHS wait / UK private', 'Istanbul (OHT)', 'Saving'],
    rows: [
      ['Knee replacement', '12–18 mo / £12,000–£16,000', 'from £3,500 · 2–3 wks', '70–75%'],
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
      ['Deep brain stimulation', '£40,000 – £60,000+', 'from $30,000 (~£23,700)', '40–60%'],
      ['Lumbar disc herniation', '£8,000 – £15,000', 'from $5,000 (~£3,950)', '55–75%'],
      ['Cervical disc herniation', '£10,000 – £18,000', 'from $6,000 (~£4,750)', '55–75%'],
    ]
  }
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('cosmetic')
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
    <>
      <style>{`
        .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
        .reveal.visible{opacity:1;transform:none}
        .d1{transition-delay:.1s}.d2{transition-delay:.2s}.d3{transition-delay:.3s}.d4{transition-delay:.4s}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased}
        body{font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff;overflow-x:hidden}
        a{text-decoration:none;color:inherit}
        .inner{max-width:1160px;margin:0 auto;padding:0 2.5rem}
        nav{position:fixed;top:0;left:0;right:0;z-index:500;transition:background .3s,box-shadow .3s}
        nav.scrolled{background:rgba(255,255,255,.96);backdrop-filter:blur(12px);box-shadow:0 1px 0 rgba(0,0,0,.08)}
        .nav-inner{height:66px;display:flex;align-items:center;justify-content:space-between}
        .logo{display:flex;align-items:center}
        
        .nav-links{display:flex;gap:2rem;list-style:none;align-items:center}
        .nav-links a{font-size:13px;color:rgba(255,255,255,.85);transition:color .2s}
        nav.scrolled .nav-links a{color:#444}
        .nav-links a:hover{color:#fff}
        nav.scrolled .nav-links a:hover{color:#085041}
        .btn-nav{border:1px solid rgba(255,255,255,.5);padding:8px 18px;border-radius:7px;font-size:13px;font-weight:500;color:#fff!important;transition:all .2s}
        .btn-nav:hover{background:rgba(255,255,255,.15)!important}
        nav.scrolled .btn-nav{border-color:#085041;color:#085041!important}
        nav.scrolled .btn-nav:hover{background:#085041!important;color:#fff!important}
        .hero{min-height:100vh;background:linear-gradient(135deg,rgba(4,46,34,.92) 0%,rgba(8,80,65,.88) 45%,rgba(13,107,85,.85) 100%),url('https://images.pexels.com/photos/13349520/pexels-photo-13349520.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover no-repeat;position:relative;display:flex;flex-direction:column;justify-content:center;overflow:hidden}
        .hero::before{content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(29,158,117,.25) 0%,transparent 70%);top:-100px;right:-150px;pointer-events:none}
        .hero::after{content:'';position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(225,245,238,.08) 0%,transparent 70%);bottom:-80px;left:-100px;pointer-events:none}
        .hero-content{position:relative;z-index:2;padding:120px 0 80px}
        .hero-grid{display:grid;grid-template-columns:1.1fr 0.9fr;gap:3.5rem;align-items:center}
        .hero-tag{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:100px;padding:6px 16px;font-size:12px;font-weight:500;color:rgba(255,255,255,.9);letter-spacing:.05em;text-transform:uppercase;margin-bottom:2rem}
        .pulse{width:7px;height:7px;border-radius:50%;background:#4ade80;animation:pulse-dot 2s ease-in-out infinite;flex-shrink:0}
        @keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.8)}}
        h1{font-family:'DM Serif Display',serif;font-size:clamp(42px,5.5vw,72px);line-height:1.08;letter-spacing:-.03em;color:#fff;margin-bottom:1rem;font-weight:400}
        h1 em{font-style:italic;color:#6ee7b7}
        .hero-sub{font-size:17px;color:rgba(255,255,255,.72);line-height:1.75;margin-bottom:2.5rem;font-weight:300;max-width:520px}
        .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
        .btn-primary{background:#fff;color:#085041;border:none;padding:15px 28px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:9px;transition:transform .2s,box-shadow .2s;cursor:pointer;font-family:'Inter',sans-serif;box-shadow:0 4px 24px rgba(0,0,0,.15)}
        .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 32px rgba(0,0,0,.2)}
        .btn-ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35);padding:15px 28px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:9px;transition:all .2s;cursor:pointer;font-family:'Inter',sans-serif}
        .btn-ghost:hover{background:rgba(255,255,255,.1)}
        .hero-cards{display:flex;flex-direction:column;gap:12px}
        .stat-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .stat{background:rgba(255,255,255,.1);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.15);border-radius:14px;padding:1.25rem 1.4rem}
        .stat-n{font-family:'DM Serif Display',serif;font-size:34px;color:#fff;line-height:1;margin-bottom:5px}
        .stat-n em{font-style:normal;font-size:18px;color:#6ee7b7}
        .stat-l{font-size:12px;color:rgba(255,255,255,.65);font-weight:300}
        .patient-card{background:rgba(255,255,255,.1);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.15);border-radius:14px;padding:1.1rem 1.25rem;display:flex;align-items:center;gap:14px}
        .avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#1D9E75,#085041);display:flex;align-items:center;justify-content:center;font-family:'DM Serif Display',serif;font-size:14px;color:#fff;flex-shrink:0}
        .p-name{font-size:13px;color:#fff;font-weight:500;margin-bottom:3px}
        .p-detail{font-size:11px;color:rgba(255,255,255,.6)}
        .v-badge{margin-left:auto;background:rgba(110,231,183,.15);border:1px solid rgba(110,231,183,.3);border-radius:6px;padding:5px 10px;text-align:center;flex-shrink:0}
        .v-badge-t{font-size:11px;color:#6ee7b7;font-weight:500}
        .v-badge-s{font-size:10px;color:rgba(110,231,183,.7)}
        .scroll-hint{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:8px;color:rgba(255,255,255,.5);font-size:11px;letter-spacing:.08em;text-transform:uppercase}
        .scroll-arrow{width:20px;height:20px;border-right:1.5px solid rgba(255,255,255,.4);border-bottom:1.5px solid rgba(255,255,255,.4);transform:rotate(45deg);animation:bounce 1.8s ease-in-out infinite;margin-top:4px}
        @keyframes bounce{0%,100%{transform:rotate(45deg) translateY(0)}50%{transform:rotate(45deg) translateY(5px)}}
        .trust{background:#fff;border-bottom:1px solid #f0ede8;padding:.9rem 0}
        .trust-inner{display:flex;align-items:center;gap:1.5rem;flex-wrap:wrap}
        .trust-label{font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:#bbb;font-weight:500;flex-shrink:0}
        .trust-sep{width:1px;height:18px;background:#eee;flex-shrink:0}
        .trust-items{display:flex;gap:1.75rem;flex-wrap:wrap}
        .ti{display:flex;align-items:center;gap:7px;font-size:12.5px;color:#555}
        .ti-dot{width:7px;height:7px;border-radius:50%;background:#1D9E75;flex-shrink:0}
        .sec{padding:5rem 0}
        .sec.bg{background:#fafaf9}
        .sec-border{border-top:1px solid #f0ede8;border-bottom:1px solid #f0ede8}
        .kicker{font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#1D9E75;margin-bottom:1rem}
        h2{font-family:'DM Serif Display',serif;font-size:clamp(28px,3.5vw,44px);font-weight:400;color:#1a1a1a;letter-spacing:-.02em;line-height:1.15;margin-bottom:1rem}
        .sec-sub{font-size:16px;color:#666;line-height:1.7;font-weight:300;max-width:560px;margin-bottom:3rem}
        .tl-grid{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:2.5rem}
        .tl-box{border-radius:16px;padding:2rem}
        .tl-box.nhs{background:#fff;border:1px solid #f0ede8}
        .tl-box.oht{background:linear-gradient(135deg,#042e22,#085041)}
        .tl-head{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1.5rem}
        .tl-head.red{color:#dc2626}
        .tl-head.green{color:#6ee7b7}
        .tl-step{display:flex;gap:14px;align-items:flex-start;padding-bottom:1.25rem}
        .tl-step:last-child{padding-bottom:0}
        .tl-left{display:flex;flex-direction:column;align-items:center;flex-shrink:0}
        .tl-circle{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600}
        .tl-circle.red{background:#fee2e2;color:#dc2626}
        .tl-circle.green{background:rgba(110,231,183,.2);color:#6ee7b7}
        .tl-line{width:1px;flex:1;min-height:20px;margin-top:4px}
        .tl-line.red{background:#fecaca}
        .tl-line.green{background:rgba(110,231,183,.2)}
        .tl-label{font-size:14px;font-weight:500;color:#1a1a1a;margin-bottom:2px}
        .tl-box.oht .tl-label{color:#fff}
        .tl-wait{font-size:12px;color:#dc2626;font-weight:500}
        .tl-ok{font-size:12px;color:#6ee7b7;font-weight:500}
        .tl-total{border-radius:10px;padding:.9rem 1.25rem;margin-top:1.5rem;font-size:14px;font-weight:600}
        .tl-total.bad{background:#fee2e2;color:#dc2626}
        .tl-total.good{background:rgba(110,231,183,.15);color:#6ee7b7;border:1px solid rgba(110,231,183,.2)}
        .tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:1.5rem}
        .tab{background:#f5f4f2;border:1px solid transparent;padding:9px 18px;border-radius:100px;font-size:13px;font-weight:500;cursor:pointer;font-family:'Inter',sans-serif;color:#555;transition:all .2s}
        .tab.active,.tab:hover{background:#085041;color:#fff}
        .table-wrap{background:#fff;border:1px solid #f0ede8;border-radius:16px;overflow:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch}
        table{width:100%;border-collapse:collapse;min-width:500px}
        th{font-size:11px;text-transform:uppercase;letter-spacing:.07em;color:#bbb;font-weight:500;padding:1rem 1.25rem;text-align:left;background:#fafaf9;border-bottom:1px solid #f0ede8}
        td{padding:1rem 1.25rem;border-bottom:1px solid #fafaf9;font-size:14px;color:#1a1a1a}
        tr:last-child td{border-bottom:none}
        tr:hover td{background:#fafaf9}
        .td-oht{color:#085041;font-weight:600}
        .td-nhs{color:#aaa}
        .saving{background:#e8faf3;color:#085041;font-weight:600;border-radius:20px;padding:4px 12px;font-size:12px;white-space:nowrap;display:inline-block}
        .table-note{font-size:12px;color:#bbb;padding:1rem 1.25rem;border-top:1px solid #f5f4f2}
        .neuro-warn{background:#fffbeb;border:1px solid #fde68a;border-radius:10px;padding:.85rem 1.1rem;margin-bottom:1rem;font-size:12.5px;color:#92400e;line-height:1.6}
        .tx-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .tx-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:1.5rem;transition:transform .25s,box-shadow .25s,border-color .25s}
        .tx-card:hover{transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.08);border-color:#d1f5e8}
        .tx-card.neuro{border-left:3px solid #f59e0b}
        .tx-icon{width:44px;height:44px;background:linear-gradient(135deg,#e8faf3,#c6f0de);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;font-size:20px}
        .tx-icon.neuro-icon{background:linear-gradient(135deg,#fef3e2,#fde68a)}
        .tx-name{font-size:15px;font-weight:600;margin-bottom:.6rem;color:#1a1a1a}
        .tx-list{list-style:none;padding:0;margin-bottom:.85rem}
        .tx-list li{font-size:12.5px;color:#777;line-height:1.8;padding-left:12px;position:relative}
        .tx-list li::before{content:'·';position:absolute;left:0;color:#1D9E75;font-weight:700}
        .tx-price{font-size:12.5px;color:#085041;font-weight:600;padding-top:.85rem;border-top:1px solid #f5f4f2}
        .neuro-badge{display:inline-block;font-size:10px;background:#fef3e2;color:#92400e;border:1px solid #fde68a;border-radius:4px;padding:2px 8px;margin-bottom:.6rem;font-weight:600}
        .coord-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .coord-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:2rem 1.5rem;text-align:center;transition:transform .25s,box-shadow .25s}
        .coord-card:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(0,0,0,.06)}
        .coord-icon{width:52px;height:52px;background:#E1F5EE;border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;color:#085041}
        .coord-t{font-size:15px;font-weight:600;margin-bottom:.5rem}
        .coord-d{font-size:13px;color:#777;line-height:1.65;font-weight:300}
        .steps{display:grid;grid-template-columns:repeat(5,1fr);position:relative;margin-top:3rem}
        .steps::before{content:'';position:absolute;top:22px;left:10%;right:10%;height:1px;background:linear-gradient(90deg,transparent,#c6f0de 20%,#c6f0de 80%,transparent)}
        .step{text-align:center;padding:0 .75rem;position:relative;z-index:1}
        .step-circle{width:44px;height:44px;border-radius:50%;background:linear-gradient(135deg,#085041,#1D9E75);display:flex;align-items:center;justify-content:center;margin:0 auto 1.25rem;font-size:15px;font-weight:600;color:#fff;box-shadow:0 4px 14px rgba(8,80,65,.3)}
        .step-t{font-size:14px;font-weight:600;margin-bottom:.4rem}
        .step-d{font-size:12px;color:#888;line-height:1.6}
        .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .why-card{background:#fff;border:1px solid #f0ede8;border-radius:16px;padding:2rem;transition:transform .25s,box-shadow .25s}
        .why-card:hover{transform:translateY(-3px);box-shadow:0 8px 30px rgba(0,0,0,.06)}
        .why-card.dark{background:linear-gradient(135deg,#042e22,#085041);border-color:transparent}
        .why-icon{width:40px;height:40px;background:#f0faf5;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:1.1rem;font-size:18px}
        .why-card.dark .why-icon{background:rgba(255,255,255,.1)}
        .why-t{font-size:15px;font-weight:600;margin-bottom:.5rem}
        .why-card.dark .why-t{color:#fff}
        .why-d{font-size:13px;color:#666;line-height:1.7;font-weight:300}
        .why-card.dark .why-d{color:rgba(255,255,255,.65)}
        .cta-box{background:linear-gradient(135deg,#042e22 0%,#085041 60%,#0d7a60 100%);border-radius:24px;padding:4rem;text-align:center;position:relative;overflow:hidden}
        .cta-box h2{color:#fff;margin-bottom:1rem}
        .cta-box p{font-size:16px;color:rgba(255,255,255,.65);font-weight:300;line-height:1.7;margin-bottom:2.5rem;max-width:500px;margin-left:auto;margin-right:auto}
        .cta-actions{display:flex;gap:14px;justify-content:center;flex-wrap:wrap}
        .btn-cta-w{background:#fff;color:#085041;border:none;padding:15px 30px;border-radius:10px;font-size:15px;font-weight:600;display:inline-flex;align-items:center;gap:9px;cursor:pointer;font-family:'Inter',sans-serif;transition:transform .2s,box-shadow .2s}
        .btn-cta-w:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.2)}
        .btn-cta-o{background:transparent;color:rgba(255,255,255,.85);border:1px solid rgba(255,255,255,.3);padding:15px 30px;border-radius:10px;font-size:15px;display:inline-flex;align-items:center;gap:9px;cursor:pointer;font-family:'Inter',sans-serif;transition:all .2s}
        .btn-cta-o:hover{background:rgba(255,255,255,.1);color:#fff}
        .wa-pill{display:inline-flex;align-items:center;gap:10px;background:#1D9E75;color:#fff;border:none;border-radius:100px;padding:14px 24px;font-size:14px;font-weight:500;cursor:pointer;font-family:'Inter',sans-serif;transition:background .2s,transform .2s;margin-bottom:2rem}
        .wa-pill:hover{background:#085041;transform:translateY(-1px)}
        footer{background:#111;padding:3rem 0 2rem}
        .footer-top{display:flex;justify-content:space-between;flex-wrap:wrap;gap:2rem;padding-bottom:2rem;border-bottom:1px solid #222;margin-bottom:1.5rem}
        .footer-brand{font-size:12.5px;color:#666;line-height:1.7;max-width:320px}
        .footer-brand-name{font-family:'DM Serif Display',serif;font-size:16px;color:#fff;margin-bottom:.75rem}
        .footer-links{display:flex;gap:3rem;flex-wrap:wrap}
        .footer-col h4{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#555;font-weight:600;margin-bottom:1rem}
        .footer-col a{display:block;font-size:13px;color:#555;margin-bottom:.5rem;transition:color .2s}
        .footer-col a:hover{color:#6ee7b7}
        .footer-legal{font-size:11.5px;color:#444;line-height:1.8}
        .footer-legal em{color:#333;font-style:normal;font-size:11px}
        .fbadges{display:flex;gap:8px;flex-wrap:wrap;margin-top:1rem}
        .fbadge{display:flex;align-items:center;gap:5px;font-size:11px;color:#555;border:1px solid #222;border-radius:5px;padding:4px 10px}
        .fbadge-dot{width:6px;height:6px;border-radius:50%;background:#1D9E75;flex-shrink:0}
        @media(max-width:1024px){.tx-grid{grid-template-columns:repeat(2,1fr)}.why-grid{grid-template-columns:repeat(2,1fr)}.coord-grid{grid-template-columns:repeat(2,1fr)}.hero-grid{grid-template-columns:1fr}.hero-cards{display:none}}
        @media(max-width:768px){.tl-grid{grid-template-columns:1fr}.steps{grid-template-columns:1fr;gap:1.25rem}.steps::before{display:none}.step{text-align:left;display:flex;align-items:flex-start;gap:14px}.step-circle{flex-shrink:0;margin:0}.cta-box{padding:2.5rem 1.5rem}.nav-links{display:none}h1{font-size:38px}}
        @media(max-width:480px){.inner{padding:0 1.25rem}.tx-grid{grid-template-columns:1fr}.why-grid{grid-template-columns:1fr}.coord-grid{grid-template-columns:1fr}.cta-actions{flex-direction:column;align-items:center}}
      `}</style>

      {/* NAV */}
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="inner nav-inner">
          <a href="/" className="logo"><img src="/logo.png" alt="Ocean Health &amp; Travel" style={{height:"44px",width:"auto",display:"block",filter:scrolled?"none":"brightness(0) invert(1)"}} /></a>
          <ul className="nav-links">
            <li><a href="#compare">Why Istanbul</a></li>
            <li><a href="#services">Treatments</a></li>
            <li><a href="#coordination">What we provide</a></li>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href={WA_URL} target="_blank" className="btn-nav">Free quote</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="inner hero-content">
          <div className="hero-grid">
            <div>
              <div className="hero-tag reveal" ref={ref}>
                <span className="pulse"></span>
                Istanbul &middot; UK-registered coordinator
              </div>
              <h1 className="reveal d1" ref={ref}>
                Private treatment<br />
                <em>in Istanbul.</em><br />
                In 2&ndash;3 weeks.
              </h1>
              <p className="hero-sub reveal d2" ref={ref}>
                We connect UK and international patients with JCI-accredited Istanbul clinics. One coordinator handles everything — clinic liaison, airport transfer, hotel, interpreter, and GP documentation.
              </p>
              <div className="hero-actions reveal d3" ref={ref}>
                <a href={WA_URL} target="_blank" className="btn-primary">Get a free quote</a>
                <a href="#compare" className="btn-ghost">Compare Why Istanbul ↓</a>
              </div>
            </div>
            <div className="hero-cards reveal d2" ref={ref}>
              <div className="stat-grid">
                <div className="stat">
                  <div className="stat-n">2&ndash;3<em> wk</em></div>
                  <div className="stat-l">vs. 18+ months NHS wait</div>
                </div>
                <div className="stat">
                  <div className="stat-n">48<em>h</em></div>
                  <div className="stat-l">Quote turnaround</div>
                </div>
              </div>
              <div className="patient-card">
                <div className="avatar">SS</div>
                <div>
                  <div className="p-name">Savannah S.</div>
                  <div className="p-detail">Dental (full crowns) · Google Review ★★★★★</div>
                </div>
                <div className="v-badge">
                  <div className="v-badge-t">Verified</div>
                  <div className="v-badge-s">patient</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust">
        <div className="inner trust-inner">
          <span className="trust-label">Credentials</span>
          <div className="trust-sep"></div>
          <div className="trust-items">
            {['UK Companies House no. 16186647','ICO registered · UK GDPR','Access to JCI-accredited hospitals','JCI-accredited facilities','Physician-led coordination','TÜRSAB member'].map(t => (
              <div key={t} className="ti"><div className="ti-dot"></div>{t}</div>
            ))}
          </div>
        </div>
      </div>

      {/* NHS COMPARISON */}
      <section className="sec bg sec-border" id="compare">
        <div className="inner">
          <div className="reveal" ref={ref}>
            <div className="kicker">Why patients choose Turkey</div>
            <h2>18 months vs. 2&ndash;3 weeks.</h2>
            <p className="sec-sub">NHS waiting lists for elective procedures have reached historic highs. Ocean Health &amp; Travel provides coordinator-led access to the internationally accredited hospitals — in a fraction of the time, and at significantly lower cost.</p>
          </div>
          <div className="tl-grid reveal" ref={ref}>
            <div className="tl-box nhs">
              <div className="tl-head red">NHS pathway</div>
              {[['GP referral','Week 0'],['Outpatient consultation','6–8 month wait'],['Pre-operative assessment','Further delay'],['Surgery','12–18+ months from GP']].map(([label,wait],i,arr) => (
                <div key={label} className="tl-step">
                  <div className="tl-left">
                    <div className="tl-circle red">{i+1}</div>
                    {i<arr.length-1 && <div className="tl-line red"></div>}
                  </div>
                  <div><div className="tl-label">{label}</div><div className="tl-wait">{wait}</div></div>
                </div>
              ))}
              <div className="tl-total bad">NHS total: 18+ months</div>
            </div>
            <div className="tl-box oht">
              <div className="tl-head green">Ocean Health pathway</div>
              {[['Contact us via WhatsApp','Day 0'],['Itemised quote & treatment plan','Within 48 hours'],['Hotel & transfer confirmed','Days 3–7'],['Surgery in Istanbul','2–3 weeks from first contact']].map(([label,ok],i,arr) => (
                <div key={label} className="tl-step">
                  <div className="tl-left">
                    <div className="tl-circle green">{i+1}</div>
                    {i<arr.length-1 && <div className="tl-line green"></div>}
                  </div>
                  <div><div className="tl-label">{label}</div><div className="tl-ok">{ok}</div></div>
                </div>
              ))}
              <div className="tl-total good">Ocean Health total: 2–3 weeks</div>
            </div>
          </div>

          <div className="reveal" ref={ref}>
            <div className="tabs">
              {[['cosmetic','Cosmetic surgery'],['dental','Dental'],['ortho','Orthopaedics'],['ophth','Ophthalmology'],['neuro','Neurosurgery']].map(([id,label]) => (
                <button key={id} className={`tab${activeTab===id?' active':''}`} onClick={() => setActiveTab(id)}>{label}</button>
              ))}
            </div>
            {activeTab === 'neuro' && (
              <div className="neuro-warn"><strong>Important:</strong> Neurosurgical procedures require specialist referral and full clinical assessment. Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with the treating neurosurgical team. Elective procedures only.</div>
            )}
            <div className="table-wrap">
              <table>
                <thead><tr>{procedures[activeTab].headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {procedures[activeTab].rows.map(row => (
                    <tr key={row[0]}>
                      <td>{row[0]}</td>
                      <td className="td-nhs">{row[1]}</td>
                      <td className="td-oht">{row[2]}</td>
                      <td><span className="saving">{row[3]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="table-note">Prices are indicative and subject to individual clinical assessment. No coordination fee is charged to patients — our commercial arrangements are with partner hospitals. Flights not included. Elective procedures only.</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec" id="services">
        <div className="inner">
          <div className="reveal" ref={ref}>
            <div className="kicker">What we coordinate</div>
            <h2>Services we mediate</h2>
          </div>
          <div className="tx-grid">
            {[
              {icon:'🩺',name:'Plastic & cosmetic surgery',link:'/treatments/plastic-surgery-istanbul',img:'https://images.pexels.com/photos/8528647/pexels-photo-8528647.jpeg?auto=compress&cs=tinysrgb&w=800',items:['Rhinoplasty, facelift, brow lift','Breast augmentation, reduction, lift','Liposuction, tummy tuck, BBL','Ear, lip, eyelid surgery'],price:'Rhinoplasty from £3,200 · Breast from £6,000'},
              {icon:'🦷',name:'Dental',link:'/treatments/dental-istanbul',img:'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80',items:['Dental implants','Zirconium crowns & veneers','Smile design','Orthodontics & root canal'],price:'Implants from £350 each'},
              {icon:'👁️',name:'Ophthalmology',link:'/treatments/ophthalmology-istanbul',img:'https://images.pexels.com/photos/18680821/pexels-photo-18680821.jpeg?auto=compress&cs=tinysrgb&w=800',items:['LASIK & laser refractive surgery','Cataract & lens replacement','Eyelid & strabismus surgery'],price:'LASIK from £600 per eye'},
              {icon:'💊',name:'Urology & men\'s health',link:'/treatments/urology-istanbul',img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',items:['Penile aesthetics / penoplasty','Penile prosthesis & implant','Erectile dysfunction (ED)','P-Shot, ESWT, SVF stem cell'],price:'Contact us for individual pricing'},
              {icon:'💆',name:'Hair transplantation',link:'/treatments/hair-transplant-istanbul',img:'/hair-transplant.jpg',items:['FUE & DHI techniques','PRP for hair restoration'],price:'Contact us for pricing'},
              {icon:'✨',name:'Aesthetic medicine',link:null,img:'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',items:['Botox & dermal fillers','Mesotherapy & Hydrafacial','Scarlet X skin tightening'],price:'From £180'},
            ].map((s,i) => (
              <div key={s.name} className={`tx-card reveal d${i%4+1}`} ref={ref} onClick={() => s.link && window.location.assign(s.link)} style={{cursor: s.link ? 'pointer' : 'default'}}>
                <div style={{height:'160px',borderRadius:'10px',overflow:'hidden',marginBottom:'1rem',background:'#f0ede8'}}>
                  <img src={s.img} alt={s.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                </div>
                <div className="tx-name">{s.name}</div>
                <ul className="tx-list">{s.items.map(item => <li key={item}>{item}</li>)}</ul>
                <div className="tx-price">{s.price}</div>
                {s.link && <div style={{fontSize:'12px',color:'#085041',fontWeight:600,marginTop:'8px'}}>Learn more →</div>}
              </div>
            ))}
            <div className="tx-card neuro reveal" ref={ref} onClick={() => window.location.assign('/treatments/neurosurgery-istanbul')} style={{cursor:'pointer'}}>
              <div style={{height:"160px",borderRadius:"10px",overflow:"hidden",marginBottom:"1rem",background:"#f0ede8"}}><img src="https://images.pexels.com/photos/4226139/pexels-photo-4226139.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Neurosurgery" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} /></div>
              <div className="neuro-badge">Specialist referral required</div>
              <div className="tx-icon neuro-icon">🧠</div>
              <div className="tx-name">Neurosurgery</div>
              <ul className="tx-list">
                <li>Deep brain stimulation (Parkinson&apos;s)</li>
                <li>Pituitary adenoma, meningioma</li>
                <li>Glial tumours, acoustic neuroma</li>
                <li>Lumbar & cervical disc herniation</li>
              </ul>
              <div className="tx-price">DBS from £23,700 · Referral required</div>
              <div style={{fontSize:'12px',color:'#e17055',fontWeight:600,marginTop:'8px'}}>Learn more →</div>
            </div>
            <div className="tx-card reveal" ref={ref} style={{borderStyle:'dashed',background:'#fafaf9'}}>
              <div className="tx-icon">➕</div>
              <div className="tx-name" style={{color:'#aaa'}}>Not listed?</div>
              <ul className="tx-list" style={{color:'#bbb'}}>
                <li>We coordinate across all specialties</li>
                <li>Tell us and we&apos;ll find the right specialist</li>
              </ul>
              <div style={{marginTop:'.85rem'}}><a href={WA_URL} target="_blank" style={{fontSize:'13px',color:'#085041',fontWeight:600}}>Ask via WhatsApp →</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* COORDINATION */}
      <section className="sec bg sec-border" id="coordination">
        <div className="inner">
          <div className="reveal" ref={ref}>
            <div className="kicker">Included in every package</div>
            <h2>What we provide</h2>
            <p className="sec-sub">We are a coordinator, not a medical provider. Every package includes the following logistics services.</p>
          </div>
          <div className="coord-grid">
            {[
              {icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,t:'Airport transfer',d:'Safe, pre-confirmed transfers between airport, hotel, and clinic.'},
              {icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>,t:'Hotel & accommodation',d:'High-quality hotels close to your clinic, matched to your recovery needs.'},
              {icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,t:'Interpretation',d:'Professional interpreter at every appointment — no communication gaps.'},
              {icon:<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="2"/><path d="M9 12h6M9 16h4"/></svg>,t:'GP documentation',d:'Discharge notes in English, forwarded to your GP on request.'},
            ].map((c,i) => (
              <div key={c.t} className={`coord-card reveal d${i+1}`} ref={ref}>
                <div className="coord-icon">{c.icon}</div>
                <div className="coord-t">{c.t}</div>
                <div className="coord-d">{c.d}</div>
              </div>
            ))}
          </div>
          <p style={{fontSize:'12px',color:'#bbb',marginTop:'1.5rem',textAlign:'center'}}>
            Ocean Health &amp; Travel is a coordinator, not a medical provider. All clinical decisions rest with your treating clinic. Flights not included. Client payments held in a designated client account. Elective procedures only — not suitable for emergencies.
          </p>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="sec" id="how-it-works">
        <div className="inner">
          <div className="reveal" ref={ref} style={{textAlign:'center'}}>
            <div className="kicker">The process</div>
            <h2>From first message to home</h2>
          </div>
          <div className="steps">
            {[
              {n:'1',t:'Enquiry',d:'WhatsApp or email us your treatment and preferred dates'},
              {n:'2',t:'Quote',d:'Itemised proposal — clinic, surgeon, hotel, transfers — within 48h'},
              {n:'3',t:'Booking',d:'Clinic, hotel, and transfers confirmed; pre-op instructions sent'},
              {n:'4',t:'Treatment',d:'Interpreter at every appointment; full clinic liaison'},
              {n:'5',t:'GP docs',d:'Discharge notes in English forwarded to your GP on request'},
            ].map((s,i) => (
              <div key={s.t} className={`step reveal d${i+1}`} ref={ref}>
                <div className="step-circle">{s.n}</div>
                <div><div className="step-t">{s.t}</div><div className="step-d">{s.d}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="sec bg" id="why-us">
        <div className="inner">
          <div className="reveal" ref={ref}>
            <div className="kicker">Our difference</div>
            <h2>Why patients choose us</h2>
          </div>
          <div className="why-grid">
            {[
              {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1"/><path d="M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>,t:'Physician-led coordination',d:'Led by a medical doctor and university professor of physiology. Medical documents are reviewed for accuracy, relevant information communicated clearly to the treating team. All clinical assessment and treatment decisions are made by the treating hospital.',dark:false},
              {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,t:'JCI-accredited clinics only',d:'We work exclusively with internationally accredited hospitals. Our coordination fee is paid by our partner clinics — patients pay no additional brokerage fee on top of their treatment cost.',dark:false},
              {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,t:'Fixed, itemised pricing',d:'Your quote lists every cost before you travel. No surprises on arrival, no upselling at the clinic. What we quote is what you pay.',dark:true},
              {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,t:'One point of contact',d:'From first message to discharge, you deal with a single coordinator. No hand-offs, no repeated explanations.',dark:false},
              {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,t:'GP documentation',d:'Discharge summaries and clinical notes in English forwarded to your GP on request. Post-discharge decisions rest with your UK clinician.',dark:false},
              {icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,t:'UK-registered, trust-protected',d:'Registered in England & Wales (no. 16186647). Client payments held in a designated client account. TÜRSAB member. ICO registered.',dark:false},
            ].map((w,i) => (
              <div key={w.t} className={`why-card${w.dark?' dark':''} reveal d${i%3+1}`} ref={ref}>
                <div className="why-icon">{w.icon}</div>
                <div className="why-t">{w.t}</div>
                <div className="why-d">{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="sec bg" id="stories">
        <div className="inner">
          <div className="reveal" ref={ref}>
            <div className="kicker">Patient stories</div>
            <h2>What our patients say</h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',marginTop:'2rem'}}>
            <div style={{background:'#fff',border:'1px solid #f0ede8',borderRadius:'16px',padding:'1.75rem'}}>
              <div style={{display:'flex',gap:'4px',marginBottom:'1rem'}}>
                {[1,2,3,4,5].map(i => <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
              </div>
              <div style={{fontFamily:"'DM Serif Display',serif",fontSize:'16px',fontStyle:'italic',color:'#1a1a1a',lineHeight:1.7,marginBottom:'1.25rem',fontWeight:400}}>&ldquo;I had a urology treatment arranged by Ocean Health &amp; Travel and I am extremely satisfied with the entire process. From the initial consultation to the procedure and follow-up, everything was well organized and transparent. The doctors and nurses were experienced, attentive, and explained each step clearly. Logistics such as appointments, transportation, and hospital coordination were handled smoothly. I confidently recommend Ocean Health &amp; Travel to anyone seeking high-quality care.&rdquo;</div>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#E1F5EE',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'DM Serif Display',serif",fontSize:'13px',color:'#085041',flexShrink:0}}>OG</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>Ozan G.</div>
                  <div style={{fontSize:'12px',color:'#888'}}>Urology &middot; Istanbul &middot; Google Review ★★★★★</div>
                </div>
              </div>
            </div>
            <div style={{background:'#fff',border:'1px solid #f0ede8',borderRadius:'16px',padding:'1.75rem'}}>
              <div style={{display:'flex',gap:'4px',marginBottom:'1rem'}}>
                {[1,2,3,4,5].map(i => <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>)}
              </div>
              <div style={{fontFamily:"'DM Serif Display',serif",fontSize:'16px',fontStyle:'italic',color:'#1a1a1a',lineHeight:1.7,marginBottom:'1.25rem',fontWeight:400}}>&ldquo;I had the best experience with Ocean Health. From the first port of call, consultation, procedure and follow up care was absolutely faultless. I was anxious and worried about having dental treatment abroad but I had absolutely nothing to worry about. Everything was taken care of and to the highest of standards. I have a constant smile on my face thanks to this wonderful company.&rdquo;</div>
              <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#E1F5EE',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'DM Serif Display',serif",fontSize:'13px',color:'#085041',flexShrink:0}}>SS</div>
                <div>
                  <div style={{fontSize:'13px',fontWeight:500}}>Savannah S.</div>
                  <div style={{fontSize:'12px',color:'#888'}}>Dental (full crowns) &middot; Google Review ★★★★★</div>
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
              💬 Message us on WhatsApp — we reply within the hour
            </a>
          </div>
          <div className="cta-box reveal" ref={ref}>
            <h2>Ready to get started?</h2>
            <p>Send us your treatment and preferred dates — full itemised quote within 48 hours, no obligation. Elective procedures only.</p>
            <div className="cta-actions">
              <a href={WA_URL} target="_blank" className="btn-cta-w">💬 Get a free quote</a>
              <a href="mailto:info@oceanhealthtravel.com" className="btn-cta-o">✉️ Email us</a>
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
                {['UK GDPR / ICO','JCI-accredited hospitals','Trust Account','TÜRSAB','Companies House'].map(b => (
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
                <a href="#services">Urology</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="/about">About us</a>
                <a href="#how-it-works">How it works</a>
                <a href="/faq">FAQ</a>
                <a href="/blog">Blog</a>
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
            <a href="mailto:info@oceanhealthtravel.com" style={{color:'#555'}}>info@oceanhealthtravel.com</a> ·{' '}
            <a href="tel:+447441904858" style={{color:'#555'}}>+44 7441 904858</a><br />
            Flights not included · Client payments held in a designated client account · Coordinator, not a medical provider · Elective procedures only<br />
            <em>Ocean Health &amp; Travel does not provide medical advice. All clinical decisions rest with your treating clinic. Patients should seek urgent local medical care if required after returning home. Not suitable for emergencies.</em>
          </div>
        </div>
      </footer>
    </>
  )
}
