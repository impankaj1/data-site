import { IndustryCategory } from "../types/data";
import { NavItem, FooterLinkGroup, QuickFilterChip } from "../types/navigation";

export const MAIN_NAVIGATION: NavItem[] = [
  {
    id: "nav-solutions",
    label: "Solutions",
    href: "/#solutions",
    megaMenu: [
      {
        categoryTitle: "Business Solutions",
        items: [
          {
            title: "Business Consultancy",
            description: "Bridge the gap between raw data and decisive strategic action.",
            href: "/consultancy",
            badge: "New",
          },
        ],
      },
      {
        categoryTitle: "Core Data Capabilities",
        items: [
          {
            title: "Market Sizing & Growth Forecasts",
            description: "Granular historical trends and 5-year predictive industry valuations.",
            href: "/data#explorer",
            badge: "Popular",
          },
          {
            title: "Strategic Benchmarking",
            description: "Compare company performance ratios against 120+ global industry averages.",
            href: "/data#kpi",
          },
          {
            title: "Supply Chain Risk Intelligence",
            description: "Track geopolitical, logistics, and raw material cost volatility.",
            href: "/data#pipeline",
          },
        ],
      },
      {
        categoryTitle: "Delivery Channels",
        items: [
          {
            title: "Snowflake Direct Sharing",
            description: "Zero-copy query access directly inside your enterprise warehouse.",
            href: "/data#integrations",
            badge: "Enterprise",
          },
          {
            title: "REST & GraphQL APIs",
            description: "Automated sub-50ms data streaming for internal apps & models.",
            href: "/data#integrations",
          },
          {
            title: "Executive Reports Binders",
            description: "Curated PDF intelligence decks ready for board presentations.",
            href: "/data#explorer",
          },
        ],
      },
    ],
  },
  {
    id: "nav-data-platform",
    label: "Data Platform",
    href: "/data",
  },
  {
    id: "nav-industries",
    label: "Industries",
    href: "/#industries",
    megaMenu: [
      {
        categoryTitle: "Sectors Covered",
        items: [
          {
            title: "Technology & AI Compute",
            description: "LLMs, Semiconductor, Cloud Infra, Enterprise Software.",
            href: "/data?category=TECHNOLOGY",
            category: IndustryCategory.TECHNOLOGY,
          },
          {
            title: "Finance & FinTech Velocity",
            description: "Cross-border Payments, Neo-Banking, Digital Assets.",
            href: "/data?category=FINANCE",
            category: IndustryCategory.FINANCE,
          },
          {
            title: "Healthcare & Biopharma",
            description: "Oncology Pipeline, Medical Devices, Supply Chain.",
            href: "/data?category=HEALTHCARE",
            category: IndustryCategory.HEALTHCARE,
          },
          {
            title: "Clean Energy & Utilities",
            description: "Grid Storage, Wind & Solar, Carbon Pricing.",
            href: "/data?category=ENERGY",
            category: IndustryCategory.ENERGY,
          },
        ],
      },
    ],
  },
  {
    id: "nav-company",
    label: "About Us",
    href: "/about",
  },
];

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    title: "Data Products",
    links: [
      { label: "Industry Intelligence Catalog", href: "/data#explorer" },
      { label: "Live Market KPI Dashboard", href: "/data#kpi" },
      { label: "Snowflake Marketplace Listing", href: "/data#integrations" },
      { label: "Data Pipeline & Methodology", href: "/data#pipeline" },
      { label: "Developer API Portal", href: "/data#integrations" },
    ],
  },
  {
    title: "Key Sectors",
    links: [
      { label: "Artificial Intelligence & Cloud", href: "/data?category=TECHNOLOGY" },
      { label: "Global Finance & Banking", href: "/data?category=FINANCE" },
      { label: "Healthcare & Pharmaceuticals", href: "/data?category=HEALTHCARE" },
      { label: "Clean Energy & Smart Grids", href: "/data?category=ENERGY" },
      { label: "E-Commerce & Omnichannel", href: "/data?category=RETAIL" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Shine Global Solutions", href: "/about" },
      { label: "Business Consultancy", href: "/consultancy" },
      { label: "Client Success Stories", href: "/#testimonials" },
      { label: "Security & Compliance", href: "/data#security" },
      { label: "Careers", href: "/#careers" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
];

export const QUICK_FILTER_CHIPS: QuickFilterChip[] = [
  { id: "chip-all", label: "All Sectors", category: IndustryCategory.ALL },
  { id: "chip-tech", label: "AI & Technology", category: IndustryCategory.TECHNOLOGY },
  { id: "chip-fin", label: "Finance & FinTech", category: IndustryCategory.FINANCE },
  { id: "chip-health", label: "Biopharma & Health", category: IndustryCategory.HEALTHCARE },
  { id: "chip-energy", label: "Clean Energy", category: IndustryCategory.ENERGY },
  { id: "chip-retail", label: "Retail & E-Commerce", category: IndustryCategory.RETAIL },
];

export const COMPANY_KEY_STATS = [
  { id: "stat-1", value: "5,000+", label: "Verified Industry Datasets", sublabel: "Across 120 global markets" },
  { id: "stat-2", value: "99.8%", label: "Data Precision SLA", sublabel: "Double-blind AI & analyst scrubbed" },
  { id: "stat-3", value: "< 45ms", label: "Average API Latency", sublabel: "Global edge CDN distribution" },
  { id: "stat-4", value: "$4.2T", label: "Market Volume Tracked", sublabel: "Annualized economic coverage" },
];
