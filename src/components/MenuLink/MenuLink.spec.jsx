import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<MenuLink />', () => {
  it('should render MenuLink correctly', () => {
    renderTheme(<MenuLink link='https://localhost'>MenuLink</MenuLink>);
    const link = screen.getByRole('link', { name: /menulink/i });
    expect(link).toHaveAttribute('target', '_self');
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link='https://localhost' newTab={true}>
        MenuLink
      </MenuLink>,
    );
    const link = screen.getByRole('link', { name: /menulink/i });
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link='https://localhost'>MenuLink</MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
