import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export type GridImageElementProps = {
  altText: string;
  imgSrc: string;
};

export type GridImageProps = {
  title: string;
  description: string;
  grid: Array<GridImageElementProps>;
  background?: boolean;
  sectionId?: string;
  component?: string;
};

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
  sectionId = '',
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Wrapper>
        <Heading size='large' uppercase dark={!background} as='h2'>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((e) => (
            <Styled.GridElement key={e.imgSrc}>
              <Styled.Image src={e.imgSrc} alt={e.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Wrapper>
    </SectionBackground>
  );
};
