"use client";

import React from "react";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center overflow-hidden pt-16"
    >
      {/* Animated Floating Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-24 h-24 bg-yellow-400 rounded-full opacity-20 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
          className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 flex justify-center md:justify-start flex-shrink-0"
        >
          <motion.img
            src="/person.png"
            alt="Shams"
            className="rounded-full w-full h-full object-cover shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-3xl space-y-6"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Hi, I&apos;m <span className="text-yellow-400">Shams</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I’m a passionate Full-Stack Developer specializing in React,
            Next.js, and Node.js. I build modern, responsive, and scalable web
            applications with clean code and smooth user experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.a
              href="#contact"
              className="btn btn-primary px-8 py-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              Hire Me
            </motion.a>

            <motion.a
              href="#projects"
              className="btn btn-outline btn-primary px-8 py-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center md:justify-start pt-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-yellow-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
