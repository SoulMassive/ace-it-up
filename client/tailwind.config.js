import tailwindcssForms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#EDD3A8',
          DEFAULT: '#DAB57F',
          dark: '#C8A870',
          mute: 'rgba(218, 181, 127, 0.15)',
          border: 'rgba(218, 181, 127, 0.25)',
        },
        espresso: {
          base: '#0e0c0a',
          50: '#4A4440',
          100: '#3A3530',
          200: '#2E2A26',
          300: '#24211E',
          400: '#1A1816',
        },
        brand: {
          DEFAULT: '#DAB57F',
          50: '#EDD3A8',
          100: '#EDD3A8',
          200: '#DAB57F',
          300: '#C8A870',
          400: '#C8A870',
          500: '#DAB57F',
          600: '#C8A870',
          700: '#C8A870',
          800: '#1A1816',
          900: '#0e0c0a',
        },
        dark: {
          50: '#B3B3B3',
          100: '#808080',
          200: '#2E2A26',
          300: '#24211E',
          400: '#1A1816',
          500: '#0e0c0a',
          800: '#1A1816',
          850: '#24211E',
          900: '#0e0c0a',
          950: '#060504',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [
    tailwindcssForms,
  ],
}

