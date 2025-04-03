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