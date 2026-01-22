"use client";

import { motion } from "framer-motion";
import { Code, Layers, GraduationCap, Rocket } from "lucide-react";

export default function AboutMe() {
  return (
    <section
      id="about"
      /* হিরো সেকশনের নিচের অংশের সাথে মিলিয়ে bg-[#0a0a0a] রাখা হয়েছে */
      className="relative bg-[#0a0a0a] overflow-hidden py-16 md:py-24"
    >
      {/* বড় BACKGROUND GRADIENTS (পুরো সাইটের থিম বজায় রাখতে) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* উপরের বাম পাশে হালকা পার্পল গ্লো যা হিরো সেকশনের সাথে মিশে যাবে */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full" />
        {/* নিচের ডান পাশে ফুক্সিয়া গ্লো */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/5 blur-[100px] rounded-full" />
      </div>

      {/* ছোট Floating background shapes - আপনার দেওয়া স্টাইল */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-400 opacity-10 rounded-full animate-pulse blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 opacity-10 rounded-full animate-pulse blur-3xl z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase font-bold">
            Discovery
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-purple-500 mt-4 rounded-full" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base md:text-lg"
          >
            {/* Glassmorphism card for bio */}
            <p className="bg-white/[0.03] p-5 md:p-6 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
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
                applications.
              </p>

              <p>
                Currently, I am pursuing a{" "}
                <span className="text-purple-400 font-medium">
                  Diploma in Computer Science & Technology
                </span>
                .
              </p>
            </div>
          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-2 gap-3 md:gap-4"
          >
            <AboutCard
              icon={<Code size={20} className="md:w-6 md:h-6" />}
              title="Frontend"
              desc="Next.js, React, Tailwind"
            />
            <AboutCard
              icon={<Layers size={20} className="md:w-6 md:h-6" />}
              title="Backend"
              desc="Node.js, Express, Mongo"
            />
            <AboutCard
              icon={<GraduationCap size={20} className="md:w-6 md:h-6" />}
              title="Education"
              desc="Diploma in CST"
            />
            <AboutCard
              icon={<Rocket size={20} className="md:w-6 md:h-6" />}
              title="Goal"
              desc="Impact-driven Dev"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, desc }) {
  return (
    <div className="p-4 md:p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 shadow-xl transition-all duration-300 group backdrop-blur-md">
      <div className="text-purple-400 mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-white text-sm md:text-base font-bold mb-1">
        {title}
      </h3>
      <p className="text-[10px] md:text-xs text-gray-400 leading-tight">
        {desc}
      </p>
    </div>
  );
}
