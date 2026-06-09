# HD-2D Astro Personal Website

A pixel-art personal website inspired by Octopath Traveler's HD-2D aesthetic.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSRogue%2Fhd2d-personal-site)

## Features
- Three-layer parallax depth-of-field (tilt-shift HD-2D effect)
- Canvas firefly particles, animated lanterns, glowing moon
- RPG menu navigation, dialogue-box about, quest-log blog, equipment-grid projects
- Markdown-powered blog via Astro Content Collections
- Web Audio synthesized chiptune BGM (no external files)
- Mobile-optimized portrait scene
- i18n: English / 中文 language switching
- Static deploy: Vercel / Netlify / Cloudflare Pages / GitHub Pages

## Quick start
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output -> dist/
```

## Deploy

### GitHub Pages
The site auto-deploys via GitHub Actions on every push to `main`.  
Visit: **Settings → Pages → Source → GitHub Actions** to enable.  
Live URL: `https://SRogue.github.io/hd2d-personal-site`

### Vercel
Click the **Deploy with Vercel** button above, or:
```bash
npm i -g vercel
vercel
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
- i18n translations: `src/i18n/translations.ts`
