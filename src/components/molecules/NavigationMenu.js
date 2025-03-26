import React from 'react';
import styled from 'styled-components';
import NavButton from '../atoms/NavButton';

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavigationMenu = ({ onLogout }) => {
  return (
    <MenuContainer>
      <NavButton label="Monitor de Pasajeros" active />
      <NavButton label="Monitor de Conducción" />
      <NavButton label="Cerrar Sesión" logout onClick={onLogout} />
    </MenuContainer>
  );
};

export default NavigationMenu;
