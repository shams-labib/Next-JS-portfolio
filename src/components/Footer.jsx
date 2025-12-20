"use client";

import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin size={24} />, url: "#", color: "text-blue-500" },
    { icon: <Github size={24} />, url: "#", color: "text-gray-100" },
    { icon: <Twitter size={24} />, url: "#", color: "text-blue-400" },
    { icon: <Instagram size={24} />, url: "#", color: "text-pink-500" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden">
      {/* Floating Animated Circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-40 h-40 bg-pink-500 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-2xl md:text-3xl font-bold text-white">Shams</div>

        <ul className="flex flex-wrap gap-6 text-gray-300">
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.2, color: "#FACC15" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-yellow-400"
                >
                  {item}
                </a>
              </motion.li>
            )
          )}
        </ul>

        <div className="flex gap-6">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              className={`${link.color} hover:text-yellow-400`}
              whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
              transition={{ type: "spring", stiffness: 300 }}
              aria-label="social-link"
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm relative z-10">
        &copy; {new Date().getFullYear()} Shams. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
