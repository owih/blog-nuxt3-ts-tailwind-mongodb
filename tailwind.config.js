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
    extend: {
      colors: {
        primary: '#EFCB68',
        secondary: '#5386E4',
        light: '#FFFAFF',
        dark: '#090C08'
      },
      fontFamily: {
        sans: ['"Clinton"', '"sans-serif"'],
        title: ['"Montreau"', '"sans-serif"'],
        navigation: ['"Stopwatch"', '"sans-serif"']
      }
    }
  },
  plugins: []
}
