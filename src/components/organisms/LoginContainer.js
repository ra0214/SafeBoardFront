import React, { useState } from 'react';
import styled from 'styled-components';
import LoginForm from '../molecules/LoginForm';
import Card from '../atoms/Card';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import { useWebSocket } from '../../contexts/WebSocketContext';

// Añade estas definiciones de componentes estilizados
const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: row;
`;

const FormPanel = styled.div`
  flex: 1;
  background-color: #083344;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImagePanel = styled.div`
  flex: 1;
  background: url('/login.png') no-repeat center center;
  background-size: cover;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 0;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
  border-radius: 8px;
  overflow: hidden;
`;

const CardHeader = styled.div`
  background-color: #4B3B5A;
  color: white;
  padding: 15px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

const CardContent = styled.div`
  padding: 40px;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #4B3B5A;
  font-size: 24px;
`;

const ErrorMessage = styled.p`
  color: #ff0033;
  text-align: center;
  margin-bottom: 15px;
`;

const LoginContainer = ({ onLoginSuccess }) => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { connect } = useWebSocket();

    const handleLogin = async (credentials) => {
        try {
            const response = await loginUser(credentials);
            localStorage.setItem('user', JSON.stringify(response));
            
            if (response.esp32_id) {
                connect(response.esp32_id);
            }

            if (onLoginSuccess) {
                onLoginSuccess();
            }

            navigate('/monitor-pasajeros');
        } catch (error) {
            console.error('Error en el login:', error);
            setError(error.message);
        }
    };

    return (
        <LoginWrapper>
            <ImagePanel />
            <FormPanel>
                <StyledCard>
                    <CardHeader>LOGIN</CardHeader>
                    <CardContent>
                        <Logo src="/avatar.png" alt="SafeBoard Logo" />
                        <Title>Iniciar Sesión</Title>
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <LoginForm onSubmit={handleLogin} />
                    </CardContent>
                </StyledCard>
            </FormPanel>
        </LoginWrapper>
    );
};

export default LoginContainer;