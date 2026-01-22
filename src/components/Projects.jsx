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
    image: "https://i.ibb.com/1ffmVxVt/image.png",
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

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20; // একটু স্মুথ করা হয়েছে
    const rotateY = (centerX - x) / 20;

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
      /* কার্ডের ব্যাকগ্রাউন্ড কালার সেকশনের সাথে ম্যাচ করা হয়েছে */
      className="group project-card relative rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
      style={{ perspective: "1000px" }}
    >
      {/* Interactive Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168,85,247,0.15), transparent 40%)`,
        }}
      />

      {/* Image Container */}
      <div className="relative h-32 md:h-56 overflow-hidden">
        {/* ব্লেন্ডিং এর জন্য গ্রাডিয়েন্ট মাস্ক */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition duration-700 scale-105 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full text-[8px] md:text-[10px] text-white font-bold uppercase tracking-widest">
          Project
        </div>
      </div>

      {/* Content */}
      <div className="p-3 md:p-6 space-y-2 md:space-y-4 relative z-10">
        <h3 className="text-sm md:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-[10px] md:text-sm text-gray-400 leading-tight md:leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 md:gap-2 pt-1">
          {project.tech.slice(0, 3).map((t, i) => (
            <span
              key={i}
              className="text-[8px] md:text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-purple-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center px-3 md:px-6 py-3 md:py-5 border-t border-white/5 bg-white/[0.02]">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] md:text-xs font-bold uppercase tracking-widest flex items-center gap-1 md:gap-2 text-purple-400 hover:text-white transition-all"
        >
          <ExternalLink size={12} /> Live
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 md:p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-purple-500/20 transition-all"
        >
          <Github size={14} />
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
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      /* About Me এর নিচের অংশের সাথে মিল রেখে bg-[#0a0a0a] */
      className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Glows for Consistency */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] bg-fuchsia-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <div className="space-y-4 mb-10 md:mb-16">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase font-bold">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter">
            LATEST <span className="text-purple-600">WORKS</span>
          </h2>
          <div className="h-1.5 w-20 bg-purple-600 rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {projectsData.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
