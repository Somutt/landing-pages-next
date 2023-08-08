import Link from 'next/link';
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';

export const LogoLink = ({ text, imgSrc = '', link }) => {
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Heading size='small' uppercase>
        <Link href={link} passHref>
          <Styled.Wrapper>
            {!!imgSrc && <img src={imgSrc} alt={text} />}
            {!imgSrc && text}
          </Styled.Wrapper>
        </Link>
      </Heading>
    );
  }

  return (
    <Heading size='small' uppercase>
      <Styled.Wrapper href={link}>
        {!!imgSrc && <img src={imgSrc} alt={text} />}
        {!imgSrc && text}
      </Styled.Wrapper>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  imgSrc: P.string,
  link: P.string.isRequired,
};
