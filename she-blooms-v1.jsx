import { useState, useEffect } from "react";

const palette = {
  cream: "#FAF6F0",
  dustyRose: "#D4A5A5",
  sage: "#8FAF8F",
  mauve: "#B08898",
  gold: "#C9A96E",
  darkBlue: "#2E3D4F",
  text: "#3A2E2E",
  lightPink: "#F2E0E0",
  paleGreen: "#E8F0E8",
  border: "#D9C8C0",
};

const botanicalSVG = ({ color = "#D4A5A5", opacity = 0.3, size = 120, flip = false }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" style={{ opacity, transform: flip ? "scaleX(-1)" : "none" }}>
    <g fill="none" stroke={color} strokeWidth="1.2">
      <path d="M60 110 Q55 80 40 60 Q30 45 20 30" />
      <path d="M60 110 Q65 75 80 55 Q90 42 95 25" />
      <path d="M40 60 Q25 55 15 45" />
      <path d="M50 78 Q35 72 28 62" />
      <path d="M70 65 Q85 60 90 48" />
      <ellipse cx="20" cy="28" rx="8" ry="12" transform="rotate(-30 20 28)" fill={color} fillOpacity="0.2" />
      <ellipse cx="96" cy="23" rx="7" ry="11" transform="rotate(25 96 23)" fill={color} fillOpacity="0.2" />
      <ellipse cx="14" cy="44" rx="6" ry="9" transform="rotate(-50 14 44)" fill={color} fillOpacity="0.15" />
      <ellipse cx="91" cy="47" rx="6" ry="9" transform="rotate(40 91 47)" fill={color} fillOpacity="0.15" />
      <circle cx="60" cy="108" r="3" fill={color} fillOpacity="0.4" />
      <circle cx="38" cy="58" r="2" fill={color} fillOpacity="0.3" />
      <circle cx="82" cy="54" r="2" fill={color} fillOpacity="0.3" />
    </g>
  </svg>
);

const RoseSVG = ({ color = "#D4A5A5", size = 60, opacity = 0.4 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" style={{ opacity }}>
    <g fill={color}>
      <ellipse cx="30" cy="30" rx="8" ry="6" fillOpacity="0.9" />
      <ellipse cx="22" cy="26" rx="7" ry="9" transform="rotate(-20 22 26)" fillOpacity="0.6" />
      <ellipse cx="38" cy="26" rx="7" ry="9" transform="rotate(20 38 26)" fillOpacity="0.6" />
      <ellipse cx="20" cy="35" rx="8" ry="7" transform="rotate(-40 20 35)" fillOpacity="0.4" />
      <ellipse cx="40" cy="35" rx="8" ry="7" transform="rotate(40 40 35)" fillOpacity="0.4" />
      <ellipse cx="30" cy="42" rx="9" ry="6" fillOpacity="0.35" />
    </g>
    <g fill="none" stroke={palette.sage} strokeWidth="0.8" opacity="0.5">
      <path d="M30 48 Q28 52 25 55" />
      <path d="M30 48 Q32 52 35 55" />
      <ellipse cx="23" cy="57" rx="4" ry="3" transform="rotate(-15 23 57)" fill={palette.sage} fillOpacity="0.3" />
      <ellipse cx="37" cy="57" rx="4" ry="3" transform="rotate(15 37 57)" fill={palette.sage} fillOpacity="0.3" />
    </g>
  </svg>
);

const chapters = [
  {
    id: 0,
    type: "cover",
    title: "She Blooms",
    subtitle: "A Book & Journal for the Woman Becoming Herself",
  },
  {
    id: 1,
    type: "intro",
    title: "Before You Begin",
    content: `Many women spend their most luminous years searching for a safe harbor — only to discover, sometimes too late, that the most unshakeable harbor has always been themselves.\n\nThis is not a book that will comfort you with soft lies. It is a mirror. Sometimes the reflection will be unflattering. That is the point.\n\nWhat you hold is both a philosophy and a practice — chapters to read slowly, and blank spaces to meet yourself honestly. The writing asks something of you. The journaling asks even more.\n\nYou do not have to be broken to begin. You only have to be willing.`,
    journalPrompt: "What brought you here? Write without editing — what is the thing you are quietly hoping this book will help you find?",
    accentColor: palette.dustyRose,
  },
  {
    id: 2,
    type: "chapter",
    number: "I",
    title: "The Comfortable Trap",
    subtitle: "On Marriage, Ambition & the Slow Erosion of Self",
    content: `There is a particular kind of disappearing that happens so gradually you don't notice until the woman you were is a stranger in old photographs.\n\nIt doesn't announce itself. It arrives disguised as devotion — *I gave everything for my family.* As virtue — *I sacrificed my ambitions for love.* As peace — *I just wanted a quiet life.*\n\nBut here is the uncomfortable truth: marriage and motherhood have never made anyone small. Smallness is a choice, dressed up in noble clothing.\n\nConsider the woman who stepped away from her career to raise children — and in that same season, taught herself screenwriting in the early mornings before the house woke. Years later, she sold her first script for a million yuan. The money was secondary. What mattered was that she never stopped being *her.*\n\nThe extraordinary woman understands: a relationship is a chapter, not the whole story. No matter the season of her life, she keeps a flame burning for herself alone — a skill she tends, a mind she stretches, a body she respects. Not because she is selfish. Because a woman who has abandoned herself has nothing real left to give.`,
    journalPrompt: "Where in your life have you stopped tending your own flame? What did you once love doing that you have quietly let go?",
    reflection: "The difference between ordinary and extraordinary is not talent. It is the refusal to stop.",
    accentColor: palette.mauve,
  },
  {
    id: 3,
    type: "chapter",
    number: "II",
    title: "The Art of Largeness",
    subtitle: "On Generosity Without Foolishness",
    content: `The meanest thing a woman can do to herself is make herself small — not physically, but energetically. To tally every slight. To remember every debt unpaid. To keep score with a precision that would exhaust an accountant.\n\nPettiness is exhausting. And it is invisible to everyone except the person practicing it.\n\nThere is a woman who, on her first visit to her future mother-in-law's home, was not given the traditional gift of money. She noticed. She chose not to care. Later that same week, a colleague quietly took credit for a deal she had built from nothing. She felt the sting of it — and then she let it pass, because the deal had proved her capability to herself, which was the only audience that mattered.\n\nThis is not weakness. This is the most refined form of self-possession.\n\nBut generosity is not the same as endurance. The woman of character is large-hearted *and* clear-eyed. She forgives human error. She does not absorb deliberate cruelty. The distinction is everything:\n\n*If someone is flawed and trying — extend grace.*\n*If someone is using your kindness as raw material for their agenda — leave without explanation.*\n\nNo scene. No speech. Just the quiet closing of a door.`,
    journalPrompt: "Think of someone you are still keeping score with. What would it feel like to simply put down the ledger? What are you afraid you would lose if you let it go?",
    reflection: "Generosity is power. Tolerance of cruelty is not generosity — it is the confusion of suffering with virtue.",
    accentColor: palette.sage,
  },
  {
    id: 4,
    type: "chapter",
    number: "III",
    title: "Discipline in the Sunlight",
    subtitle: "On Staying Sharp When Life Is Kind",
    content: `Anyone can find discipline in disaster. The body, threatened, becomes capable of extraordinary things. The woman who has lost everything — a marriage, a job, her figure, her confidence — will often surprise herself with what she rebuilds.\n\nBut this is the lesser wisdom.\n\nThe greater wisdom is this: *do not wait for the disaster.*\n\nThere is a cautionary story of a woman who had everything — career, beauty, a husband who loved her, a life so comfortable it had no visible edges. And so she softened. Not deliberately — there was no moment of decision. Only small surrenders, one after another: the workout skipped, the book unread, the skill untended, the second glass of wine poured. By the time she understood what she had traded, she was already paying the debt.\n\nShe rebuilt herself. That deserves respect. But she carried something the second time around that the first version never had: the knowledge that she had chosen this. The grief of that is particular and slow.\n\nThe extraordinary woman does not need a crisis to stay awake. She cultivates the rare skill of being grateful *and* hungry at the same time. She does not let comfort become her only compass. She keeps sharpening herself not because she fears falling, but because she has decided that this — the continuous becoming — is simply who she is.`,
    journalPrompt: "Right now, in the easiest, most comfortable areas of your life — where have you been coasting? What would it look like to bring intention back to that place?",
    reflection: "Discipline in hardship is survival. Discipline in abundance is character.",
    accentColor: palette.gold,
  },
  {
    id: 5,
    type: "chapter",
    number: "IV",
    title: "The Four Pillars",
    subtitle: "A Framework for Living, Not Just Surviving",
    content: ``,
    pillars: [
      {
        number: "01",
        title: "Live for yourself before you live for love",
        body: "A woman who requires another person to complete her is not ready to share herself fully — she is looking to be rescued. Build your own joy. Pursue your own beauty. Cultivate your own peace. When you arrive at a relationship already whole, you bring something worth having. You stop being someone who needs saving and become someone worth choosing.",
      },
      {
        number: "02",
        title: "Release the promise, hold the present",
        body: "Words spoken in ardor are sincere in the moment they are spoken. They are not binding contracts against the unknown future. The woman of depth accepts impermanence without bitterness. Her inner posture is not desperate clinging but quiet confidence: *If you stay, I welcome you. If you go, I remain.*",
      },
      {
        number: "03",
        title: "Invest in yourself instead of managing him",
        body: "Every hour spent reading his messages, analyzing his silences, or engineering his attention is an hour stolen from becoming more fully yourself. Jealousy and surveillance are not love — they are anxiety wearing love's face. When you are genuinely growing — in mind, body, skill, spirit — you stop performing security and start embodying it.",
      },
      {
        number: "04",
        title: "Let your composure be your loudest statement",
        body: "Complaint is a slow poison. It changes nothing and reshapes the complainer into someone smaller, harder to be around. When the storm arrives — and it will — the extraordinary woman goes quiet. She breathes. She analyses. She acts. The silence before her response is not emptiness. It is the sound of a woman deciding who she will be.",
      },
    ],
    journalPrompt: "Which of these four pillars feels most foreign to you right now? Write about what it would look like, in your actual daily life, to build that one.",
    accentColor: palette.darkBlue,
  },
  {
    id: 6,
    type: "closing",
    title: "Crown Yourself",
    content: `No one is coming to place the crown on your head.\n\nNot a partner. Not a parent. Not the right circumstance arriving at the right time.\n\nThe most honest thing this book can tell you is that the woman you are waiting to become — the one who is calmer, sharper, softer where it matters and unbreakable where it counts — she already exists inside the choices you make today.\n\nBe generous without being foolish.\nBe disciplined without being harsh.\nBe loyal to others, but ruthlessly loyal to yourself first.\n\nYou are the architect. This was always your building to design.\n\nNow go build something extraordinary.`,
    finalPrompt: "Write a letter to yourself — one year from now. Who will she be? What will she have let go of? What will she finally have chosen for herself?",
    accentColor: palette.dustyRose,
  },
];

const fonts = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Josefin+Sans:wght@300;400&display=swap');
`;

export default function SheBloomsJournal() {
  const [currentPage, setCurrentPage] = useState(0);
  const [journalEntries, setJournalEntries] = useState({});
  const [showJournal, setShowJournal] = useState(false);
  const [animating, setAnimating] = useState(false);

  const page = chapters[currentPage];
  const total = chapters.length;

  const navigate = (dir) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentPage((p) => Math.max(0, Math.min(total - 1, p + dir)));
      setShowJournal(false);
      setAnimating(false);
    }, 300);
  };

  const updateEntry = (key, val) => {
    setJournalEntries((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <style>{`
        ${fonts}
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #2E3D4F; }
        .book-outer {
          min-height: 100vh;
          background: linear-gradient(135deg, #2E3D4F 0%, #1a2535 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          font-family: 'EB Garamond', Georgia, serif;
        }
        .book-container {
          width: 100%;
          max-width: 680px;
          background: ${palette.cream};
          border-radius: 2px;
          box-shadow: -8px 0 20px rgba(0,0,0,0.3), 8px 4px 30px rgba(0,0,0,0.4), inset 3px 0 6px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
          opacity: ${animating ? 0 : 1};
          transition: opacity 0.3s ease;
        }
        .spine-shadow {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 18px;
          background: linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.04) 60%, transparent 100%);
          z-index: 10;
          pointer-events: none;
        }
        .page-content {
          padding: 56px 60px 40px 68px;
          min-height: 85vh;
          position: relative;
        }
        .corner-botanical {
          position: absolute;
          pointer-events: none;
        }
        .corner-tl { top: -10px; left: 10px; }
        .corner-br { bottom: -10px; right: 10px; transform: rotate(180deg); }
        .cover-page {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(160deg, #FAF6F0 0%, #F2E0E0 40%, #E8F0E8 100%);
          padding: 60px 40px;
          position: relative;
        }
        .cover-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 4.2rem;
          font-weight: 300;
          color: ${palette.darkBlue};
          letter-spacing: 0.05em;
          line-height: 1;
          margin-bottom: 8px;
        }
        .cover-subtitle {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          color: ${palette.mauve};
          text-transform: uppercase;
          margin-top: 16px;
          line-height: 1.8;
        }
        .cover-divider {
          width: 80px;
          height: 1px;
          background: ${palette.dustyRose};
          margin: 24px auto;
        }
        .chapter-eyebrow {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: ${palette.mauve};
          margin-bottom: 8px;
        }
        .chapter-number {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 5rem;
          font-weight: 300;
          color: ${palette.border};
          line-height: 1;
          margin-bottom: -8px;
        }
        .chapter-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 400;
          color: ${palette.darkBlue};
          line-height: 1.2;
          margin-bottom: 6px;
        }
        .chapter-subtitle {
          font-family: 'EB Garamond', Georgia, serif;
          font-style: italic;
          font-size: 0.95rem;
          color: ${palette.mauve};
          margin-bottom: 28px;
        }
        .rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${palette.border}, transparent);
          margin-bottom: 28px;
        }
        .body-text {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 1.05rem;
          line-height: 1.85;
          color: ${palette.text};
          white-space: pre-wrap;
        }
        .body-text em {
          font-style: italic;
          color: ${palette.mauve};
        }
        .reflection-block {
          margin: 28px 0;
          padding: 18px 24px;
          border-left: 2px solid ${palette.dustyRose};
          background: ${palette.lightPink};
        }
        .reflection-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.15rem;
          font-style: italic;
          color: ${palette.darkBlue};
          line-height: 1.6;
        }
        .pillar-item {
          margin-bottom: 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        .pillar-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2rem;
          font-weight: 300;
          color: ${palette.border};
          line-height: 1;
          min-width: 36px;
        }
        .pillar-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.15rem;
          font-weight: 600;
          color: ${palette.darkBlue};
          margin-bottom: 6px;
        }
        .pillar-body {
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 0.98rem;
          line-height: 1.75;
          color: ${palette.text};
        }
        .journal-toggle {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid ${palette.border};
          cursor: pointer;
          background: none;
          border-left: none;
          border-right: none;
          border-bottom: none;
          width: 100%;
          text-align: left;
        }
        .journal-toggle-label {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${palette.mauve};
        }
        .journal-icon {
          width: 20px;
          height: 20px;
          border: 1px solid ${palette.dustyRose};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${palette.dustyRose};
          font-size: 14px;
          transition: background 0.2s;
        }
        .journal-section {
          margin-top: 0;
          padding: 24px;
          background: linear-gradient(135deg, #FAF6F0, #F5EDE8);
          border: 1px solid ${palette.border};
          position: relative;
        }
        .journal-prompt {
          font-family: 'EB Garamond', Georgia, serif;
          font-style: italic;
          font-size: 0.98rem;
          color: ${palette.text};
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .journal-textarea {
          width: 100%;
          min-height: 140px;
          background: transparent;
          border: none;
          border-bottom: 1px solid ${palette.border};
          font-family: 'EB Garamond', Georgia, serif;
          font-size: 1rem;
          color: ${palette.darkBlue};
          line-height: 1.9;
          resize: none;
          outline: none;
          padding: 8px 4px;
          letter-spacing: 0.01em;
        }
        .journal-textarea::placeholder {
          color: ${palette.border};
          font-style: italic;
        }
        .journal-lines {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          pointer-events: none;
          overflow: hidden;
          opacity: 0.3;
        }
        .nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 68px 20px 68px;
          border-top: 1px solid ${palette.border};
          background: ${palette.cream};
        }
        .nav-btn {
          background: none;
          border: 1px solid ${palette.border};
          padding: 8px 20px;
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: ${palette.mauve};
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-btn:hover {
          background: ${palette.lightPink};
          border-color: ${palette.dustyRose};
        }
        .nav-btn:disabled {
          opacity: 0.3;
          cursor: default;
        }
        .page-indicator {
          font-family: 'Josefin Sans', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: ${palette.border};
          text-transform: uppercase;
        }
        .intro-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2.4rem;
          font-weight: 300;
          color: ${palette.darkBlue};
          margin-bottom: 24px;
          line-height: 1.2;
        }
        .closing-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 2.8rem;
          font-weight: 300;
          color: ${palette.darkBlue};
          margin-bottom: 4px;
          line-height: 1.2;
        }
        .final-cta {
          margin-top: 32px;
          padding: 20px 24px;
          background: linear-gradient(135deg, ${palette.lightPink}, #F0EAF5);
          border: 1px solid ${palette.dustyRose};
          text-align: center;
        }
        .final-cta-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.1rem;
          font-style: italic;
          color: ${palette.darkBlue};
        }
        .dots {
          display: flex;
          gap: 6px;
          align-items: center;
        }
        .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: ${palette.border};
          transition: background 0.2s;
        }
        .dot.active {
          background: ${palette.dustyRose};
        }
        @media (max-width: 600px) {
          .page-content { padding: 40px 28px 32px 36px; }
          .nav-bar { padding: 14px 28px 16px 36px; }
          .cover-title { font-size: 3rem; }
          .chapter-title { font-size: 1.8rem; }
        }
      `}</style>

      <div className="book-outer">
        <div className="book-container">
          <div className="spine-shadow" />

          {/* Page */}
          {page.type === "cover" && (
            <div className="cover-page">
              <div className="corner-botanical corner-tl" style={{ opacity: 0.25 }}>
                {botanicalSVG({ color: palette.dustyRose, opacity: 1, size: 130 })}
              </div>
              <div style={{ position: "absolute", top: 20, right: 20, opacity: 0.2 }}>
                {botanicalSVG({ color: palette.sage, opacity: 1, size: 110, flip: true })}
              </div>
              <div style={{ position: "absolute", bottom: 20, left: 20, opacity: 0.15, transform: "rotate(180deg)" }}>
                {botanicalSVG({ color: palette.mauve, opacity: 1, size: 100 })}
              </div>
              <div style={{ position: "absolute", bottom: 30, right: 30, opacity: 0.2 }}>
                <RoseSVG color={palette.dustyRose} size={70} opacity={1} />
              </div>

              <div style={{ position: "relative", zIndex: 2 }}>
                <div style={{ marginBottom: 20 }}>
                  <RoseSVG color={palette.dustyRose} size={80} opacity={0.7} />
                </div>
                <h1 className="cover-title">She Blooms</h1>
                <div className="cover-divider" />
                <p className="cover-subtitle">
                  A Book & Journal<br />for the Woman<br />Becoming Herself
                </p>
                <div style={{ marginTop: 36, opacity: 0.5 }}>
                  {botanicalSVG({ color: palette.sage, opacity: 1, size: 60 })}
                </div>
              </div>
            </div>
          )}

          {page.type === "intro" && (
            <div className="page-content">
              <div className="corner-botanical corner-tl">
                {botanicalSVG({ color: palette.dustyRose, opacity: 0.18, size: 110 })}
              </div>
              <p className="chapter-eyebrow">Prologue</p>
              <h2 className="intro-title">{page.title}</h2>
              <div className="rule" />
              <p className="body-text">{page.content}</p>

              <button className="journal-toggle" onClick={() => setShowJournal(!showJournal)}>
                <div className="journal-icon">{showJournal ? "−" : "✦"}</div>
                <span className="journal-toggle-label">Your turn · Journal</span>
              </button>
              {showJournal && (
                <div className="journal-section">
                  <p className="journal-prompt">✦ {page.journalPrompt}</p>
                  <textarea
                    className="journal-textarea"
                    placeholder="Begin writing here..."
                    value={journalEntries[`page-${page.id}`] || ""}
                    onChange={(e) => updateEntry(`page-${page.id}`, e.target.value)}
                  />
                </div>
              )}
              <div className="corner-botanical corner-br">
                {botanicalSVG({ color: palette.sage, opacity: 0.15, size: 90, flip: true })}
              </div>
            </div>
          )}

          {page.type === "chapter" && (
            <div className="page-content">
              <div className="corner-botanical corner-tl">
                {botanicalSVG({ color: page.accentColor, opacity: 0.18, size: 110 })}
              </div>

              <p className="chapter-eyebrow">Chapter {page.number}</p>
              <div className="chapter-number">{page.number}</div>
              <h2 className="chapter-title">{page.title}</h2>
              {page.subtitle && <p className="chapter-subtitle">{page.subtitle}</p>}
              <div className="rule" />

              {page.pillars ? (
                <div>
                  {page.pillars.map((p) => (
                    <div key={p.number} className="pillar-item">
                      <div className="pillar-num">{p.number}</div>
                      <div>
                        <p className="pillar-title">{p.title}</p>
                        <p className="pillar-body">{p.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="body-text" dangerouslySetInnerHTML={{ __html: page.content.replace(/\*(.*?)\*/g, '<em>$1</em>') }} />
              )}

              {page.reflection && (
                <div className="reflection-block">
                  <p className="reflection-text">" {page.reflection} "</p>
                </div>
              )}

              <button className="journal-toggle" onClick={() => setShowJournal(!showJournal)}>
                <div className="journal-icon">{showJournal ? "−" : "✦"}</div>
                <span className="journal-toggle-label">Your turn · Journal</span>
              </button>
              {showJournal && (
                <div className="journal-section">
                  <p className="journal-prompt">✦ {page.journalPrompt}</p>
                  <textarea
                    className="journal-textarea"
                    placeholder="Begin writing here..."
                    value={journalEntries[`page-${page.id}`] || ""}
                    onChange={(e) => updateEntry(`page-${page.id}`, e.target.value)}
                  />
                </div>
              )}
              <div className="corner-botanical corner-br">
                {botanicalSVG({ color: palette.mauve, opacity: 0.13, size: 90 })}
              </div>
            </div>
          )}

          {page.type === "closing" && (
            <div className="page-content">
              <div className="corner-botanical corner-tl">
                {botanicalSVG({ color: palette.dustyRose, opacity: 0.2, size: 110 })}
              </div>
              <div style={{ position: "absolute", top: 20, right: 20 }}>
                <RoseSVG color={palette.dustyRose} size={55} opacity={0.25} />
              </div>

              <p className="chapter-eyebrow">Closing</p>
              <h2 className="closing-title">{page.title}</h2>
              <div className="rule" />
              <p className="body-text">{page.content}</p>

              <div className="final-cta" style={{ marginTop: 28 }}>
                <p className="final-cta-text">✦ Final Journal Entry ✦</p>
              </div>

              <div className="journal-section" style={{ marginTop: 0, borderTop: "none" }}>
                <p className="journal-prompt">{page.finalPrompt}</p>
                <textarea
                  className="journal-textarea"
                  placeholder="Dear future self..."
                  style={{ minHeight: 180 }}
                  value={journalEntries[`page-${page.id}`] || ""}
                  onChange={(e) => updateEntry(`page-${page.id}`, e.target.value)}
                />
              </div>
              <div className="corner-botanical corner-br">
                {botanicalSVG({ color: palette.sage, opacity: 0.15, size: 90, flip: true })}
              </div>
            </div>
          )}

          {/* Nav */}
          <div className="nav-bar">
            <button className="nav-btn" onClick={() => navigate(-1)} disabled={currentPage === 0}>
              ← Prev
            </button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div className="dots">
                {chapters.map((_, i) => (
                  <div
                    key={i}
                    className={`dot ${i === currentPage ? "active" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => { setCurrentPage(i); setShowJournal(false); }}
                  />
                ))}
              </div>
              <span className="page-indicator">{currentPage + 1} of {total}</span>
            </div>
            <button className="nav-btn" onClick={() => navigate(1)} disabled={currentPage === total - 1}>
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
