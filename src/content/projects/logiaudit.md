---
title: "LogiAudit — Automated Invoice Exception Reporting"
summary: "A self-serve tool that reconciles 3PL warehouse billing against order data and surfaces a provable, itemised, audit-ready list of overcharges — replacing manual reconciliation with a repeatable report."
role: "Analyst & Builder (sole author)"
status: "prototype"
featured: true
order: 5
thumbnail: "/assets/images/project-placeholder.svg"
stack:
  - TypeScript
  - Next.js
  - Reconciliation
problem: "Shopify brands are routinely overbilled by their 3PL warehouses, but verifying each invoice means reconciling billing exports against order data by hand — so most overcharges go unchallenged."
outcome: "Built a deterministic audit engine that joins a ShipBob billing export with a Shopify order export on Order ID and flags five classes of overcharge as plain arithmetic against the contract — no calls, no consultants, no setup."
evidence:
  - "https://github.com/farhaanqazi/logiAudit"
lessons:
  - "Trust is the product: a single wrong accusation to a warehouse burns the relationship, so the engine raises a finding only when the math is unarguable."
  - "Keeping the core a pure function (no I/O, no framework) made every check independently testable."
---

## What it does

Upload a ShipBob billing CSV and a Shopify order CSV, enter your contract rates, and
LogiAudit returns an itemized, provable list of overcharges. Every dollar claimed is
**plain arithmetic against your contract** — the engine is deliberately conservative and
raises a finding only when the math is unarguable.

## The five deterministic checks

| Check | What it catches |
| --- | --- |
| Weight-bracket inflation | Billed weight lands in a higher price bracket than the order's real weight |
| Ghost picks | Billed for more picked units than the order actually contained |
| Duplicate charges | The same order billed twice for the same fee |
| Off-season peak surcharge | A peak surcharge applied outside the contract's peak date window |
| Rate / surcharge violation | A carrier rate higher than the contract allows for the billed bracket |

## Key decisions & trade-offs

- **Deterministic, not AI-driven.** No model is involved in any verdict. AI is reserved for a
  later milestone — mapping messy invoice columns from new 3PLs to standard fields — and never
  invents a dollar figure. The trade-off: more upfront mapping work, but every finding is defensible.
- **Pure core engine.** `lib/engine.ts` exposes a single `runAudit(shopifyCsv, billingCsv, profile)`
  function with no I/O or framework dependencies, so the business logic is testable in isolation
  and reusable outside the web UI.

## Evidence & validation

> Add real validation here before launch: a screenshot of a sample audit run, the test suite
> output for `runAudit`, and (if available) a real or anonymized example finding set. The repo
> link below is the current proof.

Source: <https://github.com/farhaanqazi/logiAudit>
