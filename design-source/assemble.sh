#!/usr/bin/env bash
# KGlowMatch · Slideshow assembly
# Combines 6 still images + the ElevenLabs voiceover into a 1920x1080 MP4 with cross-fades.
#
# Requirements: ffmpeg (already installed on most systems; `brew install ffmpeg` on Mac).
# Run from the directory containing this script.

set -euo pipefail

# --- Inputs ---------------------------------------------------------
AUDIO="audio/voiceover.mp3"                      # your ElevenLabs MP3 here
IMG_DIR="images"                                  # 6 PNGs: 01.png ... 06.png, each 1920x1080
OUT="kglowmatch_demo.mp4"

# Slide durations (seconds) — derived from silence-detected breath pauses in the actual audio.
# If you nudge any of these manually, the cross-fades will still work as long as
# the SUM equals the total audio duration (99.92s).
D=(15.83 20.26 20.50 15.13 15.33 12.87)

# Cross-fade length (seconds). Keep ≤ 1.0 to avoid eating into VO.
XFADE=0.6

# --- Sanity checks --------------------------------------------------
for i in 1 2 3 4 5 6; do
  IMG="$IMG_DIR/0$i.png"
  [[ -f "$IMG" ]] || { echo "Missing: $IMG"; exit 1; }
done
[[ -f "$AUDIO" ]] || { echo "Missing audio: $AUDIO"; exit 1; }

# --- Build the filter graph ----------------------------------------
# Each image becomes a video stream of length D[i]+XFADE (so cross-fades overlap).
# We then chain xfade transitions: 1→2→3→4→5→6.

# Build per-image inputs
INPUTS=()
for i in 0 1 2 3 4 5; do
  N=$((i+1))
  IMG="$IMG_DIR/0$N.png"
  # Each image needs to be slightly longer than its target duration
  # so the xfade has overlap material. We pad by XFADE for all but the last.
  if [[ $i -lt 5 ]]; then
    LEN=$(echo "${D[$i]} + $XFADE" | bc -l)
  else
    LEN=${D[$i]}
  fi
  INPUTS+=(-loop 1 -t "$LEN" -i "$IMG")
done
INPUTS+=(-i "$AUDIO")

# Build xfade chain. Offsets are cumulative slide durations.
FILTER=""
OFFSET=0
PREV="[0:v]"
for i in 1 2 3 4 5; do
  PREV_DUR=${D[$((i-1))]}
  OFFSET=$(echo "$OFFSET + $PREV_DUR" | bc -l)
  LABEL="[v$i]"
  FILTER+="${PREV}[$i:v]xfade=transition=fade:duration=$XFADE:offset=$OFFSET${LABEL};"
  PREV=$LABEL
done
# Final video stream: $PREV. Add format conversion + scale guard.
FILTER+="${PREV}format=yuv420p,scale=1920:1080:flags=lanczos[vout]"

# --- Render --------------------------------------------------------
ffmpeg -y "${INPUTS[@]}" \
  -filter_complex "$FILTER" \
  -map "[vout]" -map "6:a" \
  -c:v libx264 -preset slow -crf 18 \
  -c:a aac -b:a 192k \
  -pix_fmt yuv420p \
  -shortest \
  "$OUT"

echo ""
echo "Done. Output: $OUT"
ffprobe -v error -show_entries format=duration,size -of default=noprint_wrappers=1 "$OUT"
