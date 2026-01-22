"use client";

import React, { useRef, useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP Plugin Register
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projectsData = [
  {
    name: "E-Shop By Typescript",
    description: "E-commerce Electronics shop with cart, checkout and details.",
    tech: ["React", "Express", "Firebase", "TailwindCSS"],
    image: "https://i.ibb.co.com/VWjt3YJ4/image.png",
    demo: "https://e-shop-by-next-js.vercel.app",
    github: "https://github.com/shams-labib/E-shop-by-Next-JS.git",
  },
  {
    name: "StyleDecor",
    description:
      "Modern booking system for home & ceremony decoration with payment checkout.",
    tech: ["React", "Stripe", "Node.js", "MongoDB"],
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
    demo: "https://foodiemart01.netlify.app",
    github: "https://github.com/shams-labib/A-10-Client.git",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 90%",
        },
      },
    );
  }, [index]);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.02,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.75)",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-xl bg-[#111] border border-white/10 overflow-hidden will-change-transform flex flex-col h-full"
      style={{ perspective: "1000px" }}
    >
      <div
        className="hidden md:block pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168,85,247,0.2), transparent 40%)`,
        }}
      />

      {/* Optimized Image Height for Mobile */}
      <div className="relative h-28 md:h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-10" />
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Reduced padding for Mobile */}
      <div className="p-3 md:p-6 space-y-2 flex-grow relative z-10">
        <h3 className="text-sm md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-1">
          {project.name}
        </h3>
        <p className="text-[10px] md:text-sm text-gray-400 line-clamp-2 leading-tight">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 md:gap-2">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="text-[8px] md:text-[11px] px-1.5 py-0.5 rounded-md bg-white/5 text-purple-300 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center px-3 md:px-6 py-3 border-t border-white/5 bg-white/[0.01]">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] md:text-xs font-bold uppercase tracking-wider flex items-center gap-1 text-purple-400 hover:text-purple-300"
        >
          <ExternalLink size={12} className="md:w-3.5" /> Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1.5 rounded-full bg-white/5 text-gray-400 hover:bg-purple-600 hover:text-white transition-all"
        >
          <Github size={14} className="md:w-4" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-12 md:py-20 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-20">
          <h2 className="text-3xl md:text-7xl font-black text-white tracking-tight mb-4">
            FEATURED{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
              PROJECTS
            </span>
          </h2>
          <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-purple-600 to-transparent rounded-full" />
        </div>

        {/* Mobile-friendly 2 column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {projectsData.map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
