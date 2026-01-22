"use client";

import { Film, Swords, Shield, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Letterboxd",
    desc: "I have a deep passion for movies and love exploring cinematic worlds, analyzing stories, and discovering hidden gems.",
    icon: <Film className="w-8 h-8 text-white" />,
    bg: "bg-blue-600/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Chess.com",
    desc: "I enjoy playing chess, challenging myself strategically, and learning from every game I play.",
    icon: <Swords className="w-8 h-8 text-white" />, // ChessKnight এর বদলে Swords আরও ডাইনামিক লাগে
    bg: "bg-green-600/20",
    border: "group-hover:border-green-500/50",
  },
  {
    title: "Hacking & CTF",
    desc: "I love ethical hacking, solving CTF challenges, exploring cybersecurity concepts, and sharpening my skills.",
    icon: <Shield className="w-8 h-8 text-white" />,
    bg: "bg-red-600/20",
    border: "group-hover:border-red-500/50",
  },
  {
    title: "PUBG Gaming",
    desc: "Playing PUBG helps me relax, improve teamwork, strategy, and enjoy competitive gameplay with friends.",
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    bg: "bg-yellow-500/20",
    border: "group-hover:border-yellow-500/50",
  },
];

const Hobbies = () => {
  return (
    <section
      id="hobbies"
      /* কালার কন্সিস্টেন্সির জন্য সলিড bg-[#0a0a0a] */
      className="relative py-16 md:py-24 bg-[#0a0a0a] text-gray-100 overflow-hidden"
    >
      {/* BACKGROUND GLOWS - ধারাবাহিকতা বজায় রাখতে */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header - Styled like previous sections */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm tracking-[0.3em] text-purple-400 uppercase font-bold mb-3">
            Interests
          </p>
          <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase">
            Hobbies & <span className="text-purple-600">Interests</span>
          </h2>
          <div className="h-1.5 w-20 bg-purple-600 rounded-full mt-4" />
          <p className="mt-6 text-gray-400 max-w-lg">
            Beyond coding, here’s what I love to do in my free time to keep my
            mind sharp and creative.
          </p>
        </div>

        {/* Hobby Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((item, i) => (
            <motion.div
              key={i}
              className={`group relative rounded-2xl p-8 bg-white/[0.02] border border-white/10 backdrop-blur-md transition-all duration-500 ${item.border} hover:bg-white/[0.04]`}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Decorative Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.bg}`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
