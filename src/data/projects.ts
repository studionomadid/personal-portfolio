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
    title: "NOMAD Agency — Company Profile & Portfolio",

    category: "Freelance / Agency Portfolio",

    description:
      "A company profile and portfolio document presenting NOMAD Agency's capabilities, services, selected work, and approach to digital solutions, branding, technology, and creative production.",

    highlights: [
      "Company profile development",
      "Digital and technology services",
      "Branding and creative capabilities",
      "Portfolio and selected works",
      "Client-facing presentation",
      "Digital solution positioning",
    ],

    stack: [
      "Digital Strategy",
      "Branding",
      "UI/UX",
      "Web Development",
      "Creative Production",
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
  },
];