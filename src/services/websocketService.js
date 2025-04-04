const WS_URL = 'ws://52.5.61.144:8080/ws';

class WebSocketService {
    constructor() {
        this.ws = null;
        this.subscribers = {
            peopleGoUp: new Set(),
            peopleGoDown: new Set(),
            movement: new Set()
        };
    }

    connect() {
        this.ws = new WebSocket(WS_URL);

        this.ws.onopen = () => {
            console.log('✅ Conexión WebSocket establecida');
        };

        this.ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.type === 'peopleGoUp') {
                    this.subscribers.peopleGoUp.forEach(callback => callback(data.data));
                } else if (data.type === 'peopleGoDown') {
                    this.subscribers.peopleGoDown.forEach(callback => callback(data.data));
                }
            } catch (error) {
                console.error('Error procesando mensaje:', error);
            }
        };

        this.ws.onclose = () => {
            console.log('Conexión WebSocket cerrada. Intentando reconectar...');
            setTimeout(() => this.connect(), 5000);
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