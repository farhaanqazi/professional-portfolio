---
title: "Beauty Parlour Chatbot & Management System"
summary: "A full-stack salon booking and management system: chatbot-driven appointment booking over Telegram/WhatsApp, a role-based analytics dashboard, and background workers for the full appointment lifecycle."
role: "Full-stack Engineer (sole author)"
status: "prototype"
featured: true
order: 9
thumbnail: "/assets/images/project-placeholder.svg"
stack:
  - FastAPI
  - SQLAlchemy (async)
  - PostgreSQL / Supabase
  - Redis
  - React 19
  - TypeScript
problem: "Beauty parlours juggle bookings across chat apps and phone, with no single system tying appointments, staff, and revenue together."
outcome: "Built a multi-tenant system that books appointments through Telegram/WhatsApp with a deterministic flow (LLM-assisted for language and free-text), and gives owners a role-based dashboard tracking appointments, revenue trends, and staff utilization."
evidence:
  - "https://github.com/farhaanqazi/beauty-parlour-chatbot"
lessons:
  - "A deterministic booking flow with the LLM only as a fallback keeps behavior predictable while still handling messy free-text."
  - "Async SQLAlchemy + Redis session state lets one backend serve many salons concurrently."
---

## What it does

- Books appointments through **Telegram and WhatsApp** webhooks.
- Stores live chat sessions in **Redis** and persistent salon data in **PostgreSQL/Supabase**.
- Uses a **deterministic booking flow**, with Groq LLM support for language localization, free-text
  understanding, option matching, and date/time extraction fallback.
- Supports **multi-tenant salons** with per-salon services, channel configuration, and notification contacts.
- Provides a **role-based dashboard** for `admin`, `salon_owner`, and `reception` users.
- Tracks appointments, services, customers, KPIs, revenue trends, staff utilization, and customer analytics.
- Runs **background workers** for reminders, cancellation notices, salon digests, and lifecycle updates.

## Tech stack

**Backend** — FastAPI, async SQLAlchemy 2.x, PostgreSQL/Supabase, Redis, Alembic, Groq LLM,
Telegram + WhatsApp adapters.
**Frontend** — React 19, TypeScript, Vite, Tailwind CSS v4, TanStack Query, Zustand, Supabase Auth, Framer Motion.

## Key decisions & trade-offs

- **Rule-based conversation engine first, LLM as fallback** — predictable booking behavior, with the
  model handling only localization and ambiguous free-text. Trade-off: more handler code, fewer surprises.
- **Async ORM + Redis session state** — concurrency across many salons, at the cost of async-everywhere discipline.

## Evidence & validation

> Add real proof before launch: dashboard screenshots, a short booking-flow demo (GIF or video),
> and any live-usage numbers. The repo link is the current proof.

Source: <https://github.com/farhaanqazi/beauty-parlour-chatbot>
