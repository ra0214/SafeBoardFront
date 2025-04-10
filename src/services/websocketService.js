const WS_URL = 'ws://52.5.61.144:8080/ws';

class WebSocketService {
    constructor() {
        this.ws = null;
        this.subscribers = {
            peopleGoUp: new Set(),
            peopleGoDown: new Set(),
            movement: new Set()
        };
        this.esp32_id = null;
    }

    connect(esp32_id) {
        this.esp32_id = esp32_id;
        this.ws = new WebSocket(WS_URL);

        this.ws.onopen = () => {
            console.log('✅ Conexión WebSocket establecida');
            this.ws.send(JSON.stringify({
                type: 'register',
                esp32_id: esp32_id
            }));
        };

        this.ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                console.log('Mensaje recibido:', data);
                
                if (!data.targetUser || data.targetUser === this.esp32_id) {
                    if (this.subscribers[data.type]) {
                        this.subscribers[data.type].forEach(callback => callback(data.data));
                    }
                }
            } catch (error) {
                console.error('Error procesando mensaje:', error);
            }
        };

        this.ws.onclose = () => {
            console.log('Conexión WebSocket cerrada. Intentando reconectar...');
            setTimeout(() => this.connect(this.esp32_id), 5000);
        };
    }

    subscribe(type, callback) {
        if (this.subscribers[type]) {
            this.subscribers[type].add(callback);
        }
    }

    unsubscribe(type, callback) {
        if (this.subscribers[type]) {
            this.subscribers[type].delete(callback);
        }
    }
}

const wsService = new WebSocketService();
export default wsService;