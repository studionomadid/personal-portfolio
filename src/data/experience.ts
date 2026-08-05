export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    company: "Nomadanalyst",
    role: "System & Tech Engineer",
    period: "March 2022 – Present",
    location: "Bandung, West Java, Indonesia",
    description:
      "Work across technology, data, and digital product development by combining system engineering, data analysis, UI/UX implementation, and modern development practices. Focus on designing structured solutions, improving workflows, and building digital experiences that connect business requirements with practical technology solutions.",
    current: true,
  },
  {
    company: "PT. Enak Unik Eksklusif",
    role: "BI Analyst",
    period: "September 2024 – May 2025",
    location: "Bandung, West Java, Indonesia",
    description:
      "Analyzed business performance data to generate insights for operational and strategic decision-making. Worked with reporting processes, data interpretation, and information management to transform business data into structured findings and actionable recommendations.",
  },
  {
    company: "Standard Chartered",
    role: "Security Analyst",
    period: "August 2021 – October 2023",
    location: "Singapore, Singapore",
    description:
      "Supported secure software development practices with a focus on application security, risk awareness, and digital banking environments. Collaborated with technical teams to incorporate security considerations throughout the software development lifecycle while supporting reliable and user-focused digital experiences.",
  },
  {
    company: "Illo's Hotel",
    role: "Web Designer",
    period: "October 2022 – January 2023",
    location: "Bandung, West Java, Indonesia",
    description:
      "Designed and developed responsive web interfaces using UI/UX principles, usability considerations, and modern web design practices. Created layouts, prototypes, and digital assets while supporting website maintenance, accessibility improvements, search optimization, and overall user experience.",
  },
  {
    company: "PT Bank Central Asia Tbk (BCA)",
    role: "Mobile Developer",
    period: "May 2022 – June 2022",
    location: "Jakarta, Indonesia",
    description:
      "Contributed to mobile application development by collaborating with designers, product teams, and engineers to create secure and user-friendly digital banking experiences. Focused on implementing functional interfaces, improving application usability, and supporting reliable mobile product development.",
  },
  {
    company: "TOV Bandung",
    role: "Fullstack Web Designer",
    period: "October 2019 – March 2022",
    location: "Bandung, West Java, Indonesia",
    description:
      "Worked across front-end development and UI/UX design to transform creative concepts into functional digital products. Designed user interfaces, developed responsive web solutions, and collaborated on websites that balanced visual quality, performance, usability, and practical business requirements.",
  },
  {
    company: "PT. DJARUM",
    role: "Project Manager",
    period: "August 2018 – April 2019",
    location: "Jakarta, Indonesia",
    description:
      "Managed technology-focused projects across planning, execution, communication, and delivery. Combined project management practices with technical understanding to coordinate development workflows and support digital initiatives aligned with business objectives.",
  },
  {
    company: "Atlassian",
    role: "Data Analyst",
    period: "April 2013 – October 2016",
    location: "New York, United States",
    description:
      "Worked with data analysis and large-scale information processing to identify patterns, generate insights, and support data-driven decision-making. Applied analytical approaches to complex datasets within a technology environment to improve business understanding and operational effectiveness.",
  },
];
