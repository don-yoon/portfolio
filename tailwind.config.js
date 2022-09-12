/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "sm": {"max": "767px"},
      "md": {"min": "768px", "max": "1023px"},
      "lg": {"min": "1024px", "max": "1279px"},
      "xl": {"min": "1280px", "max": "1535px"},
      "2xl": {"min": "1536px"},
    },
    fontFamily: {
      Edu: ["Edu NSW ACT Foundation", "cursive"],
      Raleway: ["Raleway", "sans-serif"]
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}
