const BASE_API_URL = 'http://127.0.0.1:8080'; // Cambia esto por la URL de tu API

export async function fetchMovimientosBruscos(setData) {
    try {
        const response = await fetch(`${BASE_API_URL}/movement`); // Endpoint de tu API
        if (!response.ok) {
            throw new Error('Error al obtener los datos de movimientos bruscos');
        }

        const data = await response.json();
        setData(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
        console.error('Error al conectar con la API de movimientos bruscos:', error);
    }
}