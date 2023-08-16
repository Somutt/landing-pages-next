import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridTextElementProps = {
  title: string;
  description: string;
};

export type GridTextProps = {
  title: string;
  description: string;
  grid: Array<GridTextElementProps>;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridText = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridTextProps) => {
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
