"use client";

import { motion } from "framer-motion";
import { Code, Layers, GraduationCap, Rocket } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative bg-[#0a0a0a] overflow-hidden py-24 border-t border-white/5"
    >
      {/* Background Glows - Adjusted to match Hero Section */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase font-bold">
            Discovery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mt-4 rounded-full" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* LEFT TEXT (6 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-lg"
          >
            <p className="bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
              I am a{" "}
              <span className="text-purple-400 font-semibold">
                Full-Stack Web Developer
              </span>{" "}
              with around
              <span className="text-white font-semibold">
                {" "}
                1 year of consistent learning and hands-on practice
              </span>
              . My journey is fueled by a passion for creating seamless digital
              experiences that combine logic with aesthetics.
            </p>

            <div className="space-y-4 px-2">
              <p>
                I have successfully delivered{" "}
                <span className="text-white font-medium">10–12 projects</span>,
                ranging from sleek frontend interfaces to complex full-stack
                applications involving authentication, APIs, and database
                management.
              </p>

              <p>
                Currently, I am pursuing a{" "}
                <span className="text-purple-400 font-medium">
                  Diploma in Computer Science & Technology
                </span>
                , which provides me with a deep understanding of core
                programming principles and system architecture.
              </p>

              <p className="italic text-gray-400">
                "My goal is to build scalable, high-performance applications
                that solve real-world problems."
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARDS (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* CARD 1 */}
            <AboutCard
              icon={<Code size={24} />}
              title="Frontend"
              desc="Next.js, React, Tailwind CSS"
            />
            {/* CARD 2 */}
            <AboutCard
              icon={<Layers size={24} />}
              title="Backend"
              desc="Node.js, Express, MongoDB"
            />
            {/* CARD 3 */}
            <AboutCard
              icon={<GraduationCap size={24} />}
              title="Education"
              desc="Diploma in CST (Ongoing)"
            />
            {/* CARD 4 */}
            <AboutCard
              icon={<Rocket size={24} />}
              title="Goal"
              desc="Impact-driven Development"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Reusable Card Component for cleaner code
function AboutCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-purple-500/30 shadow-xl transition-all duration-300 group">
      <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white font-bold mb-1">{title}</h3>
      <p className="text-xs text-gray-400 leading-tight">{desc}</p>
    </div>
  );
}
