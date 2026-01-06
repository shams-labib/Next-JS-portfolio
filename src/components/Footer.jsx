"use client";

import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-[#0f0f0f] via-[#1a003d] to-[#0f0f0f] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
          {[
            "About",
            "Skills",
            "Projects",
            "Education",
            "Research",
            "Certificates",
            "Hobbies",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6">
          <a
            href="mailto:shamsallabib@gmail.com"
            className="btn btn-square btn-ghost border border-gray-700 hover:border-purple-400 hover:bg-purple-400/10"
          >
            <Mail className="w-5 h-5 text-purple-400" />
          </a>

          <a
            href="https://github.com/shams-labib"
            target="_blank"
            className="btn btn-square btn-ghost border border-gray-700 hover:border-purple-400 hover:bg-purple-400/10"
          >
            <Github className="w-5 h-5 text-purple-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/shams-al-labib"
            target="_blank"
            className="btn btn-square btn-ghost border border-gray-700 hover:border-purple-400 hover:bg-purple-400/10"
          >
            <Linkedin className="w-5 h-5 text-purple-400" />
          </a>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700/40"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © {year}{" "}
          <span className="text-purple-400 font-medium">Shams All Labib</span> —
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
