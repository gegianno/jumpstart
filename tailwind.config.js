module.exports = {
  purge: [
    "./app/**/*.html.erb",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    // uncomment to add tailwindcss/forms
    // require('@tailwindcss/forms'),
  ],
}
