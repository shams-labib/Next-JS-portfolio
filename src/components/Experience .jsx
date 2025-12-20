"use client";

import React from "react";
import { Briefcase, Code, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Fullstack Developer (Learning Projects)",
    company: "Self-Learning",
    duration: "2025 - Present",
    responsibilities: [
      "Building responsive web apps with React & Next.js",
      "Creating REST APIs using Node.js & Express",
      "Integrating MongoDB for database management",
      "Practicing TailwindCSS & modern UI design",
    ],
    icon: <Code className="w-5 h-5 text-yellow-400" />,
  },
  {
    role: "Frontend Developer (Mini Projects)",
    company: "Personal Projects",
    duration: "2024 - 2025",
    responsibilities: [
      "Designed multiple static & dynamic websites",
      "Implemented animations with Tailwind & Framer Motion",
      "Focused on responsive and clean UI/UX",
    ],
    icon: <BookOpen className="w-5 h-5 text-yellow-400" />,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 md:px-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience & Learning
        </motion.h2>

        <div className="relative border-l-2 border-yellow-400 ml-4 md:ml-20">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-10 ml-6 md:ml-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-6 top-0 w-5 h-5 rounded-full bg-yellow-400 animate-pulse border-2 border-gray-900 flex items-center justify-center">
                <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              </div>

              {/* Icon & Role */}
              <div className="flex items-center gap-2 mb-2 text-white">
                {exp.icon ? (
                  exp.icon
                ) : (
                  <Briefcase className="w-5 h-5 text-yellow-400" />
                )}
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
              </div>

              {/* Company & Duration */}
              <span className="text-gray-400 text-sm">
                {exp.company} | {exp.duration}
              </span>

              {/* Responsibilities */}
              <motion.ul
                className="mt-2 list-disc list-inside text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
