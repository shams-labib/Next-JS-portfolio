"use client";

import React, { useState } from "react";
import { Mail, Home, Code, Toolbox, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home", icon: Home },
  { name: "Skills", id: "skills", icon: Toolbox },
  { name: "Projects", id: "projects", icon: Code },
  { name: "Contact", id: "contact", icon: Mail },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    setActive(id);
    setOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-purple-400/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* LOGO */}
            <span className="text-xl font-bold text-purple-400">
              Shams Al Labib
            </span>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-2 relative">
              {links.map(({ name, id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => handleScroll(id)}
                  className="relative px-4 py-2 text-sm font-medium flex items-center gap-2"
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-purple-400/15"
                    />
                  )}
                  <span
                    className={`relative z-10 flex items-center gap-2 ${
                      active === id ? "text-purple-400" : "text-gray-300/80"
                    }`}
                  >
                    <Icon size={16} />
                    {name}
                  </span>
                </button>
              ))}

              <button
                onClick={() => handleScroll("contact")}
                className="ml-3 btn bg-purple-400 text-black btn-sm font-semibold"
              >
                Hire Me
              </button>
            </nav>

            {/* MOBILE MENU ICON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-purple-400"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* SLIDE MENU */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm z-50
                         bg-gradient-to-b from-[#120a1f] to-black
                         border-l border-purple-400/20 p-6"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold text-purple-400">
                  Shams Al Labib
                </h2>
                <button onClick={() => setOpen(false)}>
                  <X className="text-gray-300" />
                </button>
              </div>

              {/* LINKS */}
              <nav className="space-y-3">
                {links.map(({ name, id }) => (
                  <button
                    key={id}
                    onClick={() => handleScroll(id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm
                      ${
                        active === id
                          ? "bg-purple-400/15 text-purple-400"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                  >
                    {name}
                  </button>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
