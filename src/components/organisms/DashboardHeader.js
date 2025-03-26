import React from 'react';
import styled from 'styled-components';
import LogoSection from '../molecules/LogoSection';
import NavigationMenu from '../molecules/NavigationMenu';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5fa6bb;
  padding: 10px 20px;
  height: 70px;
`;

const DashboardHeader = ({ onLogout }) => {
  return (
    <HeaderContainer>
      <LogoSection />
      <NavigationMenu onLogout={onLogout} />
    </HeaderContainer>
  );
};

export default DashboardHeader;
