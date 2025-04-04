import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #022E40;
  padding: 10px 20px;
  height: 70px;
  width: 100%; 
  box-sizing: border-box; 
  position: fixed; 
  top: 0;
  left: 0;
  z-index: 1000; 
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const CompanyName = styled.h1`
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-weight: 300;
  font-size: 28px;
  color: #ffffff;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  transform: skew(-12deg);
  letter-spacing: 1.5px;
  transition: all 0.3s ease;

  &:hover {
    transform: skew(-15deg) scale(1.05);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
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
    background-color: #3E597B;
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
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setIsAdmin(user?.userName === 'admin');
  }, []);

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/transporte.png" alt="SafeBoard Logo" />
        <CompanyName>SafeBoard</CompanyName>
      </LogoContainer>
      
      <NavLinks>
        <StyledLink to="/monitor-pasajeros">Monitor Pasajeros</StyledLink>
        <StyledLink to="/total-pasajeros">Total Pasajeros</StyledLink>
        <StyledLink to="/monitor-conduccion">Monitor Conducción</StyledLink>
        {isAdmin && (
          <StyledLink 
            to="/register" 
            style={{ 
              color: 'white',
            }}
          >
            Registrar Usuario
          </StyledLink>
        )}
        <LogoutButton onClick={onLogout}>Cerrar Sesión</LogoutButton>
      </NavLinks>
    </HeaderContainer>
  );
};

export default DashboardHeader;
