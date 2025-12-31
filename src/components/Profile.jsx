"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Linkedin, Github } from "lucide-react";

export default function Profile() {
  return (
    <section
      className="
        relative
        bg-[#0a0a0a]
        overflow-hidden
        min-h-[90vh]
        lg:min-h-screen
        flex
        items-center
      "
    >
      {/* Background Neon Glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-500/10 to-blue-400/5 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-ping-slow"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-ping-slow"></div>

      {/* CONTENT */}
      <div
        className="
          relative
          w-full
          max-w-7xl
          mx-auto
          px-6
          py-24
          lg:py-0
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
    space-y-6
    order-2
    lg:order-1
  "
        >
          <p className="text-sm tracking-widest text-purple-400 uppercase animate-pulse-slow">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-lg">
            Hi, I'm <br />
            <span className="text-purple-400 glow-neon animate-pulse-slow">
              Shams All Labib
            </span>
          </h1>

          <h2 className="text-xl font-medium text-gray-300/80 drop-shadow-md">
            Frontend & Full-Stack Developer
          </h2>

          <p className="max-w-xl text-gray-300/70 leading-relaxed">
            Crafting immersive web experiences with neon magic. Strong
            foundation in frontend, expanding into backend and APIs.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="/resume.pdf"
              className="
                btn
                bg-purple-400
                text-black
                font-semibold
                hover:bg-purple-500
                shadow-lg
                hover:shadow-purple-500/50
                transition-all
                duration-300
              "
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#"
              className="
                btn
                btn-outline
                border-purple-400
                text-purple-400
                btn-square
                hover:bg-purple-400/20
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Github size={18} />
            </a>

            <a
              href="#"
              className="
                btn
                btn-outline
                border-purple-400
                text-purple-400
                btn-square
                hover:bg-purple-400/20
                hover:scale-110
                transition-all
                duration-300
              "
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="
    relative
    flex
    justify-center
    lg:justify-end
    order-1
    lg:order-2
  "
        >
          <div className="relative">
            {/* Glow Rings */}
            <div className="absolute -inset-6 rounded-full blur-3xl bg-purple-400/30 animate-pulse-slow"></div>
            <div className="absolute -inset-10 rounded-full blur-3xl bg-pink-400/20 animate-pulse-slower"></div>
            <div className="absolute -inset-14 rounded-full blur-2xl bg-blue-400/10 animate-pulse-slower"></div>

            {/* Profile Image */}
            <div className="relative rounded-full border-4 border-purple-400/60 p-2 bg-[#0a0a0a] shadow-lg shadow-purple-500/30">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={280}
                height={280}
                priority
                className="
                  rounded-full
                  object-cover
                  md:w-[300px] md:h-[300px]
                  lg:w-[340px] lg:h-[340px]
                "
              />
            </div>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="
                absolute
                bottom-6
                right-6
                px-3
                py-2
                text-xs
                font-bold
                rounded-md
                shadow-lg
                backdrop-blur-sm
                bg-gradient-to-r
                from-purple-400
                to-blue-400
              "
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-300">
                Available for work
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Particle Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas className="w-full h-full" />
      </div>
    </section>
  );
}
