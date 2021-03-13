module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/forms")],
};
