export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  status: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "NOMAD Agency",
    category: "Digital Solutions & Technology",

    description:
      "A digital technology initiative focused on building structured digital products by combining UI/UX design, web development, system analysis, and technology strategy to transform ideas into practical digital experiences.",

    highlights: [
      "UI/UX design and digital experience development",
      "Modern web application development",
      "Digital product strategy",
      "Technology consulting and solution architecture",
    ],

    technologies: [
      "Astro",
      "React",
      "TypeScript",
      "UI/UX Design",
      "System Architecture",
    ],

    status: "Personal Technology Initiative",

    github:
      "https://github.com/studionomadid",
  },

  {
    title: "GN Central System — Business Transformation",

    category:
      "Business Analysis & System Design",

    description:
      "A business and system analysis case study focused on understanding operational workflows, financial conditions, information flow, and designing structured improvements through data analysis and system planning.",

    highlights: [
      "Business process analysis",
      "Financial performance analysis",
      "Data Flow Diagram (DFD)",
      "System architecture planning",
      "Operational improvement strategy",
      "Decision support reporting",
    ],

    technologies: [
      "Business Intelligence",
      "Data Analysis",
      "System Analysis",
      "Process Modeling",
      "Reporting",
    ],

    status:
      "System Analysis Case Study",
  },
];