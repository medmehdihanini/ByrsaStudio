"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a] overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            Ready to Start Your Project?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Let's bring your gaming vision to life. Our team is ready to help you
          create an unforgettable experience that players will love.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(168,85,247,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Start a Project
            </motion.button>
          </Link>

          <a href="mailto:info@byrsastudio.com">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34,211,238,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-transparent border-2 border-cyan-400 text-cyan-400 text-lg font-bold rounded-xl hover:bg-cyan-400/10 transition-all"
            >
              Send an Email
            </motion.button>
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
        >
          {/* Email */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm"
          >
            <div className="text-4xl mb-3">📧</div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">info@byrsastudio.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm"
          >
            <div className="text-4xl mb-3">📱</div>
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm"
          >
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
            <p className="text-gray-400">Remote Worldwide</p>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6">Follow us on social media</p>
          <div className="flex gap-6 justify-center">
            {[
              { icon: "🐦", label: "Twitter", href: "#" },
              { icon: "💼", label: "LinkedIn", href: "#" },
              { icon: "📘", label: "Facebook", href: "#" },
              { icon: "📷", label: "Instagram", href: "#" },
              { icon: "🎮", label: "Discord", href: "#" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-full text-2xl hover:border-purple-500 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-gray-500 text-sm mt-16"
        >
          © 2024 ByrsaStudio. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
}
