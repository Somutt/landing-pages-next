import { screen } from '@testing-library/react';
import { GoTop } from '.';

import { renderTheme } from '../../utils/renderTheme';

describe('<GoTop />', () => {
  it('should render GoTop with correct attribute', () => {
    renderTheme(<GoTop />);
    const goTop = screen.getByRole('link', { name: /go to top/i });
    expect(goTop).toBeInTheDocument();
    expect(goTop).toHaveAttribute('href', '#');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(<GoTop />);
    expect(container).toMatchSnapshot();
  });
});
