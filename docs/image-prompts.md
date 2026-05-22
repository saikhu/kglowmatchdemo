# KGlowMatch · Image Prompt Pack

Six images, one per slide, designed to feel like one cohesive set.

## Style anchors (apply to ALL prompts)

These are the threads that hold the set together. Read once, then each per-slide prompt below assumes them.

- **Palette.** Soft rose pastel `#C77B85`, deep rose `#9B4F5A`, warm cream background `#FBEFE9`, deep ink `#2B1E1C`. Think "morning light on hanji paper."
- **Mood.** Editorial, intimate, calm. Not glossy advertising. Closer to a slow-cinema travel film or a beauty editorial in a Japanese magazine.
- **Light.** Soft directional window light, golden-hour warmth, low contrast. No harsh studio flash.
- **Composition.** Generous negative space (top or one side) — the slide will have typography over the image, so leave room.
- **Aspect ratio.** `--ar 16:9` on Midjourney. `1792x1024` on DALL-E 3. `16:9` on Imagen.
- **Quality flags.** Midjourney: `--style raw --stylize 250`. DALL-E: prepend "Photographic, editorial style:".
- **Negatives (Midjourney).** `--no logo, watermark, text, signage, low-quality, plastic skin, oversaturated, harsh shadows`

---

## Slide 01 · Cover — "Speak your own language. Glow like Seoul."

**Goal:** A single quiet hero shot that says "Seoul, but inviting, not overwhelming." Leaves the top-left clear for the title.

### Midjourney
```
A young woman, soft natural skin, looking thoughtfully out a window at a quiet Seoul street at golden hour. Reflection of neon hangul signage faintly visible in the glass. Soft rose and cream tones, warm window light on her face. Editorial fashion photography style, shot on Leica 50mm, shallow depth of field. Negative space in the upper third for typography. Calm, intimate mood. --ar 16:9 --style raw --stylize 250 --no logo, watermark, text, signage close-up, plastic skin, harsh shadows
```

### DALL-E 3
```
Photographic, editorial style: A young East Asian woman in her late twenties, soft natural skin, sitting by a café window in Seoul at golden hour, looking thoughtfully outside. Faint reflection of warm hangul neon signage in the window glass. Warm cream and dusty rose color palette, soft directional window light, shallow depth of field. Generous negative space in the upper third of the frame. Calm, intimate, editorial magazine aesthetic. Aspect ratio 16:9.
```

### Imagen / Stable Diffusion
```
editorial portrait photography, young woman by café window in Seoul, golden hour, soft window light, dusty rose and cream palette, reflection of hangul neon in glass, shallow depth of field 50mm, negative space upper third, calm intimate mood, slow cinema aesthetic, hasselblad
```

---

## Slide 02 · Personas — "They all know what they want. None of them speak Korean."

**Goal:** Three people, three places, one frame OR a triptych. Each persona's setting hinted but not literal. Reads as warm character study, not stock photo.

### Midjourney (single triptych frame)
```
Editorial triptych portrait, three young women side by side as separate frames within one image. LEFT: Japanese woman, late twenties, soft glass skin, looking out an airplane window at sunrise, Tokyo skyline below. CENTER: African-American woman, twenties, exchange student, looking at herself in a cracked mirror in a Brooklyn café, gentle introspective expression. RIGHT: Chinese woman, late twenties, content creator, on a bullet train at dusk, phone in hand, looking at her reflection in the train window. All three frames share a soft dusty rose and cream color grade, warm low-contrast lighting, editorial magazine quality. Calm, intimate, no smiles — quiet determination. --ar 16:9 --style raw --stylize 250 --no logo, watermark, text, smiles, posed, stock photo aesthetic
```

### DALL-E 3 (single triptych frame)
```
Photographic, editorial style: A triptych — three vertical panels side by side within one 16:9 frame. Panel one: a Japanese woman in her late twenties, soft skin, looking out an airplane window at the Tokyo skyline at sunrise. Panel two: an African-American woman in her twenties, sitting in a Brooklyn café looking at her reflection in a cracked mirror, introspective. Panel three: a Chinese woman in her late twenties, on a bullet train at dusk, looking at her reflection in the window with her phone in her lap. All three panels share the same warm dusty rose and cream color grade and soft low-contrast lighting. No text, no signage, no smiles — calm determined expressions. Editorial magazine aesthetic. Aspect ratio 16:9.
```

**Tip:** Triptychs are hard for one-shot generators. If you don't get a clean three-panel result in 3 tries, generate **three separate square images** (one per persona, `--ar 1:1`) and composite them in any image editor or even in PowerPoint. Same prompts above, just take one panel description each.

---

## Slide 03 · How it works — "We do the translation. You stay in your language."

**Goal:** Visual metaphor for translation/bridge. Diagrammatic, not photographic. **If you're going to use SVG instead of AI for this one, skip — but here's the prompt if you want it.**

### Midjourney
```
A still life on a warm cream paper surface: a vintage rotary postal envelope, a small smartphone with a soft glowing screen, and a hanji paper letter with elegant Korean calligraphy visible. The envelope, phone, and letter arranged in a quiet diagonal flow. Soft window light from the upper left. Dusty rose accents — a rose pastel ribbon, a deep rose wax seal. Editorial overhead photography, like a slow magazine spread on craft and care. Generous negative space around the objects. --ar 16:9 --style raw --stylize 200 --no people, hands, faces, signage, modern logos
```

### DALL-E 3
```
Photographic, editorial overhead still life on a warm cream paper surface: a smartphone with a soft glowing screen displaying a message bubble, beside a folded hanji paper letter with elegant Korean calligraphy visible. A dusty rose pastel ribbon and a deep rose wax seal complete the composition. Soft directional window light from the upper left. Calm, slow-magazine aesthetic. No people, no logos, no English text. Aspect ratio 16:9.
```

**Recommendation:** This slide is conceptually about three numbered steps. A photograph of a "translation moment" can work, but a clean SVG diagram (three numbered tiles: intake → translation → inbox) communicates the mechanics faster. If your goal is information clarity, build this one as a typographic diagram, not a photo.

---

## Slide 04 · Categories — "From a derm consult to a perm."

**Goal:** Four warm category vignettes. Like opening a Korean beauty atelier's portfolio.

### Midjourney (four-panel grid)
```
Editorial four-panel grid, 2x2, sharing one warm cream and dusty rose color grade. TOP-LEFT: close-up of dewy glass skin texture in soft morning light, abstract macro of a cheekbone. TOP-RIGHT: a Korean aesthetic clinic interior, minimal hinoki wood and cream linen, no equipment visible, calm. BOTTOM-LEFT: a hair salon detail — soft hands gently lifting a strand of glossy chestnut hair, no faces visible. BOTTOM-RIGHT: a hanbang wellness still life — small ceramic teacup with steam, dried botanicals, soft linen. All four panels feel like one slow magazine spread. Editorial photography, shallow depth, soft directional light. --ar 16:9 --style raw --stylize 200 --no people faces, signage, text, logos, harsh clinical lighting
```

### DALL-E 3 (four-panel grid)
```
Photographic, editorial four-panel grid (2x2) sharing one warm cream and dusty rose color palette. Top-left: macro close-up of dewy glass skin texture on a cheek, soft morning light. Top-right: minimal Korean aesthetic clinic interior, hinoki wood and cream linen, no medical equipment visible, calm. Bottom-left: hands gently lifting a glossy chestnut hair strand in a salon, no face visible. Bottom-right: a hanbang wellness still life with a small ceramic teacup with steam, dried botanicals on linen. All four panels share the same soft directional lighting and slow magazine aesthetic. No text, no logos, no signage. Aspect ratio 16:9.
```

**Same triptych caveat applies.** If the 2x2 doesn't generate cleanly, make four square images and grid them.

---

## Slide 05 · Conversation — "Keep talking, not translating."

**Goal:** A quiet moment of communication. Not screens. Not chat UI. The *feeling* of a message being understood.

### Midjourney
```
A young woman sitting at a small wooden writing desk by a window in soft morning light, a laptop open in front of her, a single ceramic mug of tea steaming beside it. She's mid-thought, slight smile, gentle expression — about to type. The laptop screen glow is warm, not blue. Dusty rose and cream tones. Editorial photography, shot from a slight side angle. Shallow depth of field. Negative space on the right for an overlaid chat thread graphic. --ar 16:9 --style raw --stylize 250 --no logo, watermark, brand, harsh blue screen glow, stock photo aesthetic
```

### DALL-E 3
```
Photographic, editorial style: a young woman in her late twenties sitting at a small wooden writing desk by a window in soft morning light, a laptop open in front of her, a ceramic mug of tea steaming beside it. She is mid-thought with a slight gentle smile, about to type. The laptop screen glow is warm, not blue. Dusty rose and warm cream color palette. Side-angle composition with shallow depth of field. Generous negative space on the right side of the frame. No visible logos, no brand names, no on-screen text. Aspect ratio 16:9.
```

---

## Slide 06 · Begin — "Ready when you land."

**Goal:** Arrival. Soft, optimistic. A new beginning, but quiet.

### Midjourney
```
A young woman stepping off an escalator at Incheon airport arrivals, soft natural skin, small carry-on, calm confident expression looking forward (not at camera). Warm morning light streaming through tall windows in the background, Seoul cityscape barely visible beyond. Editorial travel photography, dusty rose and cream tones, slight motion blur on background travelers. Negative space in the upper portion of the frame. --ar 16:9 --style raw --stylize 250 --no airline logos, brand signage, harsh fluorescent light, posed look at camera
```

### DALL-E 3
```
Photographic, editorial travel style: a young woman in her late twenties stepping off an escalator at an airport arrivals hall, small carry-on luggage beside her, calm confident expression looking forward (not at the camera). Warm morning light streaming through tall windows in the background, a faint Seoul cityscape visible beyond. Slight motion blur on background travelers. Dusty rose and warm cream color palette, editorial magazine aesthetic. No airline logos, no brand signage. Generous negative space in the upper portion of the frame. Aspect ratio 16:9.
```

---

## Generation workflow tips

1. **Generate slide 01 first.** It sets the look. Once you have a hero you love, use Midjourney's `/describe` on it to extract the exact style tokens, then prepend those tokens to the other 5 prompts. This is the trick to making 6 images feel like one set.
2. **Lock the seed.** On Midjourney, once a slide image is finalized, note its seed (`--seed 12345`) and use the same seed family across regenerations of that slide so iterations look related.
3. **Generate 4 variants per prompt minimum.** First gen rarely lands. Upscale the best variant, then `vary subtle` or `vary strong` from there.
4. **Color-grade after.** Even with the palette in the prompt, you'll get drift. A final 2-minute pass in Lightroom or Photoshop with a single shared preset across all 6 images is what locks the set together. Pull saturation slightly down, warm the white balance toward `+10`, lift the shadows.
5. **Avoid faces if possible on slides 3 and 5** if the personas will appear on slide 2 — keeping faces on slide 2 only avoids "who is this new person" confusion across the deck.

---

## What you'll end up with

Six 1920×1080 (or larger) images, one per slide. Drop them onto the existing slide JSX (the rose direction in your bundle already has `<DCImageSlot>` placeholders from `image-slot.js`) or onto fresh slide compositions. The timing JSON I generated puts you at:

| Slide | Duration | What's on screen |
|-------|---------:|------------------|
| 01 Cover | 15.83s | Hero image + headline |
| 02 Personas | 20.26s | Three persona portraits (triptych or carousel) |
| 03 How it works | 20.50s | Three numbered steps (consider SVG over photo) |
| 04 Categories | 15.13s | Four category vignettes |
| 05 Conversation | 15.33s | Hero image + chat thread overlay |
| 06 Begin | 12.87s | Arrival image + CTA |
| **Total** | **99.92s** | matches your audio exactly |
