import fs from 'fs';
import path from 'path';
import { sequelize } from './models/index.js';

const DEFAULT_BACKUP_PATH = 'c:\\Users\\gsyed\\OneDrive - Altimetrik Corp\\Desktop\\projects\\ghat-manager-rep\\server\\backups\\backup-1770379846970.sql';

async function restoreBackup(filePath) {
  const targetPath = filePath || DEFAULT_BACKUP_PATH;
  
  if (!fs.existsSync(targetPath)) {
    const msg = `Error: Backup file not found at ${targetPath}`;
    console.error(msg);
    if (process.argv[1] === fileURLToPath(import.meta.url)) process.exit(1);
    throw new Error(msg);
  }

  console.log(`Reading backup file: ${targetPath}`);
  const sqlContent = fs.readFileSync(targetPath, 'utf8');

  // 1. Split into statements
  // This simple split might break if ; is inside a string, but for mysqldump it's usually safe enough
  // or we can just try to run the whole thing if we weren't filtering.
  // Since we need to filter DDL, we must split.
  // A robust split is hard, but let's assume standard dump format where ; is at end of line.
  
  // Remove comments
  const cleanContent = sqlContent
    .replace(/^\s*#.*$/gm, '')
    .replace(/^\s*--.*$/gm, '')
    .replace(/^\/\*!.*\*\/;$/gm, '');

  const statements = cleanContent.split(/;\r?\n/).map(s => s.trim()).filter(s => s.length > 0);
  
  console.log(`Found ${statements.length} statements.`);

  const insertStatements = statements.filter(stmt => {
    const upper = stmt.toUpperCase();
    return upper.startsWith('INSERT INTO');
  }).map(stmt => {
    // Strip database name prefix if present (e.g., INSERT INTO `old_db`.`table` -> INSERT INTO `table`)
    // Regex matches: INSERT INTO (optional db.)(table)
    return stmt.replace(/(INSERT\s+INTO\s+)(?:`?[\w-]+`?\.)?(`?[\w-]+`?)/i, '$1$2');
  }).filter(stmt => {
    // Skip 'users' table as per requirement to preserve current login data
    const match = stmt.match(/INSERT\s+INTO\s+`?(\w+)`?/i);
    const tableName = match ? match[1].toLowerCase() : '';
    return tableName !== 'users';
  });

  console.log(`Filtered down to ${insertStatements.length} INSERT statements.`);

  const logDir = path.join(path.dirname(targetPath), '../logs');
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
  const logFile = path.join(logDir, `restore_log_${Date.now()}.txt`);
  const logStream = fs.createWriteStream(logFile, { flags: 'a' });

  const log = (msg) => {
    console.log(msg);
    logStream.write(msg + '\n');
  };

  log(`Restore Session Started: ${new Date().toISOString()}`);
  log(`Source File: ${targetPath}`);
  log(`Total Statements Found: ${statements.length}`);
  log(`INSERT Statements to Process: ${insertStatements.length}`);

  if (insertStatements.length === 0) {
    const msg = 'No INSERT statements found. Nothing to restore.';
    log(msg);
    logStream.end();
    if (process.argv[1] === fileURLToPath(import.meta.url)) process.exit(0);
    return { success: 0, skipped: 0, errors: 0, message: msg, logFile };
  }

  try {
    await sequelize.authenticate();
    log('Database connected.');

    // Ensure connection uses utf8mb4
    await sequelize.query("SET NAMES 'utf8mb4'", { raw: true });
    await sequelize.query("SET CHARACTER SET utf8mb4", { raw: true });

    // Disable FK checks
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', { raw: true });

    // Pre-process: Ensure tables support utf8mb4
    // Extract unique table names from INSERT statements
    const tableNames = new Set();
    const tableNameRegex = /INSERT\s+INTO\s+`?(\w+)`?/i;
    
    for (const stmt of insertStatements) {
      const match = stmt.match(tableNameRegex);
      if (match && match[1]) {
        tableNames.add(match[1]);
      }
    }

    log(`Ensuring utf8mb4 compliance for ${tableNames.size} tables...`);
    for (const table of tableNames) {
      try {
        await sequelize.query(`ALTER TABLE \`${table}\` CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`, { raw: true });
      } catch (err) {
        log(`[WARN] Failed to convert table '${table}' to utf8mb4: ${err.message}`);
        // Continue anyway
      }
    }

    let successCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const stmt of insertStatements) {
      try {
        await sequelize.query(stmt, { raw: true });
        successCount++;
        if (successCount % 100 === 0) process.stdout.write('.');
      } catch (err) {
        // Check for duplicate entry error (MySQL error code 1062)
        if (err.original && err.original.code === 'ER_DUP_ENTRY') {
          skippedCount++;
          // Extract table name from statement for better logging
          const tableNameMatch = stmt.match(/INSERT\s+INTO\s+`?(\w+)`?/i);
          const tableName = tableNameMatch ? tableNameMatch[1] : 'unknown';
          log(`[SKIPPED] Duplicate entry in table '${tableName}': ${err.message}`);
        } else {
          errorCount++;
          log(`[ERROR] Failed to execute statement: ${stmt.substring(0, 100)}...`);
          log(`        Error: ${err.message}`);
        }
      }
    }

    // Re-enable FK checks
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', { raw: true });

    log(`\n\nRestore completed.`);
    log(`Success (Inserted): ${successCount}`);
    log(`Skipped (Duplicates): ${skippedCount}`);
    log(`Errors (Failed): ${errorCount}`);
    log(`Log saved to: ${logFile}`);
    
    logStream.end();
    
    return { success: successCount, skipped: skippedCount, errors: errorCount, logFile };

  } catch (err) {
    log(`[FATAL] Error during restore: ${err.message}`);
    logStream.end();
    throw err;
  } finally {
    // Shared connection, do not close
  }
}

export { restoreBackup };

// Run if called directly
import { fileURLToPath } from 'url';
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const fileArg = args[0];
  restoreBackup(fileArg).then(() => process.exit(0)).catch(() => process.exit(1));
}
