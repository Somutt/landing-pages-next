import { screen } from '@testing-library/react';
import { TextComponent } from '.';

import { renderTheme } from '../../utils/renderTheme';

describe('<TextComponent />', () => {
  it('should render TextComponent correctly', () => {
    renderTheme(<TextComponent>TextComponent</TextComponent>);
    const par = screen.getByText(/textcomponent/i);
    expect(par).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <TextComponent>TextComponent</TextComponent>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
