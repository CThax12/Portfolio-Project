import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <h2
            className="text-5xl font-bold mb-8
                bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_12px_rgba(59,130,246,0.3)]">
              <h3 className="text-xl font-bold mb-2">
                Robinhood Portfolio Tracker
              </h3>
              <p className="text-gray-400 mb-4">Describe it.</p>
              <div>
                {["Python"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
