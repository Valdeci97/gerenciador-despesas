'use client';

import { ThemeProvider } from 'next-themes';
import { ChildrenProps } from '@/@types/children-props';

export default function Providers({ children }: ChildrenProps) {
  return (
    <ThemeProvider attribute="class" storageKey="organiza-real-preferences" enableSystem>
      {children}
    </ThemeProvider>
  );
}
