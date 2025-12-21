"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";

export default function UnifiedBackground() {
  const { scrollYProgress } = useScroll();
  
  // Parallax layers with different speeds - reduced range for better performance
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  // Reduced dots from 50 to 12 for better performance - using fixed positions to avoid hydration errors
  const dots = useMemo(
    () => [
      { left: 10, top: 20, size: 2, duration: 6, delay: 0 },
      { left: 30, top: 60, size: 3, duration: 7, delay: 0.4 },
      { left: 50, top: 15, size: 1.5, duration: 8, delay: 0.8 },
      { left: 70, top: 80, size: 2.5, duration: 6.5, delay: 1.2 },
      { left: 85, top: 35, size: 2, duration: 7.5, delay: 1.6 },
      { left: 15, top: 70, size: 2.5, duration: 6, delay: 0.3 },
      { left: 40, top: 45, size: 1.5, duration: 7, delay: 0.7 },
      { left: 60, top: 90, size: 3, duration: 8, delay: 1.1 },
      { left: 80, top: 50, size: 2, duration: 6.5, delay: 1.5 },
      { left: 25, top: 85, size: 2.5, duration: 7.5, delay: 0.5 },
      { left: 55, top: 25, size: 2, duration: 6, delay: 0.9 },
      { left: 90, top: 65, size: 3, duration: 7, delay: 1.3 },
    ],
    []
  );

  // Reduced grid lines from 40 to 12 total (6 vertical + 6 horizontal)
  const gridLines = useMemo(() => {
    const lines = [];
    // Vertical lines - reduced to 6
    for (let i = 0; i < 6; i++) {
      lines.push({
        type: "vertical",
        position: (i * 100) / 6,
        key: `v-${i}`,
      });
    }
    // Horizontal lines - reduced to 6
    for (let i = 0; i < 6; i++) {
      lines.push({
        type: "horizontal",
        position: (i * 100) / 6,
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

      {/* Animated grid - Layer 1 (slowest) - optimized with will-change */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: y3, willChange: "transform" }}
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
                    willChange: "opacity",
                  }
                : {
                    top: `${line.position}%`,
                    height: "1px",
                    width: "200%",
                    willChange: "opacity",
                  }
            }
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8, // Slower = less CPU usage
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear", // Linear is more performant
            }}
          />
        ))}
      </motion.div>

      {/* Floating dots - Layer 2 (medium speed) - optimized with will-change */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y2, willChange: "transform" }}
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
              willChange: "transform, opacity",
            }}
            animate={{
              scale: [1, 1.3, 1], // Reduced scale range
              opacity: [0.2, 0.4, 0.2], // Reduced opacity range
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
              ease: "linear", // Linear is more performant
            }}
          />
        ))}
      </motion.div>

      {/* Gradient orbs - Layer 3 (fastest) - optimized with will-change */}
      <motion.div
        className="absolute inset-0"
        style={{ y: y1, willChange: "transform" }}
      >
        {/* Purple orb */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-2xl"
          style={{ willChange: "transform, opacity" }}
          animate={{
            scale: [1, 1.1, 1], // Reduced scale range
            opacity: [0.15, 0.35, 0.15], // Reduced opacity range
          }}
          transition={{
            duration: 12, // Slower = less CPU
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Cyan orb */}
        <motion.div
          className="absolute top-2/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-2xl"
          style={{ willChange: "transform, opacity" }}
          animate={{
            scale: [1.1, 1, 1.1], // Reduced scale range
            opacity: [0.15, 0.35, 0.15], // Reduced opacity range
          }}
          transition={{
            duration: 12, // Slower = less CPU
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
        
        {/* Pink orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-2xl"
          style={{ willChange: "transform, opacity" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
    </div>
  );
}
