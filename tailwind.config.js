/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      black: {
        300: "#2222224d",
        900: "#222222",
      },
      gray: {
        100: "#EEEEEE",
        900: "#D1D1D1"
      }
    }
  },
  plugins: [],
}

