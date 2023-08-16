import * as Styled from './styles';
import Link from 'next/link';
import { Heading } from '../Heading';

export type LogoLinkProps = {
  text: string;
  imgSrc?: string;
  link: string;
  newTab?: boolean;
};

export const LogoLink = ({
  text,
  imgSrc = '',
  link,
  newTab = false,
}: LogoLinkProps) => {
  const nextLink = link.match(/^\//) ? true : false;
  const target = newTab ? '_blank' : '_self';

  if (nextLink) {
    return (
      <Heading size='small' uppercase>
        <Link href={link} passHref>
          <Styled.Wrapper target={target}>
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
