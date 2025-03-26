import React from 'react';
import styled from 'styled-components';
import SensorDashboard from '../organisms/SensorDashboard';
import DashboardPasajeros from './DashboardPasajeros';

const HomeContainer = styled.div`
    padding: 20px;
    background-color: #083344;
    min-height: 100vh;
    color: white;
`;

const Title = styled.h1`
    margin: 20px 0;
    text-align: center;
`;

const DashboardSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

function HomePage() {
    return (
        <HomeContainer>
            <DashboardPasajeros />
            <DashboardSection>
                <div>
                    <Title>Monitor de Distancia</Title>
                    <SensorDashboard />
                </div>
            </DashboardSection>
        </HomeContainer>
    );
}

export default HomePage;
