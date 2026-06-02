// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for identity & contact.
// Populated from GitHub (farhaanqazi). Items still marked PLACEHOLDER are values
// that are NOT on your GitHub profile — fill them before launch.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'Farhaan Qazi',
  role: 'Data & BI Analyst',
  location: 'New Delhi, India',
  // One line for the 8-second skim. His real positioning + differentiator.
  tagline:
    'Reporting & BI analyst with 8+ years across banking, healthcare, and operations — bringing rare automation (Python, SQL, CI/CD) to traditional Excel and Power BI reporting.',
  // Hero sub-line / default meta description.
  valueStatement:
    'MSc Data Science. I build executive-ready dashboards and automate the reporting cycle end to end — extracting from multiple sources, tracking KPIs, and turning ad-hoc requests into repeatable, audit-ready outputs.',

  // Used for canonical URLs and OG tags. MUST match astro.config.mjs `site`.
  url: 'https://your-domain.com', // PLACEHOLDER — set your real domain

  // Contact paths.
  email: 'qazifarhaan@gmail.com',
  github: 'https://github.com/farhaanqazi',
  linkedin: 'https://www.linkedin.com/in/farhaan-qazi/',

  resumePath: '/assets/documents/resume.pdf', // replace placeholder PDF
  ogImage: '/assets/images/og-card.svg', // replace with a real 1200x630 PNG
} as const;

export type Site = typeof site;
