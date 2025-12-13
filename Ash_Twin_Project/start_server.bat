@echo off
REM Simple batch wrapper to start the PowerShell server

SET PORT=8080

REM Check if custom port provided
IF NOT "%1"=="" SET PORT=%1

echo.
echo ================================================
echo   Starting server on port %PORT%...
echo ================================================
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0start_server.ps1" -Port %PORT%

pause
