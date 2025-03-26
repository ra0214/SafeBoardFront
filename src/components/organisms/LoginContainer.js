import React from 'react';
import styled from 'styled-components';
import LoginForm from '../molecules/LoginForm';
import Card from '../atoms/Card';
import { useNavigate } from 'react-router-dom';

const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: row; // Aseguramos que sea horizontal
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

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #4B3B5A;
  font-size: 24px;
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 20px;
`;

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #666;
  
  a {
    color: #5fa6bb;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginContainer = ({ onLoginSuccess }) => {
    const navigate = useNavigate();

    const handleLogin = (credentials) => {
        console.log('Intentando iniciar sesión con:', credentials);
        if (onLoginSuccess) {
            onLoginSuccess();
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
                      <LoginForm onSubmit={handleLogin} />
                      <RegisterLink>
                          ¿No tienes cuenta? <a href="/register">Registrarse</a>
                      </RegisterLink>
                  </CardContent>
              </StyledCard>
          </FormPanel>
      </LoginWrapper>
  );
};

export default LoginContainer;