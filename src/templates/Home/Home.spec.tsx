import { Home } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<Home />', () => {
  it('should render the Home component and check secondaryBg', () => {
    renderTheme(<Home />);
  });
});
