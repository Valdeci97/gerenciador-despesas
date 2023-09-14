import RegisterLink from './RegisterLink';
import { NavbarHamburgerProps } from '@/@types/navbar-hamburger-props';

import '@/styles/aside-menu-bar.css';

export default function AsideMenuBar({ hamburgerMenuClass }: NavbarHamburgerProps) {
  return (
    <aside
      className={`bg-black aside-menu-container ${hamburgerMenuClass} mt-4 rounded-lg`}
    >
      <nav className="aside-menu-link-container">
        <ul>
          <li className="text-white">
            <a href="/" className="text-mobile-menu-link">
              Início
            </a>
          </li>
          <li className="text-white">
            <a href="/resources" className="text-mobile-menu-link">
              Recursos
            </a>
          </li>
          <li className="text-white">
            <a href="/faq" className="text-mobile-menu-link">
              FAQ
            </a>
          </li>
        </ul>
        <RegisterLink />
        <span className="text-white text-mobile-menu">
          Já tem conta?&nbsp;
          <a href="/" className="text-mobile-menu text-green-contrast">
            Login
          </a>
        </span>
      </nav>
    </aside>
  );
}
