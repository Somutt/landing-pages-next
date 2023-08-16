import { SectionBackground } from '../SectionBackground/';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export type GridTwoColumnsProps = {
  title: string;
  text: string;
  imgSrc: string;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridTwoColumns = ({
  title,
  text,
  imgSrc,
  background = false,
  sectionId = '',
}: GridTwoColumnsProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Wrapper>
        <Styled.TextContainer>
          <Heading uppercase dark={!background} as='h2'>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={imgSrc} alt={title} />
        </Styled.ImageContainer>
      </Styled.Wrapper>
    </SectionBackground>
  );
};
