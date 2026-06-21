import { useState } from "react";

const P = {
  cream: "#F8F3EC",
  deepCream: "#F0E8DC",
  ink: "#1C1C1C",
  dustRose: "#C49A8A",
  sage: "#7A9478",
  mauve: "#9B7B8A",
  slate: "#3D4B5C",
  gold: "#B8956A",
  palePink: "#EDE0D8",
  paleGreen: "#DDE8DC",
  border: "#D5C8BE",
  faint: "#E8DDD5",
};

const pages = [
  { id: "cover", type: "cover" },
  { id: "toc", type: "toc" },
  { id: "ch1-open", type: "chapter-open", num: "One", title: "The Woman You Settled Into", quote: "She didn't fall apart. She just slowly agreed to become less.", color: P.dustRose },
  { id: "ch1-read", type: "read", chapterNum: "One",
    body: [
      { kind: "p", text: "There is a particular kind of disappearing that requires no catastrophe. No dramatic exit. Just a series of small permissions — the career paused, the opinion softened, the ambition quietly folded and placed somewhere unreachable. You told yourself it was temporary. You told yourself love requires sacrifice. You were not entirely wrong. But sacrifice and dissolution are not the same thing, and somewhere in the years of choosing others first, you may have forgotten which parts of yourself you were merely setting aside and which parts you were actually surrendering." },
      { kind: "p", text: "The women who lose themselves in marriage rarely lose themselves all at once. It happens the way water shapes stone — slowly, through the persistent pressure of small moments. The morning you didn't write because someone needed breakfast. The promotion you didn't pursue because the timing wasn't right. The conversation you softened because you didn't want to be difficult. Each one reasonable. Each one, in aggregate, a kind of slow erosion." },
      { kind: "pull", text: "The extraordinary woman does not use love as a reason to stop becoming." },
      { kind: "p", text: "This is not an argument against devotion. It is an argument against the particular myth that a woman proves her love by subtracting herself from the equation. The women who sustain the deepest relationships are not the ones who disappeared into them. They are the ones who brought a whole self to the door and continued building that self from the inside out, regardless of what life asked of them on the outside." },
      { kind: "p", text: "Keep something that belongs only to you. Not as an act of selfishness. As an act of sanity — and of respect for the people who love you, who deserve to love someone who is still fully present in her own life." },
    ],
    journalPrompt: "Name three things you were before you were someone's wife, mother, or partner. Are they still true? If not — when did you stop, and did you notice?",
  },
  { id: "ch1-mirror", type: "mirror", text: "What would you have become if no one had needed anything from you?" },
  { id: "ch2-open", type: "chapter-open", num: "Two", title: "The High Cost of Keeping Score", quote: "She exhausted herself maintaining the ledger of every wrong done to her.", color: P.mauve },
  { id: "ch2-read", type: "read", chapterNum: "Two",
    body: [
      { kind: "p", text: "There is a woman who tallies everything. The birthday remembered late. The compliment given to someone else at the dinner table. The promotion she deserved that went to a man who worked half as hard. She is not wrong about any of it — the world is genuinely unfair, people are genuinely careless, slights accumulate like interest. But she has made a critical strategic error. She has outsourced her energy to a filing system of resentments, and the file keeps growing." },
      { kind: "p", text: "Pettiness is not a moral failing. It is an efficiency problem. The woman who cannot let the small things pass will never have enough bandwidth for the large ones. Every grievance she nurses is attention stolen from her own work, her own growth, her own quietly building life." },
      { kind: "pull", text: "Largeness is not weakness. It is the decision that your time is worth more than their behavior." },
      { kind: "p", text: "But — and this distinction is everything — generosity of spirit is not the same as tolerance of abuse. The woman who forgives a colleague for taking credit on a rushed afternoon is practicing wisdom. The woman who absorbs that same colleague's pattern of extraction, month after month, without consequence, is not generous. She is enabling. The test is simple: Is this person flawed, or is this person using your kindness as a resource they have no intention of replacing? The first deserves grace. The second deserves the quiet, permanent withdrawal of your presence." },
      { kind: "p", text: "Learn to close doors without slamming them. The most devastating thing you can do to someone who has underestimated you is become unreachable — not with drama, but with finality. No speech required. Just a door that is simply, irrevocably, no longer open." },
    ],
    journalPrompt: "What resentment are you currently carrying that is costing you more than the original wound? What would you do with that energy if you put the ledger down?",
  },
  { id: "ch2-mirror", type: "mirror", text: "Who would you be if you stopped waiting for an apology that is never coming?" },
  { id: "ch3-open", type: "chapter-open", num: "Three", title: "The Discipline No One Sees", quote: "Anyone can rebuild from ruin. The rare woman never lets herself arrive there.", color: P.sage },
  { id: "ch3-read", type: "read", chapterNum: "Three",
    body: [
      { kind: "p", text: "Crisis makes people heroic. This is well documented and largely true. When the marriage ends, when the job disappears, when the diagnosis arrives — human beings discover capacities they did not know they possessed. They get up. They rebuild. They are remarkable." },
      { kind: "p", text: "But there is a more difficult, less celebrated discipline — the discipline of the easy season. The months when everything is working. When the relationship is warm, the career is stable, the body is healthy. When comfort arrives and wraps itself around you like something earned." },
      { kind: "pull", text: "Gratitude and hunger are not opposites. The sharpest women carry both simultaneously." },
      { kind: "p", text: "The pattern is consistent and almost always invisible until it isn't: a woman at the height of her powers begins to soften in the ways that do not show immediately. The morning workout becomes occasional. The book sits unread on the nightstand for a month, then two. The work she used to take home stays at the office. None of these are catastrophic. All of them, together, are the beginning of a slide so gradual she will not recognize it as a slide until she is already at the bottom looking up." },
      { kind: "p", text: "The woman of uncommon character does not need adversity to stay awake. She has internalized the discipline so completely that it no longer requires willpower — it is simply what she does. She reads when she is not behind. She moves her body when she does not need to lose weight. She builds when there is no emergency. Not from fear. From the understanding that who she is becoming is a project that does not get to pause." },
    ],
    journalPrompt: "In the areas of your life that feel stable and fine — where have you been coasting? What would it mean to bring the same intensity to ease that you bring to crisis?",
  },
  { id: "ch3-mirror", type: "mirror", text: "What habits have you been meaning to build since things got comfortable?" },
  { id: "ch4-open", type: "chapter-open", num: "Four", title: "Four Things to Carry", quote: "Not rules. A posture. A way of moving through the world as someone who has decided.", color: P.slate },
  { id: "ch4-pillars", type: "pillars",
    pillars: [
      { n: "I", title: "Build a life you do not need to be rescued from", body: "A woman who has constructed her own joy — her own income, her own community, her own inner life — does not arrive at love in a state of need. She arrives as an equal. This is not cold. It is the most romantic thing a person can do: to choose someone when you do not need to, to stay because you want to, not because you have no other option. Build the life first. Bring someone into it, not the other way around." },
      { n: "II", title: "Hold lightly", body: "Promises made in ardor are sincere at the moment of their making. They are not binding contracts against the future, because the future is a country neither of you has visited yet. The woman who grasps tightly at assurances, who requires constant declarations, who builds her security on someone else's words — is building on sand. Build on your own foundation. Let love be a thing you choose freely and release freely. The grip is not love. It is fear wearing love's face." },
      { n: "III", title: "Invest in yourself with the energy you spend on suspicion", body: "The hours spent reading his messages. The mental real estate occupied by analyzing his silences. The anxiety of surveillance. This is not love — it is the outsourcing of your self-worth to someone else's behavior. Every hour of that redirected inward — toward a skill, a body you respect, a mind you are expanding — compounds. Jealousy shrinks you. Growth makes you someone worth fighting to keep." },
      { n: "IV", title: "Become the woman who goes quiet in a storm", body: "Complaint is the most efficient way to make yourself smaller in a room. It changes nothing and reshapes you, slowly, into someone people begin to quietly avoid. When something goes wrong — and things will go wrong — try this: say nothing. Breathe. Analyse. Then act. The silence before your response is not emptiness. It is the space where a woman decides who she will be. That silence, practised over years, becomes character." },
    ],
    journalPrompt: "Which of these is hardest for you, and why? Don't answer with who you want to be. Answer with who you actually are right now.",
  },
  { id: "closing", type: "closing" },
  { id: "final-journal", type: "final-journal" },
];

const BotanicalCorner = ({ color = P.dustRose, flip = false, size = 140, opacity = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" style={{ opacity, transform: flip ? "scale(-1,-1)" : "none" }}>
    <path d="M20 130 Q30 90 50 70 Q70 50 90 20" stroke={color} strokeWidth="1.1" fill="none" strokeOpacity="0.45" />
    <path d="M20 130 Q25 100 15 80" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.35" />
    <path d="M35 105 Q20 95 10 88" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.35" />
    <path d="M50 85 Q60 75 72 60" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.35" />
    <ellipse cx="88" cy="22" rx="7" ry="11" transform="rotate(-30 88 22)" fill={color} fillOpacity="0.3" />
    <ellipse cx="72" cy="38" rx="6" ry="10" transform="rotate(-50 72 38)" fill={color} fillOpacity="0.25" />
    <ellipse cx="10" cy="82" rx="6" ry="9" transform="rotate(20 10 82)" fill={color} fillOpacity="0.25" />
    <ellipse cx="8" cy="96" rx="5" ry="8" transform="rotate(10 8 96)" fill={color} fillOpacity="0.2" />
    <ellipse cx="55" cy="78" rx="5" ry="8" transform="rotate(-70 55 78)" fill={color} fillOpacity="0.2" />
    <circle cx="90" cy="20" r="2.5" fill={color} fillOpacity="0.45" />
    <circle cx="12" cy="80" r="1.8" fill={color} fillOpacity="0.4" />
  </svg>
);

const Rose = ({ size = 64, color = P.dustRose }) => (
  <svg width={size} height={size} viewBox="0 0 64 64">
    <ellipse cx="32" cy="32" rx="9" ry="7" fill={color} fillOpacity="0.9" />
    <ellipse cx="14" cy="32" rx="8" ry="11" transform="rotate(-18 14 32)" fill={color} fillOpacity="0.5" />
    <ellipse cx="50" cy="32" rx="8" ry="11" transform="rotate(18 50 32)" fill={color} fillOpacity="0.5" />
    <ellipse cx="32" cy="16" rx="8" ry="11" transform="rotate(0 32 16)" fill={color} fillOpacity="0.45" />
    <ellipse cx="32" cy="46" rx="9" ry="7" fill={color} fillOpacity="0.4" />
    <ellipse cx="18" cy="20" rx="7" ry="10" transform="rotate(-35 18 20)" fill={color} fillOpacity="0.35" />
    <ellipse cx="46" cy="20" rx="7" ry="10" transform="rotate(35 46 20)" fill={color} fillOpacity="0.35" />
    <ellipse cx="18" cy="44" rx="7" ry="9" transform="rotate(35 18 44)" fill={color} fillOpacity="0.3" />
    <ellipse cx="46" cy="44" rx="7" ry="9" transform="rotate(-35 46 44)" fill={color} fillOpacity="0.3" />
    <path d="M32 52 Q29 57 26 61" stroke={P.sage} strokeWidth="1" fill="none" strokeOpacity="0.5" />
    <path d="M32 52 Q35 57 38 61" stroke={P.sage} strokeWidth="1" fill="none" strokeOpacity="0.5" />
    <ellipse cx="25" cy="62" rx="5" ry="3" transform="rotate(-15 25 62)" fill={P.sage} fillOpacity="0.3" />
    <ellipse cx="39" cy="62" rx="5" ry="3" transform="rotate(15 39 62)" fill={P.sage} fillOpacity="0.3" />
  </svg>
);

export default function SheBloomsV2() {
  const [idx, setIdx] = useState(0);
  const [entries, setEntries] = useState({});
  const [journalOpen, setJournalOpen] = useState(false);
  const [fade, setFade] = useState(true);

  const page = pages[idx];
  const go = (d) => {
    setFade(false);
    setTimeout(() => {
      setIdx(i => Math.max(0, Math.min(pages.length - 1, i + d)));
      setJournalOpen(false);
      setFade(true);
    }, 220);
  };
  const goTo = (i) => {
    setFade(false);
    setTimeout(() => { setIdx(i); setJournalOpen(false); setFade(true); }, 220);
  };
  const setE = (k, v) => setEntries(p => ({ ...p, [k]: v }));

  const tocChapters = [
    { num: "One", title: "The Woman You Settled Into", pageIdx: 2 },
    { num: "Two", title: "The High Cost of Keeping Score", pageIdx: 6 },
    { num: "Three", title: "The Discipline No One Sees", pageIdx: 10 },
    { num: "Four", title: "Four Things to Carry", pageIdx: 14 },
  ];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Jost:wght@300;400&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
    .wrap{min-height:100vh;background:#18181A;display:flex;align-items:center;justify-content:center;padding:24px 16px;}
    .book{width:100%;max-width:660px;background:${P.cream};box-shadow:-6px 0 16px rgba(0,0,0,.38),10px 4px 40px rgba(0,0,0,.55),inset 4px 0 10px rgba(0,0,0,.09);position:relative;opacity:${fade?1:0};transition:opacity .22s ease;}
    .spine{position:absolute;left:0;top:0;bottom:0;width:16px;background:linear-gradient(90deg,rgba(0,0,0,.14),transparent);z-index:9;pointer-events:none;}
    .inner{padding:52px 52px 40px 64px;min-height:82vh;position:relative;overflow:hidden;}
    .cover-bg{min-height:82vh;background:linear-gradient(150deg,#F8F3EC 0%,#EDE0D8 45%,#DDE8DC 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:56px 40px;position:relative;overflow:hidden;}
    .cover-title{font-family:'Cormorant Garamond',serif;font-size:4.4rem;font-weight:300;color:${P.slate};letter-spacing:.06em;line-height:1;}
    .cover-rule{width:56px;height:1px;background:${P.dustRose};margin:20px auto;}
    .cover-sub{font-family:'Jost',sans-serif;font-size:.61rem;letter-spacing:.27em;text-transform:uppercase;color:${P.mauve};line-height:2.1;}
    .toc-label{font-family:'Jost',sans-serif;font-size:.59rem;letter-spacing:.24em;text-transform:uppercase;color:${P.dustRose};margin-bottom:24px;}
    .toc-title{font-family:'Cormorant Garamond',serif;font-size:2rem;font-weight:300;color:${P.slate};margin-bottom:28px;line-height:1.2;}
    .rule{width:100%;height:1px;background:linear-gradient(90deg,${P.border},transparent);margin:18px 0 20px;}
    .toc-item{display:flex;align-items:baseline;gap:12px;margin-bottom:16px;border-bottom:1px dotted ${P.border};padding-bottom:10px;cursor:pointer;}
    .toc-num{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-style:italic;color:${P.dustRose};min-width:28px;}
    .toc-name{font-family:'Cormorant Garamond',serif;font-size:1.02rem;color:${P.ink};transition:color .15s;}
    .toc-name:hover{color:${P.dustRose};}
    .ch-open{min-height:82vh;display:flex;flex-direction:column;justify-content:center;padding:60px 52px;position:relative;overflow:hidden;}
    .ch-num-label{font-family:'Jost',sans-serif;font-size:.57rem;letter-spacing:.27em;text-transform:uppercase;color:${P.border};margin-bottom:10px;}
    .ch-big-num{font-family:'Cormorant Garamond',serif;font-size:7rem;font-weight:300;line-height:.85;color:${P.faint};margin-bottom:-6px;}
    .ch-title{font-family:'Cormorant Garamond',serif;font-size:2.3rem;font-weight:400;color:${P.slate};line-height:1.15;margin-bottom:28px;}
    .ch-quote-block{border-left:2px solid;padding:10px 20px;}
    .ch-quote{font-family:'Libre Baskerville',serif;font-size:.97rem;font-style:italic;color:${P.ink};line-height:1.7;}
    .eyebrow{font-family:'Jost',sans-serif;font-size:.57rem;letter-spacing:.24em;text-transform:uppercase;color:${P.dustRose};margin-bottom:4px;}
    .body-p{font-family:'Libre Baskerville',serif;font-size:.9rem;line-height:1.95;color:${P.ink};margin-bottom:16px;}
    .pull{font-family:'Cormorant Garamond',serif;font-size:1.38rem;font-style:italic;color:${P.slate};line-height:1.45;margin:26px 0;padding:16px 0;border-top:1px solid ${P.border};border-bottom:1px solid ${P.border};text-align:center;}
    .mirror-page{min-height:82vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 50px;text-align:center;background:${P.deepCream};position:relative;overflow:hidden;}
    .mirror-label{font-family:'Jost',sans-serif;font-size:.54rem;letter-spacing:.3em;text-transform:uppercase;color:${P.border};margin-bottom:36px;}
    .mirror-text{font-family:'Cormorant Garamond',serif;font-size:1.75rem;font-style:italic;font-weight:300;color:${P.slate};line-height:1.55;max-width:380px;}
    .mirror-rule{width:36px;height:1px;background:${P.dustRose};margin:28px auto;}
    .mirror-sub{font-family:'Jost',sans-serif;font-size:.57rem;letter-spacing:.2em;text-transform:uppercase;color:${P.mauve};}
    .pillar{display:flex;gap:18px;margin-bottom:28px;padding-bottom:24px;border-bottom:1px solid ${P.faint};}
    .pillar:last-child{border-bottom:none;}
    .pillar-n{font-family:'Cormorant Garamond',serif;font-size:2rem;font-style:italic;color:${P.faint};min-width:30px;line-height:1;padding-top:4px;}
    .pillar-title{font-family:'Cormorant Garamond',serif;font-size:1.08rem;font-weight:600;color:${P.slate};margin-bottom:7px;}
    .pillar-body{font-family:'Libre Baskerville',serif;font-size:.85rem;line-height:1.87;color:${P.ink};}
    .j-toggle{display:flex;align-items:center;gap:10px;background:none;border:none;border-top:1px solid ${P.border};padding:15px 0 0;cursor:pointer;width:100%;margin-top:24px;}
    .j-diamond{font-size:11px;color:${P.dustRose};}
    .j-label{font-family:'Jost',sans-serif;font-size:.57rem;letter-spacing:.21em;text-transform:uppercase;color:${P.mauve};}
    .j-section{background:${P.palePink};padding:20px 22px;border-bottom:1px solid ${P.border};}
    .j-prompt{font-family:'Libre Baskerville',serif;font-style:italic;font-size:.86rem;color:${P.slate};line-height:1.72;margin-bottom:13px;}
    .j-area{width:100%;min-height:120px;background:transparent;border:none;border-bottom:1px solid ${P.border};font-family:'Libre Baskerville',serif;font-size:.88rem;line-height:2;color:${P.ink};resize:none;outline:none;padding:5px 3px;}
    .j-area::placeholder{color:${P.border};font-style:italic;}
    .closing-inner{min-height:82vh;display:flex;flex-direction:column;justify-content:center;padding:60px 52px;position:relative;overflow:hidden;}
    .closing-kicker{font-family:'Jost',sans-serif;font-size:.57rem;letter-spacing:.24em;text-transform:uppercase;color:${P.border};margin-bottom:14px;}
    .closing-title{font-family:'Cormorant Garamond',serif;font-size:2.9rem;font-weight:300;color:${P.slate};line-height:1.1;margin-bottom:28px;}
    .fj-inner{padding:52px 52px 40px 64px;min-height:82vh;background:repeating-linear-gradient(transparent,transparent 31px,${P.faint} 31px,${P.faint} 32px);position:relative;}
    .fj-head{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-style:italic;color:${P.slate};margin-bottom:4px;}
    .fj-sub{font-family:'Jost',sans-serif;font-size:.57rem;letter-spacing:.21em;text-transform:uppercase;color:${P.dustRose};margin-bottom:28px;}
    .fj-area{width:100%;min-height:56vh;background:transparent;border:none;font-family:'Libre Baskerville',serif;font-size:.9rem;line-height:2;color:${P.ink};resize:none;outline:none;padding:2px 3px;}
    .fj-area::placeholder{color:${P.border};font-style:italic;}
    .nav{display:flex;align-items:center;justify-content:space-between;padding:13px 64px 17px 64px;border-top:1px solid ${P.faint};background:${P.cream};}
    .nbtn{background:none;border:1px solid ${P.border};padding:7px 18px;font-family:'Jost',sans-serif;font-size:.57rem;letter-spacing:.19em;text-transform:uppercase;color:${P.mauve};cursor:pointer;transition:all .18s;}
    .nbtn:hover:not(:disabled){background:${P.palePink};border-color:${P.dustRose};}
    .nbtn:disabled{opacity:.27;cursor:default;}
    .ndots{display:flex;gap:5px;align-items:center;}
    .nd{width:4px;height:4px;border-radius:50%;background:${P.border};cursor:pointer;transition:all .18s;}
    .nd.a{background:${P.dustRose};width:6px;height:6px;}
    @media(max-width:580px){
      .inner,.ch-open,.closing-inner,.fj-inner{padding:36px 24px 32px 32px;}
      .nav{padding:11px 24px 14px 32px;}
      .cover-title{font-size:3rem;}
      .ch-title{font-size:1.8rem;}
      .mirror-text{font-size:1.4rem;}
      .closing-title{font-size:2.1rem;}
      .ch-big-num{font-size:5rem;}
    }
  `;

  const renderPage = () => {
    if (page.type === "cover") return (
      <div className="cover-bg">
        <div style={{ position:"absolute", top:-10, left:10, opacity:.22, pointerEvents:"none" }}>
          <BotanicalCorner color={P.dustRose} size={160} />
        </div>
        <div style={{ position:"absolute", bottom:-10, right:10, opacity:.18, pointerEvents:"none" }}>
          <BotanicalCorner color={P.sage} size={150} flip />
        </div>
        <div style={{ position:"absolute", top:28, right:28, opacity:.14, pointerEvents:"none" }}>
          <BotanicalCorner color={P.mauve} size={100} flip />
        </div>
        <div style={{ position:"relative", zIndex:2, display:"flex", flexDirection:"column", alignItems:"center" }}>
          <Rose size={72} color={P.dustRose} />
          <div style={{ marginTop:18 }}>
            <h1 className="cover-title">She Blooms</h1>
            <div className="cover-rule" />
            <p className="cover-sub">A Book & Journal<br />for the Woman Becoming Herself</p>
          </div>
          <div style={{ marginTop:36, opacity:.32 }}>
            <BotanicalCorner color={P.sage} size={52} />
          </div>
        </div>
      </div>
    );

    if (page.type === "toc") return (
      <div className="inner">
        <div style={{ position:"absolute", top:-8, right:8, opacity:.11, pointerEvents:"none" }}>
          <BotanicalCorner color={P.mauve} flip size={130} />
        </div>
        <p className="toc-label">Contents</p>
        <h2 className="toc-title">What lives<br />inside these pages</h2>
        <div className="rule" />
        {tocChapters.map(ch => (
          <div key={ch.num} className="toc-item" onClick={() => goTo(ch.pageIdx)}>
            <span className="toc-num">{ch.num}</span>
            <span className="toc-name">{ch.title}</span>
          </div>
        ))}
        <div style={{ marginTop:28, borderTop:`1px solid ${P.faint}`, paddingTop:16 }}>
          <p style={{ fontFamily:"'Jost',sans-serif", fontSize:".57rem", letterSpacing:".2em", textTransform:"uppercase", color:P.border, lineHeight:1.7 }}>
            Each chapter ends with a mirror page —<br />a single question to sit with before continuing.
          </p>
        </div>
      </div>
    );

    if (page.type === "chapter-open") return (
      <div className="ch-open" style={{ background:`linear-gradient(160deg,${P.cream} 55%,${page.color}1A 100%)` }}>
        <div style={{ position:"absolute", bottom:-14, right:-10, opacity:.13, pointerEvents:"none" }}>
          <BotanicalCorner color={page.color} size={170} flip />
        </div>
        <div style={{ position:"relative", zIndex:1 }}>
          <p className="ch-num-label">Chapter {page.num}</p>
          <div className="ch-big-num">{page.num}</div>
          <h2 className="ch-title">{page.title}</h2>
          <div className="ch-quote-block" style={{ borderColor:page.color }}>
            <p className="ch-quote">"{page.quote}"</p>
          </div>
        </div>
      </div>
    );

    if (page.type === "read") return (
      <div className="inner">
        <div style={{ position:"absolute", top:-8, left:10, opacity:.13, pointerEvents:"none" }}>
          <BotanicalCorner color={P.dustRose} size={120} />
        </div>
        <p className="eyebrow">Chapter {page.chapterNum}</p>
        <div className="rule" />
        {page.body.map((b, i) => {
          if (b.kind === "p") return <p key={i} className="body-p">{b.text}</p>;
          if (b.kind === "pull") return <p key={i} className="pull">{b.text}</p>;
          return null;
        })}
        {page.journalPrompt && (<>
          <button className="j-toggle" onClick={() => setJournalOpen(o => !o)}>
            <span className="j-diamond">◆</span>
            <span className="j-label">{journalOpen ? "Close journal" : "Open journal"}</span>
          </button>
          {journalOpen && (
            <div className="j-section">
              <p className="j-prompt">{page.journalPrompt}</p>
              <textarea className="j-area" placeholder="Write here..." value={entries[page.id]||""} onChange={e=>setE(page.id,e.target.value)} />
            </div>
          )}
        </>)}
        <div style={{ position:"absolute", bottom:-8, right:8, opacity:.09, pointerEvents:"none" }}>
          <BotanicalCorner color={P.sage} size={100} flip />
        </div>
      </div>
    );

    if (page.type === "mirror") return (
      <div className="mirror-page">
        <div style={{ position:"absolute", top:-10, left:8, opacity:.12, pointerEvents:"none" }}>
          <BotanicalCorner color={P.mauve} size={130} />
        </div>
        <div style={{ position:"absolute", bottom:-10, right:8, opacity:.12, pointerEvents:"none" }}>
          <BotanicalCorner color={P.dustRose} size={120} flip />
        </div>
        <p className="mirror-label">Mirror</p>
        <p className="mirror-text">"{page.text}"</p>
        <div className="mirror-rule" />
        <p className="mirror-sub">Sit with this before turning the page</p>
      </div>
    );

    if (page.type === "pillars") return (
      <div className="inner">
        <p className="eyebrow">Chapter Four</p>
        <div className="rule" />
        {page.pillars.map((p, i) => (
          <div key={i} className="pillar">
            <div className="pillar-n">{p.n}</div>
            <div>
              <p className="pillar-title">{p.title}</p>
              <p className="pillar-body">{p.body}</p>
            </div>
          </div>
        ))}
        <button className="j-toggle" onClick={() => setJournalOpen(o => !o)}>
          <span className="j-diamond">◆</span>
          <span className="j-label">{journalOpen ? "Close journal" : "Open journal"}</span>
        </button>
        {journalOpen && (
          <div className="j-section">
            <p className="j-prompt">{page.journalPrompt}</p>
            <textarea className="j-area" placeholder="Write here..." value={entries[page.id]||""} onChange={e=>setE(page.id,e.target.value)} />
          </div>
        )}
      </div>
    );

    if (page.type === "closing") return (
      <div className="closing-inner" style={{ background:`linear-gradient(150deg,${P.cream} 55%,${P.palePink} 100%)` }}>
        <div style={{ position:"absolute", top:-10, left:10, opacity:.17, pointerEvents:"none" }}>
          <BotanicalCorner color={P.dustRose} size={150} />
        </div>
        <div style={{ position:"absolute", bottom:20, right:20, opacity:.14, pointerEvents:"none" }}>
          <Rose size={78} color={P.dustRose} />
        </div>
        <div style={{ position:"relative", zIndex:1 }}>
          <p className="closing-kicker">Closing</p>
          <h2 className="closing-title">Crown<br />Yourself</h2>
          <div style={{ width:40, height:1, background:P.dustRose, marginBottom:26 }} />
          {[
            "No one is coming to place it on your head.",
            "Not a partner. Not a parent. Not the right circumstances arriving at the right time with a bow on top.",
            "The woman you keep waiting to become — the one who is steadier, sharper, softer where it counts — she exists inside the choices you are making right now. Not the ones you plan to make. The ones you actually make.",
            "Be generous without being a resource people extract freely. Be disciplined not because you're afraid of falling, but because becoming is simply who you are. Be honest — especially with yourself, especially when it's uncomfortable.",
            "You are the architect. This was always your building.",
          ].map((t,i) => <p key={i} className="body-p">{t}</p>)}
          <div style={{ marginTop:20, padding:"14px 18px", borderLeft:`2px solid ${P.dustRose}`, background:P.palePink }}>
            <p style={{ fontFamily:"'Cormorant Garamond',serif", fontStyle:"italic", fontSize:"1.02rem", color:P.slate, lineHeight:1.65 }}>
              Now go build something extraordinary.
            </p>
          </div>
        </div>
      </div>
    );

    if (page.type === "final-journal") return (
      <div className="fj-inner">
        <div style={{ position:"absolute", top:-8, right:8, opacity:.09, pointerEvents:"none" }}>
          <BotanicalCorner color={P.dustRose} flip size={110} />
        </div>
        <h2 className="fj-head">A letter to myself —</h2>
        <p className="fj-sub">One year from now</p>
        <textarea
          className="fj-area"
          placeholder={"Dear future self,\n\nBy the time you read this, I hope you have..."}
          value={entries["final"]||""}
          onChange={e=>setE("final",e.target.value)}
        />
      </div>
    );

    return null;
  };

  return (
    <>
      <style>{css}</style>
      <div className="wrap">
        <div className="book">
          <div className="spine" />
          {renderPage()}
          <div className="nav">
            <button className="nbtn" onClick={() => go(-1)} disabled={idx===0}>← Prev</button>
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:7 }}>
              <div className="ndots">
                {pages.map((_,i) => (
                  <div key={i} className={`nd${i===idx?" a":""}`} onClick={() => goTo(i)} />
                ))}
              </div>
              <span style={{ fontFamily:"'Jost',sans-serif", fontSize:".54rem", letterSpacing:".19em", color:P.border, textTransform:"uppercase" }}>
                {idx+1} / {pages.length}
              </span>
            </div>
            <button className="nbtn" onClick={() => go(1)} disabled={idx===pages.length-1}>Next →</button>
          </div>
        </div>
      </div>
    </>
  );
}
