// eslint-disable-next-line @typescript-eslint/no-var-requires
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [
    // @ts-ignore
    function({ addUtilities, addBase }) {
      const newBaseStyles = {
        h1: { fontSize: theme.fontSize['2xl'], fontWeight: theme.fontWeight.bold, marginBottom: theme.spacing[4] },
        h2: {
          fontSize: theme.fontSize.xl,
          fontWeight: theme.fontWeight.bold,
          marginBottom: theme.spacing[4],
        },
        h3: {
          fontSize: theme.fontSize.lg,
          fontWeight: theme.fontWeight.bold,
          marginBottom: theme.spacing[4],
          textDecoration: 'underline',
        },
        h4: { fontWeight: theme.fontWeight.bold, marginBottom: theme.spacing[4] },
        p: { marginBottom: theme.spacing[4] },
        ul: {
          'list-style': 'inside',
        },
        li: {
          paddingLeft: theme.spacing[4],
        },
      }
      const newUtilities = {
        '.transition-all': {
          transition: 'all 250ms ease-in-out',
        },
        '.transition-opacity': {
          transition: 'opacity 250ms ease-in-out',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
      addBase(newBaseStyles)
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
