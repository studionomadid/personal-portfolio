export type ProjectType =
  | "project"
  | "freelance"
  | "case-study";

export interface ProjectDocument {
  label: string;
  path: string;
  type: "pdf";
}

export interface CaseStudy {
  overview: string;
  problem: string;
  context: string;
  approach: string;
  solution: string;
  outcome: string;
}

export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  role: string;
  status: string;
  type?: ProjectType;
  year?: string;
  client?: string;
  document?: ProjectDocument;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    title: "NOMAD Agency",

    category: "Digital Agency & Technology",

    description:
      "A digital agency initiative focused on creating handcrafted digital experiences across technology, design, strategy, and digital communication.",

    highlights: [
      "Digital strategy and campaign development",
      "Brand strategy and visual experience",
      "UI/UX and digital product development",
      "Web, app, CMS, e-commerce, and ERP development",
      "Database and digital system development",
      "Social media and digital campaign optimization",
    ],

    stack: [
      "Digital Strategy",
      "UI/UX",
      "Web Development",
      "App Development",
      "CMS",
      "Database",
      "Digital Campaign",
    ],

    role: "Founder / Technology Strategist",

    status: "Digital Agency Initiative",

    type: "project",

    year: "2026",

    document: {
      label: "View Portfolio",
      path: "/portfolio/NOMAD.pdf",
      type: "pdf",
    },
  },

  {
    title: "NOMAD Agency — Company Profile & Portfolio",

    category: "Freelance / Agency Portfolio",

    description:
      "A company profile and portfolio presenting NOMAD Agency's capabilities, methodology, supporting instruments, business processes, and selected approaches to digital transformation and organizational improvement.",

    highlights: [
      "Company profile and capability presentation",
      "Business process and workflow mapping",
      "Financial and operational analysis",
      "System and supporting instrument planning",
      "Proposal and deliverable framework development",
      "Client-facing strategic documentation",
    ],

    stack: [
      "Business Analysis",
      "Digital Strategy",
      "System Design",
      "Process Mapping",
      "Financial Analysis",
      "Documentation",
      "Strategic Planning",
    ],

    role: "Founder / Digital Technology Strategist",

    status: "Freelance / Agency Portfolio",

    type: "freelance",

    year: "2023",

    document: {
      label: "View Company Profile",
      path: "/portfolio/Nomad_COMPRO.pdf",
      type: "pdf",
    },
  },

  {
    title: "GN Central System — Business Transformation",

    category: "Business Analysis & System Design",

    description:
      "A business and system analysis case study focused on understanding operational workflows, financial conditions, information flow, and designing structured digital improvements.",

    highlights: [
      "Business process analysis",
      "Financial performance analysis",
      "Data Flow Diagram (DFD)",
      "System architecture planning",
      "Operational improvement strategy",
      "Decision support reporting",
    ],

    stack: [
      "Business Analysis",
      "Data Analysis",
      "System Design",
      "Documentation",
    ],

    role: "Business Analyst / System Designer",

    status: "System Analysis Case Study",

    type: "case-study",

    year: "2026",

    caseStudy: {
      overview:
        "A structured business and system analysis initiative designed to translate operational challenges into clearer processes, information flows, and technology requirements.",

      problem:
        "Operational activities, financial information, and business processes required clearer structure so that decision-making and system development could be based on consistent information.",

      context:
        "The initiative sits at the intersection of business operations, financial analysis, data flow, and digital system planning.",

      approach:
        "Analyzed business processes, mapped information flows, examined financial conditions, and translated findings into structured system requirements and improvement opportunities.",

      solution:
        "Developed a structured analysis framework covering business processes, data flows, system requirements, operational improvements, and decision-support needs.",

      outcome:
        "Created a clearer foundation for digital transformation by connecting business requirements with structured data, system design, and operational improvement strategies.",
    },
  },
];
