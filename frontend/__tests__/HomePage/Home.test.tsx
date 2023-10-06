import '../matchMediaMock';

import { render, screen, act } from '../setup';

import Header from '@/components/Header';
import Home from '@/app/(public)/(home)/page';

function HomePage() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

describe('Testing Home page', () => {
  beforeEach(async () => {
    await act(async () => render(<HomePage />));
  });

  describe('Verify user interface elements', () => {
    it('should render all elements successfully', async () => {
      const HOME_LINKS_TOTAL_COUNT = 7;
      const navigationOptions = ['/', '/resources', '/faq', '/login', '/register', '/register'];

      const title = screen.getByRole('heading', { level: 1, name: /conheça/i });
      const paragraph = screen.getByText(/organize seu dinheiro em tempo real/i);
      const themeSwitcher = screen.getByDisplayValue(/sistema/i);
      const homePageLinks = screen.getAllByRole('link');
      const [logoLink, ...othersLink] = homePageLinks;

      expect(title).toBeInTheDocument();
      expect(paragraph).toBeInTheDocument();
      expect(themeSwitcher).toBeInTheDocument();
      expect(homePageLinks.length).toBe(HOME_LINKS_TOTAL_COUNT);
      expect(logoLink).toBeInTheDocument();
      expect(logoLink.getAttribute('href')).toBe('/');

      othersLink.forEach((otherLink, i) => {
        expect(otherLink).toBeInTheDocument();
        expect(otherLink.getAttribute('href')).toBe(navigationOptions[i]);
      });
    });
  });
});

describe('Testing Home page user actions', () => {
  describe('Change theme mode', () => {
    it('should change from system theme mode to light mode option', async () => {
      const { user } = await act(async () => render(<HomePage />));

      const systemThemeOption = screen
        .getByRole<HTMLOptionElement>('option', { name: /sistema/i });
      const options = screen.getByRole('combobox');

      expect(systemThemeOption).toBeInTheDocument();
      expect(systemThemeOption).toHaveTextContent('Sistema');
      expect(systemThemeOption.selected).toBeTruthy();

      await user.selectOptions(options, 'light');
      const lightThemeOption = screen
        .getByRole<HTMLOptionElement>('option', { name: /claro/i });

      expect(lightThemeOption.selected).toBeTruthy();
      expect(systemThemeOption.selected).toBeFalsy();
    });
  });

  // TODO - solve navigation not implemented problem while running jest tests and learn how to get tailwindcss style properties at running tests.
});
