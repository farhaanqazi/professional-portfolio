---
title: "Prompt Management System"
summary: "A prompt manager that treats an Obsidian vault as the single source of truth — Markdown + frontmatter prompts, instant SQLite FTS5 full-text search, and a read-only Streamlit dashboard + CLI behind a Clerk auth gateway."
role: "Builder (sole author)"
status: "prototype"
featured: true
order: 10
thumbnail: "/assets/images/project-placeholder.svg"
demoUrl: "https://prompt-management-system.onrender.com/"
stack:
  - Python
  - Streamlit
  - SQLite FTS5
  - Next.js
  - Clerk
problem: "A growing library of AI prompts in scattered files is impossible to search, validate, or trust — and heavy databases invite sync conflicts and lock-in."
outcome: "Built a system where every prompt is a Markdown file with YAML frontmatter, indexed by SQLite's FTS5 engine into a disposable cache that rebuilds from the vault in milliseconds — searchable through a read-only dashboard and CLI, with validation that keeps the library clean."
evidence:
  - "https://prompt-management-system.onrender.com/"
lessons:
  - "Making the UI, CLI, and indexer strictly read-only over the vault makes the whole system sync-conflict immune — the index is just a rebuildable cache."
  - "One parser, one schema (prompt_lib.py) shared across CLI, indexer, and UI prevents drift."
---

## What it does

Treats an **Obsidian vault as the single source of truth** for AI prompts, stored as Markdown
files with YAML frontmatter, and makes them instantly searchable.

- **Markdown + frontmatter** — every prompt is a plain `.md` with structured metadata (title, category, tags, use case).
- **Full-text search (FTS5)** — search the body, title, tags, and use case of every prompt instantly.
- **Sync-conflict immune** — the UI, CLI, and indexer are strictly read-only over the vault; the index DB is a gitignored, rebuildable cache.
- **Browse & group** — filter by search, or group the library by category or tag.
- **Validation built in** — the test suite fails if any prompt is missing required frontmatter, so the library stays clean.
- **Authenticated access** — an optional Next.js + Clerk gateway fronts the dashboard, logging every sign-in.

## Architecture

- `prompt_lib.py` — shared core: frontmatter parsing, the FTS5 schema, search, and validation. One parser, one schema.
- `prompt_cli.py` — CLI: refresh, search, copy, audit, validate.
- `prompt_ui.py` — read-only Streamlit dashboard, token-gated behind the gateway.
- `web/` — Next.js + Clerk auth gateway: login, launch-token handoff, sign-in logging.
- `tests/` — pytest suite, including a check that every prompt in the live vault has complete frontmatter.

## Key decisions & trade-offs

- **Vault as SSOT, index as disposable cache** — no heavy DB to lock up, no cloud-sync conflicts; the trade-off is a rebuild step, which runs in milliseconds.
- **Read-only everywhere** — the tools never mutate the vault, eliminating an entire class of corruption bugs.

## Evidence & validation

- **Live demo:** <https://prompt-management-system.onrender.com/>

> The repository is private, so there is no public source link. If you want a source link as evidence,
> make the repo public or add a short walkthrough GIF of search + browse here.
