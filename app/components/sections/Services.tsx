"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Game Development",
    description:
      "End-to-end game development from initial concept to final launch. We specialize in creating immersive gaming experiences across multiple platforms including PC, console, and mobile.",

    image: "/video game images.jpg",
    hasImage: true,
    color: "from-purple-500 via-pink-500 to-red-500",
    features: ["Unity & Unreal Engine", "Cross-Platform Development", "Multiplayer Systems", "Game Mechanics Design", "AI & Physics", "Full Production Pipeline"],
  },
  {
    title: "3D Modeling & Animation",
    description:
      "Breathtaking 3D assets, lifelike character models, and cinematic-quality animations that bring your game world to life with stunning visual fidelity and artistic detail.",

    hasImage: false,
    color: "from-green-400 via-emerald-500 to-teal-500",
    features: ["Character & Environment Design", "Motion Capture Integration", "PBR Materials & Textures", "Procedural Animation", "Rigging & Skinning", "Real-time Optimization"],
  },
  {
    title: "Mixed Reality Development",
    description:
      "Cutting-edge Mixed Reality experiences that blend the physical and digital worlds. We create innovative MR applications for training, entertainment, and enterprise solutions that revolutionize interaction.",
    
    image: "/mixed reality.jpg",
    hasImage: true,
    color: "from-violet-500 via-purple-500 to-fuchsia-500",
    features: ["HoloLens Development", "Spatial Mapping & Anchors", "Hand Tracking & Gestures", "Enterprise Solutions", "Holographic UI", "Real-world Integration"],
  },
  {
    title: "VR Development",
    description:
      "Fully immersive Virtual Reality experiences that transport users to entirely new worlds. From gaming to training simulations, we create VR that feels real and delivers unforgettable experiences.",
    
    image: "/vr_images.png",
    hasImage: true,
    color: "from-orange-400 via-red-500 to-pink-500",
    features: ["Multi-Platform VR", "Advanced Locomotion", "Spatial Audio Design", "Performance Optimization", "Comfort-First Design", "Haptic Feedback"],
  },
  {
    title: "AR Development",
    description:
      "Augmented Reality solutions that overlay digital content onto the real world. We create AR experiences for mobile, wearables, and web platforms that enhance reality and deliver innovative solutions.",
    hasImage: false,
    color: "from-amber-400 via-orange-500 to-red-500",
    features: ["ARKit & ARCore", "WebAR Solutions", "Image & Object Tracking", "Location-Based AR", "SLAM Technology", "Cross-Platform AR"],
  },
  {
    title: "Web & Mobile Development",
    description:
      "Responsive websites and native mobile applications built with modern frameworks. We create fast, scalable, and user-friendly digital experiences that work flawlessly across all devices and platforms.",
    image: "/website-mobile dev.jpeg",
    hasImage: true,
    color: "from-blue-400 via-indigo-500 to-purple-500",
    features: ["React & Next.js", "iOS & Android Native", "Progressive Web Apps", "API Integration", "Cloud Services", "Performance Optimization"],
  },
];


// Service Item Component - Alternating Layout
function ServiceItem({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -50]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="relative mb-32 last:mb-0"
    >
      {service.hasImage ? (
        // Layout with Image
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
          {/* Image Side */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              {/* Image with zoom effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={service.image!}
                  alt={service.title}
                  fill
                  className="object-cover"
                  quality={75}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA3gA//2Q=="
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority={index < 2}
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-30 group-hover:opacity-20 transition-opacity duration-500`} />
              </motion.div>
              
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{
                  boxShadow: [
                    `0 0 20px rgba(168, 85, 247, 0.3)`,
                    `0 0 40px rgba(168, 85, 247, 0.5)`,
                    `0 0 20px rgba(168, 85, 247, 0.3)`,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: isEven ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
          >
            {/* Title */}
            <div>
              <motion.h3
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <motion.div
                className={`h-1.5 bg-gradient-to-r ${service.color} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: "30%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>

            {/* Descriptions */}
            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {service.description}
            </motion.p>

            <motion.p
              className="text-base text-gray-400 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
            </motion.p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + idx * 0.05 }}
                >
                  <span
                    className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                  />
                  <span className="text-sm text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      ) : (
        // Layout without Image - Animated Gradient Background
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-8 md:p-12 lg:p-16">
            {/* Animated Gradient Background */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: '200% 200%',
                willChange: 'background-position',
              }}
            />

            {/* Floating Particles - Optimized */}
            <div className="absolute inset-0 overflow-hidden">
              {[
                { w: 110, h: 110, left: 15, top: 25, x: 20, y: 25, dur: 16 },
                { w: 130, h: 130, left: 70, top: 60, x: -25, y: 20, dur: 18 },
                { w: 100, h: 100, left: 40, top: 75, x: 18, y: -20, dur: 17 },
              ].map((particle, i) => (
                <motion.div
                  key={i}
                  className={`absolute rounded-full bg-gradient-to-br ${service.color}`}
                  style={{
                    width: particle.w,
                    height: particle.h,
                    left: `${particle.left}%`,
                    top: `${particle.top}%`,
                    filter: 'blur(20px)',
                    opacity: 0.12,
                    willChange: 'transform',
                  }}
                  animate={{
                    x: [0, particle.x, 0],
                    y: [0, particle.y, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: particle.dur,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.8,
                  }}
                />
              ))}
            </div>

            {/* Floating Geometric Shapes - Optimized */}
            <div className="absolute inset-0 overflow-hidden">
              {[
                { w: 60, h: 60, left: 25, top: 35, x: 15, y: -12, dur: 24, round: '50%' },
                { w: 55, h: 55, left: 70, top: 65, x: -12, y: 15, dur: 26, round: '10px' },
              ].map((shape, i) => (
                <motion.div
                  key={`shape-${i}`}
                  className="absolute border-2 border-white/10"
                  style={{
                    width: shape.w,
                    height: shape.h,
                    left: `${shape.left}%`,
                    top: `${shape.top}%`,
                    borderRadius: shape.round,
                    willChange: 'transform',
                  }}
                  animate={{
                    x: [0, shape.x, 0],
                    y: [0, shape.y, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: shape.dur,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 1.2,
                  }}
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              {/* Title */
              <motion.h3
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {service.title}
              </motion.h3>
}
              {/* Animated Divider */}
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div
                  className={`h-1.5 bg-gradient-to-r ${service.color} rounded-full`}
                  initial={{ width: 0 }}
                  whileInView={{ width: "200px" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              {/* Descriptions */}
              <motion.p
                className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {service.description}
              </motion.p>

              <motion.p
                className="text-base text-gray-400 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
              </motion.p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 justify-center md:justify-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.05 }}
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                    />
                    <span className="text-sm text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);

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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Services
            </h2>
          </motion.div>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Cutting-edge technology meets creative excellence. We deliver next-generation digital experiences 
            that push the boundaries of what&apos;s possible in 2025.
          </motion.p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceItem key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <a href="#contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(168,85,247,0.6), 0 0 80px rgba(139,92,246,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg rounded-full shadow-2xl transition-all relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">Let&apos;s Build Something Amazing</span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
