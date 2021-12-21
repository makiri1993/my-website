module.exports = {
  mode: "jit",
  purge: ["src/**/*.rs"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true
      },
      fontSize: {
        0: "0rem"
      },
      minHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "6/10": "60%",
        "3/4": "75%",
        full: "100%"
      },
      colors: {
        // background: colors.gray[800],
        // "background-darker": colors.gray[900],
        // "background-lighter": colors.gray[700],
        primary: "#C17C74",
        secondary: "#79A9D1"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
