---
title: "Building HD-2D Effects with CSS"
date: 2026-06-03
icon: "📜"
description: "Recreate Octopath Traveler's tilt-shift magic in the browser."
status: NEW
readMin: 8
tags: ["css", "hd2d", "effects"]
category: "教程"
---

The HD-2D look is built from three ingredients: pixel sprites in the foreground, a softly blurred painterly background, and warm volumetric light bridging them.

## Three-layer Depth

The core technique is parallax with differential blur. Each layer moves at a different scroll speed and has a different blur amount:

```css
.layer-sky   { filter: blur(2px); }
.layer-mid   { filter: blur(1.2px); }
.layer-front { filter: none; }
```

Combine with `transform: translateY()` driven by scroll for parallax. The background layers move slower (further away), creating depth perception. The blur simulates a tilt-shift lens — the miniature photography effect that makes scenes look like tiny dioramas.

## Volumetric Light (God Rays)

A `radial-gradient` from the moon position, animated with `opacity`, sells the god-rays effect without WebGL:

```css
.god-rays {
  background: radial-gradient(circle at center,
    rgba(245, 233, 196, 0.18) 0%,
    rgba(245, 233, 196, 0.08) 30%,
    transparent 70%);
  animation: rayPulse 6s ease-in-out infinite;
}
```

## Fireflies with Canvas

The living atmosphere comes from particle systems. Fireflies are rendered on a `<canvas>` with radial gradients for the glow effect. Each particle has a sinusoidal velocity for organic movement and a phase-based opacity for natural twinkling.

## Pixel Art with box-shadow

You can draw pixel art using nothing but `box-shadow`:

```css
.character {
  width: 16px; height: 24px;
  box-shadow:
    4px 0 0 #f0c9a4,  8px 0 0 #f0c9a4,
    0  4px 0 #2a1810, 4px 4px 0 #f0c9a4, ...;
}
```

Each `box-shadow` entry is one pixel. The 4px grid creates the chunky retro look.

## Weather System

Add rain or snow with a second canvas layer. The weather type can be chosen by season — snow in winter, rain in summer, clear otherwise. This keeps the scene feeling alive across visits.

That's the whole trick — a few CSS layers, one canvas for fireflies, one for weather, and you're in Orsterra.
