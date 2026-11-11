'use client'
import { useEffect, useState } from 'react'

const DUR = 5000
const STEPS: [string, string][] = [
  ['Tell us what you need', 'Message us on WhatsApp or send your details. Records and photos help, and can follow later.'],
  ['Your records are reviewed', 'We pass them to the treating team, who review your case, and we come back to you with their view.'],
  ['We aim to quote within 48 hours', 'Once we have your information. Hospital and surgeon are confirmed in writing before you pay.'],
  ['Travel and treatment', 'Hotel, transfers and an interpreter are arranged. Treatment dates vary by treatment and provider.'],
  ['Recovery and follow-up', 'English discharge documents go to your GP on request, and we help you stay in touch with the hospital.'],
]

const sd = (d: string) => ({ '--d': d }) as React.CSSProperties
const G = '#0559F0'

export default function HeroProcess() {
  const [cur, setCur] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [epoch, setEpoch] = useState(0)

  useEffect(() => {
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPaused(true)
    } catch {}
    const onVis = () => { setHidden(document.hidden); setEpoch(e => e + 1) }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [])

  useEffect(() => {
    if (paused || hover || hidden) return
    const t = setTimeout(() => { setCur(c => (c + 1) % STEPS.length); setEpoch(e => e + 1) }, DUR)
    return () => clearTimeout(t)
  }, [cur, paused, hover, hidden, epoch])

  const go = (i: number) => { setCur(i); setEpoch(e => e + 1) }
  const togglePause = () => { setPaused(p => !p); setEpoch(e => e + 1) }
  const stopped = paused || hover

  return (
    <div
      className={`hp${stopped ? ' paused' : ''}`}
      role="group"
      aria-label="How it works in five steps"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setEpoch(e => e + 1) }}
      style={{ '--dur': `${DUR}ms` } as React.CSSProperties}
    >
      <style>{CSS}</style>
      <div className="hp-top">
        <span>Step <b>{cur + 1}</b> of {STEPS.length}</span>
        <button type="button" className="hp-pause" onClick={togglePause} aria-label={paused ? 'Play animation' : 'Pause animation'}>
          {paused ? '▶' : '❚❚'}
        </button>
      </div>

      <div className="hp-stage" aria-hidden="true">
        {/* 1 enquiry */}
        <div className={`scene${cur === 0 ? ' on' : ''}`}><svg viewBox="0 0 400 240" fill="none">
          <g className="a" style={sd('.2s')}><rect x="150" y="30" width="215" height="52" rx="16" fill={G} /><text className="t" x="168" y="52" fill="#fff" fontSize="13">Hello, I&apos;d like a quote for</text><text className="t" x="168" y="70" fill="#fff" fontSize="13" fontWeight="600">a tummy tuck in Istanbul</text></g>
          <g className="a" style={sd('1.1s')}><rect x="35" y="100" width="215" height="52" rx="16" fill="#fff" stroke="#DCE6F5" /><text className="t" x="53" y="122" fill="#14213D" fontSize="13">Hello! Tell us what you need.</text><text className="t" x="53" y="140" fill="#475569" fontSize="12">Records and photos can follow.</text></g>
          <g className="a" style={sd('2s')}><rect x="35" y="172" width="64" height="32" rx="16" fill="#fff" stroke="#DCE6F5" /><circle cx="55" cy="188" r="4" fill="#475569" /><circle cx="67" cy="188" r="4" fill="#475569" /><circle cx="79" cy="188" r="4" fill="#475569" /></g>
        </svg></div>

        {/* 2 records */}
        <div className={`scene${cur === 1 ? ' on' : ''}`}><svg viewBox="0 0 400 240" fill="none">
          <g transform="translate(8,0)">
            <g className="slide" style={sd('.1s')}><rect x="28" y="40" width="92" height="54" rx="8" fill="#fff" stroke="#DCE6F5" /><rect x="40" y="54" width="40" height="5" rx="2" fill="#DCE6F5" /><rect x="40" y="66" width="50" height="5" rx="2" fill="#DCE6F5" /><text className="t" x="40" y="86" fontSize="10" fill={G} fontWeight="600">Reports</text></g>
            <g className="slide" style={sd('.4s')}><rect x="28" y="104" width="92" height="54" rx="8" fill="#fff" stroke="#DCE6F5" /><rect x="40" y="118" width="50" height="22" rx="4" fill="#E6EFFE" /><text className="t" x="40" y="152" fontSize="10" fill={G} fontWeight="600">Photos</text></g>
            <g className="slide" style={sd('.7s')}><rect x="28" y="168" width="92" height="54" rx="8" fill="#fff" stroke="#DCE6F5" /><rect x="40" y="182" width="40" height="5" rx="2" fill="#DCE6F5" /><rect x="40" y="194" width="50" height="5" rx="2" fill="#DCE6F5" /><text className="t" x="40" y="214" fontSize="10" fill={G} fontWeight="600">MRI / letters</text></g>
          </g>
          <path className="draw" d="M138 132 H236" stroke={G} strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: '.9s' }} />
          <path className="a" d="M230 124 L242 132 L230 140" stroke={G} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={sd('1.8s')} />
          <g className="a" style={sd('1.6s')}><circle cx="305" cy="132" r="56" fill="#fff" stroke="#DCE6F5" /><circle cx="305" cy="132" r="40" fill="#E6EFFE" />
            <path className="tick" d="M287 133 L300 146 L325 118" stroke={G} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" style={sd('2.2s')} /></g>
          <text className="t a" x="305" y="210" textAnchor="middle" fontSize="13" fill="#14213D" fontWeight="600" style={sd('2.4s')}>Treating team</text>
        </svg></div>

        {/* 3 quote */}
        <div className={`scene${cur === 2 ? ' on' : ''}`}><svg viewBox="0 0 400 240" fill="none">
          <g className="a" style={sd('.1s')}><rect x="80" y="20" width="240" height="200" rx="14" fill="#fff" stroke="#DCE6F5" />
            <text className="t" x="102" y="52" fontSize="15" fontWeight="700" fill="#14213D">Itemised quote</text>
            <rect x="248" y="34" width="52" height="24" rx="12" fill="#E6EFFE" /><text className="t" x="274" y="50" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0438A6">Quote</text></g>
          <g className="a" style={sd('.7s')}><text className="t" x="102" y="94" fontSize="13" fill="#14213D">Surgeon and hospital</text><path className="tick" d="M280 90 L286 96 L298 82" stroke={G} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={sd('.9s')} /></g>
          <g className="a" style={sd('1.3s')}><text className="t" x="102" y="126" fontSize="13" fill="#14213D">Hotel and transfers</text><path className="tick" d="M280 122 L286 128 L298 114" stroke={G} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={sd('1.5s')} /></g>
          <g className="a" style={sd('1.9s')}><text className="t" x="102" y="158" fontSize="13" fill="#14213D">Interpreter</text><path className="tick" d="M280 154 L286 160 L298 146" stroke={G} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={sd('2.1s')} /></g>
          <g className="a" style={sd('2.6s')}><line x1="102" y1="176" x2="298" y2="176" stroke="#DCE6F5" /><text className="t" x="102" y="203" fontSize="13" fontWeight="600" fill="#0438A6">Fixed before you travel</text></g>
        </svg></div>

        {/* 4 travel */}
        <div className={`scene${cur === 3 ? ' on' : ''}`}><svg viewBox="0 0 400 240" fill="none"><g transform="translate(0,-18)">
          <path className="draw" d="M50 170 Q200 40 350 90" stroke={G} strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="50" cy="170" r="6" fill={G} /><text className="t" x="50" y="194" textAnchor="middle" fontSize="12" fill="#475569">London</text>
          <circle cx="350" cy="90" r="6" fill={G} /><text className="t" x="350" y="114" textAnchor="middle" fontSize="12" fill="#475569">Istanbul</text>
          <g className="plane"><path d="M13 0 L-11 -8 L-5 0 L-11 8 Z" fill={G} /></g></g>
          <g className="a" style={sd('2.2s')}><rect x="40" y="206" width="84" height="26" rx="13" fill="#fff" stroke="#DCE6F5" /><text className="t" x="82" y="223" textAnchor="middle" fontSize="12" fill="#14213D">Hotel</text></g>
          <g className="a" style={sd('2.5s')}><rect x="158" y="206" width="84" height="26" rx="13" fill="#fff" stroke="#DCE6F5" /><text className="t" x="200" y="223" textAnchor="middle" fontSize="12" fill="#14213D">Transfers</text></g>
          <g className="a" style={sd('2.8s')}><rect x="276" y="206" width="84" height="26" rx="13" fill="#fff" stroke="#DCE6F5" /><text className="t" x="318" y="223" textAnchor="middle" fontSize="12" fill="#14213D">Interpreter</text></g>
        </svg></div>

        {/* 5 recovery */}
        <div className={`scene${cur === 4 ? ' on' : ''}`}><svg viewBox="0 0 400 240" fill="none">
          <g className="a" style={sd('.1s')}><rect x="28" y="40" width="172" height="150" rx="12" fill="#fff" stroke="#DCE6F5" />
            <text className="t" x="46" y="68" fontSize="13" fontWeight="700" fill="#14213D">Discharge summary</text>
            <rect x="46" y="82" width="120" height="5" rx="2" fill="#DCE6F5" /><rect x="46" y="96" width="96" height="5" rx="2" fill="#DCE6F5" /><rect x="46" y="110" width="108" height="5" rx="2" fill="#DCE6F5" />
            <text className="t" x="46" y="148" fontSize="12" fill="#475569">In English</text>
            <path className="tick" d="M152 150 L162 160 L180 138" stroke={G} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={sd('.9s')} /></g>
          <path className="draw" d="M212 115 H262" stroke={G} strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: '1.1s' }} />
          <path className="a" d="M256 107 L268 115 L256 123" stroke={G} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={sd('1.9s')} />
          <g className="a" style={sd('1.9s')}><circle cx="326" cy="115" r="46" fill="#E6EFFE" /><path d="M326 92 V138 M303 115 H349" stroke={G} strokeWidth="9" strokeLinecap="round" /><text className="t" x="326" y="195" textAnchor="middle" fontSize="13" fontWeight="600" fill="#14213D">Your UK GP</text></g>
        </svg></div>
      </div>

      <div className="hp-copy" aria-live="polite">
        <h3>{STEPS[cur][0]}</h3>
        <p>{STEPS[cur][1]}</p>
      </div>

      <div className="hp-dots">
        {STEPS.map((s, i) => (
          <button key={s[0]} type="button" className={`hp-dot${i < cur ? ' done' : ''}${i === cur ? ' cur' : ''}`} aria-label={`Step ${i + 1}: ${s[0]}`} aria-current={i === cur ? 'step' : undefined} onClick={() => go(i)}>
            <i key={i === cur ? `c${epoch}` : `s${i}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

const CSS = `
.hp{position:relative;border-radius:12px;overflow:hidden;aspect-ratio:1/1;background:#fff;border:1px solid #DCE6F5;display:flex;flex-direction:column;font-family:'Inter',sans-serif;color:#14213D}
.hp *{box-sizing:border-box}
.hp-top{display:flex;justify-content:space-between;align-items:center;padding:14px 20px 0;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#475569}
.hp-top b{color:#0559F0;font-weight:700}
.hp-pause{border:1px solid #DCE6F5;background:#fff;border-radius:99px;width:30px;height:30px;cursor:pointer;color:#14213D;font-size:11px;line-height:1;padding:0}
.hp-pause:hover{border-color:#0559F0;color:#0559F0}
.hp-stage{position:relative;flex:1;min-height:0;margin:8px 20px 0;background:linear-gradient(180deg,#F7F4EC,#F3F7FE);border-radius:10px;overflow:hidden}
.hp .scene{position:absolute;inset:0;opacity:0;transition:opacity .45s;display:flex;align-items:center;justify-content:center;pointer-events:none}
.hp .scene.on{opacity:1}
.hp .scene svg{width:100%;height:100%}
.hp-copy{padding:18px 20px 6px;min-height:118px}
.hp-copy h3{font-family:'DM Serif Display',serif;font-weight:400;font-size:24px;line-height:1.15;margin:0 0 6px;letter-spacing:-.01em;color:#14213D}
.hp-copy p{margin:0;font-size:14.5px;color:#475569;line-height:1.5}
.hp-dots{display:flex;gap:6px;padding:8px 20px 18px}
.hp-dot{flex:1;height:22px;border:0;background:none;cursor:pointer;padding:9px 0;position:relative}
.hp-dot::before{content:'';position:absolute;left:0;right:0;top:9px;height:4px;border-radius:4px;background:#DCE6F5}
.hp-dot i{position:absolute;left:0;top:9px;height:4px;border-radius:4px;background:#0559F0;width:0}
.hp-dot.done i{width:100%}
.hp-dot.cur i{animation:hpfill var(--dur,5s) linear forwards}
.hp.paused .hp-dot.cur i{animation-play-state:paused}
.hp-dot:focus-visible,.hp-pause:focus-visible{outline:2px solid #0559F0;outline-offset:2px}
@keyframes hpfill{to{width:100%}}
.hp .scene .a{opacity:0}
.hp .scene.on .a{animation:hppop .5s cubic-bezier(.2,.8,.2,1) both;animation-delay:var(--d,0s)}
@keyframes hppop{from{opacity:0;transform:translateY(10px) scale(.96)}to{opacity:1;transform:none}}
.hp .scene .slide{opacity:0}
.hp .scene.on .slide{animation:hpslide 1s cubic-bezier(.3,.7,.2,1) both;animation-delay:var(--d,0s)}
@keyframes hpslide{from{opacity:0;transform:translateX(-60px)}to{opacity:1;transform:none}}
.hp .scene.on .draw{stroke-dasharray:6 7;animation:hpdash 1.2s linear both}
@keyframes hpdash{from{stroke-dashoffset:60;opacity:0}to{stroke-dashoffset:0;opacity:1}}
.hp .scene .plane{opacity:0}
.hp .scene.on .plane{animation:hpfly 3.6s cubic-bezier(.45,.05,.4,1) .3s both}
@keyframes hpfly{0%{transform:translate(50px,170px) rotate(-41deg);opacity:0}8%{opacity:1}50%{transform:translate(200px,85px) rotate(-15deg)}100%{transform:translate(350px,90px) rotate(18deg);opacity:1}}
.hp .scene .tick{stroke-dasharray:70;stroke-dashoffset:70}
.hp .scene.on .tick{animation:hptick .45s ease-out both;animation-delay:var(--d,0s)}
@keyframes hptick{from{stroke-dashoffset:70}to{stroke-dashoffset:0}}
.hp .scene .t{font-family:'Inter',system-ui,sans-serif}
@media(prefers-reduced-motion:reduce){
  .hp .scene{transition:none}
  .hp .scene.on .a,.hp .scene.on .slide,.hp .scene.on .draw,.hp .scene.on .plane,.hp .scene.on .tick{animation:none;opacity:1;transform:none}
  .hp .scene.on .plane{transform:translate(350px,90px) rotate(18deg)}
  .hp .scene .tick{stroke-dashoffset:0}
  .hp-dot.cur i{animation:none;width:100%}
}
@media(max-width:900px){.hp{aspect-ratio:auto}.hp-stage{flex:none;aspect-ratio:5/3}.hp-copy{min-height:112px}.hp .scene svg{transform:scale(1.06)}}
`
