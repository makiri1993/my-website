module.exports = {
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.transition-all': {
          transition: 'all 250ms ease-in-out',
        },
        '.transition-opacity': {
          transition: 'opacity 250ms ease-in-out',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontSize: {
        0: '0rem',
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '6/10': '60%',
        '3/4': '75%',
        full: '100%',
      },
    },
  },
}
