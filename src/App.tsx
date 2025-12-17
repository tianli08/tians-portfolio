import { useState, useEffect } from "react";
import "./App.css";

const sections = [
  { id: "about", title: "about" },
  { id: "experience", title: "experience" },
  { id: "projects", title: "projects" },
  { id: "links", title: "links" },
];

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  // const [namePosition, setNamePosition] = useState({});

  // useEffect(() => {
  //   const randomTop = Math.floor(Math.random() * 30) + 30;
  //   const randomLeft = Math.floor(Math.random() * 30) + 35;

  //   setNamePosition({
  //     top: `${randomTop}%`,
  //     left: `${randomLeft}%`,
  //   });
  // }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection((prevSection) =>
      prevSection === sectionId ? null : sectionId
    );
  };

  const nameOpacityClass = activeSection === null ? "opacity-100" : "opacity-0";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all ${nameOpacityClass} text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold whitespace-nowrap`}
      >
        Tian Li
      </div>

      <div className="fixed top-8 right-8 uppercase z-50 flex flex-col items-end space-y-2">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`cursor-pointer transition-all duration-300 ${
              activeSection === section.id
                ? "text-grey-400 underline decoration-1 underline-offset-4"
                : "text-black opacity-65 hover:opacity-100 hover:underline hover:decoration-1 hover:underline-offset-4 transition-all"
            }`}
          >
            {section.title}
          </div>
        ))}
      </div>

      {activeSection !== null && (
        <div className="fixed inset-0 z-40 grid place-items-center px-6 text-center">
          <div className="max-w-3xl">
            <h2>{sections.find((s) => s.id === activeSection)?.title}</h2>

            {activeSection === "about" && (
              <div>
                <p>
                  Hi I'm tian a third year student studying at the university of
                  Ottawa.
                </p>
              </div>
            )}

            {activeSection === "experience" && (
              <div>
                <p>Qualcomm - Systems Software Engineer Intern</p>
                <ul className="">
                  <p>
                    Building internal LLM devtools, automation for software and
                    hardware validation, and automated log and debug parsers.
                  </p>
                </ul>
              </div>
            )}

            {activeSection === "projects" && (
              <div>
                <ul className="">
                  <li>cv geometry dash game automater</li>
                  <li>embedded xbox controller</li>
                </ul>
              </div>
            )}

            {activeSection === "links" && (
              <div>
                {/* <p>Connect with me:</p> */}
                <ul className="">
                  <p>
                    <a href="https://github.com/tianli08">
                      https://github.com/tianli08
                    </a>
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/in/tianli181/">
                      https://www.linkedin.com/in/tianli181/
                    </a>
                  </p>
                  <p>tli181@uottawa.ca</p>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
