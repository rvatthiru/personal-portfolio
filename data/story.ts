/**
 * All of the content lives here. Edit this file to change copy, numbers and links;
 * the components only render what they find.
 *
 * Numbers come from the job-hunt-portfolio works inventory (canonical, verified figures).
 * Never add a number here that is not in that inventory.
 */

export const profile = {
  name: "Thirunarayanan Raman",
  initials: "TR",
  role: "Senior Analyst, Sales Strategy & Operations",
  company: "Vibrant America",
  location: "San Jose, CA",
  email: "rvatthiru@gmail.com",
  linkedin: "https://www.linkedin.com/in/thirunarayanan-raman",
  resume:
    "https://drive.google.com/file/d/16_6ZrvXWoXIyaqSFytwp9hftk_3WHi7U/view?usp=sharing",
  photo: "https://lh3.googleusercontent.com/d/18ECZkFHFAYhSf_fsIHOaJPfECAxrlJII",
  photoFallback:
    "https://drive.google.com/uc?export=view&id=18ECZkFHFAYhSf_fsIHOaJPfECAxrlJII",
};

/** Navigation, in page order. */
export const chapters = [
  { id: "vibrant", label: "Vibrant America" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

/* ---------- Hero ---------- */

export const hero = {
  pitch:
    "I partner with sales leadership on planning, the weekly forecast and where to spend. The warehouse, the CRM and Slack all read the same numbers.",
  stats: [
    { value: 108, prefix: "$", suffix: "M", decimals: 0, label: "2025 revenue on one stack" },
    { value: 75, prefix: "$", suffix: "M", decimals: 0, label: "2025 revenue traced to touchpoints" },
    { value: 4.4, prefix: "", suffix: "x", decimals: 1, label: "Elite vs Low customer LTV by order 10" },
    { value: 25, prefix: "", suffix: "+", decimals: 0, label: "people self-serving in Slack" },
  ],
  chips: [
    "About 5 years in analytics",
    "M.S. Business Analytics and AI, UT Dallas (GPA 3.97)",
    "Microsoft Data Analyst Associate",
  ],
};

/* ---------- Vibrant America ---------- */

export const vibrant = {
  period: "Aug 2025 – Present",
  role: "Senior Analyst, Sales Strategy & Operations",
  location: "San Jose, CA",
  context: "B2B diagnostics lab · 12K customers · 10.9K clinics",
  summary:
    "I partner with sales leadership on planning, the weekly forecast and where to spend. The warehouse, the CRM and Slack all read the same numbers.",
  bullets: [
    "Partnered with the COO and 3 sales directors on planning for a $108M (2025) and $75M (2026) business, splitting growth into volume, average order value and new logos.",
    "Owned the weekly forecast: pipeline and revenue in SQL, Excel and Power BI, with P75 baselines and one narrative for leadership and 20 reps.",
    "Linked about $75M of tracked 2025 revenue to NRR, ARR, ROAS and CPA so leaders could reallocate spend by tradeoff.",
    "Put Protect, Grow and Re-engage priorities into HubSpot with Hightouch, so reps worked from warehouse definitions.",
    "Scaled self-serve analytics with a Cube-grounded Slack agent (about 50% fewer tokens per query, 25+ people), and co-authored data contracts after legacy models had obscured $2.5M.",
  ],
};

export type VibrantSceneId =
  | "foundation"
  | "attribution"
  | "diagnosis"
  | "crm"
  | "cadence"
  | "slack"
  | "alerts";

export type VibrantScene = {
  id: VibrantSceneId;
  /** Short label used on the tab. */
  tab: string;
  title: string;
  situation: string;
  action: string;
  result: string;
  caveat?: string;
  metric: { value: string; label: string };
  tools: string[];
  accent: "iris" | "coral" | "lagoon" | "sun";
};

export const vibrantScenes: VibrantScene[] = [
  {
    id: "foundation",
    tab: "Foundation",
    title: "One source of truth",
    situation:
      "Commercial reporting had no shared definitions and broke whenever a source schema changed.",
    action:
      "Built Airbyte, dbt, Cube.js and Power BI on ClickHouse and BigQuery, with data contracts agreed with IT. Fixing legacy model logic also made $2.5M of obscured revenue visible.",
    result: "$183M of 2025 to 2026 revenue now reads from one governed stack.",
    caveat: "The $2.5M is restored visibility, not new revenue.",
    metric: { value: "$183M", label: "revenue on one stack" },
    tools: ["Airbyte", "dbt", "Cube.js", "Power BI"],
    accent: "iris",
  },
  {
    id: "attribution",
    tab: "Attribution",
    title: "Where did the revenue come from?",
    situation: "Channel spend was judged on clicks, not on the revenue each touchpoint led to.",
    action:
      "Joined 1.22M touchpoints across about 40K contacts to orders with a multi-touch model on the warehouse.",
    result:
      "About $75M of 2025 revenue now traces to observed touchpoints, and each channel is read through NRR, ARR, ROAS and CPA.",
    caveat: "Tracked revenue, not incremental revenue created.",
    metric: { value: "$75M", label: "tracked 2025 revenue" },
    tools: ["SQL", "dbt", "Power BI"],
    accent: "coral",
  },
  {
    id: "diagnosis",
    tab: "Diagnosis",
    title: "Growth quietly changed shape",
    situation: "H1 looked healthy on revenue, but nobody could say what was driving it.",
    action:
      "Split four markets (US, Europe, UK, Canada) into orders, AOV and new signups, then tested whether early spend predicts lifetime value.",
    result:
      "Q2 growth was AOV-led from the existing base while orders and signups fell. Elite early spenders reach 4.4x the lifetime value of Low spenders by order 10.",
    caveat: "Findings from analysis, not outcomes I created.",
    metric: { value: "+12.4%", label: "Q2 revenue, orders down 4.6%" },
    tools: ["SQL", "Power BI", "Python"],
    accent: "sun",
  },
  {
    id: "crm",
    tab: "CRM",
    title: "From warehouse to workflow",
    situation: "Warehouse truth never reached the reps who had to act on it.",
    action:
      "Built an 11-signal customer health framework in Power BI, then synced Protect, Grow and Re-engage priorities into HubSpot with Hightouch.",
    result: "SDRs and account owners work from CRM fields, not slide decks.",
    metric: { value: "11", label: "named health signals" },
    tools: ["HubSpot", "Hightouch", "dbt"],
    accent: "lagoon",
  },
  {
    id: "cadence",
    tab: "Cadence",
    title: "Every Monday, same numbers",
    situation:
      "Leaders got one-off spreadsheets with different baselines, and year-over-year views broke after the February 2026 pricing change.",
    action:
      "Built daily, weekly and monthly reports on P75 same-weekday baselines, plus a clinic priority matrix that stays valid after the restructure.",
    result: "The COO, 3 sales directors and 20 reps plan from one picture.",
    metric: { value: "24", label: "people on one cadence" },
    tools: ["SQL", "Python", "Airflow"],
    accent: "iris",
  },
  {
    id: "slack",
    tab: "Slack AI",
    title: "Ask, don't ticket",
    situation: "Leaders waited on analysts for questions the warehouse could already answer.",
    action:
      "Grounded Viktor AI in Slack with a Cube.js semantic layer, so it stops re-discovering tables and joins on every query.",
    result: "About 50% fewer tokens per query, and 25+ people self-serving.",
    metric: { value: "25+", label: "people self-serving" },
    tools: ["Cube.js", "Slack", "dbt"],
    accent: "coral",
  },
  {
    id: "alerts",
    tab: "Lab alerts",
    title: "Catch it before it slips",
    situation: "Stuck samples and skipped runs in two clinical labs had no automatic alert.",
    action:
      "Built Airflow-scheduled alerts routed to lab managers by email, with each issue tracked as a Zendesk ticket.",
    result: "Receive-to-approve P75 fell from 221h to 177h after rollout.",
    caveat: "Before and after windows (Aug to Oct 2025 vs Nov 2025 to Jan 2026), not a controlled test.",
    metric: { value: "-44h", label: "receive-to-approve P75" },
    tools: ["Airflow", "Python", "Zendesk"],
    accent: "lagoon",
  },
];

/* ---------- Real numbers behind each scene visual ---------- */

export const sceneData = {
  foundation: {
    steps: [
      { name: "Airbyte", note: "ingest", color: "#a5b4fc" },
      { name: "ClickHouse · BigQuery", note: "warehouse", color: "#5eead4" },
      { name: "dbt", note: "model + contracts", color: "#fdba74" },
      { name: "Cube.js", note: "semantic layer", color: "#f0abfc" },
      { name: "Power BI · HubSpot · Slack", note: "deliver", color: "#fde68a" },
    ],
    tiles: [
      { value: 215848, label: "orders in 2025", decimals: 0, prefix: "", suffix: "" },
      { value: 12042, label: "customers", decimals: 0, prefix: "", suffix: "" },
      { value: 10877, label: "clinics", decimals: 0, prefix: "", suffix: "" },
    ],
  },
  attribution: {
    tracked: 75,
    touchpoints: { value: 1.22, suffix: "M", label: "touchpoints" },
    contacts: { value: 40, suffix: "K", label: "contacts" },
    mix: [
      { label: "Sales activity", k: 523, color: "#a5b4fc" },
      { label: "Transactions", k: 346, color: "#fdba74" },
      { label: "Email marketing", k: 131, color: "#f0abfc" },
      { label: "Website", k: 111, color: "#5eead4" },
      { label: "Lead capture", k: 35, color: "#fde68a" },
      { label: "Lifecycle", k: 31, color: "#93c5fd" },
      { label: "Clinical", k: 14, color: "#fca5a5" },
    ],
    metrics: [
      { k: "NRR", line: "Did existing customers grow, after churn?", color: "#a5b4fc" },
      { k: "ARR", line: "The yearly run-rate teams plan against.", color: "#5eead4" },
      { k: "ROAS", line: "Revenue touched per dollar of spend.", color: "#fdba74" },
      { k: "CPA", line: "What it cost to win a new account.", color: "#f0abfc" },
    ],
  },
  diagnosis: {
    rows: [
      { label: "Revenue", q1: 22.0, q2: 12.4 },
      { label: "Orders", q1: 6.2, q2: -4.6 },
      { label: "AOV", q1: 14.9, q2: 17.8 },
    ],
    tiles: [
      { value: -36, suffix: "%", label: "new signups, Q2 YoY", prefix: "", decimals: 0 },
      { value: 4.4, suffix: "x", label: "Elite vs Low LTV by order 10", prefix: "", decimals: 1 },
    ],
    note: "Four markets, Q1 vs Q2 growth year over year",
  },
  crm: {
    signals: [
      "Failed to Launch",
      "Bundle Defector",
      "Ghosted VIP",
      "High Ticket Volume",
      "Slipping Away",
      "Churned",
      "AOV Bleed",
      "VA Dependency",
      "Margin Bleed",
      "Nurture",
      "Healthy",
    ],
    tiers: [
      { name: "Protect", color: "#5eead4" },
      { name: "Grow", color: "#a5b4fc" },
      { name: "Re-engage", color: "#fdba74" },
    ],
  },
  cadence: {
    rhythm: [
      { name: "Daily", note: "P75 same-weekday baseline" },
      { name: "Weekly", note: "Week over week, same baseline" },
      { name: "Monthly", note: "Year over year, pre-restructure aware" },
    ],
    audience: [
      { role: "COO", count: 1, color: "#fdba74" },
      { role: "Sales directors", count: 3, color: "#a5b4fc" },
      { role: "Reps", count: 20, color: "#5eead4" },
    ],
  },
  slack: {
    tokens: { before: 100, after: 50 },
    users: 25,
  },
  alerts: {
    window: "Aug to Oct 2025 vs Nov 2025 to Jan 2026",
    rows: [
      { label: "Receive to approve", stat: "P75", before: 221, after: 177, delta: "-44h", pct: "-19.9%" },
      { label: "Aliquot to run finish", stat: "P99", before: 169, after: 122, delta: "-47h", pct: "-27.8%" },
      { label: "Run to raw result", stat: "P75", before: 41, after: 14.5, delta: "-26.5h", pct: "-64.6%" },
    ],
  },
} as const;

/* ---------- Experience (most recent first) ---------- */

export type Role = {
  kind: "role" | "education";
  period: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  tools: string[];
  metric: { value: string; label: string };
  accent: "iris" | "coral" | "lagoon" | "sun";
};

export const experience: Role[] = [
  {
    kind: "role",
    period: "Jan 2025 – May 2025",
    role: "Business Intelligence Intern",
    company: "Federal Home Loan Bank of Dallas",
    location: "Irving, TX",
    bullets: [
      "Built an Excel, SQL and Power BI utilization model that scored quiet accounts and surfaced $15M+ in pipeline for sales outreach.",
      "Automated intake-to-payment workflows. Processing delays fell 40%, and on-time disbursements rose 60%.",
    ],
    tools: ["Excel", "SQL", "Power BI", "Power Platform"],
    metric: { value: "$15M+", label: "pipeline surfaced" },
    accent: "iris",
  },
  {
    kind: "education",
    period: "Aug 2023 – May 2025",
    role: "M.S. in Business Analytics and AI",
    company: "The University of Texas at Dallas",
    location: "Richardson, TX",
    bullets: [
      "GPA 3.97. Coursework in predictive analytics, big data, machine learning, A/B testing and LLMs.",
      "Built COSMO.ai, a chatbot for the UT Dallas website.",
    ],
    tools: ["Machine learning", "A/B testing", "LLMs"],
    metric: { value: "3.97", label: "GPA" },
    accent: "sun",
  },
  {
    kind: "role",
    period: "May 2024 – Aug 2024",
    role: "Data Science Intern",
    company: "UST",
    location: "Aliso Viejo, CA",
    bullets: [
      "Built a demand forecast (Prophet, RMSE 2.68) that finance and go-to-market leads used for planning and targets.",
      "Built signal-based scoring and routing for SDR and AE conversion: conversion up 6%, CAC down $300 per user.",
    ],
    tools: ["Prophet", "Python", "SQL"],
    metric: { value: "+6%", label: "SDR and AE conversion" },
    accent: "lagoon",
  },
  {
    kind: "role",
    period: "Apr 2022 – Jul 2023",
    role: "Data Analyst – Vendor Journey",
    company: "Newell Brands",
    location: "India",
    bullets: [
      "Built partner scorecards in Power BI across 100+ accounts so managers had one ranked book of business. On-time compliance rose 20%.",
      "Drove $2.5M in annual savings by focusing coverage on top partners instead of the long tail.",
      "Cut partner onboarding time 50% by automating request and approval workflows in Power Platform.",
    ],
    tools: ["Power BI", "Power Apps", "SQL", "Python"],
    metric: { value: "$2.5M", label: "annual savings" },
    accent: "coral",
  },
  {
    kind: "role",
    period: "Aug 2020 – Apr 2022",
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    location: "India",
    bullets: [
      "Showed 12% higher churn in underpriced regions and quantified the revenue risk for pricing and retention.",
      "Cut high-priority SLA breaches 40% through ServiceNow root-cause analysis and a process redesign.",
      "Automated executive reporting from Hadoop into Power BI, cutting leadership time-to-insight 20%.",
    ],
    tools: ["Power BI", "SQL", "Hadoop", "ServiceNow"],
    metric: { value: "20%", label: "faster time-to-insight" },
    accent: "iris",
  },
];

/* ---------- Projects ---------- */

export type MoreWork = {
  title: string;
  status: "Live" | "Measured" | "Modeled" | "Designed";
  stat: string;
  line: string;
  accent: "iris" | "coral" | "lagoon" | "sun";
};

export const moreWork: MoreWork[] = [
  {
    title: "Top 7% drive 64%",
    status: "Measured",
    stat: "834",
    line: "Champion customers (about 7%) generate $116.8M, roughly 64% of combined revenue.",
    accent: "iris",
  },
  {
    title: "Territory gap analysis",
    status: "Measured",
    stat: "$100K/mo",
    line: "Decomposed a top rep's revenue gap into product mix, account attrition and timing.",
    accent: "coral",
  },
  {
    title: "Lab Tour event ROI",
    status: "Measured",
    stat: "+$4,072",
    line: "Typical matched clinic vs a lookalike over 120 days. Judged on incremental, not total, revenue.",
    accent: "lagoon",
  },
  {
    title: "Premium cross-sell",
    status: "Modeled",
    stat: "$2.8M/mo",
    line: "80% of practices order one $500+ panel. The attach opportunity is a scenario, not booked revenue.",
    accent: "sun",
  },
  {
    title: "HubSpot lifecycle workflows",
    status: "Live",
    stat: "Order 1-3",
    line: "First, second, third order and report-ready workflows, fed by dbt through Hightouch.",
    accent: "iris",
  },
  {
    title: "Provider email strategy",
    status: "Designed",
    stat: "11.3%",
    line: "Unsubscribe rate in the best segment drove a two-per-week cap and six lifecycle series.",
    accent: "coral",
  },
];

export const sideProjects = [
  {
    title: "COSMO.ai",
    subtitle: "Chatbot for the UT Dallas website",
    metric: { value: "87%", label: "answer accuracy" },
    tools: ["Mistral AI", "LlamaIndex", "FastAPI"],
  },
  {
    title: "SMART Inventory",
    subtitle: "Demand forecasting and inventory optimization",
    metric: { value: "7.5%", label: "less excess inventory" },
    tools: ["SARIMAX", "Python", "EOQ"],
  },
  {
    title: "Cirrhosis outcomes",
    subtitle: "Multi-class prediction on patient data",
    metric: { value: "83%", label: "model accuracy" },
    tools: ["XGBoost", "Databricks", "MLflow"],
  },
];

/* ---------- Skills ---------- */

export const skills = [
  {
    name: "Revenue analytics",
    accent: "iris",
    items: ["Attribution", "Forecasting", "Pipeline health", "Excel"],
  },
  {
    name: "Data stack",
    accent: "coral",
    items: ["SQL", "Python", "dbt", "Airbyte", "BigQuery", "ClickHouse"],
  },
  {
    name: "CRM and BI",
    accent: "lagoon",
    items: ["HubSpot", "Hightouch", "Power BI", "Cube.js"],
  },
  {
    name: "AI and ML",
    accent: "sun",
    items: ["Viktor AI", "Prophet", "XGBoost", "LLMs", "Cursor"],
  },
] as const;
