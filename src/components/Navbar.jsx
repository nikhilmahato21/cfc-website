import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
    { label: 'How It\'s Made', href: '#how' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative px-6 lg:px-12 py-5 flex items-center justify-between border-b-2 border-dashed border-cfc-red/20"
    >
      {/* Left links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-cfc-deep">
        {links.slice(0, 3).map((link) => (
          <a key={link.href} href={link.href} className="link-underline uppercase">
            {link.label}
          </a>
        ))}
      </div>

      {/* Logo */}
      <motion.a
        href="#home"
        whileHover={{ scale: 1.05, rotate: -2 }}
        className="absolute left-1/2 -translate-x-1/2 flex items-center"
      >
        <img
          src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1779093093/client/WhatsApp_Image_2026-05-18_at_12.09.52-removebg-preview_n8n5fp.png"
          alt="CFC Logo"
          className="h-16 lg:h-20 w-auto object-contain"
        />
      </motion.a>

      {/* Right links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-cfc-deep">
        {links.slice(3).map((link) => (
          <a key={link.href} href={link.href} className="link-underline uppercase">
            {link.label}
          </a>
        ))}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#menu"
          className="bg-cfc-deep text-cfc-cream px-5 py-2 rounded-full uppercase text-xs tracking-widest crispy-btn relative"
        >
          Order Now
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-cfc-red text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
              {count}
            </span>
          )}
        </motion.a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden text-cfc-deep ml-auto"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-cfc-cream border-t-2 border-dashed border-cfc-red/20 p-6 flex flex-col gap-4 md:hidden z-50"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-cfc-deep font-bold uppercase text-sm">
              {link.label}
            </a>
          ))}
          <a href="#menu" onClick={() => setOpen(false)} className="bg-cfc-deep text-cfc-cream px-5 py-3 rounded-full uppercase text-xs tracking-widest text-center relative">
            Order Now
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-cfc-red text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                {count}
              </span>
            )}
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
