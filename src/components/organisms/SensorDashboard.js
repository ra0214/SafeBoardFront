import { useState, useEffect } from 'react';
import { connectMQTT } from '../../services/mqttService';
import DistanceDisplay from '../molecules/DistanceDisplay';

function SensorDashboard() {
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        connectMQTT(setDistance); // Establece la conexión MQTT y actualiza el estado de distancia
    }, []);

    return <DistanceDisplay distance={distance} />;
}

export default SensorDashboard;
