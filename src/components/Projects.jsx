"use client";

import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
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

/* -------------------- INDIVIDUAL CARD -------------------- */
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Calculate rotation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(cardRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group project-card relative rounded-2xl bg-[#0f0f13] border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
      style={{ perspective: "1000px" }}
    >
      {/* 1. Dynamic Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168,85,247,0.15), transparent 40%)`,
        }}
      />

      {/* 2. Glass Shine Sweep */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
      </div>

      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent z-10" />
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition duration-700 scale-105 group-hover:scale-110 group-hover:rotate-1"
        />
        {/* Project Badge */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] text-white font-bold uppercase tracking-widest">
          Showcase
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 relative z-10">
        <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 group-hover:border-purple-500/30 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center px-6 py-5 border-t border-white/5 bg-white/[0.01] backdrop-blur-xl">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 text-purple-400 hover:text-white transition-all transform hover:translate-x-1"
        >
          <ExternalLink size={14} /> View Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          <Github size={18} />
        </a>
      </div>
    </div>
  );
};

/* -------------------- MAIN SECTION -------------------- */
const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 100, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-[#050505] selection:bg-purple-500/30"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
              LATEST <span className="text-purple-600">WORKS</span>
            </h2>
            <div className="h-1 w-20 bg-purple-600 rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
