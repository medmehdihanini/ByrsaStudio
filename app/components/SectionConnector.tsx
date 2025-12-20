"use client";

import { motion } from "framer-motion";

export default function SectionConnector({ variant = "particles" }: { variant?: "particles" | "line" | "wave" }) {
  if (variant === "line") {
    return (
      <div className="relative h-32 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-1 h-full bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-cyan-500/50"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    );
  }

  if (variant === "wave") {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
            fill="url(#wave-gradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: false }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // Default: particles
  return (
    <div className="relative h-40 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
            style={{
              left: `${(i / 15) * 100}%`,
            }}
            initial={{ y: 0, opacity: 0, scale: 0 }}
            whileInView={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            viewport={{ once: false }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
