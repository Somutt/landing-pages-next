import { screen } from '@testing-library/react';
import { NavLinks } from '.';

import { renderTheme } from '../../utils/renderTheme';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render all MenuLinks correctly', () => {
    renderTheme(<NavLinks links={mock}></NavLinks>);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks></NavLinks>);
    const links = screen.queryAllByText(/link/i);
    expect(links).toHaveLength(0);
  });

  it('should render all MenuLinks correctly', () => {
    renderTheme(<NavLinks links={mock}></NavLinks>);
    const link = screen.getByText(/link 10/i);
    expect(link.parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mock}></NavLinks>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
