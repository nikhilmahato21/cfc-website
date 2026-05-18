import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Fresh Cut',
    desc: 'Local chicken, cleaned and cut every morning. No frozen anything, ever.',
    color: 'bg-cfc-butter',
    textColor: 'text-cfc-deep',
  },
  {
    num: '02',
    title: 'Spice Bath',
    desc: 'Rested in our 11-spice marinade for hours until every bite carries heat.',
    color: 'bg-cfc-red',
    textColor: 'text-cfc-cream',
  },
  {
    num: '03',
    title: 'Hand Battered',
    desc: 'Dredged twice in seasoned flour by hand — that\'s where the crunch lives.',
    color: 'bg-cfc-deep',
    textColor: 'text-cfc-cream',
  },
  {
    num: '04',
    title: 'Double Fried',
    desc: 'Sizzled golden in fresh oil, twice over. Crispy outside, juicy in.',
    color: 'bg-cfc-spice',
    textColor: 'text-cfc-cream',
  },
]

export default function HowItsMade() {
  return (
    <section id="how" className="px-6 lg:px-12 py-16 lg:py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-cfc-red/70">
          The Process
        </span>
        <h2 className="font-serif italic text-4xl lg:text-6xl text-cfc-deep mt-2 leading-tight">
          From cluck to <span className="not-italic font-display text-cfc-red">crunch</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
        {/* Dashed connector line */}
        <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-px border-t-2 border-dashed border-cfc-red/30 -z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8, rotate: i % 2 === 0 ? -2 : 2 }}
            className={`${step.color} ${step.textColor} rounded-3xl p-6 lg:p-7 relative overflow-hidden lift`}
          >
            <div className="absolute inset-0 stripes opacity-20" />
            <div className="relative">
              <div className="font-display text-5xl lg:text-7xl opacity-30 leading-none">
                {step.num}
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mt-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-sm mt-3 opacity-90 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
