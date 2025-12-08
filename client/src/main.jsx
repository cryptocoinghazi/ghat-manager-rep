import React from 'react'
import ReactDOM from 'react-dom/client'
import configureAxios from './api/axiosConfig.js'
import App from './App.jsx'
import './styles/index.css'

// Configure axios before rendering the app
configureAxios()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)