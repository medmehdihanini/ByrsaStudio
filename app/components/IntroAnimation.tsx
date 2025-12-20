"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide intro after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black"
        >
          {/* Background animated grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(168, 85, 247, 0.3) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Main content container - positioned to match Hero section with navbar offset */}
          <div className="relative min-h-screen flex items-center justify-center pt-20">
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto -mt-80">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2,
              }}
              className="mb-8 flex justify-center"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40">
                <Image
                  src="/assets/mainlogo.png"
                  alt="Byrsa Studio"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                  priority
                />
              </div>
            </motion.div>

            {/* Brand name with letter animation */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
            >
              Byrsa 
              Studio
            </motion.h1>

            {/* Loading bar inspired by PlayStation */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="w-full max-w-md md:max-w-2xl"
            >
              <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{
                    duration: 1.5,
                    delay: 1.3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                />
                
                {/* Shimmer effect */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 1.2,
                    delay: 1.3,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  style={{ width: "50%" }}
                />
              </div>
            </motion.div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
