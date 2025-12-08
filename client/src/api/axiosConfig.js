import axios from 'axios';

const configureAxios = () => {
  // Configure API base URL
  if (import.meta.env.PROD) {
    // Production: use same origin
    axios.defaults.baseURL = window.location.origin;
  } else {
    // Development: connect to backend on port 3000
    axios.defaults.baseURL = 'http://localhost:3000';
  }

  // Restore token from localStorage if it exists
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};

export default configureAxios;
