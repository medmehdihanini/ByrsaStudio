"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Cyber Warriors",
    category: "Action RPG",
    description:
      "A futuristic action RPG set in a dystopian cyberpunk world with stunning visuals and fast-paced combat.",
    image: "/assets/mainlogo.png", // Placeholder
    tags: ["Unity", "Multiplayer", "PC"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Fantasy Quest",
    category: "Adventure",
    description:
      "An epic fantasy adventure featuring rich storytelling, puzzle-solving, and breathtaking environments.",
    image: "/assets/mainlogo.png", // Placeholder
    tags: ["Unreal", "Single Player", "Console"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Racing Legends",
    category: "Racing",
    description:
      "High-octane racing game with realistic physics, customizable vehicles, and competitive multiplayer.",
    image: "/assets/mainlogo.png", // Placeholder
    tags: ["Unity", "Mobile", "Cross-platform"],
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Space Odyssey",
    category: "Strategy",
    description:
      "Strategic space exploration game with resource management, ship building, and galactic conquest.",
    image: "/assets/mainlogo.png", // Placeholder
    tags: ["Godot", "PC", "Indie"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Horror Mansion",
    category: "Horror",
    description:
      "Psychological horror experience with immersive atmosphere, compelling narrative, and survival elements.",
    image: "/assets/mainlogo.png", // Placeholder
    tags: ["Unreal", "VR", "PC"],
    color: "from-gray-500 to-red-900",
  },
  {
    title: "Puzzle Paradise",
    category: "Puzzle",
    description:
      "Innovative puzzle game with unique mechanics, hundreds of levels, and addictive gameplay.",
    image: "/assets/mainlogo.png", // Placeholder
    tags: ["Unity", "Mobile", "Casual"],
    color: "from-green-500 to-teal-500",
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Changed to once: true for better performance

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative min-h-screen py-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our collection of successful projects spanning multiple genres
            and platforms, each crafted with passion and precision.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ scale: 1.03, y: -5 }} // Simplified hover - removed 3D transforms for better performance
              className="group relative cursor-pointer"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-gray-600">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/20">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}
                  />
                  {/* Placeholder - will be replaced with actual project images */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-24 h-24 opacity-30"
                    >
                      <div
                        className={`w-full h-full bg-gradient-to-br ${project.color} rounded-lg`}
                      />
                    </motion.div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${project.color} rounded-full`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-gray-800/50 text-gray-400 rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,211,238,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
