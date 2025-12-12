import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeDatabase } from './db.js';
import { syncModels, sequelize } from './models/index.js';
import { authenticateToken, requireAdmin } from './middleware/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for development
  crossOriginEmbedderPolicy: false
}));
app.use(compression());
app.use(morgan('dev'));
const allowedOrigins = [
  'http://localhost:5000',
  'http://localhost:3000',
  'http://localhost:5173',
    'https://ghat-manager-rep.onrender.com',    // Your backend
  'https://ghat-manager-rep-1.onrender.com',  // Your frontend - ADD THIS
  'https://*.onrender.com',                   // Allow all Render subdomains
   process.env.FRONTEND_URL,
  process.env.RAILWAY_STATIC_URL,
  process.env.RENDER_EXTERNAL_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin) || 
        origin.endsWith('.railway.app') ||
        origin.endsWith('.onrender.com') ||
        process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const useMySQL = (process.env.DB_DIALECT || 'mysql').toLowerCase() === 'mysql';
if (useMySQL) {
  await syncModels();
} else {
  await initializeDatabase();
}

// Import routes
import receiptRoutes from './routes/receipts.js';
import settingsRoutes from './routes/settings.js';
import reportsRoutes from './routes/reports.js';
import authRoutes from './routes/auth.js';
import expenseRoutes from './routes/expenses.js';
import databaseRoutes from './routes/database.js';

// API Routes - Auth routes are public
app.use('/api/auth', authRoutes);

// Protected routes - require authentication
app.use('/api/receipts', authenticateToken, receiptRoutes);
app.use('/api/settings', authenticateToken, requireAdmin, settingsRoutes);
app.use('/api/reports', authenticateToken, requireAdmin, reportsRoutes);
app.use('/api/expenses', authenticateToken, expenseRoutes);
app.use('/api/database', authenticateToken, requireAdmin, databaseRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    railway: !!process.env.RAILWAY_ENVIRONMENT,
    render: !!process.env.RENDER
  });
});

// Test endpoint for debugging
app.get('/api/test', (req, res) => {
  res.json({
    message: 'Backend API is working!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    render: !!process.env.RENDER,
    railway: !!process.env.RAILWAY_ENVIRONMENT,
    service: process.env.RENDER_SERVICE_NAME || process.env.RAILWAY_SERVICE_ID || 'Local',
    database: useMySQL ? 'MySQL' : 'SQLite',
    cors: 'Enabled'
  });
});

// Admin info endpoint (for debugging)
app.get('/api/admin/info', (req, res) => {
  res.json({
    app: 'Ghat Manager',
    version: '1.0.0',
    environment: process.env.NODE_ENV,
    database: useMySQL ? 'MySQL' : 'SQLite',
    railway: {
      environment: process.env.RAILWAY_ENVIRONMENT,
      serviceId: process.env.RAILWAY_SERVICE_ID,
      projectId: process.env.RAILWAY_PROJECT_ID
    },
    render: {
      isRender: !!process.env.RENDER,
      serviceName: process.env.RENDER_SERVICE_NAME,
      externalUrl: process.env.RENDER_EXTERNAL_URL
    }
  });
});

// In production, serve static files from React build
if (process.env.NODE_ENV === 'production') {
  const clientPath = path.join(__dirname, '../client/dist');
  app.use(express.static(clientPath));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
} else {
  // Development route
  app.get('/', (req, res) => {
    res.json({ 
      message: 'Ghat Manager API Server',
      version: '1.0.0',
      endpoints: [
        '/api/receipts',
        '/api/settings',
        '/api/reports',
        '/api/health'
      ]
    });
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err);
  res.status(500).json({ 
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🌐 Railway: ${process.env.RAILWAY_ENVIRONMENT || 'Not on Railway'}`);
  console.log(`🌍 Render: ${process.env.RENDER_SERVICE_NAME || 'Not on Render'}`);
  console.log(`🎯 API Base: http://localhost:${PORT}/api`);
  console.log(`🔗 External URL: ${process.env.RENDER_EXTERNAL_URL || process.env.RAILWAY_STATIC_URL || 'Not configured'}`);
  console.log(`👤 Default Users: admin/admin123, user/user123`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
