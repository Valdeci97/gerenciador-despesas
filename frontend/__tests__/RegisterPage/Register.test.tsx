import '../matchMediaMock';

import { render, screen } from '../setup';

import Register from '@/app/(public)/(authentication)/register/page';

describe('Testing register page', () => {
  describe('Verify user interface elements', () => {
    it('should render all elements successfully', () => {
      const { container } = render(<Register />);

      const [homeLogoLink, loginLink] = screen.getAllByRole('link');
      const illustrationContainer = container.querySelector('div');
      const emailInput = screen.getByPlaceholderText(/organizado@gmail\.com/i);
      const [passwordInput, repeatPasswordInput] = screen.getAllByLabelText(/senha/i);
      const createAccountButton = screen.getByRole('button', { name: /criar conta/i });
      const alreadyRegisteredUserStatement = screen.getByText(/já tenho uma conta/i);

      expect(homeLogoLink).toBeInTheDocument();
      expect(illustrationContainer).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(repeatPasswordInput).toBeInTheDocument();
      expect(createAccountButton).toBeInTheDocument();
      expect(alreadyRegisteredUserStatement).toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
      expect(homeLogoLink.getAttribute('href')).toBe('/');
      expect(loginLink.getAttribute('href')).toBe('/login');
      expect(loginLink).toHaveTextContent(/quero fazer login!/i);
    });
  });
});
