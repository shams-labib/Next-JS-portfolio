"use client";

import { Film, ChessKnight, Shield, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const hobbies = [
  {
    title: "Letterboxd",
    desc: "I have a deep passion for movies and love exploring cinematic worlds, analyzing stories, and discovering hidden gems.",
    icon: <Film className="w-8 h-8 text-white" />,
    bg: "bg-blue-600/30",
  },
  {
    title: "Chess.com",
    desc: "I enjoy playing chess, challenging myself strategically, and learning from every game I play.",
    icon: <ChessKnight className="w-8 h-8 text-white" />,
    bg: "bg-green-600/30",
  },
  {
    title: "Hacking & CTF",
    desc: "I love ethical hacking, solving CTF challenges, exploring cybersecurity concepts, and sharpening my problem-solving skills.",
    icon: <Shield className="w-8 h-8 text-white" />,
    bg: "bg-red-600/30",
  },
  {
    title: "PUBG Gaming",
    desc: "Playing PUBG helps me relax, improve teamwork, strategy, and enjoy competitive gameplay with friends.",
    icon: <Gamepad2 className="w-8 h-8 text-white" />,
    bg: "bg-yellow-500/30",
  },
];

const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="relative py-28 bg-gradient-to-br from-black via-[#1a003d] to-black text-gray-100"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,40,255,0.2),transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
            Hobbies & Interests
          </h2>
          <p className="mt-4 text-gray-400">
            Beyond coding, here’s what I love to do in my free time.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-8 bg-white/5 border border-white/10 backdrop-blur-md hover:border-purple-400/40 transition"
              whileHover={{ y: -8, scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${item.bg}`}
              >
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
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
