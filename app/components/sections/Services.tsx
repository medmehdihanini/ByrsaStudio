"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Game Development",
    description:
      "Full-cycle game development from concept to launch across multiple platforms including PC, mobile, and console.",
    icon: "🎮",
    color: "from-purple-500 to-pink-500",
    features: ["Unity & Unreal Engine", "Cross-platform", "Multiplayer Systems"],
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and visually stunning user interfaces designed to enhance player engagement and user experience.",
    icon: "🎨",
    color: "from-pink-500 to-red-500",
    features: ["Player-Centric Design", "Responsive Layouts", "Prototyping"],
  },
  {
    title: "3D Modeling & Animation",
    description:
      "High-quality 3D assets, character models, and fluid animations that bring your game world to life.",
    icon: "🎭",
    color: "from-cyan-500 to-blue-500",
    features: ["Character Design", "Environment Art", "Motion Capture"],
  },
  {
    title: "Game Testing & QA",
    description:
      "Comprehensive testing services to ensure your game is bug-free, balanced, and delivers the best player experience.",
    icon: "🔍",
    color: "from-green-500 to-teal-500",
    features: ["Functional Testing", "Performance Testing", "User Testing"],
  },
  {
    title: "Sound Design",
    description:
      "Immersive audio experiences with original music, sound effects, and voice acting tailored to your game.",
    icon: "🎵",
    color: "from-yellow-500 to-orange-500",
    features: ["Original Soundtracks", "SFX Design", "Audio Implementation"],
  },
  {
    title: "Live Ops & Support",
    description:
      "Post-launch support including updates, community management, and live operations to keep your game thriving.",
    icon: "⚡",
    color: "from-indigo-500 to-purple-500",
    features: ["Updates & Patches", "Community Management", "Analytics"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative min-h-screen py-20 px-6 bg-gradient-to-br from-[#0a0a0a] via-[#0f0520] to-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We offer end-to-end game development solutions tailored to bring your
            vision to life with cutting-edge technology and creative excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-gray-600">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl mb-4"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={
                          isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                        }
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + idx * 0.1,
                        }}
                        className="flex items-center text-sm text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mr-2" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-600/20 to-transparent rounded-bl-full" />
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
          <a href="#contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168,85,247,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-all"
            >
              Discuss Your Project
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
