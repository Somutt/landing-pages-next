import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Wrapper>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Wrapper>
  );
};
