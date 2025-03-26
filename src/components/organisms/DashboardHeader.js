import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #5fa6bb;
  padding: 10px 20px;
  height: 70px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CompanyName = styled.h1`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 24px;
  color: #ffffff;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &.active {
    background-color: #457b8c;
    font-weight: bold;
  }
  
  &:hover {
    background-color: #457b8c;
  }
`;

const LogoutButton = styled.button`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const DashboardHeader = ({ onLogout }) => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/logo.png" alt="SafeBoard Logo" />
        <CompanyName>SafeBoard</CompanyName>
      </LogoContainer>
      
      <NavLinks>
        <StyledLink 
          to="/monitor-pasajeros" 
          className={location.pathname === '/monitor-pasajeros' ? 'active' : ''}
        >
          Monitor de Pasajeros
        </StyledLink>
        
        <StyledLink 
          to="/monitor-conduccion"
          className={location.pathname === '/monitor-conduccion' ? 'active' : ''}
        >
          Monitor de Conducción
        </StyledLink>
        
        <LogoutButton onClick={onLogout}>
          Cerrar sesión
        </LogoutButton>
      </NavLinks>
    </HeaderContainer>
  );
};

export default DashboardHeader;
