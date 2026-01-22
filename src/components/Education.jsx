"use client";

import React from "react";
import { BookOpen, Award, Verified } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Diploma in Computer Science",
    school: "Rangpur Ideal Institute Of Technology",
    year: "2022 - 2026",
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    tags: ["Web Dev", "Programming", "CS"],
  },
  {
    degree: "Fullstack Web Development",
    school: "Programming Hero",
    year: "2025",
    icon: <Award className="w-6 h-6 text-purple-400" />,
    tags: ["Fullstack", "React", "Node.js"],
  },
  {
    degree: "React & Next.js Basic Course",
    school: "GP FUTURE ACADEMY",
    year: "2023",
    icon: <BookOpen className="w-6 h-6 text-purple-400" />,
    tags: ["React", "Next.js", "Frontend"],
  },
  {
    degree: "UI/UX Design Basic Idea",
    school: "Self-Guided",
    year: "2023",
    icon: <Verified className="w-6 h-6 text-purple-400" />,
    tags: ["UI/UX", "Design", "Figma"],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      /* সলিড ব্যাকগ্রাউন্ড যাতে ওপরের সেকশনের সাথে মিলে যায় */
      className="relative py-16 md:py-24 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* BACKGROUND GLOWS - আপনার থিম অনুযায়ী */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase font-bold mb-3">
            Academic
          </p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Education & <span className="text-purple-600">Certificates</span>
          </h2>
          <div className="h-1.5 w-20 bg-purple-600 rounded-full mt-4" />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              /* কার্ড ডিজাইন যা প্রজেক্ট এবং স্কিল সেকশনের সাথে সামঞ্জস্যপূর্ণ */
              className="bg-white/[0.02] rounded-2xl p-6 border border-white/10 backdrop-blur-md hover:border-purple-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="space-y-4">
                <div className="p-3 bg-purple-500/10 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {edu.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{edu.school}</p>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-xs font-mono text-purple-500 bg-purple-500/10 px-2 py-1 rounded">
                  {edu.year}
                </span>

                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/5 text-gray-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
