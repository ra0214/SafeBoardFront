import React from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f6fa;
  padding-top: 70px;
`;

const Content = styled.div`
  padding: 20px;
  flex: 1;
  width: 100%;
  box-sizing: border-box;
`;

const TotalCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h1`
  color: #2d3436;
  margin-bottom: 20px;
`;

const TotalNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #5fa6bb;
  text-align: center;
  margin: 20px 0;
`;

const Label = styled.div`
  font-size: 18px;
  color: #636e72;
  text-align: center;
`;

const DashboardTotal = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    if (onLogout) {
      onLogout();
    }
    navigate('/', { replace: true });
  };

  const totalPasajeros = 150;

  return (
    <DashboardContainer>
      <DashboardHeader onLogout={handleLogout} />
      <Content>
        <Title>Total de Pasajeros</Title>
        <TotalCard>
          <Label>Total de pasajeros del día</Label>
          <TotalNumber>{totalPasajeros}</TotalNumber>
        </TotalCard>
        {}
      </Content>
    </DashboardContainer>
  );
};

export default DashboardTotal;