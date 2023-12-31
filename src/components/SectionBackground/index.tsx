import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';

const random = () => {
  return `id-${Math.random() * 10000}`.replace(/[^a-z0-9-_]/gi, '-');
};

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}: SectionBackgroundProps) => {
  const id = sectionId ? sectionId : random();

  return (
    <Styled.Wrapper background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Wrapper>
  );
};
