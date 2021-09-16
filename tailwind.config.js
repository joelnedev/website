module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          'theme': {
            1: '#233240',
            2: '#374F66'
          }
        },
        green: {
          550: "#03A270",
          'theme': {
            1: '#13967D',
            2: '#0C6352'
          }
        },
        purple: {
          'theme': {
            
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
