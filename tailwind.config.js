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
        "secondary": '#059146'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}