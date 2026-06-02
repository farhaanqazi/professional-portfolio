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
      'Prepared periodic performance reports for senior leadership — monitoring data-accuracy KPIs, audit readiness, and operational health across the Adult Diabetes Service.',
      'Extracted and summarised data from multiple clinical sources for ad-hoc reporting.',
      'Built compliance-grade Excel and Power BI dashboards tracking activity, wait times, and resource allocation.',
    ],
  },
  {
    title: 'Client Support & Operations Specialist',
    org: 'Sight Scotland',
    location: 'Edinburgh, UK',
    period: 'Sep 2024 – Feb 2025',
    highlights: [
      'Redesigned document and reporting workflows, eliminating errors in a high-volume environment.',
      'Coordinated cross-functional teams to deliver zero-error outputs under deadline pressure.',
    ],
  },
  {
    title: 'Customer Experience & Operations Lead',
    org: 'Prestonfield House Hotel',
    location: 'Edinburgh, UK',
    period: 'May 2022 – Sep 2024',
    highlights: [
      'Monitored and analysed operational metrics, producing management reports and executive briefings.',
      'Owned end-to-end reporting cycles, including daily reconciliation.',
    ],
  },
  {
    title: 'Account Manager',
    org: 'J&K Bank',
    location: 'Delhi, India',
    period: 'Mar 2017 – Jan 2022',
    highlights: [
      'Prepared daily, weekly, and monthly KPI reports summarising client transaction data, portfolio performance, and churn indicators.',
      'Built Excel-based financial reporting tools delivering insights to branch and regional leadership.',
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
