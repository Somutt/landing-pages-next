import { screen } from '@testing-library/react';
import { SectionBackground } from '.';

import { renderTheme } from '../../utils/renderTheme';

describe('<SectionBackground />', () => {
  it('should render SectionBackground with dark background', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Teste</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render SectionBackground with light background', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Teste</h1>
      </SectionBackground>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
