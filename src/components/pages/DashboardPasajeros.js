import React from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const DashboardPasajeros = () => {
  const handleLogout = () => {
    // lógica de logout
    console.log('Cerrar sesión');
  };

  return (
    <DashboardContainer>
      <DashboardHeader onLogout={handleLogout} />
      {/* Aquí colocarás el resto de los componentes */}
    </DashboardContainer>
  );
};

export default DashboardPasajeros;
