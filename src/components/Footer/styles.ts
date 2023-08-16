import styled, { css } from 'styled-components';
import { Wrapper as TextComponent } from '../TextComponent/styles';
import { Wrapper as SectionContainer } from '../SectionContainer/styles';

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};

    a {
      color: inherit;
      text-decoration: none;
    }

    ${TextComponent} {
      font-size: ${theme.font.sizes.xsmall};
    }

    ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
  `}
`;
