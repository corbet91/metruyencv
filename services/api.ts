import axios from 'axios';

const apiClient = axios.create({
    baseURL:  process.env.URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  apiClient.interceptors.response.use(
    response => response,
    error => {
      console.error('API call failed:', error);
      if (error.response.status === 401) {
        console.error('AUnauthorized', error);
      } else if (error.response.status === 404) {
        console.log('api not found')
      }
      return Promise.reject(error);
    }
  );

  apiClient.interceptors.request.use(
    config => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error)
  );

  export default apiClient;