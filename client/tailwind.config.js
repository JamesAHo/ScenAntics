/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        slideup: 'slideup 1s ease-in-out',
      }
    },
  },
  plugins: [],
}
