@echo off
echo Stopping MariaDB...
.\local_db\mariadb-10.11.6-winx64\bin\mysqladmin.exe -u root shutdown
echo MariaDB stopped.
