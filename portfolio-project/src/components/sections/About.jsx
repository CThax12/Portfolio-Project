import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const techStack = ["C#/.NET", "PHP", "Java", "SQL", "Python"];

  const skills = ["REST APIs", "WPF", "Linux", "Git", "Docker"];

  return (
    <section
      id="about"
      className="flex  min-h-screen items-center justify-center  py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2
            className="text-5xl font-bold mb-8
                bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            About Me
          </h2>
          <div className="p-8 rounded-2xl border border-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]">
            <p className="text-gray-300 mb-6">Put some info about me.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                <div className=" items-center justify-center flex flex-wrap gap-2">
                  {techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Skills / Tech</h3>
                <div className="flex flex-wrap gap-2 items-center justify-center">
                  {skills.map((skill, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div id="work-experience" className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]">
              <h3 className="text-xl font-bold mb-4 ">🎓 Education</h3>
              <ul className=" list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. Computer Science</strong> - Southwestern Oklahoma
                  Statue University (2023) 4.0 GPA
                </li>
              </ul >
            </div>
            <div  className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]">
              <h3 className="text-xl font-bold mb-4 ">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div className="">
                  <h4 className="font-semibold">
                    Software Engineer at Long Wave Inc. (2025-Present)
                  </h4>
                  <p>Stuff I did</p>
                  <h4 className="font-semibold">
                    Software Engineer at Paycom (2023-2025)
                  </h4>
                  <p>Stuff I did</p>
                  <h4 className="font-semibold">
                    Software Engineer at Cantina Capital LLC (2020-P2022)
                  </h4>
                  <p>Stuff I did</p>
                </div>
              </div>
            </div>
          </div>{" "}
        </RevealOnScroll>
      </div>
    </section>
  );
};
