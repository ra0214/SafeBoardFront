import React from 'react';
import LoginContainer from '../organisms/LoginContainer';

const LoginPage = ({ onLoginSuccess }) => {
    return <LoginContainer onLoginSuccess={onLoginSuccess} />;
};

export default LoginPage;