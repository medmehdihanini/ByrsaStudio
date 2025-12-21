"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

const CursorGlow = () => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Call hooks directly at the top level (not in a loop/map) - all 4 particles
  const spring1X = useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.3 })
  const spring1Y = useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.3 })
  const spring2X = useSpring(cursorX, { damping: 35, stiffness: 150, mass: 0.5 })
  const spring2Y = useSpring(cursorY, { damping: 35, stiffness: 150, mass: 0.5 })
  const spring3X = useSpring(cursorX, { damping: 40, stiffness: 100, mass: 0.7 })
  const spring3Y = useSpring(cursorY, { damping: 40, stiffness: 100, mass: 0.7 })
  const spring4X = useSpring(cursorX, { damping: 45, stiffness: 80, mass: 0.9 })
  const spring4Y = useSpring(cursorY, { damping: 45, stiffness: 80, mass: 0.9 })

  const particles = [
    { x: spring1X, y: spring1Y },
    { x: spring2X, y: spring2Y },
    { x: spring3X, y: spring3Y },
    { x: spring4X, y: spring4Y },
  ]

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    // Throttle mouse movement for better performance
    let rafId: number
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
        rafId = 0
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [cursorX, cursorY])

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block">
      {/* Particle 1: Triangle - Fastest */}
      <motion.div
        style={{
          position: 'absolute',
          x: particles[0].x,
          y: particles[0].y,
          marginLeft: '-12px',
          marginTop: '-12px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <motion.polygon
            points="12,2 22,20 2,20"
            fill="none"
            stroke="#ff0088"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.6, 0.3], rotate: 360 }}
            transition={{ opacity: { duration: 2, repeat: Infinity }, rotate: { duration: 8, repeat: Infinity, ease: "linear" } }}
          />
        </svg>
      </motion.div>

      {/* Particle 2: Square/Code Block */}
      <motion.div
        style={{
          position: 'absolute',
          x: particles[1].x,
          y: particles[1].y,
          marginLeft: '-10px',
          marginTop: '-10px',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <motion.rect
            x="2" y="2" width="16" height="16"
            fill="none"
            stroke="#8df0cc"
            strokeWidth="2"
            rx="3"
            animate={{ opacity: [0.2, 0.5, 0.2], rotate: -360 }}
            transition={{ opacity: { duration: 2.5, repeat: Infinity }, rotate: { duration: 10, repeat: Infinity, ease: "linear" } }}
          />
        </svg>
      </motion.div>

      {/* Particle 3: Circle/Dot */}
      <motion.div
        style={{
          position: 'absolute',
          x: particles[2].x,
          y: particles[2].y,
          marginLeft: '-8px',
          marginTop: '-8px',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <motion.circle
            cx="8" cy="8" r="6"
            fill="none"
            stroke="#0d63f8"
            strokeWidth="2"
            animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* Particle 4: Cross/Plus (Game UI element) */}
      <motion.div
        style={{
          position: 'absolute',
          x: particles[3].x,
          y: particles[3].y,
          marginLeft: '-10px',
          marginTop: '-10px',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <motion.path
            d="M10 2 L10 18 M2 10 L18 10"
            stroke="#bd5fff"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ opacity: [0.2, 0.4, 0.2], rotate: 45 }}
            transition={{ opacity: { duration: 3, repeat: Infinity }, rotate: { duration: 6, repeat: Infinity, ease: "linear" } }}
          />
        </svg>
      </motion.div>

      {/* Subtle small glow behind cursor */}
      <motion.div
        style={{
          position: 'absolute',
          x: particles[0].x,
          y: particles[0].y,
          marginLeft: '-40px',
          marginTop: '-40px',
          width: '80px',
          height: '80px',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full opacity-10 blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,0,136,0.4) 0%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}

export default CursorGlow
