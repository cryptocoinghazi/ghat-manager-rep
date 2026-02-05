import mysqldump from 'mysqldump';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputFile = path.join(__dirname, 'full_backup_for_server_restore.sql');

async function createBackup() {
    try {
        console.log('Generating full backup...');
        await mysqldump({
            connection: {
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'sand_mining_db',
            },
            dumpToFile: outputFile,
        });
        console.log(`Backup created at: ${outputFile}`);
    } catch (e) {
        console.error('Backup failed:', e);
    }
}

createBackup();
