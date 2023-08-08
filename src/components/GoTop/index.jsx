import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <Styled.Wrapper href='#' aria-label='Go to top'>
      <KeyboardArrowUp />
    </Styled.Wrapper>
  );
};
