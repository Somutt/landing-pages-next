import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { HeadingProps } from '.';

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.big};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
    ${mediaFont(theme)};
  `,
};

const titleCase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.medium};
  }
`;

export const Title = styled.h1<HeadingProps>`
  ${({ theme, dark, size, uppercase }) => css`
    color: ${dark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
