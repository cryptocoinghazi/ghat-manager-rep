# Ghat Manager - Sand Mining Billing Application

## Overview
Ghat Manager is a web-based billing and receipt management system for sand mining businesses. It helps manage truck receipts, track payments, generate reports, and maintain records of truck owners and transactions.

## Current State
The application is configured for local development AND cloud deployment:
- **Frontend**: React + Vite on port 5000
- **Backend**: Express.js server on port 3000
- **Database**: SQLite (local file-based)
- **Cloud Deployment**: Ready for Railway AND Render
- **Status**: Fully operational

## Project Structure
```
├── client/                  # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── DailyRegister.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Login.jsx        # Authentication login page
│   │   │   ├── ReceiptForm.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Settings.jsx
│   │   ├── styles/         # CSS styles
│   │   ├── utils/          # Utility functions (PDF generation)
│   │   ├── App.jsx         # Main app with auth state management
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   └── vite.config.js      # Vite configuration
├── server/                  # Express backend
│   ├── middleware/
│   │   └── auth.js         # JWT authentication middleware
│   ├── db.js               # Database schema and initialization
│   ├── server.js           # API endpoints with auth protection
│   └── package.json
├── package.json            # Root package.json with scripts
├── railway.json            # Railway deployment config
├── nixpacks.toml           # Railway build configuration
├── render.yaml             # Render deployment config
└── DEPLOYMENT.md           # Deployment guide

```

## Recent Changes (December 10, 2025)
12. **Partner Royalty System**
   - Added partner designation for truck owners with discounted rates
   - Partner rate field in Financial Settings (separate from default rate)
   - Auto-apply partner rates when selecting partner owners in receipt form
   - Partner Royalty report tab in Reports showing partner vs regular comparison
   - Database migration added is_partner and partner_rate fields to truck_owners and receipts
   - Backend API endpoint /api/reports/partner-royalty for royalty calculations

## Previous Changes (December 8, 2025)
1. Created Express.js backend server with all required API endpoints
2. Set up SQLite database with tables for settings, truck_owners, receipts, and users
3. Configured Vite to use port 5000 with host 0.0.0.0 for Replit proxy support
4. Added allowedHosts: true to Vite config for Replit iframe compatibility
5. Updated axios configuration to use relative URLs for API proxy
6. Installed all dependencies (frontend and backend)
7. Configured workflow to run both frontend and backend concurrently
8. **Added JWT Authentication System** with role-based access control (admin/user)
   - Login page with username/password authentication
   - JWT tokens stored in localStorage with 24-hour expiration
   - All API endpoints protected with authentication middleware
   - Admin-only routes for settings updates, backup/restore, and user management
9. **Implemented Role-Based Access Control (RBAC)**
   - Users can only access "Quick Receipt" and "Daily Register"
   - Admins have access to all features (Reports, Settings, User Management)
   - Frontend route protection with AdminRoute component
   - Backend middleware enforces authorization
10. **Added User Management System**
   - Admin-only interface to create, edit, and delete users
   - User role assignment (admin/user)
   - User creation with password hashing using bcrypt
   - User Management page at `/users` route (admin only)
   - API endpoints for user CRUD operations at `/api/settings/users`
11. **Cloud Deployment Configuration**
   - Railway deployment with railway.json and nixpacks.toml
   - Render deployment with render.yaml
   - Smart API URL detection for different environments
   - CORS configured for Railway and Render domains
   - Production-ready with graceful shutdown handlers

## Features
- **Authentication**: JWT-based login with role-based access control (admin/user roles)
- **Role-Based Navigation**: Different menu items for users vs admins
- **Receipt Management**: Create and manage gate passes for sand trucks
- **Daily Register**: View and edit daily transactions (available to all users)
- **Reports**: Generate credit reports, monthly summaries, financial reports, and partner royalty reports (admin only)
- **Partner Management**: Designate truck owners as partners with discounted rates
- **Settings**: Manage company information and truck owners (admin only)
- **User Management**: Admin-only feature to create, edit, and delete users
- **Backup/Restore**: Export and import data (admin-only)
- **Local Database**: SQLite database for local development/deployment

## Technology Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Recharts, jsPDF
- **Backend**: Express.js, Node.js
- **Database**: SQLite (for local development and deployment)
- **Authentication**: JWT (jsonwebtoken), bcrypt for password hashing
- **Additional**: axios, date-fns, react-router-dom, react-hot-toast (notifications)
- **Database Management**: sqlite, sqlite3 (Node.js driver)

## API Endpoints
All endpoints except `/api/auth/*` require JWT authentication via `Authorization: Bearer <token>` header.

### Authentication (Public)
- POST `/api/auth/login` - Login with username/password, returns JWT token
- POST `/api/auth/verify` - Verify JWT token validity

### User Management (Admin only)
- GET `/api/settings/users` - List all users
- POST `/api/settings/users` - Create new user (requires: username, password, role)
- PUT `/api/settings/users/:id` - Update user (full_name, role, password, is_active)
- DELETE `/api/settings/users/:id` - Delete/deactivate user

### Settings
- GET `/api/settings` - Fetch all settings (authenticated)
- POST `/api/settings/batch-update` - Update settings (admin only)
- GET `/api/settings/backup` - Download backup (admin only)
- POST `/api/settings/restore` - Restore from backup (admin only)

### Truck Owners
- GET `/api/settings/truck-owners` - List all truck owners (authenticated)
- POST `/api/settings/truck-owners` - Add new truck owner (authenticated)

### Receipts
- GET `/api/receipts` - Fetch receipts with filters
- POST `/api/receipts` - Create new receipt
- PUT `/api/receipts/:id` - Update receipt

### Reports
- GET `/api/reports/credit-report` - Credit report
- GET `/api/reports/monthly-report` - Monthly summary
- GET `/api/reports/daily-summary` - Daily financial summary
- GET `/api/reports/export/credit-csv` - Export credit report CSV
- GET `/api/reports/export/monthly-csv` - Export monthly report CSV
- GET `/api/reports/export/financial-csv` - Export financial summary CSV
- GET `/api/reports/partner-royalty` - Partner royalty comparison report

## Database Schema
### Settings Table
- key (VARCHAR, PRIMARY KEY)
- value (TEXT)

### Truck Owners Table
- id (SERIAL, PRIMARY KEY)
- name (VARCHAR)
- contact (VARCHAR)
- address (TEXT)
- is_partner (INTEGER, 0 or 1)
- partner_rate (DECIMAL, custom rate for partner)
- created_at (TIMESTAMP)

### Receipts Table
- id (SERIAL, PRIMARY KEY)
- receipt_number (VARCHAR, UNIQUE)
- receipt_date (TIMESTAMP)
- truck_owner_id (INTEGER, FK)
- truck_number (VARCHAR)
- location (VARCHAR)
- destination (VARCHAR)
- weight (DECIMAL)
- rate (DECIMAL)
- freight_amount (DECIMAL)
- advance (DECIMAL)
- balance (DECIMAL)
- cash_paid (DECIMAL)
- payment_status (VARCHAR)
- notes (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### Users Table
- id (SERIAL, PRIMARY KEY)
- username (VARCHAR, UNIQUE)
- password (VARCHAR, bcrypt hashed)
- role (VARCHAR, 'admin' or 'user')
- created_at (TIMESTAMP)

## Default Login Credentials
- **Admin**: username=`admin`, password=`admin123`
- **User**: username=`user`, password=`user123`

**Important**: Change these default credentials before deploying to production!

## Running the Application
The application runs automatically via the configured workflow. Both frontend and backend start concurrently.

**Frontend**: http://localhost:5000 (proxied through Replit)
**Backend**: http://localhost:3000 (internal only)

## Development Notes
- The frontend uses Vite's proxy feature to route `/api/*` requests to the backend
- Backend binds to localhost:3000 (internal only)
- Frontend binds to 0.0.0.0:5000 (exposed to Replit proxy)
- All API calls from frontend use relative paths to work with Vite proxy
- Database is automatically initialized on server start

## Navigation Structure (Role-Based)

### Regular User (role: 'user')
- Quick Receipt (create receipts)
- Daily Register (view daily transactions)

### Admin User (role: 'admin')
- Quick Receipt (create receipts)
- Daily Register (view daily transactions)
- Reports (view credit reports, monthly summaries, financial reports)
- User Management (create, edit, delete users)
- Settings (manage company info, truck owners, backup/restore)

## User Preferences
- SQLite database for local development and deployment
- Role-based access control with frontend and backend enforcement
- Users have limited access by default, admins have full access
