# Ghat Manager - Railway Deployment Guide

## Prerequisites
- Railway account (https://railway.app)
- GitHub repository with your code
- Railway CLI (optional, for advanced users)

## Step 1: Prepare Your Repository

Make sure all changes are committed and pushed:

```bash
git add .
git commit -m "Add Railway deployment configuration"
git push origin main
```

## Step 2: Deploy on Railway

### Option A: Using Railway Web Dashboard (Recommended)

1. **Go to Railway.app** and sign in
2. Click **"New Project"**
3. Select **"Deploy from GitHub repo"**
4. Choose your repository
5. Railway will automatically detect the configuration and deploy

### Option B: Using Railway CLI

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway init

# Link to existing project or create new
railway link

# Deploy
railway up
```

## Step 3: Configure Environment Variables

After deployment, add these environment variables in Railway Dashboard:

### Required Variables:
1. **JWT_SECRET** - Generate a strong secret:
   ```bash
   openssl rand -base64 32
   ```
   Or use: `your_super_secret_jwt_key_change_in_production_2024`

### Optional Variables:
- **NODE_ENV** = "production" (recommended)
- **PORT** = 3000 (default)
- **FRONTEND_URL** = Your Railway URL (for CORS)

## Step 4: Verify Deployment

### Test Your Deployment:

1. **Check health endpoint:**
   ```
   https://your-project-name.railway.app/api/health
   ```

2. **Test login endpoint:**
   ```bash
   curl -X POST https://your-project-name.railway.app/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"username":"admin","password":"admin123"}'
   ```

3. **View admin info:**
   ```
   https://your-project-name.railway.app/api/admin/info
   ```

## Step 5: Access Your Application

1. **Default URL:** Railway will provide a URL like:
   ```
   https://ghat-manager-production.up.railway.app
   ```

2. **Default Credentials:**
   - **Admin:** `admin` / `admin123`
   - **User:** `user` / `user123`

   **IMPORTANT:** Change these passwords immediately after first login!

## Step 6: Configure Custom Domain (Optional)

1. Go to your project in Railway
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain
4. Configure DNS as instructed

## Troubleshooting

### 1. Application Won't Start
- Check logs: `railway logs` or in Railway dashboard
- Verify environment variables are set
- Ensure port 3000 is available

### 2. Database Errors
- The app will fall back to in-memory database if needed
- For production, consider using Railway PostgreSQL add-on

### 3. CORS Errors
- Set `FRONTEND_URL` environment variable
- Check allowed origins in server configuration

### 4. Build Failures
- Check Node.js version (requires >= 18)
- Verify all dependencies are installed
- Check build logs in Railway

## Monitoring

1. **Logs:** View real-time logs in Railway dashboard
2. **Metrics:** Monitor CPU, memory, and network usage
3. **Health Checks:** Automatic at `/api/health`

## Security Checklist

**Immediate Actions:**
1. Change default admin password
2. Set strong JWT_SECRET
3. Review user permissions

**Recommended Actions:**
1. Enable automatic backups
2. Set up monitoring alerts
3. Regular dependency updates

## Features Deployed

**Authentication System:**
- JWT-based login/logout
- Role-based access (Admin/User)
- Protected API endpoints

**Production Ready:**
- Health checks
- CORS configuration
- Static file serving
- Error handling

**Database:**
- SQLite with persistent storage
- Auto-creation of default users
- Fallback to in-memory database

## Quick Commands

```bash
# View logs
railway logs

# View environment variables
railway vars

# Redeploy
railway up

# Open in browser
railway open
```

## Need Help?

1. Check Railway status: https://status.railway.app
2. Railway Discord: https://discord.gg/railway
3. Documentation: https://docs.railway.app

Happy deploying!
