// Direction B — "Hanji Cream"
// Refined cream + ink, terracotta accent, capital headlines

const creamTokens = {
  bg: '#F2EBD9',
  bgDeep: '#E8DEC6',
  card: '#FBF7EC',
  ink: '#1C1814',
  inkSoft: '#5A5046',
  terra: '#B86A4C',
  terraDeep: '#8A4A33',
  sage: '#6D7A5E',
  hairline: 'rgba(28, 24, 20, 0.14)',
  serif: '"Cormorant Garamond", Georgia, serif',
  sans: '"Work Sans", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

const ct = creamTokens;

const CreamSlide = ({ children, bg = ct.bg, style }) => (
  <div style={{
    width: 1280, height: 720, background: bg,
    color: ct.ink, fontFamily: ct.sans,
    position: 'relative', overflow: 'hidden',
    ...style,
  }}>{children}</div>
);

const CreamChrome = ({ label, n }) => (
  <div style={{
    position: 'absolute', top: 36, left: 56, right: 56,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontFamily: ct.mono, fontSize: 10, letterSpacing: '0.25em',
    textTransform: 'uppercase', color: ct.inkSoft,
  }}>
    <span style={{ fontFamily: ct.serif, fontStyle: 'italic', fontSize: 16, letterSpacing: 0, textTransform: 'none', color: ct.ink }}>
      KGlowMatch
    </span>
    <span>{label}</span>
    <span>— {n} —</span>
  </div>
);

// ───────────────── 01 · Cover ─────────────────
const CreamSlide01 = () => (
  <CreamSlide>
    {/* hanji texture */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'repeating-linear-gradient(0deg, rgba(28,24,20,0.012) 0 2px, transparent 2px 8px), radial-gradient(circle at 80% 40%, rgba(184,106,76,0.10), transparent 60%)',
    }} />
    <CreamChrome label="A Concierge Letter" n="I" />

    <div style={{ position: 'absolute', left: 80, top: 130, right: 80, bottom: 80, display: 'flex', flexDirection: 'column' }}>
      <div style={{
        fontFamily: ct.serif, fontStyle: 'italic', fontSize: 22,
        color: ct.terraDeep, marginBottom: 30,
      }}>
        For the tourist who already knows what they want.
      </div>

      <h1 style={{
        fontFamily: ct.serif, fontWeight: 500,
        fontSize: 132, lineHeight: 0.92, margin: 0,
        letterSpacing: '-0.02em', color: ct.ink,
      }}>
        Skin, hair,<br/>
        and the <span style={{ fontStyle: 'italic', color: ct.terraDeep }}>quiet art</span><br/>
        of asking in<br/>
        the right language.
      </h1>

      <div style={{
        marginTop: 'auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40,
        alignItems: 'end',
      }}>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: ct.inkSoft, maxWidth: 380, margin: 0 }}>
          KGlowMatch is a concierge that translates between visitors
          and Korean beauty specialists. Submit in your language; we'll
          carry the rest in 한국어 and bring it home to you.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: ct.mono, fontSize: 11, color: ct.inkSoft, letterSpacing: '0.1em' }}>
          <div>EN  ·  English</div>
          <div>JA  ·  日本語</div>
          <div>ZH  ·  中文</div>
          <div>KO  ·  한국어</div>
        </div>
      </div>
    </div>

    {/* large numeral */}
    <div style={{
      position: 'absolute', top: 100, right: 80,
      fontFamily: ct.serif, fontSize: 260, lineHeight: 1,
      color: ct.terra, opacity: 0.18, fontWeight: 400,
    }}>01</div>
  </CreamSlide>
);

// ───────────────── 02 · Personas ─────────────────
const CreamPersona = ({ idx, lang, name, age, city, want, shape }) => (
  <div style={{
    flex: 1, padding: '32px 0', borderTop: `1px solid ${ct.hairline}`,
    display: 'grid', gridTemplateColumns: '64px 1fr 100px', gap: 28,
    alignItems: 'start',
  }}>
    <div style={{
      width: 64, height: 64, background: shape,
      borderRadius: idx === 0 ? '50%' : idx === 1 ? '0' : '50% 50% 50% 0',
      transform: idx === 2 ? 'rotate(-45deg)' : 'none',
    }} />
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, marginBottom: 6 }}>
        <span style={{ fontFamily: ct.serif, fontSize: 38, lineHeight: 1 }}>{name}</span>
        <span style={{ fontFamily: ct.mono, fontSize: 11, letterSpacing: '0.15em', color: ct.inkSoft }}>· {age} · {city}</span>
      </div>
      <div style={{
        fontFamily: ct.serif, fontStyle: 'italic', fontSize: 22,
        lineHeight: 1.35, color: ct.terraDeep, maxWidth: 720,
      }}>"{want}"</div>
    </div>
    <div style={{
      fontFamily: ct.mono, fontSize: 11, letterSpacing: '0.2em',
      color: ct.inkSoft, textAlign: 'right', textTransform: 'uppercase',
    }}>{lang}</div>
  </div>
);

const CreamSlide02 = () => (
  <CreamSlide>
    <CreamChrome label="The People We Serve" n="II" />
    <div style={{ position: 'absolute', top: 100, right: 80, fontFamily: ct.serif, fontSize: 260, lineHeight: 1, color: ct.terra, opacity: 0.15 }}>02</div>

    <div style={{ position: 'absolute', left: 80, top: 130, right: 80 }}>
      <div style={{ fontFamily: ct.serif, fontStyle: 'italic', fontSize: 22, color: ct.terraDeep, marginBottom: 20 }}>
        Three travellers. Three weekends. One shared problem.
      </div>
      <h2 style={{ fontFamily: ct.serif, fontWeight: 500, fontSize: 64, margin: 0, lineHeight: 1, maxWidth: 800, letterSpacing: '-0.01em' }}>
        They know what they want.<br/>
        Korean is the missing word.
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 60 }}>
      <CreamPersona idx={0} lang="JA · Skincare"
        name="Yuki" age="32" city="Tokyo"
        want="Glass-skin facial before Monday's client meeting. Nothing that leaves my face red."
        shape={`linear-gradient(135deg, ${ct.terra}, ${ct.terraDeep})`} />
      <CreamPersona idx={1} lang="EN · Aesthetic"
        name="Madison" age="21" city="Brooklyn"
        want="A real adult-acne consult. I've heard about PDT here — I want to actually ask someone."
        shape={`linear-gradient(135deg, ${ct.sage}, #4F5C44)`} />
      <CreamPersona idx={2} lang="ZH · Hair"
        name="Lina" age="27" city="Shanghai"
        want="Hime cut and honey balayage. The photographer is booked Sunday afternoon."
        shape={`linear-gradient(135deg, #D1A878, ${ct.terra})`} />
    </div>
  </CreamSlide>
);

// ───────────────── 03 · How it works ─────────────────
const CreamStep = ({ n, kicker, title, body, art }) => (
  <div style={{
    background: ct.card, padding: 28, border: `1px solid ${ct.hairline}`,
    display: 'flex', flexDirection: 'column', gap: 18,
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      fontFamily: ct.serif, fontSize: 80, lineHeight: 1,
      color: ct.terra, opacity: 0.35, fontStyle: 'italic',
    }}>{n}</div>
    <div style={{ height: 1, background: ct.hairline }} />
    <div style={{ fontFamily: ct.mono, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: ct.terraDeep }}>{kicker}</div>
    <div style={{ fontFamily: ct.serif, fontSize: 28, lineHeight: 1.15 }}>{title}</div>
    <div style={{ fontSize: 14, lineHeight: 1.55, color: ct.inkSoft }}>{body}</div>
    <div style={{ marginTop: 'auto' }}>{art}</div>
  </div>
);

const CreamSlide03 = () => (
  <CreamSlide bg={ct.bgDeep}>
    <CreamChrome label="The Method" n="III" />
    <div style={{ position: 'absolute', top: 100, right: 80, fontFamily: ct.serif, fontSize: 260, lineHeight: 1, color: ct.terra, opacity: 0.13 }}>03</div>

    <div style={{ position: 'absolute', left: 80, top: 130 }}>
      <div style={{ fontFamily: ct.serif, fontStyle: 'italic', fontSize: 22, color: ct.terraDeep, marginBottom: 18 }}>
        How a request travels from English to Apgujeong and back.
      </div>
      <h2 style={{ fontFamily: ct.serif, fontWeight: 500, fontSize: 60, margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>
        Three steps. Mostly while you sleep.
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 60, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, height: 360 }}>
      <CreamStep
        n="I"
        kicker="You · 3 minutes"
        title="Describe it like you'd tell a friend."
        body="A 4-step intake in your language. Photos welcome. We never ask for an account."
        art={<div style={{
          padding: '10px 14px', background: 'white',
          fontFamily: ct.serif, fontStyle: 'italic', fontSize: 14,
          border: `1px solid ${ct.hairline}`,
        }}>"My skin gets blotchy after long flights — can someone fix it?"</div>}
      />
      <CreamStep
        n="II"
        kicker="We · same evening"
        title="Translated and briefed to Korean specialists."
        body="AI rewrites your message as a precise clinical brief in 한국어, sent only to vetted, matching providers."
        art={<div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: ct.mono, fontSize: 11, letterSpacing: '0.15em' }}>
          <span style={{ background: 'white', padding: '6px 10px', border: `1px solid ${ct.hairline}` }}>EN</span>
          <span style={{ flex: 1, height: 1, background: ct.terra }} />
          <span style={{ background: ct.terra, color: 'white', padding: '6px 10px', fontFamily: ct.serif, fontStyle: 'italic', fontSize: 13, letterSpacing: 0 }}>KOR</span>
        </div>}
      />
      <CreamStep
        n="III"
        kicker="Them · within a day"
        title="Quotes, in your language, in your inbox."
        body="Compare prices, dates and specialist notes side-by-side. Message anyone back without leaving English."
        art={<div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['Glow Clinic · ₩185,000 · Sat 14:00', 'Aera Skin · ₩220,000 · Sat 11:00', 'Lush Derm · ₩165,000 · Sun 16:30'].map((q, i) => (
            <div key={i} style={{ fontSize: 11, fontFamily: ct.mono, color: i === 1 ? ct.terraDeep : ct.inkSoft, fontWeight: i === 1 ? 600 : 400 }}>{q}</div>
          ))}
        </div>}
      />
    </div>
  </CreamSlide>
);

// ───────────────── 04 · Categories ─────────────────
const CreamCat = ({ roman, name, kor, examples, accent }) => (
  <div style={{
    padding: 28, background: ct.card,
    border: `1px solid ${ct.hairline}`,
    position: 'relative', minHeight: 340,
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{
      width: 36, height: 36, borderRadius: '50%',
      background: accent, marginBottom: 18,
    }} />
    <div style={{ fontFamily: ct.mono, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: ct.inkSoft }}>Chapter {roman}</div>
    <div style={{ fontFamily: ct.serif, fontSize: 38, lineHeight: 1, marginTop: 6, marginBottom: 2 }}>{name}</div>
    <div style={{ fontFamily: ct.serif, fontStyle: 'italic', fontSize: 18, color: ct.terraDeep, marginBottom: 18 }}>{kor}</div>
    <div style={{ height: 1, background: ct.hairline, marginBottom: 16 }} />
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      {examples.map((e) => (
        <li key={e} style={{ fontSize: 13, color: ct.inkSoft, display: 'flex', gap: 12, fontFamily: ct.sans }}>
          <span style={{ fontFamily: ct.serif, color: accent, fontStyle: 'italic' }}>·</span>{e}
        </li>
      ))}
    </ul>
  </div>
);

const CreamSlide04 = () => (
  <CreamSlide>
    <CreamChrome label="A Menu, Loosely" n="IV" />
    <div style={{ position: 'absolute', top: 100, right: 80, fontFamily: ct.serif, fontSize: 260, lineHeight: 1, color: ct.terra, opacity: 0.13 }}>04</div>

    <div style={{ position: 'absolute', left: 80, top: 130 }}>
      <div style={{ fontFamily: ct.serif, fontStyle: 'italic', fontSize: 22, color: ct.terraDeep, marginBottom: 18 }}>
        You're not limited to one category. Ask for a stack.
      </div>
      <h2 style={{ fontFamily: ct.serif, fontWeight: 500, fontSize: 60, margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>
        From a derm consult to a perm.
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 60, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
      <CreamCat roman="I"   name="Skincare"  kor="피부"   examples={['Glass skin facial', 'Hydra-boost', 'PDT for acne', 'Brightening peel']} accent={ct.terra} />
      <CreamCat roman="II"  name="Aesthetic" kor="시술"   examples={['Botox brow', 'Lip filler', 'Rhinoplasty consult', 'Thread lift']} accent={ct.terraDeep} />
      <CreamCat roman="III" name="Hair"      kor="헤어"   examples={['Hair perm', 'Honey balayage', 'Hime cut', 'Scalp clinic']} accent={ct.sage} />
      <CreamCat roman="IV"  name="Wellness"  kor="웰니스" examples={['Vitamin IV', 'Lymph massage', 'Hanbang spa', 'Postpartum care']} accent="#8C7B5A" />
    </div>
  </CreamSlide>
);

// ───────────────── 05 · Conversation ─────────────────
const CreamLine = ({ side, who, lang, text, sub }) => (
  <div style={{
    display: 'flex', justifyContent: side === 'right' ? 'flex-end' : 'flex-start',
  }}>
    <div style={{
      maxWidth: 340,
      borderLeft: side === 'left' ? `2px solid ${ct.terra}` : 'none',
      borderRight: side === 'right' ? `2px solid ${ct.ink}` : 'none',
      paddingLeft: side === 'left' ? 16 : 0,
      paddingRight: side === 'right' ? 16 : 0,
      textAlign: side === 'right' ? 'right' : 'left',
    }}>
      <div style={{
        fontFamily: ct.mono, fontSize: 10, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: ct.inkSoft, marginBottom: 8,
      }}>{who} · {lang}</div>
      <div style={{ fontFamily: ct.serif, fontSize: 19, fontStyle: 'italic', lineHeight: 1.35, color: ct.ink }}>
        "{text}"
      </div>
      {sub && <div style={{ marginTop: 6, fontSize: 11, color: ct.inkSoft, fontFamily: ct.mono, letterSpacing: '0.05em' }}>{sub}</div>}
    </div>
  </div>
);

const CreamSlide05 = () => (
  <CreamSlide bg={ct.card}>
    <CreamChrome label="A Correspondence" n="V" />
    <div style={{ position: 'absolute', top: 100, right: 80, fontFamily: ct.serif, fontSize: 260, lineHeight: 1, color: ct.terra, opacity: 0.13 }}>05</div>

    <div style={{ position: 'absolute', left: 80, top: 130, width: 480 }}>
      <div style={{ fontFamily: ct.serif, fontStyle: 'italic', fontSize: 22, color: ct.terraDeep, marginBottom: 18 }}>
        Booking is a conversation, not a form.
      </div>
      <h2 style={{ fontFamily: ct.serif, fontWeight: 500, fontSize: 56, margin: 0, lineHeight: 1, letterSpacing: '-0.01em' }}>
        Stay in your language. <span style={{ fontStyle: 'italic', color: ct.terraDeep }}>Always.</span>
      </h2>
      <p style={{ marginTop: 28, fontSize: 15, lineHeight: 1.6, color: ct.inkSoft }}>
        Every follow-up is translated in both directions and quietly delivered by email — so a question about
        downtime, or a rescheduling, never becomes a Google Translate puzzle.
      </p>
      <div style={{ marginTop: 28, borderTop: `1px solid ${ct.hairline}`, paddingTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {[
          ['Automatic', 'KO ⇄ your language'],
          ['Asynchronous', 'No live chat pressure'],
          ['Email only', 'No app to install'],
          ['Token-secured', 'No password to remember'],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: ct.serif, fontSize: 20, fontStyle: 'italic' }}>{k}</div>
            <div style={{ fontSize: 12, color: ct.inkSoft, marginTop: 3 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>

    <div style={{
      position: 'absolute', right: 80, top: 140, bottom: 60, width: 520,
      background: ct.bg, border: `1px solid ${ct.hairline}`,
      padding: '32px 32px', display: 'flex', flexDirection: 'column', gap: 22,
    }}>
      <div style={{ fontFamily: ct.mono, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: ct.inkSoft, paddingBottom: 16, borderBottom: `1px solid ${ct.hairline}`, display: 'flex', justifyContent: 'space-between' }}>
        <span>Re: Quote · Glow Aesthetic</span>
        <span>Apgujeong-dong</span>
      </div>
      <CreamLine side="right" who="Yuki" lang="JA" text="月曜の朝、撮影できる肌ですか？" sub="→ translated to KO before sending" />
      <CreamLine side="left"  who="Dr. Park" lang="KO → JA" text="月曜の朝までには赤みは引きます。LEDを追加するなら ₩20,000。" sub="From 한국어" />
      <CreamLine side="right" who="Yuki" lang="JA" text="LED追加で。16時に変更可能ですか？" />
      <CreamLine side="left"  who="Dr. Park" lang="KO → JA" text="16時に予約変更しました。日曜にお会いしましょう。" sub="From 한국어" />
    </div>
  </CreamSlide>
);

// ───────────────── 06 · Get started ─────────────────
const CreamSlide06 = () => (
  <CreamSlide>
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(184,106,76,0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(109,122,94,0.10), transparent 55%)',
    }} />
    <CreamChrome label="An Invitation" n="VI" />

    <div style={{ position: 'absolute', left: 80, top: 160, right: 80 }}>
      <div style={{ fontFamily: ct.serif, fontStyle: 'italic', fontSize: 22, color: ct.terraDeep, marginBottom: 22 }}>
        Free to ask. Paid only when you book — in Korea.
      </div>
      <h1 style={{
        fontFamily: ct.serif, fontWeight: 500,
        fontSize: 144, lineHeight: 0.9, margin: 0, letterSpacing: '-0.02em',
      }}>
        Begin before<br/>
        you <span style={{ fontStyle: 'italic', color: ct.terraDeep }}>board.</span>
      </h1>
    </div>

    <div style={{ position: 'absolute', left: 80, bottom: 70, right: 80, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'end' }}>
      <div>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: ct.inkSoft, maxWidth: 460, margin: 0 }}>
          Submit a request before you fly. Quotes return within a day. You are never
          charged for asking — Korean providers pay us per lead, in 원.
        </p>
        <div style={{ marginTop: 28, display: 'flex', gap: 14, alignItems: 'center' }}>
          <div style={{
            padding: '14px 26px', border: `1.5px solid ${ct.ink}`,
            background: ct.ink, color: ct.bg,
            fontFamily: ct.serif, fontStyle: 'italic', fontSize: 18,
          }}>kglowmatch.com →</div>
          <div style={{
            padding: '14px 26px', border: `1.5px solid ${ct.ink}`,
            fontFamily: ct.serif, fontStyle: 'italic', fontSize: 18, color: ct.ink,
          }}>Read a sample brief</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {[
          ['3', 'minutes', 'average intake'],
          ['<24', 'hours', 'until quotes return'],
          ['4', 'languages', 'EN · 日 · 中 · 한'],
          ['₩0', '', 'to ask · pay on book'],
        ].map(([big, unit, sub]) => (
          <div key={sub} style={{ borderTop: `1px solid ${ct.hairline}`, paddingTop: 16 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <div style={{ fontFamily: ct.serif, fontSize: 56, lineHeight: 1, color: ct.terraDeep }}>{big}</div>
              {unit && <div style={{ fontFamily: ct.mono, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: ct.inkSoft }}>{unit}</div>}
            </div>
            <div style={{ fontSize: 12, color: ct.inkSoft, marginTop: 6 }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  </CreamSlide>
);

window.CreamSlides = {
  CreamSlide01, CreamSlide02, CreamSlide03, CreamSlide04, CreamSlide05, CreamSlide06,
};
