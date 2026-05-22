// Direction A — "Lila Bloom"
// Soft rose pastel, serif headlines, K-beauty editorial
// v2: image slots integrated for AI-generated imagery

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

// Image slot helper — wraps the <image-slot> web component
const RoseImg = ({ id, w, h, placeholder, shape = 'rounded', radius = 8, style = {} }) => (
  <image-slot
    id={id}
    shape={shape}
    radius={String(radius)}
    placeholder={placeholder}
    style={{ width: w, height: h, display: 'block', ...style }}
  />
);

const RoseSlide = ({ children, bg = rt.bg, style }) => (
  <div style={{
    width: 1280, height: 720, background: bg,
    color: rt.ink, fontFamily: rt.sans,
    position: 'relative', overflow: 'hidden',
    ...style,
  }}>{children}</div>
);

const RoseChrome = ({ label, n }) => (
  <div style={{
    position: 'absolute', top: 36, left: 56, right: 56,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontFamily: rt.mono, fontSize: 11, letterSpacing: '0.18em',
    textTransform: 'uppercase', color: rt.inkSoft, zIndex: 10,
  }}>
    <span>KGlowMatch · Concierge</span>
    <span>{label}</span>
    <span>{n} / 06</span>
  </div>
);

// ───────────────── 01 · Cover ─────────────────
const RoseSlide01 = () => (
  <RoseSlide>
    {/* soft blob behind image */}
    <div style={{
      position: 'absolute', top: -100, right: -80, width: 460, height: 460,
      borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #F4C2C5, #E89BA3 60%, transparent 75%)',
      opacity: 0.7,
    }} />
    <div style={{
      position: 'absolute', bottom: -140, left: -120, width: 380, height: 380,
      borderRadius: '50%', background: 'radial-gradient(circle at 50% 50%, #E6D7B9, #C9B58B 70%, transparent 80%)',
      opacity: 0.55,
    }} />
    <RoseChrome label="01 Cover" n="01" />

    {/* hero image */}
    <RoseImg id="rose-cover-hero" w={520} h={560}
      placeholder="Korean clinic / Seoul beauty atmosphere · soft golden hour"
      radius={12}
      style={{ position: 'absolute', right: 80, top: 100 }}
    />

    <div style={{ position: 'absolute', left: 80, top: 200, width: 600 }}>
      <div style={{
        fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em',
        textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 28,
      }}>A concierge for visiting beauty</div>

      <h1 style={{
        fontFamily: rt.serif, fontWeight: 400,
        fontSize: 92, lineHeight: 0.96, margin: 0,
        letterSpacing: '-0.02em',
      }}>
        Speak your<br/>
        <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>own language.</span><br/>
        Glow like Seoul.
      </h1>

      <p style={{
        marginTop: 28, fontSize: 18, lineHeight: 1.5, maxWidth: 520,
        color: rt.inkSoft,
      }}>
        Tell us what you want — in English, 日本語, 中文, or 한국어.
        We translate, match you to vetted Korean specialists, and
        bring their answers back in your language.
      </p>

      {/* language chips */}
      <div style={{ marginTop: 26, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {['EN', '日本語', '中文', '한국어'].map((l) => (
          <span key={l} style={{
            padding: '6px 12px', borderRadius: 999,
            border: `1px solid ${rt.roseDeep}`, color: rt.roseDeep,
            fontSize: 12, fontFamily: rt.mono, letterSpacing: '0.06em',
          }}>{l}</span>
        ))}
      </div>
    </div>
  </RoseSlide>
);

// ───────────────── 02 · Personas ─────────────────
const Persona = ({ id, tag, name, age, city, want, imgHint }) => (
  <div style={{
    flex: 1, background: rt.card, padding: 24,
    borderRadius: 8, border: `1px solid ${rt.hairline}`,
    display: 'flex', flexDirection: 'column', gap: 14,
    minHeight: 420,
  }}>
    <RoseImg id={id} w="100%" h={180} radius={6} placeholder={imgHint} />
    <div style={{
      fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.2em',
      textTransform: 'uppercase', color: rt.roseDeep,
    }}>{tag}</div>
    <div>
      <div style={{ fontFamily: rt.serif, fontSize: 32, lineHeight: 1, marginBottom: 4 }}>{name}</div>
      <div style={{ fontSize: 12, color: rt.inkSoft }}>{age} · {city}</div>
    </div>
    <div style={{
      marginTop: 'auto', paddingTop: 12,
      borderTop: `1px solid ${rt.hairline}`,
      fontFamily: rt.serif, fontStyle: 'italic',
      fontSize: 17, lineHeight: 1.35, color: rt.ink,
    }}>"{want}"</div>
  </div>
);

const RoseSlide02 = () => (
  <RoseSlide>
    <RoseChrome label="02 Who travels for this" n="02" />
    <div style={{ position: 'absolute', left: 80, top: 110, right: 80 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 14 }}>
        Three tourists, one weekend in Seoul
      </div>
      <h2 style={{ fontFamily: rt.serif, fontSize: 44, fontWeight: 400, margin: 0, lineHeight: 1.05, maxWidth: 760 }}>
        They all <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>know what they want.</span> None of them speak Korean.
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 60, display: 'flex', gap: 20 }}>
      <Persona
        id="rose-persona-yuki"
        tag="JP · Skincare"
        name="Yuki"
        age="32"
        city="Tokyo · Marunouchi"
        want="Glass skin before Monday's client meeting. No downtime."
        imgHint="Yuki — JP business woman, 32, soft natural skin portrait"
      />
      <Persona
        id="rose-persona-madison"
        tag="US · Aesthetic"
        name="Madison"
        age="21"
        city="Brooklyn · NYU exchange"
        want="Real consult on adult acne — derms back home keep giving me the same script."
        imgHint="Madison — US student, 21, casual portrait, friendly"
      />
      <Persona
        id="rose-persona-lina"
        tag="CN · Hair"
        name="Lina"
        age="27"
        city="Shanghai · creator"
        want="Soft hime-cut + warm honey color. I want it to photograph for my channel."
        imgHint="Lina — CN creator, 27, fashion-forward hair portrait"
      />
    </div>
  </RoseSlide>
);

// ───────────────── 03 · How it works ─────────────────
const Step = ({ n, kicker, title, body, art }) => (
  <div style={{
    background: rt.card, padding: 22,
    border: `1px solid ${rt.hairline}`,
    borderRadius: 8, display: 'flex', flexDirection: 'column', gap: 14,
    minHeight: 360,
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        border: `1px solid ${rt.roseDeep}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: rt.serif, fontSize: 20, color: rt.roseDeep,
      }}>{n}</div>
      <div style={{ fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: rt.inkSoft }}>{kicker}</div>
    </div>
    {art}
    <div style={{ fontFamily: rt.serif, fontSize: 22, lineHeight: 1.15 }}>{title}</div>
    <div style={{ fontSize: 13, lineHeight: 1.55, color: rt.inkSoft }}>{body}</div>
  </div>
);

const RoseSlide03 = () => (
  <RoseSlide bg={rt.cream}>
    <RoseChrome label="03 How it works" n="03" />
    <div style={{ position: 'absolute', left: 80, top: 110 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 14 }}>
        Three steps. Roughly an evening.
      </div>
      <h2 style={{ fontFamily: rt.serif, fontSize: 44, fontWeight: 400, margin: 0, lineHeight: 1.05 }}>
        We do the <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>translation</span>. You stay in your language.
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 60, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
      <Step
        n="1"
        kicker="You · 3 min"
        title="Describe it like you'd tell a friend."
        body="A 4-step intake in your language. Photos welcome, account not required."
        art={<RoseImg id="rose-step-1" w="100%" h={140} radius={6} placeholder="Phone screen · intake form in English" />}
      />
      <Step
        n="2"
        kicker="We · same evening"
        title="Translated and briefed to Korea."
        body="AI rewrites your request as a precise Korean clinical brief, sent only to matching vetted providers."
        art={<RoseImg id="rose-step-2" w="100%" h={140} radius={6} placeholder="EN ⇄ KO translation moment · text dissolving" />}
      />
      <Step
        n="3"
        kicker="Them · within a day"
        title="Compare quotes in your inbox."
        body="3–5 quotes side-by-side: pricing, timing, specialist notes. Book the one you like; message back anytime."
        art={<RoseImg id="rose-step-3" w="100%" h={140} radius={6} placeholder="Inbox with multiple Korean clinic quotes" />}
      />
    </div>
  </RoseSlide>
);

// ───────────────── 04 · Categories ─────────────────
const Cat = ({ id, name, kor, examples, imgHint }) => (
  <div style={{
    background: rt.card, padding: 22, borderRadius: 6,
    border: `1px solid ${rt.hairline}`, display: 'flex',
    flexDirection: 'column', gap: 14, minHeight: 340,
  }}>
    <RoseImg id={id} w="100%" h={110} radius={4} placeholder={imgHint} />
    <div>
      <div style={{ fontFamily: rt.serif, fontSize: 28, lineHeight: 1 }}>{name}</div>
      <div style={{ fontFamily: rt.serif, fontStyle: 'italic', fontSize: 16, color: rt.roseDeep, marginTop: 2 }}>{kor}</div>
    </div>
    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
      {examples.map((e) => (
        <li key={e} style={{ fontSize: 12, color: rt.inkSoft, display: 'flex', gap: 8 }}>
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
      <h2 style={{ fontFamily: rt.serif, fontSize: 44, fontWeight: 400, margin: 0, lineHeight: 1.05 }}>
        From a derm consult <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>to a perm.</span>
      </h2>
    </div>

    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 60, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
      <Cat id="rose-cat-skin" name="Skincare"  kor="피부"   examples={['Glass skin facial', 'Hydra-boost', 'PDT for acne', 'Pigmentation']}        imgHint="Skincare · soft glowy skin closeup" />
      <Cat id="rose-cat-aest" name="Aesthetic" kor="시술"   examples={['Botox brow', 'Lip filler', 'Rhino consult', 'Thread lift']}              imgHint="Aesthetic · clean clinic interior" />
      <Cat id="rose-cat-hair" name="Hair"      kor="헤어"   examples={['Hair perm', 'Honey balayage', 'Hime cut', 'Scalp clinic']}               imgHint="Hair · salon mirror with warm honey tone" />
      <Cat id="rose-cat-well" name="Wellness"  kor="웰니스" examples={['Vitamin IV', 'Lymph massage', 'Hanbang spa', 'Postpartum care']}         imgHint="Wellness · herbal tea / hanbang spa" />
    </div>
  </RoseSlide>
);

// ───────────────── 05 · Conversation ─────────────────
const Bubble = ({ side, lang, text, sub, accent }) => (
  <div style={{
    alignSelf: side === 'right' ? 'flex-end' : 'flex-start',
    maxWidth: 320,
    background: side === 'right' ? accent : rt.card,
    color: side === 'right' ? 'white' : rt.ink,
    padding: '12px 16px',
    borderRadius: side === 'right' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
    border: side === 'right' ? 'none' : `1px solid ${rt.hairline}`,
    fontSize: 13, lineHeight: 1.45,
    boxShadow: side === 'right' ? 'none' : '0 4px 18px rgba(43,30,28,0.04)',
  }}>
    <div style={{
      fontFamily: rt.mono, fontSize: 9, letterSpacing: '0.18em',
      textTransform: 'uppercase', opacity: 0.65, marginBottom: 5,
    }}>{lang}</div>
    <div style={{ fontFamily: rt.serif, fontSize: 15, fontStyle: 'italic' }}>{text}</div>
    {sub && <div style={{ marginTop: 4, fontSize: 10, opacity: 0.7 }}>{sub}</div>}
  </div>
);

const RoseSlide05 = () => (
  <RoseSlide bg={rt.bgDeep}>
    <RoseChrome label="05 Stay in conversation" n="05" />
    <div style={{ position: 'absolute', left: 80, top: 110, width: 440 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 14 }}>
        After you submit
      </div>
      <h2 style={{ fontFamily: rt.serif, fontSize: 44, fontWeight: 400, margin: 0, lineHeight: 1.05 }}>
        Keep <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>talking</span>, not translating.
      </h2>
      <p style={{ marginTop: 22, fontSize: 15, lineHeight: 1.55, color: rt.inkSoft }}>
        Every follow-up is translated both ways and emailed to both of you. No app to install,
        no language barrier in the middle of a question about pain or downtime.
      </p>
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {[
          ['Auto', 'Korean ⇄ your language'],
          ['Async', 'Reply when you wake up'],
          ['Quiet', 'Email pings only, no app push'],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', gap: 14, alignItems: 'baseline' }}>
            <span style={{ fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: rt.roseDeep, width: 50 }}>{k}</span>
            <span style={{ fontSize: 13, color: rt.ink }}>{v}</span>
          </div>
        ))}
      </div>

      <RoseImg id="rose-clinic" w={440} h={120} radius={6}
        placeholder="Glow Aesthetic Clinic · Apgujeong exterior"
        style={{ marginTop: 22 }}
      />
    </div>

    <div style={{
      position: 'absolute', right: 80, top: 110, bottom: 60, width: 560,
      background: rt.cream, borderRadius: 10, border: `1px solid ${rt.hairline}`,
      padding: 22, display: 'flex', flexDirection: 'column', gap: 10,
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: rt.mono, fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: rt.inkSoft, paddingBottom: 10, borderBottom: `1px solid ${rt.hairline}` }}>
        <span>Glow Aesthetic Clinic · Apgujeong</span>
        <span>Quote #2 of 4</span>
      </div>
      <Bubble side="right" lang="You · EN" text="Will my face be red afterward? I fly home Tuesday." accent={rt.roseDeep} />
      <Bubble side="left" lang="Specialist · KO → EN" text="Slight redness for 6–8 hours. By Tuesday morning, photo-ready. We can add LED soothing for ₩20,000." sub="Translated · Dr. Park" />
      <Bubble side="right" lang="You · EN" text="Add the LED. Can we move it to 4pm?" accent={rt.roseDeep} />
      <Bubble side="left" lang="Specialist · KO → EN" text="Confirmed for 16:00. See you Sunday." sub="Translated · Dr. Park" />
    </div>
  </RoseSlide>
);

// ───────────────── 06 · Get started ─────────────────
const RoseSlide06 = () => (
  <RoseSlide>
    <RoseImg id="rose-final" w={520} h={620} radius={12}
      placeholder="Seoul at twilight · neon glow / atmospheric"
      style={{ position: 'absolute', right: 80, top: 80 }}
    />
    <div style={{
      position: 'absolute', top: -180, left: -100, width: 520, height: 520,
      borderRadius: '50%', background: 'radial-gradient(circle, #F4C2C5 0%, #E89BA3 50%, transparent 75%)',
      opacity: 0.45,
    }} />
    <RoseChrome label="06 Begin" n="06" />

    <div style={{ position: 'absolute', left: 80, top: 180, width: 560 }}>
      <div style={{ fontFamily: rt.mono, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', color: rt.roseDeep, marginBottom: 18 }}>
        Free to ask · pay only when you book
      </div>
      <h1 style={{ fontFamily: rt.serif, fontSize: 80, fontWeight: 400, margin: 0, lineHeight: 0.95, letterSpacing: '-0.01em' }}>
        Ready when you<br/>
        <span style={{ fontStyle: 'italic', color: rt.roseDeep }}>land.</span>
      </h1>
      <p style={{ marginTop: 26, fontSize: 17, lineHeight: 1.5, color: rt.inkSoft, maxWidth: 460 }}>
        Submit a request before you fly. Quotes return within a day. You're
        never charged for asking — providers pay us per lead, in Korea.
      </p>

      <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
        <div style={{
          background: rt.roseDeep, color: 'white', padding: '14px 26px',
          borderRadius: 999, fontFamily: rt.sans, fontSize: 14, fontWeight: 600,
          letterSpacing: '0.02em',
        }}>kglowmatch.com →</div>
        <div style={{
          padding: '14px 26px', borderRadius: 999, fontFamily: rt.sans, fontSize: 14,
          color: rt.ink, border: `1px solid ${rt.ink}`,
        }}>Read a sample brief</div>
      </div>

      <div style={{
        marginTop: 36, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12, paddingTop: 22, borderTop: `1px solid ${rt.hairline}`,
      }}>
        {[
          ['3 min', 'Average intake'],
          ['<24 h', 'Until quotes'],
          ['4 lang', 'EN·日·中·한'],
          ['₩0', 'To inquire'],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontFamily: rt.serif, fontSize: 28, color: rt.ink }}>{k}</div>
            <div style={{ fontSize: 11, color: rt.inkSoft, marginTop: 2 }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  </RoseSlide>
);

window.RoseSlides = {
  RoseSlide01, RoseSlide02, RoseSlide03, RoseSlide04, RoseSlide05, RoseSlide06,
};
