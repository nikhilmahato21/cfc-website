import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ end, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const stepTime = 16
    const totalSteps = (duration * 1000) / stepTime
    const increment = end / totalSteps
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { value: 12000, suffix: '+', label: 'Chickens Fried' },
  { value: 99, suffix: '%', label: 'Happy Eaters' },
  { value: 4500, suffix: '+', label: 'Hot Deliveries' },
  { value: 100, suffix: '%', label: 'Hand Battered' },
]

export default function Stats() {
  return (
    <section className="px-6 lg:px-12 py-10 lg:py-14 grid grid-cols-2 lg:grid-cols-4 gap-6 border-y-2 border-dashed border-cfc-red/20">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="text-center"
        >
          <div className="font-display text-4xl lg:text-6xl text-cfc-red leading-none">
            <Counter end={stat.value} suffix={stat.suffix} />
          </div>
          <div className="mt-2 text-xs lg:text-sm font-bold uppercase tracking-widest text-cfc-deep/70">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </section>
  )
}
