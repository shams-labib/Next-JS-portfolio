import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-gray-900">
      {/* Overlay optional */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 px-4 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Hi, I'm <span className="text-yellow-400">Shams</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-300">
          Fullstack Developer creating modern and responsive web apps
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="btn btn-primary text-white">
            Hire Me
          </a>
          <a
            href="#projects"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-black"
          >
            My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
