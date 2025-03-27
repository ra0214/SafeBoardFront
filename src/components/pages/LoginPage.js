import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirige directamente a la página deseada
        navigate('/monitor-pasajeros');
    }, [navigate]);

    return null; // No renderiza nada
};

export default LoginPage;