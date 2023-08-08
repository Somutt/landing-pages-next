import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
