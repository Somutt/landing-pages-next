import P from 'prop-types';
import { SectionBackground } from '../SectionBackground/';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridTwoColumns = ({
  title,
  text,
  imgSrc,
  background = false,
  sectionId = '',
}) => {
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

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  imgSrc: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
