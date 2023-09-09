import { render } from '@testing-library/react';
import { ReactElement } from 'react';

function customRender(uiElement: ReactElement) {
  return {
    ...render(uiElement),
  };
}

export { vi, describe, it, expect } from 'vitest';
export * from '@testing-library/react';

export { customRender as render };
