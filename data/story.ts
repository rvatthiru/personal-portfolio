/**
 * All of the story lives here. Edit this file to change copy, numbers and links;
 * the components only render what they find.
 */

export const profile = {
  name: "Thirunarayanan Raman",
  initials: "TR",
  role: "Senior Associate Data Analyst",
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

export const chapters = [
  { id: "origin", no: "01", label: "Origin" },
  { id: "journey", no: "02", label: "Journey" },
  { id: "vibrant", no: "03", label: "Vibrant America" },
  { id: "impact", no: "04", label: "Impact" },
  { id: "toolkit", no: "05", label: "Toolkit" },
  { id: "contact", no: "06", label: "Contact" },
] as const;

/* ---------- Title sequence ---------- */

export const trailer = {
  tagline: "A career in data, told in five chapters.",
  intro:
    "I build the forecast cadence, pipeline views and CRM signals that Sales, Marketing and Finance use to decide, not another dashboard that sits unread.",
  stats: [
    { value: 108, prefix: "$", suffix: "M", label: "commercial book on one set of numbers" },
    { value: 75, prefix: "$", suffix: "M", label: "tracked revenue tied to NRR, ARR, ROAS and CPA" },
    { value: 25, prefix: "", suffix: "+", label: "people self-serving analytics in Slack" },
    { value: 2.5, prefix: "$", suffix: "M", decimals: 1, label: "of obscured revenue made visible again" },
  ],
};

export const filmStrip = [
  { year: "2020", name: "Cognizant" },
  { year: "2022", name: "Newell Brands" },
  { year: "2023", name: "UT Dallas" },
  { year: "2024", name: "UST" },
  { year: "2025", name: "FHLB Dallas" },
  { year: "2025", name: "Vibrant America" },
];

/* ---------- Chapter 1: Origin ---------- */

export const origin = {
  quote: "The work only counts if someone uses it.",
  paragraphs: [
    "Master's in Business Analytics and AI from UT Dallas, and about five years across analytics and revenue operations. Today I'm a Senior Associate Data Analyst at Vibrant America, where I own commercial reporting for a B2B book: forecasting, pipeline health and attribution.",
    "So I put priorities into HubSpot, write the weekly narrative for sales leadership, and ship self-serve analytics so partners are not waiting on a ticket.",
  ],
  facts: [
    { k: "Since", v: "2020", note: "analytics and revenue operations" },
    { k: "Education", v: "M.S. UTD", note: "Business Analytics and AI (STEM), GPA 3.97" },
    { k: "Certified", v: "Microsoft", note: "Data Analyst Associate" },
  ],
};

/* ---------- Chapter 2: Journey ---------- */

export type JourneyBeat = {
  kind: "role" | "intermission";
  act: string;
  period: string;
  role: string;
  company: string;
  location: string;
  headline: string;
  bullets: string[];
  tools: string[];
  metrics: { value: string; label: string }[];
  accent: "iris" | "coral" | "lagoon" | "sun";
};

export const journey: JourneyBeat[] = [
  {
    kind: "role",
    act: "The apprentice",
    period: "Aug 2020 – Apr 2022",
    role: "Data Analyst",
    company: "Cognizant Technology Solutions",
    location: "India",
    headline: "Learned that a dashboard is only the start of an answer.",
    bullets: [
      "Quantified 12% higher churn in underpriced regions to guide pricing and retention decisions.",
      "Automated executive GTM reporting from Hadoop into Power BI, cutting leadership time-to-insight 20%.",
    ],
    tools: ["Power BI", "SQL", "Hadoop"],
    metrics: [
      { value: "12%", label: "churn gap quantified" },
      { value: "20%", label: "faster time-to-insight" },
    ],
    accent: "iris",
  },
  {
    kind: "role",
    act: "The builder",
    period: "Apr 2022 – Jul 2023",
    role: "Associate Analyst",
    company: "Newell Brands",
    location: "India",
    headline: "Turned a 100+ partner book into a ranked, actionable list.",
    bullets: [
      "Ranked 100+ accounts by health and drove $2.5M in annual savings by focusing coverage on the top of the book.",
      "Cut partner onboarding time 50% by automating request and approval workflows in Power Platform.",
    ],
    tools: ["Power BI", "Power Apps", "SQL", "Python", "ETL pipelines"],
    metrics: [
      { value: "$2.5M", label: "annual savings" },
      { value: "50%", label: "faster onboarding" },
    ],
    accent: "coral",
  },
  {
    kind: "intermission",
    act: "Intermission",
    period: "Aug 2023 – May 2025",
    role: "M.S. in Business Analytics and AI (STEM)",
    company: "The University of Texas at Dallas",
    location: "Richardson, TX",
    headline: "Went back to school to learn the machine learning behind the dashboards.",
    bullets: [
      "GPA 3.97. Coursework in advanced statistics, predictive analytics, big data, machine learning, A/B testing, deep learning and LLMs.",
      "Built COSMO.ai, an AI chatbot for the UT Dallas website (Feb – Apr 2025).",
    ],
    tools: ["Machine learning", "A/B testing", "LLMs", "Databricks"],
    metrics: [{ value: "3.97", label: "GPA" }],
    accent: "sun",
  },
  {
    kind: "role",
    act: "The scientist",
    period: "May 2024 – Aug 2024",
    role: "Data Science Intern",
    company: "UST",
    location: "Aliso Viejo, CA",
    headline: "Pointed forecasting and lead scoring at go-to-market planning.",
    bullets: [
      "Built a demand forecast (Prophet, RMSE 2.68) that finance and GTM used for planning baselines.",
      "Built signal-based scoring and routing for SDR/AE conversion: conversion up 6%, CAC down $300 per user.",
    ],
    tools: ["Prophet", "Python", "SQL", "Forecasting", "Lead scoring"],
    metrics: [
      { value: "+6%", label: "conversion" },
      { value: "$300", label: "lower CAC per user" },
    ],
    accent: "lagoon",
  },
  {
    kind: "role",
    act: "The operator",
    period: "Jan 2025 – May 2025",
    role: "Business Intelligence Intern",
    company: "Federal Home Loan Bank of Dallas",
    location: "Irving, TX",
    headline: "Brought analytics into sales coverage and loan operations.",
    bullets: [
      "Built an Excel, SQL and Power BI utilization model that scored quiet accounts and surfaced $15M+ in pipeline for sales outreach.",
      "Automated intake-to-payment workflows with SQL and Power Platform: processing delays down 40%, on-time disbursements up 60%.",
    ],
    tools: ["Excel", "SQL", "Power BI", "Power Platform"],
    metrics: [
      { value: "$15M+", label: "pipeline surfaced" },
      { value: "40%", label: "fewer processing delays" },
    ],
    accent: "iris",
  },
];

/* ---------- Chapter 3: Vibrant America ---------- */

export const vibrant = {
  period: "Aug 2025 – Present",
  role: "Senior Associate Data Analyst",
  location: "San Jose, CA",
  summary:
    "I own commercial analytics for a B2B diagnostics business: forecasting, pipeline visibility, attribution and the CRM signals that sales leadership and the field actually use.",
  logline:
    "Commercial reporting broke whenever a schema changed, and every team argued from a different spreadsheet. This is the story of fixing that.",
  chips: [
    { value: "$108M", label: "2025 book" },
    { value: "$75M", label: "2026 book" },
    { value: "25+", label: "people self-serving" },
  ],
  closing:
    "Sales, marketing and finance now argue from the same numbers, and the numbers show up where the work happens.",
};

export type VibrantSceneId =
  | "foundation"
  | "attribution"
  | "crm"
  | "slack"
  | "forecast"
  | "contracts";

export type VibrantScene = {
  id: VibrantSceneId;
  act: string;
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
    act: "Scene 1",
    title: "One source of truth",
    situation:
      "Commercial reporting had no shared definitions and broke whenever an upstream schema changed.",
    action:
      "Owned the path end to end: Airbyte ingestion, dbt transforms, a Cube.js semantic layer and Power BI on top, with data contracts agreed with IT.",
    result: "One stack now serves forecasts, attribution and CRM signals for a $108M (2025) book.",
    metric: { value: "$108M", label: "2025 book on one stack" },
    tools: ["Airbyte", "dbt", "ClickHouse", "BigQuery", "Cube.js", "Power BI"],
    accent: "iris",
  },
  {
    id: "attribution",
    act: "Scene 2",
    title: "Where did the revenue come from?",
    situation:
      "Channel investment calls were made without a shared view of what revenue each motion touched.",
    action:
      "Built attribution views on the warehouse that link behavioral touchpoints to revenue, and published them for GTM reviews.",
    result:
      "About $75M of tracked 2025 revenue is read four ways: NRR for the existing book, ARR for the run-rate, ROAS for channel return, and CPA for the cost of a new account.",
    caveat: "Tracked revenue, not incremental revenue created.",
    metric: { value: "$75M", label: "tracked 2025 revenue" },
    tools: ["SQL", "dbt", "Power BI"],
    accent: "coral",
  },
  {
    id: "crm",
    act: "Scene 3",
    title: "From warehouse to workflow",
    situation: "Warehouse truth never reached the reps who had to act on it.",
    action:
      "Defined an account score (Protect, Grow, Re-engage), modeled it in the warehouse and reverse-ETL'd it into HubSpot with Hightouch.",
    result:
      "SDRs and account owners execute from HubSpot fields instead of slide decks, and coverage follows the score.",
    metric: { value: "3", label: "priority tiers in HubSpot" },
    tools: ["HubSpot", "Hightouch", "dbt", "SQL"],
    accent: "lagoon",
  },
  {
    id: "slack",
    act: "Scene 4",
    title: "Ask, don't ticket",
    situation: "Leaders waited on analysts for questions the warehouse could already answer.",
    action:
      "Shipped a Slack analytics agent grounded in the Cube.js semantic layer, then ran enablement for nontechnical partners.",
    result: "25+ people adopted it, and every answer stays on the shared metric definitions.",
    metric: { value: "25+", label: "people self-serving" },
    tools: ["Cube.js", "Slack", "dbt"],
    accent: "iris",
  },
  {
    id: "forecast",
    act: "Scene 5",
    title: "One outlook, every week",
    situation: "Forecast asks arrived as one-off spreadsheets with different baselines.",
    action:
      "Own the weekly pipeline and revenue outlook in SQL, Excel and Power BI, with P75 baselines and a short written narrative on risks and opportunities.",
    result: "Leadership and about 20 sellers plan from one shared picture instead of competing versions.",
    metric: { value: "~20", label: "sellers on one outlook" },
    tools: ["SQL", "Excel", "Power BI"],
    accent: "sun",
  },
  {
    id: "contracts",
    act: "Scene 6",
    title: "The $2.5M plot twist",
    situation:
      "Reported revenue didn't match what operators expected, and nobody could trace why.",
    action:
      "Traced the legacy model logic, remodeled it in dbt and co-authored data contracts with IT so the next break is caught early.",
    result:
      "Restored visibility on $2.5M of revenue that had been obscured. Downstream CRM and AI tools now read the corrected metric.",
    caveat: "Restored visibility, not new revenue.",
    metric: { value: "$2.5M", label: "revenue made visible" },
    tools: ["dbt", "SQL", "Data contracts"],
    accent: "coral",
  },
];

/* ---------- Chapter 4: Impact ---------- */

export const impact = {
  title: "The highlight reel",
  lede: "A few numbers from across the story, each one tied to a decision someone made because of it.",
  counters: [
    { value: 108, prefix: "$", suffix: "M", label: "commercial book reported on one stack", where: "Vibrant America", accent: "iris" },
    { value: 75, prefix: "$", suffix: "M", label: "tracked revenue tied to acquisition metrics", where: "Vibrant America", accent: "coral" },
    { value: 25, prefix: "", suffix: "+", label: "people using the Slack analytics agent", where: "Vibrant America", accent: "lagoon" },
    { value: 2.5, prefix: "$", suffix: "M", decimals: 1, label: "obscured revenue made visible again", where: "Vibrant America", accent: "sun" },
    { value: 15, prefix: "$", suffix: "M+", label: "pipeline surfaced for sales outreach", where: "FHLB Dallas", accent: "iris" },
    { value: 2.5, prefix: "$", suffix: "M", decimals: 1, label: "annual savings from focused coverage", where: "Newell Brands", accent: "coral" },
  ] as const,
};

/* ---------- Chapter 5: Toolkit ---------- */

export const toolkit = {
  groups: [
    {
      name: "Revenue analytics",
      accent: "iris",
      items: ["Forecasting", "Pipeline health", "Attribution", "Excel"],
    },
    {
      name: "Data stack",
      accent: "coral",
      items: ["SQL", "Python", "R", "dbt", "Airbyte", "BigQuery", "ClickHouse"],
    },
    {
      name: "CRM and BI",
      accent: "lagoon",
      items: ["HubSpot", "Hightouch", "Power BI", "Cube.js", "Power Platform"],
    },
    {
      name: "AI and ML",
      accent: "sun",
      items: ["Slack analytics agent", "XGBoost", "Prophet", "LLMs", "Cursor", "Claude"],
    },
  ] as const,
  marquee: [
    "SQL", "Python", "dbt", "Airbyte", "ClickHouse", "BigQuery", "Cube.js", "Power BI",
    "HubSpot", "Hightouch", "Power Platform", "Excel", "Prophet", "XGBoost", "LlamaIndex",
    "FastAPI", "Databricks", "Azure", "Hadoop",
  ],
  sideQuests: [
    {
      title: "COSMO.ai",
      subtitle: "Conversational AI chatbot for the UT Dallas website",
      metric: { value: "87%", label: "answer accuracy" },
      body: "A context-aware assistant that answers student questions on compliance, programs and policies, so people get consistent answers on demand.",
      tools: ["Mistral AI", "LlamaIndex", "FastAPI", "MongoDB", "Qdrant"],
    },
    {
      title: "SMART Inventory",
      subtitle: "Demand forecasting and inventory optimization",
      metric: { value: "7.5%", label: "less excess inventory" },
      body: "SARIMAX and polynomial regression forecasting (20% better accuracy) combined with EOQ optimization to cut carrying costs and free up working capital.",
      tools: ["SARIMAX", "Python", "EOQ", "Forecasting"],
    },
    {
      title: "Cirrhosis outcomes",
      subtitle: "Multi-class prediction on patient data",
      metric: { value: "83%", label: "model accuracy" },
      body: "An XGBoost model deployed on Databricks with MLflow tracking, so performance is monitored through scalable, automated pipelines.",
      tools: ["XGBoost", "Databricks", "MLflow", "Python"],
    },
  ],
};

/* ---------- Credits ---------- */

export const credits = {
  title: "Roll credits, or start the sequel.",
  lede: "I'm always open to interesting projects, roles and conversations about turning messy data into decisions.",
};
