import axios from 'axios';

const configureAxios = () => {
  // Use absolute URL for dev to bypass potential proxy issues
  // In production, use relative URL (same origin)
  const isDev = import.meta.env.DEV;
  axios.defaults.baseURL = isDev ? 'http://localhost:3000' : '';

  // Restore token from localStorage if it exists
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  // Add request interceptor for debugging
  axios.interceptors.request.use(request => {
    console.log('Starting Request:', request.method.toUpperCase(), request.url);
    if (request.baseURL) console.log('Base URL:', request.baseURL);
    return request;
  });
};

export default configureAxios;
