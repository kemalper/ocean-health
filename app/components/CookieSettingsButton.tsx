'use client'

export default function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event('oht-cookie-reopen'))}
      style={{ background: 'none', border: 'none', padding: '.3rem 0', font: 'inherit', fontSize: 14, color: 'inherit', cursor: 'pointer', textAlign: 'left' }}
    >
      Cookie settings
    </button>
  )
}
