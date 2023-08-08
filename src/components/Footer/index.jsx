import P from 'prop-types';
import * as Styled from './styles';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <Styled.Wrapper>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Wrapper>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
