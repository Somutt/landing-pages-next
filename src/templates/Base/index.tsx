import * as Styled from './styles';

import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type BaseProps = {
  children: React.ReactNode;
  links: MenuLinkProps[];
  logoData: LogoLinkProps;
  footerHtml: string;
};

export const Base = ({ links, logoData, footerHtml, children }: BaseProps) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Wrapper>{children}</Styled.Wrapper>
      <Footer footerHtml={footerHtml} />
      <GoTop />
    </>
  );
};
