# HD-2D Astro Personal Website

A pixel-art personal website inspired by Octopath Traveler's HD-2D aesthetic.

## Features
- Three-layer parallax depth-of-field (tilt-shift HD-2D effect)
- Canvas firefly particles, animated lanterns, glowing moon
- RPG menu navigation, dialogue-box about, quest-log blog, equipment-grid projects
- Markdown-powered blog via Astro Content Collections
- Web Audio synthesized chiptune BGM (no external files)
- Mobile-optimized portrait scene
- i18n: English / 中文 language switching
- Static deploy: GitHub Pages + Cloudflare Pages

## Quick start

Requires **Node.js >= 18.20.8** (recommended: Node 20, see `.nvmrc`).

```bash
npm install
npm run check    # astro type check
npm run dev      # http://localhost:4321
npm run build    # output -> dist/
```

## Deploy

This site deploys to **GitHub Pages** and **Cloudflare Pages** simultaneously. Both build automatically from `main` and create preview deployments for Pull Requests.

The build detects the platform via environment variables (`CF_PAGES`, `GITHUB_PAGES`) and adjusts `site` / `base` paths accordingly. You can also override them manually:

```bash
SITE_URL=https://example.com BASE_PATH=/ npm run build
```

### GitHub Pages
The site auto-deploys via GitHub Actions on every push to `main`.

1. Go to **Settings → Pages → Source** and select **GitHub Actions**.
2. Push to `main`; the workflow at `.github/workflows/deploy.yml` will build and deploy.

Live URL: `https://SRogue.github.io/hd2d-personal-site`

### Cloudflare Pages
1. In the Cloudflare dashboard, go to **Pages → Create a project** and connect `SRogue/hd2d-personal-site`.
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
3. Every PR gets a unique `*.pages.dev` preview URL.

Security headers for Cloudflare Pages are configured in `public/_headers`.

### Pull Request workflow
On every PR to `main`, `.github/workflows/preview.yml` runs `npm run check` and `npm run build` to verify the site compiles before merging.

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
