import { screen } from '@testing-library/react';
import { SectionContainer } from '.';

import { renderTheme } from '../../utils/renderTheme';

describe('<SectionContainer />', () => {
  it('should render SectionContainer correctly', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Teste</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
