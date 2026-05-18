import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Flame } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <section className="px-6 lg:px-12 py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative bg-cfc-deep rounded-3xl overflow-hidden p-8 lg:p-14"
      >
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 polka opacity-20" />
        
        {/* Floating flames */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-6 right-6 text-cfc-butter opacity-30"
        >
          <Flame className="w-20 h-20 lg:w-32 lg:h-32" fill="currentColor" />
        </motion.div>

        <div className="relative max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cfc-butter">
            Stay in the Loop
          </span>
          <h2 className="font-serif italic text-3xl lg:text-5xl text-cfc-cream mt-3 leading-tight">
            Get first dibs on <span className="not-italic font-display text-cfc-butter">new drops</span> & offers
          </h2>
          <p className="mt-4 text-cfc-cream/70 max-w-md">
            Combos, festive specials, freebies — drop your email and we'll send a heads-up before anyone else.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 rounded-full bg-cfc-cream text-cfc-deep placeholder:text-cfc-deep/40 outline-none focus:ring-4 focus:ring-cfc-butter/50 transition-all font-medium"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cfc-butter text-cfc-deep px-6 py-4 rounded-full font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 crispy-btn whitespace-nowrap"
            >
              {submitted ? '✓ Subscribed!' : (<>Subscribe <Send className="w-4 h-4" /></>)}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
