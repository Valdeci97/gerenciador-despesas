import { styles } from './src/utils/tailwind/index';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: {
        transparent: 'transparent',
        'green-contrast': styles.colors.greenContrast,
        light: styles.colors.lightMode,
      },
      colors: {
        light: styles.colors.light,
        'green-contrast': styles.colors.greenContrast,
      },
      fontSize: {
        '20px': styles.unitsInREMToPX.twenty,
        '24px': styles.unitsInREMToPX.twentyFour,
        '28px': styles.unitsInREMToPX.twentyEigth,
        '32px': styles.unitsInREMToPX.thirtyTwo,
      },
      height: {
        '80px': styles.unitsInREMToPX.eighty,
        '50px': styles.unitsInREMToPX.fifty,
      },
      padding: {
        '30px': styles.unitsInREMToPX.thirty,
        '100px': styles.unitsInREMToPX.oneHundred,
      },
      width: {
        '225px': styles.unitsInREMToPX.twoHundredTwentyFive,
      },
    },
  },
  plugins: [],
};
