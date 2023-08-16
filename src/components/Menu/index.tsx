import { useState } from 'react';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { MenuLinkProps } from '../MenuLink';

export type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

export const Menu = ({ links = [], logoData }: MenuProps) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <Styled.Button
        aria-label='Open/Close menu'
        visible={menuVisible}
        onClick={() => setMenuVisible(true)}
      >
        {menuVisible ? (
          <CloseIcon aria-label='Close menu' />
        ) : (
          <MenuIcon aria-label='Open menu' />
        )}
      </Styled.Button>
      <Styled.Wrapper
        visible={menuVisible}
        onClick={() => setMenuVisible(false)}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Wrapper>
    </>
  );
};
