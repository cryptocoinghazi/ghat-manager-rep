import axios from 'axios';

const configureAxios = () => {
  // Always use relative URLs - Vite proxy handles dev, same origin handles prod
  axios.defaults.baseURL = '';

  // Restore token from localStorage if it exists
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export default configureAxios;
