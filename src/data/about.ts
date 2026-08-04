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
  title: "Technology, Data, and Digital Innovation",

  introduction:
    "A multidisciplinary technology professional focused on building meaningful digital solutions through engineering, data, and design. Experienced across DevOps, data analysis, cybersecurity, UI/UX design, web development, and system transformation, with a focus on bridging technical implementation, business understanding, and user needs. Passionate about creating structured, scalable, and impactful digital experiences that connect technology with real-world problems.",

  expertise: [
    {
      title: "Software Engineering",
      description:
        "Building modern digital systems, web applications, and technology solutions with scalable architecture and maintainable development practices.",
    },
    {
      title: "Data Analytics",
      description:
        "Transforming operational data into meaningful insights through analysis, visualization, and structured decision-support solutions.",
    },
    {
      title: "DevOps & Infrastructure",
      description:
        "Improving development workflows, deployment processes, automation, and system reliability through modern engineering practices.",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing human-centered digital experiences by connecting user needs, business objectives, and technology capabilities.",
    },
  ],

  philosophy:
    "Technology should not only solve technical problems, but also create measurable value for people, businesses, and organizations.",

  direction:
    "Focused on exploring the intersection between software engineering, data intelligence, and digital transformation to build impactful technology solutions.",

  currentFocus:
    "Currently exploring modern web technologies, AI-assisted development, data-driven solutions, and scalable digital product architecture.",
};