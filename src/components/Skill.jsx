"use client";

import React from "react";
import { Code, Server, Terminal } from "lucide-react";
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
      /* Background matches exactly with the Projects section above */
      className="relative py-16 md:py-24 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* BACKGROUND GLOWS (Your requested style) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[130px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/5 blur-[100px] rounded-full" />
      </div>

      {/* Small Floating background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 opacity-10 rounded-full animate-pulse blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 opacity-10 rounded-full animate-pulse blur-3xl z-0"></div>

      {/* Main Content Container - set to max-w-7xl for perfect alignment */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header - Styled like About/Projects */}
        <div className="mb-10 md:mb-16">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase font-bold mb-3">
            Expertise
          </p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Skills & <span className="text-purple-600">Knowledge</span>
          </h2>
          <div className="h-1.5 w-20 bg-purple-600 rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
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
                /* Card design aligned with ProjectCard style */
                className="bg-white/[0.02] p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group shadow-xl"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex items-center mb-6 space-x-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold capitalize text-white tracking-wide">
                    {category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-gray-400">
                        <span className="text-xs md:text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[10px] md:text-xs text-purple-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          className="bg-purple-600 h-full rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
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
