# KGlowMatch · Brand & Visual Repo

The brand and visual home for **KGlowMatch** — a concierge that lets beauty
tourists request Korean skincare, aesthetic, hair, and wellness treatments in
their own language. You describe what you want; we translate it into a
clinical brief for vetted Seoul specialists and bring their quotes back to
your inbox, translated.

This repo holds the **promo video pipeline**, the **design-source
prototypes**, and the **canonical design system** that the product implements.

| | |
|---|---|
| **Product** | [kglowmatch.com](https://kglowmatch.com) — Next.js app, lives in [`saikhu/kglowmatch`](https://github.com/saikhu/kglowmatch) |
| **This repo** | ~100 s promo video build + design source + brand system |
| **Output** | `dist/kglowmatch_demo.mp4` — H.264 1920×1080, AAC, ~100 s |
| **Slides** | 6, defined in [`deck/slideshow.html`](deck/slideshow.html) |
| **Voiceover** | [`assets/voiceover.mp3`](assets/voiceover.mp3) (ElevenLabs, "Sasha") |

## Brand & design system

The shipped direction is **"Lila Bloom"** (Direction A — rose). An alternate
direction, **"Hanji Cream"** (Direction B), is preserved in
[`design-source/slides-cream.jsx`](design-source/slides-cream.jsx) but was not
built.

- **Tagline:** *"Speak your own language. Glow like Seoul."*
- **Palette:**

  | Token | Hex | Use |
  | --- | --- | --- |
  | Soft rose | `#C77B85` | accent |
  | Deep rose | `#9B4F5A` | accent, emphasis |
  | Cream | `#FFF7F2` | type + cards over photography |
  | Ivory | `#FBEFE9` | surfaces |
  | Ink | `#2B1E1C` | text (deep warm brown) |

- **Typography:** DM Serif Display (display), Manrope (body), JetBrains Mono
  (labels, wide letter-spacing), Noto Sans KR (hangul).
- **Tone:** editorial, intimate, calm — Korean cultural touchstones (hanji
  paper, hangul category labels, Seoul golden hour). Image prompts with the
  style anchors live in [`docs/image-prompts.md`](docs/image-prompts.md).
- **Languages shown:** EN · 日本語 · 中文 · 한국어.

The product app implements this exact system — same palette and same four
font families — as CSS custom properties in its `src/app/globals.css`
("KGlowMatch brand v2, Lila Bloom"). If the brand evolves, change it here
first, then mirror it in the app tokens.

**Naming rules:** the brand is always **KGlowMatch** in user-visible copy
(the leading "K" stands for Korea). Domain `kglowmatch.com`. Lowercase
`kglowmatch` only in technical identifiers (repos, filenames). A logo
reference deck (`kglowmatch — Logo System Deck.pdf`) is kept alongside the
repos.

## The promo video

Six full-bleed editorial slides cross-fading over a single voiceover track:

1. **Cover** — hero + headline + language chips
2. **Personas** — triptych of three travelers
3. **How it works** — three numbered steps
4. **Categories** — Skincare 피부 · Aesthetic 시술 · Hair 헤어 · Wellness 웰니스
5. **Conversation** — translated chat thread overlay
6. **Begin** — arrival + stats (3-min intake, <24 h quotes, 4 languages, ₩0 to inquire)

### Build

```bash
scripts/build_video.sh
```

This renders each slide to a PNG with headless Google Chrome, then stitches the PNGs
and the voiceover into the MP4 with `ffmpeg`. Requirements: **Google Chrome**, **ffmpeg**
(`brew install ffmpeg`), and an **internet connection** (the slides pull DM Serif Display /
Manrope / JetBrains Mono / Noto Sans KR from Google Fonts at render time).

To preview the slides as a deck, open `deck/slideshow.html` in a browser — `←` / `→` /
space to navigate. Append `?slide=N` to show a single slide at native 1920×1080.

### Editing

- **Copy / layout** — edit [`deck/slideshow.html`](deck/slideshow.html), then rerun the build.
- **Photos** — replace files in `assets/images/` (keep the `01`–`06` slide-order names).
- **Timing** — the per-slide durations live at the top of
  [`scripts/build_video.sh`](scripts/build_video.sh) (mirrored in `docs/timings.json`).
  The cross-fade chain rebalances automatically as long as they sum to the audio length.

## Structure

```text
.
├── deck/
│   └── slideshow.html      # the 6 slides (source of truth for the video frames)
├── assets/
│   ├── voiceover.mp3       # narration
│   └── images/             # source photos, 01–06 in SLIDE order
├── scripts/
│   └── build_video.sh      # render slides + assemble MP4
├── dist/                   # generated — reproduce with build_video.sh (git-ignored)
│   ├── slides/01–06.png    # rendered 1920×1080 slides
│   └── kglowmatch_demo.mp4 # final video
├── docs/
│   ├── voiceover-script.html  # the narration script + on-screen direction
│   ├── image-prompts.md       # the prompts the source photos were generated from
│   ├── timings.json           # per-slide start/end/duration (drives build_video.sh)
│   └── bundle-notes.md        # original production notes
└── design-source/          # original design-tool prototypes (reference, not built)
    ├── tourist-demo.html, *.jsx, image-slot.js, design-canvas.jsx
    ├── slides-rose.jsx     # Direction A "Lila Bloom" (shipped)
    ├── slides-cream.jsx    # Direction B "Hanji Cream" (alternate, unbuilt)
    └── assemble.sh         # the original ffmpeg recipe (superseded by scripts/build_video.sh)
```

## Notes

- `assets/images/` photos are named in **slide order** (01 = cover … 06 = begin). The
  original generation order differed; see `docs/image-prompts.md` for the per-slide prompts.
- This started as a design-tool handoff bundle; the original HTML/JSX prototypes are kept
  under `design-source/` for reference but are not part of the build.
- For the product itself (architecture, setup, roadmap), see the
  [`kglowmatch`](https://github.com/saikhu/kglowmatch) repo's README, AGENTS.md,
  and ROADMAP.md.
