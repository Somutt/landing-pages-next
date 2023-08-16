import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  dark?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'large';
  uppercase?: boolean;
};

export const Heading = ({
  children,
  dark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Title dark={dark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Styled.Title>
  );
};
