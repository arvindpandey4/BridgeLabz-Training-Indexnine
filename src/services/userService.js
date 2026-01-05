import axios from 'axios';

// Create instance
const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Interceptor: Request
apiClient.interceptors.request.use(config => {
    // Add Auth Token or Logger
    console.log('Request Interceptor:', config.url);
    // config.headers.Authorization = `Bearer token`;
    return config;
}, error => Promise.reject(error));

// Interceptor: Response
apiClient.interceptors.response.use(response => {
    console.log('Response Interceptor:', response.status);
    return response;
}, error => {
    // Handle global errors (e.g., 401 Unauthorized)
    return Promise.reject(error);
});

export const getUsers = () => apiClient.get('/users');
export const getUserById = (id) => apiClient.get(`/users/${id}`);
