import { GridImage } from '.';

import { renderTheme } from '../../utils/renderTheme';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render GridImage correctly', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
