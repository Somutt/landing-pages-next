import Link from 'next/link';
import P from 'prop-types';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref>
        <Styled.Wrapped href={link} target={target}>
          {children}
        </Styled.Wrapped>
      </Link>
    );
  }

  return (
    <Styled.Wrapped href={link} target={target}>
      {children}
    </Styled.Wrapped>
  );
};

MenuLink.propTypes = {
  children: P.string.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
