export default function YourTimeline({ stay, note }: { stay?: string; note?: string }) {
  const items: [string, string][] = [
    ['Within 48 hours', 'Itemised quote, once we have your complete records or photographs.'],
    ['Usually within 2 weeks of confirming', note ?? 'Your treatment date, subject to the surgeon and hospital availability.'],
    ['Arrival', 'Airport transfer, hotel, and your meeting with the treating team before the procedure.'],
    [stay ?? 'In Istanbul', 'The treatment and post-treatment checks. Your doctor confirms when you are fit to fly.'],
    ['At home', "Follow your doctor's guidance on activity, work and exercise. English-language documents go to your GP on request."],
  ]
  return (
    <section className="yt">
      <style>{`
        .yt{background:#FAF8F4;padding:56px 0;font-family:'Inter',sans-serif;color:#12202B}
        .yt .yt-in{max-width:900px;margin:0 auto;padding:0 2.5rem}
        .yt h2{font-family:'DM Serif Display',serif;font-weight:400;font-size:clamp(24px,3vw,32px);letter-spacing:-.02em;margin:0 0 1rem}
        .yt ol{list-style:none;margin:0;padding:0;border-left:2px solid #0B6B55}
        .yt li{padding:.15rem 0 .95rem 1.25rem;margin:0;font-size:15px;line-height:1.55}
        .yt b{display:block;font-weight:600}
        .yt span{color:#5B6770;font-size:14.5px}
        @media(max-width:900px){.yt .yt-in{padding:0 1.25rem}.yt{padding:40px 0}}
      `}</style>
      <div className="yt-in">
        <h2>Your timeline</h2>
        <ol>{items.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}</ol>
      </div>
    </section>
  )
}
