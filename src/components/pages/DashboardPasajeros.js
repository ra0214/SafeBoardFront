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
`;

const DashboardPasajeros = () => {
  const handleLogout = () => {
    console.log('Cerrar sesión');
  };

  return (
    <DashboardContainer>
      <DashboardHeader onLogout={handleLogout} />
      <Content>
        <h1>Monitor de Pasajeros</h1>
        {/* Aquí va el contenido de tu dashboard */}
      </Content>
    </DashboardContainer>
  );
};

export default DashboardPasajeros;
