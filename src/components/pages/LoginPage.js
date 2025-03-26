import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginContainer from '../organisms/LoginContainer';

const LoginPage = ({ onLogin }) => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        if (onLogin) {
            onLogin();
            navigate('/monitor-pasajeros');
        }
    };

    return <LoginContainer onLoginSuccess={handleLoginSuccess} />;
};

export default LoginPage;