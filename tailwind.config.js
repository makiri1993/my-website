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
    },
  },
}
