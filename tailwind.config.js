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
      colors: {
        primary: '#FF3366',
        secondary: '#5386E4',
        light: '#FFFAFF',
        dark: '#090C08'
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
