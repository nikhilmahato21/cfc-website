import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Categories from './components/Categories'
import Story from './components/Story'
import Marquee from './components/Marquee'
import Menu from './components/Menu'
import HowItsMade from './components/HowItsMade'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'
import CartBar from './components/CartBar'
import { CartProvider } from './context/CartContext'

export default function App() {
  return (
    <CartProvider>
    <div className="relative bg-cfc-red min-h-screen overflow-x-hidden">
      <FloatingElements />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-10">
        <div className="bg-cfc-cream rounded-3xl shadow-2xl overflow-hidden noise-overlay">
          <Navbar />
          <Hero />
          <Stats />
          <Categories />
          <Story />
        </div>

        <Marquee />

        <div className="bg-cfc-cream rounded-3xl shadow-2xl overflow-hidden mt-6 noise-overlay">
          <Menu />
          <HowItsMade />
          <Testimonials />
          <FAQ />
          <Newsletter />
          <Footer />
        </div>
      </div>
      <CartBar />
    </div>
    </CartProvider>
  )
}
