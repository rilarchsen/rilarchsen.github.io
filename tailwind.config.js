module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
      'montserrat': ['"montserrat"', 'normal']
      },
      backgroundImage: {
        'richard-bg': "url('/bg1.jpg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
