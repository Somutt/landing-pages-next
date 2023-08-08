import { GridTwoColumns } from '.';

import { renderTheme } from '../../utils/renderTheme';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render GridTwoColumns correctly and match snapshot', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
