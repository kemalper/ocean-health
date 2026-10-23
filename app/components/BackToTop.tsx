'use client'

import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 1200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <>
      <style>{`
        .btt{position:fixed;right:18px;bottom:76px;z-index:59;width:44px;height:44px;border-radius:50%;border:1px solid #E6E0D4;background:#fff;color:#0B6B55;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 6px 18px rgba(18,32,43,.12);transition:opacity .25s,transform .25s,background .2s}
        .btt:hover{background:#E3F0EA}
        .btt.off{opacity:0;transform:translateY(12px);pointer-events:none}
        .btt svg{width:20px;height:20px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
        @media(max-width:600px){.btt{right:12px;bottom:70px}}
        @media print{.btt{display:none}}
      `}</style>
      <button type="button" onClick={go} className={`btt${show ? '' : ' off'}`} aria-label="Back to top" tabIndex={show ? 0 : -1}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
      </button>
    </>
  )
}
