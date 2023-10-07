import Link from 'next/link';

import Logo from './Logo';
import { LogoColorProps } from '@/@types/logo-color-props';

export default function LogoLink({ theme }: LogoColorProps) {
  return (
    <Link href="/" title="Logo - Voltar ao início">
      <Logo theme={theme} />
    </Link>
  );
}
