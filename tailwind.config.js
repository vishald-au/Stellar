/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#D3D7E1',
      secondary: {
        DEFAULT: '#FBB4BF',
        500: '#DA6264',
      },
      gray: {
        100: '#FAFAFF',
        DEFAULT: '#aaaaaa',
        500: '#6e6e6e',
        700: '#6e6e6e',
        900: '#101010',
      },
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
    },
  },
  plugins: [],
};
