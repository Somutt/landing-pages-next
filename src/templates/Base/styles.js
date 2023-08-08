import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-top: 3rem;

    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
