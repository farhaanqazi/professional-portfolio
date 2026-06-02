---
title: "ML Dashboard Generator — Contract-Governed Analytics"
summary: "A FastAPI + React platform that turns raw tabular data into an interactive Plotly dashboard — with a semantic contract layer that lets the LLM narrate only validated numbers, never invent them."
role: "Full-stack / ML Engineer (sole author)"
status: "production"
featured: true
order: 1
thumbnail: "/assets/images/project-placeholder.svg"
demoUrl: "https://farburgh-ai-powered-dashboard.hf.space/"
stack:
  - FastAPI
  - Python
  - React
  - Plotly
  - PostgreSQL
  - Docker
problem: "Generic 'CSV → chart' AI tools happily fabricate numbers and mislabel columns, so their dashboards can't be trusted for real decisions."
outcome: "Built a semantic contract layer that classifies and arbitrates columns, freezes a per-dataset contract governing which aggregations and charts are even allowed, and constrains the LLM to narrate only validated ground-truth numbers — with low-confidence schemas halting for human review before any analysis runs."
evidence:
  - "https://farburgh-ai-powered-dashboard.hf.space/"
  - "https://github.com/farhaanqazi/AI-Powered-Dashboards"
lessons:
  - "Provenance is the feature: every KPI carries a provenance token, and an output validator rejects any number whose provenance does not resolve."
  - "Letting low-confidence schemas halt for human-in-the-loop review beats silently producing a confident-but-wrong dashboard."
---

## What it does

The platform ingests tabular data (CSV / Excel / Parquet / JSON — uploaded, URL-fetched, or
pulled from Kaggle), runs it through a **contract-governed analysis pipeline**, and renders an
interactive Plotly dashboard with auto-selected KPIs, curated chart sections, statistical depth,
and a conversational **Ask-Your-Data** layer.

- **Multi-format streaming ingest** — SSE-driven progress (Reading → Profiling → Classifying → … → Done) behind one parser seam.
- **Semantic Contract Layer** — an ingest gate (currency/thousands coercion, sentinel→NA, PII detection), a frozen `DatasetContract` with schema fingerprint + grain detection, a role-aware router deciding what may be summed or correlated, and an invariant critic that vetoes nonsensical classifications.
- **Human-in-the-loop schema review** — datasets below a confidence threshold halt; the user edits column roles, which re-locks the contract and recomputes the dashboard *without* re-running the LLM.
- **Provenance-validated AI** — the LLM proposes; the backend computes. Every KPI carries a provenance token; an output validator rejects any number whose provenance does not resolve.
- **Statistical depth** — Spearman / MI / Cramér's V, Mann-Kendall + STL trend tests, IsolationForest / LOF outliers, KMeans / HDBSCAN clustering, RandomForest driver analysis; each block degrades gracefully rather than failing.
- **Ask-Your-Data** — conversational follow-up over a fixed, contract-guarded tool catalogue; the LLM plans steps, the backend executes them deterministically, and narration may use only the computed numbers.

## Key decisions & trade-offs

- **Contract-first, LLM-last.** The frozen per-dataset contract governs what is even *allowed* to be
  computed or charted. Trade-off: significant upfront classification/arbitration machinery, in exchange
  for dashboards whose every number is defensible.
- **Halt on low confidence** instead of guessing — the pipeline favors a human checkpoint over a
  silently wrong result.
- **Production hardening** — security pass, observability, an AI eval harness, a frontend test net,
  and a CI/CD merge gate are in place (Phases 0–13 complete; server-side interactive filtering in progress).

## Evidence & validation

- **Live demo:** <https://farburgh-ai-powered-dashboard.hf.space/> — deployed on Hugging Face Spaces (Docker).
- **Source:** <https://github.com/farhaanqazi/AI-Powered-Dashboards>

> Add a short walkthrough (GIF or 60-second video) of an upload → contract review → dashboard run to
> make the demo legible at a glance. If the GitHub repo is private, make it public so the source link resolves.
