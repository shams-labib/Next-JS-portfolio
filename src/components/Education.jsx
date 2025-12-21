"use client";

import React from "react";
import { BookOpen, Award, Verified, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Diploma in Computer Science",
    school: "Rangpur Ideal Institute Of Technology",
    year: "2022 - 2026",
    icon: <BookOpen className="w-6 h-6 text-yellow-400 animate-bounce" />,
    tags: ["Web Dev", "Programming", "CS"],
  },
  {
    degree: "Fullstack Web Development Certificate",
    school: "Programming Hero",
    year: "2025",
    icon: <Award className="w-6 h-6 text-yellow-400 animate-pulse" />,
    tags: ["Fullstack", "React", "Node.js"],
  },
  {
    degree: "React & Next.js Basic Course",
    school: "GP FUTURE ACADEMY",
    year: "2023",
    icon: <BookOpen className="w-6 h-6 text-yellow-400 animate-bounce" />,
    tags: ["React", "Next.js", "Frontend"],
  },
  {
    degree: "UI/UX Design Basic Idea",
    school: "My Self",
    year: "2023",
    icon: <Verified className="w-6 h-6 text-yellow-400 animate-pulse" />,
    tags: ["UI/UX", "Design", "Figma", "Picxo"],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-800 text-gray-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Education & Certificates
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col gap-3 hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {edu.icon}
                </motion.div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
              </div>
              <span className="text-gray-400">{edu.school}</span>
              <span className="text-gray-400">{edu.year}</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.tags.map((tag, i) => (
                  <motion.span
                    key={i}
                    className="badge badge-outline badge-primary cursor-pointer hover:bg-yellow-400 hover:text-black transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
