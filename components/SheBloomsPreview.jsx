import { useState } from "react";

const P = {
  cream: "#F7F2EB",
  deepCream: "#EFE7DA",
  ink: "#141414",
  dustRose: "#C49A8A",
  sage: "#7A9478",
  mauve: "#9B7B8A",
  slate: "#2C3A47",
  charcoal: "#1E2830",
  gold: "#B8956A",
  palePink: "#EDE0D8",
  border: "#D3C4BA",
  faint: "#E6DDD4",
  offwhite: "#FAF7F3",
};

// ─── REPLACE WITH YOUR ACTUAL ETSY LISTING URL ───
const ETSY_URL = "https://www.etsy.com/listing/4522944023/she-blooms-90-day-reset-journal";

// ─── BOTANICAL SVGs ───────────────────────────────────────────────
const BotanicalCorner = ({ color = P.dustRose, flip = false, size = 140, opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 140 140"
    style={{ opacity, transform: flip ? "scale(-1,-1)" : "none", display:"block" }}>
    <path d="M20 130 Q30 90 50 70 Q70 50 90 20" stroke={color} strokeWidth="1.1" fill="none" strokeOpacity="0.5"/>
    <path d="M20 130 Q22 100 12 80" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.38"/>
    <path d="M34 104 Q18 93 8 86" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.38"/>
    <path d="M52 82 Q62 72 74 58" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.38"/>
    <ellipse cx="88" cy="22" rx="7" ry="11" transform="rotate(-30 88 22)" fill={color} fillOpacity="0.32"/>
    <ellipse cx="72" cy="38" rx="6" ry="10" transform="rotate(-50 72 38)" fill={color} fillOpacity="0.26"/>
    <ellipse cx="10" cy="82" rx="6" ry="9" transform="rotate(20 10 82)" fill={color} fillOpacity="0.26"/>
    <ellipse cx="7" cy="97" rx="5" ry="8" transform="rotate(10 7 97)" fill={color} fillOpacity="0.2"/>
    <ellipse cx="56" cy="76" rx="5" ry="8" transform="rotate(-70 56 76)" fill={color} fillOpacity="0.2"/>
    <circle cx="90" cy="20" r="2.5" fill={color} fillOpacity="0.5"/>
    <circle cx="11" cy="81" r="1.8" fill={color} fillOpacity="0.42"/>
  </svg>
);

// ─── FREE PREVIEW CONTENT (7 days + 1 chapter, then paywall) ─────
const pages = [
  { id: "cover", type: "cover" },

  { id: "ch1-open", type: "chapter-open", num: "One",
    title: "The Woman You Settled Into",
    subtitle: "Free Preview — Chapter One",
    quote: "She didn't fall apart. She just slowly agreed to become less.",
    color: P.dustRose },

  { id: "ch1-read", type: "read", chapterNum: "One",
    body: [
      "There is a particular kind of disappearing that requires no catastrophe. No dramatic exit. Just a series of small permissions — the career paused, the opinion softened, the ambition quietly folded and placed somewhere unreachable. You told yourself it was temporary. You were not entirely wrong. But sacrifice and dissolution are not the same thing, and somewhere in the years of choosing others first, you may have forgotten which parts of yourself you were merely setting aside and which parts you were actually surrendering.",
      "The women who lose themselves rarely lose themselves all at once. It happens the way water shapes stone — slowly, through the persistent pressure of small moments. Each one reasonable. Each one, in aggregate, a slow erosion.",
    ],
    pull: "The extraordinary woman does not use love as a reason to stop becoming.",
    locked: "This chapter continues in the full book — three more chapters, four pillars to live by, and a closing letter to the woman you're becoming.",
  },

  { id: "daily-intro", type: "daily-intro" },

  { id: "day1", type: "daily", day: 1 },
  { id: "day2", type: "daily", day: 2 },
  { id: "day3", type: "daily", day: 3 },
  { id: "day4", type: "daily", day: 4 },
  { id: "day5", type: "daily", day: 5 },
  { id: "day6", type: "daily", day: 6 },

  { id: "milestone7", type: "milestone", day: 7,
    title: "You started.",
    body: "Seven days ago you made a decision. You kept it. That is the whole game — not perfection, just showing up again tomorrow.",
  },

  { id: "paywall", type: "paywall" },
];

const MORNING_PROMPTS = [
  "Today I am choosing to feel:",
  "One thing I will protect my energy from today:",
  "The most important thing I will do today (just one):",
];
const EVENING_PROMPTS = [
  "One honest thing about today:",
  "Something I did for myself today:",
  "Tomorrow I will:",
];

export default function SheBloomsPreview() {
  const [idx, setIdx] = useState(0);
  const [fade, setFade] = useState(true);

  const page = pages[idx];
  const total = pages.length;

  const go = (d) => {
    setFade(false);
    setTimeout(() => {
      setIdx((i) => Math.max(0, Math.min(total - 1, i + d)));
      setFade(true);
    }, 200);
  };
  const goTo = (i) => {
    setFade(false);
    setTimeout(() => { setIdx(i); setFade(true); }, 200);
  };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=EB+Garamond:ital,wght@0,400;1,400&family=Jost:wght@300;400;500&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    body{background:#18181A;}
    .wrap{min-height:100vh;background:linear-gradient(160deg,#18181A,#1f1f22);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 16px;font-family:'EB Garamond',Georgia,serif;}
    .topbar{width:100%;max-width:640px;display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;padding:0 4px;}
    .topbar-brand{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.1rem;color:#D8CFC2;}
    .topbar-badge{font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:${P.dustRose};border:1px solid ${P.dustRose};padding:5px 12px;border-radius:20px;}
    .book{width:100%;max-width:640px;background:${P.cream};box-shadow:-6px 0 16px rgba(0,0,0,.38),10px 4px 40px rgba(0,0,0,.55),inset 4px 0 10px rgba(0,0,0,.09);position:relative;opacity:${fade?1:0};transition:opacity .2s ease;}
    .spine{position:absolute;left:0;top:0;bottom:0;width:14px;background:linear-gradient(90deg,rgba(0,0,0,.16),transparent);z-index:9;pointer-events:none;}
    .inner{padding:48px 48px 36px 58px;min-height:74vh;position:relative;overflow:hidden;}

    .cover{min-height:74vh;background:linear-gradient(150deg,#F8F3EC 0%,#EDE0D8 45%,#DDE8DC 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:48px 36px;position:relative;overflow:hidden;}
    .cover-tag{font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.26em;text-transform:uppercase;color:${P.dustRose};margin-bottom:18px;}
    .cover-title{font-family:'Cormorant Garamond',serif;font-size:3.6rem;font-weight:300;color:${P.slate};letter-spacing:.03em;line-height:1;}
    .cover-title em{font-style:italic;color:${P.dustRose};}
    .cover-rule{width:56px;height:1px;background:${P.dustRose};margin:18px auto;}
    .cover-promise{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.15rem;color:${P.slate};margin-bottom:10px;}
    .cover-sub{font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.14em;color:${P.mauve};line-height:1.8;max-width:340px;}

    .ch-open{min-height:74vh;display:flex;flex-direction:column;justify-content:center;padding:52px 48px;position:relative;overflow:hidden;}
    .ch-num-label{font-family:'Jost',sans-serif;font-size:.56rem;letter-spacing:.26em;text-transform:uppercase;color:${P.border};margin-bottom:6px;}
    .ch-free-badge{display:inline-block;font-family:'Jost',sans-serif;font-size:.55rem;letter-spacing:.16em;text-transform:uppercase;color:${P.sage};background:${P.faint};padding:4px 10px;border-radius:12px;margin-bottom:14px;}
    .ch-big-num{font-family:'Cormorant Garamond',serif;font-size:6rem;font-weight:300;line-height:.85;color:${P.faint};margin-bottom:-4px;}
    .ch-title{font-family:'Cormorant Garamond',serif;font-size:2.1rem;font-weight:400;color:${P.slate};line-height:1.15;margin-bottom:24px;}
    .ch-quote-block{border-left:2px solid ${P.dustRose};padding:10px 18px;}
    .ch-quote{font-family:'EB Garamond',serif;font-size:.95rem;font-style:italic;color:${P.ink};line-height:1.7;}

    .eyebrow{font-family:'Jost',sans-serif;font-size:.55rem;letter-spacing:.22em;text-transform:uppercase;color:${P.dustRose};margin-bottom:6px;}
    .rule{width:100%;height:1px;background:linear-gradient(90deg,${P.border},transparent);margin:16px 0 18px;}
    .body-p{font-family:'EB Garamond',serif;font-size:.92rem;line-height:1.9;color:${P.ink};margin-bottom:15px;}
    .pull{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-style:italic;color:${P.slate};line-height:1.4;margin:22px 0;padding:14px 0;border-top:1px solid ${P.border};border-bottom:1px solid ${P.border};text-align:center;}
    .lock-box{margin-top:22px;background:${P.charcoal};padding:18px 20px;display:flex;gap:12px;align-items:flex-start;}
    .lock-icon{font-size:18px;color:${P.dustRose};flex-shrink:0;margin-top:1px;}
    .lock-text{font-family:'EB Garamond',serif;font-style:italic;font-size:.85rem;color:#D8CFC2;line-height:1.7;}

    .daily-intro-wrap{min-height:74vh;display:flex;flex-direction:column;justify-content:center;padding:52px 48px;}
    .di-eyebrow{font-family:'Jost',sans-serif;font-size:.56rem;letter-spacing:.24em;text-transform:uppercase;color:${P.dustRose};margin-bottom:12px;}
    .di-title{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:300;color:${P.slate};margin-bottom:18px;line-height:1.25;}
    .di-body{font-family:'EB Garamond',serif;font-size:.92rem;line-height:1.85;color:${P.ink};margin-bottom:14px;}

    .daily-wrap{position:relative;}
    .daily-day-badge{font-family:'Jost',sans-serif;font-size:.55rem;letter-spacing:.2em;color:${P.dustRose};text-transform:uppercase;margin-bottom:4px;}
    .daily-ghost{position:absolute;top:0;right:0;font-family:'Cormorant Garamond',serif;font-style:italic;font-size:5.5rem;color:#F0EBE4;line-height:1;}
    .daily-date{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1.05rem;color:${P.slate};margin-bottom:4px;}
    .daily-section-label{font-family:'Jost',sans-serif;font-size:.62rem;letter-spacing:.2em;margin:16px 0 6px;}
    .daily-prompt{font-family:'EB Garamond',serif;font-style:italic;font-size:.85rem;color:${P.mauve};margin-bottom:6px;}
    .daily-line{height:1px;margin-bottom:14px;}
    .daily-footer{font-family:'EB Garamond',serif;font-style:italic;font-size:.8rem;color:#6B5D52;margin-top:6px;}

    .milestone{min-height:74vh;background:${P.charcoal};display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:48px;position:relative;overflow:hidden;}
    .ms-label{font-family:'Jost',sans-serif;font-size:.55rem;letter-spacing:.26em;text-transform:uppercase;color:${P.dustRose};margin-bottom:30px;}
    .ms-num{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:4.5rem;color:#2A3640;line-height:1;margin-bottom:18px;}
    .ms-title{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:1.7rem;color:${P.offwhite};margin-bottom:10px;}
    .ms-rule{width:36px;height:1px;background:${P.dustRose};margin:0 auto 20px;}
    .ms-body{font-family:'EB Garamond',serif;font-size:.88rem;color:#C8BFB5;line-height:1.8;max-width:380px;}
    .ms-progress-label{font-family:'Jost',sans-serif;font-size:.58rem;letter-spacing:.18em;color:${P.dustRose};margin-top:30px;margin-bottom:10px;}
    .ms-bar{width:200px;height:3px;background:#3A4550;position:relative;}
    .ms-bar-fill{position:absolute;left:0;top:0;height:100%;width:7.7%;background:${P.dustRose};}

    .paywall{min-height:74vh;background:linear-gradient(160deg,${P.charcoal},#15191d);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:48px 40px;position:relative;overflow:hidden;}
    .pw-eyebrow{font-family:'Jost',sans-serif;font-size:.58rem;letter-spacing:.24em;text-transform:uppercase;color:${P.dustRose};margin-bottom:16px;}
    .pw-title{font-family:'Cormorant Garamond',serif;font-size:2.1rem;font-weight:300;color:${P.offwhite};line-height:1.2;margin-bottom:16px;}
    .pw-title em{font-style:italic;color:${P.dustRose};}
    .pw-body{font-family:'EB Garamond',serif;font-size:.9rem;color:#C8BFB5;line-height:1.85;max-width:400px;margin-bottom:28px;}
    .pw-list{text-align:left;max-width:360px;margin-bottom:30px;}
    .pw-item{display:flex;gap:10px;align-items:flex-start;margin-bottom:11px;font-family:'EB Garamond',serif;font-size:.85rem;color:#D8CFC2;line-height:1.5;}
    .pw-check{color:${P.sage};flex-shrink:0;}
    .pw-btn{display:inline-block;background:${P.dustRose};color:${P.charcoal};font-family:'Jost',sans-serif;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:15px 38px;text-decoration:none;font-weight:500;transition:opacity .2s;}
    .pw-btn:hover{opacity:.88;}
    .pw-price{font-family:'Jost',sans-serif;font-size:.62rem;color:#8A8A8A;margin-top:14px;letter-spacing:.05em;}

    .nav{display:flex;align-items:center;justify-content:space-between;padding:12px 58px 16px 58px;border-top:1px solid ${P.faint};background:${P.cream};}
    .nbtn{background:none;border:1px solid ${P.border};padding:7px 18px;font-family:'Jost',sans-serif;font-size:.56rem;letter-spacing:.18em;text-transform:uppercase;color:${P.mauve};cursor:pointer;transition:all .18s;}
    .nbtn:hover:not(:disabled){background:${P.palePink};border-color:${P.dustRose};}
    .nbtn:disabled{opacity:.27;cursor:default;}
    .ndots{display:flex;gap:5px;align-items:center;}
    .nd{width:4px;height:4px;border-radius:50%;background:${P.border};cursor:pointer;}
    .nd.a{background:${P.dustRose};width:6px;height:6px;}
    .npg{font-family:'Jost',sans-serif;font-size:.53rem;letter-spacing:.18em;color:${P.border};text-transform:uppercase;}

    @media(max-width:560px){
      .inner,.ch-open,.daily-intro-wrap{padding:34px 24px 30px 32px;}
      .nav{padding:11px 24px 14px 32px;}
      .cover-title{font-size:2.8rem;}
      .ch-title{font-size:1.7rem;}
      .pw-title{font-size:1.7rem;}
    }
  `;

  const renderDaily = (day) => (
    <div className="inner">
      <div className="daily-wrap">
        <div className="daily-ghost">{day}</div>
        <p className="daily-day-badge">Day {day} / 90 — Free Preview</p>
        <p className="daily-date">Date: ____________________</p>
        <div className="rule" />
        <p className="daily-section-label" style={{ color: P.dustRose }}>MORNING</p>
        {MORNING_PROMPTS.map((pr, i) => (
          <div key={i}>
            <p className="daily-prompt">{pr}</p>
            <div className="daily-line" style={{ background: "#A9745F", opacity: 0.5 }} />
            <div className="daily-line" style={{ background: "#A9745F", opacity: 0.5 }} />
          </div>
        ))}
        <p className="daily-section-label" style={{ color: P.sage }}>GRATITUDE × 3</p>
        {[0, 1, 2].map((i) => (
          <div key={i} className="daily-line" style={{ background: "#5E7C5C", opacity: 0.5 }} />
        ))}
        <div className="rule" style={{ borderColor: P.dustRose }} />
        <p className="daily-section-label" style={{ color: P.mauve }}>EVENING</p>
        {EVENING_PROMPTS.map((pr, i) => (
          <div key={i}>
            <p className="daily-prompt">{pr}</p>
            <div className="daily-line" style={{ background: "#79566A", opacity: 0.5 }} />
            <div className="daily-line" style={{ background: "#79566A", opacity: 0.5 }} />
          </div>
        ))}
        <p className="daily-footer">Energy today: ○ 1 ○ 2 ○ 3 ○ 4 ○ 5</p>
        <p className="daily-footer">I showed up for myself today: ○ Yes ○ Somewhat ○ Not yet</p>
      </div>
    </div>
  );

  const renderPage = () => {
    if (page.type === "cover") return (
      <div className="cover">
        <div style={{ position: "absolute", top: -10, left: 10, opacity: 0.22 }}>
          <BotanicalCorner color={P.dustRose} size={140} />
        </div>
        <div style={{ position: "absolute", bottom: -10, right: 10, opacity: 0.18 }}>
          <BotanicalCorner color={P.sage} size={130} flip />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <p className="cover-tag">Free 7-Day Preview</p>
          <h1 className="cover-title">She<br /><em>Blooms</em></h1>
          <div className="cover-rule" />
          <p className="cover-promise">Find yourself again in 90 days.</p>
          <p className="cover-sub">
            A gentle reset for women who feel lost, overwhelmed,<br />
            or disconnected from themselves.<br /><br />
            Read Chapter One and try the first week —<br />
            free, no signup required.
          </p>
        </div>
      </div>
    );

    if (page.type === "chapter-open") return (
      <div className="ch-open" style={{ background: `linear-gradient(160deg,${P.cream} 55%,${page.color}1A 100%)` }}>
        <div style={{ position: "absolute", bottom: -14, right: -10, opacity: 0.12 }}>
          <BotanicalCorner color={page.color} size={150} flip />
        </div>
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="ch-num-label">Chapter {page.num}</p>
          <div className="ch-free-badge">{page.subtitle}</div>
          <div className="ch-big-num">{page.num}</div>
          <h2 className="ch-title">{page.title}</h2>
          <div className="ch-quote-block">
            <p className="ch-quote">"{page.quote}"</p>
          </div>
        </div>
      </div>
    );

    if (page.type === "read") return (
      <div className="inner">
        <p className="eyebrow">Chapter {page.chapterNum}</p>
        <div className="rule" />
        {page.body.map((t, i) => <p key={i} className="body-p">{t}</p>)}
        <p className="pull">{page.pull}</p>
        <div className="lock-box">
          <span className="lock-icon">✦</span>
          <p className="lock-text">{page.locked}</p>
        </div>
      </div>
    );

    if (page.type === "daily-intro") return (
      <div className="daily-intro-wrap">
        <p className="di-eyebrow">Part Two — Free Preview</p>
        <h2 className="di-title">Try the first week.<br />See how it feels.</h2>
        <p className="di-body">
          Every day in She Blooms is one page — a short morning check-in
          and an honest evening reflection. Nothing complicated. Nothing
          you'll fall behind on.
        </p>
        <p className="di-body">
          What follows is exactly what Days 1 through 7 look like in the
          full 90-day journal. Fill them in, or just read through — either
          way, you'll know if this is right for you before you buy anything.
        </p>
      </div>
    );

    if (page.type === "daily") return renderDaily(page.day);

    if (page.type === "milestone") return (
      <div className="milestone">
        <div style={{ position: "absolute", top: -10, left: 8, opacity: 0.1 }}>
          <BotanicalCorner color={P.dustRose} size={130} />
        </div>
        <p className="ms-label">Milestone — Day {page.day}</p>
        <p className="ms-num">{page.day}</p>
        <p className="ms-title">{page.title}</p>
        <div className="ms-rule" />
        <p className="ms-body">{page.body}</p>
        <p className="ms-progress-label">7% OF THE WAY THERE</p>
        <div className="ms-bar"><div className="ms-bar-fill" /></div>
      </div>
    );

    if (page.type === "paywall") return (
      <div className="paywall">
        <div style={{ position: "absolute", top: -10, left: 10, opacity: 0.15 }}>
          <BotanicalCorner color={P.dustRose} size={140} />
        </div>
        <p className="pw-eyebrow">That's the free preview</p>
        <h2 className="pw-title">There are <em>83 more days</em><br />waiting for you.</h2>
        <p className="pw-body">
          The full She Blooms bundle picks up right here — with milestones
          at Day 30, 60, and 90, four deeper reflection pages along the way,
          weekly habit tracking, and the rest of the book.
        </p>
        <div className="pw-list">
          <div className="pw-item"><span className="pw-check">✓</span><span>148-page printable PDF — all 90 days</span></div>
          <div className="pw-item"><span className="pw-check">✓</span><span>4 chapters + weekly habit tracker & review</span></div>
          <div className="pw-item"><span className="pw-check">✓</span><span>30-Day Challenge with daily "why it matters"</span></div>
          <div className="pw-item"><span className="pw-check">✓</span><span>12 double-sided affirmation cards, print-ready</span></div>
        </div>
        <a className="pw-btn" href={ETSY_URL} target="_blank" rel="noopener noreferrer">
          Get the Full 90-Day Reset
        </a>
        <p className="pw-price">Instant digital download · Etsy</p>
      </div>
    );

    return null;
  };

  return (
    <>
      <style>{css}</style>
      <div className="wrap">
        <div className="topbar">
          <span className="topbar-brand">She Blooms</span>
          <span className="topbar-badge">Free Preview</span>
        </div>
        <div className="book">
          <div className="spine" />
          {renderPage()}
          <div className="nav">
            <button className="nbtn" onClick={() => go(-1)} disabled={idx === 0}>← Prev</button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
              <div className="ndots">
                {pages.map((_, i) => (
                  <div key={i} className={`nd${i === idx ? " a" : ""}`} onClick={() => goTo(i)} />
                ))}
              </div>
              <span className="npg">{idx + 1} / {total}</span>
            </div>
            <button className="nbtn" onClick={() => go(1)} disabled={idx === total - 1}>Next →</button>
          </div>
        </div>
      </div>
    </>
  );
}
