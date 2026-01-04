"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Linkedin, Github } from "lucide-react";

export default function Profile() {
  // ✅ Resume Download Handler
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // public folder file
    link.download = "Shams_All_Labib_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      {/* Background Glows */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-pink-500/10 to-blue-400/5 animate-pulse-slow pointer-events-none" />
      <div className="absolute top-20 left-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-ping-slow" />
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-ping-slow" />

      {/* CONTENT */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-24 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-2 lg:order-1"
        >
          <p className="text-sm tracking-widest text-purple-400 uppercase animate-pulse-slow">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm <br />
            <span className="text-purple-400 glow-neon">Shams All Labib</span>
          </h1>

          <h2 className="text-xl font-medium text-gray-300/80">
            Frontend & Full-Stack Developer
          </h2>

          <p className="max-w-xl text-gray-300/70 leading-relaxed">
            Crafting immersive web experiences with neon magic. Strong
            foundation in frontend, expanding into backend and APIs.
          </p>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4 pt-4">
            {/* ✅ DOWNLOAD BUTTON */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleResumeDownload}
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
                flex
                items-center
                gap-2
              "
            >
              <Download size={18} />
              Download Resume
            </motion.button>

            {/* SOCIALS */}
            <a
              href="https://github.com/shams-labib"
              target="_blank"
              className="btn btn-outline border-purple-400 text-purple-400 btn-square hover:bg-purple-400/20 hover:scale-110 transition-all duration-300"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/shams-al-labib"
              target="_blank"
              className="btn btn-outline border-purple-400 text-purple-400 btn-square hover:bg-purple-400/20 hover:scale-110 transition-all duration-300"
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
          className="relative flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative">
            <div className="absolute -inset-6 rounded-full blur-3xl bg-purple-400/30 animate-pulse-slow" />
            <div className="absolute -inset-10 rounded-full blur-3xl bg-pink-400/20" />

            <div className="relative rounded-full border-4 border-purple-400/60 p-2 bg-[#0a0a0a] shadow-lg shadow-purple-500/30">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={300}
                height={300}
                priority
                className="rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
