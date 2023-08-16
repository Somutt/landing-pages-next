import { Footer } from '.';

import { renderTheme } from '../../utils/renderTheme';

describe('<Footer />', () => {
  it('should render Footer correctly', () => {
    const { container } = renderTheme(<Footer footerHtml={'<h1>Oi</h1>'} />);
    expect(container).toMatchSnapshot();
  });
});
