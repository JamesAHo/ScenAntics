/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      
    },
    extend: {
      animation: {
        slideup: 'slideup 1s ease-in-out',
      }
    },
  },
  plugins: [require("daisyui")],
}
