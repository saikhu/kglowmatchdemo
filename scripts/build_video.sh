#!/usr/bin/env bash
# KGlowMatch · Tourist Demo — full build
#   1. Renders the 6 slides from deck/slideshow.html (headless Chrome) → dist/slides/01..06.png
#   2. Assembles them + the voiceover into dist/kglowmatch_demo.mp4 with cross-fades.
#
# Run from anywhere:  scripts/build_video.sh
# Requires: Google Chrome, ffmpeg, ffprobe, bc. Rendering fetches web fonts (needs internet).

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"          # repo root (parent of scripts/)
cd "$ROOT"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HTML="$ROOT/deck/slideshow.html"
AUDIO="assets/voiceover.mp3"
SLIDES="dist/slides"
OUT="dist/kglowmatch_demo.mp4"

# Slide durations (s), slide order, from docs/timings.json (silence-detected breath pauses).
# Sum = 99.92 ≈ audio length (99.89s).
D=(15.83 20.26 20.50 15.13 15.33 12.87)
XFADE=0.6

# ── 1. Render slides ────────────────────────────────────────────────
mkdir -p "$SLIDES"
echo "Rendering 6 slides at 1920×1080 …"
for n in 1 2 3 4 5 6; do
  out="$SLIDES/0$n.png"
  "$CHROME" --headless --disable-gpu --hide-scrollbars --no-sandbox \
    --force-device-scale-factor=1 --window-size=1920,1080 \
    --default-background-color=ff1c120e \
    --virtual-time-budget=6000 \
    --screenshot="$out" \
    "file://$HTML?slide=$n" >/dev/null 2>&1
  [[ -f "$out" ]] || { echo "FAILED to render slide $n"; exit 1; }
  echo "  ✓ $out"
done

# ── 2. Assemble video ───────────────────────────────────────────────
[[ -f "$AUDIO" ]] || { echo "Missing audio: $AUDIO"; exit 1; }

INPUTS=()
for i in 0 1 2 3 4 5; do
  N=$((i+1))
  if [[ $i -lt 5 ]]; then LEN=$(echo "${D[$i]} + $XFADE" | bc -l); else LEN=${D[$i]}; fi
  INPUTS+=(-loop 1 -t "$LEN" -i "$SLIDES/0$N.png")
done
INPUTS+=(-i "$AUDIO")

FILTER=""
OFFSET=0
PREV="[0:v]"
for i in 1 2 3 4 5; do
  OFFSET=$(echo "$OFFSET + ${D[$((i-1))]}" | bc -l)
  FILTER+="${PREV}[$i:v]xfade=transition=fade:duration=$XFADE:offset=$OFFSET[v$i];"
  PREV="[v$i]"
done
FILTER+="${PREV}format=yuv420p,scale=1920:1080:flags=lanczos[vout]"

echo "Assembling $OUT …"
ffmpeg -y "${INPUTS[@]}" \
  -filter_complex "$FILTER" \
  -map "[vout]" -map "6:a" \
  -c:v libx264 -preset slow -crf 18 \
  -c:a aac -b:a 192k -pix_fmt yuv420p -shortest \
  "$OUT" >/dev/null 2>&1

echo ""
echo "Done → $OUT"
ffprobe -v error -show_entries format=duration,size -of default=noprint_wrappers=1 "$OUT"
