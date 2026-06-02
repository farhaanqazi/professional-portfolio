# Farhaan Qazi — Portfolio

> Reporting & BI analyst with 8+ years across banking, healthcare (NHS/EMEA), and operations — bringing rare automation (Python, SQL, CI/CD) to traditional Excel and Power BI reporting.

This repository is the source for my personal portfolio: a fast, static, evidence-first site where every project links to its proof — a live demo, a public repo, or a documented deliverable.

**Live site:** [professional-portfolio.qazifarhaan.workers.dev](https://professional-portfolio.qazifarhaan.workers.dev/) · **LinkedIn:** [farhaan-qazi](https://www.linkedin.com/in/farhaan-qazi/) · **Email:** qazifarhaan@gmail.com

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) (static site generation, zero client JS by default) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS · light/dark via `prefers-color-scheme` (no toggle) |
| Content | Astro Content Collections + Zod-validated schemas |
| Hosting | Cloudflare Pages / Vercel (static `dist/`) |

The build ships **no JavaScript** unless a page needs it, sets explicit image dimensions (no layout shift), exposes Open Graph cards for clean link previews, and is keyboard-accessible with visible focus states.

---

## Featured projects

| Project | What it is | Proof |
|---|---|---|
| **ML Dashboard Generator** | FastAPI + React analytics platform with a semantic-contract layer — the LLM narrates only validated numbers, never invents them | [Live](https://farburgh-ai-powered-dashboard.hf.space/) · [Source](https://github.com/farhaanqazi/AI-Powered-Dashboards) |
| **Power BI Business Dashboards** | Executive dashboards: revenue, churn signals, segmentation, dynamic DAX | [Portfolio](https://www.novypro.com/profile_projects/farhaanqazi) |
| **SQL Data Warehouse** | Medallion (Bronze/Silver/Gold) warehouse with a star schema for analytics | [Source](https://github.com/farhaanqazi/SQL-Data-Warehouse-Project) |
| **Churn Intelligence Engine** | Validates data, scores churn with a rule-based engine, ships a stakeholder PDF | [Source](https://github.com/farhaanqazi/Churn-Prediction-Intelligence) |
| **LogiAudit** | Automated 3PL invoice exception reporting — provable overcharges as plain arithmetic | [Source](https://github.com/farhaanqazi/logiAudit) |
| **NHS Performance Reporting** | Compliance-grade wait-time & KPI dashboards (Leeds Teaching Hospitals NHS Trust) | Confidential |
| **Email Automation** | Scales personalized job outreach with dedup and scheduled follow-ups | [Live](https://email-automation-6rvi.onrender.com/) |
| **Prompt Management System** | Obsidian-vault SSOT + SQLite FTS5 search + Clerk-gated dashboard | [Live](https://prompt-management-system.onrender.com/) |

Full case studies — problem, decisions, trade-offs, and evidence — live on the site.

---

## Local development

```bash
npm install
npm run dev        # local dev server at http://localhost:4321
npm run verify     # astro check (types + content schema) + production build
npm run preview    # serve the production build from dist/
```

## Project structure

```
src/
  data/             # site identity + experience timeline
  content/
    config.ts       # Zod schema for projects
    projects/*.md   # one case study per file
  components/        # Header, Footer, ProjectCard, ContactLinks, Icon, …
  layouts/           # BaseLayout (SEO/OG), CaseStudyLayout
  pages/             # /, /projects, /projects/[slug], /experience, /about, 404
  styles/global.css
public/assets/        # resume PDF, images, diagrams
```

## Deployment

Static output builds to `dist/`. On Cloudflare Pages or Vercel:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Set the production domain in `astro.config.mjs` (`site`) and `src/data/site.ts` (`url`) before launch so canonical URLs and Open Graph images resolve.

---

© 2026 Farhaan Qazi.
