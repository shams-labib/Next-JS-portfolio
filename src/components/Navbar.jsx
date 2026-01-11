"use client";

import React, { useState, useEffect } from "react";
import { Mail, Home, Code, Briefcase, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const links = [
  { name: "Home", id: "home", icon: Home },
  { name: "Skills", id: "skills", icon: Briefcase },
  { name: "Projects", id: "projects", icon: Code },
  { name: "About", id: "about", icon: User },
  { name: "Contact", id: "contact", icon: Mail },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ১. স্ক্রল প্রগ্রেস বার
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // ২. স্ক্রল করলে ব্যাকগ্রাউন্ড পরিবর্তন
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ৩. ইন্টারসেকশন অবজারভার (কোন সেকশনে আছেন তা ট্র্যাক করবে)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ৪. স্মুথ স্ক্রল ফাংশন
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // হেডারের উচ্চতা অনুযায়ী অ্যাডজাস্ট করুন
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "h-16 bg-black/80 backdrop-blur-lg border-b border-purple-500/20 shadow-xl"
            : "h-24 bg-transparent"
        }`}
      >
        {/* প্রগ্রেস বার */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-500 origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* লোগো */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => handleNavClick(e, "home")}
            className="text-2xl font-black tracking-tighter cursor-pointer"
          >
            <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
              SHAMS.
            </span>
          </motion.a>

          {/* ডেস্কটপ মেনু */}
          <nav className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1 gap-1">
            {links.map(({ name, id, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="relative px-4 py-2 text-sm font-medium transition-colors group outline-none"
              >
                <span
                  className={`relative z-10 flex items-center gap-2 ${
                    active === id
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-200"
                  }`}
                >
                  <Icon size={14} strokeWidth={active === id ? 2.5 : 2} />
                  {name}
                </span>
                {active === id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-purple-500/20 rounded-full border border-purple-500/30"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* অ্যাকশন বাটন */}
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handleNavClick(e, "contact")}
              className="hidden md:block px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-purple-500 hover:text-white transition-all active:scale-95"
            >
              Hire Me
            </button>

            {/* মোবাইল মেনু টগল */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* মোবাইল ড্রয়ার */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[280px] z-[70] bg-[#0a0a0a] border-l border-white/10 p-8 flex flex-col"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end p-2 text-gray-400 hover:text-white mb-8"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col gap-2">
                {links.map(({ name, id, icon: Icon }, i) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`flex items-center gap-4 text-lg font-medium p-3 rounded-xl transition-all ${
                      active === id
                        ? "bg-purple-500/10 text-purple-400"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    <Icon size={20} />
                    {name}
                  </motion.a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
