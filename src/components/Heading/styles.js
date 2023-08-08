import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.big};
  `,
  large: (theme) => css`
    font-size: ${theme.font.sizes.large};
    ${mediaFont(theme)};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.medium};
  }
`;

export const Title = styled.h1`
  ${({ theme, dark, size, uppercase }) => css`
    color: ${dark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
