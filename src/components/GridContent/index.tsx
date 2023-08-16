import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridContentProps = {
  title: string;
  html: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridContent = ({
  title,
  html,
  background = false,
  sectionId = '',
}: GridContentProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Wrapper>
        <Heading uppercase dark={!background} as='h2'>
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Wrapper>
    </SectionBackground>
  );
};
