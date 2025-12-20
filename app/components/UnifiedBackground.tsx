"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

export default function UnifiedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax layers with different speeds
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Generate dots once for consistency
  const dots = useMemo(
    () =>
      Array.from({ length: 50 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: 3 + Math.random() * 3,
        delay: Math.random() * 2,
      })),
    []
  );

  // Generate grid lines
  const gridLines = useMemo(() => {
    const lines = [];
    // Vertical lines
    for (let i = 0; i < 20; i++) {
      lines.push({
        type: "vertical",
        position: (i * 100) / 20,
        key: `v-${i}`,
      });
    }
    // Horizontal lines
    for (let i = 0; i < 20; i++) {
      lines.push({
        type: "horizontal",
        position: (i * 100) / 20,
        key: `h-${i}`,
      });
    }
    return lines;
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient that moves with scroll */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0f0520]"
        style={{ y: y3 }}
      />

      {/* Animated grid - Layer 1 (slowest) */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: y3 }}
      >
        {gridLines.map((line) => (
          <motion.div
            key={line.key}
            className="absolute bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
            style={
              line.type === "vertical"
                ? {
                    left: `${line.position}%`,
                    width: "1px",
                    height: "200%",
                  }
                : {
                    top: `${line.position}%`,
                    height: "1px",
                    width: "200%",
                  }
            }
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Floating dots - Layer 2 (medium speed) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y2 }}
      >
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-500 to-cyan-500"
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              width: dot.size,
              height: dot.size,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Gradient orbs - Layer 3 (fastest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        {/* Purple orb */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Cyan orb */}
        <motion.div
          className="absolute top-2/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        
        {/* Pink orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
    </div>
  );
}
