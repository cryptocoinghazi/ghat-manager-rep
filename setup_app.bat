@echo off
set PATH=%CD%\local_node\node-v22.21.0-win-x64;%PATH%
echo Node.js version:
node -v
echo Installing dependencies...
call npm run install-all
echo Setup complete.
