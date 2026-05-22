# KGlowMatch · Tourist Demo

A ~100-second promo video for **KGlowMatch** — a concierge that lets beauty tourists
request Korean skincare, aesthetic, hair, and wellness treatments in their own
language. You describe what you want; we translate it into a clinical brief for vetted
Seoul specialists and bring their quotes back to your inbox, translated.

The video is six full-bleed editorial slides (rose / cream palette, DM Serif Display)
cross-fading over a single voiceover track.

| | |
|---|---|
| **Output** | `dist/kglowmatch_demo.mp4` — H.264 1920×1080, AAC, ~100 s |
| **Slides** | 6, defined in [`deck/slideshow.html`](deck/slideshow.html) |
| **Voiceover** | [`assets/voiceover.mp3`](assets/voiceover.mp3) (ElevenLabs, "Sasha") |

## Build

```bash
scripts/build_video.sh
```

This renders each slide to a PNG with headless Google Chrome, then stitches the PNGs
and the voiceover into the MP4 with `ffmpeg`. Requirements: **Google Chrome**, **ffmpeg**
(`brew install ffmpeg`), and an **internet connection** (the slides pull DM Serif Display /
Manrope / JetBrains Mono / Noto Sans KR from Google Fonts at render time).

To preview the slides as a deck, open `deck/slideshow.html` in a browser — `←` / `→` /
space to navigate. Append `?slide=N` to show a single slide at native 1920×1080.

## Structure

```
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
    └── assemble.sh         # the original ffmpeg recipe (superseded by scripts/build_video.sh)
```

## Editing

- **Copy / layout** — edit [`deck/slideshow.html`](deck/slideshow.html), then rerun the build.
- **Photos** — replace files in `assets/images/` (keep the `01`–`06` slide-order names).
- **Timing** — the per-slide durations live at the top of
  [`scripts/build_video.sh`](scripts/build_video.sh) (mirrored in `docs/timings.json`).
  The cross-fade chain rebalances automatically as long as they sum to the audio length.

## Notes

- `assets/images/` photos are named in **slide order** (01 = cover … 06 = begin). The
  original generation order differed; see `docs/image-prompts.md` for the per-slide prompts.
- This started as a design-tool handoff bundle; the original HTML/JSX prototypes are kept
  under `design-source/` for reference but are not part of the build.
