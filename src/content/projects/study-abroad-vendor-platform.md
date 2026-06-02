---
title: "Study-Abroad Vendor Platform"
summary: "A multi-tenant lead-management platform for study-abroad agencies: per-vendor public sites, a gated cost-estimate calculator, multi-form lead capture, and Telegram + WhatsApp chatbot intake."
role: "Full-stack Engineer (sole author)"
status: "prototype"
featured: true
order: 8
thumbnail: "/assets/images/project-placeholder.svg"
stack:
  - FastAPI
  - Python
  - React
  - Redis
problem: "Study-abroad agencies need their own branded web presence, lead capture, and chat intake — but building a separate site and backend per agency does not scale."
outcome: "Built a single multi-tenant platform where each agency gets a public site under its own slug, lead-capture forms that email the business on every submission, a management console, and per-vendor Telegram/WhatsApp bot routing."
evidence:
  - "https://github.com/farhaanqazi/study-abroad-app"
lessons:
  - "Multi-tenancy by slug keeps one codebase serving many vendors without per-tenant deploys."
  - "Redis-backed dedup and conversation state are what make multi-channel chatbot intake reliable."
---

## What it does

Each **vendor** (agency) gets a public site under its own slug, a set of lead-capture forms
that email the business on every submission, and a console to review leads and tune the cost
calculator. Telegram and WhatsApp webhooks are wired per-vendor as an additional inbound channel.

- **Per-vendor public sites** — `/v/<vendor-slug>` resolves a vendor and renders its landing page + contact form.
- **Lead capture** — inquiries, request-a-callback, full applications, and QR-scan logging; every lead fires a background email to the vendor and the student.
- **Cost-estimate calculator** — a gated lead magnet that computes tuition + stay + food from the vendor's configured rates and stores the submission as a lead.
- **Vendor management console (API)** — list inquiries, callbacks, applications, and estimates; full CRUD on the per-vendor cost settings.
- **Multi-channel chatbot intake** — Telegram and WhatsApp webhooks with per-vendor bot-token routing, signature verification, and Redis-backed dedup + conversation state.

## Architecture

```
Browser ──► Public vendor site (React SPA)
              │  POST /api/v1/v/<slug>/inquiries | /callback | /applications | /cost-estimate
              ▼
        FastAPI (per-vendor routing) ──► email + lead store
              ▲
Telegram / WhatsApp webhooks ──► per-vendor bot routing ──► Redis (dedup + conversation state)
```

## Key decisions & trade-offs

- **Slug-based multi-tenancy** over per-tenant deployments — one codebase, many vendors.
- **Background email on every lead** so agencies never miss an inbound, at the cost of a worker/queue to manage.

## Evidence & validation

> Add real proof before launch: screenshots of a vendor site + console, and a note on how
> many vendors / leads it has handled if it has run live. The repo link is the current proof.

Source: <https://github.com/farhaanqazi/study-abroad-app>
