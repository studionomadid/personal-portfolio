export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Software Engineering",
    items: [
      "Web and application development",
      "Digital system development",
      "Maintainable software architecture",
    ],
  },
  {
    name: "Systems, DevOps & Infrastructure",
    items: [
      "System architecture and technical workflows",
      "Development and deployment processes",
      "Automation and system reliability",
    ],
  },
  {
    name: "Data & Business Intelligence",
    items: [
      "Data analysis and interpretation",
      "Business and financial analysis",
      "Reporting and decision support",
    ],
  },
  {
    name: "Business & System Analysis",
    items: [
      "Business process analysis",
      "System analysis and process flows",
      "Operational improvement and structured solutions",
    ],
  },
  {
    name: "UI/UX & Digital Experience",
    items: [
      "UI/UX design and prototyping",
      "Digital product and website solutions",
      "Human-centered digital experience",
    ],
  },
];
