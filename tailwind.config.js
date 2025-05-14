/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
      },
      colors: {
        bg: '#CCD4D9',
        bgGray: '#2F373B',
        black: '#2A2C2E',
        white: '#FFFFFF',
        darkGrey: '#4A4E51',
        mediumGrey: '#7C8D97',
        blueGray: '#7E8FA1',
        orange: '#C4592E',
        red: '#C83C02',
      },
    },
  },
  plugins: [],
}
