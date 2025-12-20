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
      "https://media.istockphoto.com/id/1492645918/photo/survey-form-concept-businessman-using-laptops-do-online-checklist-surveys-questionnaire-with.jpg?s=612x612&w=0&k=20&c=lqbzWDBLxqRe99kOz2GwfWDRzkVduf2BvUzn1NBGh7Q=",
    demo: "#",
    github: "#",
  },
  {
    name: "E-Commerce Shop",
    description: "Online store with cart, checkout, and payment integration.",
    tech: ["React", "Express", "Stripe", "TailwindCSS"],
    image:
      "https://img.freepik.com/free-photo/black-friday-sales-sign-neon-light_23-2151833076.jpg?semt=ais_hybrid&w=740&q=80",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 text-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12 relative z-10"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 group bg-gray-800 duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />

              {/* Default info at bottom */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2">
                  <Code className="w-4 h-4 animate-pulse" />
                  {project.name}
                </h3>
                <p className="text-gray-300 text-sm md:text-base line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
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

              {/* Hover overlay for buttons */}
              <motion.div
                className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div className="flex gap-4" whileHover={{ scale: 1.05 }}>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    className="btn btn-primary btn-sm flex items-center gap-2 text-white hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4 animate-pulse" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    className="btn btn-outline btn-primary btn-sm flex items-center gap-2 text-white hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-4 h-4 animate-spin-slow" />
                    GitHub
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Neon border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 pointer-events-none animate-pulse"
                whileHover={{ opacity: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
