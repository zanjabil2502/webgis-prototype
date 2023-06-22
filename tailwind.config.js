/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': {
        DEFAULT: '#4abdac',
        100: '#e4f4f1',
        200: '#c8e9e3',
        300: '#acded5',
        400: '#8fd3c7 ',
        500: '#6fc8b9 ',
        600: '#409b8d ',
        700: '#367a6f ',
        800: '#2b5a53 ',
        900: '#203d38 ',
        1000: '#203d38 ',
      },
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
  },
  plugins: [],
  }
}