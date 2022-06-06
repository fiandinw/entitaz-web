module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#07d566',
        "primary-dark": '#00AA40',
        "secondary": '#5E8F68'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}