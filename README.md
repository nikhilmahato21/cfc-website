# CFC — Crispy Fried Chicken

A bold, appetizing single-page website built with **React + Vite + Tailwind CSS + Framer Motion** for CFC, a fried chicken & fast food joint in Kalinga Vihar, Bhubaneswar.

## ✨ Features

- 🍗 **Custom SVG food illustrations** for every menu item (no stock photos needed)
- 🎨 **Sticker / editorial aesthetic** inspired by your reference image
- ✨ **Scroll-triggered animations** powered by Framer Motion
- 🎯 **Micro-interactions** on every button, card, and hover
- 🔥 **Floating decorative chilies & sesame seeds** in the background
- 📜 **Animated marquee** ribbon
- 🔢 **Animated counters** in stats section
- 📂 **Tabbed menu** with all your items, prices, and quantities
- 🪗 **Accordion FAQ**
- 📞 **Click-to-call** CTA throughout
- 📱 **Fully responsive** — desktop, tablet, mobile

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (opens at http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## 📂 Structure

```
src/
├── App.jsx                  # Main app shell
├── main.jsx                 # React entry
├── index.css                # Global styles + custom CSS
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── Stats.jsx            # Animated counters
    ├── Categories.jsx       # 4 category cards
    ├── Story.jsx            # Brand story + chef illustration
    ├── Marquee.jsx          # Scrolling banner
    ├── Menu.jsx             # Tabbed menu (Fast Food + Crispy Items)
    ├── HowItsMade.jsx       # 4-step process
    ├── Testimonials.jsx     # Customer reviews
    ├── FAQ.jsx              # Accordion FAQ
    ├── Newsletter.jsx       # Email signup
    ├── Footer.jsx
    └── FloatingElements.jsx # Background chilies & seeds
```

## 🎨 Customization

- **Brand colors** live in `tailwind.config.js` under `theme.extend.colors.cfc`
- **Fonts**: Bebas Neue (display), Playfair Display (serif), DM Sans (body) — pulled from Google Fonts in `index.html`
- **Menu items**: edit `menuData` inside `src/components/Menu.jsx`
- **Contact details**: phone, email, and address are in `Footer.jsx`, `Navbar.jsx`, and `Story.jsx`

## 📦 Tech

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (icons)

— Made with 🔥 for CFC
