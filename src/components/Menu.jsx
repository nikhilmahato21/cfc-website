import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Flame, Minus } from 'lucide-react'
import { useCart } from '../context/CartContext'

// ── Placeholder images ─────────────────────────────────────────────────────
// Replace each `image` value with your real photo URL when ready.
// ──────────────────────────────────────────────────────────────────────────

const menuData = {
  'fast-food': {
    label: 'Fast Food',
    note: 'Quantity: Half Plate',
    items: [
      {
        name: 'Single Egg Chicken Chowmin',
        price: 60,
        tag: 'Classic',
        image: 'https://myfoodstory.com/wp-content/uploads/2021/07/Easy-Chicken-Chow-Mein-3.jpg',
      },
      {
        name: 'Double Egg Chicken Chowmin',
        price: 70,
        tag: 'Loaded',
        image: 'https://knifeandsoul.com/wp-content/uploads/2022/09/chicken_chow_mein_step_4.jpg',
      },
      {
        name: 'Single Egg Chicken Roll',
        price: 60,
        tag: 'Classic',
        image: 'https://img.clevup.in/248878/1660988348406_SKU-0010_0.jpg?width=600&format=webp',
      },
      {
        name: 'Double Egg Chicken Roll',
        price: 70,
        tag: 'Loaded',
        image: 'https://storage.googleapis.com/shy-pub/167599/1648445263713_SKU-0675_0.jpg',
      },
      {
        name: 'Crispy Chicken Pakoda',
        price: 60,
        tag: 'Spicy',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXe7UYiMgPRYc3_xmMa8-2N6bFanVffQBmw&s',
      },
    ],
  },
  'crispy': {
    label: 'Crispy Items',
    note: 'Sold by the piece — order as many as you can crunch',
    items: [
      {
        name: 'Crispy Hot Chicken',
        price: 39,
        unit: '1 pc',
        tag: 'Hot',
        image: 'https://www.oetker.com.my/assets/recipes/assets/8aaf3e3f237f4009912cf8d0a23cd036/1272x764/extrah-skentucky-superhot-spicychickenwings.jpg'
      },
      {
        name: 'Crispy Chicken Wings',
        price: 29,
        unit: '1 pc',
        tag: 'Saucy',
        image: 'https://www.lifeisbutadish.com/wp-content/uploads/2016/01/Crispy-Baked-Chicken-Wings-9.jpg',
      },
      {
        name: 'Crispy Chicken Drumstick',
        price: 59,
        unit: '1 pc',
        tag: 'Big Bite',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4eXJ6v4YR5m6TzmUZpdj9tph_6iNvrd4Ug&s',
      },
      {
        name: 'Crispy Chicken Stripes',
        price: 29,
        unit: '1 pc',
        tag: 'Crunchy',
        image: 'https://www.greenchickchop.in/cdn/shop/files/CrispyChickenFinger_1__result.webp?v=1682588223',
      },
      {
        name: 'Crispy Chicken Stick',
        price: 29,
        unit: '1 pc',
        tag: 'On-the-go',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TOhNxBIH7lKZyd2h-VuvgeVPzG61YrIklg&s',
      },
      {
        name: 'Chicken Burger',
        price: 49,
        unit: '1 pc',
        tag: 'Filling',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBffN5VOapKzJ88Y07pBTsWu29TQgcX83-sw&s',
      },
      {
        name: 'Crispy French Fries',
        price: 29,
        unit: '100 gm',
        tag: 'Side',
        image: 'https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg',
      },
      {
        name: 'Crispy Spring Potato',
        price: 29,
        unit: '1 pc',
        tag: 'Twist',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbxfETgmD5nas8jcp6Rkbg5jR0NOV94ZkNw&s',
      },
      {
        name: 'Crispy Chicken Popcorn',
        price: 49,
        unit: '100 gm',
        tag: 'Shareable',
        image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Popcorn-Chicken.jpg',
      },
    ],
  },
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('crispy')
  const { cart, addItem, removeItem } = useCart()
  const data = menuData[activeTab]

  const getCartItem = (name) => cart.find(i => i.name === name)

  return (
    <section id="menu" className="px-6 lg:px-12 py-16 lg:py-24 relative spice-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-cfc-red/70">
          The Lineup
        </span>
        <h2 className="font-serif italic text-5xl lg:text-7xl text-cfc-deep mt-2 leading-none">
          The <span className="not-italic font-display text-cfc-red">Menu</span>
        </h2>
        <p className="mt-4 text-cfc-deep/70 max-w-xl mx-auto">
          Everything fried fresh on order. Tap a category, pick your fight, we deliver hot.
        </p>
      </motion.div>

      {/* Tab switcher */}
      <div className="flex justify-center gap-2 lg:gap-4 mb-10">
        {Object.entries(menuData).map(([key, val]) => (
          <motion.button
            key={key}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveTab(key)}
            className={`px-5 lg:px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs lg:text-sm transition-all ${
              activeTab === key
                ? 'bg-cfc-red text-cfc-cream shadow-lg shadow-cfc-red/30'
                : 'bg-cfc-cream text-cfc-deep border-2 border-cfc-deep/20 hover:border-cfc-red'
            }`}
          >
            {val.label}
          </motion.button>
        ))}
      </div>

      {/* Note */}
      <motion.div
        key={`note-${activeTab}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-8 text-sm text-cfc-deep/60 italic"
      >
        — {data.note} —
      </motion.div>

      {/* Items grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {data.items.map((item, i) => {
            const cartItem = getCartItem(item.name)
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-3xl p-5 lg:p-6 border-2 border-cfc-deep/10 hover:border-cfc-red transition-all relative overflow-hidden"
                style={{ boxShadow: '0 4px 0 0 rgba(127,29,29,0.1)' }}
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 bg-cfc-butter text-cfc-deep text-[10px] font-bold uppercase px-2 py-1 rounded-full tracking-wider flex items-center gap-1 z-10">
                  <Flame className="w-3 h-3" fill="currentColor" />
                  {item.tag}
                </div>

                {/* Cart qty badge */}
                {cartItem && (
                  <div className="absolute top-4 left-4 bg-cfc-red text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center z-10 shadow-md">
                    {cartItem.qty}
                  </div>
                )}

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-square mb-4 relative rounded-2xl overflow-hidden bg-cfc-butter/10"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Info */}
                <h3 className="font-display text-xl lg:text-2xl text-cfc-deep leading-tight tracking-wide">
                  {item.name}
                </h3>
                {item.unit && (
                  <p className="text-xs text-cfc-deep/50 mt-1 uppercase tracking-wider">
                    {item.unit}
                  </p>
                )}

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-3xl text-cfc-red">
                    ₹{item.price}
                  </span>

                  {/* Add / qty controls */}
                  {cartItem ? (
                    <div className="flex items-center gap-1">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeItem(item.name)}
                        className="bg-cfc-deep/10 hover:bg-cfc-red hover:text-white text-cfc-deep w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Remove one"
                      >
                        <Minus className="w-4 h-4" />
                      </motion.button>
                      <span className="w-7 text-center font-bold text-cfc-deep">{cartItem.qty}</span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addItem(item)}
                        className="bg-cfc-red text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Add one more"
                      >
                        <Plus className="w-4 h-4" />
                      </motion.button>
                    </div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-cfc-deep text-cfc-cream w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-cfc-red transition-colors"
                      onClick={() => addItem(item)}
                      aria-label="Add to cart"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Order CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-cfc-deep/70 mb-4 text-sm">Hungry? Call us straight, we'll start frying.</p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="tel:8260831810"
          className="inline-flex items-center gap-3 bg-cfc-red text-cfc-cream px-8 py-4 rounded-full font-display text-xl tracking-wider shadow-xl shadow-cfc-red/30 crispy-btn"
        >
          <Flame className="w-5 h-5" fill="currentColor" />
          Call 8260 831 810
        </motion.a>
      </motion.div>
    </section>
  )
}
