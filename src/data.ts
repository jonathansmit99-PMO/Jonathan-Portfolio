export interface Competency {
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface GovernanceAccomplishment {
  role: string;
  topic: string;
  details: string;
}

export interface ProjectResult {
  metric: string;
  description: string;
}

export interface ProjectData {
  id: string;
  title: string;
  company: string;
  period?: string;
  category: string;
  challenge: string;
  strategicExecution: string[];
  results: ProjectResult[];
  reflection: string;
}

export interface InitiativeData {
  title: string;
  description: string;
}

export interface CertificationData {
  title: string;
  institution: string;
  year?: string;
  details: string;
}

export interface SystemSoftwareMatrix {
  frameworks: string[];
  platforms: string[];
  specialisms: string[];
}

export const le = {
  name: "Jonathan Smit",
  email: "jonathan.smit99@gmail.com",
  linkedin: "https://www.linkedin.com/in/jonathan-smit-3594b162",
  aboutMeParagraphs: [
    "Hi, I am Jonathan Smit. With over 17 years of experience spanning Product Management, Project Leadership, and Telecom Portfolio Strategy, I specialise in bridging the gap between high-level commercial strategy and deep technical execution. Currently, as a Senior Product Manager at SEACOM South Africa, I lead the strategy and lifecycle management for international and local network services, including fiber, wireless, satellite, and SaaS solutions.",
    "My career is defined by driving end-to-end product value—from ideation and design to go-to-market and profitability. I am deeply passionate about leveraging AI, automation, and agile methodologies to build scalable solutions that power digital-first organisations. My long-term vision is to transition into a Chief Product Officer (CPO) role or pursue high-impact entrepreneurship."
  ],
  vision: "Transitioning into a Chief Product Officer (CPO) role or pursuing high-impact entrepreneurship by architecting solutions that seamlessly bind engineering rigor with commercial strategy."
};

export const hs: Competency[] = [
  {
    title: "Strategic Product & Portfolio Management",
    description: "Full end-to-end multi-country portfolio ownership and deep strategic direction throughout the product lifecycle.",
    details: [
      "Product lifecycle strategy from initial ideation to decommissioning",
      "Multi-country portfolio coordination & product line growth roadmap",
      "Carrier service alignment including dark fiber, point-to-point connections, & satellite",
      "Comprehensive go-to-market (GTM) formulation and execution"
    ],
    iconName: "Network"
  },
  {
    title: "Commercial & Financial Acumen",
    description: "Rigorous P&L ownership, complex margin-backed pricing models, and vendor commercial optimisation.",
    details: [
      "Strict P&L analysis and cross-national margin compliance checks",
      "Supplier rate negotiations to enforce ring-fenced pricing",
      "Financial automation mapping (transforming quoting structures to match SAP/Acumatica)",
      "Pricebook & product attribute alignment across business systems like Salesforce"
    ],
    iconName: "TrendingUp"
  },
  {
    title: "Technical Innovation & Integrations",
    description: "Leading deep system migrations, automated APIs, Salesforce configuration, and AI enablement.",
    details: [
      "Legacy modernisation (Salesforce org mergers, SAP to Acumatica migrations)",
      "Carrier-aggregated GEO-location and price-quoting API integrations",
      "Enabling AI-driven productivity and automated workflows",
      "Order-to-cash system automation to eliminate manual quote processing"
    ],
    iconName: "Cpu"
  },
  {
    title: "Leadership & Stakeholder Influence",
    description: "Orchestrating high-performing PMO teams and communicating persuasive narratives to the C-Suite.",
    details: [
      "Mentored Junior Product Managers ensuring standard adherence to commercial margins",
      "Led full PMO office guiding six Project Managers on PMPM/PMBoK standards",
      "Directly influenced co-founders & C-Suite with filmed strategic business cases",
      "Cross-functional alignment (DevOps, UX, engineering, finance, legal, sales)"
    ],
    iconName: "Users"
  }
];

export const fA: GovernanceAccomplishment[] = [
  {
    role: "Commercial Governance & Mentorship",
    topic: "Managing & coaching Junior Product Managers",
    details: "Supervised junior PMs to support SME and Enterprise sales teams. Oversaw connectivity vendor negotiations, safeguarding ring-fenced business pricing to satisfy the strict margins demanded by the executive board."
  },
  {
    role: "PMO Leadership & Standardisation",
    topic: "Directing 6 Project Managers aligned to PMBoK",
    details: "Constructed and deployed a standardised project delivery governance framework. Assumed absolute accountability for PM KPI tracking, standardising reporting, risk buffers, and cross-project transparency."
  }
];

export const Q0: ProjectData[] = [
  {
    id: "core-infra",
    title: "Core Infrastructure & Network Expansion",
    company: "SEACOM",
    period: "5-Year Expansion",
    category: "infrastructure",
    challenge: "Building the foundational high-capacity telecom infrastructure necessary to support exponential enterprise data growth over a five-year window.",
    strategicExecution: [
      "Deployed 10-Gig rings to increase backhaul capability",
      "Deployed Resilient National & International Backhaul",
      "Integrated secure Session Border Controllers (SBCs) for advanced voice transit routing",
      "Implemented Core National Fortigate Hosted Environment for Multi Enterprise clients",
      "Installed enterprise-grade Distributed Denial of Service (DDoS) shield setups",
      "Collaborated heavily between core engineering teams, vendors, and sales to calibrate future market capacities"
    ],
    results: [
      {
        metric: "R50 Million+",
        description: "Grown in immediate, recurring network-based revenue"
      },
      {
        metric: "-30%",
        description: "Reduction in operations costs through infrastructure synergy"
      },
      {
        metric: "99.9%",
        description: "Network uptime maintained consistently"
      },
      {
        metric: "95%",
        description: "Client satisfaction rating across over 500 Enterprise accounts"
      }
    ],
    reflection: "Successfully delivering 99.9% network uptime across robust carrier infrastructure reinforced a core tenet: proactive supplier management and strict contract compliance are as essential as the hardware itself. This very project functions as the operational blueprint for negotiating and organising 13 combined MVNO/FNO suppliers under single scaled offerings."
  },
  {
    id: "digital-trans",
    title: "Digital Transformation & E-Commerce Core",
    company: "SEACOM",
    period: "2024 - 2025",
    category: "e-commerce",
    challenge: "Modernising legacy manual customer onboarding and sales cycles by unifying CRM and SAP into a streamlined digital commerce platform.",
    strategicExecution: [
      "Led end-to-end design of a real-time CRM & core financial ERP platform",
      "Engineered automated quotation models incorporating carrier supplier margins",
      "Mapped carrier-aggregated GEO location estimation APIs for pinpoint accuracy",
      "Deployed live sales performance dashboards to trigger instant executive actions"
    ],
    results: [
      {
        metric: "R300k+",
        description: "Immediate reduction in overhead operating expenses"
      },
      {
        metric: "40% Faster",
        description: "Improvement in time-to-quote metrics"
      },
      {
        metric: "+30%",
        description: "Uplift in daily sales operational efficiency"
      },
      {
        metric: "98%",
        description: "Record order fulfillment and billing alignment accuracy"
      }
    ],
    reflection: "This project underscored how crucial the timing of UX evaluation is. While it delivered solid cost decreases, we realised that user-centric interface testing should happen much earlier in the systems engineering flow. This direct insight inspired me to pursue advanced UX/UI Design credentials so that frontend simplicity matches backend financial rigor (SAP) right from the start."
  },
  {
    id: "pmo-trans",
    title: "PMO Transformation & Enterprise Delivery",
    company: "SEACOM",
    category: "pmo",
    challenge: "Standardising and digitising multination delivery pipelines for business connectivity, cloud security, SD-WAN, and voice systems while merging conflicting Salesforce, SAP, and RMM environments under extreme time pressures.",
    strategicExecution: [
      "Formulated a combined PMBoK & Agile portfolio execution blueprint for multi-site deployments",
      "Orchestrated a highly complex Salesforce dual-org merger and synchronised SAP to Acumatica transitions",
      "Instituted ring-fenced validation safeguards to intercept and resolve margin discrepancies before they entered order-to-cash queues",
      "Deployed real-time risk trackers and service-level indicators to allow proactive recovery operations"
    ],
    results: [
      {
        metric: "100%",
        description: "Unification of order-to-cash system data across merged environments"
      },
      {
        metric: "Zero Leakage",
        description: "Enforced margin protections preventing vendor markup errors"
      },
      {
        metric: "6 PMs",
        description: "Directly led and standard-calibrated on PMBOK methodology"
      }
    ],
    reflection: "One lesson from consolidating complex systems: Tech is 50% of the win. The other 50% is people. By implementing a Digital Agile PM methodology in Salesforce across order fulfillment, procurement, change control, and billing, I learned that unifying databases means little without unified workflows. Mentoring PMs and aligning human behavior is what actually prevents drift and protects margins.."
  },
  {
    id: "crisis-mgmt",
    title: "Business Continuity & Crisis Management (COVID-19)",
    company: "SEACOM",
    period: "2021",
    category: "crisis",
    challenge: "Navigating a major R35 Million contractual financial liability during the peak of global pandemic supply chain bottlenecks while a primary third-party vendor's stability sat at immediate risk.",
    strategicExecution: [
      "Crafted and enforced an agile business continuity blueprint spaning eight critical months",
      "Directly negotiated contract variations with suppliers to swap legacy wired circuits for highly resilient technologies",
      "Aligned sales, client representatives, project teams, and network ops to execute cutovers during intensive volatility",
      "Protected Seacom from crippling financial penalties while maintaining continuous uptime for tier-1 enterprises"
    ],
    results: [
      {
        metric: "R35 Million",
        description: "Contractual exposure completely mitigated without financial loss"
      },
      {
        metric: "8 Months",
        description: "Of high-stress business continuity orchestrated flawlessly"
      },
      {
        metric: "100%",
        description: "Uptime achieved for all legacy conversions under crisis pricing"
      }
    ],
    reflection: "Extreme constraints test the truth of strategic relations. When typical operations fail, transparent negotiation and clear communication with suppliers become the company's ultimate defense. Cultivating strong stakeholder trust at the C-suite and partner level saved our client experience and successfully protected Seacom from a massive contractual loss."
  },
  {
    id: "hp-transformation",
    title: "Enterprise Infrastructure Transformation",
    company: "Hewlett Packard",
    period: "February 2009 – September 2009",
    category: "pmo",
    challenge: "Orchestrated the large-scale consolidation and migration of standardised infrastructure from Dell to Hewlett Packard for over 4,500 users across major enterprise clients, including Anglo-American mining operations and their corporate head office, significantly improving system reliability, performance, and security.",
    strategicExecution: [
      "Directed the critical execution phase of the project, overseeing comprehensive on-site audits and managing complex issue logs to ensure delivery met all technical and commercial requirements",
      "Facilitated seamless collaboration between diverse technical teams and external partners, including resources from BT, BCX, and Internet Solutions (IS)",
      "Managed rigorous change control protocols and User Acceptance Testing (UAT) to ensure seamless system transitions, operational stability, and high client satisfaction"
    ],
    results: [
      {
        metric: "4,500+ Users",
        description: "Successfully migrated to standardised HP infrastructure from Dell legacy environments"
      },
      {
        metric: "System Uplift",
        description: "Delivered significant improvements in system reliability, hardware performance, and endpoint security"
      },
      {
        metric: "Anglo-American",
        description: "Full-scale server/PC systems migration & head office consolidation"
      }
    ],
    reflection: "Developing the core competencies in technical migration and resource coordination during this foundational phase at Hewlett Packard now directly informs my leadership of high-impact CRM and ERP transformations."
  }
];

export const dA: InitiativeData[] = [
  {
    title: "National Supplier & Network Consolidation",
    description: "Leading negotiations with 13 combined Mobile & Fiber Network Operators (MNOs and FNOs). Structuring a unified service portfolio to scale local business delivery and dramatically drop wholesale connectivity expenses."
  },
  {
    title: "Enterprise Salesforce & ERP Unified Migration",
    description: "Merging duplicate Salesforce org instances while executing a wholesale SAP to Acumatica migration. Responsibilities include mapping intricate price books, linking GEO-location and network availability APIs, and establishing a zero-touch billing framework."
  }
];

export const hA: CertificationData[] = [
  {
    title: "Product Management Agile & AI Certificate",
    institution: "King’s College London",
    year: "2025",
    details: "Advanced methodologies for AI-enhanced product discovery, automated metric analysis, and data-backed go-to-market strategies."
  },
  {
    title: "UX Design Career Accelerator",
    institution: "King’s College London",
    details: "In-depth specialisation in user-centric design, interactive wireframing (Miro), high-fidelity modeling, qualitative/quantitative testing, and user-flows."
  },
  {
    title: "Agile Frameworks Certification",
    institution: "King’s College London",
    details: "Deep exploration of enterprise environments and frameworks including Scrum, scaled agile (SAFe), and Kanban for rapid, value-driven execution."
  },
  {
    title: "AI in Data Analytics Certification",
    institution: "King’s College London",
    details: "Applied data mining, AI-driven customer sentiment analysis, trending, and advanced analytics on commercial telemetry."
  },
  {
    title: "Advanced Project Management (PMBoK)",
    institution: "University of Johannesburg",
    details: "Comprehensive governance standards, PMO structuring, predictive and adaptive workflows, and structured risk/resource buffers."
  }
];

export const cc: SystemSoftwareMatrix = {
  frameworks: ["Scrum", "SAFe (Scaled Agile)", "Kanban", "PMBoK Methodology", "ISO 9001:2000 Standards"],
  platforms: ["Salesforce", "SAP ERP", "MS Projects", "Miro", "Prodpad", "RMM", "Prototyping", "Figma", "Revenue Weaver", "IPAAS"],
  specialisms: ["P&L Management", "Wireless, LTE & Fiber Optics", "Supplier Relations", "API Integrations", "AI Automation", "Stakeholder Orchestration"]
};
