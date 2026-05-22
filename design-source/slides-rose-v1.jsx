// Direction A — "Lila Bloom"
// Soft rose pastel, serif headlines, K-beauty editorial

const roseTokens = {
  bg: '#FBEFE9',
  bgDeep: '#F4DDD3',
  card: '#FFFFFF',
  ink: '#2B1E1C',
  inkSoft: '#6B5450',
  rose: '#C77B85',
  roseDeep: '#9B4F5A',
  sage: '#9FA88A',
  cream: '#FFF7F2',
  hairline: 'rgba(43, 30, 28, 0.12)',
  serif: '"DM Serif Display", "Cormorant Garamond", Georgia, serif',
  sans: '"Manrope", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

const rt = roseTokens;

const RoseSlide = ({ children, bg = rt.bg, style }) => (
  <div style={{
    width: 1280, height: 720, background: bg,
    color: rt.ink, fontFamily: rt.sans,
    position: 'relative', overflow: 'hidden',
    ...style,
  }}>{children}</div>
);

const RoseChrome = ({ label, n }) => (
  <>
    <div style={{
      position: 'absolute', top: 36, left: 56, right: 56,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      fontFamily: rt.mono, fontSize: 11, letterSpacing: '0.18em',
      textTransform: 'uppercase', color: rt.inkSoft,
    }}>
      <span>KGlowMatch · Concierge</span>
      <span>{label}</span>
      <span>{n} / 06</span>
    </div>
  </>
);

// ───────────────── 01 · Cover ─────────────────
const RoseSlide01 = () => (
  <RoseSlide>
    {/* soft blobs */}
    <div style={{
      position: 'absolute', top: -160, right: -120, width: 520, height: 520,
      borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #F4C2C5, #E89BA3 60%, transparent 75%)',
      filter: 'blur(2px)', opacity: 0.9,
    }} />
    <div style={{
      position: 'absolute', bottom: -120, left: -100, width: 380, height: 380,
      borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%, #E6D7B9, #C9B58B 70%, transparent 80%)',
      opacity: 0.55,
    }} />
    <RoseChrome label="01 Cover" n="01" />

    <div style={{ position: 'absolute', left: 80, top: 200, width: 760 }}>
      <div style={{
        fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em',
        textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 28,
      }}>A concierge for visiting beauty</div>

      <h1 style={{
        fontFamily: rt.serif, fontWeight: 400,
        fontSize: 104, lineHeight: 0.95, margin: 0,
        letterSpacing: '-0.02em',
      }}>
        Speak your<br/>
        <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>own language.</span><br/>
        Glow like Seoul.
      </h1>

      <p style={{
        marginTop: 36, fontSize: 20, lineHeight: 1.5, maxWidth: 540,
        color: rt.inkSoft,
      }}>
        Tell us what you want — in English, 日本語, 中文, or 한국어.
        We translate, match you to vetted Korean specialists, and bring
        their answers back in your language.
      </p>
    </div>

    {/* language chips */}
    <div style={{
      position: 'absolute', right: 80, bottom: 120,
      display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end',
    }}>
      {[
        ['EN', 'Find me glass skin'],
        ['日', 'グラススキンが欲しい'],
        ['中', '想要玻璃肌'],
        ['KO', '물광피부 원해요'],
      ].map(([lang, txt]) => (
        <div key={lang} style={{
          background: rt.card, padding: '10px 18px',
          borderRadius: 999, display: 'flex', alignItems: 'center', gap: 12,
          boxShadow: '0 1px 0 rgba(43,30,28,0.04), 0 8px 24px rgba(155,79,90,0.08)',
          border: `1px solid ${rt.hairline}`,
        }}>
          <span style={{
            fontFamily: rt.mono, fontSize: 11, letterSpacing: '0.1em',
            color: rt.roseDeep, fontWeight: 600,
          }}>{lang}</span>
          <span style={{ fontSize: 14, color: rt.ink }}>{txt}</span>
        </div>
      ))}
    </div>
  </RoseSlide>
);

// ───────────────── 02 · Personas ─────────────────
const Persona = ({ tag, name, age, city, want, blob }) => (
  <div style={{
    flex: 1, background: rt.card, padding: 28,
    borderRadius: 8, border: `1px solid ${rt.hairline}`,
    display: 'flex', flexDirection: 'column', gap: 18,
    position: 'relative', overflow: 'hidden',
    minHeight: 380,
  }}>
    <div style={{
      position: 'absolute', top: -40, right: -40, width: 160, height: 160,
      borderRadius: '50%', background: blob, opacity: 0.7,
    }} />
    <div style={{
      fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: rt.roseDeep,
    }}>{tag}</div>
    <div>
      <div style={{ fontFamily: rt.serif, fontSize: 36, lineHeight: 1, marginBottom: 6 }}>{name}</div>
      <div style={{ fontSize: 13, color: rt.inkSoft }}>{age} · {city}</div>
    </div>
    <div style={{ height: 1, background: rt.hairline, marginTop: 'auto' }} />
    <div>
      <div style={{ fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: rt.inkSoft, marginBottom: 8 }}>What she asks for</div>
      <div style={{ fontFamily: rt.serif, fontStyle: 'italic', fontSize: 19, lineHeight: 1.35, color: rt.ink }}>
        "{want}"
      </div>
    </div>
  </div>
);

const RoseSlide02 = () => (
  <RoseSlide>
    <RoseChrome label="02 Who travels for this" n="02" />
    <div style={{ position: 'absolute', left: 80, top: 110, right: 80 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 14 }}>
        Three tourists, one weekend in Seoul
      </div>
      <h2 style={{ fontFamily: rt.serif, fontSize: 48, fontWeight: 400, margin: 0, lineHeight: 1.05, maxWidth: 760 }}>
        They all <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>know what they want.</span><br/>
        None of them speak Korean.
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 80, display: 'flex', gap: 20 }}>
      <Persona
        tag="JP · Skincare"
        name="Yuki"
        age="32"
        city="Tokyo · Marunouchi"
        want="Glass skin treatment before Monday's client meeting. No downtime."
        blob="radial-gradient(circle, #F4C2C5, transparent 70%)"
      />
      <Persona
        tag="US · Aesthetic"
        name="Madison"
        age="21"
        city="Brooklyn · NYU exchange"
        want="Real consult on adult acne — derms back home keep prescribing the same thing."
        blob="radial-gradient(circle, #E6D7B9, transparent 70%)"
      />
      <Persona
        tag="CN · Hair"
        name="Lina"
        age="27"
        city="Shanghai · creator"
        want="Soft hime-cut + warm honey color. I want it to photograph for my channel."
        blob="radial-gradient(circle, #C5D4B5, transparent 70%)"
      />
    </div>
  </RoseSlide>
);

// ───────────────── 03 · How it works ─────────────────
const Step = ({ n, kicker, title, body, side }) => (
  <div style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
    <div style={{
      width: 56, height: 56, borderRadius: '50%',
      border: `1px solid ${rt.roseDeep}`, display: 'flex',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: rt.serif, fontSize: 26, color: rt.roseDeep,
      flexShrink: 0,
    }}>{n}</div>
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: rt.inkSoft, marginBottom: 6 }}>{kicker}</div>
      <div style={{ fontFamily: rt.serif, fontSize: 28, lineHeight: 1.1, marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 15, lineHeight: 1.5, color: rt.inkSoft, maxWidth: 360 }}>{body}</div>
    </div>
    {side}
  </div>
);

const RoseSlide03 = () => (
  <RoseSlide bg={rt.cream}>
    <RoseChrome label="03 How it works" n="03" />
    <div style={{ position: 'absolute', left: 80, top: 110 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 14 }}>
        Three steps. Roughly an evening.
      </div>
      <h2 style={{ fontFamily: rt.serif, fontSize: 48, fontWeight: 400, margin: 0, lineHeight: 1.05 }}>
        We do the <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>translation</span>.<br/>
        You stay in your language.
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, top: 270, display: 'flex', flexDirection: 'column', gap: 36 }}>
      <Step
        n="1"
        kicker="You describe"
        title="Type it the way you'd say it to a friend."
        body="A 4-step intake in your language. Photos optional. Takes 3 minutes."
        side={<div style={{
          marginLeft: 'auto', background: rt.card, border: `1px solid ${rt.hairline}`,
          borderRadius: 6, padding: '14px 18px', fontSize: 14, fontStyle: 'italic',
          fontFamily: rt.serif, color: rt.ink, maxWidth: 280,
        }}>"My skin gets really red around my nose after flying. Help."</div>}
      />
      <Step
        n="2"
        kicker="We brief Korea"
        title="AI turns it into a Korean clinical brief."
        body="Specialists read it in 한국어. They quote you back in Korean — we translate it back to you."
        side={<div style={{
          marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{ background: rt.card, padding: '8px 14px', borderRadius: 4, fontSize: 12, color: rt.inkSoft, border: `1px solid ${rt.hairline}` }}>EN</div>
          <div style={{ width: 36, height: 1, background: rt.roseDeep }} />
          <div style={{ background: rt.roseDeep, color: 'white', padding: '8px 14px', borderRadius: 4, fontSize: 12, fontFamily: rt.serif }}>한국어</div>
          <div style={{ width: 36, height: 1, background: rt.roseDeep }} />
          <div style={{ background: rt.card, padding: '8px 14px', borderRadius: 4, fontSize: 12, color: rt.inkSoft, border: `1px solid ${rt.hairline}` }}>EN</div>
        </div>}
      />
      <Step
        n="3"
        kicker="You choose"
        title="Compare 3–5 quotes, book the one you like."
        body="Pricing, timing, and specialist notes side-by-side. Message back in your language anytime."
        side={null}
      />
    </div>
  </RoseSlide>
);

// ───────────────── 04 · Categories ─────────────────
const Cat = ({ name, examples, swatch }) => (
  <div style={{
    background: rt.card, padding: 28, borderRadius: 6,
    border: `1px solid ${rt.hairline}`, display: 'flex',
    flexDirection: 'column', gap: 16, minHeight: 320,
  }}>
    <div style={{
      width: '100%', height: 88, borderRadius: 4, background: swatch,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.0) 0 12px, rgba(255,255,255,0.18) 12px 13px)' }} />
    </div>
    <div style={{ fontFamily: rt.serif, fontSize: 32, lineHeight: 1 }}>{name}</div>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {examples.map((e) => (
        <li key={e} style={{ fontSize: 14, color: rt.inkSoft, display: 'flex', gap: 10 }}>
          <span style={{ color: rt.roseDeep }}>—</span>{e}
        </li>
      ))}
    </ul>
  </div>
);

const RoseSlide04 = () => (
  <RoseSlide>
    <RoseChrome label="04 What you can ask for" n="04" />
    <div style={{ position: 'absolute', left: 80, top: 110 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 14 }}>
        Categories
      </div>
      <h2 style={{ fontFamily: rt.serif, fontSize: 48, fontWeight: 400, margin: 0, lineHeight: 1.05 }}>
        From a derm consult to <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>a perm.</span>
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 80, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
      <Cat name="Skincare" examples={['Glass skin facial', 'Hydra-boost', 'PDT for acne', 'Pigmentation']} swatch="linear-gradient(135deg, #F4C2C5, #E89BA3)" />
      <Cat name="Aesthetic" examples={['Botox brow', 'Lip filler', 'Rhino consult', 'Thread lift']} swatch="linear-gradient(135deg, #E6D7B9, #C9B58B)" />
      <Cat name="Hair" examples={['Hair perm', 'Honey balayage', 'Hime cut', 'Scalp clinic']} swatch="linear-gradient(135deg, #C5D4B5, #9FA88A)" />
      <Cat name="Wellness" examples={['Vitamin IV', 'Lymph massage', 'Hanbang spa', 'Postpartum']} swatch="linear-gradient(135deg, #D9C5E0, #B79DC2)" />
    </div>
  </RoseSlide>
);

// ───────────────── 05 · Conversation ─────────────────
const Bubble = ({ side, lang, text, sub, accent }) => (
  <div style={{
    alignSelf: side === 'right' ? 'flex-end' : 'flex-start',
    maxWidth: 360,
    background: side === 'right' ? accent : rt.card,
    color: side === 'right' ? 'white' : rt.ink,
    padding: '14px 18px',
    borderRadius: side === 'right' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
    border: side === 'right' ? 'none' : `1px solid ${rt.hairline}`,
    fontSize: 14, lineHeight: 1.45,
    boxShadow: side === 'right' ? 'none' : '0 4px 18px rgba(43,30,28,0.04)',
  }}>
    <div style={{
      fontFamily: rt.mono, fontSize: 9, letterSpacing: '0.18em',
      textTransform: 'uppercase', opacity: 0.65, marginBottom: 6,
    }}>{lang}</div>
    <div style={{ fontFamily: rt.serif, fontSize: 16, fontStyle: 'italic' }}>{text}</div>
    {sub && <div style={{ marginTop: 6, fontSize: 11, opacity: 0.7 }}>{sub}</div>}
  </div>
);

const RoseSlide05 = () => (
  <RoseSlide bg={rt.bgDeep}>
    <RoseChrome label="05 Stay in conversation" n="05" />
    <div style={{ position: 'absolute', left: 80, top: 110, width: 460 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 14 }}>
        After you submit
      </div>
      <h2 style={{ fontFamily: rt.serif, fontSize: 48, fontWeight: 400, margin: 0, lineHeight: 1.05 }}>
        Keep <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>talking</span>, not translating.
      </h2>
      <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.55, color: rt.inkSoft }}>
        Every follow-up message is translated both ways, and emailed to both of you.
        No app to install, no language barrier in the middle of a question about pain or downtime.
      </p>
      <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
          ['Auto', 'Korean ⇄ your language'],
          ['Async', 'Reply when you wake up'],
          ['Quiet', 'Email pings only, no app push'],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
            <span style={{ fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: rt.roseDeep, width: 50 }}>{k}</span>
            <span style={{ fontSize: 14, color: rt.ink }}>{v}</span>
          </div>
        ))}
      </div>
    </div>

    <div style={{
      position: 'absolute', right: 80, top: 110, bottom: 80, width: 540,
      background: rt.cream, borderRadius: 10, border: `1px solid ${rt.hairline}`,
      padding: 26, display: 'flex', flexDirection: 'column', gap: 12,
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: rt.inkSoft, paddingBottom: 12, borderBottom: `1px solid ${rt.hairline}` }}>
        <span>Glow Aesthetic Clinic · Apgujeong</span>
        <span>Quote #2 of 4</span>
      </div>
      <Bubble side="right" lang="You · EN" text="Will my face be red afterward? I fly home Tuesday." accent={rt.roseDeep} />
      <Bubble side="left" lang="Specialist · KO → EN" text="Slight redness for 6–8 hours. By Tuesday morning, photo-ready. We can include LED soothing for ₩20,000." sub="Translated from 한국어 · Dr. Park" />
      <Bubble side="right" lang="You · EN" text="Add the LED. Can we move it to 4pm?" accent={rt.roseDeep} />
      <Bubble side="left" lang="Specialist · KO → EN" text="Confirmed for 16:00. See you Sunday." sub="Translated · Dr. Park" />
    </div>
  </RoseSlide>
);

// ───────────────── 06 · Get started ─────────────────
const RoseSlide06 = () => (
  <RoseSlide>
    <div style={{
      position: 'absolute', top: -180, left: '38%', width: 620, height: 620,
      borderRadius: '50%', background: 'radial-gradient(circle, #F4C2C5 0%, #E89BA3 50%, transparent 75%)',
      opacity: 0.55,
    }} />
    <RoseChrome label="06 Begin" n="06" />

    <div style={{ position: 'absolute', left: 80, top: 180, width: 560 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 18 }}>
        Free to ask · pay only when you book
      </div>
      <h1 style={{ fontFamily: rt.serif, fontSize: 84, fontWeight: 400, margin: 0, lineHeight: 0.95, letterSpacing: '-0.01em' }}>
        Ready when you<br/>
        <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>land.</span>
      </h1>
      <p style={{ marginTop: 30, fontSize: 18, lineHeight: 1.5, color: rt.inkSoft, maxWidth: 460 }}>
        Submit a request before you fly. Quotes arrive within a day.
        You're never charged for asking — providers pay us per lead, in Korea.
      </p>

      <div style={{ marginTop: 40, display: 'flex', gap: 12 }}>
        <div style={{
          background: rt.roseDeep, color: 'white', padding: '16px 28px',
          borderRadius: 999, fontFamily: rt.sans, fontSize: 15, fontWeight: 600,
          letterSpacing: '0.02em',
        }}>kglowmatch.com →</div>
        <div style={{
          padding: '16px 28px', borderRadius: 999, fontFamily: rt.sans, fontSize: 15,
          color: rt.ink, border: `1px solid ${rt.ink}`,
        }}>Read a sample brief</div>
      </div>
    </div>

    <div style={{
      position: 'absolute', right: 80, top: 160, width: 420,
      background: rt.card, borderRadius: 10, border: `1px solid ${rt.hairline}`,
      padding: 30, boxShadow: '0 24px 60px rgba(155,79,90,0.10)',
    }}>
      <div style={{ fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 18 }}>
        Numbers, briefly
      </div>
      {[
        ['3 min', 'Average intake time'],
        ['< 24 hr', 'Quotes back from specialists'],
        ['4 lang', 'EN · 日本語 · 中文 · 한국어'],
        ['₩0', 'What you pay to inquire'],
      ].map(([k, v], i) => (
        <div key={k} style={{
          display: 'flex', alignItems: 'baseline', gap: 18,
          padding: '14px 0',
          borderTop: i === 0 ? 'none' : `1px solid ${rt.hairline}`,
        }}>
          <div style={{ fontFamily: rt.serif, fontSize: 36, color: rt.ink, width: 110 }}>{k}</div>
          <div style={{ fontSize: 13, color: rt.inkSoft }}>{v}</div>
        </div>
      ))}
    </div>
  </RoseSlide>
);

window.RoseSlides = {
  RoseSlide01, RoseSlide02, RoseSlide03, RoseSlide04, RoseSlide05, RoseSlide06,
};
