"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Game Development",
    description:
      "Full-cycle game development from concept to launch across multiple platforms including PC, mobile, and console.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
        <path d="M7 6C7 3.79086 8.79086 2 11 2H13C15.2091 2 17 3.79086 17 6V11H19C20.6569 11 22 12.3431 22 14C22 15.6569 20.6569 17 19 17H18V20C18 21.1046 17.1046 22 16 22C14.8954 22 14 21.1046 14 20V17H10V20C10 21.1046 9.10457 22 8 22C6.89543 22 6 21.1046 6 20V17H5C3.34315 17 2 15.6569 2 14C2 12.3431 3.34315 11 5 11H7V6Z" className="fill-current" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500",
    features: ["Unity & Unreal Engine", "Cross-platform", "Multiplayer Systems"],
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and visually stunning user interfaces designed to enhance player engagement and user experience.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20V20H4V4ZM6 6V18H18V6H6ZM8 8H16V10H8V8ZM8 12H16V14H8V12Z" className="fill-current" />
      </svg>
    ),
    color: "from-pink-500 to-red-500",
    features: ["Player-Centric Design", "Responsive Layouts", "Prototyping"],
  },
  {
    title: "3D Modeling & Animation",
    description:
      "High-quality 3D assets, character models, and fluid animations that bring your game world to life.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" className="fill-current" opacity="0.5" />
        <path d="M2 17L12 22L22 17V7L12 12L2 7V17Z" className="fill-current" />
      </svg>
    ),
    color: "from-cyan-500 to-blue-500",
    features: ["Character Design", "Environment Art", "Motion Capture"],
  },
  {
    title: "Game Testing & QA",
    description:
      "Comprehensive testing services to ensure your game is bug-free, balanced, and delivers the best player experience.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" className="fill-current" />
      </svg>
    ),
    color: "from-green-500 to-teal-500",
    features: ["Functional Testing", "Performance Testing", "User Testing"],
  },
  {
    title: "Sound Design",
    description:
      "Immersive audio experiences with original music, sound effects, and voice acting tailored to your game.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
        <path d="M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" className="fill-current" />
      </svg>
    ),
    color: "from-yellow-500 to-orange-500",
    features: ["Original Soundtracks", "SFX Design", "Audio Implementation"],
  },
  {
    title: "Live Ops & Support",
    description:
      "Post-launch support including updates, community management, and live operations to keep your game thriving.",
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none">
        <path d="M13 2.03V2.05L13 4.05C17.39 4.59 20.5 8.58 19.96 12.97C19.5 16.61 16.64 19.5 13 19.93V21.93C18.5 21.38 22.5 16.5 21.95 11C21.5 6.25 17.73 2.5 13 2.03ZM11 2.06C9.05 2.25 7.19 3 5.67 4.26L7.1 5.74C8.22 4.84 9.57 4.26 11 4.06V2.06ZM4.26 5.67C3 7.19 2.25 9.04 2.05 11H4.05C4.24 9.58 4.8 8.23 5.69 7.1L4.26 5.67ZM2.06 13C2.26 14.96 3.03 16.81 4.27 18.33L5.69 16.9C4.81 15.77 4.24 14.42 4.06 13H2.06ZM7.1 18.37L5.67 19.74C7.18 21 9.04 21.79 11 22V20C9.58 19.82 8.23 19.25 7.1 18.37Z" className="fill-current" />
      </svg>
    ),
    color: "from-indigo-500 to-purple-500",
    features: ["Updates & Patches", "Community Management", "Analytics"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Changed to once: true for better performance

  return (
    <section
      id="services"
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
                    className={`mb-4 bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}
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
