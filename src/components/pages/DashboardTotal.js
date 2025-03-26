import React from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  padding: 20px;
  background-color: #f5f6fa;
`;

const TotalCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
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

const DashboardTotal = () => {
  const handleLogout = () => {
    console.log('Cerrar sesión');
  };

  // Aquí podrías agregar la lógica para obtener el total real de pasajeros
  const totalPasajeros = 150; // Este valor debería venir de tu backend

  return (
    <DashboardContainer>
      <DashboardHeader onLogout={handleLogout} />
      <Content>
        <Title>Total de Pasajeros</Title>
        <TotalCard>
          <Label>Total de pasajeros del día</Label>
          <TotalNumber>{totalPasajeros}</TotalNumber>
        </TotalCard>
        {/* Aquí puedes agregar más tarjetas con diferentes métricas */}
      </Content>
    </DashboardContainer>
  );
};

export default DashboardTotal;