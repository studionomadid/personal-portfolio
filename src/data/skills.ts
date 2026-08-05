export interface SkillCategory {
  name: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Data Analysis",
    items: [
      "Data analysis and interpretation",
      "Financial and business data",
      "Reporting and decision support",
    ],
  },
  {
    name: "Business & System Analysis",
    items: [
      "Business process analysis",
      "System analysis and process flows",
      "Business and operational improvement",
    ],
  },
  {
    name: "UI/UX & Digital Solutions",
    items: [
      "UI/UX design and prototyping",
      "Digital product and website solutions",
      "Technology-driven business solutions",
    ],
  },
];