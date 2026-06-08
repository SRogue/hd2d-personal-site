---
title: "Building HD-2D Effects with CSS"
date: 2026-06-03
icon: "📜"
description: "Recreate Octopath Traveler's tilt-shift magic in the browser."
status: NEW
readMin: 8
---

The HD-2D look is built from three ingredients: pixel sprites in the foreground, a softly blurred painterly background, and warm volumetric light bridging them.

## Three-layer depth

```css
.layer-sky   { filter: blur(2px); }
.layer-mid   { filter: blur(1.2px); }
.layer-front { filter: none; }
```

Combine with `transform: translateY()` driven by scroll for parallax.

## Volumetric light

A `radial-gradient` from the moon position, animated with `opacity`, sells the god-rays effect without WebGL.

That's the whole trick — a few CSS layers, one canvas for fireflies, and you're in Orsterra.
