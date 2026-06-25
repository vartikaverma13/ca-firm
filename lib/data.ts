// =============================================================================
// Rohit Aggarwal & Company — Complete Firm Data
// =============================================================================

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Firm {
  name: string;
  shortName: string;
  tagline: string;
  established: string;
  overview: string;
  pillars: string[];
  address: string;
  phone: string;
  email: string;
  hours: string;
  social: SocialLink[];
  managingPartnerMessage: string;
}

export interface CredibilityStat {
  label: string;
  value: string;
  text: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface WhyChooseUsItem {
  title: string;
  text: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface Service {
  title: string;
  slug: string;
  intro: string;
  provide: string[];
  process: string[];
  benefits: string[];
  faqs: ServiceFAQ[];
}

export interface InternationalService {
  title: string;
  description: string;
  slug: string;
}

export interface Industry {
  name: string;
  description: string;
  icon: string;
}

export interface Leader {
  name: string;
  suffix: string;
  role: string;
  qualification: string;
  experience: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  highlights: string[];
  message: string;
}

export interface TeamMember {
  name: string;
  suffix: string;
  role: string;
  expertise: string[];
  industries: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

// ---------------------------------------------------------------------------
// Firm
// ---------------------------------------------------------------------------

export const firm: Firm = {
  name: "Rohit Aggarwal & Company",
  shortName: "RA & Company.",
  tagline: "Delivering Trust Through Expertise",
  established: "2014",
  overview:
    "Rohit Aggarwal & Company is a premium Chartered Accountancy practice delivering end-to-end financial, tax, compliance, and advisory services to corporates, startups, and high-net-worth individuals.",
  pillars: [
    "Precision",
    "Integrity",
    "Professional Excellence",
    "Long-term Client Relationships",
  ],
  address:
    "216, Shalimar Garden Ext-1, Ghaziabad, Uttar Pradesh 201005, India",
  phone: "+91 99538 64565",
  email: "audit@carohitaggarwal.org.in",
  hours: "Monday to Saturday, 10:00 AM – 6:30 PM",
  social: [
    { platform: "LinkedIn", url: "https://www.linkedin.com/company/rohit-aggarwal-company" },
    { platform: "X", url: "#" },
  ],
  managingPartnerMessage:
    "At Rohit Aggarwal & Company, every client receives the depth of expertise, the rigor of a global firm, and the commitment of a trusted partner. We do not just advise—we stand beside our clients through every critical financial decision.",
};

// ---------------------------------------------------------------------------
// Credibility Stats
// ---------------------------------------------------------------------------

export const credibility: CredibilityStat[] = [
  {
    label: "Years of Expertise",
    value: "10+",
    text: "A decade of delivering precision-driven financial, tax, and compliance advisory.",
  },
  {
    label: "Client Relationships",
    value: "500+",
    text: "Trusted by corporates, startups, and HNIs across diverse sectors.",
  },
  {
    label: "Client Retention",
    value: "98%",
    text: "Long-term partnerships built on transparency and measurable results.",
  },
  {
    label: "Advisory Access",
    value: "24/7",
    text: "Round-the-clock access to expert financial guidance when you need it most.",
  },
];

// ---------------------------------------------------------------------------
// Vision, Mission, Core Values
// ---------------------------------------------------------------------------

export const vision: string =
  "To become a trusted financial and strategic advisory partner for businesses globally.";

export const mission: string =
  "To deliver high-quality accounting, taxation, compliance, and advisory services that help businesses grow with confidence.";

export const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    description: "Unwavering ethical standards in every engagement.",
  },
  {
    title: "Precision",
    description: "Zero tolerance for errors in compliance and reporting.",
  },
  {
    title: "Innovation",
    description:
      "Delivering solutions beyond traditional professional services.",
  },
];

// ---------------------------------------------------------------------------
// Why Choose Us
// ---------------------------------------------------------------------------

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "Structured Process",
    text: "Systematic workflows and multi-level quality reviews ensure excellence in every engagement.",
  },
  {
    title: "Trusted Partnership",
    text: "Long-term client relationships built on transparency and measurable results.",
  },
  {
    title: "Proactive Advisory",
    text: "We identify risks before they become problems.",
  },
  {
    title: "Single Point Accountability",
    text: "Dedicated engagement teams ensuring seamless communication and timely resolution.",
  },
];

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const services: Service[] = [
  {
    title: "Audit & Assurance",
    slug: "audit-assurance",
    intro:
      "Independent audit and assurance services that strengthen governance, improve reporting quality, and build stakeholder confidence across organizations of every scale.",
    provide: [
      "Statutory Audits",
      "Internal Audits",
      "Due Diligence",
      "Risk Assurance",
      "Compliance Audits",
    ],
    process: [
      "Understand business environment and controls",
      "Define audit scope and materiality",
      "Perform risk-based testing procedures",
      "Discuss findings with management",
      "Issue comprehensive audit report with recommendations",
    ],
    benefits: [
      "Stronger corporate governance",
      "Reliable financial statements",
      "Improved internal controls",
      "Enhanced investor and lender confidence",
    ],
    faqs: [
      {
        q: "What types of audits do you perform?",
        a: "We perform statutory audits, internal audits, due diligence reviews, risk assurance engagements, and compliance audits across all business sizes.",
      },
      {
        q: "How long does a typical audit take?",
        a: "Audit timelines depend on business complexity, but most engagements are completed within 2-4 weeks with minimal disruption to your operations.",
      },
      {
        q: "Do you support audit-readiness preparation?",
        a: "Yes. We help organizations prepare documentation, strengthen controls, and ensure compliance ahead of statutory audit deadlines.",
      },
    ],
  },
  {
    title: "Direct Taxation",
    slug: "direct-taxation",
    intro:
      "Strategic income tax planning, compliance, and litigation support for individuals, professionals, and businesses seeking to optimize their tax position.",
    provide: [
      "Income Tax Planning",
      "Return Filing",
      "TDS Compliance",
      "Tax Litigation Support",
      "Advance Tax Planning",
    ],
    process: [
      "Review income sources and financial records",
      "Identify applicable deductions and exemptions",
      "Prepare optimized tax computation",
      "File returns with complete documentation",
      "Handle assessments, notices, and appeals",
    ],
    benefits: [
      "Optimized tax liability",
      "Reduced compliance risk",
      "Timely and accurate filings",
      "Expert representation in litigation",
    ],
    faqs: [
      {
        q: "Can you help reduce my tax liability legally?",
        a: "Absolutely. We analyze your income structure, identify legitimate deductions, and implement tax-efficient strategies compliant with current tax laws.",
      },
      {
        q: "Do you handle income tax notices?",
        a: "Yes. We provide end-to-end support including notice analysis, reply preparation, documentation, and representation before tax authorities.",
      },
      {
        q: "Is advance tax planning available for businesses?",
        a: "Yes. We provide quarterly advance tax computations and planning to help businesses manage cash flow and avoid interest penalties.",
      },
    ],
  },
  {
    title: "GST & Indirect Tax",
    slug: "gst-indirect-tax",
    intro:
      "End-to-end GST registration, filing, reconciliation, advisory, and appellate support for businesses navigating India's indirect tax framework.",
    provide: [
      "GST Registration",
      "GST Return Filing",
      "GST Advisory",
      "Input Tax Credit Optimization",
      "Appellate Representation",
    ],
    process: [
      "Map business transactions to GST framework",
      "Set up compliance calendar and filing schedule",
      "Reconcile purchase and sales data",
      "File periodic returns accurately",
      "Resolve mismatches, notices, and appeals",
    ],
    benefits: [
      "Accurate and timely GST filings",
      "Maximized input tax credit recovery",
      "Reduced penalties and interest",
      "Expert appellate representation",
    ],
    faqs: [
      {
        q: "Can you help optimize my input tax credit?",
        a: "Yes. We perform detailed ITC reconciliation, identify blocked credits, and maximize legitimate credit recovery to reduce your net GST liability.",
      },
      {
        q: "Do you handle GST audits and department notices?",
        a: "Yes. We provide complete support for GST audits, departmental inquiries, and appellate proceedings at every level.",
      },
      {
        q: "Is GST advisory available for multi-state businesses?",
        a: "Absolutely. We provide specialized GST structuring and compliance support for businesses operating across multiple states and jurisdictions.",
      },
    ],
  },
  {
    title: "Corporate Compliance",
    slug: "corporate-compliance",
    intro:
      "Comprehensive MCA, ROC, secretarial, and governance compliance support for companies that need their regulatory framework to stay current and investor-ready.",
    provide: [
      "Company Incorporation",
      "MCA Filings",
      "ROC Compliance",
      "Board Resolutions",
      "Annual Returns",
      "Secretarial Support",
    ],
    process: [
      "Create comprehensive compliance calendar",
      "Prepare resolutions and documentation",
      "Secure board and shareholder approvals",
      "File statutory forms with MCA/ROC",
      "Maintain statutory registers and records",
    ],
    benefits: [
      "Avoid regulatory penalties",
      "Investor-ready corporate records",
      "Clear governance trail",
      "Director liability protection",
    ],
    faqs: [
      {
        q: "Can you handle company incorporation end-to-end?",
        a: "Yes. We manage the complete incorporation process from name reservation to post-incorporation compliance setup including PAN, TAN, GST, and startup registrations.",
      },
      {
        q: "How do you ensure we never miss a filing deadline?",
        a: "We maintain a comprehensive compliance calendar with automated reminders and proactive follow-ups to ensure every deadline is met without fail.",
      },
      {
        q: "Do you support secretarial work for board meetings?",
        a: "Yes. We draft board resolutions, prepare meeting minutes, manage director and shareholder documentation, and ensure corporate governance standards are maintained.",
      },
    ],
  },
  {
    title: "Financial Planning & Analysis",
    slug: "financial-planning-analysis",
    intro:
      "Strategic FP&A services including budgeting, forecasting, MIS reporting, and variance analysis for businesses seeking sharper financial visibility and control.",
    provide: [
      "Budgeting",
      "Forecasting",
      "MIS Reporting",
      "Variance Analysis",
      "Business Performance Monitoring",
    ],
    process: [
      "Understand business model and financial structure",
      "Establish KPIs and performance metrics",
      "Build budget and forecast models",
      "Generate periodic MIS reports",
      "Conduct variance analysis and recommend actions",
    ],
    benefits: [
      "Data-driven decision making",
      "Improved cash flow visibility",
      "Proactive performance monitoring",
      "Funding and investor readiness",
    ],
    faqs: [
      {
        q: "What does your FP&A service include?",
        a: "Our FP&A services cover budgeting, financial forecasting, MIS reporting, variance analysis, and ongoing business performance monitoring tailored to your industry.",
      },
      {
        q: "Can you set up MIS dashboards for our business?",
        a: "Yes. We design customized MIS dashboards that provide real-time visibility into revenue, expenses, margins, cash flow, and key business metrics.",
      },
      {
        q: "Is this service suitable for startups?",
        a: "Absolutely. Startups benefit significantly from structured FP&A as it helps with investor reporting, burn rate monitoring, and fundraising readiness.",
      },
    ],
  },
  {
    title: "Risk Management & Internal Controls",
    slug: "risk-management",
    intro:
      "Comprehensive risk assessments, internal control reviews, governance frameworks, and compliance monitoring to protect your business from operational and regulatory risks.",
    provide: [
      "Risk Assessments",
      "Internal Control Reviews",
      "Governance Frameworks",
      "Compliance Monitoring",
    ],
    process: [
      "Map business processes and risk landscape",
      "Evaluate existing control effectiveness",
      "Identify gaps and vulnerabilities",
      "Design and implement governance frameworks",
      "Monitor compliance and report findings",
    ],
    benefits: [
      "Reduced operational risk",
      "Stronger internal controls",
      "Regulatory compliance assurance",
      "Board and investor confidence",
    ],
    faqs: [
      {
        q: "What does a risk assessment involve?",
        a: "We systematically identify, evaluate, and prioritize risks across your operations, finances, and compliance landscape, then recommend mitigation strategies.",
      },
      {
        q: "Can you help us prepare for regulatory inspections?",
        a: "Yes. We conduct pre-inspection readiness reviews, identify compliance gaps, and help remediate issues before any regulatory examination.",
      },
      {
        q: "Is this relevant for mid-size companies?",
        a: "Absolutely. Mid-size companies face growing regulatory scrutiny, and proactive risk management protects against penalties, fraud, and operational disruptions.",
      },
    ],
  },
  {
    title: "Startup Advisory",
    slug: "startup-advisory",
    intro:
      "End-to-end advisory services for startups including business structuring, incorporation, fundraising support, investor readiness, ESOP design, and regulatory setup.",
    provide: [
      "Business Structuring",
      "Company Incorporation",
      "Fundraising Support",
      "Investor Readiness",
      "ESOP Design",
      "Regulatory Setup",
    ],
    process: [
      "Understand founder vision and business model",
      "Advise on optimal entity structure",
      "Complete incorporation and regulatory registrations",
      "Prepare investor-ready financial documentation",
      "Design ESOP frameworks and compliance systems",
      "Provide ongoing advisory through growth stages",
    ],
    benefits: [
      "Right entity structure from day one",
      "Faster fundraising readiness",
      "Clean cap table and governance",
      "Regulatory compliance from inception",
      "Scalable financial systems",
    ],
    faqs: [
      {
        q: "At what stage should a startup engage your firm?",
        a: "Ideally before incorporation. Early engagement ensures optimal entity structuring, founder agreements, and tax-efficient setups that save significant costs downstream.",
      },
      {
        q: "Can you help with fundraising documentation?",
        a: "Yes. We prepare investor-ready financials, projections, cap table management, due diligence documentation, and support term sheet negotiations.",
      },
      {
        q: "Do you design ESOP plans?",
        a: "Yes. We design, structure, and implement ESOP frameworks that attract talent while maintaining tax efficiency and regulatory compliance.",
      },
      {
        q: "What regulatory registrations do startups need?",
        a: "Depending on your business, this includes company incorporation, PAN, TAN, GST, Startup India recognition, MSME registration, and industry-specific licenses.",
      },
    ],
  },
  {
    title: "Virtual CFO Services",
    slug: "virtual-cfo",
    intro:
      "Strategic financial leadership without the overhead of a full-time CFO. Our Virtual CFO services provide board-level financial planning, reporting, and treasury management.",
    provide: [
      "Strategic Financial Planning",
      "Board Reporting",
      "MIS Reporting",
      "Cash Flow Management",
      "Treasury Management",
      "Financial Forecasting",
    ],
    process: [
      "Assess current financial infrastructure",
      "Define reporting frameworks and KPIs",
      "Implement financial planning systems",
      "Deliver periodic board and MIS reports",
      "Manage treasury and cash flow optimization",
      "Provide strategic financial leadership",
    ],
    benefits: [
      "C-suite financial expertise on demand",
      "Reduced overhead vs. full-time CFO",
      "Better cash flow management",
      "Investor and board confidence",
      "Scalable financial leadership",
    ],
    faqs: [
      {
        q: "What does a Virtual CFO do?",
        a: "A Virtual CFO provides strategic financial leadership including financial planning, board reporting, cash flow management, treasury operations, and investor relations — without full-time overhead.",
      },
      {
        q: "Is this suitable for growing businesses?",
        a: "Absolutely. Growing businesses benefit most from Virtual CFO services as they need strategic financial guidance but may not require a full-time CFO.",
      },
      {
        q: "How often will the Virtual CFO engage with our team?",
        a: "Engagement frequency is customized — typically weekly or bi-weekly reviews with monthly board reporting and real-time availability for critical financial decisions.",
      },
      {
        q: "Can you manage our investor reporting?",
        a: "Yes. We handle complete investor reporting including MIS, financial dashboards, variance analysis, and periodic investor communications.",
      },
    ],
  },
  {
    title: "Financial Advisory",
    slug: "financial-advisory",
    intro:
      "Comprehensive financial advisory services including business valuations, transaction advisory, restructuring, and strategic financial consulting for growth-focused businesses.",
    provide: [
      "Business Valuation",
      "Transaction Advisory",
      "Financial Restructuring",
      "Strategic Consulting",
      "Wealth Advisory",
    ],
    process: [
      "Understand business objectives and financial position",
      "Conduct financial analysis and market assessment",
      "Develop strategic recommendations",
      "Support implementation and execution",
      "Monitor outcomes and refine strategy",
    ],
    benefits: [
      "Informed strategic decisions",
      "Optimized business value",
      "Successful transaction execution",
      "Sustainable financial growth",
    ],
    faqs: [
      {
        q: "When should a business seek financial advisory?",
        a: "During fundraising, mergers, acquisitions, business restructuring, succession planning, or any major financial decision that impacts long-term value.",
      },
      {
        q: "Do you provide business valuation services?",
        a: "Yes. We provide detailed business valuations for fundraising, M&A transactions, partner buyouts, estate planning, and regulatory compliance purposes.",
      },
      {
        q: "Can you support merger and acquisition transactions?",
        a: "Yes. Our transaction advisory covers financial due diligence, valuation, deal structuring, and post-merger integration support.",
      },
    ],
  },
  {
    title: "Business Consultancy",
    slug: "business-consultancy",
    intro:
      "Practical, results-driven advisory for business setup, expansion, profitability improvement, process optimization, and compliance-led growth strategies.",
    provide: [
      "Business Model Review",
      "Process Improvement",
      "Profitability Analysis",
      "Strategic Compliance Advisory",
      "Growth Strategy",
    ],
    process: [
      "Diagnose current business state",
      "Identify bottlenecks and improvement areas",
      "Prioritize high-impact improvements",
      "Build actionable implementation roadmap",
      "Review and refine execution outcomes",
    ],
    benefits: [
      "Sharper business strategy",
      "Reduced revenue leakage",
      "Improved profit margins",
      "Scalable operating discipline",
    ],
    faqs: [
      {
        q: "What kind of businesses do you consult for?",
        a: "We work with startups, SMEs, manufacturing businesses, service companies, and established enterprises seeking growth, efficiency, or restructuring support.",
      },
      {
        q: "How is business consultancy different from financial advisory?",
        a: "Business consultancy focuses on operational improvements, process optimization, and growth strategy, while financial advisory focuses on valuations, transactions, and financial structuring.",
      },
      {
        q: "Do you help with business expansion planning?",
        a: "Yes. We provide market analysis, financial projections, regulatory guidance, and operational planning for businesses looking to expand into new markets or segments.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// International Services
// ---------------------------------------------------------------------------

export const internationalCountries: string[] = [
  "United States",
  "Netherlands",
  "Spain",
  "Poland",
  "Germany",
];

export const internationalServices: InternationalService[] = [
  {
    title: "Cross-Border Tax Planning",
    description:
      "International tax structuring, treaty optimization, and compliance support.",
    slug: "cross-border-tax",
  },
  {
    title: "Global Regulatory Compliance",
    description:
      "Guidance on international regulations and reporting frameworks.",
    slug: "global-compliance",
  },
  {
    title: "IFRS & GAAP Conversions",
    description:
      "Financial reporting transition and compliance support.",
    slug: "ifrs-gaap",
  },
  {
    title: "Foreign Entity Incorporation",
    description:
      "Complete support for overseas business setup and regulatory compliance.",
    slug: "foreign-entity",
  },
];

export const internationalExpertise: string =
  "We provide international accounting, tax, and regulatory advisory services for businesses and high-net-worth individuals operating across multiple jurisdictions.";

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------

export const industries: Industry[] = [
  {
    name: "Manufacturing",
    description:
      "Cost audits, production-linked compliance, operational advisory.",
    icon: "Factory",
  },
  {
    name: "Hospitality",
    description: "Hotels, restaurants, and hospitality chains.",
    icon: "Hotel",
  },
  {
    name: "Real Estate",
    description: "RERA compliance, project finance, and GST advisory.",
    icon: "Building",
  },
  {
    name: "Retail & FMCG",
    description:
      "Inventory audits, profitability analysis, and tax optimization.",
    icon: "ShoppingCart",
  },
  {
    name: "Healthcare",
    description:
      "Hospital compliance, medical device taxation, and advisory services.",
    icon: "Heart",
  },
  {
    name: "Financial Services",
    description:
      "NBFC compliance, RBI reporting, and wealth structuring.",
    icon: "Landmark",
  },
];

// ---------------------------------------------------------------------------
// Leader
// ---------------------------------------------------------------------------

export const leader: Leader = {
  name: "CA Rohit Aggarwal",
  suffix: "FCA",
  role: "Managing Partner",
  qualification: "Fellow Chartered Accountant (FCA)",
  experience: "10+ years",
  bio: "A Fellow Chartered Accountant with 10+ years of experience across audit, taxation, and corporate advisory. CA Rohit Aggarwal leads the firm with a commitment to delivering Big 4-quality advisory with the personal attention of a trusted partner.",
  expertise: [
    "Audit",
    "Taxation",
    "Corporate Advisory",
    "GST Compliance",
    "Financial Reporting",
  ],
  achievements: [
    "Fellow Member of ICAI",
    "10+ Years of Experience",
    "Expertise in Audit, Taxation & Corporate Advisory",
    "Trusted by Listed Companies, PE-backed Businesses, and High-Growth Startups",
  ],
  highlights: [
    "Fellow Member of ICAI",
    "10+ Years of Experience",
    "Expertise in Audit, Taxation & Corporate Advisory",
    "Trusted by Listed Companies, PE-backed Businesses, and High-Growth Startups",
  ],
  message:
    "At Rohit Aggarwal & Company., every client receives the depth of expertise, the rigor of a global firm, and the commitment of a trusted partner. We do not just advise—we stand beside our clients through every critical financial decision.",
};

// ---------------------------------------------------------------------------
// Team Members
// ---------------------------------------------------------------------------

export const teamMembers: TeamMember[] = [
  {
    name: "CA Himanshu Sharma",
    suffix: "FCA,",
    role: "Partner",
    expertise: [
      "Direct Taxation",
      "Corporate Tax",
      "International Taxation",
      "Corporate Law",
      "FEMA & Foreign Exchange Regulations",
    ],
    industries: [],
  },
  {
    name: "CA Vivek Somani",
    suffix: "FCA",
    role: "Senior Manager",
    expertise: [
      "Foreign Taxation",
      "International Business Structuring",
      "Cross-Border Advisory",
      "Overseas Company Incorporation",
      "Global Tax Compliance",
    ],
    industries: [],
  },
  {
    name: "CA Bhawna",
    suffix: "FCA",
    role: "Manager",
    expertise: [
      "Audit & Assurance",
      "ROC Compliance",
      "Corporate Governance",
      "Internal Controls",
      "Regulatory Advisory",
    ],
    industries: [],
  },
];

// ---------------------------------------------------------------------------
// General FAQs
// ---------------------------------------------------------------------------

export const faqs: FAQ[] = [
  {
    q: "What services does Rohit Aggarwal & Company offer?",
    a: "We offer comprehensive services including audit & assurance, direct and indirect taxation, corporate compliance, financial advisory, startup advisory, virtual CFO services, risk management, and international tax advisory.",
  },
  {
    q: "Do you work with startups and SMEs?",
    a: "Yes. We actively support startups from incorporation through fundraising, and provide scalable compliance and advisory solutions for SMEs at every growth stage.",
  },
  {
    q: "Can you handle tax or GST notices?",
    a: "Absolutely. Our team reviews notices, prepares comprehensive replies, organizes documentation, and provides expert representation in assessment and appellate proceedings.",
  },
  {
    q: "Do you provide international tax advisory?",
    a: "Yes. We serve clients across the United States, Netherlands, Spain, Poland, and Germany with cross-border tax planning, IFRS/GAAP conversions, and global regulatory compliance.",
  },
  {
    q: "How do I book a consultation?",
    a: "You can reach us at +91 99538 64565 or email audit@carohitaggarwal.org.in. You can also fill out the contact form on our website for a prompt callback.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We serve Manufacturing, Hospitality, Real Estate, Retail & FMCG, Healthcare, and Financial Services sectors with industry-specific expertise and compliance support.",
  },
];
