"use client";

import React from "react";
import { Code, Server, LayoutDashboard, Layers } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 text-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-20">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative group">
            <img
              src="https://scontent.fspd6-1.fna.fbcdn.net/v/t39.30808-6/486358168_1662894851009150_258168444497357135_n.jpg?_nc_cat=100&_nc_cb=99be929b-ad57045b-ccb-1-7&_nc_sid=6ee11a"
              alt="Shams"
              className="rounded-full w-64 h-64 object-cover shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 opacity-20 blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* About Text */}
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
            Hi! I'm <span className="font-semibold text-yellow-400">Shams</span>
            , a Fullstack Developer passionate about building modern,
            responsive, and user-friendly web applications.
          </p>

          {/* Skills with icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <Code className="w-5 h-5 text-yellow-400 animate-bounce" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <LayoutDashboard className="w-5 h-5 text-blue-400 animate-bounce" />
              <span>Next.js</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <Server className="w-5 h-5 text-green-400 animate-bounce" />
              <span>Node.js</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <Layers className="w-5 h-5 text-purple-400 animate-bounce" />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
              <Code className="w-5 h-5 text-teal-400 animate-bounce" />
              <span>TailwindCSS</span>
            </div>
          </div>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="btn btn-primary text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
