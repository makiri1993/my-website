// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontSize, fontWeight, spacing, colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: [],
  plugins: [
    ({ addBase }) => {
      const newBaseStyles = {
        h1: { fontSize: fontSize['2xl'], fontWeight: fontWeight.bold, marginBottom: spacing[4] },
        h2: {
          fontSize: fontSize.xl,
          fontWeight: fontWeight.bold,
          marginBottom: spacing[4],
        },
        h3: {
          fontSize: fontSize.lg,
          fontWeight: fontWeight.bold,
          marginBottom: spacing[4],
          textDecoration: 'underline',
        },
        h4: { fontWeight: fontWeight.bold, marginBottom: spacing[4] },
        p: { marginBottom: spacing[4] },
        ul: {
          'list-style': 'inside',
        },
        li: {
          paddingLeft: spacing[4],
        },
      }
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
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '6/10': '60%',
        '3/4': '75%',
        full: '100%',
      },
      colors: {
        background: colors.gray[800],
        'background-darker': colors.gray[900],
        'background-lighter': colors.gray[700],
        primary: '#C17C74',
        secondary: '#79A9D1',
      },
    },
  },
}
