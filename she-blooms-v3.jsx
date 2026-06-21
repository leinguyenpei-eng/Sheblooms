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

const SmallFloral = ({ color = P.dustRose, size = 40, opacity = 0.5 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{ opacity }}>
    <ellipse cx="20" cy="20" rx="5" ry="4" fill={color} fillOpacity="0.9"/>
    {[0,45,90,135,180,225,270,315].map((deg,i) => {
      const r = deg * Math.PI / 180;
      const cx = 20 + Math.cos(r) * 8;
      const cy = 20 + Math.sin(r) * 8;
      return <ellipse key={i} cx={cx} cy={cy} rx="4" ry="6"
        transform={`rotate(${deg} ${cx} ${cy})`} fill={color} fillOpacity={0.45 - i*0.02}/>;
    })}
    <path d="M20 28 Q18 33 16 36" stroke={P.sage} strokeWidth="0.8" fill="none" strokeOpacity="0.5"/>
    <path d="M20 28 Q22 33 24 36" stroke={P.sage} strokeWidth="0.8" fill="none" strokeOpacity="0.5"/>
    <ellipse cx="15" cy="37" rx="3" ry="2" transform="rotate(-15 15 37)" fill={P.sage} fillOpacity="0.28"/>
    <ellipse cx="25" cy="37" rx="3" ry="2" transform="rotate(15 25 37)" fill={P.sage} fillOpacity="0.28"/>
  </svg>
);

// ─── PAGES DATA ───────────────────────────────────────────────────
const pages = [
  { id: "cover", type: "cover" },
  { id: "toc",   type: "toc" },

  // Ch 1
  { id:"ch1-open", type:"chapter-open", num:"One",
    title:"The Woman You\nSettled Into",
    quote:"She didn't fall apart.\nShe just slowly agreed\nto become less.",
    color: P.dustRose },
  { id:"ch1-read", type:"read", chapterNum:"One",
    body:[
      {kind:"p", text:"There is a particular kind of disappearing that requires no catastrophe. No dramatic exit. Just a series of small permissions — the career paused, the opinion softened, the ambition quietly folded and placed somewhere unreachable. You told yourself it was temporary. You were not entirely wrong. But sacrifice and dissolution are not the same thing, and somewhere in the years of choosing others first, you may have forgotten which parts of yourself you were setting aside and which parts you were surrendering."},
      {kind:"p", text:"The women who lose themselves rarely lose themselves all at once. It happens the way water shapes stone — through the persistent pressure of small moments. The morning you didn't write because someone needed breakfast. The promotion you didn't pursue because the timing wasn't right. Each one reasonable. Each one, in aggregate, a slow erosion."},
      {kind:"pull", text:"The extraordinary woman does not use love as a reason to stop becoming."},
      {kind:"p", text:"Keep something that belongs only to you. Not as selfishness. As sanity — and as respect for the people who love you, who deserve to love someone still fully present in her own life."},
    ],
    exercise:{
      label:"This Week's Work",
      prompt:"Name one thing you were doing — a skill, a project, a practice — before this relationship or role that you have let go. Not 'I used to paint.' Be specific: what, when, how often.\n\nNow: block 30 minutes this week and restart it. Not to be good at it. Just to remember you still exist outside of what you do for others.\n\nWrite what it is and when you will do it:",
      placeholder:"The thing I stopped: \n\nWhen I will restart it this week:",
    }
  },
  { id:"ch1-mirror", type:"mirror",
    text:"What would you have become if no one had needed anything from you?" },

  // Ch 2
  { id:"ch2-open", type:"chapter-open", num:"Two",
    title:"The High Cost of\nKeeping Score",
    quote:"She exhausted herself\nmaintaining the ledger\nof every wrong done to her.",
    color: P.mauve },
  { id:"ch2-read", type:"read", chapterNum:"Two",
    body:[
      {kind:"p", text:"There is a woman who tallies everything. The birthday remembered late. The compliment given to someone else at the dinner table. The promotion that went to a man who worked half as hard. She is not wrong about any of it — the world is genuinely unfair, slights accumulate like interest. But she has made a critical strategic error. She has outsourced her energy to a filing system of resentments, and the file keeps growing."},
      {kind:"p", text:"Pettiness is not a moral failing. It is an efficiency problem. The woman who cannot let the small things pass will never have enough bandwidth for the large ones. Every grievance she nurses is attention stolen from her own work, her own growth."},
      {kind:"pull", text:"Your time is worth more than their behavior."},
      {kind:"p", text:"But generosity of spirit is not the same as tolerance of abuse. The test is simple: Is this person flawed, or are they using your kindness as a resource they have no intention of replacing? The first deserves grace. The second deserves the quiet, permanent withdrawal of your presence. No speech. No scene. Just a door that is, irrevocably, no longer open."},
    ],
    exercise:{
      label:"This Week's Work",
      prompt:"Write the name of one person you are still angry at — someone you keep replaying in your head.\n\nNow answer honestly:\n— How many hours per week do you spend thinking about them?\n— What would you do with that time if it were returned to you?\n— What is one concrete thing you will do THIS WEEK with that reclaimed energy instead?\n\nThis is not forgiveness. It is a resource reallocation.",
      placeholder:"The person: \n\nHours per week spent on this: \n\nWhat I will do instead this week:",
    }
  },
  { id:"ch2-mirror", type:"mirror",
    text:"Who would you be if you stopped waiting for an apology that is never coming?" },

  // Ch 3
  { id:"ch3-open", type:"chapter-open", num:"Three",
    title:"The Discipline\nNo One Sees",
    quote:"Anyone can rebuild from ruin.\nThe rare woman never lets\nherself arrive there.",
    color: P.sage },
  { id:"ch3-read", type:"read", chapterNum:"Three",
    body:[
      {kind:"p", text:"Crisis makes people heroic. When the marriage ends, when the job disappears — human beings discover capacities they did not know they possessed. They rebuild. They are remarkable. But this is the lesser wisdom."},
      {kind:"p", text:"The greater wisdom is: do not wait for the disaster. The pattern is consistent and almost always invisible until it isn't — a woman at the height of her powers begins to soften in ways that don't show immediately. The morning workout becomes occasional. The book sits unread for a month, then two. None catastrophic. All of them, together, the beginning of a slide so gradual she won't recognize it as a slide until she's at the bottom looking up."},
      {kind:"pull", text:"Gratitude and hunger are not opposites. The sharpest women carry both simultaneously."},
      {kind:"p", text:"The woman of uncommon character does not need adversity to stay awake. She has internalized discipline so completely it no longer requires willpower — it is simply what she does. She builds when there is no emergency. Not from fear. From the understanding that who she is becoming is a project that does not get to pause."},
    ],
    exercise:{
      label:"This Week's Work",
      prompt:"Answer these three questions without softening:\n\n1. In the last 30 days, what did you stop doing that you know you should be doing? (Health, learning, creative work — pick one.)\n\n2. What specifically triggered the stopping? (Comfort? Busy? Avoidance?)\n\n3. What is the minimum viable version of that habit you will do every day for the next 7 days — small enough that 'I don't have time' is not a valid excuse?",
      placeholder:"What I stopped: \n\nWhy I stopped: \n\nMy minimum daily commitment for 7 days:",
    }
  },
  { id:"ch3-mirror", type:"mirror",
    text:"What habits have you been meaning to build since things got comfortable?" },

  // Ch 4
  { id:"ch4-open", type:"chapter-open", num:"Four",
    title:"Four Things\nto Carry",
    quote:"Not rules.\nA posture.\nA decision made in advance.",
    color: P.slate },
  { id:"ch4-pillars", type:"pillars",
    pillars:[
      {n:"I",   title:"Build a life you do not need to be rescued from",
       body:"A woman who has constructed her own joy — her own income, her own inner life — does not arrive at love in a state of need. She arrives as an equal. Build the life first. Bring someone into it."},
      {n:"II",  title:"Hold lightly",
       body:"Promises made in ardor are sincere in the moment. They are not contracts against the future. Build your security on your own foundation. Let love be something you choose freely — and release freely. The grip is fear, not love."},
      {n:"III", title:"Invest inward with the energy you spend on suspicion",
       body:"Every hour spent analysing his silences is an hour stolen from your own becoming. Jealousy shrinks you. Growth makes you someone worth fighting to keep. The maths is simple."},
      {n:"IV",  title:"Become the woman who goes quiet in a storm",
       body:"Complaint makes you smaller. It changes nothing and reshapes you into someone people begin to quietly avoid. When things go wrong — say nothing first. Breathe. Analyse. Act. That silence, practised over years, becomes character."},
    ],
    exercise:{
      label:"Your Audit",
      prompt:"For each of the four pillars, rate yourself honestly from 1–10 on where you actually are right now (not where you want to be).\n\nThen pick your lowest score. Write:\n— One specific behavior in the last month that explains that score.\n— One specific behavior you will change this week.\n\nNo essay. Just the numbers and the action.",
      placeholder:"I  — /10\nII  — /10\nIII — /10\nIV  — /10\n\nMy lowest: \nBehavior that explains it: \nWhat I will change this week:",
    }
  },

  // Close
  { id:"closing",      type:"closing" },
  { id:"final-journal", type:"final-journal" },
];

// ─── MAIN COMPONENT ───────────────────────────────────────────────
export default function SheBloomsV3() {
  const [idx, setIdx]               = useState(0);
  const [entries, setEntries]       = useState({});
  const [journalOpen, setJournalOpen] = useState(false);
  const [fade, setFade]             = useState(true);

  const page = pages[idx];
  const go = (d) => {
    setFade(false);
    setTimeout(() => { setIdx(i => Math.max(0,Math.min(pages.length-1,i+d))); setJournalOpen(false); setFade(true); }, 220);
  };
  const goTo = (i) => {
    setFade(false);
    setTimeout(() => { setIdx(i); setJournalOpen(false); setFade(true); }, 220);
  };
  const setE = (k,v) => setEntries(p=>({...p,[k]:v}));

  const tocChapters = [
    {num:"One",   title:"The Woman You Settled Into",     pageIdx:2},
    {num:"Two",   title:"The High Cost of Keeping Score", pageIdx:6},
    {num:"Three", title:"The Discipline No One Sees",     pageIdx:10},
    {num:"Four",  title:"Four Things to Carry",           pageIdx:14},
  ];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Libre+Baskerville:ital,wght@0,400;1,400&family=Jost:wght@300;400;500&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    .wrap{min-height:100vh;background:#111214;display:flex;align-items:center;justify-content:center;padding:20px 12px;}
    .book{width:100%;max-width:640px;background:${P.cream};box-shadow:-5px 0 14px rgba(0,0,0,.4),12px 6px 48px rgba(0,0,0,.6),inset 5px 0 12px rgba(0,0,0,.1);position:relative;opacity:${fade?1:0};transition:opacity .22s ease;}
    .spine{position:absolute;left:0;top:0;bottom:0;width:14px;background:linear-gradient(90deg,rgba(0,0,0,.16),transparent);z-index:9;pointer-events:none;}

    /* ── COVER ── */
    .cover{min-height:88vh;background:${P.charcoal};display:flex;flex-direction:column;position:relative;overflow:hidden;}
    .cover-top{flex:1;display:flex;flex-direction:column;justify-content:flex-end;padding:56px 52px 36px 60px;position:relative;z-index:2;}
    .cover-tag{font-family:'Jost',sans-serif;font-size:.55rem;letter-spacing:.32em;text-transform:uppercase;color:${P.dustRose};margin-bottom:20px;opacity:.8;}
    .cover-title{font-family:'Cormorant Garamond',serif;font-size:4.8rem;font-weight:300;color:#F0EAE2;line-height:.95;letter-spacing:-.01em;}
    .cover-title span{display:block;}
    .cover-title em{font-style:italic;color:${P.dustRose};}
    .cover-sub{font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.24em;text-transform:uppercase;color:#888;margin-top:20px;line-height:1.8;}
    .cover-bottom{height:160px;position:relative;overflow:hidden;}
    .cover-bottom-bg{position:absolute;inset:0;background:linear-gradient(to bottom,${P.charcoal},#2A1F1A);}
    .cover-floral-row{position:absolute;bottom:0;left:0;right:0;display:flex;justify-content:space-around;align-items:flex-end;padding:0 20px;}
    .cover-line{position:absolute;top:0;left:60px;right:60px;height:1px;background:linear-gradient(90deg,transparent,${P.dustRose}55,transparent);}

    /* ── INNER PAGES ── */
    .inner{padding:48px 50px 38px 62px;min-height:82vh;position:relative;overflow:hidden;}
    .toc-label{font-family:'Jost',sans-serif;font-size:.57rem;letter-spacing:.26em;text-transform:uppercase;color:${P.dustRose};margin-bottom:22px;}
    .toc-title{font-family:'Cormorant Garamond',serif;font-size:1.95rem;font-weight:300;color:${P.slate};margin-bottom:26px;line-height:1.2;}
    .rule{width:100%;height:1px;background:linear-gradient(90deg,${P.border},transparent);margin:16px 0 18px;}
    .toc-item{display:flex;align-items:baseline;gap:10px;margin-bottom:14px;border-bottom:1px dotted ${P.faint};padding-bottom:10px;cursor:pointer;}
    .toc-num{font-family:'Cormorant Garamond',serif;font-size:1rem;font-style:italic;color:${P.dustRose};min-width:26px;}
    .toc-name{font-family:'Cormorant Garamond',serif;font-size:1rem;color:${P.ink};transition:color .15s;}
    .toc-name:hover{color:${P.dustRose};}
    .toc-note{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.18em;text-transform:uppercase;color:${P.border};line-height:1.7;margin-top:24px;padding-top:16px;border-top:1px solid ${P.faint};}

    /* ── CHAPTER OPEN ── */
    .ch-open{min-height:82vh;display:flex;flex-direction:column;justify-content:center;padding:58px 50px;position:relative;overflow:hidden;}
    .ch-label{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.28em;text-transform:uppercase;color:${P.border};margin-bottom:8px;}
    .ch-big{font-family:'Cormorant Garamond',serif;font-size:7.5rem;font-weight:300;line-height:.82;color:${P.faint};margin-bottom:-4px;}
    .ch-title{font-family:'Cormorant Garamond',serif;font-size:2.3rem;font-weight:400;color:${P.slate};line-height:1.12;margin-bottom:26px;white-space:pre-line;}
    .ch-quote-block{border-left:2px solid;padding:10px 18px;}
    .ch-quote{font-family:'Cormorant Garamond',serif;font-size:1.08rem;font-style:italic;color:${P.ink};line-height:1.65;white-space:pre-line;}

    /* ── READ ── */
    .eyebrow{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.24em;text-transform:uppercase;color:${P.dustRose};margin-bottom:3px;}
    .body-p{font-family:'Libre Baskerville',serif;font-size:.88rem;line-height:1.95;color:${P.ink};margin-bottom:15px;}
    .pull{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-style:italic;color:${P.slate};line-height:1.45;margin:24px 0;padding:14px 0;border-top:1px solid ${P.border};border-bottom:1px solid ${P.border};text-align:center;}

    /* ── EXERCISE BLOCK ── */
    .ex-block{margin-top:24px;background:${P.charcoal};padding:22px 24px;}
    .ex-label{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.24em;text-transform:uppercase;color:${P.dustRose};margin-bottom:12px;}
    .ex-prompt{font-family:'Libre Baskerville',serif;font-size:.82rem;color:#C8BFB5;line-height:1.85;margin-bottom:14px;white-space:pre-wrap;}
    .ex-area{width:100%;min-height:120px;background:#151A1F;border:1px solid #2E3840;font-family:'Libre Baskerville',serif;font-size:.85rem;line-height:1.9;color:#E8DDD5;resize:none;outline:none;padding:10px 12px;}
    .ex-area::placeholder{color:#3A4550;font-style:italic;}
    .ex-toggle{display:flex;align-items:center;gap:10px;background:none;border:none;padding:14px 0 0;cursor:pointer;width:100%;margin-top:20px;border-top:1px solid ${P.faint};}
    .ex-diamond{font-size:10px;color:${P.dustRose};}
    .ex-tlabel{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.21em;text-transform:uppercase;color:${P.slate};}

    /* ── MIRROR ── */
    .mirror{min-height:82vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 48px;text-align:center;background:${P.deepCream};position:relative;overflow:hidden;}
    .mirror-label{font-family:'Jost',sans-serif;font-size:.52rem;letter-spacing:.32em;text-transform:uppercase;color:${P.border};margin-bottom:32px;}
    .mirror-text{font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-style:italic;font-weight:300;color:${P.slate};line-height:1.55;max-width:360px;}
    .mirror-rule{width:32px;height:1px;background:${P.dustRose};margin:24px auto;}
    .mirror-sub{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.2em;text-transform:uppercase;color:${P.mauve};}

    /* ── PILLARS ── */
    .pillar{display:flex;gap:16px;margin-bottom:24px;padding-bottom:22px;border-bottom:1px solid ${P.faint};}
    .pillar:last-child{border-bottom:none;}
    .pillar-n{font-family:'Cormorant Garamond',serif;font-size:1.9rem;font-style:italic;color:${P.faint};min-width:28px;line-height:1;padding-top:3px;}
    .pillar-title{font-family:'Cormorant Garamond',serif;font-size:1.02rem;font-weight:600;color:${P.slate};margin-bottom:5px;line-height:1.3;}
    .pillar-body{font-family:'Libre Baskerville',serif;font-size:.83rem;line-height:1.87;color:${P.ink};}

    /* ── CLOSING ── */
    .closing{min-height:82vh;display:flex;flex-direction:column;justify-content:center;padding:58px 50px;position:relative;overflow:hidden;}
    .closing-label{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.26em;text-transform:uppercase;color:${P.border};margin-bottom:12px;}
    .closing-title{font-family:'Cormorant Garamond',serif;font-size:2.8rem;font-weight:300;color:${P.slate};line-height:1.08;margin-bottom:24px;}
    .closing-accent{margin-top:20px;padding:13px 18px;border-left:2px solid ${P.dustRose};background:${P.palePink};}
    .closing-accent-text{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1rem;color:${P.slate};line-height:1.65;}

    /* ── FINAL JOURNAL ── */
    .fj{padding:48px 50px 38px 62px;min-height:82vh;background:repeating-linear-gradient(transparent,transparent 30px,${P.faint} 30px,${P.faint} 31px);position:relative;}
    .fj-head{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-style:italic;color:${P.slate};margin-bottom:3px;}
    .fj-sub{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.21em;text-transform:uppercase;color:${P.dustRose};margin-bottom:26px;}
    .fj-area{width:100%;min-height:56vh;background:transparent;border:none;font-family:'Libre Baskerville',serif;font-size:.88rem;line-height:1.92;color:${P.ink};resize:none;outline:none;padding:1px 2px;}
    .fj-area::placeholder{color:${P.border};font-style:italic;}

    /* ── NAV ── */
    .nav{display:flex;align-items:center;justify-content:space-between;padding:12px 62px 16px 62px;border-top:1px solid ${P.faint};background:${P.cream};}
    .nbtn{background:none;border:1px solid ${P.border};padding:7px 18px;font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.18em;text-transform:uppercase;color:${P.mauve};cursor:pointer;transition:all .18s;}
    .nbtn:hover:not(:disabled){background:${P.palePink};border-color:${P.dustRose};}
    .nbtn:disabled{opacity:.25;cursor:default;}
    .ndots{display:flex;gap:5px;align-items:center;}
    .nd{width:4px;height:4px;border-radius:50%;background:${P.border};cursor:pointer;transition:all .18s;}
    .nd.a{background:${P.dustRose};width:6px;height:6px;}
    .npg{font-family:'Jost',sans-serif;font-size:.52rem;letter-spacing:.18em;color:${P.border};text-transform:uppercase;}
    @media(max-width:560px){
      .inner,.ch-open,.closing,.fj{padding:34px 22px 30px 30px;}
      .nav{padding:10px 22px 13px 30px;}
      .cover-top{padding:44px 28px 28px 36px;}
      .cover-title{font-size:3.2rem;}
      .ch-title{font-size:1.8rem;}
      .mirror-text{font-size:1.38rem;}
      .closing-title{font-size:2.1rem;}
      .ch-big{font-size:5.2rem;}
    }
  `;

  const renderPage = () => {
    // ── COVER ──────────────────────────────────────────────────────
    if (page.type === "cover") return (
      <div className="cover">
        {/* Subtle botanical — top right, very faint */}
        <div style={{position:"absolute",top:0,right:0,opacity:.07,pointerEvents:"none"}}>
          <BotanicalCorner color={P.dustRose} size={220} flip />
        </div>
        {/* Very faint bottom left */}
        <div style={{position:"absolute",bottom:80,left:0,opacity:.06,pointerEvents:"none"}}>
          <BotanicalCorner color={P.dustRose} size={180} />
        </div>

        <div className="cover-top">
          <p className="cover-tag">A book & journal</p>
          <h1 className="cover-title">
            <span>She</span>
            <span><em>Blooms</em></span>
          </h1>
          <p className="cover-sub">
            For the woman<br />
            becoming herself
          </p>
        </div>

        <div className="cover-bottom">
          <div className="cover-bottom-bg" />
          <div className="cover-line" />
          <div className="cover-floral-row">
            {[P.dustRose, P.mauve, P.sage, P.dustRose, P.mauve].map((c,i) => (
              <div key={i} style={{opacity: 0.55 - i*0.02, marginBottom: i%2===0 ? 8 : 0}}>
                <SmallFloral color={c} size={i===2?48:38} opacity={1}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    // ── TOC ────────────────────────────────────────────────────────
    if (page.type === "toc") return (
      <div className="inner">
        <div style={{position:"absolute",top:-8,right:8,opacity:.1,pointerEvents:"none"}}>
          <BotanicalCorner color={P.mauve} flip size={130}/>
        </div>
        <p className="toc-label">Contents</p>
        <h2 className="toc-title">What lives<br/>inside these pages</h2>
        <div className="rule"/>
        {tocChapters.map(ch => (
          <div key={ch.num} className="toc-item" onClick={() => goTo(ch.pageIdx)}>
            <span className="toc-num">{ch.num}</span>
            <span className="toc-name">{ch.title}</span>
          </div>
        ))}
        <p className="toc-note">
          Each chapter ends with a mirror page —<br/>
          one question. No space to write. Just sit with it.<br/><br/>
          Each chapter has one exercise.<br/>
          Do it before moving on.
        </p>
      </div>
    );

    // ── CHAPTER OPEN ───────────────────────────────────────────────
    if (page.type === "chapter-open") return (
      <div className="ch-open" style={{background:`linear-gradient(160deg,${P.cream} 50%,${page.color}12 100%)`}}>
        <div style={{position:"absolute",bottom:-14,right:-10,opacity:.12,pointerEvents:"none"}}>
          <BotanicalCorner color={page.color} size={170} flip/>
        </div>
        <div style={{position:"relative",zIndex:1}}>
          <p className="ch-label">Chapter {page.num}</p>
          <div className="ch-big">{page.num}</div>
          <h2 className="ch-title">{page.title}</h2>
          <div className="ch-quote-block" style={{borderColor:page.color}}>
            <p className="ch-quote">{page.quote}</p>
          </div>
        </div>
      </div>
    );

    // ── READ ───────────────────────────────────────────────────────
    if (page.type === "read") return (
      <div className="inner">
        <div style={{position:"absolute",top:-8,left:10,opacity:.12,pointerEvents:"none"}}>
          <BotanicalCorner color={P.dustRose} size={118}/>
        </div>
        <p className="eyebrow">Chapter {page.chapterNum}</p>
        <div className="rule"/>
        {page.body.map((b,i) => {
          if (b.kind==="p")    return <p key={i} className="body-p">{b.text}</p>;
          if (b.kind==="pull") return <p key={i} className="pull">{b.text}</p>;
          return null;
        })}

        {/* Exercise toggle */}
        <button className="ex-toggle" onClick={() => setJournalOpen(o=>!o)}>
          <span className="ex-diamond">◆</span>
          <span className="ex-tlabel">{journalOpen ? "Close exercise" : "This week's exercise →"}</span>
        </button>
        {journalOpen && (
          <div className="ex-block">
            <p className="ex-label">{page.exercise.label}</p>
            <p className="ex-prompt">{page.exercise.prompt}</p>
            <textarea className="ex-area"
              placeholder={page.exercise.placeholder}
              value={entries[page.id]||""}
              onChange={e=>setE(page.id,e.target.value)}/>
          </div>
        )}
        <div style={{position:"absolute",bottom:-8,right:8,opacity:.08,pointerEvents:"none"}}>
          <BotanicalCorner color={P.sage} size={96} flip/>
        </div>
      </div>
    );

    // ── MIRROR ────────────────────────────────────────────────────
    if (page.type === "mirror") return (
      <div className="mirror">
        <div style={{position:"absolute",top:-10,left:8,opacity:.11,pointerEvents:"none"}}>
          <BotanicalCorner color={P.mauve} size={130}/>
        </div>
        <div style={{position:"absolute",bottom:-10,right:8,opacity:.11,pointerEvents:"none"}}>
          <BotanicalCorner color={P.dustRose} size={118} flip/>
        </div>
        <p className="mirror-label">Mirror</p>
        <p className="mirror-text">"{page.text}"</p>
        <div className="mirror-rule"/>
        <p className="mirror-sub">Sit with this. Then continue.</p>
      </div>
    );

    // ── PILLARS ───────────────────────────────────────────────────
    if (page.type === "pillars") return (
      <div className="inner">
        <p className="eyebrow">Chapter Four</p>
        <div className="rule"/>
        {page.pillars.map((p,i) => (
          <div key={i} className="pillar">
            <div className="pillar-n">{p.n}</div>
            <div>
              <p className="pillar-title">{p.title}</p>
              <p className="pillar-body">{p.body}</p>
            </div>
          </div>
        ))}
        <button className="ex-toggle" onClick={() => setJournalOpen(o=>!o)}>
          <span className="ex-diamond">◆</span>
          <span className="ex-tlabel">{journalOpen ? "Close exercise" : "Your audit →"}</span>
        </button>
        {journalOpen && (
          <div className="ex-block">
            <p className="ex-label">{page.exercise.label}</p>
            <p className="ex-prompt">{page.exercise.prompt}</p>
            <textarea className="ex-area"
              placeholder={page.exercise.placeholder}
              value={entries[page.id]||""}
              onChange={e=>setE(page.id,e.target.value)}/>
          </div>
        )}
      </div>
    );

    // ── CLOSING ───────────────────────────────────────────────────
    if (page.type === "closing") return (
      <div className="closing" style={{background:`linear-gradient(150deg,${P.cream} 50%,${P.palePink} 100%)`}}>
        <div style={{position:"absolute",top:-10,left:10,opacity:.16,pointerEvents:"none"}}>
          <BotanicalCorner color={P.dustRose} size={148}/>
        </div>
        <div style={{position:"absolute",bottom:20,right:24,opacity:.13,pointerEvents:"none"}}>
          <SmallFloral color={P.dustRose} size={72} opacity={1}/>
        </div>
        <div style={{position:"relative",zIndex:1}}>
          <p className="closing-label">Closing</p>
          <h2 className="closing-title">Crown<br/>Yourself</h2>
          <div style={{width:36,height:1,background:P.dustRose,marginBottom:22}}/>
          {[
            "No one is coming to place it on your head.",
            "Not a partner. Not a parent. Not the right circumstances arriving at exactly the right time.",
            "The woman you keep waiting to become — the one who is steadier, sharper, softer where it counts — she exists inside the choices you are making right now. Not the ones you plan to make. The ones you actually make.",
            "Be generous without being extractable. Be disciplined not from fear of falling, but because becoming is who you are. Be honest — especially with yourself, especially when it costs something.",
            "You are the architect. This was always your building.",
          ].map((t,i) => <p key={i} className="body-p">{t}</p>)}
          <div className="closing-accent">
            <p className="closing-accent-text">Now go build something extraordinary.</p>
          </div>
        </div>
      </div>
    );

    // ── FINAL JOURNAL ─────────────────────────────────────────────
    if (page.type === "final-journal") return (
      <div className="fj">
        <div style={{position:"absolute",top:-6,right:8,opacity:.08,pointerEvents:"none"}}>
          <BotanicalCorner color={P.dustRose} flip size={108}/>
        </div>
        <h2 className="fj-head">A letter to myself —</h2>
        <p className="fj-sub">One year from now</p>
        <textarea className="fj-area"
          placeholder={"Dear future self,\n\nBy the time you read this, I hope you have..."}
          value={entries["final"]||""}
          onChange={e=>setE("final",e.target.value)}/>
      </div>
    );

    return null;
  };

  return (
    <>
      <style>{css}</style>
      <div className="wrap">
        <div className="book">
          <div className="spine"/>
          {renderPage()}
          <div className="nav">
            <button className="nbtn" onClick={()=>go(-1)} disabled={idx===0}>← Prev</button>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:7}}>
              <div className="ndots">
                {pages.map((_,i) => (
                  <div key={i} className={`nd${i===idx?" a":""}`} onClick={()=>goTo(i)}/>
                ))}
              </div>
              <span className="npg">{idx+1} / {pages.length}</span>
            </div>
            <button className="nbtn" onClick={()=>go(1)} disabled={idx===pages.length-1}>Next →</button>
          </div>
        </div>
      </div>
    </>
  );
}
