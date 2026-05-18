import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingElements() {
  // Chili pepper SVG component
  const Chili = ({ className, rotation = 0 }) => (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <radialGradient id="chiliGrad" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#FCA5A5" />
          <stop offset="40%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#7F1D1D" />
        </radialGradient>
      </defs>
      <g transform={`rotate(${rotation} 50 50)`}>
        <path d="M 50 15 Q 45 20 48 25 Q 52 30 50 35 L 55 30 Q 60 28 58 25 Q 56 22 55 18 Z" fill="#16A34A" />
        <path d="M 50 25 Q 35 30 30 50 Q 28 70 40 85 Q 50 92 60 85 Q 72 70 70 50 Q 65 30 50 25 Z" fill="url(#chiliGrad)" />
        <path d="M 45 35 Q 40 50 45 70" stroke="#FECACA" strokeWidth="2" fill="none" opacity="0.6" />
      </g>
    </svg>
  )

  // Sesame seed
  const Sesame = ({ className }) => (
    <svg viewBox="0 0 20 30" className={className}>
      <ellipse cx="10" cy="15" rx="6" ry="10" fill="#FCD34D" />
      <ellipse cx="8" cy="12" rx="2" ry="3" fill="#FEF3C7" opacity="0.6" />
    </svg>
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at top left, #991B1B 0%, transparent 50%), radial-gradient(ellipse at bottom right, #7F1D1D 0%, transparent 50%)'
      }} />

      {/* Floating chilies */}
      <motion.div
        className="absolute top-[5%] right-[3%] w-32 sm:w-44 lg:w-56"
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Chili className="w-full h-full drop-shadow-2xl" rotation={-20} />
      </motion.div>

      <motion.div
        className="absolute top-[35%] left-[2%] w-24 sm:w-32 lg:w-40"
        animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <Chili className="w-full h-full drop-shadow-2xl" rotation={45} />
      </motion.div>

      <motion.div
        className="absolute top-[60%] right-[1%] w-28 sm:w-36 lg:w-48"
        animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <Chili className="w-full h-full drop-shadow-2xl" rotation={-60} />
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] left-[3%] w-32 sm:w-40 lg:w-52"
        animate={{ y: [0, -25, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <Chili className="w-full h-full drop-shadow-2xl" rotation={120} />
      </motion.div>

      <motion.div
        className="absolute bottom-[40%] left-[1%] w-20 sm:w-28 lg:w-36"
        animate={{ y: [0, 20, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <Chili className="w-full h-full drop-shadow-2xl" rotation={200} />
      </motion.div>

      {/* Sesame seeds scattered */}
      {[
        { top: '15%', left: '8%', delay: 0 },
        { top: '25%', right: '12%', delay: 1 },
        { top: '55%', left: '7%', delay: 2 },
        { top: '75%', right: '8%', delay: 0.5 },
        { top: '85%', left: '15%', delay: 1.5 },
        { top: '40%', right: '15%', delay: 2.5 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-5"
          style={pos}
          animate={{ y: [0, -15, 0], rotate: [0, 360] }}
          transition={{ duration: 10 + i, repeat: Infinity, ease: 'linear', delay: pos.delay }}
        >
          <Sesame className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  )
}
