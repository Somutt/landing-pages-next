import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({
  children,
  dark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <Styled.Title dark={dark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  dark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['small', 'medium', 'big', 'large']),
  uppercase: P.bool,
};
