import Link from 'next/link';

import RegisterLink from './RegisterLink';
import { NavbarHamburgerProps } from '@/@types/navbar-hamburger-props';

import '@/styles/aside-menu-bar.css';

export default function AsideMenuBar({ hamburgerMenuClass }: NavbarHamburgerProps) {
  return (
    <aside
      className={`bg-dark dark:bg-white aside-menu-container ${hamburgerMenuClass} mt-4 rounded-lg`}
    >
      <nav className="aside-menu-link-container">
        <ul>
          <li className="text-white dark:text-light">
            <Link href="/" className="text-28px">
              Início
            </Link>
          </li>
          <li className="text-white dark:text-light">
            <Link href="/resources" className="text-28px">
              Recursos
            </Link>
          </li>
          <li className="text-white dark:text-light">
            <Link href="/faq" className="text-28px">
              FAQ
            </Link>
          </li>
        </ul>
        <RegisterLink />
        <span className="text-white text-20px dark:text-light">
          Já tem conta?&nbsp;
          <Link href="/login" className="text-20px text-green-contrast">
            Login
          </Link>
        </span>
      </nav>
    </aside>
  );
}
