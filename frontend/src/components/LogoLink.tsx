import Logo from './Logo';
import { LogoColorProps } from '@/@types/logo-color-props';

export default function LogoLink({ theme }: LogoColorProps) {
  return (
    <a href="/" title="Logo - Voltar ao início">
      <Logo theme={theme} />
    </a>
  );
}
