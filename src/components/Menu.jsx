import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Flame, Minus } from 'lucide-react'
import { useCart } from '../context/CartContext'

// ── Placeholder images ─────────────────────────────────────────────────────
// Replace each `image` value with your real photo URL when ready.
// ──────────────────────────────────────────────────────────────────────────

const menuData = {
  'crispy': {
    label: 'Crispy',
    note: 'Hot & crunchy — fried fresh on every order',
    items: [
      { name: 'Chicken Crispy Stick', price: 29, unit: '1 pc', tag: 'Crunchy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TOhNxBIH7lKZyd2h-VuvgeVPzG61YrIklg&s' },
      { name: 'Chicken Crispy Stripe', price: 29, unit: '1 pc', tag: 'Crunchy', image: 'https://www.greenchickchop.in/cdn/shop/files/CrispyChickenFinger_1__result.webp?v=1682588223' },
      { name: 'Chicken Crispy Wings', price: 49, unit: '1 pc', tag: 'Saucy', image: 'https://www.lifeisbutadish.com/wp-content/uploads/2016/01/Crispy-Baked-Chicken-Wings-9.jpg' },
      { name: 'Chicken Crispy Drumstick', price: 59, unit: '1 pc', tag: 'Big Bite', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4eXJ6v4YR5m6TzmUZpdj9tph_6iNvrd4Ug&s' },
    ],
  },
  'meals': {
    label: 'Meals',
    note: 'Chowmin, rolls & maggie — made fresh to fill you up',
    items: [
      { name: 'Single Egg Chicken Chowmin', price: 49, tag: 'Classic', image: 'https://myfoodstory.com/wp-content/uploads/2021/07/Easy-Chicken-Chow-Mein-3.jpg' },
      { name: 'Double Egg Chicken Chowmin', price: 59, tag: 'Loaded', image: 'https://knifeandsoul.com/wp-content/uploads/2022/09/chicken_chow_mein_step_4.jpg' },
      { name: 'Single Egg Chicken Roll', price: 59, tag: 'Classic', image: 'https://img.clevup.in/248878/1660988348406_SKU-0010_0.jpg?width=600&format=webp' },
      { name: 'Double Egg Chicken Roll', price: 69, tag: 'Loaded', image: 'https://storage.googleapis.com/shy-pub/167599/1648445263713_SKU-0675_0.jpg' },
      { name: 'Plain Masala Maggie', price: 29, tag: 'Comfort', image: 'https://myfoodstory.com/wp-content/uploads/2021/07/Easy-Chicken-Chow-Mein-3.jpg' },
      { name: 'Single Egg Chicken Masala Maggie', price: 49, tag: 'Filling', image: 'https://knifeandsoul.com/wp-content/uploads/2022/09/chicken_chow_mein_step_4.jpg' },
      { name: 'Double Egg Chicken Masala Maggie', price: 59, tag: 'Loaded', image: 'https://myfoodstory.com/wp-content/uploads/2021/07/Easy-Chicken-Chow-Mein-3.jpg' },
    ],
  },
  'fastfood': {
    label: 'Fast Food',
    note: 'Quick bites for when hunger hits fast',
    items: [
      { name: 'Chicken Pakoda', price: 59, unit: '5 pcs', tag: 'Spicy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXe7UYiMgPRYc3_xmMa8-2N6bFanVffQBmw&s' },
      { name: 'Chicken Wings Pakoda', price: 49, unit: '1 pc', tag: 'Hot', image: 'https://www.lifeisbutadish.com/wp-content/uploads/2016/01/Crispy-Baked-Chicken-Wings-9.jpg' },
      { name: 'Chicken Stick Pakoda', price: 29, unit: '1 pc', tag: 'Snack', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1TOhNxBIH7lKZyd2h-VuvgeVPzG61YrIklg&s' },
      { name: 'Chicken Drumstick Pakoda', price: 59, unit: '1 pc', tag: 'Big Bite', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ4eXJ6v4YR5m6TzmUZpdj9tph_6iNvrd4Ug&s' },
    ],
  },
  'tandoori': {
    label: 'Tandoori',
    note: 'Smoky & charred — marinated and roasted to perfection',
    items: [
      { name: 'Chicken Tandoori Stick', price: 29, unit: '1 pc', tag: 'Smoky', image: 'https://www.oetker.com.my/assets/recipes/assets/8aaf3e3f237f4009912cf8d0a23cd036/1272x764/extrah-skentucky-superhot-spicychickenwings.jpg' },
      { name: 'Chicken Tandoori Wings', price: 49, unit: '1 pc', tag: 'Tandoori', image: 'https://www.oetker.com.my/assets/recipes/assets/8aaf3e3f237f4009912cf8d0a23cd036/1272x764/extrah-skentucky-superhot-spicychickenwings.jpg' },
      { name: 'Chicken Tandoori Drumstick', price: 59, unit: '1 pc', tag: 'Juicy', image: 'https://www.oetker.com.my/assets/recipes/assets/8aaf3e3f237f4009912cf8d0a23cd036/1272x764/extrah-skentucky-superhot-spicychickenwings.jpg' },
    ],
  },
  'snacks': {
    label: 'Snacks',
    note: 'Bite-size and impossible to stop at just one',
    items: [
      { name: 'Potato Twister', price: 29, unit: '1 pc', tag: 'Twist', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbxfETgmD5nas8jcp6Rkbg5jR0NOV94ZkNw&s' },
    ],
  },
  'fries': {
    label: 'French Fries',
    note: 'Golden & salted — fresh out the fryer every time',
    items: [
      { name: 'French Fries Small', price: 29, unit: 'Small', tag: 'Side', image: 'https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg' },
      { name: 'French Fries Medium', price: 39, unit: 'Medium', tag: 'Side', image: 'https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg' },
      { name: 'French Fries Big', price: 49, unit: 'Big', tag: 'Side', image: 'https://www.recipetineats.com/tachyon/2022/09/Fries-with-rosemary-salt_1.jpg' },
    ],
  },
  'burger': {
    label: 'Burger',
    note: 'Stacked & sauced — crispy chicken in a soft bun',
    items: [
      { name: 'Plain Chicken Burger', price: 39, unit: '1 pc', tag: 'Classic', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBffN5VOapKzJ88Y07pBTsWu29TQgcX83-sw&s' },
      { name: 'Cheese Chicken Burger', price: 49, unit: '1 pc', tag: 'Cheesy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBffN5VOapKzJ88Y07pBTsWu29TQgcX83-sw&s' },
    ],
  },
  'sandwich': {
    label: 'Sandwich',
    note: 'Toasted & packed — grab and go',
    items: [
      { name: 'Plain Sandwich', price: 29, unit: '1 pc', tag: 'Simple', image: 'https://img.magnific.com/free-photo/sandwich_1339-1108.jpg?semt=ais_hybrid&w=740&q=80' },
      { name: 'Egg Sandwich', price: 39, unit: '1 pc', tag: 'Eggy', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBioXkVeNKqxudv7kelIGuN0ZA1juiuvCk5Q&s' },
      { name: 'Egg Chicken Sandwich', price: 49, unit: '1 pc', tag: 'Loaded', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4n400PqmY5p_25v7-IXD7WVhYmtUM0AMN9A&s' },
    ],
  },
  'pizza': {
    label: 'Pizza',
    note: 'Hand-stretched, loaded with cheese — baked fresh to order',
    items: [
      { name: 'Plain Cheese Pizza', price: 69, tag: 'Classic', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop' },
      { name: 'Chicken Cheese Pizza', price: 89, tag: 'Loaded', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop' },
      { name: 'Tandoori Chicken Cheese Pizza', price: 99, tag: 'Smoky', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop' },
      { name: 'Crispy Chicken Cheese Pizza', price: 99, tag: 'Crunchy', image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&auto=format&fit=crop' },
    ],
  },
  'drinks': {
    label: 'Drinks',
    note: 'Chill out with our refreshing cold drinks & mocktails',
    items: [
      { name: 'Plain Cola', price: 39, tag: 'Classic', image: 'https://media.istockphoto.com/id/530428650/photo/cola-glass-with-ice-cubes.jpg?s=612x612&w=0&k=20&c=keqH2KNWHO1sFxtsBfx5EZjyep1CRBHIqwe_ZwxszHc=' },
      { name: 'Plain Sprite', price: 39, tag: 'Fizzy', image: 'https://d1w7312wesee68.cloudfront.net/g17-4fWiinGJbf6SCpFgh3-M3Yai5LZkDNips82mrDw/resize:fit:720:720/plain/s3://toasttab/restaurants/brand/coca-cola/Sprite_Fountain.jpg' },
      { name: 'Jal Jeera Mixed', price: 39, tag: 'Tangy', image: 'https://sinfullyspicy.com/wp-content/uploads/2012/06/1.jpg' },
      { name: 'Lemon Mint Mixed', price: 49, tag: 'Fresh', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1MTVTpgCxPF-0fchNZj_9bxwXvazuRUBYA&s' },
      { name: 'Blue Lagoon', price: 49, tag: 'Special', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDCgR4P2_SXS8CIxhLHTVJ3nohagEiXT5GTw&s' },
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
      <div className="overflow-x-auto -mx-6 lg:mx-0 mb-10" style={{ WebkitOverflowScrolling: 'touch' }}>
        <div className="flex gap-2 lg:gap-3 px-6 lg:px-0 pb-1 w-max lg:w-auto lg:flex-wrap lg:justify-center mx-auto">
          {Object.entries(menuData).map(([key, val]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab(key)}
              className={`px-4 lg:px-6 py-2.5 lg:py-3 rounded-full font-bold uppercase tracking-wider text-xs lg:text-sm transition-all whitespace-nowrap shrink-0 ${
                activeTab === key
                  ? 'bg-cfc-red text-cfc-cream shadow-lg shadow-cfc-red/30'
                  : 'bg-cfc-cream text-cfc-deep border-2 border-cfc-deep/20 hover:border-cfc-red'
              }`}
            >
              {val.label}
            </motion.button>
          ))}
        </div>
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
