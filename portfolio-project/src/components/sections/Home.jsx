import { RevealOnScroll } from "../RevealOnScroll";
import { Github, Linkedin, Mail } from "lucide-react";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4 pt-24">
        <RevealOnScroll>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text leading-right text-transparent">
            Hey, I'm Connor Thaxton
          </h1>
          <p className="text-gray-400 text-m mb-8 max-w-lg mx-auto">
            I’m a software engineer who’s worked across a mix of tech stacks and
            loves tackling tough problems. I’m big on helping people and
            building things that actually make life easier. As a former college
            athlete, I love teamwork and new challenges. My experience has given
            me the chance to work directly with clients and find solutions that
            really make a difference.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
      hover:-translate-y-0.5 hover:shadow[0,0,15px_rgba(59,130,256,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#work-experience"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 font-medium transition-all duration-200 overflow-hidden 
      hover:-translate-y-0.5 hover:shadow[0,0,15px_rgba(59,130,256,0.2)] hover:bg-blue-500"
              >
                Work Experience
              </a>
            </div>

            <div className="flex justify-center space-x-6 mt-2">
              <a
                href="https://github.com/CThax12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
              </a>
              <a
                href="https://linkedin.com/in/connorthaxton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
              </a>
              <a href="mailto:cthax12@gmail.com">
                <Mail className="w-6 h-6 text-gray-400 hover:text-blue-400 transition" />
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
