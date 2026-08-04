import { useState } from "react";

const CategoryIcons = {
  "Data Analysis": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M5 20V10H8V20H5ZM10.5 20V4H13.5V20H10.5ZM16 20V7H19V20H16Z" />
    </svg>
  ),

  "Business & System Analysis": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 3C2.89543 3 2 3.89543 2 5V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V5C22 3.89543 21.1046 3 20 3H4ZM4 5H20V19H4V5ZM6 8H10V10H6V8ZM12 8H18V10H12V8ZM6 12H8V14H6V12ZM10 12H18V14H10V12ZM6 16H12V18H6V16ZM14 16H18V18H14V16Z" />
    </svg>
  ),

  "UI/UX & Digital Solutions": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 4C16.418 4 20 7.582 20 12C20 13.85 19.372 15.553 18.32 16.904L15.707 14.293L14.293 15.707L16.904 18.32C15.553 19.372 13.85 20 12 20C7.582 20 4 16.418 4 12C4 10.15 4.628 8.447 5.68 7.096L8.293 9.707L9.707 8.293L7.096 5.68C8.447 4.628 10.15 4 12 4ZM12 7C11.448 7 11 7.448 11 8V11H8C7.448 11 7 11.448 7 12C7 12.552 7.448 13 8 13H12C12.552 13 13 12.552 13 12V8C13 7.448 12.552 7 12 7Z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Data Analysis": [
      "Data analysis and interpretation",
      "Financial and business data",
      "Reporting and decision support",
    ],

    "Business & System Analysis": [
      "Business process analysis",
      "System analysis and process flows",
      "Business and operational improvement",
    ],

    "UI/UX & Digital Solutions": [
      "UI/UX design and prototyping",
      "Digital product and website solutions",
      "Technology-driven business solutions",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {
                  CategoryIcons[
                    category as keyof typeof CategoryIcons
                  ]
                }

                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <span className="pl-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
