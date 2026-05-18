import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="px-6 lg:px-12 pt-12 pb-8 border-t-2 border-dashed border-cfc-red/20">
      <div className="grid lg:grid-cols-12 gap-10 mb-12">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="mb-4">
            <img
              src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1779093093/client/WhatsApp_Image_2026-05-18_at_12.09.52-removebg-preview_n8n5fp.png"
              alt="CFC Logo"
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="font-serif italic text-xl lg:text-2xl text-cfc-deep leading-snug max-w-md">
            "Hand-battered, double-fried, soul-satisfying chicken — straight outta Kalinga Vihar."
          </p>
          <div className="flex gap-3 mt-6">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="#"
              className="w-11 h-11 bg-cfc-deep text-cfc-cream rounded-full flex items-center justify-center hover:bg-cfc-red transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="#"
              className="w-11 h-11 bg-cfc-deep text-cfc-cream rounded-full flex items-center justify-center hover:bg-cfc-red transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4"
        >
          <h3 className="font-display text-xl text-cfc-deep mb-4 tracking-wide uppercase">Get in touch</h3>
          <div className="space-y-3">
            <a href="tel:8260831810" className="flex items-start gap-3 text-cfc-deep/80 hover:text-cfc-red transition-colors group">
              <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-cfc-red" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-60">Call us</div>
                <div className="font-bold">8260 831 810</div>
              </div>
            </a>
            <a href="mailto:crispyfriedchickenonline@gmail.com" className="flex items-start gap-3 text-cfc-deep/80 hover:text-cfc-red transition-colors break-all">
              <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-cfc-red" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-60">Email</div>
                <div className="font-bold text-sm">crispyfriedchickenonline@gmail.com</div>
              </div>
            </a>
            <div className="flex items-start gap-3 text-cfc-deep/80">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-cfc-red" />
              <div>
                <div className="text-xs uppercase tracking-wider opacity-60">Visit</div>
                <div className="font-bold text-sm">Kalinga Bites, Kalinga Vihar,<br />Sum Hospital Road, Bhubaneswar</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <h3 className="font-display text-xl text-cfc-deep mb-4 tracking-wide uppercase">Kitchen hours</h3>
          <div className="space-y-2 text-sm text-cfc-deep/80">
            <div className="flex justify-between border-b border-dashed border-cfc-deep/20 pb-2">
              <span>Mon — Fri</span>
              <span className="font-bold">11AM — 11PM</span>
            </div>
            <div className="flex justify-between border-b border-dashed border-cfc-deep/20 pb-2">
              <span>Sat — Sun</span>
              <span className="font-bold">10AM — 12AM</span>
            </div>
            <div className="text-xs text-cfc-red/70 mt-3 font-bold uppercase tracking-wider">
              ● Open & frying now
            </div>
          </div>
        </motion.div>
      </div>

      {/* Big brand text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative my-8"
      >
        <h2 className="font-display text-[18vw] lg:text-[14vw] leading-none text-cfc-red/90 text-center tracking-tighter">
          CRISPY · FRIED · CHICKEN
        </h2>
      </motion.div>

      {/* Bottom strip */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t-2 border-dashed border-cfc-red/20 text-xs text-cfc-deep/60">
        <div>© {new Date().getFullYear()} CFC — Crispy Fried Chicken. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="link-underline">Privacy</a>
          <a href="#" className="link-underline">Terms</a>
          <a href="#" className="link-underline">Order</a>
        </div>
      </div>
    </footer>
  )
}
