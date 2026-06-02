// Professional history + education, sourced from your GitHub profile README.
// Edit freely. `period` is display text; roles render newest-first in the order below.

export interface Role {
  title: string;
  org: string;
  location: string;
  period: string;
  highlights: string[];
}

export const roles: Role[] = [
  {
    title: 'Client Success & Data Coordinator',
    org: 'Leeds Teaching Hospitals NHS Trust',
    location: 'Leeds, UK',
    period: 'Jun 2025 – Dec 2025',
    highlights: [
      'Owned periodic performance reporting for the Adult Diabetes Service — monitoring data-accuracy KPIs, wait times, and resource allocation for senior NHS leadership.',
      'Built Power BI and Excel dashboards that replaced manual reporting, cutting turnaround time and giving the C-suite executive-ready visuals each cycle.',
      'Extracted and synthesised data across multiple clinical systems; delivered ad-hoc analysis that flagged early-intervention signals missed in existing reports.',
      'Led UAT-style validation and stakeholder training for two new datasets, reducing onboarding errors and accelerating adoption.',
    ],
  },
  {
    title: 'Client Support & Operations Specialist',
    org: 'Sight Scotland',
    location: 'Edinburgh, UK',
    period: 'Sep 2024 – Feb 2025',
    highlights: [
      'Redesigned document and reporting workflows across a high-volume production environment — eliminating recurring errors and achieving consistent zero-defect output under deadline pressure.',
      'Coordinated cross-functional resolution of data and process issues; enforced version-control standards that prevented downstream reporting failures.',
    ],
  },
  {
    title: 'Customer Experience & Operations Lead',
    org: 'Prestonfield House Hotel',
    location: 'Edinburgh, UK',
    period: 'May 2022 – Sep 2024',
    highlights: [
      'Produced daily reconciliation, performance summaries, and executive briefings — maintaining accuracy across all management reporting outputs.',
      'Identified and implemented process automation that cut manual effort in routine reporting tasks.',
    ],
  },
  {
    title: 'Account Manager',
    org: 'J&K Bank',
    location: 'Delhi, India',
    period: 'Mar 2017 – Jan 2022',
    highlights: [
      'Prepared daily, weekly, and monthly KPI reports for senior stakeholders — tracking portfolio performance, revenue trends, churn indicators, and account health across the branch.',
      'Built Excel-based financial reporting tools that surfaced risk signals and performance patterns, directly informing account strategy and expansion decisions.',
      'Maintained audit-ready, regulatory-compliant reporting outputs through multi-stakeholder sign-off processes across five years.',
    ],
  },
  {
    title: 'Project & Client Coordinator',
    org: 'Vijay Nirman Company',
    location: 'Delhi, India',
    period: 'Apr 2014 – Jun 2015',
    highlights: [
      'Tracked project performance metrics, producing structured reports on timelines, milestones, and resource utilisation for management review.',
    ],
  },
];

export interface Credential {
  title: string;
  org: string;
  period?: string;
  note?: string;
}

export const education: Credential[] = [
  {
    title: 'MSc Data Science',
    org: 'Heriot-Watt University, Edinburgh, UK',
    period: '2022 – 2023',
    note: "Capstone: ML-based Parkinson's Diagnosis",
  },
  {
    title: 'BEng Civil Engineering',
    org: 'University of Kashmir, India',
    period: '2008 – 2012',
  },
  {
    title: 'Supervised Machine Learning: Regression & Classification',
    org: 'Coursera',
  },
];
