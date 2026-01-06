"use client";

import React, { useEffect, useRef } from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// GLOBAL SMOOTH DEFAULTS
gsap.defaults({
  ease: "power4.out",
  duration: 1,
});

ScrollTrigger.config({
  ignoreMobileResize: true,
});

const projects = [
  {
    name: "StyleDecor",
    description:
      "Modern booking system for home & ceremony decoration with payment checkout.",
    tech: ["React", "Stripe", "Node.js", "MongoDB", "TailwindCSS"],
    image: "https://i.ibb.co/qvsD6jN/toa-heftiba-GHIL2-Yy-Oh-Dg-unsplash.jpg",
    demo: "https://assignment-11-f293d.web.app",
    github: "https://github.com/shams-labib/Assignment-11-cllient.git",
  },
  {
    name: "Foodie Mart",
    description:
      "A full-featured food shop management app with authentication.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://i.ibb.co.com/twt2tWcr/image.png",
    demo: "https://assignemnt-10-8c38a.web.app",
    github: "https://github.com/shams-labib/A-10-Client.git",
  },
  {
    name: "Toy Topia",
    description: "Online toy shop with cart, checkout and details.",
    tech: ["React", "Express", "Firebase", "TailwindCSS"],
    image: "https://i.ibb.co.com/1ffmVxVt/image.png",
    demo: "https://toytopiamarket.netlify.app",
    github: "https://github.com/shams-labib/A9-public.git",
  },
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SECTION TITLE
      gsap.from(".projects-title", {
        y: 60,
        opacity: 0,
        duration: 1.3,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // PROJECT CARDS
      gsap.from(cardsRef.current, {
        y: 90,
        opacity: 0,
        scale: 0.95,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-[#0a0a0a] via-[#1b003d] to-[#0a0a0a] text-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-20">
        {/* TITLE */}
        <h2 className="projects-title text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12">
          My Projects
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md shadow-xl group border border-white/10
              will-change-transform transition-transform duration-500 hover:-translate-y-3"
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover will-change-transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* INFO */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-400 text-black px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/70 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="btn btn-primary btn-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn btn-outline btn-primary btn-sm flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* NEON BORDER */}
              <div className="absolute inset-0 rounded-2xl border-2 border-purple-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
