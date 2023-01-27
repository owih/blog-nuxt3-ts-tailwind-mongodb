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
        thinLight: '0px 1px 4px rgba(255, 255, 255, 0.3)',
        thinDark: '0px 1px 4px rgba(0, 0, 0, 0.16)',
        dark: '0px 5px 15px rgba(0, 0, 0, 0.35)',
        light: '0px 5px 15px rgba(255, 255, 255, 0.55)'
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
