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

  const handleNavClick = (sectionId: string) => {
    setActiveSection((prevSection) =>
      prevSection === sectionId ? null : sectionId
    );
  };

  const nameOpacityClass = activeSection === null ? "opacity-100" : "opacity-0";

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className=
        {`
          absolute top-1/2 
          left-1/2 
          -translate-x-1/2 
          -translate-y-1/2 
          z-20 
          transition-all 
          ${nameOpacityClass} 
          
          /* 1. Sync Text Size to Image Height (using vh) */
          text-[4vh] 
          sm:text-[5vh]
          lg:text-[7vh] 
          leading-none

          /* 2. Sync Padding to Image Height (using vh) */
          pl-[12vh]
          sm:pl-[15vh]
          lg:pl-[22vh]

          font-medium 
          whitespace-nowrap
          font-['Courier_New',_monospace]
          `}
      >
        Tian
        <br />
        Li
      </div>
      <img
          src="photo.png"
          className={`
            absolute bottom-0 
            left-1/2 
            -translate-x-1/2 
            z-10 
            h-[80vh] 
            sm:h-[90vh] 
            lg:h-[115vh] 
            w-auto 
            max-w-none 
            ${nameOpacityClass}
          `}
          alt="Main Photo"
        />

      <div className="fixed top-8 right-8 uppercase z-50 flex flex-col items-end space-y-2 font-['Courier_New',_monospace]">
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
        <div className="fixed inset-0 z-40 grid place-items-center px-6 text-center font-['Courier_New',_monospace]">
          <div className="max-w-3xl">
            <h2>{sections.find((s) => s.id === activeSection)?.title}</h2>

            {activeSection === "about" && (
              <div>
                <br />
                <p>
                  Hi I'm tian a third year student studying at the university of
                  Ottawa.
                </p>
              </div>
            )}

            {activeSection === "experience" && (
              <div>
                <br />
                <p>Qualcomm - Systems Software Engineer Intern</p>
                <ul className="">
                  <p>
                    Building internal LLM devtools, python automation for
                    software and hardware validation, and automated log and
                    debug parsers.
                  </p>
                </ul>
              </div>
            )}

            {activeSection === "projects" && (
              <div>
                <br />
                <ul>
                  <li>cv geometry dash game automater</li>
                  <li>embedded xbox controller</li>
                  <li>67 neuro network detector</li>
                </ul>
              </div>
            )}

            {activeSection === "links" && (
              <div>
                <br />
                <ul>
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
