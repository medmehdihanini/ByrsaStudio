"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Changed to once: true for better performance
  const year = new Date().getFullYear();
  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden"
    >
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
          <motion.button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).Calendly) {
                (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/jawher-inbox/client' });
              }
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(168,85,247,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all overflow-hidden group"
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Start a Project
            </span>
          </motion.button>

          <a href="mailto:jawher.inbox@gmail.com">
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
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {/* Email */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-700/50 rounded-2xl backdrop-blur-sm"
          >
            <div className="text-purple-400 mb-3">
              <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-gray-400">jawher.inbox@gmail.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 bg-gradient-to-br from-gray-900/30 to-gray-800/20 border border-gray-700/50 rounded-2xl backdrop-blur-sm"
          >
            <div className="text-cyan-400 mb-3">
              <svg className="w-10 h-10 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+216 29 782 073</p>
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
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/byrsa-studio/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-gray-700 rounded-full hover:border-blue-500 transition-all group"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </motion.a>

            {/* Discord */}
            <motion.a
              href="https://discord.gg/MrpJ3GpUCd"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-gray-800/30 to-gray-900/20 border border-gray-700 rounded-full hover:border-indigo-500 transition-all group"
              aria-label="Discord"
            >
              <svg className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 24L16.75 19L17.38 21H4.5C2.85 21 1.5 19.65 1.5 18V6C1.5 4.35 2.85 3 4.5 3H19.5C21.15 3 22.5 4.35 22.5 6V24M12 6.8C9.32 6.8 7.44 7.95 7.44 7.95C8.47 7.03 10.27 6.5 10.27 6.5L10.1 6.33C8.41 6.36 6.88 7.53 6.88 7.53C5.16 11.12 5.27 14.22 5.27 14.22C6.67 16.03 8.75 15.9 8.75 15.9L9.46 15C8.21 14.73 7.42 13.62 7.42 13.62C7.42 13.62 9.3 14.9 12 14.9C14.7 14.9 16.58 13.62 16.58 13.62C16.58 13.62 15.79 14.73 14.54 15L15.25 15.9C15.25 15.9 17.33 16.03 18.73 14.22C18.73 14.22 18.84 11.12 17.12 7.53C17.12 7.53 15.59 6.36 13.9 6.33L13.73 6.5C13.73 6.5 15.53 7.03 16.56 7.95C16.56 7.95 14.68 6.8 12 6.8M9.93 10.59C10.58 10.59 11.11 11.16 11.1 11.86C11.1 12.55 10.58 13.13 9.93 13.13C9.29 13.13 8.77 12.55 8.77 11.86C8.77 11.16 9.28 10.59 9.93 10.59M14.1 10.59C14.75 10.59 15.27 11.16 15.27 11.86C15.27 12.55 14.75 13.13 14.1 13.13C13.46 13.13 12.94 12.55 12.94 11.86C12.94 11.16 13.45 10.59 14.1 10.59Z" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-gray-500 text-sm mt-16"
        >
          © {year} ByrsaStudio. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
}
