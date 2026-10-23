'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const NUMBER = '447441904858'

function messageFor(pathname: string) {
  const m = pathname.match(/^\/treatments\/([^/]+)$/)
  if (m && m[1] !== 'dbs-assessment') {
    const name = m[1].replace(/-(istanbul|turkey)$/, '').replace(/-/g, ' ')
    return `Hello, I'd like to enquire about ${name} in Istanbul`
  }
  return "Hello, I'd like to enquire about treatment coordination"
}

export default function FloatingWhatsApp() {
  const pathname = usePathname() || '/'
  const [show, setShow] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // The SurgiCheck host and the DBS intake form have their own contact routes
    setHidden(window.location.hostname.includes('surgicheck') || pathname.startsWith('/treatments/dbs-assessment'))
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  if (hidden) return null
  const href = `https://wa.me/${NUMBER}?text=${encodeURIComponent(messageFor(pathname))}`
  return (
    <>
      <style>{`
        .wa-float{position:fixed;right:18px;bottom:18px;z-index:60;display:inline-flex;align-items:center;gap:8px;background:#0B6B55;color:#fff;border-radius:999px;padding:12px 18px;font:600 14px 'Inter',sans-serif;text-decoration:none;box-shadow:0 8px 24px rgba(11,107,85,.35);transition:opacity .25s,transform .25s,background .2s}
        .wa-float:hover{background:#08503F}
        .wa-float.off{opacity:0;transform:translateY(12px);pointer-events:none}
        .wa-float svg{width:20px;height:20px;fill:currentColor;flex:none}
        @media(max-width:600px){.wa-float{right:12px;bottom:12px;padding:12px}.wa-float span{display:none}}
        @media print{.wa-float{display:none}}
      `}</style>
      <a href={href} target="_blank" rel="noopener noreferrer" className={`wa-float${show ? '' : ' off'}`} aria-label="Chat with us on WhatsApp" tabIndex={show ? 0 : -1}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.93 9.93 0 0 0-8.5 15.07L2 22l5.07-1.5A9.94 9.94 0 1 0 12.04 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3 .88.9-2.93-.2-.31A8.1 8.1 0 1 1 12.04 20.1Zm4.45-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"/></svg>
        <span>WhatsApp</span>
      </a>
    </>
  )
}
