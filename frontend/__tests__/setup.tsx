import userEvent from '@testing-library/user-event';
import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';

import Providers from '@/components/Providers';
import { ChildrenProps } from '@/@types/children-props';

function UIWrapper({ children }: ChildrenProps) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}

function customRender(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return {
    ...render(ui, { wrapper: UIWrapper, ...options }),
    user: userEvent.setup(),
  };
}

export { customRender as render };
export * from '@testing-library/react';
