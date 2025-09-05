/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'ml': '896px', // промежуточный брейкпоинт между md и lg
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2300px',
    },
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
        'vasek': ['Vasek', 'sans-serif'],
      },
      colors: {
        bg: '#CCD4D9',
        bgGrey: '#2F373B',
        black: '#2A2C2E',
        white: '#FFFFFF',
        darkGrey: '#4A4E51',
        mediumGrey: '#7C8D97',
        blueGray: '#7E8FA1',
        orange: '#C4592E',
        orangeBright: '#C83C02',
        red: '#C83C02',
      },
    },
  },
  plugins: [],
}