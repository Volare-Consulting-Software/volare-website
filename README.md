# volare-website

Marketing site for Volare Consulting — [`go-volare.com`](https://go-volare.com).

Built with **Astro + Tailwind v4**, deployed to **Cloudflare Workers**. Static-first, with a single server endpoint at `/api/contact` for the engagement form. Full dark-mode support.

## Stack

- [Astro 6](https://astro.build/) — static-first, zero-JS by default, with `@astrojs/cloudflare` for the Worker entrypoint
- [Tailwind CSS v4](https://tailwindcss.com/) — brand tokens via `@theme`
- [Nunito](https://fonts.google.com/specimen/Nunito) — typeface from the brand guide
- Lucide-style inline SVG icons
- Animations: native CSS, IntersectionObserver, Astro View Transitions — no libraries
- [Resend](https://resend.com) — transactional mail for the engagement form (called from `src/pages/api/contact.ts`)

## Brand source-of-truth

[`Volare-Consulting-Software/volare-brand`](https://github.com/Volare-Consulting-Software/volare-brand) — voice, color tokens, type scale, logo assets. Logo PNGs are vendored into `public/` directly.

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # output in dist/
npm run preview      # build + wrangler dev (mimics the deployed Worker locally)
npm run deploy       # build + wrangler deploy (manual deploy bypassing CI)
```

## Project layout

```
src/
  layouts/Layout.astro          base HTML, View Transitions, FOUC-free dark mode init
  pages/                        index, pilota, vito (each owns its own copy)
  pages/api/contact.ts          POST /api/contact → Resend (server endpoint)
  components/                   header, footer, hero, scroll reveal, testimonial card, etc.
  styles/global.css             brand tokens (@theme) + base + utilities
public/
  testimonials/                 customer photos + company logos used by TestimonialCard
  people/                       leadership headshots
  favicon.*, logo-icon*.png     site chrome
```

## Deployment

Connected to this repo's `main` branch via Cloudflare Workers Builds.

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy --keep-vars` ← **important**, see below
- Production branch: `main`
- Worker config: `wrangler.jsonc`

### Why `--keep-vars`

Without `--keep-vars`, `wrangler deploy` replaces the Worker's full variables-and-secrets configuration on every CI build, wiping out anything set in the dashboard. We keep `RESEND_API_KEY`, `CONTACT_TO`, and `CONTACT_FROM` in the dashboard (Worker → Settings → Variables and Secrets), and `--keep-vars` preserves them across deploys.

### Required Worker env (set in dashboard)

| Name | Type | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Secret | Resend API key (the engagement form uses it) |
| `CONTACT_TO` | Plaintext | Recipient inbox |
| `CONTACT_FROM` | Plaintext | Verified sender (currently `onboarding@resend.dev` until a domain is verified with Resend) |

### Domains

Custom domain `go-volare.com` routes directly to the Worker (configured in Cloudflare dashboard → Worker → Domains & Routes). DNS managed at Cloudflare.
