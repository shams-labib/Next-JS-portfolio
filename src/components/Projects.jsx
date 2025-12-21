"use client";

import React from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "StyleDecor",
    description: "Modern booking system for home & ceremony decoration.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    image: "https://i.ibb.co/qvsD6jN/toa-heftiba-GHIL2-Yy-Oh-Dg-unsplash.jpg",
    demo: "#",
    github: "#",
  },
  {
    name: "Task Manager",
    description: "A full-featured task management app with authentication.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    image:
      "https://media.istockphoto.com/id/1492645918/photo/survey-form-concept-businessman-using-laptops-do-online-checklist-surveys-questionnaire-with.jpg",
    demo: "#",
    github: "#",
  },
  {
    name: "E-Commerce Shop",
    description: "Online store with cart, checkout, and payment integration.",
    tech: ["React", "Express", "Stripe", "TailwindCSS"],
    image:
      "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg",
    demo: "#",
    github: "#",
  },
];

/* Animation Variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-20">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
        >
          My Projects
        </motion.h2>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8 }}
              className="relative rounded-2xl overflow-hidden bg-gray-800 shadow-xl group"
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
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
                      className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/70 flex justify-center items-center"
              >
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
              </motion.div>

              {/* Neon Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
