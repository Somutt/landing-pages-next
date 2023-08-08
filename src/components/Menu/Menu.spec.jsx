import { fireEvent, screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { Menu } from '.';

import { renderTheme } from '../../utils/renderTheme';
import { linksMock } from '../NavLinks/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render logo and Main menu correctly', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: /logo/i })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: /main menu/i }),
    ).toBeInTheDocument();
  });

  it('should handle the button logic correctly', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
  });
});
