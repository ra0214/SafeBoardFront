const BASE_API_URL = 'http://127.0.0.1:8080'; 

export async function fetchMovimientosBruscos(setData) {
    try {
        const response = await fetch(`${BASE_API_URL}/movement`); 
        if (!response.ok) {
            throw new Error('Error al obtener los datos de movimientos bruscos');
        }

        const data = await response.json();
        setData(data); 
    } catch (error) {
        console.error('Error al conectar con la API de movimientos bruscos:', error);
    }
}

export async function fetchPasajeros(setData) {
    try {
        const response = await fetch(`${BASE_API_URL}/peopleGoUp`); 
        if (!response.ok) {
            throw new Error('Error al obtener los datos de pasajeros');
        }

        const data = await response.json();
        // Transformar los datos al formato esperado por la tabla
        const formattedData = data.map(item => ({
            esp32_id: item.esp32_id,
            conteo: item.conteo,
            hora: new Date(item.created_at || Date.now()).toLocaleTimeString()
        }));
        setData(formattedData);
    } catch (error) {
        console.error('Error al conectar con la API de pasajeros:', error);
        setData([]); // En caso de error, establecer array vacío
    }
}