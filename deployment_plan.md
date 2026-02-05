# OCR Feature Deployment Plan & Guide

## 1. Deployment Overview
- **Objective:** Deploy the new OCR Photo Recognition feature to the Digital Ocean production environment.
- **Components:** Backend (Node.js/Express), Database (MySQL), Frontend (React/Vite).
- **Downtime:** Zero downtime expected (additive changes).

## 2. Prerequisites
- SSH access to the Digital Ocean Droplet.
- Database credentials (MySQL).
- **OCR.space API Key** (or Google Vision API Key) ready for environment configuration.

## 3. Database Migration
**File:** `deploy_ocr_feature.sql`

1.  **Backup Database:**
    ```bash
    mysqldump -u [user] -p[password] [database_name] > backup_before_ocr_$(date +%F).sql
    ```
2.  **Run Migration:**
    ```bash
    mysql -u [user] -p[password] [database_name] < deploy_ocr_feature.sql
    ```
3.  **Rollback Strategy (Database):**
    If the migration fails or causes issues, drop the new table:
    ```sql
    DROP TABLE IF EXISTS vehicle_images;
    ```

## 4. Backend Deployment
1.  **Pull Latest Code:**
    ```bash
    cd /path/to/server
    git pull origin main
    ```
2.  **Update Dependencies:**
    ```bash
    npm ci --omit=dev
    # Ensure tesseract.js is REMOVED
    ```
3.  **Configure Environment Variables:**
    Edit `.env` file:
    ```bash
    nano .env
    ```
    Add/Update:
    ```ini
    OCR_PROVIDER=ocrspace
    OCR_SPACE_API_KEY=K84673450888957
    # Or for Google:
    # OCR_PROVIDER=google
    # GOOGLE_VISION_API_KEY=your_key_here
    ```
4.  **Restart Backend Service:**
    ```bash
    pm2 restart ghat-server
    # Or systemd:
    # sudo systemctl restart ghat-server
    ```
5.  **Verification:**
    Check logs for startup errors:
    ```bash
    pm2 logs ghat-server --lines 100
    ```

## 5. Frontend Deployment
1.  **Pull Latest Code:**
    ```bash
    cd /path/to/client
    git pull origin main
    ```
2.  **Install Dependencies:**
    ```bash
    npm ci
    ```
3.  **Build Production Assets:**
    ```bash
    npm run build
    ```
4.  **Deploy Assets:**
    Copy `dist` folder to web server root (e.g., Nginx):
    ```bash
    rsync -av --delete dist/ /var/www/ghat-manager/
    ```

## 6. Testing Checklist
- [ ] **Upload Photo:** Go to Receipt Form -> Upload Photo.
- [ ] **OCR Processing:** Verify loader appears and OCR completes.
- [ ] **Data Population:**
    - [ ] Vehicle Number extracted correctly.
    - [ ] **Auto-Population:** If vehicle exists in DB, Owner Name should auto-fill.
    - [ ] **Fallback:** If vehicle not in `truck_vehicles` but in `truck_owners`, Owner Name should still auto-fill.
- [ ] **Manual Override:** Change the vehicle number manually; ensure form submits correctly.
- [ ] **History:** Check Database `vehicle_images` table for new record.

## 7. Rollback Plan (Full)
If critical failure occurs:
1.  **Revert Code:**
    ```bash
    git reset --hard [previous_commit_hash]
    ```
2.  **Revert Database:**
    ```sql
    DROP TABLE vehicle_images;
    ```
3.  **Restart Services:**
    ```bash
    pm2 restart ghat-server
    ```
