"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"

const CursorGlow = () => {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Reduced to 2 particles instead of 4 for better performance
  const springConfigs = [
    { damping: 30, stiffness: 200, mass: 0.3 },
    { damping: 40, stiffness: 100, mass: 0.7 },
  ]

  const particles = springConfigs.map(config => ({
    x: useSpring(cursorX, config),
    y: useSpring(cursorY, config),
  }))

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
          willChange: 'transform',
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
            transition={{ opacity: { duration: 3, repeat: Infinity }, rotate: { duration: 12, repeat: Infinity, ease: "linear" } }}
          />
        </svg>
      </motion.div>

      {/* Particle 2: Circle - Slower */}
      <motion.div
        style={{
          position: 'absolute',
          x: particles[1].x,
          y: particles[1].y,
          marginLeft: '-8px',
          marginTop: '-8px',
          willChange: 'transform',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16">
          <motion.circle
            cx="8" cy="8" r="6"
            fill="none"
            stroke="#8df0cc"
            strokeWidth="2"
            animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* Subtle glow behind cursor - optimized */}
      <motion.div
        style={{
          position: 'absolute',
          x: particles[0].x,
          y: particles[0].y,
          marginLeft: '-40px',
          marginTop: '-40px',
          width: '80px',
          height: '80px',
          willChange: 'transform',
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full opacity-10 blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,0,136,0.4) 0%, transparent 70%)',
            mixBlendMode: 'screen',
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>
    </div>
  )
}

export default CursorGlow
