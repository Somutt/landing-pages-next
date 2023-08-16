import Link from 'next/link';
import * as Styled from './styles';

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
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
