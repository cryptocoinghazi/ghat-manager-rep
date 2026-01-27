@echo off
echo Starting MariaDB Local Server...
echo Press Ctrl+C to stop the server.
.\local_db\mariadb-10.11.6-winx64\bin\mariadbd.exe --datadir=.\local_db\data --console
