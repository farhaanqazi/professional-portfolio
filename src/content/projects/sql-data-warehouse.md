---
title: "SQL Data Warehouse — Medallion Architecture"
summary: "A Bronze–Silver–Gold data warehouse for ERP/CRM data with a full star schema, turning raw source systems into clean, query-ready tables for analytical reporting."
role: "Data Analyst / Data Engineer"
status: "prototype"
featured: true
order: 3
thumbnail: "/assets/images/project-placeholder.svg"
stack:
  - SQL Server
  - T-SQL
  - ETL
  - Star Schema
problem: "Analytical reporting on raw ERP/CRM exports is slow and error-prone — every analyst re-cleans the same messy source tables before they can answer a single business question."
outcome: "Built a layered Bronze–Silver–Gold warehouse in SQL Server with ETL between layers and a star schema at the Gold layer, enabling in-depth analysis of customer behaviour, product performance, and sales trends for stakeholders."
evidence:
  - "https://github.com/farhaanqazi/SQL-Data-Warehouse-Project"
lessons:
  - "A medallion layout separates raw landing, cleansing, and analytics so each concern stays testable."
  - "Documenting the data catalog, naming conventions, and flow diagrams is what makes a warehouse usable by anyone but its author."
---

## What it does

A modern SQL Server data warehouse that ingests ERP and CRM data and models it for analytics:

- **Bronze** — raw data ingested from source-system CSV files.
- **Silver** — cleansing, standardisation, and normalisation.
- **Gold** — a full **star schema** (conformed dimensions + fact tables), optimised for reporting and analytics.

## Analytical objective

The warehouse exists to answer business-critical questions for stakeholders:

- **Customer behaviour** — who buys, how often, and how that shifts.
- **Product performance** — what sells and what stalls.
- **Sales trends** — movement over time for planning.

## Engineering rigor

Beyond the SQL, the repo ships the documentation that makes a warehouse maintainable: a **data
catalog** with metadata, **naming conventions**, and **architecture / data-flow / star-schema
diagrams** (`docs/`), plus a `tests/` directory for quality assurance.

## Key decisions & trade-offs

- **Medallion architecture** — clear separation of raw, cleansed, and analytics-ready layers, at the cost of more ETL between stages.
- **Star schema at Gold** — predictable, BI-friendly joins for downstream Power BI / SQL reporting.

## Evidence & validation

- **Source (public, MIT):** <https://github.com/farhaanqazi/SQL-Data-Warehouse-Project>

> Embed the star-schema diagram from `docs/` and a sample analytical query with its result to make the modelling concrete at a glance.
