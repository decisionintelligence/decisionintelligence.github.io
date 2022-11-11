/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  prefix:'tw-',
  important: true,
}
