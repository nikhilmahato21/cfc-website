import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Where are you located?',
    a: 'You\'ll find us at Kalinga Bites, Kalinga Vihar, on Sum Hospital Road, Bhubaneswar. Walk in or call for delivery.',
  },
  {
    q: 'How do I place an order?',
    a: 'Easiest way — call us on 8260 831 810. You can also drop us an email at crispyfriedchickenonline@gmail.com.',
  },
  {
    q: 'Do you deliver?',
    a: 'Yes, we deliver hot and fresh across nearby areas. Order in, we\'ll start frying the moment you call.',
  },
  {
    q: 'Is the chicken fresh?',
    a: '100%. We never freeze. Chicken is cut every morning, marinated through the day, and fried only after you order.',
  },
  {
    q: 'How spicy is your food?',
    a: 'Comfortably spicy — full of flavour, not overpowering. If you want it milder or hotter, just tell us when you order.',
  },
  {
    q: 'Do you take bulk orders for events?',
    a: 'Absolutely. Birthdays, office snacks, parties — give us a day\'s notice and we\'ll handle the crunch.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="px-6 lg:px-12 py-16 lg:py-24 relative">
      <div className="grid lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cfc-red/70">
            Frequently Asked
          </span>
          <h2 className="font-serif italic text-4xl lg:text-6xl text-cfc-deep mt-2 leading-tight">
            Good <span className="not-italic font-display text-cfc-red">questions</span>
          </h2>
          <p className="mt-4 text-cfc-deep/70">
            Everything you wanted to know before clicking call.
          </p>
        </motion.div>

        <div className="lg:col-span-8 space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl border-2 ${open === i ? 'border-cfc-red bg-white' : 'border-cfc-deep/15 bg-cfc-cream'} transition-colors overflow-hidden`}
            >
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left p-5 lg:p-6 flex items-center justify-between gap-4"
              >
                <span className="font-display text-lg lg:text-2xl text-cfc-deep tracking-wide pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${open === i ? 'bg-cfc-red text-cfc-cream' : 'bg-cfc-deep text-cfc-cream'}`}
                >
                  <Plus className="w-5 h-5" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 lg:px-6 pb-5 lg:pb-6 text-cfc-deep/80 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
