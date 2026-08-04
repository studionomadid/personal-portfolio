export interface Project {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  status: string;
}

export const projects: Project[] = [
  {
    title: "NOMAD Agency",
    category: "Digital Solutions & Technology",
    description:
      "A digital solution initiative focused on creating structured technology products, combining UI/UX design, web development, system analysis, and digital strategy to help organizations transform ideas into practical digital experiences.",
    highlights: [
      "UI/UX design and digital experience development",
      "Modern web application development",
      "Digital product strategy",
      "Technology consulting and solution architecture",
    ],
    status: "Personal Technology Initiative",
  },
  {
    title: "GN Central System — Business Transformation",
    category: "Business Analysis & System Design",
    description:
      "A business and system analysis project focused on understanding operational workflows, financial conditions, information flow, and designing structured improvements through data analysis and system planning.",
    highlights: [
      "Business process analysis",
      "Financial performance analysis",
      "Data Flow Diagram (DFD)",
      "System architecture planning",
      "Operational improvement strategy",
      "Decision support reporting",
    ],
    status: "System Analysis Case Study",
  },
];