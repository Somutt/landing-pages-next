import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Wrapper as TextComponent } from '../TextComponent/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    ${TextComponent} {
      margin-bottom: ${theme.spacings.big};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.big};

    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${Title} {
      position: relative;
      left: 5rem;
    }

    ${Title}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.font.sizes.large};
      top: -1.5rem;
      left: -4rem;
      transform: rotate(10deg);
    }
  `}
`;
