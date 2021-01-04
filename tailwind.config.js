module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': 'Abril Fatface',
      'body': 'Open Sans'
    },
    extend: {}
  },
  variants: {
    extend: {
      fontFamily: ['hover', 'focus']
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
