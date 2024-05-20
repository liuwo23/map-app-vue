/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent:'#FFA279',
        primary: '#F3743D'
      }
    },
  },
  plugins: [],
}

