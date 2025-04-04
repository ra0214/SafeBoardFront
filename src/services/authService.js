const API_URL = 'http://52.5.61.144:8080';

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
            throw new Error(error.error || 'Credenciales inválidas');
        }

        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.user));
        return data;
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
    const user = localStorage.getItem('user');
    return !!user;
};

export const setAuthenticated = (value) => {
    if (!value) {
        localStorage.removeItem('user');
    }
};

export const logout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    return true;
};