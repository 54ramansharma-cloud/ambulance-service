param(
    [int]$Port = 8080,
    [string]$Directory = $PSScriptRoot
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://127.0.0.1:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "Emergency Ambulance Service Web Server running at $prefix" -ForegroundColor Green
    Write-Host "Serving files from: $Directory" -ForegroundColor Cyan
    Write-Host "Press Ctrl+C to stop."
}
catch {
    Write-Error "Failed to start HttpListener: $_"
    exit 1
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".mp3"  = "audio/mpeg"
    ".wav"  = "audio/wav"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.Url.LocalPath
        if ($rawUrl -eq "/" -or $rawUrl -eq "") {
            $rawUrl = "/index.html"
        }

        # Clean path to prevent path traversal
        $sanitizedPath = $rawUrl.TrimStart("/").Replace("/", "\")
        $localFilePath = Join-Path -Path $Directory -ChildPath $sanitizedPath

        if (Test-Path -Path $localFilePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($localFilePath).ToLower()
            $contentType = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) {
                $contentType = $mimeTypes[$ext]
            }

            try {
                $bytes = [System.IO.File]::ReadAllBytes($localFilePath)
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                $response.Headers.Add("Access-Control-Allow-Origin", "*")
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            catch {
                $response.StatusCode = 500
            }
        }
        else {
            $response.StatusCode = 404
            $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentType = "text/plain"
            $response.ContentLength64 = $notFoundBytes.Length
            $response.OutputStream.Write($notFoundBytes, 0, $notFoundBytes.Length)
        }

        $response.Close()
    }
}
finally {
    $listener.Stop()
    $listener.Close()
    Write-Host "Server stopped." -ForegroundColor Yellow
}
