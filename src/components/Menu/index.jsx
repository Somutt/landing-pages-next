import P from 'prop-types';
import { useState } from 'react';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links = [], logoData }) => {
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

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
