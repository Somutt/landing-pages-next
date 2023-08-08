import P from 'prop-types';
import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Wrapper>
        <Heading size='large' uppercase dark={!background} as='h2'>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((e) => (
            <Styled.GridElement key={e.title}>
              <Heading size='medium' dark={!background} as='h3'>
                {e.title}
              </Heading>
              <TextComponent>{e.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Wrapper>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
  background: P.bool,
  sectionId: P.string,
};
