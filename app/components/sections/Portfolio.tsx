"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "VacaTown",
    description:
      "Transformed a struggling restaurant sim into a revenue-generating success. Eliminated game-breaking bugs that frustrated players, implemented intelligent AI that feels alive, and integrated monetization strategies that boosted earnings 2x. The result? Smooth mobile performance, engaged players, and a game ready to scale. Your project deserves this level of dedication.",
    images: ["/Portfolio/VacaTown/1.png", "/Portfolio/VacaTown/2.png", "/Portfolio/VacaTown/3.png"],
    link: "https://www.upwork.com/freelancers/jawherbenjeddou?p=1936566881965887488",
    tags: ["Unity", "Mobile", "AI Systems"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Ancient Towers",
    description:
      "Built a tower defense experience that keeps players coming back. Strategic depth meets stunning Unreal Engine visuals - the kind of game that dominates app stores. Dynamic enemy waves that challenge without frustrating, progression that rewards skill, and combat that feels satisfying every single time. This is what separates good games from unforgettable ones.",
    images: ["/Portfolio/Ancient Towers/1.png", "/Portfolio/Ancient Towers/2.png", "/Portfolio/Ancient Towers/3.png"],
    link: "https://www.upwork.com/freelancers/jawherbenjeddou?p=1953262839744045056",
    tags: ["Unreal Engine", "Tower Defense", "Strategy"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Paintings Of Katalina",
    description:
      "Delivered a complete Zelda-inspired adventure from concept to reality for Electronic Overthrow LLC. Every system, every interaction, every environment crafted to create player immersion that lasts. When you need a developer who understands both the technical precision and the artistic soul of adventure games - this is the standard you should expect.",
    images: ["/Portfolio/Paintings Of Katalina/1.png", "/Portfolio/Paintings Of Katalina/2.png"],
    link: "https://www.upwork.com/freelancers/jawherbenjeddou?p=1924209296781647872",
    tags: ["Unity", "Adventure", "Full Development"],
    color: "from-cyan-500 to-blue-500",
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
            Our Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real projects delivered with passion and precision. Each showcasing our expertise in game development and interactive experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative cursor-pointer h-full"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-gray-600">
                  {/* Image container with scroll effect */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800/30 to-gray-900/20">
                    {/* Image Scroll Container */}
                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ y: project.images.length > 1 ? `-${(project.images.length - 1) * 100}%` : 0 }}
                      transition={{ duration: project.images.length * 1.2, ease: "linear" }}
                    >
                      {project.images.map((img, idx) => (
                        <div key={idx} className="relative w-full h-64">
                          <Image
                            src={img}
                            alt={`${project.title} - Screenshot ${idx + 1}`}
                            fill
                            className="object-cover"
                            quality={80}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gA//2Q=="
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                          />
                        </div>
                      ))}
                    </motion.div>
                    
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className={`px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${project.color} rounded-full shadow-lg`}
                      >
                      </span>
                    </div>
                    
                    {/* View Details overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center z-10"
                    >
                      <div className="text-center">
                        <div className="text-white text-lg font-bold mb-2">View Details</div>
                        <div className="text-cyan-400 text-sm">Click to see more →</div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-4 leading-relaxed line-clamp-4">
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
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="https://www.upwork.com/freelancers/jawherbenjeddou" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34,211,238,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all"
            >
              View All Projects on Upwork
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
