import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DashboardHeader from '../organisms/DashboardHeader';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/authService';
import { useWebSocket } from '../../contexts/WebSocketContext';

// Componentes estilizados
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

const Title = styled.h1`
  color: #2d3436;
  margin-bottom: 20px;
  text-align: center;
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

const Label = styled.div`
  font-size: 18px;
  color: #636e72;
  text-align: center;
`;

const TotalNumber = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #5fa6bb;
  text-align: center;
  margin: 20px 0;
`;

const InputContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #dcdde1;
  border-radius: 5px;
  font-size: 16px;
  width: 150px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #5fa6bb;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a8599;
  }
`;

const ResultCard = styled(TotalCard)`
  margin-top: 20px;
`;

const ResultLabel = styled(Label)`
  color: #2d3436;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DashboardTotal = ({ onLogout }) => {
  const navigate = useNavigate();
  const [precio, setPrecio] = useState('');
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [totalPasajeros, setTotalPasajeros] = useState(0);
  const { wsService } = useWebSocket();

  useEffect(() => {
    if (!wsService) return;

    const handlePeopleGoUp = (data) => {
      console.log('Datos recibidos de peopleGoUp:', data); // Log para depuración
      // Verificar si los datos son para este dispositivo ESP32
      if (data.esp32_id && data.esp32_id === wsService.esp32_id) {
        setTotalPasajeros(prev => {
          const newTotal = prev + (data.count || 0);
          console.log('Nuevo total de pasajeros:', newTotal);
          return newTotal;
        });
      }
    };

    wsService.subscribe('peopleGoUp', handlePeopleGoUp);

    return () => {
      wsService.unsubscribe('peopleGoUp', handlePeopleGoUp);
    };
  }, [wsService]);

  const calcularIngresos = () => {
    if (!precio || isNaN(precio)) {
      alert('Por favor, ingresa un precio válido');
      return;
    }
    const ingresos = totalPasajeros * parseFloat(precio);
    setTotalIngresos(ingresos);
    localStorage.setItem('totalIngresos', ingresos);
  };

  const handleLogout = () => {
    logout();
    if (onLogout) {
      onLogout();
    }
    navigate('/', { replace: true });
  };

  return (
    <DashboardContainer>
      <DashboardHeader onLogout={handleLogout} />
      <Content>
        <Title>Total de Pasajeros</Title>
        <TotalCard>
          <Label>Total de pasajeros que subieron</Label>
          <TotalNumber>{totalPasajeros}</TotalNumber>
          <Label>Dispositivo ESP32: {wsService?.esp32_id || 'No conectado'}</Label>
        </TotalCard>
        
        <TotalCard>
          <Label>Calcular Ingresos</Label>
          <InputContainer>
            <Input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Precio del pasaje"
              min="0"
              step="0.50"
            />
            <Button onClick={calcularIngresos}>Calcular</Button>
          </InputContainer>
        </TotalCard>

        {totalIngresos > 0 && (
          <ResultCard>
            <ResultLabel>Total de Ingresos</ResultLabel>
            <TotalNumber>
              ${totalIngresos.toLocaleString('es-MX', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              })}
            </TotalNumber>
          </ResultCard>
        )}
      </Content>
    </DashboardContainer>
  );
};

export default DashboardTotal;