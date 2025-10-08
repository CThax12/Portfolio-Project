export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] z-30 flex flex-col items-center justify-center
        transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }`}
    >
      <button
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none"
        onClick={() => setMenuOpen(false)}
        aria-label="Close Menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`font-2-xl font-semibold text-white my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 transition-y-5"
                }
                `}
      >
        Home
      </a>
      <a
        className={`font-2-xl font-semibold text-white my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 transition-y-5"
                }
                `}
        href="#about"
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        className={`font-2-xl font-semibold text-white my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 transition-y-5"
                }
                `}
        href="#projects"
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>
      <a
        className={`font-2-xl font-semibold text-white my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 transition-y-5"
                }
                `}
        href="#contact"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>
    </div>
  );
};
