"use client";

import React from "react";
import { Code, Server, Terminal, Zap, Database } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TailwindCSS", level: 95 },
    { name: "DaisyUI", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "REST API", level: 90 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 80 },
    { name: "Figma", level: 75 },
  ],
};

const Skill = () => {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gray-900 text-gray-100 overflow-hidden"
    >
      {/* Floating background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 opacity-10 rounded-full animate-pulse blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 opacity-10 rounded-full animate-pulse blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {Object.entries(skillsData).map(([category, skills], idx) => {
            const Icon =
              category === "frontend"
                ? Code
                : category === "backend"
                ? Server
                : Terminal;

            return (
              <motion.div
                key={idx}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="flex items-center mb-4 space-x-2">
                  <Icon className="w-6 h-6 text-yellow-400 animate-pulse hover:animate-spin" />
                  <h3 className="text-2xl font-semibold capitalize">
                    {category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 rounded-full">
                        <motion.div
                          className="bg-yellow-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2 }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
