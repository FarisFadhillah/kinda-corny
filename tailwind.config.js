/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        primary: '#ffffff',
        secondary: '#6D6D6D',
      },
      fontFamily: {
        'myriadpro': ['myriadpro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}