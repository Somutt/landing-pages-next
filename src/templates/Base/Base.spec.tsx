//import { screen } from '@testing-library/react';
import { Base } from '.';

import { renderTheme } from '../../utils/renderTheme';
import { mock } from './mock';

describe('<Base />', () => {
  it('should render Base correctly', () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
