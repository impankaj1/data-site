export enum IndustryCategory {
  ALL = "ALL",
  TECHNOLOGY = "TECHNOLOGY",
  FINANCE = "FINANCE",
  HEALTHCARE = "HEALTHCARE",
  ENERGY = "ENERGY",
  RETAIL = "RETAIL",
  MANUFACTURING = "MANUFACTURING",
}

export enum DataCoverageRegion {
  GLOBAL = "Global",
  NORTH_AMERICA = "North America",
  EUROPE = "Europe",
  ASIA_PACIFIC = "Asia Pacific",
  LATIN_AMERICA = "Latin America",
}

export enum ReportFormat {
  CSV = "CSV",
  JSON = "JSON",
  PARQUET = "Parquet",
  SNOWFLAKE = "Snowflake Direct",
  PDF = "PDF Executive Summary",
}

export enum RiskLevel {
  LOW = "Low Risk",
  MODERATE = "Moderate",
  ELEVATED = "Elevated",
  HIGH = "High Volatility",
}

export enum IntegrationPlatform {
  SNOWFLAKE = "Snowflake Marketplace",
  REST_API = "REST & GraphQL API",
  POWER_BI = "PowerBI & Tableau",
  PYTHON_SDK = "Python & R SDKs",
  CLOUD_STORAGE = "AWS S3 / GCP BigQuery",
}

export interface DatasetItem {
  id: string;
  title: string;
  code: string;
  category: IndustryCategory;
  region: DataCoverageRegion;
  recordsCount: string;
  updateFrequency: string;
  formats: ReportFormat[];
  marketSizeUsd: string;
  cagrGrowth: string;
  riskRating: RiskLevel;
  description: string;
  featured?: boolean;
  sampleRowsPreview: Record<string, string | number>[];
}

export interface MarketMetric {
  id: string;
  title: string;
  value: string;
  changeYoY: string;
  isPositive: boolean;
  industry: IndustryCategory;
  sparklineData: number[];
  unit: string;
}

export interface DataPipelineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badgeText: string;
}

export interface IntegrationOption {
  id: string;
  name: IntegrationPlatform;
  description: string;
  latencyText: string;
  codeSnippet: string;
  language: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  metricHighlight: string;
}

export interface CompanyStat {
  id: string;
  value: string;
  label: string;
  sublabel: string;
}
