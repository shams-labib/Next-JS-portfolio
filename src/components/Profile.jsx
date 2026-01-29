"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, Linkedin, Github } from "lucide-react";
import gsap from "gsap";
import Typed from "typed.js";

const SOCIAL_LINKS = [
  { icon: Github, href: "https://github.com/shams-labib", label: "Github" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shams-al-labib",
    label: "LinkedIn",
  },
];

export default function Profile() {
  const el = useRef(null);
  const containerRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out", duration: 1 },
      });

      tl.from(".animate-txt", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
      }).from(
        rightRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 1.5,
        },
        "-=0.6",
      );

      gsap.to(".floating-circle", {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    const typed = new Typed(el.current, {
      strings: [
        "Frontend & Full-Stack Developer",
        "MERN Stack Enthusiast",
        "UI/UX Designer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      /* স্কিল সেকশনের ডাইনামিক গ্রাডিয়েন্ট এখানে যুক্ত করা হয়েছে */
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1b003d] to-[#0a0a0a] pt-28 pb-12 lg:pt-0 lg:pb-0"
    >
      {/* BACKGROUND GRADIENTS (বড় অ্যানিমেটেড গ্লো) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[50%] h-[50%] bg-fuchsia-600/10 blur-[100px] rounded-full" />
      </div>

      {/* Floating background shapes (ছোট শেইপগুলো) */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-400 opacity-10 rounded-full animate-pulse blur-3xl z-0"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 opacity-10 rounded-full animate-pulse blur-3xl z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        {/* Main mal */}
        <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="animate-txt">
            <span className="px-4 py-2 rounded-full border border-purple-400/20 bg-purple-500/5 text-purple-300 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="animate-txt text-4xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-400 to-fuchsia-400">
                SHAMS ALL LABIB
              </span>
            </h1>

            <div className="animate-txt h-8">
              <span
                ref={el}
                className="text-lg md:text-2xl font-medium text-purple-300/90"
              ></span>
            </div>
          </div>

          <p className="animate-txt max-w-lg text-purple-100/60 leading-relaxed text-base md:text-lg mx-auto lg:mx-0">
            Crafting high-performance, visually stunning web experiences. I turn
            complex problems into elegant, user-centric digital solutions.
          </p>

          <div className="animate-txt flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4">
            <a
              href="/resume.pdf"
              download="Shams_Al_Labib_Resume.pdf"
              className="group relative px-8 py-4 bg-purple-600 text-white text-sm font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2">
                <Download size={18} />
                Get Resume
              </span>
            </a>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all backdrop-blur-md group"
                >
                  <social.icon
                    size={20}
                    className="text-purple-300 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div
          ref={rightRef}
          className="flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="floating-circle relative">
            <div className="absolute inset-[-20px] md:inset-[-30px] rounded-full border border-dashed border-purple-500/20 animate-[spin_30s_linear_infinite]" />

            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <div className="w-full h-full rounded-full p-1.5 bg-gradient-to-tr from-purple-500/40 to-fuchsia-500/40">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1b003d]/40 relative">
                  <Image
                    src="/pp.png"
                    alt="Shams Al Labib"
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-110"
                    priority
                    sizes="(max-width: 768px) 300px, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b003d]/60 via-transparent to-transparent" />
                </div>
              </div>
              {/* Modified for commit */}
              {/* Modified */}

              <div className="absolute top-[10%] -right-2 bg-[#1a0b2e]/90 backdrop-blur-md border border-emerald-500/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 shadow-2xl">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest">
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
