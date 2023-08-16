import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink text='Logo' link='#target'></LogoLink>);
    const link = screen.getByRole('heading', { name: /logo/i });
    expect(link.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(
      <LogoLink text='Logo' imgSrc='img1/img.png' link='#target'></LogoLink>,
    );
    const link = screen.getByRole('heading', { name: /logo/i });
    expect(link.firstChild.firstChild).toHaveAttribute('src', 'img1/img.png');
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink text='Logo' imgSrc='img1/img.png' link='#target'></LogoLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
