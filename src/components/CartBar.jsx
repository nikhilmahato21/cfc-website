import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, ChevronUp, ChevronDown, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const WhatsAppIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function CartBar() {
  const { cart, addItem, removeItem, clearCart, total, count } = useCart()
  const [expanded, setExpanded] = useState(false)

  const sendWhatsApp = () => {
    const lines = cart.map(i => `• ${i.name}${i.unit ? ` (${i.unit})` : ''} x${i.qty} = ₹${i.price * i.qty}`)
    const text = `🍗 *CFC Order*\n\n${lines.join('\n')}\n\n*Total: ₹${total}*\n\nPlease confirm my order! 🙏`
    window.open(`https://wa.me/918260831810?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          exit={{ y: 120 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {/* Expanded items list */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white border-t-2 border-x-0 border-cfc-red/20 shadow-2xl overflow-hidden"
              >
                <div className="max-h-56 overflow-y-auto px-4 pt-3 pb-1 space-y-3">
                  {cart.map(item => (
                    <div key={item.name} className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-cfc-deep flex-1 leading-tight">{item.name}</span>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => removeItem(item.name)}
                          className="w-7 h-7 rounded-full bg-cfc-deep/10 hover:bg-cfc-red hover:text-white transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-5 text-center font-bold text-sm">{item.qty}</span>
                        <button
                          onClick={() => addItem(item)}
                          className="w-7 h-7 rounded-full bg-cfc-deep text-cfc-cream hover:bg-cfc-red transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <span className="text-sm font-bold text-cfc-red w-14 text-right shrink-0">
                        ₹{item.price * item.qty}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end px-4 pb-2 pt-1 border-t border-cfc-deep/5">
                  <button
                    onClick={clearCart}
                    className="text-xs text-cfc-deep/40 hover:text-cfc-red transition-colors flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" /> Clear cart
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom bar */}
          <div className="bg-cfc-deep text-cfc-cream px-4 py-3 flex items-center gap-3 shadow-2xl">
            <button
              onClick={() => setExpanded(e => !e)}
              className="flex items-center gap-2 flex-1 min-w-0"
            >
              <div className="relative shrink-0">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-cfc-red text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {count}
                </span>
              </div>
              <span className="font-bold truncate">{count} item{count !== 1 ? 's' : ''}</span>
              <span className="text-cfc-cream/50">·</span>
              <span className="font-bold text-yellow-300">₹{total}</span>
              {expanded
                ? <ChevronDown className="w-4 h-4 ml-auto shrink-0" />
                : <ChevronUp className="w-4 h-4 ml-auto shrink-0" />
              }
            </button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={sendWhatsApp}
              className="bg-green-500 hover:bg-green-400 active:bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors shrink-0"
            >
              <WhatsAppIcon />
              <span className="hidden sm:inline">Order on WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
