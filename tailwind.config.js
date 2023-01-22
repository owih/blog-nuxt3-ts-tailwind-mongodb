/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1440px'
    },
    extend: {
      boxShadow: {
        small: 'box-shadow: #5386E4 0px 10px 50px;',
        middle: 'box-shadow: #5386E4 0px 18px 50px -10px;'
      },
      colors: {
        primary: '#FF3366',
        secondary: '#5386E4',
        light: '#FFFAFF',
        dark: '#090C08',
        green: '#16a085'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        title: ['Manrope', 'sans-serif'],
        navigation: ['BebusNeue', 'sans-serif']
      },
      zIndex: {
        menu: '100',
        burger: '110'
      }
    }
  },
  plugins: []
}