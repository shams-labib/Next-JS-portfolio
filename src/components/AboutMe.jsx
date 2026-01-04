"use client";

import { motion } from "framer-motion";
import { Code, Layers, GraduationCap, Rocket } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="
        relative
        bg-[#0a0a0a]
        overflow-hidden
        py-24
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-blue-400/5 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest text-purple-400 uppercase">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Who I Am
          </h2>
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300/80 leading-relaxed"
          >
            <p>
              I am a{" "}
              <span className="text-purple-400 font-semibold">
                Full-Stack Web Developer
              </span>{" "}
              with around{" "}
              <span className="text-white font-semibold">
                1 year of consistent learning and hands-on practice
              </span>
              . During this journey, I’ve built a strong foundation in both
              frontend and backend development.
            </p>

            <p>
              I have completed{" "}
              <span className="text-white font-semibold">
                10–12 real-world projects
              </span>
              , where I worked with modern UI design, responsive layouts,
              authentication systems, APIs, and scalable application structures.
            </p>

            <p>
              Currently, I am pursuing a{" "}
              <span className="text-purple-400 font-semibold">
                Diploma in Computer Science & Technology (CST)
              </span>
              , which helps strengthen my programming fundamentals and software
              development concepts.
            </p>

            <p>
              My goal is to become a{" "}
              <span className="text-white font-semibold">
                reliable, skilled, and impact-driven developer
              </span>
              by continuously learning new technologies and building
              production-ready applications.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {/* CARD 1 */}
            <div className="p-6 rounded-2xl bg-[#111] border border-purple-400/20 shadow-lg hover:shadow-purple-500/20 transition">
              <Code className="text-purple-400 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-1">Frontend</h3>
              <p className="text-sm text-gray-400">
                React, Next.js, Tailwind, UI/UX focused design
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 rounded-2xl bg-[#111] border border-pink-400/20 shadow-lg hover:shadow-pink-500/20 transition">
              <Layers className="text-pink-400 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-1">Backend</h3>
              <p className="text-sm text-gray-400">
                APIs, Authentication, CRUD, Database logic
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 rounded-2xl bg-[#111] border border-blue-400/20 shadow-lg hover:shadow-blue-500/20 transition">
              <GraduationCap className="text-blue-400 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-1">Education</h3>
              <p className="text-sm text-gray-400">
                Diploma in Computer Science & Technology (CST)
              </p>
            </div>

            {/* CARD 4 */}
            <div className="p-6 rounded-2xl bg-[#111] border border-purple-400/20 shadow-lg hover:shadow-purple-500/20 transition">
              <Rocket className="text-purple-400 mb-4" size={28} />
              <h3 className="text-white font-semibold mb-1">Goal</h3>
              <p className="text-sm text-gray-400">
                Build scalable, real-world web applications
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
