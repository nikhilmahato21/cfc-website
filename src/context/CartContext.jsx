import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name)
      if (existing) return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const removeItem = (name) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === name)
      if (existing?.qty === 1) return prev.filter(i => i.name !== name)
      return prev.map(i => i.name === name ? { ...i, qty: i.qty - 1 } : i)
    })
  }

  const clearCart = () => setCart([])
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = cart.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
