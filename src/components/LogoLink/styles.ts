import styled, { css } from 'styled-components';

export const Wrapper = styled.a`
  ${() => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;

    > img {
      height: 2rem;
    }
  `};
`;
