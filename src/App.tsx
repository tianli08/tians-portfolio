import { useState, useEffect } from "react";
import "./App.css";

const sections = [
  { id: "about", title: "about me" },
  { id: "experience", title: "experience" },
  { id: "projects", title: "projects" },
  { id: "links", title: "links" },
];

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [namePosition, setNamePosition] = useState({});

  useEffect(() => {
    const randomTop = Math.floor(Math.random() * 60) + 20;
    const randomLeft = Math.floor(Math.random() * 60) + 20;

    setNamePosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection((prevSection) =>
      prevSection === sectionId ? null : sectionId
    );
  };

  const nameOpacityClass = activeSection === null ? "opacity-100" : "opacity-0";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className={`absolute transition-all duration-500 ${nameOpacityClass} -translate-x-1/2 -translate-y-1/2 text-9xl font-bold whitespace-nowrap`}
        // This line actually applies the random position from your useEffect
        style={namePosition}
      >
        Tian Li
      </div>

      <div
        className={`fixed top-8 right-8 uppercase transition-opacity duration-500 ${
          activeSection === null
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`cursor-pointer ${
              activeSection === section.id ? "" : ""
            }`}
          >
            {section.title}
          </div>
        ))}
      </div>

      {activeSection !== null && (
        <div className="contentSection">
          <div>
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
                <p>Connect with me:</p>
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
