/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        base: "#3B62CA",
        darkBlue: "#0e0e23",
        textHeader: "#1d212f",
        textMuted: "#8f8fb1",
        darkTheme: "#0e0e23",
        darkBody: "#24243e",
        darkText: "#d0d0e2",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
