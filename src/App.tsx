import { useState } from "react";
import "./App.css";

const sections = [
  { id: "about", title: "about" },
  { id: "experience", title: "experience" },
  { id: "projects", title: "projects" },
  { id: "articles", title: "articles" },
  { id: "links", title: "links" },
];

const projects = [
  { title: "static archive", description: "Designed a live monitor that tracks hyped items, keep tracks of profitable items using machine learning on trained datasets to properly notify useful data. Currently sold out." },
  { title: "dashmind", description: "Built a Python automation system using PyMem and OpenCV to detect gameplay states, and level/attempt starts. Implemented a backtracking input-search algorithm to optimize timings and automate completion of difficult levels." },
  { title: "(O)inference", description: "Neural network inference optimization done with CUDA." },
  { title: "hyperpad", description: "Functional embedded xbox controller for disabilities done on Arduino and C++. No latency/fully wireless." },
];

const selectedProjectTitlePosition =
  "fixed left-1/2 top-[38%] -translate-x-1/2";

function App() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  const handleNavClick = (sectionId: string) => {
    setSelectedProject(null);
    setActiveSection((prevSection) =>
      prevSection === sectionId ? null : sectionId
    );
  };

  const nameOpacityClass = activeSection === null ? "opacity-100" : "opacity-0";
  const isProjectDetail =
    activeSection === "projects" && selectedProject !== null;

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div
        className={`
          absolute top-1/2 
          left-1/2 
          -translate-x-[95%]
          -translate-y-[65%]
          z-20 
          transition-all 
          ${nameOpacityClass} 
          
          text-[5vh] 
          sm:text-[6vh]
          md:text-[7vh]
          lg:text-[8vh] 
          leading-none

          sm:-translate-x-[95%]
          sm:-translate-y-[65%]
          md:-translate-x-[100%]
          md:-translate-y-[125%]
          lg:-translate-x-[100%]
          lg:-translate-y-[125%]

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
        src="photo2.png"
        className={`
          absolute top-1/2 
          left-1/2 
          -translate-x-[25%]
          -translate-y-[35%]
          z-20 
          transition-all 
          ${nameOpacityClass}

          sm:-translate-x-[25%]
          sm:-translate-y-[35%]
          md:-translate-x-[25%]
          md:-translate-y-[45%]
          lg:-translate-x-[25%]
          lg:-translate-y-[45%]

          h-[60vh] 
          sm:h-[70vh] 
          md:h-[90vh]
          lg:h-[100vh] 

          w-auto 
          max-w-none 
          
        `}
        alt="Main Photo"
      />

      <div className="fixed top-3 right-3 sm:right-4 sm:top-4 md:right-5 md:top-5 lg:right-6 lg:top-6 uppercase z-50 flex flex-col items-end space-y-2 font-['Courier_New',_monospace]">
        {sections.map((section) => (
          <div
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`cursor-pointer transition-all duration-300
              text-[1.6vh] 
              sm:text-[1.7vh]
              md:text-[1.8vh]
              lg:text-[1.8vh] 
              ${
              activeSection === section.id
                ? "text-grey-400 underline decoration-1 underline-offset-4"
                : "text-black opacity-65 hover:opacity-100 hover:underline hover:decoration-1 hover:underline-offset-4 transition-all"
              }`
            }
          >
            {section.title}
          </div>
        ))}
      </div>

      {activeSection !== null && (
        <div className="fixed inset-0 z-40 grid place-items-center px-6 text-center font-['Courier_New',_monospace]">
          <div className="max-w-3xl">
            {isProjectDetail && (
              <div className={selectedProjectTitlePosition}>
                <p>{selectedProject.title}</p>
              </div>
            )}

            <h2>
              {isProjectDetail
                ? selectedProject.description
                : sections.find((s) => s.id === activeSection)?.title}
            </h2>
            {isProjectDetail && (
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="mt-2 cursor-pointer text-black opacity-65 transition-all duration-300 hover:opacity-100 hover:underline hover:decoration-1 hover:underline-offset-4"
              >
                back
              </button>
            )}

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
                {!isProjectDetail && (
                  <>
                    <br />
                  <ul>
                    {projects.map((project) => (
                      <li key={project.title}>
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="cursor-pointer text-black opacity-65 transition-all duration-300 hover:opacity-100 hover:underline hover:decoration-1 hover:underline-offset-4"
                        >
                          {project.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                  </>
                )}
              </div>
            )}

            {activeSection === "articles" && (
              <div>
                <br />
                <ul>
                  <li>multi model orchestration: how to reduce limits</li>
                  <li>memory vs cv for game test</li>
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
                    <a href="https://www.linkedin.com/in/tianli181/"
                    className="text-[2.5vw] sm:text-base">
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
