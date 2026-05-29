import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

// Chef illustration SVG
const ChefIllustration = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className}>
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7F1D1D" />
        <stop offset="100%" stopColor="#450A0A" />
      </linearGradient>
      <radialGradient id="chefFace" cx="50%" cy="40%">
        <stop offset="0%" stopColor="#FED7AA" />
        <stop offset="100%" stopColor="#D97706" />
      </radialGradient>
    </defs>
    
    {/* Background */}
    <rect width="400" height="400" rx="20" fill="url(#bgGrad)" />
    
    {/* Kitchen tiles pattern */}
    <g opacity="0.1">
      {[...Array(8)].map((_, i) =>
        [...Array(8)].map((_, j) => (
          <rect
            key={`${i}-${j}`}
            x={i * 50}
            y={j * 50}
            width="48"
            height="48"
            fill="none"
            stroke="#FCD34D"
            strokeWidth="0.5"
          />
        ))
      )}
    </g>
    
    {/* Chef body */}
    <g transform="translate(200, 200)">
      {/* Apron */}
      <path d="M -70 0 L -80 120 L 80 120 L 70 0 Z" fill="#FFF8E7" />
      <path d="M -70 0 L -80 120 L 80 120 L 70 0 Z" fill="#FFF8E7" stroke="#7F1D1D" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="120" stroke="#B91C1C" strokeWidth="2" strokeDasharray="4 4" />
      
      {/* CFC logo on apron */}
      <text x="0" y="50" textAnchor="middle" fontFamily="Bebas Neue, Impact" fontSize="24" fill="#B91C1C" fontWeight="bold">CFC</text>
      <text x="0" y="68" textAnchor="middle" fontFamily="Bebas Neue, Impact" fontSize="10" fill="#7F1D1D">EST. 2024</text>
      
      {/* Head/Face */}
      <circle cx="0" cy="-40" r="40" fill="url(#chefFace)" />
      
      {/* Chef hat */}
      <ellipse cx="0" cy="-95" rx="45" ry="15" fill="#FFFFFF" />
      <path d="M -45 -95 Q -50 -130 -20 -135 Q 0 -145 20 -135 Q 50 -130 45 -95 Z" fill="#FFFFFF" />
      <ellipse cx="-25" cy="-115" rx="15" ry="20" fill="#FFFFFF" />
      <ellipse cx="0" cy="-125" rx="18" ry="22" fill="#FFFFFF" />
      <ellipse cx="25" cy="-115" rx="15" ry="20" fill="#FFFFFF" />
      
      {/* Face details */}
      <circle cx="-12" cy="-45" r="2" fill="#1A0A0A" />
      <circle cx="12" cy="-45" r="2" fill="#1A0A0A" />
      <path d="M -10 -30 Q 0 -22 10 -30" stroke="#1A0A0A" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Mustache */}
      <path d="M -10 -35 Q -15 -32 -10 -28 M 10 -35 Q 15 -32 10 -28" stroke="#1A0A0A" strokeWidth="3" fill="none" />
      
      {/* Arms */}
      <ellipse cx="-65" cy="20" rx="18" ry="40" fill="#FFF8E7" stroke="#7F1D1D" strokeWidth="2" />
      <ellipse cx="65" cy="20" rx="18" ry="40" fill="#FFF8E7" stroke="#7F1D1D" strokeWidth="2" />
      
      {/* Hands holding chicken */}
      <circle cx="-65" cy="55" r="12" fill="url(#chefFace)" />
      <circle cx="65" cy="55" r="12" fill="url(#chefFace)" />
    </g>
    
    {/* Chicken in hands */}
    <g transform="translate(135, 255)">
      <ellipse cx="0" cy="0" rx="25" ry="20" fill="#F59E0B" />
      <circle cx="-8" cy="-5" r="3" fill="#FED7AA" opacity="0.7" />
      <circle cx="8" cy="3" r="2" fill="#FCD34D" opacity="0.7" />
    </g>
    <g transform="translate(265, 255)">
      <ellipse cx="0" cy="0" rx="25" ry="20" fill="#F59E0B" />
      <circle cx="-8" cy="-5" r="3" fill="#FED7AA" opacity="0.7" />
      <circle cx="8" cy="3" r="2" fill="#FCD34D" opacity="0.7" />
    </g>
    
    {/* Steam */}
    <path d="M 130 240 Q 125 225 132 215 Q 138 205 130 195" stroke="#FFF8E7" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
    <path d="M 270 240 Q 275 225 268 215 Q 262 205 270 195" stroke="#FFF8E7" strokeWidth="2" fill="none" opacity="0.6" strokeLinecap="round" />
    
    {/* Floor */}
    <line x1="0" y1="370" x2="400" y2="370" stroke="#FCD34D" strokeWidth="2" />
  </svg>
)

export default function Story() {
  return (
    <section id="story" className="px-6 lg:px-12 py-12 lg:py-20 relative">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cfc-red/70">
            The Story
          </span>
          <h2 className="font-serif italic text-4xl lg:text-6xl text-cfc-deep mt-2 leading-tight">
            CFC &<br />
            <span className="not-italic font-display text-cfc-red">the kitchen</span>
          </h2>
          <p className="mt-6 text-cfc-deep/80 text-base lg:text-lg leading-relaxed max-w-md">
            Born in a tiny corner of Kalinga Vihar, CFC started with one obsession — a chicken so crispy you'd hear it from the next table. We hand-batter every piece, double-fry every drumstick, and refuse to cut corners on heat, flavour, or the crunch you actually came for.
          </p>
          <p className="mt-4 text-cfc-deep/80 text-base lg:text-lg leading-relaxed max-w-md">
            No shortcuts. No frozen patties. Just real spice, real chicken, and the loud, satisfying snap of a perfect bite.
          </p>

          <div className="mt-8 flex items-start gap-3 text-cfc-deep">
            <MapPin className="w-5 h-5 mt-0.5 text-cfc-red flex-shrink-0" />
            <div>
              <div className="font-bold text-sm uppercase tracking-wider">Find Us</div>
              <div className="text-sm opacity-80">Kalinga Bites, Kalinga Vihar,<br />Sum Hospital Road, Bhubaneswar</div>
            </div>
          </div>

          <motion.a
            href="#menu"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 bg-cfc-deep text-cfc-cream px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm crispy-btn"
          >
            Explore the menu
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img src='https://res.cloudinary.com/dynbpb9u0/image/upload/v1780031165/WhatsApp_Image_2026-05-29_at_09.43.57_iw9aqj.jpg' className="w-full rounded-3xl shadow-2xl" />
          
          {/* Sticker badge */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: -15 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-cfc-butter rounded-full w-24 h-24 lg:w-32 lg:h-32 flex items-center justify-center shadow-lg"
          >
            <div className="text-center">
              <div className="font-display text-2xl lg:text-3xl text-cfc-deep leading-none">100%</div>
              <div className="font-bold text-[10px] lg:text-xs uppercase text-cfc-deep tracking-wider">Hand<br />Battered</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
