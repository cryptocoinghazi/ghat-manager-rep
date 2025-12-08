# Ghat Manager - Sand Mining Billing System

A comprehensive billing and management system for sand mining operations with receipt generation, credit management, and reporting features.

## Features

- User authentication with role-based access
- Receipt generation and management
- Truck owner and vehicle tracking
- Credit payment management
- Financial reporting and analytics
- Settings management
- PDF receipt generation

## Local Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ghat-manager
```

2. Install dependencies for all modules:
```bash
npm run install-all
```

This will install dependencies for the root, server, and client directories.

### Running Locally

Start both the server and client concurrently:
```bash
npm run dev
```

The application will start:
- **Frontend:** http://localhost:5000 (React + Vite)
- **Backend:** http://localhost:3000 (Express.js)
- **Database:** SQLite (automatically created in `server/database/ghatmanager.db`)

### Development Scripts

- `npm run dev` - Start both server and client in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend client
- `npm run build` - Build the client for production
- `npm run migrate` - Run database migrations

### Default Login Credentials

For testing, use these default credentials:

**Admin Account:**
- Username: `admin`
- Password: `admin123`

**User Account:**
- Username: `user`
- Password: `user123`

### Project Structure

```
ghat-manager/
├── server/              # Express.js backend
│   ├── database/        # SQLite database (auto-created)
│   ├── routes/          # API route handlers
│   ├── middleware/      # Authentication and other middleware
│   ├── utils/           # Utility functions
│   ├── db.js           # Database initialization
│   └── index.js        # Server entry point
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── styles/      # CSS and Tailwind styles
│   │   ├── utils/       # Client-side utilities
│   │   └── App.jsx     # Main app component
│   └── vite.config.js  # Vite configuration
└── package.json        # Root package with concurrently

```

### Database

The application uses SQLite for local development. The database is automatically initialized on first run with the following tables:
- **users** - User accounts with authentication
- **receipts** - Receipt records
- **truck_owners** - Truck owner information
- **credit_payments** - Credit payment tracking
- **settings** - Application configuration

Database file location: `server/database/ghatmanager.db`

### Environment Variables

Create a `.env` file in the root directory (optional):
```
NODE_ENV=development
PORT=3000
VITE_API_URL=http://localhost:3000
```

See `.env.example` for reference.

### Troubleshooting

#### Port Already in Use
If port 3000 or 5000 is already in use:
- Stop other applications using those ports
- Or modify the port in `server/index.js` and `client/vite.config.js`

#### Database Connection Issues
If you get database errors:
1. Ensure `server/database/` directory exists
2. Delete `server/database/ghatmanager.db` to reset
3. Restart the application

#### API Connection Issues
Make sure both server and client are running, and the client is connecting to the correct API URL in the proxy configuration.

## Building for Production

```bash
npm run build
npm run start
```

This builds the client and starts the server, which will serve the built frontend.

## License

Private - Ghat Manager Project
