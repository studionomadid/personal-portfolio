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

    category: "Digital Solutions & Technology",

    description:
      "A digital technology initiative focused on building structured digital products by combining software engineering, UI/UX design, system analysis, and technology strategy.",

    highlights: [
      "UI/UX design and digital experience development",
      "Modern web application development",
      "Digital product strategy",
      "Technology consulting and solution architecture",
    ],

    stack: [
      "Astro",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "GitHub",
    ],

    role: "Founder / Technology Strategist",

    status: "Personal Technology Initiative",

    type: "project",

    year: "2026",

    document: {
      label: "View Portfolio",
      path: "/portfolio/NOMAD.pdf",
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
        "A business and system transformation case study focused on analyzing an existing operational environment and translating business needs into a structured digital system concept.",

      problem:
        "The existing operational process involved fragmented information, manual workflows, and limited visibility into business and financial performance, making it difficult to monitor operations and support consistent decision-making.",

      context:
        "The project was approached from the perspective of business analysis and system design, with attention to operational workflows, financial conditions, information flow, data requirements, and the relationship between business activities and supporting technology.",

      approach:
        "The analysis began by understanding the existing business processes and identifying operational gaps. Business requirements were then structured into process flows, information requirements, financial considerations, and system components that could support future digital transformation.",

      solution:
        "The proposed solution translated the business requirements into a structured system concept supported by business process analysis, Data Flow Diagrams (DFD), system architecture planning, data analysis, and operational improvement strategies.",

      outcome:
        "The resulting analysis established a clearer model of the business operation and provided a structured foundation for future system development, reporting, process improvement, and technology-driven decision support.",
    },
  },
];