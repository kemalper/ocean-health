'use client'
import { useEffect, useState, useSyncExternalStore } from 'react'
import Script from 'next/script'
import Link from 'next/link'

const GA_ID = 'G-92GMNGS0XF'
const KEY = 'oht-cookie-consent'
const REOPEN = 'oht-cookie-reopen'

type Choice = 'granted' | 'denied' | null

const listeners = new Set<() => void>()
let memory: Choice = null // fallback when localStorage is unavailable

function read(): Choice {
  try {
    const v = window.localStorage.getItem(KEY)
    if (v === 'granted' || v === 'denied') return v
  } catch { /* storage blocked: fall back to this page view only */ }
  return memory
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  window.addEventListener('storage', cb)
  return () => { listeners.delete(cb); window.removeEventListener('storage', cb) }
}

// 'ssr' = not yet known on the server / during hydration: render nothing.
const getServerSnapshot = (): Choice | 'ssr' => 'ssr'

export default function CookieConsent() {
  const choice = useSyncExternalStore<Choice | 'ssr'>(subscribe, read, getServerSnapshot)
  const [reopened, setReopened] = useState(false)

  useEffect(() => {
    const reopen = () => setReopened(true)
    window.addEventListener(REOPEN, reopen)
    return () => window.removeEventListener(REOPEN, reopen)
  }, [])

  function decide(c: 'granted' | 'denied') {
    memory = c
    try { window.localStorage.setItem(KEY, c) } catch { /* storage unavailable */ }
    listeners.forEach(l => l())
    setReopened(false)
  }

  if (choice === 'ssr') return null
  const open = choice === null || reopened

  const btn: React.CSSProperties = { minHeight: 44, padding: '0 20px', borderRadius: 10, fontSize: 15, fontWeight: 600, cursor: 'pointer', border: '2px solid #0559F0', background: '#fff', color: '#0559F0', fontFamily: 'inherit' }

  return (
    <>
      {choice === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}
      {open && (
        <div role="dialog" aria-modal="false" aria-label="Cookie preferences" style={{ position: 'fixed', left: 12, right: 12, bottom: 12, zIndex: 2000, maxWidth: 720, margin: '0 auto', background: '#fff', color: '#14213D', border: '1px solid #DCE6F5', borderRadius: 16, boxShadow: '0 12px 40px -10px rgba(10,33,80,.35)', padding: '1.1rem 1.25rem', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
          <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: '.85rem' }}>
            We use optional analytics cookies to understand how the site is used. They are off unless you accept. See our <Link href="/cookie-policy" style={{ color: '#0559F0', textDecoration: 'underline' }}>cookie policy</Link>.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <button type="button" style={btn} onClick={() => decide('granted')}>Accept analytics</button>
            <button type="button" style={btn} onClick={() => decide('denied')}>Reject</button>
          </div>
        </div>
      )}
    </>
  )
}
