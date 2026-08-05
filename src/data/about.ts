export interface AboutExpertise {
  title: string;
  description: string;
}

export interface About {
  title: string;
  introduction: string;
  expertise: AboutExpertise[];
  philosophy: string;
  direction: string;
  currentFocus: string;
}

export const about: About = {
  title: "Technology, Systems, Data, and Digital Experience",

  introduction:
    "A multidisciplinary technology professional working across software engineering, systems, data, and digital experience. Experienced in DevOps, data analysis, cybersecurity, UI/UX design, web development, and system transformation, with a focus on connecting technical implementation with business requirements and user needs. Builds structured, practical, and scalable digital solutions designed to solve real-world problems.",

  expertise: [
    {
      title: "Software Engineering",
      description:
        "Building modern digital systems, web applications, and technology solutions with maintainable architecture and practical development practices.",
    },
    {
      title: "Data Analytics",
      description:
        "Transforming operational and business data into structured insights through analysis, visualization, and decision-support solutions.",
    },
    {
      title: "Systems & DevOps",
      description:
        "Designing structured workflows, improving development and deployment processes, and supporting reliable systems through automation and modern engineering practices.",
    },
    {
      title: "UI/UX & Digital Experience",
      description:
        "Designing human-centered digital experiences by connecting user needs, business objectives, system capabilities, and visual communication.",
    },
  ],

  philosophy:
    "Technology should not only solve technical problems, but also create measurable value for people, businesses, and organizations.",

  direction:
    "Building at the intersection of software engineering, systems thinking, data intelligence, and digital transformation to create technology solutions that are useful, sustainable, and grounded in real-world needs.",

  currentFocus:
    "Currently exploring modern web technologies, AI-assisted development, data-driven solutions, system architecture, and scalable digital product development.",
};