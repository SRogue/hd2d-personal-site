# HD-2D Astro Personal Website

A pixel-art personal website inspired by Octopath Traveler's HD-2D aesthetic.

## Features
- Three-layer parallax depth-of-field (tilt-shift HD-2D effect)
- Canvas firefly particles, animated lanterns, glowing moon
- RPG menu navigation, dialogue-box about, quest-log blog, equipment-grid projects
- Markdown-powered blog via Astro Content Collections
- Web Audio synthesized chiptune BGM (no external files)
- Mobile-optimized portrait scene
- Static deploy: Vercel / Netlify / Cloudflare Pages / GitHub Pages

## Quick start
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output -> dist/
```

## Add a blog post
Drop a Markdown file in `src/content/blog/`:

```md
---
title: "My new quest"
date: 2026-06-08
icon: "📜"
description: "Short summary shown on the quest log."
---

Body in Markdown...
```

## Customize
- Hero scene: `src/components/HeroScene.astro`
- Sections: `src/components/{About,Blog,Projects,Contact}.astro`
- Color palette / fonts: `src/styles/global.css` `:root`
- BGM tones: `src/components/Bgm.astro`
