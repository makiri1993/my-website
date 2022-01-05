const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.rs"],
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
        background: colors.slate,
        primary: colors.orange
      },
      animation: {
        "ping-slow": "ping 4s cubic-bezier(0, 0, 0.2, 1) infinite"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
