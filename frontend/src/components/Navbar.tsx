'use client';

import { useState } from 'react';

import LogoLink from './LogoLink';
import HomeLinks from './HomeLinks';

import '@/styles/navbar.css';

export default function MobileNavbar() {
  const [showNavMenu, setShowNavMenu] = useState<boolean>(false);

  function toggleNavMenu() {
    setShowNavMenu((prevState) => !prevState);
  }

  const showMenu = showNavMenu ? 'is-active' : '';

  return (
    <nav className="navbar-container">
      <button
        type="button"
        className={`mobile-navbar-btn bg-transparent ${showMenu}`}
        onClick={toggleNavMenu}
      >
        <div className={`mobile-navbar-menu-bar ${showMenu}`}></div>
      </button>
      <LogoLink />
      <HomeLinks />
    </nav>
  );
}
