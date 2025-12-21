"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  const menuItems = [
    { name: "Home", path: "/#home", section: "home" },
    { name: "About", path: "/#about", section: "about" },
    { name: "Services", path: "/#services", section: "services" },
    { name: "Portfolio", path: "/#portfolio", section: "portfolio" },
    { name: "Contact", path: "/#contact", section: "contact" },
  ]

  // Scroll spy to detect active section
  useEffect(() => {
    if (pathname !== "/") return

    const handleScroll = () => {
      const sections = menuItems.map(item => item.section)
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Only handle smooth scroll if we're on the home page
    if (pathname === "/") {
      e.preventDefault()
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsOpen(false)
  }

  const isActive = (section: string) => {
    if (pathname !== "/") return false
    return activeSection === section
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/assets/mainlogo.png"
                alt="ByrsaStudio"
                width={50}
                height={50}
                className="drop-shadow-lg"
              />
            </motion.div>
            <motion.span
              className="text-xl font-bold text-white hidden sm:block"
              whileHover={{ 
                scale: 1.05,
                color: "#ff0088",
              }}
              transition={{ duration: 0.2 }}
            >
              ByrsaStudio
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item, index) => {
              const active = isActive(item.section)
              return (
                <Link 
                  key={item.path} 
                  href={item.path}
                  onClick={(e) => handleSmoothScroll(e, `#${item.section}`)}
                >
                  <motion.div
                    className="relative px-4 py-2 cursor-pointer"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {/* Active background indicator */}
                    {active && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-lg border border-pink-500/50"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Menu text */}
                    <motion.span
                      className={`relative z-10 font-medium text-lg ${
                        active ? "text-white" : "text-gray-300"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      animate={active ? { 
                        color: "#ffffff",
                      } : {}}
                    >
                      {item.name}
                    </motion.span>
                    
                    {/* Hover underline */}
                    {!active && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {/* Active dot indicator */}
                    {active && (
                      <motion.div
                        className="absolute -top-1 left-1/2 w-1.5 h-1.5 bg-pink-500 rounded-full"
                        initial={{ scale: 0, x: "-50%" }}
                        animate={{ scale: 1, x: "-50%" }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              )
            })}
            
            {/* Book Meeting Button */}
            <motion.button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/jawher-inbox/client' });
                }
              }}
              className="relative ml-4 px-6 py-2.5 font-semibold text-white overflow-hidden rounded-lg group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Button text with icon */}
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book Meeting
              </span>
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <motion.svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </motion.svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => {
                  const active = isActive(item.section)
                  return (
                    <Link 
                      key={item.path} 
                      href={item.path}
                      onClick={(e) => handleSmoothScroll(e, `#${item.section}`)}
                    >
                      <motion.div
                        className={`relative block px-4 py-3 font-medium text-lg rounded-lg ${
                          active ? "bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-white border border-pink-500/50" : "text-gray-300"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ x: 5, backgroundColor: active ? "" : "rgba(255, 255, 255, 0.05)" }}
                      >
                        {active && (
                          <motion.div
                            className="absolute left-0 top-1/2 w-1 h-8 bg-pink-500 rounded-r-full"
                            initial={{ scaleY: 0, y: "-50%" }}
                            animate={{ scaleY: 1, y: "-50%" }}
                            transition={{ type: "spring" }}
                          />
                        )}
                        <span className="ml-2">{item.name}</span>
                      </motion.div>
                    </Link>
                  )
                })}
                
                {/* Mobile Book Meeting Button */}
                <motion.button
                  onClick={() => {
                    setIsOpen(false);
                    if (typeof window !== 'undefined' && (window as any).Calendly) {
                      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/jawher-inbox/client' });
                    }
                  }}
                  className="relative w-full mt-4 px-4 py-3 font-semibold text-white overflow-hidden rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  />
                  
                  {/* Button text with icon */}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Meeting
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
