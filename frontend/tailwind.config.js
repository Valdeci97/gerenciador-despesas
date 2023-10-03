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
        '18px': styles.unitsInREMToPX.eighteen,
        '20px': styles.unitsInREMToPX.twenty,
        '22px': styles.unitsInREMToPX.twentyTwo,
        '24px': styles.unitsInREMToPX.twentyFour,
        '28px': styles.unitsInREMToPX.twentyEigth,
        '32px': styles.unitsInREMToPX.thirtyTwo,
      },
      gap: {
        '20px': styles.unitsInREMToPX.twenty,
        '30px': styles.unitsInREMToPX.thirty,
      },
      gridTemplateRows: {
        'login-form': 'repeat(4, 20% 30% 30% 20%)',
        'register-form': 'repeat(6, 20% 20% 15% 15% 15% 15%)',
      },
      height: {
        '40px': styles.unitsInREMToPX.forty,
        '80px': styles.unitsInREMToPX.eighty,
        '50px': styles.unitsInREMToPX.fifty,
        '80vh': styles.viewPort.height.eighty,
        '85%': styles.percentage.eightyFive,
      },
      margin: {
        switcher: 'calc(-30%)',
      },
      maxWidth: {
        '500px': styles.unitsInREMToPX.fiveHundred,
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
        'smdvc-400px': { max: '400px' },
        'mddvc-540px': { min: '401px', max: '540px' },
        'phone-540px': { max: '540px' },
        'dvc-brkpt-768px': { min: '541px', max: '768px' },
      },
      spacing: {
        '10px': styles.unitsInREMToPX.ten,
        '20px': styles.unitsInREMToPX.twenty,
        '30px': styles.unitsInREMToPX.thirty,
      },
      width: {
        '85px': styles.unitsInREMToPX.eightyFive,
        '225px': styles.unitsInREMToPX.twoHundredTwentyFive,
        '500px': styles.unitsInREMToPX.fiveHundred,
        '50%': styles.percentage.fifty,
        '75%': styles.percentage.seventyFive,
        '80%': styles.percentage.eighty,
        '90%': styles.percentage.ninety,
      },
    },
  },
  plugins: [],
};
