import { GridText } from '.';

import { renderTheme } from '../../utils/renderTheme';

import mock from './mock';

describe('<GridText />', () => {
  it('should render GridText correctly', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
