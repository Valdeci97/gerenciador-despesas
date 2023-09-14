/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    backgroundColor: {
      transparent: 'transparent',
      btngreen: '#43B27F',
      theme: {
        light: '#EDFDF2',
      },
      black: '#000',
    },
    padding: {
      30: '3rem',
      100: '10rem',
    },
    height: {
      80: '8rem',
      50: '5rem',
    },
    screens: {
      'sc-360': { max: '360px' },
      'sc-361-440': { min: '361px', max: '440px' },
    },
    extend: {
      colors: {
        light: '#3b3b3b',
        'green-contrast': '#43B27F',
      },
      fontSize: {
        fgl: '2rem',
        'mobile-menu-link': '2.8rem',
        'mobile-menu': '2rem',
      },
      width: {
        225: '22.5rem',
      },
    },
  },
  plugins: [],
};
