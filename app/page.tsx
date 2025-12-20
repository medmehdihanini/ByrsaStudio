"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import AnimatedBackground from "./components/AnimatedBackground"

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Animated SVG Background with Blur */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 blur-sm">
        <AnimatedBackground />
      </div>

      {/* Coming Soon Text with Animations */}
      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image 
              src="/assets/mainlogo.png"
              alt="byrsastudio logo"
              width={150}
              height={150}
              className="drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Animated Title with Letter Animation */}
        <motion.h1 
          className="text-7xl md:text-8xl font-bold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {"ByrsaStudio".split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.2,
                color: "#ff0088",
                transition: { duration: 0.2 }
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p 
            className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "linear" 
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Coming Soon
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-8 flex gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-white rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
