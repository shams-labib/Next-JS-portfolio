"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-black/40 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between text-white">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold"
          whileHover={{ scale: 1.1, color: "#FACC15" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Shams
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="btn btn-outline btn-warning text-white ml-4"
            whileHover={{ scale: 1.05 }}
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-xl">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 p-4 shadow bg-black/90 rounded-box w-52 space-y-3"
          >
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="block hover:text-yellow-400">
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-warning btn-sm w-full mt-2">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
