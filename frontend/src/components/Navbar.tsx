'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';

import LogoLink from './LogoLink';
import HomeLinks from './HomeLinks';
import AsideMenuBar from './AsideMenuBar';
import ThemeSwitcher from './ThemeSwitcher';
import { useDeviceWidth } from '@/hooks/useDeviceWidth';
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect';

import '@/styles/navbar.css';

const logoThemeClasses = {
  openNav: {
    common: 'fill-open-nav-light-mode-common dark:fill-open-nav-dark-mode-common',
    contrast: 'fill-open-nav-light-mode-contrast dark:fill-open-nav-dark-mode-contrast',
  },
  nav: {
    common: 'fill-dark-mode-common dark:fill-light-mode-common',
    contrast: 'fill-light-mode-contrast dark:fill-dark-mode-common',
  },
};

const hamburgerStyles = {
  button: 'mobile-navbar-btn',
  div: 'mobile-navbar-menu-bar',
};

const navbar = {
  open: ' is-active before:bg-white after:bg-white dark:before:bg-grey-contrast dark:after:bg-grey-contrast',
};

export default function Navbar() {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  const { isWidthBiggerThanBreakpoint } = useDeviceWidth();
  const isDarkMode = resolvedTheme === 'dark';

  useIsomorphicEffect(() => {
    if (isWidthBiggerThanBreakpoint) {
      return setShowNavMenu(false);
    }
  }, [isWidthBiggerThanBreakpoint]);

  function toggleNavMenu() {
    setShowNavMenu((prevState) => !prevState);
  }

  const showMenu = showNavMenu ? navbar.open : '';
  const hamburgerButton = isDarkMode
    ? hamburgerStyles.button.concat(' before:bg-white after:bg-white')
    : hamburgerStyles.button.concat(' before:bg-grey-contrast after:bg-grey-contrast');
  const logoColors = showNavMenu ? logoThemeClasses.openNav : logoThemeClasses.nav;
  const hamburgerDiv = isDarkMode
    ? hamburgerStyles.div.concat(' bg-white')
    : hamburgerStyles.div.concat(' bg-grey-contrast');
  const hamburgerBtnColor = hamburgerButton.concat(showMenu);
  const hamburgerDivColor = hamburgerDiv.concat(showMenu);

  return (
    <>
      <nav className={`navbar-container ${showNavMenu ? 'is-active' : ''}`}>
        <button type="button" className={hamburgerBtnColor} onClick={toggleNavMenu}>
          <div className={hamburgerDivColor} />
        </button>
        <LogoLink theme={logoColors} />
        <HomeLinks />
        <ThemeSwitcher isNavOpen={showNavMenu} />
      </nav>
      {showNavMenu && <AsideMenuBar hamburgerMenuClass={showMenu} />}
    </>
  );
}
