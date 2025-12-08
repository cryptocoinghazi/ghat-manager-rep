import axios from 'axios';

const getApiBaseUrl = () => {
  if (typeof window !== 'undefined') {
    if (window.location.hostname.includes('onrender.com')) {
      return 'https://ghat-manager-rep.onrender.com/api';
    }
    if (window.location.hostname.includes('railway.app')) {
      return '/api';
    }
  }
  if (import.meta.env.PROD) {
    return window.location.origin + '/api';
  }
  return 'http://localhost:3000/api';
};

const API_BASE_URL = getApiBaseUrl();

console.log('API Base URL:', API_BASE_URL);
console.log('Current URL:', typeof window !== 'undefined' ? window.location.href : 'SSR');

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Response error:', {
      message: error.message,
      url: error.config?.url,
      status: error.response?.status
    });
    
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('role');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  async login(username, password) {
    try {
      console.log('Attempting login to:', API_BASE_URL);
      
      const response = await api.post('/auth/login', { 
        username: username.trim(),
        password 
      });
      
      if (response.data.success && response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('role', response.data.user.role);
        
        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        
        console.log('Login successful');
        return {
          success: true,
          user: response.data.user
        };
      }
      return { 
        success: false, 
        message: response.data.message || 'Login failed' 
      };
    } catch (error) {
      console.error('Login error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      return { 
        success: false, 
        message: error.response?.data?.message || 
                error.message || 
                'Connection error. Please check if server is running.' 
      };
    }
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    delete api.defaults.headers.common['Authorization'];
    window.location.href = '/login';
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    try {
      return userStr ? JSON.parse(userStr) : null;
    } catch (e) {
      return null;
    }
  },

  getToken() {
    return localStorage.getItem('token');
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  isAdmin() {
    const user = this.getCurrentUser();
    return user?.role === 'admin';
  },

  getAPI() {
    return api;
  }
};

const token = authService.getToken();
if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export { api };
export default authService;
