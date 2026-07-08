import { useState } from "react";
import "./App.css";

const sections = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "articles", title: "Articles" },
  { id: "links", title: "Links" },
];

const projects = [
  {
    title: "Static Archive",
    description: `Distributed SaaS application designed to automate the new listings of hype listings across global marketplaces like Mercari.
Built machine learning pipeline for specifically trained on archival designers to act as a filter working on 85% of pieces.
Currently sitting on $20,000 worth of customer spending.`,
  },
  {
    title: "Dashmind",
    description: `A geometry dash python automation system using PyMem and OpenCV to detect gameplay states, and level/attempt starts.
Implemented a backtracking input-search algorithm to optimize timings and automate completion of difficult levels.`,
  },
  {
    title: "(O)inference",
    description: `Neural network inference optimization done with CUDA.`,
  },
  {
    title: "Hyperpad",
    description: `Functional embedded xbox controller for disabilities done on Arduino and C++.
No latency/fully wireless along with solving real world problem of disabled tactility.`,
  },
];

const sectionBodyClass = "mt-6 min-h-[12rem] w-full whitespace-pre-line text-center text-[2vh] sm:text-[2.1vh] md:text-[2.2vh] lg:text-[2.2vh]";
const sectionListClass = "m-0 list-none p-0";

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
          -translate-y-[205%]
          z-30
          transition-all 
          ${nameOpacityClass} 
          
          text-[5vh] 
          sm:text-[6vh]
          md:text-[7vh]
          lg:text-[8vh] 
          leading-none

          sm:-translate-x-[95%]
          sm:-translate-y-[205%]
          md:z-20
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
          -translate-y-[60%]
          z-20 
          transition-all 
          ${nameOpacityClass}

          sm:-translate-x-[25%]
          sm:-translate-y-[60%]
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

      <div className="fixed top-5 right-3 z-50 flex w-[calc(100vw-1.5rem)] flex-row items-center justify-end gap-x-4 whitespace-nowrap uppercase font-['Courier_New',_monospace] sm:right-4 sm:top-4 sm:w-[calc(100vw-2rem)] sm:gap-x-6 md:right-5 md:top-5 md:w-auto md:flex-col md:items-end md:gap-x-0 md:gap-y-2 lg:right-6 lg:top-6">
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
          <div className="flex h-[34vh] w-full max-w-3xl flex-col items-center justify-start">
            <h2 className="min-h-[1.5rem] text-[2.2vh] sm:text-[2.3vh] md:text-[2.4vh] lg:text-[2.4vh]">
              {isProjectDetail
                ? selectedProject.title
                : sections.find((s) => s.id === activeSection)?.title}
            </h2>

            {activeSection === "about" && (
              <div className={sectionBodyClass}>
                <p>
                  Hi I'm tian a third year student studying at the university of
                  Ottawa. I'm currently studying electrical engineering and computer science.
                  Apart from coding I really all types of different music, arts, and sports!
                  I am currently looking for summer 2027 internships. Feel free to reach out!
                </p>
              </div>
            )}

            {activeSection === "experience" && (
              <div className={sectionBodyClass}>
                <p>Qualcomm - AI Systems Software Engineer Intern</p>
                <p>
                  Building internal LLM devtools, multi-model orchestrators to replace manual workflows,
                  and custom RAGs with multi retrieval system for internal team documentation.
                </p>
                <br />
                <p>Qualcomm - Software Engineer Intern</p>
                <p>
                  Building python automation for software, firmware automation for SoC
                  and hardware dumps, and automated log and debug parsers.
                </p>
              </div>
            )}

            {activeSection === "projects" && (
              <div className={sectionBodyClass}>
                {isProjectDetail ? (
                  <>
                    <p>{selectedProject.description}</p>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="mt-6 cursor-pointer text-black opacity-65 transition-all duration-300 hover:opacity-100 hover:underline hover:decoration-1 hover:underline-offset-4"
                    >
                      back
                    </button>
                  </>
                ) : (
                  <ul className={sectionListClass}>
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
                )}
              </div>
            )}

            {activeSection === "articles" && (
              <div className={sectionBodyClass}>
                <ul className={sectionListClass}>
                  <li>multi model orchestration: how to reduce limits</li>
                  <li>memory vs cv for game test</li>
                </ul>
              </div>
            )}

            {activeSection === "links" && (
              <div className={sectionBodyClass}>
                <ul className={sectionListClass}>
                  <li>
                    <a href="https://github.com/tianli08">
                      https://github.com/tianli08
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/tianli181/">
                      https://www.linkedin.com/in/tianli181/
                    </a>
                  </li>
                  <li>tli181@uottawa.ca</li>
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
