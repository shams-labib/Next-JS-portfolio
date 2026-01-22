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
    icon: <Code className="w-5 h-5 text-purple-400" />,
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
    icon: <BookOpen className="w-5 h-5 text-purple-400" />,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      /* সলিড ব্যাকগ্রাউন্ড সেট করা হয়েছে যাতে অন্য সেকশনের সাথে বর্ডার না বোঝা যায় */
      className="relative py-16 md:py-24 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* বড় BACKGROUND GLOWS (অন্যান্য সেকশনের সাথে সামঞ্জস্য রেখে) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-600/5 blur-[100px] rounded-full" />
      </div>

      {/* ছোট Floating background shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-purple-400 opacity-10 rounded-full animate-pulse blur-3xl z-0"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-500 opacity-10 rounded-full animate-pulse blur-3xl z-0"></div>

      {/* Main Content Container - max-w-7xl ব্যবহার করা হয়েছে */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase font-bold mb-3">
            Journey
          </p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Experience & <span className="text-purple-600">Learning</span>
          </h2>
          <div className="h-1.5 w-20 bg-purple-600 rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 md:ml-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-12 ml-6 md:ml-12 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {/* Timeline Dot (এখন এটি গ্লো করবে) */}
              <div className="absolute -left-[33px] md:-left-[57px] top-1 w-6 h-6 rounded-full bg-[#0a0a0a] border-2 border-purple-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              </div>

              {/* Experience Card */}
              <div className="bg-white/[0.02] p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    {exp.icon || <Briefcase size={20} />}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm md:text-base mt-1">
                      {exp.company} •{" "}
                      <span className="text-gray-500">{exp.duration}</span>
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-3">
                  {exp.responsibilities.map((res, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-400 text-sm md:text-base leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
