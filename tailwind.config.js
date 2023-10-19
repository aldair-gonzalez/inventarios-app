/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    colors: {
      white: {
        DEFAULT: '#FAF7F2',
        300: '#FAF7F24d',
        500: '#FAF7F280',
      },
      black: {
        DEFAULT: '#2B2B2A',
        300: '#2B2B2A4d',
      },
      gray: {
        DEFAULT: '#5C5A59',
        300: '#5C5A594d',
        500: '#5C5A5980',
      },
      transparent: 'transparent'
  },
  plugins: [],
}};
