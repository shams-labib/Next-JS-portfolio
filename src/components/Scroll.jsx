"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / docHeight) * 100;

      setScrollPercent(scrolled);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 flex items-center justify-center
        rounded-full
        bg-[#0b0b0f]/80 backdrop-blur-lg
        border border-white/10
        shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]
        transition-all duration-300
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }
        hover:scale-110
      `}
    >
      {/* Progress Ring */}
      <svg className="absolute w-14 h-14 -rotate-90" width="56" height="56">
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="rgba(168,85,247,0.15)"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="28"
          cy="28"
          r={radius}
          stroke="rgb(168,85,247)"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.9)]"
        />
      </svg>

      {/* Arrow */}
      <span
        className="
        relative flex items-center justify-center
        w-10 h-10 rounded-full
        bg-gradient-to-br from-cyan-400/20 to-purple-500/20
        text-cyan-300
        shadow-[0_0_18px_rgba(34,211,238,0.8)]
      "
      >
        <ArrowUp size={20} className="drop-shadow-md" />
      </span>
    </button>
  );
};

export default ScrollToTop;
