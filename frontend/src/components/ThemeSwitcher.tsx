'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import DarkModeIcon from './DarkModeIcon';
import LightModeIcon from './LightModeIcon';

const switcherCommonStyles = {
  select: 'text-16px rounded-lg w-85px hover:cursor-pointer border-2 border-solid',
};

export const switcherThemeClasses = {
  open: {
    light: {
      select: switcherCommonStyles.select.concat(
        ' text-light bg-transparent border-grey-contrast',
      ),
      opt: 'text-light text-16px bg-transparent',
    },
    dark: {
      select: switcherCommonStyles.select.concat(
        ' text-white bg-transparent border-white',
      ),
      opt: 'text-white text-16px bg-dark-mode-common',
    },
  },
  closed: {
    dark: {
      select: switcherCommonStyles.select.concat(
        ' text-white bg-dark-mode-common border-white',
      ),
      opt: 'bg-transparent text-white text-16px',
    },
    light: {
      select: switcherCommonStyles.select.concat(
        ' text-light bg-light border-grey-contrast',
      ),
      opt: 'bg-transparent text-light text-16px',
    },
  },
};

export const fillIcon = {
  contrast: 'fill-grey-contrast',
  white: 'fill-white',
};

export default function ThemeSwitcher({ isNavOpen }: { isNavOpen: boolean }) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === 'dark';
  const openNavSwitcherColors = isDarkMode
    ? switcherThemeClasses.open.light
    : switcherThemeClasses.open.dark;
  const closedNavSwitcherColors = isDarkMode
    ? switcherThemeClasses.closed.dark
    : switcherThemeClasses.closed.light;
  const switcherColors = isNavOpen ? openNavSwitcherColors : closedNavSwitcherColors;
  const lightIconClass = isNavOpen ? fillIcon.contrast : fillIcon.white;
  const darkIconClass = isNavOpen ? fillIcon.white : fillIcon.contrast;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex gap-2 phone-540px:ml-switcher">
      {isDarkMode && <LightModeIcon theme={lightIconClass} />}
      {!isDarkMode && <DarkModeIcon theme={darkIconClass} />}
      <select
        className={switcherColors.select}
        value={theme}
        onChange={({ target }) => setTheme(target.value)}
      >
        <option value="system" className={switcherColors.opt}>
          Sistema
        </option>
        <option value="light" className={switcherColors.opt}>
          Claro
        </option>
        <option value="dark" className={switcherColors.opt}>
          Escuro
        </option>
      </select>
    </div>
  );
}
