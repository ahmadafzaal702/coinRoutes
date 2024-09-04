/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#131722",
      heading: "#343a40",
      paragraph: "#5e5e5e",
      grey: "#d9dadb",
      black: "#000000",
      white: "#ffffff",
      buy: "#2EBD85",
      sell: "#F6465D"

    },
    fontFamily: {
      heading: ["Roboto", "sans-serif"],
      paragraph: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}