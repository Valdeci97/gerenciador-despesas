'use client';

import { useState } from 'react';

import LogoLink from './LogoLink';

export default function MobileNavbar() {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

  function toggleNavMenu() {
    setShowNavMenu((prevState) => !prevState);
  }

  const showMenu = showNavMenu ? 'is-active' : '';

  return (
    <nav className="flex items-center w-full gap-x-50">
      <button
        type="button"
        className={`mobile-navbar-btn bg-transparent ${showMenu}`}
        onClick={toggleNavMenu}
      >
        <div className={`mobile-navbar-menu-bar ${showMenu}`}></div>
      </button>
      <LogoLink />
    </nav>
  );
}
