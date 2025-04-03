import mqtt from 'mqtt';

const MQTT_BROKER = 'ws://98.83.255.101:15675/ws';

export const TOPICS = {
    PERSONAS_SUBEN: 'sensor.conteo.personas',
    PERSONAS_BAJAN: 'sensor.personas.bajadas'
};

export function connectMQTT(setDistance) {
    const client = mqtt.connect(MQTT_BROKER, {
        username: 'guest',
        password: 'guest'
    });

    client.on('connect', () => {
        console.log('✅ Conectado a MQTT');
        client.subscribe(TOPICS.PERSONAS_SUBEN, (err) => {
            if (err) {
                console.error('Error al suscribirse al topic:', err);
            }
        });
    });

    client.on('message', (topic, message) => {
        if (topic === TOPICS.PERSONAS_SUBEN || topic === TOPICS.PERSONAS_BAJAN) {
            try {
                const data = JSON.parse(message.toString());
                setDistance(data.distancia);
            } catch (error) {
                console.error('Error al parsear el mensaje:', error);
            }
        }
    });

    client.on('error', (err) => {
        console.error('Error de conexión MQTT:', err);
    });

    return () => {
        if (client) {
            client.end();
        }
    };
}

export function connectMQTTCounter(topic, setData) {
    const client = mqtt.connect(MQTT_BROKER, {
        username: 'guest',
        password: 'guest'
    });

    client.on('connect', () => {
        console.log(`✅ Conectado a MQTT - Topic: ${topic}`);
        client.subscribe(topic, (err) => {
            if (err) {
                console.error('Error al suscribirse al topic:', err);
            }
        });
    });

    client.on('message', (receivedTopic, message) => {
        if (receivedTopic === topic) {
            try {
                const messageData = JSON.parse(message.toString());
                // Usamos el formato exacto que viene de la cola
                const newData = {
                    esp32_id: messageData.esp32_id,
                    conteo: messageData.conteo,
                    timestamp: new Date().toLocaleTimeString()
                };
                setData(prevData => [...prevData, newData]);
            } catch (error) {
                console.error('Error al parsear el mensaje:', error);
            }
        }
    });

    client.on('error', (err) => {
        console.error('Error de conexión MQTT:', err);
    });

    return () => {
        if (client) {
            client.end();
        }
    };
}
