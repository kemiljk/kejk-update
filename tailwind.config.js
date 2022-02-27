const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        display: 'Newsreader',
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      backgroundColor: ['active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
