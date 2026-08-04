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
    "A technology-focused professional passionate about building digital experiences, analyzing complex systems, and creating solutions that combine engineering, data, and human-centered thinking.",

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