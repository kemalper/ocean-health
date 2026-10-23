import type { Metadata } from 'next'
import { Suspense } from 'react'
import Nav from '@/app/components/Nav'
import RecordsForm from './RecordsForm'

export const metadata: Metadata = {
  title: 'Send Your Details for Review | Ocean Health & Travel',
  description: 'Send your details, photos and medical records for review and an itemised quote from our partner hospitals in Istanbul.',
  alternates: { canonical: '/records-review' },
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <div style={{ background: '#FAF8F4', minHeight: '100vh', color: '#12202B', fontFamily: "'Inter',sans-serif" }}>
      <Nav />
      <main style={{ maxWidth: 940, margin: '0 auto', padding: '56px 1.25rem 80px' }}>
        <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#0B6B55', fontWeight: 600, marginBottom: '1rem' }}>Free records review</div>
        <h1 style={{ fontFamily: "'DM Serif Display',serif", fontWeight: 400, fontSize: 'clamp(32px,4vw,48px)', lineHeight: 1.1, margin: '0 0 1rem' }}>
          Send your details for review.
        </h1>
        <p style={{ color: '#5B6770', fontSize: 17, maxWidth: 680, margin: '0 0 2rem' }}>
          Tell us what you are considering and upload any photos or records you have. We pass them to the treating team and come back with their view and an itemised quote. This takes about three minutes and is not a medical consultation.
        </p>
        <Suspense fallback={null}>
          <RecordsForm />
        </Suspense>
      </main>
    </div>
  )
}
