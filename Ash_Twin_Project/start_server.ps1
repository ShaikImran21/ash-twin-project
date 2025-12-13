#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Start a local HTTP server for the Ash Twin Project Pathfinder app
.DESCRIPTION
    Hosts the application on a specified port with CORS enabled for API access
.PARAMETER Port
    The port number to host on (default: 8080)
.EXAMPLE
    .\start_server.ps1
    .\start_server.ps1 -Port 3000
#>

param(
    [int]$Port = 8080
)

$ErrorActionPreference = "Stop"

Write-Host @"

╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║        ASH TWIN PROJECT: PATHFINDER - LOCAL SERVER          ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

"@ -ForegroundColor Cyan

Write-Host "🚀 Starting local HTTP server..." -ForegroundColor Yellow
Write-Host "   Port: $Port" -ForegroundColor White
Write-Host "   Directory: $(Get-Location)" -ForegroundColor White

# Check if port is available
$portInUse = Get-NetTCPConnection -LocalPort $Port -ErrorAction SilentlyContinue
if ($portInUse) {
    Write-Host "`n❌ Error: Port $Port is already in use!" -ForegroundColor Red
    Write-Host "   Try a different port with: .\start_server.ps1 -Port 8081" -ForegroundColor Yellow
    exit 1
}

# Create HTTP listener
$http = [System.Net.HttpListener]::new()
$http.Prefixes.Add("http://localhost:$Port/")

try {
    $http.Start()
    
    Write-Host "`n✅ Server started successfully!" -ForegroundColor Green
    Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
    Write-Host "📱 ACCESS YOUR APP:" -ForegroundColor Yellow
    Write-Host "   Main App:  http://localhost:$Port/index.html" -ForegroundColor White
    Write-Host "   Test Suite: http://localhost:$Port/test_unsplash_api.html" -ForegroundColor White
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
    
    Write-Host "`n💡 Tips:" -ForegroundColor Cyan
    Write-Host "   • Press Ctrl+C to stop the server" -ForegroundColor Gray
    Write-Host "   • Server logs will appear below" -ForegroundColor Gray
    Write-Host "   • All API requests will work correctly" -ForegroundColor Gray
    
    Write-Host "`n📊 Server Log:" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
    
    # MIME type mappings
    $mimeTypes = @{
        '.html' = 'text/html'
        '.css' = 'text/css'
        '.js' = 'application/javascript'
        '.json' = 'application/json'
        '.png' = 'image/png'
        '.jpg' = 'image/jpeg'
        '.jpeg' = 'image/jpeg'
        '.gif' = 'image/gif'
        '.svg' = 'image/svg+xml'
        '.ico' = 'image/x-icon'
        '.wav' = 'audio/wav'
        '.mp3' = 'audio/mpeg'
        '.woff' = 'font/woff'
        '.woff2' = 'font/woff2'
        '.ttf' = 'font/ttf'
        '.md' = 'text/markdown'
        '.txt' = 'text/plain'
    }
    
    while ($http.IsListening) {
        $context = $http.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Log request
        $timestamp = Get-Date -Format "HH:mm:ss"
        Write-Host "[$timestamp] " -NoNewline -ForegroundColor Gray
        Write-Host "$($request.HttpMethod) " -NoNewline -ForegroundColor Yellow
        Write-Host "$($request.Url.LocalPath)" -ForegroundColor White
        
        # Get requested file path
        $requestedPath = $request.Url.LocalPath.TrimStart('/')
        
        # Default to index.html if root requested
        if ([string]::IsNullOrEmpty($requestedPath) -or $requestedPath -eq '/') {
            $requestedPath = 'index.html'
        }
        
        $filePath = Join-Path -Path (Get-Location) -ChildPath $requestedPath
        
        # Check if file exists
        if (Test-Path $filePath -PathType Leaf) {
            try {
                # Get file extension for MIME type
                $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = $mimeTypes[$extension]
                if (-not $contentType) {
                    $contentType = 'application/octet-stream'
                }
                
                # Read file content
                $content = [System.IO.File]::ReadAllBytes($filePath)
                
                # Set response headers
                $response.ContentType = $contentType
                $response.ContentLength64 = $content.Length
                $response.StatusCode = 200
                
                # Add CORS headers for API requests
                $response.Headers.Add("Access-Control-Allow-Origin", "*")
                $response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
                $response.Headers.Add("Access-Control-Allow-Headers", "Content-Type, Authorization")
                
                # Send response
                $response.OutputStream.Write($content, 0, $content.Length)
                $response.OutputStream.Close()
                
                Write-Host "         → 200 OK ($($content.Length) bytes)" -ForegroundColor Green
            }
            catch {
                Write-Host "         → Error serving file: $($_.Exception.Message)" -ForegroundColor Red
                $response.StatusCode = 500
                $response.Close()
            }
        }
        else {
            # File not found
            Write-Host "         → 404 Not Found" -ForegroundColor Red
            
            $response.StatusCode = 404
            $response.ContentType = 'text/html'
            
            $errorPage = @"
<!DOCTYPE html>
<html>
<head>
    <title>404 - Not Found</title>
    <style>
        body { font-family: Arial; text-align: center; padding: 50px; background: #0a0a0a; color: #fff; }
        h1 { color: #ff0055; }
        a { color: #00ffff; text-decoration: none; }
    </style>
</head>
<body>
    <h1>404 - File Not Found</h1>
    <p>The requested file <code>$requestedPath</code> was not found.</p>
    <p><a href="/">← Return to Home</a></p>
</body>
</html>
"@
            
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($errorPage)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.OutputStream.Close()
        }
    }
}
catch {
    Write-Host "`n❌ Server error: $($_.Exception.Message)" -ForegroundColor Red
}
finally {
    if ($http.IsListening) {
        $http.Stop()
        Write-Host "`n🛑 Server stopped." -ForegroundColor Yellow
    }
    $http.Close()
}
