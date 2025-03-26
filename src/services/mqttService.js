import mqtt from 'mqtt';

const MQTT_BROKER = 'ws://98.83.255.101:15675/ws'; // WebSocket de RabbitMQ
const TOPIC = 'sensor/ultrasonico/distancia';

export function connectMQTT(setDistance) {
    const client = mqtt.connect(MQTT_BROKER, {
        username: 'guest',
        password: 'guest'
    });

    client.on('connect', () => {
        console.log('✅ Conectado a MQTT');
        client.subscribe(TOPIC, (err) => {
            if (err) {
                console.error('Error al suscribirse al topic:', err);
            }
        });
    });

    client.on('message', (topic, message) => {
        if (topic === TOPIC) {
            try {
                const data = JSON.parse(message.toString());
                setDistance(data.distancia); // Se actualiza el estado con la nueva distancia
            } catch (error) {
                console.error('Error al parsear el mensaje:', error);
            }
        }
    });

    client.on('error', (err) => {
        console.error('Error de conexión MQTT:', err);
    });
}
