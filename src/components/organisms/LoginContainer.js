import React from 'react';
import styled from 'styled-components';
import LoginForm from '../molecules/LoginForm';
import Card from '../atoms/Card';
import { useNavigate } from 'react-router-dom';

const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const LeftPanel = styled.div`
  flex: 1;
  background: url('/login.png') no-repeat center center;
  background-size: cover;
`;

const RightPanel = styled.div`
  flex: 1;
  background-color: #083344;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 40px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  border-radius: 8px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #4B3B5A;
  font-size: 24px;
`;

const LoginContainer = () => {
    const navigate = useNavigate();

    const handleLogin = (credentials) => {
        console.log('Intentando iniciar sesión con:', credentials);
        // Aquí irá tu lógica de autenticación
        navigate('/home'); // Usar navigate para redireccionar
    };

  return (
    <LoginWrapper>
      <LeftPanel />
      <RightPanel>
        <StyledCard>
          <Title>Iniciar Sesión</Title>
          <LoginForm onSubmit={handleLogin} />
        </StyledCard>
      </RightPanel>
    </LoginWrapper>
  );
};

export default LoginContainer;