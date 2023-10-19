/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    colors: {
      white: '#FAF7F2',
      black: {
        300: '#2B2B2A4d',
        900: '#2B2B2A',
      },
      gray: '#5C5A59',
      transparent: 'transparent'
  },
  plugins: [],
}};
