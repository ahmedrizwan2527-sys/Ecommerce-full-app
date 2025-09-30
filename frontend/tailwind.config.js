/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // index.html bhi add kar lo
  ],
  theme: {
    extend: {
      colors:{
        "rabbit-red": "#ea2e0e",
      }
    },
  },
  plugins: [
      require('tailwind-scrollbar-hide')
  ],
}