import { screen } from '@testing-library/react';
import { Heading } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../utils/renderTheme';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);
    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.big,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading dark={false}>text</Heading>);
    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render with small heading size', () => {
    renderTheme(<Heading size='small'>text</Heading>);
    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.small,
    });
  });

  it('should render with medium heading size', () => {
    renderTheme(<Heading size='medium'>text</Heading>);
    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render with big heading size', () => {
    renderTheme(<Heading size='big'>text</Heading>);
    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.big,
    });
  });

  it('should render with large heading size', () => {
    renderTheme(<Heading size='large'>text</Heading>);
    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
  });

  it('should render correct font size when screen is less than 768px', () => {
    renderTheme(<Heading size='large'>text</Heading>);
    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.medium, {
      media: theme.media.lteMedium,
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>text</Heading>);
    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render the heading as h6', () => {
    const { container } = renderTheme(<Heading as='h6'>text</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should render with uppercase letters', () => {
    const { container } = renderTheme(<Heading uppercase>text</Heading>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
