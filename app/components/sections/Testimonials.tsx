"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, GameTech Studios",
    content:
      "ByrsaStudio transformed our vision into reality. Their expertise in game development and attention to detail resulted in a product that exceeded our expectations. Highly recommended!",
    rating: 5,
    avatar: "AJ",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Sarah Chen",
    role: "Indie Developer",
    content:
      "Working with ByrsaStudio was an absolute pleasure. They understood our creative vision and delivered a stunning game with incredible performance. Professional and talented team!",
    rating: 5,
    avatar: "SC",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Michael Rodriguez",
    role: "Product Manager, PlayForge",
    content:
      "The team at ByrsaStudio is phenomenal. They delivered our mobile game on time, within budget, and with exceptional quality. Their communication throughout the project was outstanding.",
    rating: 5,
    avatar: "MR",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "Emily Williams",
    role: "Creative Director, Pixel Dreams",
    content:
      "ByrsaStudio brought innovation and creativity to our project. Their technical skills combined with artistic vision resulted in a game that our users absolutely love. Outstanding work!",
    rating: 5,
    avatar: "EW",
    color: "from-pink-500 to-red-500",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative min-h-screen py-20 px-6 bg-gradient-to-br from-[#0a0a0a] via-[#0f0520] to-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued clients have
            to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-3xl backdrop-blur-sm">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-6xl text-purple-500/20">
                "
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                      }
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="text-yellow-400 text-2xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-gray-200 mb-8 text-center leading-relaxed italic"
                >
                  {testimonials[activeIndex].content}
                </motion.p>

                {/* Client Info */}
                <div className="flex items-center justify-center gap-4">
                  {/* Avatar */}
                  <motion.div
                    key={`avatar-${activeIndex}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[activeIndex].color} flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {testimonials[activeIndex].avatar}
                  </motion.div>

                  {/* Name & Role */}
                  <motion.div
                    key={`info-${activeIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="text-lg font-bold text-white">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonials[activeIndex].role}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div
                className={`absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br ${testimonials[activeIndex].color} opacity-20 rounded-full blur-3xl`}
              />
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-purple-500 to-cyan-500 w-8"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )
              }
              className="pointer-events-auto w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-white hover:bg-gray-700/50 transition-all backdrop-blur-sm"
            >
              ←
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setActiveIndex((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1
                )
              }
              className="pointer-events-auto w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-white hover:bg-gray-700/50 transition-all backdrop-blur-sm"
            >
              →
            </motion.button>
          </div>
        </div>

        {/* All Testimonials Grid (Optional - showing smaller versions) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              whileHover={{ y: -5, scale: 1.05 }}
              className={`p-4 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border rounded-xl backdrop-blur-sm transition-all ${
                index === activeIndex
                  ? "border-purple-500"
                  : "border-gray-700/30 hover:border-gray-600"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold mb-2 mx-auto`}
              >
                {testimonial.avatar}
              </div>
              <h5 className="text-sm font-semibold text-white">
                {testimonial.name}
              </h5>
              <p className="text-xs text-gray-400">{testimonial.role}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
