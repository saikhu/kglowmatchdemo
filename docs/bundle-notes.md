# KGlowMatch · Tourist Demo Video Bundle

Everything you need to turn the script + your ElevenLabs audio into a finished video.

## Workflow

```
  ElevenLabs audio (already made)
            │
            ▼
   timings.json  ◄──── derived from silence detection in your audio
            │
            ▼
   6 PNG slides  ◄──── images you generate via IMAGE_PROMPTS.md
            │             + the slide JSX in your original bundle
            ▼
   assemble.sh   ◄──── ffmpeg combines stills + audio → MP4
            │
            ▼
   kglowmatch_demo.mp4
```

## Files in this bundle

| File | What it is |
|---|---|
| `IMAGE_PROMPTS.md` | Six polished image prompts (Midjourney + DALL-E + Imagen variants) with style anchors so the set feels cohesive |
| `timings.json` | Slide start/end/duration derived from your actual audio (snapped to detected breath pauses) |
| `assemble.sh` | One-command ffmpeg script: 6 PNGs + 1 MP3 → final MP4 with cross-fades |
| `01_cover.ssml` – `06_begin.ssml` | Per-slide SSML (in case you ever want to regenerate the VO) |
| `full_voiceover.ssml` | Combined SSML with `<mark>` bookmarks |
| `README.md` | (the earlier SSML readme — usage docs for the SSML files specifically) |

## Slide timings (derived from your audio)

These were found by detecting silences ≥0.45s in the ElevenLabs MP3 and matching them to the script's section breaks. All five transitions land on real breath pauses.

| # | Slide | Start | End | Dur | Snapped to |
|---|---|---:|---:|---:|---:|
| 01 | Cover | 0:00.00 | 0:15.83 | 15.83s | 503ms breath |
| 02 | Personas | 0:15.83 | 0:36.09 | 20.26s | 505ms breath |
| 03 | How it works | 0:36.09 | 0:56.59 | 20.50s | 505ms breath |
| 04 | Categories | 0:56.59 | 1:11.72 | 15.13s | 585ms breath |
| 05 | Conversation | 1:11.72 | 1:27.05 | 15.33s | **710ms** breath (the long pause before the closer) |
| 06 | Begin | 1:27.05 | 1:39.92 | 12.87s | end of file |

**Audit these by listening through once.** I did this by proportional word-count matched to silences, not by transcription (Whisper model download was blocked in my sandbox). If a cut lands one sentence too early or too late, just nudge the value in `assemble.sh` — the math at the bottom of the script will rebalance the cross-fades automatically as long as the sum equals 99.92s.

## Step-by-step

### 1. Generate the 6 images

Open `IMAGE_PROMPTS.md`. For each slide, paste the prompt into your tool of choice (Midjourney recommended; DALL-E 3 and Imagen variants included). Generate at 1920×1080 or larger. Save as `01.png` through `06.png`.

**Single most important tip from the prompt pack:** generate slide 01 first, lock the look you like, then use Midjourney `/describe` to extract its style tokens and prepend them to slides 02–06. This is what makes a set of AI images look like one coherent set instead of six unrelated photos.

### 2. (Optional) Replace slide 03 with a diagram

Slide 03 is "the three steps" — it communicates faster as a clean typographic diagram than a photograph. The slide JSX in your original bundle (`slides-rose.jsx`) likely already has this composition. If you want, screenshot that slide at 1920×1080 and use it as `03.png` instead of an AI image.

### 3. Drop everything into a folder

```
project/
├── assemble.sh
├── audio/
│   └── voiceover.mp3        ← your ElevenLabs file, renamed
└── images/
    ├── 01.png               ← 1920x1080 each
    ├── 02.png
    ├── 03.png
    ├── 04.png
    ├── 05.png
    └── 06.png
```

### 4. Run

```bash
chmod +x assemble.sh
./assemble.sh
```

Output: `kglowmatch_demo.mp4` — H.264, 1920×1080, AAC audio at 192kbps, 99.92 seconds. Crisp, with 0.6s cross-fades between slides.

## What this video is, and what it isn't

**Is:** a real, deliverable, presentation-grade video. Clean stills, accurate timing, professional VO. Good for sending to investors, sharing on a landing page, embedding in a deck.

**Isn't:** the choreographed motion piece the original script's "On screen" notes describe — no language chips animating in, no EN→한국어 dissolve, no chat bubble cascade, no stat counter. For that you'd need After Effects, Motion, or a Runway/Pika workflow with the stills + script as input.

If you want motion next, the natural progression is:

1. Take the 6 PNGs and the MP3.
2. Drop them into After Effects (or Cap Cut, which is free and surprisingly capable).
3. Use the `timings.json` to mark each slide's in/out point.
4. Add the motion the script's "On screen" notes describe, one slide at a time.

The stills + audio + timings give you 80% of the polish for ~10% of the effort. Adding motion on top is incremental from there.
