import { useState } from "react";
import { skillCategories } from "../data/skills";

const CategoryIcons = {
  "Software Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
    >
      <path d="M8.7 17.3 3.4 12l5.3-5.3 1.4 1.4L6.2 12l3.9 3.9-1.4 1.4ZM15.3 17.3l-1.4-1.4 3.9-3.9-3.9-3.9 1.4-1.4 5.3 5.3-5.3 5.3ZM13.1 4.7l1.9.5-4.1 14.1-1.9-.5 4.1-14.1Z" />
    </svg>
  ),

  "Systems, DevOps & Infrastructure": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
    >
      <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6ZM6 6v2h2V6H6Zm10 0v2h2V6h-2ZM6 16v2h2v-2H6Zm10 0v2h2v-2h-2ZM10 7h4v2h-4V7Zm0 8h4v2h-4v-2ZM7 10v4h2v-4H7Zm8 0v4h2v-4h-2Z" />
    </svg>
  ),

  "Data & Business Intelligence": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
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
      aria-hidden="true"
    >
      <path d="M4 3C2.895 3 2 3.895 2 5V19C2 20.105 2.895 21 4 21H20C21.105 21 22 20.105 22 19V5C22 3.895 21.105 3 20 3H4ZM4 5H20V19H4V5ZM6 8H10V10H6V8ZM12 8H18V10H12V8ZM6 12H8V14H6V12ZM10 12H18V14H10V12ZM6 16H12V18H6V16ZM14 16H18V18H14V16Z" />
    </svg>
  ),

  "UI/UX & Digital Experience": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 3a1 1 0 0 0-1 1v3H8a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setOpenItem((current) => (current === item ? null : item));
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>

      <ul className="space-y-4 mt-4 text-lg">
        {skillCategories.map((category) => (
          <li key={category.name} className="w-full">
            <div
              onClick={() => toggleItem(category.name)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[
                  category.name as keyof typeof CategoryIcons
                ]}

                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category.name}
                    </span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category.name ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z" />
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category.name
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center">
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