import { NavbarHamburgerProps } from '@/@types/navbar-hamburger-props';
import Logo from './Logo';

export default function LogoLink({ hamburgerMenuClass }: NavbarHamburgerProps) {
  return (
    <a className={hamburgerMenuClass} href="/" title="Logo - Voltar ao início">
      <Logo />
    </a>
  );
}
