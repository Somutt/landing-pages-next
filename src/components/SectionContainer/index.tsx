import * as Styled from './styles';

export type SectionContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer = ({ children }: SectionContainerProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
