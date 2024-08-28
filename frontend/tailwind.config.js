/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'sweet-pink': '#f36eff', /* Sweet Type pink color */
        'shop-white': '#FFFFFF', /* White color */
        'shop-black': '#000000', /* Black color */
      },
      fontFamily: {
        'retro': ['Courier New', 'monospace'], /* Example retro font */
      },
    },
  },
  plugins: [],
}