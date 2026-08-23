/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        salon: {
          bg: '#0b0b0b',
          dark: '#141414',
          border: '#242424',
          gold: {
            DEFAULT: '#c5a059',
            hover: '#d6b26b'
          },
          tan: '#c49b66'
        }
      },
      fontFamily: {
        display: ['"Teko"', 'sans-serif'],
        sans: ['"Jost"', '"Inter"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
}
