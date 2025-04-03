import mqtt from 'mqtt';

const MQTT_BROKER = 'ws://98.83.255.101:15675/ws';

export const TOPICS = {
    PERSONAS_SUBEN: 'sensor.conteo.personas',
    PERSONAS_BAJAN: 'sensor.personas.bajadas',
    MOVIMIENTOS: 'sensor.movimientos.bruscos'
};

export function connectMQTTCounter(topic, setData) {
    const client = mqtt.connect(MQTT_BROKER, {
        username: 'guest',
        password: 'guest'
    });

    client.on('connect', () => {
        console.log(`✅ Conectado a MQTT - Topic: ${topic}`);
        client.subscribe(topic);
    });

    client.on('message', (receivedTopic, message) => {
        if (receivedTopic === topic) {
            try {
                const messageData = JSON.parse(message.toString());
                setData(prevData => [...prevData, messageData]);
            } catch (error) {
                console.error('Error al parsear el mensaje:', error);
            }
        }
    });

    return () => {
        if (client) {
            client.end();
        }
    };
}

export function connectMQTTMovements(callback) {
    const client = mqtt.connect(MQTT_BROKER, {
        username: 'guest',
        password: 'guest'
    });

    client.on('connect', () => {
        console.log('✅ Conectado a MQTT - Movimientos');
        client.subscribe(TOPICS.MOVIMIENTOS);
    });

    client.on('message', (topic, message) => {
        try {
            const data = JSON.parse(message.toString());
            callback(data);
        } catch (error) {
            console.error('Error al parsear mensaje de movimientos:', error);
        }
    });

    return () => {
        if (client) {
            client.end();
        }
    };
}