'use client';

import { useState } from 'react';

import LogoLink from './LogoLink';
import HomeLinks from './HomeLinks';
import AsideMenuBar from './AsideMenuBar';
import { useDeviceWidth } from '@/hooks/useDeviceWidth';
import { useIsomorphicEffect } from '@/hooks/useIsomorphicEffect';

import '@/styles/navbar.css';

export default function MobileNavbar() {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
  const { isWidthBiggerThanBreakpoint } = useDeviceWidth();

  useIsomorphicEffect(() => {
    if (isWidthBiggerThanBreakpoint) {
      return setShowNavMenu(false);
    }
  }, [isWidthBiggerThanBreakpoint]);

  function toggleNavMenu() {
    setShowNavMenu((prevState) => !prevState);
  }

  const showMenu = showNavMenu ? 'is-active' : '';

  return (
    <>
      <nav className={`navbar-container ${showMenu}`}>
        <button
          type="button"
          className={`mobile-navbar-btn ${showMenu}`}
          onClick={toggleNavMenu}
        >
          <div className={`mobile-navbar-menu-bar ${showMenu}`}></div>
        </button>
        <LogoLink hamburgerMenuClass={`${showMenu}-logo`} />
        <HomeLinks />
      </nav>
      {showNavMenu && <AsideMenuBar hamburgerMenuClass={showMenu} />}
    </>
  );
}
