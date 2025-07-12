
export interface Tool {
  id: string;
  name: string;
  description: string;
  category: "finance" | "inventory" | "automation" | "reporting" | "accounting";
  businessSize: "small" | "midsize" | "enterprise" | "all";
  features: string[];
  color?: string;
}

export const tools: Tool[] = [
  {
    id: "vena-insights",
    name: "Vena Insights",
    description: "Intelligent reporting and analytics solution that uses AI and machine learning to help finance teams isolate key business drivers, investigate inefficiencies, and spot trends quickly.",
    category: "finance",
    businessSize: "midsize",
    features: ["Predictive analytics", "Forecasting", "Anomaly detection"],
    color: "#3B82F6"
  },
  {
    id: "domo",
    name: "Domo",
    description: "Provides unified dashboards with real-time data integration and AI-generated insights to help businesses understand how data changes affect day-to-day outcomes.",
    category: "reporting",
    businessSize: "enterprise",
    features: ["Unified dashboards", "Real-time data integration", "AI-generated insights"],
    color: "#8B5CF6"
  },
  {
    id: "trullion",
    name: "Trullion",
    description: "Utilizes AI to streamline revenue recognition and lease accounting, ensuring workflow efficiency and compliance.",
    category: "accounting",
    businessSize: "enterprise",
    features: ["Revenue recognition", "Lease accounting", "Compliance automation"],
    color: "#10B981"
  },
  {
    id: "caribou",
    name: "Caribou",
    description: "An automation tool that generates documents and facilitates intercompany activities, helping global businesses manage financial complexities.",
    category: "automation",
    businessSize: "enterprise",
    features: ["Document generation", "Intercompany activities", "Financial management"],
    color: "#F59E0B"
  },
  {
    id: "weflow",
    name: "Weflow",
    description: "A revenue and sales performance management tool that integrates with Salesforce to predict pipeline and forecast revenue.",
    category: "finance",
    businessSize: "all",
    features: ["Pipeline prediction", "Revenue forecasting", "Salesforce integration"],
    color: "#EC4899"
  },
  {
    id: "booke-ai",
    name: "Booke AI",
    description: "Automates bookkeeping processes, eliminating spreadsheet confusion and email overload for small businesses.",
    category: "accounting",
    businessSize: "small",
    features: ["Automated bookkeeping", "Month-end close assistance", "Financial reporting"],
    color: "#6366F1"
  },
  {
    id: "vic-ai",
    name: "Vic.ai",
    description: "An AI-driven solution for invoice processing that extracts insights from documents, identifies duplicates, and initiates automated approval workflows.",
    category: "accounting",
    businessSize: "midsize",
    features: ["Invoice processing", "Duplicate detection", "Approval workflows"],
    color: "#EF4444"
  },
  {
    id: "workiva",
    name: "Workiva",
    description: "Supports financial reporting from annual reports to ESG and audit management using generative AI to create reporting templates.",
    category: "reporting",
    businessSize: "enterprise",
    features: ["Financial reporting", "ESG reporting", "Audit management"],
    color: "#14B8A6"
  },
  {
    id: "rephop",
    name: "Rephop",
    description: "Streamlines the financial consolidation process, making reporting easier for finance teams across various accounting systems or continents.",
    category: "finance",
    businessSize: "midsize",
    features: ["Financial consolidation", "Cross-system reporting", "Compliance assurance"],
    color: "#0EA5E9"
  },
  {
    id: "netstock",
    name: "Netstock",
    description: "Balances supply and demand, minimizing waste and improving fulfillment rates with real-time stock monitoring.",
    category: "inventory",
    businessSize: "all",
    features: ["Supply-demand balancing", "Real-time monitoring", "Waste reduction"],
    color: "#8B5CF6"
  },
  {
    id: "zebra-technologies",
    name: "Zebra Technologies",
    description: "Tracks inventory with RFID, provides real-time stock updates, and automates data analysis for enterprises with multi-location inventory.",
    category: "inventory",
    businessSize: "enterprise",
    features: ["RFID tracking", "Multi-location inventory", "Automated analysis"],
    color: "#D946EF"
  },
  {
    id: "stampli",
    name: "Stampli",
    description: "Automates data extraction from digital invoices, reducing manual labor and errors with real-time audit trails.",
    category: "automation",
    businessSize: "midsize",
    features: ["Data extraction", "Error reduction", "Audit trails"],
    color: "#F97316"
  }
];

export const categories = [
  { id: "all", name: "All Tools" },
  { id: "finance", name: "Finance" },
  { id: "inventory", name: "Inventory" },
  { id: "automation", name: "Automation" },
  { id: "reporting", name: "Reporting" },
  { id: "accounting", name: "Accounting" }
];

export const businessSizes = [
  { id: "all", name: "All Sizes" },
  { id: "small", name: "Small Business" },
  { id: "midsize", name: "Midsize Business" },
  { id: "enterprise", name: "Enterprise" }
];
