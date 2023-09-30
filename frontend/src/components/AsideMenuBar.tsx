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
            <a href="/" className="text-28px">
              Início
            </a>
          </li>
          <li className="text-white dark:text-light">
            <a href="/resources" className="text-28px">
              Recursos
            </a>
          </li>
          <li className="text-white dark:text-light">
            <a href="/faq" className="text-28px">
              FAQ
            </a>
          </li>
        </ul>
        <RegisterLink />
        <span className="text-white text-20px dark:text-light">
          Já tem conta?&nbsp;
          <a href="/" className="text-20px text-green-contrast">
            Login
          </a>
        </span>
      </nav>
    </aside>
  );
}
