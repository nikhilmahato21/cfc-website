/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cfc: {
          red: '#B91C1C',
          deep: '#7F1D1D',
          crimson: '#991B1B',
          cream: '#FFF8E7',
          butter: '#FCD34D',
          gold: '#F59E0B',
          char: '#1A0A0A',
          spice: '#EA580C',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'sizzle': 'sizzle 0.6s ease-in-out infinite',
        'steam': 'steam 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        sizzle: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(2deg)' },
        },
        steam: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) scaleX(1.2)', opacity: '0.3' },
          '100%': { transform: 'translateY(-40px) scaleX(0.8)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
