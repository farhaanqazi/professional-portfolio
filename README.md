# Portfolio Platform

Evidence-first portfolio built with **Astro** (static), **Tailwind CSS**, and **Zod**-validated content collections. Zero client JS by default; light/dark via `prefers-color-scheme` (no toggle). Full spec in [plan.md](plan.md).

## Local development

```bash
npm install
npm run dev        # local dev server
npm run verify     # astro check (types + content schema) + production build
npm run preview    # serve the production build from dist/
```

## Project structure

```
src/
  data/site.ts            # ← identity & contact (edit this first)
  content/
    config.ts             # Zod schema for projects
    projects/*.md         # case studies (one file per project)
  components/             # Header, Footer, ProjectCard, ContactLinks, ResumeLink, Icon, SectionHeading
  layouts/                # BaseLayout (SEO/OG), CaseStudyLayout (long-form)
  pages/                  # /, /projects, /projects/[slug], /about, 404
  styles/global.css
public/assets/
  documents/resume.pdf    # ← replace placeholder
  images/                 # og-card, thumbnails (replace placeholders)
  diagrams/               # architecture SVGs (optional)
```

## Before you launch — Phase 0 content (the real work)

This scaffold ships with **clearly-labeled placeholders**. It builds and previews, but it is
not ready for the public until you replace them. Anything marked `PLACEHOLDER` must go.

- [ ] `src/data/site.ts` — real name, role, tagline, email, GitHub, LinkedIn, and `url`.
- [ ] `astro.config.mjs` — set `site` to your real custom domain.
- [ ] `public/assets/documents/resume.pdf` — your real, compressed resume (< 2 MB).
- [ ] `public/assets/images/og-card.svg` — replace with a real **1200×630 PNG** social card.
- [ ] `src/content/projects/*.md` — replace both samples with **≥2 real, evidence-backed** projects.
      Every metric needs a `source`; every project needs at least one real `evidence` link.
- [ ] Project thumbnails — drop real screenshots in `public/assets/images/` (or move to
      `src/assets/` and use Astro's `<Image>` for optimization), and update each `thumbnail` path.
- [ ] About page copy in `src/pages/about.astro`.

## Deployment (Phase 4)

1. Push to a GitHub repo.
2. Connect the repo to **one** host — Cloudflare Pages **or** Vercel (not both).
   - Build command: `npm run build`
   - Output directory: `dist`
3. Attach your custom domain and verify HTTPS.
4. Paste the live link into LinkedIn/Slack and confirm the OG preview card renders.

## Quality gates

```bash
npm run verify
```

Then manually confirm: works at 360 / 768 / 1440px, keyboard focus is visible, navigation
works with JS disabled, resume opens, and no console errors in preview.
