import { Metadata } from 'next';
import { Spline_Sans } from 'next/font/google';

import Providers from '@/components/Providers';
import { ChildrenProps } from '@/@types/children-props';

import '../../globals.css';

const splineSans = Spline_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Organiza real - login',
  description: 'Faça login para começar a organizar suas finanças',
};

export default function LoginLayout({ children }: ChildrenProps) {
  return (
    <html
      lang="pt-BR"
      className="light"
      style={{ colorScheme: 'light' }}
      suppressHydrationWarning
    >
      <body className={`${splineSans.className} bg-light dark:bg-dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
