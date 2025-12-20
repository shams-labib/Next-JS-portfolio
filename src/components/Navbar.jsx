"use client";

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Hire Now", href: "#contact" },
  ];

  return (
    <div className="drawer">
      {/* Drawer toggle checkbox */}
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content fixed w-full top-0 z-50 bg-black/30 backdrop-blur-md text-white shadow-md">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold"
            whileHover={{ scale: 1.1, color: "#FACC15" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Shams
          </motion.a>

          {/* Desktop menu */}
          <nav className="hidden lg:flex space-x-6 items-center">
            {links.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="hover:text-yellow-400 transition-colors duration-300"
                whileHover={{ scale: 1.1, color: "#FACC15" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="ml-4 btn btn-outline btn-primary text-white"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#FACC15",
                color: "#000",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Me
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <label
            htmlFor="navbar-drawer"
            className="lg:hidden btn btn-ghost p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side">
        <label htmlFor="navbar-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-black/90 text-white flex flex-col space-y-4">
          {links.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05, color: "#FACC15" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link.href}
                className="text-lg transition-colors duration-300"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="#contact"
              className="btn btn-outline btn-primary w-full mt-2"
            >
              Contact Me
            </a>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
