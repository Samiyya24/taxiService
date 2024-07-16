/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    container: {
      center: true, padding: '20px', screens: {
        xl: "1300px",
        "2xl": "1300px"
      }
    },
    extend: {
      colors: {
        'primary': '#F7931E'
      },
    },

  },
  plugins: [require('flowbite/plugin')
  ],
}