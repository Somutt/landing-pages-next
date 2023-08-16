import styled, { css } from 'styled-components';
import { DefaultTheme } from 'styled-components/dist/types';
import { SectionBackgroundProps } from '.';

const activateBackground = (theme: DefaultTheme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Wrapper = styled.div<SectionBackgroundProps>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && activateBackground(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
