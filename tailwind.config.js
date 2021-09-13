module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          'theme': '#233240'
        },
        green: {
          'theme': '#13967D'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
