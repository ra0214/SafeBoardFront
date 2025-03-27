import React from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';

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
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/', { replace: true }); // Usamos replace para evitar que pueda volver atrás
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src="/transporte.png" alt="SafeBoard Logo" />
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
          to="/total-pasajeros"
          className={location.pathname === '/total-pasajeros' ? 'active' : ''}
        >
          Total de Pasajeros
        </StyledLink>
        
        <StyledLink 
          to="/monitor-conduccion"  
          className={location.pathname === '/monitor-conduccion' ? 'active' : ''}
        >
          Monitor de Conducción
        </StyledLink>
        
        <LogoutButton onClick={handleLogout}>
          Cerrar sesión
        </LogoutButton>
      </NavLinks>
    </HeaderContainer>
  );
};

export default DashboardHeader;
