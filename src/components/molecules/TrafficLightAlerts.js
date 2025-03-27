import React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
`;

const Alert = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    width: 80%;
    max-width: 400px;
    text-align: center;

    ${({ color }) => `
        background-color: ${color};
    `}
`;

const TrafficLightAlerts = () => {
    return (
        <AlertContainer>
            <Alert color="#FF0000">🔴 Movimiento brusco continuo</Alert>
            <Alert color="#FFA500">🟠 Movimiento brusco</Alert>
            <Alert color="#008000">🟢 Sin movimiento brusco</Alert>
        </AlertContainer>
    );
};

export default TrafficLightAlerts;