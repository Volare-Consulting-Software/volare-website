# volare-website

Marketing site for Volare Consulting — [`go-volare.com`](https://go-volare.com).

Built with **Astro + Tailwind v4**, deployed to **Cloudflare Pages**. Pure static, zero animation libraries, full dark-mode support.

## Stack

- [Astro 6](https://astro.build/) — static-first, zero-JS by default
- [Tailwind CSS v4](https://tailwindcss.com/) — brand tokens via `@theme`
- [Nunito](https://fonts.google.com/specimen/Nunito) — typeface from the brand guide
- Lucide-style inline SVG icons
- Animations: native CSS, IntersectionObserver, Astro View Transitions — no libraries

## Brand source-of-truth

[`Volare-Consulting-Software/volare-brand`](https://github.com/Volare-Consulting-Software/volare-brand) — voice, color tokens, type scale, logo assets. Logo PNGs are vendored into `public/` directly.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # output in dist/
npm run preview      # serve the built site locally
```

## Project layout

```
src/
  layouts/Layout.astro          base HTML, View Transitions, FOUC-free dark mode init
  pages/                        index, pilota, vito
  components/                   header, footer, hero, pipeline, scroll reveal, etc.
  content/copy.ts               single source of truth for marketing copy
  styles/global.css             brand tokens (@theme) + base + utilities
public/                         logos, favicon
```

## Deployment

Cloudflare Pages, connected to this repo's `main` branch.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20

DNS managed at GoDaddy. `www.go-volare.com` is the canonical hostname (CNAME → `volare-website.pages.dev`). Apex `go-volare.com` forwards to `https://www.go-volare.com` via GoDaddy domain forwarding.
