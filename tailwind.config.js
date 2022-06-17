/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#23C9E8',
      'pink': '#F74A6F',
      'black': 'rgba(0, 0, 0, 0.9)',
      'dark': 'rgba(0, 0, 0, 0.75)',
      'white': 'white',
    },
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {},
  },
  plugins: [],
}
