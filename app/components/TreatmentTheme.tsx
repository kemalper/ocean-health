// Shared cream/editorial theme for treatment pages.
// Pages keep their own template CSS; this layer re-skins it. Scoped to .tp so nothing leaks.
// Wrap a page as: <div className="tp"><TreatmentTheme /> ... </div>
export default function TreatmentTheme() {
  return (
    <style>{`
      .tp{--bg:#FAF8F4;--band:#F2EEE5;--ink:#12202B;--muted:#5B6770;--line:#E6E0D4;--green:#0B6B55;--green-d:#08503F;--soft:#E3F0EA;background:var(--bg);color:var(--ink);min-height:100vh}
      .tp .inner{max-width:1280px!important}
      .tp .hero{background:var(--bg)!important;padding:72px 0 64px!important;border-bottom:1px solid var(--line)}
      .tp .hero::before,.tp .hero::after{display:none!important}
      .tp .breadcrumb,.tp .breadcrumb a{color:var(--muted)!important}
      .tp .breadcrumb a:hover{color:var(--green)!important}
      .tp .kicker{color:var(--green)!important;letter-spacing:.12em}
      .tp h1{color:var(--ink)!important;font-size:clamp(34px,4.2vw,54px)!important;line-height:1.06!important;letter-spacing:-.025em}
      .tp h1 em{color:var(--green)!important}
      .tp h2,.tp h3{color:var(--ink)!important}
      .tp h2{font-size:clamp(28px,3.2vw,40px)}
      .tp .hero-sub{color:var(--muted)!important;font-weight:400!important;font-size:17px!important}
      .tp .btn-primary{background:var(--green)!important;color:#fff!important;box-shadow:none!important}
      .tp .btn-primary:hover{background:var(--green-d)!important;transform:translateY(-1px)}
      .tp .btn-ghost{background:transparent!important;color:var(--ink)!important;border:none!important;border-bottom:1px solid var(--ink)!important;border-radius:0!important;padding:4px 0!important}
      .tp .btn-ghost:hover{color:var(--green)!important;border-color:var(--green)!important}
      .tp .trust-item{color:var(--muted)!important}
      .tp .trust-dot{background:var(--green)!important}
      .tp .hero-card{background:#fff!important;backdrop-filter:none!important;border:1px solid var(--line)!important;border-radius:18px!important}
      .tp .hero-card .sidebar-title{color:var(--muted)!important}
      .tp .hero-card .price-row{border-bottom:1px solid var(--line)!important}
      .tp .hero-card .price-label{color:var(--muted)!important}
      .tp .hero-card .price-val{color:var(--ink)!important}
      .tp .hero-card .price-val[style*="rgba(255"]{color:var(--muted)!important}
      .tp .hero-card .price-val.green,.tp .hero-card .price-val.accent{color:var(--green)!important}
      .tp .price-saving{background:var(--soft)!important;color:var(--green-d)!important}
      .tp .sec{background:transparent}
      .tp .sec.bg{background:var(--band)!important}
      .tp .sec.border{border-top:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important}
      .tp .sec-sub{color:var(--muted)!important;font-weight:400!important}
      .tp .prose p,.tp .prose ul li{color:#33414B!important;font-weight:400!important}
      .tp .prose ul li::before{color:var(--green)!important}
      .tp .sidebar-card{background:#fff!important;border:1px solid var(--line)!important;border-radius:16px!important}
      .tp .sidebar-card.dark{background:var(--ink)!important;border-color:transparent!important}
      .tp .sidebar-title{color:var(--muted)!important}
      .tp .sidebar-card.dark .sidebar-title{color:rgba(255,255,255,.55)!important}
      .tp .sidebar-price-row{border-bottom:1px solid var(--line)!important}
      .tp .sidebar-price-label{color:var(--muted)!important}
      .tp .sidebar-price-val{color:var(--green-d)!important}
      .tp .sidebar-price-val.uk{color:var(--muted)!important}
      .tp .btn-full.green,.tp .btn-full.blue{background:var(--green)!important;color:#fff!important}
      .tp .btn-full.green:hover,.tp .btn-full.blue:hover{background:var(--green-d)!important}
      .tp .btn-full.white,.tp .btn-full.outline{border:1px solid var(--line)!important;color:var(--green-d)!important}
      .tp .sidebar-card.dark .btn-full.white,.tp .sidebar-card.dark .btn-full.outline{background:transparent!important;color:#fff!important;border:1px solid rgba(255,255,255,.4)!important}
      .tp .process-grid::before{background:var(--line)!important}
      .tp .proc-circle,.tp .step-circle{background:var(--green)!important;box-shadow:none!important}
      .tp .proc-t{color:var(--ink)!important}
      .tp .proc-d{color:var(--muted)!important}
      .tp .faq-list{border:1px solid var(--line)!important;background:#fff}
      .tp .faq-item{border-bottom:1px solid var(--line)!important}
      .tp .faq-q{background:#fff!important;color:var(--ink)!important}
      .tp .faq-q:hover{background:var(--bg)!important}
      .tp .faq-a{color:var(--muted)!important;font-weight:400!important}
      .tp .treatment-table th{color:var(--muted)!important;background:var(--bg)!important}
      .tp .td-ist{color:var(--green-d)!important}
      .tp .td-uk{color:var(--muted)!important}
      .tp .saving{background:var(--soft)!important;color:var(--green-d)!important}
      .tp .check-dot{background:var(--green)!important}
      .tp .cta-box,.tp .cta-card{background:var(--ink)!important;border-radius:22px}
      .tp .cta-strip{background:#fff!important;border:1px solid var(--line)!important}
      .tp .disclaimer{background:var(--band)!important;border:1px solid var(--line)!important;color:var(--muted)!important;border-radius:14px!important;font-size:14px!important}
      .tp .disclaimer strong{color:var(--ink)!important;margin-right:.3em}
      .tp .hero-stat-n{color:var(--green)!important}
      .tp .hero-stat-l{color:var(--muted)!important}
      .tp .btn-wa{background:var(--green)!important;color:#fff!important}
      .tp .btn-wa:hover{background:var(--green-d)!important}
      .tp footer{background:var(--ink)!important}
      .tp .footer-legal{color:rgba(255,255,255,.55)!important}
      .tp .footer-legal em{color:rgba(255,255,255,.4)!important}
      .tp .footer-legal a{color:rgba(255,255,255,.75)!important}
      @media(max-width:900px){.tp .hero{padding:48px 0 48px!important}}
    `}</style>
  )
}
