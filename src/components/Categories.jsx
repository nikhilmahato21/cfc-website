import React from 'react'
import { motion } from 'framer-motion'

const categories = [
  {
    title: 'Crispy Classics',
    desc: 'Hot Chicken · Wings · Drumsticks',
    bg: 'bg-cfc-red',
    text: 'text-cfc-cream',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="c1" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </radialGradient>
        </defs>
        <path d="M 30 50 Q 25 25 50 22 Q 75 25 75 50 Q 78 75 50 80 Q 22 75 30 50 Z" fill="url(#c1)" />
        <circle cx="40" cy="40" r="3" fill="#FED7AA" opacity="0.7" />
        <circle cx="60" cy="50" r="3" fill="#FCD34D" opacity="0.7" />
        <circle cx="50" cy="65" r="3" fill="#FED7AA" opacity="0.6" />
        <circle cx="35" cy="65" r="2" fill="#78350F" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Chowmin & Rolls',
    desc: 'Egg Chicken Chowmin · Rolls',
    bg: 'bg-cfc-butter',
    text: 'text-cfc-deep',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="noodle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="70" rx="40" ry="10" fill="#92400E" opacity="0.3" />
        <path d="M 20 60 Q 30 40 40 55 Q 50 70 60 50 Q 70 35 80 55" stroke="url(#noodle)" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 25 65 Q 35 45 45 60 Q 55 75 65 55 Q 75 40 85 60" stroke="url(#noodle)" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 15 55 Q 25 35 35 50 Q 45 65 55 45 Q 65 30 75 50" stroke="url(#noodle)" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="45" cy="50" r="5" fill="#B45309" />
        <circle cx="60" cy="55" r="4" fill="#B45309" />
      </svg>
    ),
  },
  {
    title: 'Bites & Snacks',
    desc: 'Pakoda · Popcorn · Stripes',
    bg: 'bg-cfc-cream',
    text: 'text-cfc-deep',
    border: 'border-2 border-cfc-red',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <radialGradient id="bite" cx="40%" cy="40%">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#7C2D12" />
          </radialGradient>
        </defs>
        <circle cx="35" cy="45" r="15" fill="url(#bite)" />
        <circle cx="60" cy="35" r="12" fill="url(#bite)" />
        <circle cx="65" cy="60" r="14" fill="url(#bite)" />
        <circle cx="40" cy="70" r="11" fill="url(#bite)" />
        <circle cx="50" cy="50" r="13" fill="url(#bite)" />
        <circle cx="35" cy="45" r="2" fill="#78350F" opacity="0.6" />
        <circle cx="60" cy="35" r="2" fill="#78350F" opacity="0.6" />
        <circle cx="65" cy="60" r="2" fill="#78350F" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Sides & Burgers',
    desc: 'French Fries · Burgers · Potato',
    bg: 'bg-cfc-deep',
    text: 'text-cfc-cream',
    icon: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="fries" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>
        {/* Container */}
        <path d="M 30 50 L 35 85 L 65 85 L 70 50 Z" fill="#DC2626" />
        <rect x="30" y="48" width="40" height="4" fill="#991B1B" />
        {/* Fries */}
        <rect x="35" y="25" width="4" height="35" fill="url(#fries)" rx="1" />
        <rect x="42" y="20" width="4" height="40" fill="url(#fries)" rx="1" />
        <rect x="49" y="15" width="4" height="45" fill="url(#fries)" rx="1" />
        <rect x="56" y="22" width="4" height="38" fill="url(#fries)" rx="1" />
        <rect x="63" y="28" width="4" height="32" fill="url(#fries)" rx="1" />
      </svg>
    ),
  },
]

export default function Categories() {
  return (
    <section className="px-6 lg:px-12 py-12 lg:py-16" id="categories">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-cfc-red/70">
          What's Cooking
        </span>
        <h2 className="font-serif italic text-4xl lg:text-5xl text-cfc-deep mt-2">
          Pick your <span className="text-cfc-red not-italic font-display">crunch</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {categories.map((cat, i) => (
          <motion.a
            key={i}
            href="#menu"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
            className={`${cat.bg} ${cat.text} ${cat.border || ''} rounded-3xl p-5 lg:p-6 flex flex-col group cursor-pointer relative overflow-hidden`}
          >
            <div className="absolute inset-0 stripes opacity-30" />
            <div className="relative aspect-square mb-3 lg:mb-4">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                {cat.icon}
              </motion.div>
            </div>
            <h3 className="font-display text-xl lg:text-2xl tracking-wide relative">
              {cat.title}
            </h3>
            <p className="text-xs lg:text-sm mt-1 opacity-80 relative">{cat.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
