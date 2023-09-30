import { styles } from './src/utils/tailwind/index';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        transparent: 'transparent',
        'green-contrast': styles.colors.greenContrast,
        light: styles.colors.lightMode,
        dark: styles.colors.darkMode,
      },
      border: {
        'grey-contrast': styles.colors.greyContrast,
      },
      colors: {
        light: styles.colors.light,
        'dark-mode-common': styles.colors.darkMode,
        'green-contrast': styles.colors.greenContrast,
        'grey-contrast': styles.colors.greyContrast,
        'light-mode-common': styles.colors.white,
        'light-mode-contrast': styles.colors.lightMode,
        'open-nav-dark-mode-common': styles.colors.darkMode,
        'open-nav-light-mode-common': styles.colors.white,
        'open-nav-dark-mode-contrast': styles.colors.white,
        'open-nav-light-mode-contrast': styles.colors.darkMode,
      },
      fontSize: {
        '12px': styles.unitsInREMToPX.twelve,
        '14px': styles.unitsInREMToPX.fourteen,
        '16px': styles.unitsInREMToPX.sixteen,
        '20px': styles.unitsInREMToPX.twenty,
        '24px': styles.unitsInREMToPX.twentyFour,
        '28px': styles.unitsInREMToPX.twentyEigth,
        '32px': styles.unitsInREMToPX.thirtyTwo,
      },
      gap: {
        '20px': styles.unitsInREMToPX.twenty,
      },
      height: {
        '80px': styles.unitsInREMToPX.eighty,
        '50px': styles.unitsInREMToPX.fifty,
      },
      margin: {
        switcher: 'calc(-30%)',
      },
      maxWidth: {
        '80%': styles.percentage.eighty,
      },
      minHeight: {
        'without-scroll': 'calc(100vh - 8rem)',
      },
      padding: {
        '30px': styles.unitsInREMToPX.thirty,
        '100px': styles.unitsInREMToPX.oneHundred,
      },
      screens: {
        'phone-540px': { max: '540px' },
      },
      spacing: {
        '20px': styles.unitsInREMToPX.twenty,
        '30px': styles.unitsInREMToPX.thirty,
      },
      width: {
        '85px': styles.unitsInREMToPX.eightyFive,
        '225px': styles.unitsInREMToPX.twoHundredTwentyFive,
      },
    },
  },
  plugins: [],
};
