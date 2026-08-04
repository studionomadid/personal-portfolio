export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  role: string;
  status: string;
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

    role:
      "Founder / Technology Strategist",

    status:
      "Personal Technology Initiative",
  },


  {
    title:
      "GN Central System — Business Transformation",

    category:
      "Business Analysis & System Design",

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

    role:
      "Business Analyst / System Designer",

    status:
      "System Analysis Case Study",
  },
];