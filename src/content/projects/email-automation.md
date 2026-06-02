---
title: "Job-Outreach Email Automation"
summary: "A deployed tool that scales personalized job-application outreach — CSV contact lists, templated emails, automatic day-4 and day-10 follow-ups, dedup, and reply tracking."
role: "Full-stack Engineer (sole author)"
status: "prototype"
featured: true
order: 7
thumbnail: "/assets/images/project-placeholder.svg"
demoUrl: "https://email-automation-6rvi.onrender.com/"
stack:
  - Python
  - SMTP
  - CSV
problem: "Running a personalized job search by hand does not scale — you lose track of who you have contacted, send duplicates, and forget timely follow-ups."
outcome: "Built a deployed tool that sends tailored emails from an uploaded contact list, spaces sends under a daily cap, de-duplicates already-contacted recipients, and auto-schedules follow-ups at day 4 and day 10 while tracking replies to avoid redundant nudges."
evidence:
  - "https://email-automation-6rvi.onrender.com/"
lessons:
  - "Dedup + reply tracking is what separates a useful outreach tool from a spam cannon."
  - "Encrypted credentials and isolated per-user workspaces are table stakes once real email accounts are involved."
---

## What it does

- **Configuration** — SMTP setup (Gmail, Outlook, others), sender details, adjustable send delays and a daily email cap.
- **Contacts** — CSV upload with email, role, company, sector, verification status, and per-contact template assignment; only verified contacts with valid emails are sent to.
- **Templating** — dynamic placeholders (`{contact}`, `{company}`, `{background}`), sector-based background injection, separate templates for agencies vs. direct employers, and a CV attachment on every email.
- **Automation & tracking** — spaced personalized sends, a full outreach log, dedup of already-contacted recipients, automatic follow-ups at day 4 and day 10, and reply tracking to stop redundant follow-ups.
- **Security** — private isolated workspaces, encrypted credential storage, no cross-user visibility.

## Key decisions & trade-offs

- **Verified-only sending + dedup** — protects deliverability and the sender's reputation, at the cost of stricter contact hygiene.
- **Scheduled follow-ups with reply detection** — keeps momentum without nagging people who already replied.

## Evidence & validation

- **Live demo:** <https://email-automation-6rvi.onrender.com/>

> Add a screenshot of the config + contacts flow, and (if you can share it) an anonymized outreach log
> showing dedup and follow-up scheduling in action.
