import {
  IndustryCategory,
  DataCoverageRegion,
  ReportFormat,
  RiskLevel,
  DatasetItem,
  MarketMetric,
  DataPipelineStep,
  IntegrationOption,
  IntegrationPlatform,
  SectorDetail,
} from "../types/data";

export const FEATURED_DATASETS: DatasetItem[] = [
  {
    id: "ds-tech-01",
    title: "Global Enterprise Generative AI Infrastructure & Compute Market",
    code: "SGS-AI-2026-X",
    category: IndustryCategory.TECHNOLOGY,
    region: DataCoverageRegion.GLOBAL,
    recordsCount: "2.4M Verified Points",
    updateFrequency: "Daily Stream",
    formats: [ReportFormat.SNOWFLAKE, ReportFormat.JSON, ReportFormat.CSV],
    marketSizeUsd: "$184.5B",
    cagrGrowth: "+34.2% YoY",
    riskRating: RiskLevel.LOW,
    description: "Granular intelligence tracking enterprise GPU utilization, LLM deployment costs, API inference workloads, and cloud AI infrastructure expenditure across 500 top tech hubs.",
    featured: true,
    sampleRowsPreview: [
      { quarter: "2025-Q4", cloudVendor: "AWS / Azure / GCP", enterpriseSpendM: 4120, avgGpuCostHr: 3.45, activeClusters: 18450 },
      { quarter: "2026-Q1", cloudVendor: "AWS / Azure / GCP", enterpriseSpendM: 4890, avgGpuCostHr: 3.12, activeClusters: 22100 },
      { quarter: "2026-Q2", cloudVendor: "AWS / Azure / GCP", enterpriseSpendM: 5640, avgGpuCostHr: 2.95, activeClusters: 26800 },
    ],
  },
  {
    id: "ds-fin-02",
    title: "Cross-Border FinTech Payment Velocity & Digital Liquidity Index",
    code: "SGS-FIN-4819",
    category: IndustryCategory.FINANCE,
    region: DataCoverageRegion.GLOBAL,
    recordsCount: "18.6M Transactions",
    updateFrequency: "Real-time Feed",
    formats: [ReportFormat.SNOWFLAKE, ReportFormat.PARQUET, ReportFormat.JSON],
    marketSizeUsd: "$410.2B",
    cagrGrowth: "+19.8% YoY",
    riskRating: RiskLevel.MODERATE,
    description: "Benchmark remittance throughput, cross-border digital banking transaction volumes, fraud risk metrics, and instant payment adoption rates worldwide.",
    featured: true,
    sampleRowsPreview: [
      { corridor: "US -> UK / EU", monthlyVolumeM: 14200, avgSettlementSec: 4.2, fxMarginPct: 0.18, volatilityIdx: 12.4 },
      { corridor: "APAC -> NA", monthlyVolumeM: 9850, avgSettlementSec: 5.8, fxMarginPct: 0.22, volatilityIdx: 14.1 },
      { corridor: "LATAM -> US", monthlyVolumeM: 6400, avgSettlementSec: 6.1, fxMarginPct: 0.29, volatilityIdx: 16.5 },
    ],
  },
  {
    id: "ds-health-03",
    title: "Biopharma Supply Chain Risk & Specialized Oncology Clinical Pipeline",
    code: "SGS-BIO-7721",
    category: IndustryCategory.HEALTHCARE,
    region: DataCoverageRegion.NORTH_AMERICA,
    recordsCount: "850K Datapoints",
    updateFrequency: "Weekly",
    formats: [ReportFormat.CSV, ReportFormat.PDF, ReportFormat.JSON],
    marketSizeUsd: "$95.8B",
    cagrGrowth: "+14.5% YoY",
    riskRating: RiskLevel.LOW,
    description: "Monitors drug patent lifecycles, active Phase II/III clinical trial success probabilities, cold-chain logistics vulnerabilities, and regional medical distribution coverage.",
    featured: true,
    sampleRowsPreview: [
      { therapeuticArea: "Immuno-Oncology", activeTrials: 1420, phase3PassRate: "64.5%", avgRndCostM: 840, patentExpiryWindow: "2027-2032" },
      { therapeuticArea: "Cell & Gene Therapy", activeTrials: 680, phase3PassRate: "58.2%", avgRndCostM: 1120, patentExpiryWindow: "2029-2035" },
    ],
  },
  {
    id: "ds-energy-04",
    title: "Clean Energy Grid Decarbonization & Battery Storage Intelligence",
    code: "SGS-ENG-9040",
    category: IndustryCategory.ENERGY,
    region: DataCoverageRegion.EUROPE,
    recordsCount: "4.1M Telemetry Logs",
    updateFrequency: "Hourly",
    formats: [ReportFormat.SNOWFLAKE, ReportFormat.PARQUET],
    marketSizeUsd: "$310.0B",
    cagrGrowth: "+27.4% YoY",
    riskRating: RiskLevel.ELEVATED,
    description: "Grid-scale battery storage capacity, wind/solar renewable energy generation efficiency, carbon credit price indexing, and rare earth supply bottlenecks.",
    featured: true,
    sampleRowsPreview: [
      { region: "EU Nordics", gridCapacityGW: 48.5, renewableSharePct: 78.4, carbonCreditPriceEur: 82.5, batteryReserveMWh: 14200 },
      { region: "Central EU", gridCapacityGW: 112.0, renewableSharePct: 44.2, carbonCreditPriceEur: 82.5, batteryReserveMWh: 28900 },
    ],
  },
  {
    id: "ds-retail-05",
    title: "Global E-Commerce Omnichannel Purchasing Dynamics & Demand Forecasting",
    code: "SGS-RET-1104",
    category: IndustryCategory.RETAIL,
    region: DataCoverageRegion.ASIA_PACIFIC,
    recordsCount: "32M SKU Events",
    updateFrequency: "Daily",
    formats: [ReportFormat.CSV, ReportFormat.JSON, ReportFormat.SNOWFLAKE],
    marketSizeUsd: "$680.4B",
    cagrGrowth: "+16.3% YoY",
    riskRating: RiskLevel.LOW,
    description: "Comprehensive tracking of basket sizes, return velocity, shipping cost indices, direct-to-consumer brand market share, and social commerce conversion stats.",
    featured: false,
    sampleRowsPreview: [
      { category: "Consumer Electronics", avgOrderValueUsd: 215, returnRatePct: 4.8, promoDiscountPct: 12.5, retentionRate: "68.2%" },
      { category: "Fashion & Apparel", avgOrderValueUsd: 84, returnRatePct: 18.2, promoDiscountPct: 22.0, retentionRate: "52.4%" },
    ],
  },
  {
    id: "ds-mfg-06",
    title: "Automated Precision Manufacturing & Robotics Adoption Benchmark",
    code: "SGS-MFG-3301",
    category: IndustryCategory.MANUFACTURING,
    region: DataCoverageRegion.GLOBAL,
    recordsCount: "1.2M Factory Logs",
    updateFrequency: "Monthly",
    formats: [ReportFormat.PDF, ReportFormat.CSV, ReportFormat.JSON],
    marketSizeUsd: "$142.0B",
    cagrGrowth: "+21.1% YoY",
    riskRating: RiskLevel.MODERATE,
    description: "Industrial IoT operational uptime, cobot deployment ratios, smart factory semiconductor procurement timelines, and predictive maintenance metrics.",
    featured: false,
    sampleRowsPreview: [
      { plantType: "Automotive Assembly", roboticsDensity: "410 per 10k workers", oeeEfficiencyPct: 88.6, downtimeHoursMo: 4.2 },
      { plantType: "Semiconductor Fab", roboticsDensity: "890 per 10k workers", oeeEfficiencyPct: 94.1, downtimeHoursMo: 1.1 },
    ],
  },
];

export const LIVE_MARKET_METRICS: MarketMetric[] = [
  {
    id: "m-1",
    title: "Global AI Compute Index",
    value: "148.4 pts",
    changeYoY: "+38.4%",
    isPositive: true,
    industry: IndustryCategory.TECHNOLOGY,
    sparklineData: [45, 52, 68, 84, 110, 132, 148],
    unit: "PTS",
  },
  {
    id: "m-2",
    title: "FinTech Settlement Liquidity",
    value: "$42.8B",
    changeYoY: "+18.2%",
    isPositive: true,
    industry: IndustryCategory.FINANCE,
    sparklineData: [28, 31, 33, 36, 38, 40, 42.8],
    unit: "USD",
  },
  {
    id: "m-3",
    title: "Renewable Storage Reserve",
    value: "84.2 GWh",
    changeYoY: "+29.1%",
    isPositive: true,
    industry: IndustryCategory.ENERGY,
    sparklineData: [32, 40, 51, 62, 70, 78, 84.2],
    unit: "GWh",
  },
  {
    id: "m-4",
    title: "Biopharma Clinical Success Rate",
    value: "62.4%",
    changeYoY: "-2.1%",
    isPositive: false,
    industry: IndustryCategory.HEALTHCARE,
    sparklineData: [68, 67, 65, 64, 63, 63, 62.4],
    unit: "PCT",
  },
];

export const DATA_PIPELINE_STEPS: DataPipelineStep[] = [
  {
    stepNumber: 1,
    title: "Multi-Source Data Ingestion",
    subtitle: "10,000+ Raw Streams",
    description: "Automated ingestion pipelines connect directly to global market exchanges, SEC filings, IoT telemetry, satellite logistics, and proprietary partner databases.",
    iconName: "Database",
    badgeText: "Real-Time Ingestion",
  },
  {
    stepNumber: 2,
    title: "Automated Quality Cleaning",
    subtitle: "Zero Anomaly Guarantee",
    description: "Machine learning algorithms and human economic analysts clean, deduplicate, normalize currencies, and scrub outlier values for 99.8% precision.",
    iconName: "ShieldCheck",
    badgeText: "AI Scrubbed",
  },
  {
    stepNumber: 3,
    title: "Predictive AI Modeling",
    subtitle: "Forecast & Trend Models",
    description: "Proprietary predictive algorithms transform historical telemetry into forward-looking 5-year growth predictions, risk benchmarks, and elasticity matrices.",
    iconName: "Cpu",
    badgeText: "Predictive Analytics",
  },
  {
    stepNumber: 4,
    title: "Enterprise Ecosystem Delivery",
    subtitle: "< 50ms API Latency",
    description: "Instant delivery via Snowflake Data Cloud, GraphQL/REST APIs, interactive BI dashboards, or customized quarterly enterprise PDF intelligence binders.",
    iconName: "Zap",
    badgeText: "Instant Access",
  },
];

export const INTEGRATION_OPTIONS: IntegrationOption[] = [
  {
    id: "int-sf",
    name: IntegrationPlatform.SNOWFLAKE,
    description: "Direct zero-copy database sharing with automatic schema updates into your Snowflake data warehouse.",
    latencyText: "Instant Zero-Copy Share",
    codeSnippet: `SELECT industry_code, market_size_usd, cagr_5yr 
FROM SHINE_GLOBAL_SHARE.MARKET_INTELLIGENCE.INDUSTRIES 
WHERE category = 'TECHNOLOGY' AND region = 'GLOBAL';`,
    language: "sql",
    iconName: "Layers",
  },
  {
    id: "int-api",
    name: IntegrationPlatform.REST_API,
    description: "High-performance RESTful & GraphQL endpoints with granular authentication, webhook events, and pagination.",
    latencyText: "< 45ms P99 Latency",
    codeSnippet: `curl -X GET "https://api.shineglobalsolutions.com/v2/intelligence/datasets/SGS-AI-2026-X" \\
  -H "Authorization: Bearer sgs_live_9f82a1..." \\
  -H "Accept: application/json"`,
    language: "bash",
    iconName: "Code2",
  },
  {
    id: "int-bi",
    name: IntegrationPlatform.POWER_BI,
    description: "Native connectors for Microsoft PowerBI, Tableau, and Qlik Sense with pre-built dashboard templates.",
    latencyText: "Scheduled Refresh / DirectQuery",
    codeSnippet: `= ShineGlobal.Feed("https://api.shineglobalsolutions.com/v2/powerbi", [ApiKey="sgs_live_..."])`,
    language: "m",
    iconName: "BarChart3",
  },
  {
    id: "int-py",
    name: IntegrationPlatform.PYTHON_SDK,
    description: "Official Python library with native Pandas DataFrame conversion, Jupyter notebook magics, and automated model training inputs.",
    latencyText: "Pip Package: shine-data",
    codeSnippet: `import shine_data as sgs

client = sgs.Client(api_key="sgs_live_...")
df = client.datasets.get("SGS-AI-2026-X").to_pandas()
print(df.head())`,
    language: "python",
    iconName: "Terminal",
  },
];

export const SECURITY_CERTIFICATIONS = [
  { title: "ISO 27001 Certified", badge: "Information Security", desc: "Strict end-to-end security controls across all data infrastructure." },
  { title: "SOC 2 Type II Compliant", badge: "Audit Verified", desc: "Independently audited controls for availability, integrity, and privacy." },
  { title: "GDPR & CCPA Compliant", badge: "Privacy Compliant", desc: "Anonymized, privacy-first data handling with complete compliance guarantees." },
  { title: "99.99% Enterprise Uptime", badge: "SLA Guaranteed", desc: "Redundant multi-region API gateways with financial-grade reliability." },
];

export const SECTOR_DETAILS: SectorDetail[] = [
  {
    category: IndustryCategory.TECHNOLOGY,
    title: "Technology & AI Compute",
    subtitle: "Access verified datasets on LLMs, semiconductors, and cloud infrastructure to power your AI investment and strategy decisions.",
    description: "The global AI race is defined by one critical factor: compute. With hyperscalers committing over $300 billion in capital expenditure and the semiconductor industry projected to grow by 38%, the landscape is shifting at a breakneck pace. To navigate this complexity, you need more than just news; you need data. Our Technology & AI Compute sector provides actionable intelligence on the entire ecosystem, from chip fabrication to enterprise software deployment.",
    intelligenceAreas: [
      {
        title: "Semiconductor Supply Chain",
        description: "Track capacity, inventory, and pricing for GPUs, high-bandwidth memory, and networking equipment.",
      },
      {
        title: "Enterprise AI Adoption",
        description: "Monitor software monetization and the integration of AI into platforms like cloud services and CRM.",
      },
      {
        title: "LLM & AI Infrastructure",
        description: "Gain insights into the growth of data centers, grid infrastructure, and the networking technology that powers the AI factory.",
      },
    ],
    outro: "Our 5,000+ human-verified datasets and sub-50ms API endpoints deliver the critical data you need to identify market leaders, assess supply chain risks, and predict the next wave of technology spending.",
  },
  {
    category: IndustryCategory.FINANCE,
    title: "Finance & FinTech Velocity",
    subtitle: "Leverage structured industry data on cross-border payments, neo-banking, and digital assets to gain a competitive edge.",
    description: "The financial services industry is undergoing a fundamental transformation driven by the digitization of money and the rise of embedded finance. Traditional cross-border payment rails, like SWIFT, are being replaced by faster, more cost-effective solutions, with remittance companies now utilizing stablecoins to achieve settlement finality in under 60 seconds. Our Finance & FinTech sector provides the critical data to understand these shifts and capture new opportunities.",
    intelligenceAreas: [
      {
        title: "Cross-Border Payments & Remittance",
        description: "Analyze the adoption of stablecoins, real-time settlement engines, and new regulatory landscapes.",
      },
      {
        title: "Neo-Banking & FinTech",
        description: "Monitor the growth of digital-only banks, payment gateways, and alternative lending platforms.",
      },
      {
        title: "Digital Assets & Blockchain",
        description: "Track the integration of tokenized real-world assets and the development of Super Apps.",
      },
    ],
    outro: "Stay ahead of the curve with our structured industry datasets and live market telemetry, offering the clarity needed to invest in and build the next generation of financial infrastructure.",
  },
  {
    category: IndustryCategory.HEALTHCARE,
    title: "Healthcare & Biopharma",
    subtitle: "Make informed decisions with verified data on oncology pipelines, medical devices, and the AI revolution in drug discovery.",
    description: "The healthcare and biopharma sectors are being transformed by data and AI. From the development of Multi-Cancer Early Detection (MCED) tests to the rise of AI-enabled drug discovery tools, the pace of innovation is accelerating. Our healthcare intelligence provides the verified, high-quality data you need to navigate clinical pipelines, regulatory milestones, and market trends. With investment in biopharma stabilizing and M&A activity remaining robust, having the right data at your fingertips is non-negotiable.",
    intelligenceAreas: [
      {
        title: "Oncology & Drug Pipelines",
        description: "Track clinical trial results, FDA advisory committee reviews, and the performance of leading treatments.",
      },
      {
        title: "Medical Devices & Diagnostics",
        description: "Monitor the development of next-gen vital sign monitors, orthopedic implants, and novel diagnostic tools.",
      },
      {
        title: "AI in Healthcare",
        description: "Uncover the companies using AI to turn data into actionable insights for drug discovery and diagnostics.",
      },
    ],
    outro: "Access our curated datasets on oncology pipelines, medical device innovations, and supply chain logistics to support your strategic decisions in this high-stakes industry.",
  },
  {
    category: IndustryCategory.ENERGY,
    title: "Clean Energy & Utilities",
    subtitle: "Analyze grid storage, carbon pricing, and renewable energy trends with our verified environmental data.",
    description: "The transition to a clean energy future is complex, requiring massive investment in grid storage, renewables, and carbon management. Carbon pricing and policy approaches are critical variables that affect the cost and viability of renewable projects. With global electricity demand expected to accelerate and grid infrastructure under strain, utilities and energy companies need data to optimize operations and investments. Our Clean Energy & Utilities datasets provide the transparency and insight necessary to navigate this transition.",
    intelligenceAreas: [
      {
        title: "Grid Storage & Renewables",
        description: "Monitor the deployment of energy storage capacity, wind, and solar projects.",
      },
      {
        title: "Carbon Pricing & Markets",
        description: "Track carbon pricing mechanisms and their impact on energy investment decisions.",
      },
      {
        title: "Utility Infrastructure",
        description: "Analyze grid upgrades, equipment shortages, and the buildout of new transmission capacity.",
      },
    ],
    outro: "Leverage our structured datasets and API endpoints to model energy markets, evaluate grid resiliency, and make data-driven decisions for a sustainable future.",
  },
];
