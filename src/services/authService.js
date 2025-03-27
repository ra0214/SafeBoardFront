const API_URL = 'http://localhost:8080';

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: credentials.username,
                password: credentials.password
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Error en el inicio de sesión');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userData.username,
                email: userData.email,
                password: userData.password
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Error en el registro');
        }

        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};

export const setAuthenticated = (value) => {
    if (value) {
        localStorage.setItem('isAuthenticated', 'true');
    } else {
        localStorage.removeItem('isAuthenticated');
    }
};

export const logout = () => {
    localStorage.clear(); // Limpia todo el localStorage
    return true;
};