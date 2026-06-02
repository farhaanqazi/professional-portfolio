---
title: "Churn Intelligence Engine"
summary: "Validates a customer dataset, scores churn risk with a rule-based engine, and generates a stakeholder-ready PDF report — with CI on every change for repeatable, reliable outputs."
role: "Data Analyst"
status: "prototype"
featured: true
order: 4
thumbnail: "/assets/images/project-placeholder.svg"
stack:
  - Python
  - Streamlit
  - CI/CD
problem: "Churn analysis is often a one-off notebook — hard to rerun, easy to break, and not packaged for the stakeholders who need the takeaway."
outcome: "Built an engine that validates the input dataset, scores churn risk with a transparent rule-based model, and produces a stakeholder-ready PDF report, with CI running on every change to keep outputs reliable."
evidence:
  - "https://github.com/farhaanqazi/Churn-Prediction-Intelligence"
lessons:
  - "A rule-based score is auditable in a way a black-box model is not — and stakeholders trust what they can follow."
  - "CI on a reporting tool means the report regenerates correctly every time, not just on the author's machine."
---

## What it does

- **Validates** the incoming customer dataset before any scoring runs.
- **Scores churn risk** with a transparent, rule-based engine.
- **Generates a stakeholder-ready PDF report** — the takeaway, packaged for the people who act on it.
- **CI on every change** keeps outputs repeatable and reliable.

## Key decisions & trade-offs

- **Rule-based over black-box** — auditable and explainable to stakeholders, at the cost of raw predictive ceiling.
- **Report as the product** — the PDF output, not a notebook, is what ships.

## Evidence & validation

- **Source:** <https://github.com/farhaanqazi/Churn-Prediction-Intelligence>

> Attach a sample generated PDF (anonymised) — the output report is the most persuasive proof here.
