const fs = require('fs');
const path = require('path');

const backupFile = path.join(__dirname, 'backup-1770298431407.sql');
const outputFile = path.join(__dirname, 'cleaned_backup_data.sql');

try {
    const content = fs.readFileSync(backupFile, 'utf-8');

    // Find all tables that are being inserted into
    const tableRegex = /INSERT INTO\s+`(\w+)`/gi;
    const tables = new Set();
    let match;
    while ((match = tableRegex.exec(content)) !== null) {
        tables.add(match[1]);
    }

    console.log(`Found tables with data: ${Array.from(tables).sort().join(', ')}`);

    // Extract INSERT statements
    const inserts = [];
    const lines = content.split('\n');
    let currentStatement = [];
    let inStatement = false;

    for (const line of lines) {
        const stripped = line.trim();
        if (!stripped) continue;

        if (stripped.toUpperCase().startsWith('INSERT INTO')) {
            inStatement = true;
            currentStatement.push(line);
        } else if (inStatement) {
            currentStatement.push(line);
        }

        if (inStatement && stripped.endsWith(';')) {
            inserts.push(currentStatement.join('\n'));
            currentStatement = [];
            inStatement = false;
        }
    }

    let output = "SET FOREIGN_KEY_CHECKS = 0;\n\n";

    const sortedTables = Array.from(tables).sort();
    
    for (const table of sortedTables) {
        output += `TRUNCATE TABLE \`${table}\`;\n`;
    }

    // Explicitly truncate vehicle_images if not present (it won't be in the backup)
    if (!tables.has('vehicle_images')) {
        output += `TRUNCATE TABLE \`vehicle_images\`;\n`;
    }

    output += "\n";
    output += inserts.join('\n');
    output += "\n\nSET FOREIGN_KEY_CHECKS = 1;\n";

    fs.writeFileSync(outputFile, output, 'utf-8');
    console.log(`Generated ${outputFile} with ${inserts.length} insert statements.`);

} catch (err) {
    console.error('Error:', err);
}
