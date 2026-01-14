"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, Linkedin, Github } from "lucide-react";
import gsap from "gsap";
import Typed from "typed.js";

export default function Profile() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const el = useRef(null);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Shams_All_Labib_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1 },
    });

    tl.from(leftRef.current, {
      opacity: 0,
      y: 60,
    }).from(
      rightRef.current,
      {
        opacity: 0,
        scale: 0.85,
      },
      "-=0.6"
    );

    const typed = new Typed(el.current, {
      strings: [
        "Frontend & Full-Stack Developer",
        "MERN Stack Enthusiast",
        "UI/UX Designer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] min-h-screen flex items-center overflow-hidden">
      {/* --- BACKGROUND SECTION (Optimized for Image Clarity) --- */}
      <div className="absolute inset-0 z-0 flex">
        <div className="hidden lg:block w-1/2 bg-[#0a0a0a]" />

        <div className="relative w-full lg:w-1/2 h-full">
          <Image
            src="/pp.png"
            alt="Profile Background"
            fill
            className="object-cover object-center" // Opacity সরিয়ে দেওয়া হয়েছে একদম ক্লিয়ার দেখানোর জন্য
            priority
          />

          {/* Left Fade: Smoothly blends into black without covering the face */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />

          {/* Bottom Fade: Blends into the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
      </div>

      {/* Subtle Glows (Moved to background) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.05),transparent_50%)] pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div ref={leftRef} className="space-y-6 order-2 lg:order-1">
          <p className="text-sm tracking-widest text-purple-400 uppercase font-semibold">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm <br />
            <span className="text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              Shams All Labib
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-gray-200 min-h-[40px]">
            <span ref={el}></span>
          </h2>

          <p className="max-w-xl text-gray-300 leading-relaxed bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/5">
            Crafting immersive web experiences with neon magic. Strong
            foundation in frontend, expanding into backend and APIs.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={handleResumeDownload}
              className="bg-purple-500 text-white font-semibold hover:bg-purple-600 shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 px-6 py-3 rounded-lg"
            >
              <Download size={18} />
              Download Resume
            </button>

            <a
              href="https://github.com/shams-labib"
              target="_blank"
              className="border border-purple-400 text-purple-400 p-3 rounded-lg hover:bg-purple-400/20 hover:scale-110 transition-all duration-300"
            >
              <Github size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/shams-al-labib"
              target="_blank"
              className="border border-purple-400 text-purple-400 p-3 rounded-lg hover:bg-purple-400/20 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (Empty spacer to keep image visible) */}
        <div
          ref={rightRef}
          className="relative flex justify-center lg:justify-end order-1 lg:order-2 h-[300px] lg:h-auto"
        >
          {/* Content removed to show the background image clearly */}
        </div>
      </div>
    </section>
  );
}
