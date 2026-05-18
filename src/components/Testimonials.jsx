import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Ankita P.',
    role: 'Regular since Day 1',
    rating: 5,
    text: 'The drumstick is unreal. Crispy on the outside, the juice still runs out when you bite. Worth every rupee.',
    color: 'bg-cfc-butter',
    textColor: 'text-cfc-deep',
  },
  {
    name: 'Rohit S.',
    role: 'Sum Hospital Staff',
    rating: 5,
    text: 'Order popcorn chicken almost every shift. Hot, fresh, never soggy. The double-egg chowmin is also fire.',
    color: 'bg-cfc-cream',
    textColor: 'text-cfc-deep',
    border: 'border-2 border-cfc-deep',
  },
  {
    name: 'Priya M.',
    role: 'Kalinga Vihar',
    rating: 5,
    text: 'Tried the chicken roll on a whim. Now I can\'t stop ordering. Crispy, spicy, the bread is soft — perfect combo.',
    color: 'bg-cfc-deep',
    textColor: 'text-cfc-cream',
  },
]

export default function Testimonials() {
  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-cfc-red/70">
          Word of Mouth
        </span>
        <h2 className="font-serif italic text-4xl lg:text-6xl text-cfc-deep mt-2 leading-tight">
          What the <span className="not-italic font-display text-cfc-red">crunchers</span> say
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -3 : 3 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
            className={`${r.color} ${r.textColor} ${r.border || ''} rounded-3xl p-6 lg:p-8 relative shadow-xl`}
          >
            <Quote className="w-10 h-10 opacity-30 mb-3" />
            <div className="flex gap-1 mb-4">
              {[...Array(r.rating)].map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + j * 0.1 + 0.3, type: 'spring' }}
                >
                  <Star className="w-4 h-4" fill="currentColor" />
                </motion.div>
              ))}
            </div>
            <p className="font-serif italic text-lg lg:text-xl leading-snug">
              "{r.text}"
            </p>
            <div className="mt-6 pt-4 border-t-2 border-dashed border-current opacity-60">
              <div className="font-display text-xl tracking-wide">{r.name}</div>
              <div className="text-xs uppercase tracking-wider opacity-70 mt-1">{r.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
