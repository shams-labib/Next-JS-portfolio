"use client";

import React, { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* -------------------- DATA -------------------- */
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

/* -------------------- CARD -------------------- */
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const hoverTl = gsap.timeline({ paused: true });
    hoverTl.to(card, {
      y: -8,
      scale: 1.03,
      duration: 0.35,
      ease: "power3.out",
    });

    const enter = () => hoverTl.play();
    const leave = () => hoverTl.reverse();

    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);

    return () => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="project-card relative rounded-2xl bg-[#0b0b0f] border border-white/10 overflow-hidden will-change-transform"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>

        <p className="text-sm text-gray-400 line-clamp-2">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center px-5 py-4 border-t border-white/10 bg-black/40 backdrop-blur">
        <a
          href={project.demo}
          target="_blank"
          className="text-sm flex items-center gap-1 text-purple-400 hover:text-purple-300"
        >
          <ExternalLink size={16} /> Live
        </a>

        <a
          href={project.github}
          target="_blank"
          className="text-sm flex items-center gap-1 text-gray-400 hover:text-white"
        >
          <Github size={16} /> Code
        </a>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition shadow-[0_0_70px_-15px_rgba(168,85,247,0.6)]" />
    </div>
  );
};

/* -------------------- SECTION -------------------- */
const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      {
        opacity: 0,
        y: 80,
        scale: 0.95,
        filter: "blur(8px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 bg-gradient-to-br from-black via-[#12002b] to-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-14">
          Top Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
