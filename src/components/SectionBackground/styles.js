import styled, { css } from 'styled-components';

const activateBackground = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Wrapper = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && activateBackground(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
