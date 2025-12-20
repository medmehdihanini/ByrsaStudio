"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Apply spring physics to the progress for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 transform origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Vertical progress indicator on the side */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {["home", "about", "services", "portfolio", "testimonials", "contact"].map((section, index) => (
          <motion.button
            key={section}
            onClick={() => {
              const element = document.getElementById(section);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative w-3 h-3 rounded-full bg-gray-700 hover:bg-purple-500 transition-all cursor-pointer"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ margin: "-40% 0px -40% 0px" }}
            />
            
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap capitalize pointer-events-none">
              {section}
            </span>
          </motion.button>
        ))}
      </div>
    </>
  );
}
