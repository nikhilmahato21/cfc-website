import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

// Crispy chicken drumstick SVG illustration
const Drumstick = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <defs>
      <radialGradient id="meatGrad" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="40%" stopColor="#F59E0B" />
        <stop offset="80%" stopColor="#B45309" />
        <stop offset="100%" stopColor="#78350F" />
      </radialGradient>
      <radialGradient id="boneGrad" cx="50%" cy="50%">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="100%" stopColor="#E7E5E4" />
      </radialGradient>
      <filter id="bumpy">
        <feTurbulence type="fractalNoise" baseFrequency="0.3" numOctaves="2" />
        <feDisplacementMap in="SourceGraphic" scale="3" />
      </filter>
    </defs>
    {/* Bone */}
    <g transform="rotate(-30 100 100)">
      <ellipse cx="100" cy="40" rx="18" ry="14" fill="url(#boneGrad)" stroke="#A8A29E" strokeWidth="1" />
      <ellipse cx="115" cy="35" rx="14" ry="12" fill="url(#boneGrad)" stroke="#A8A29E" strokeWidth="1" />
      <rect x="92" y="40" width="16" height="40" fill="url(#boneGrad)" stroke="#A8A29E" strokeWidth="1" />
      {/* Main chicken body */}
      <ellipse cx="100" cy="130" rx="60" ry="55" fill="url(#meatGrad)" filter="url(#bumpy)" />
      <ellipse cx="100" cy="130" rx="60" ry="55" fill="url(#meatGrad)" opacity="0.6" />
      {/* Crispy highlights */}
      <ellipse cx="80" cy="115" rx="8" ry="6" fill="#FED7AA" opacity="0.7" />
      <ellipse cx="120" cy="120" rx="6" ry="5" fill="#FCD34D" opacity="0.6" />
      <ellipse cx="100" cy="155" rx="10" ry="4" fill="#92400E" opacity="0.5" />
      <circle cx="90" cy="140" r="3" fill="#78350F" opacity="0.7" />
      <circle cx="115" cy="135" r="2" fill="#78350F" opacity="0.7" />
      <circle cx="105" cy="160" r="2.5" fill="#92400E" opacity="0.6" />
    </g>
  </svg>
)

const ChickenPiece = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className}>
    <defs>
      <radialGradient id="pieceGrad" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="45%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#7C2D12" />
      </radialGradient>
      <filter id="crisp">
        <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="3" />
        <feDisplacementMap in="SourceGraphic" scale="5" />
      </filter>
    </defs>
    <path
      d="M 50 80 Q 40 50 70 40 Q 100 30 130 45 Q 160 55 165 90 Q 170 130 145 155 Q 115 175 80 165 Q 50 150 45 120 Z"
      fill="url(#pieceGrad)"
      filter="url(#crisp)"
    />
    <path
      d="M 50 80 Q 40 50 70 40 Q 100 30 130 45 Q 160 55 165 90 Q 170 130 145 155 Q 115 175 80 165 Q 50 150 45 120 Z"
      fill="url(#pieceGrad)"
      opacity="0.7"
    />
    {/* Texture spots */}
    <circle cx="80" cy="70" r="4" fill="#FED7AA" opacity="0.6" />
    <circle cx="120" cy="80" r="3" fill="#FCD34D" opacity="0.7" />
    <circle cx="100" cy="110" r="5" fill="#FED7AA" opacity="0.5" />
    <circle cx="140" cy="120" r="3" fill="#92400E" opacity="0.6" />
    <circle cx="70" cy="140" r="4" fill="#78350F" opacity="0.5" />
    <circle cx="110" cy="150" r="3" fill="#92400E" opacity="0.6" />
  </svg>
)

export default function Hero() {
  return (
    <section id="home" className="relative px-6 lg:px-12 py-12 lg:py-16 overflow-hidden">
      {/* Sub text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-4"
      >
        <span className="inline-block text-xs lg:text-sm font-bold uppercase tracking-[0.3em] text-cfc-red/70">
          Hand-battered · Double-fried · Soul-satisfying
        </span>
      </motion.div>

      <div className="relative grid lg:grid-cols-12 gap-8 items-center">
        {/* Decorative chicken left */}
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: -45 }}
          animate={{ opacity: 1, x: 0, rotate: -15 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block lg:col-span-3 relative"
        >
          <motion.div
            animate={{ y: [0, -15, 0], rotate: [-15, -10, -15] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Drumstick className="w-full max-w-xs sticker" />
          </motion.div>
        </motion.div>

        {/* Center headline */}
        <div className="lg:col-span-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif italic text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-cfc-deep tracking-tight"
          >
            Bhubaneswar's
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 not-italic font-display text-cfc-red text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">
                CRISPIEST
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-2 left-0 right-0 h-3 bg-cfc-butter -z-0 origin-left"
              />
            </span>
            <br />
            Chicken, Hot
            <br />
            to your Door
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 mt-10"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="bg-cfc-red text-cfc-cream px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-2 crispy-btn shadow-lg shadow-cfc-red/30"
            >
              Order Now
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#how"
              className="border-2 border-cfc-deep text-cfc-deep px-7 py-3.5 rounded-full font-bold uppercase tracking-wider text-sm flex items-center gap-2 hover:bg-cfc-deep hover:text-cfc-cream transition-colors"
            >
              <Play className="w-3 h-3" fill="currentColor" />
              Watch Story
            </motion.a>
          </motion.div>
        </div>

        {/* Decorative chicken right */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 45 }}
          animate={{ opacity: 1, x: 0, rotate: 20 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="hidden lg:block lg:col-span-3 relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [20, 25, 20] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <ChickenPiece className="w-full max-w-xs sticker" />
          </motion.div>
        </motion.div>
      </div>

      {/* Small chicken decorations bottom corners */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-8 -left-8 w-24 h-24 opacity-30 hidden lg:block"
      >
        <svg viewBox="0 0 100 100">
          <text x="50" y="55" textAnchor="middle" className="font-display text-[10px] fill-cfc-deep">
            <textPath href="#circle">CRISPY · FRESH · HOT · LOCAL · CRISPY · FRESH · HOT · LOCAL ·</textPath>
          </text>
          <defs>
            <path id="circle" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
          </defs>
        </svg>
      </motion.div>
    </section>
  )
}
