param(
  [int]$Port = 8766,
  [string]$Root = $PSScriptRoot
)

$ErrorActionPreference = "Stop"
$resolvedRoot = [System.IO.Path]::GetFullPath($Root)
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $Port)
$listener.Start()

$addresses = Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object { $_.IPAddress -notlike "127.*" -and $_.PrefixOrigin -ne "WellKnown" } |
  Select-Object -ExpandProperty IPAddress

Write-Host "Serving $resolvedRoot"
foreach ($address in $addresses) {
  Write-Host "Open http://$address`:$Port/ on a phone connected to the same Wi-Fi."
}

$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "text/javascript; charset=utf-8"
  ".json" = "application/json; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"
  ".svg"  = "image/svg+xml"
}

function Send-Response {
  param(
    [System.Net.Sockets.NetworkStream]$Stream,
    [int]$Status,
    [string]$StatusText,
    [byte[]]$Body,
    [string]$ContentType = "text/plain; charset=utf-8"
  )

  $header = "HTTP/1.1 $Status $StatusText`r`nContent-Type: $ContentType`r`nContent-Length: $($Body.Length)`r`nConnection: close`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
  $Stream.Write($headerBytes, 0, $headerBytes.Length)
  if ($Body.Length -gt 0) {
    $Stream.Write($Body, 0, $Body.Length)
  }
}

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()
    if ([string]::IsNullOrWhiteSpace($requestLine)) {
      continue
    }

    while (($line = $reader.ReadLine()) -ne $null -and $line.Length -gt 0) {}

    $parts = $requestLine.Split(" ")
    if ($parts.Length -lt 2 -or $parts[0] -ne "GET") {
      Send-Response $stream 405 "Method Not Allowed" ([System.Text.Encoding]::UTF8.GetBytes("Method Not Allowed"))
      continue
    }

    $path = [System.Uri]::UnescapeDataString($parts[1].Split("?")[0])
    if ($path -eq "/") {
      $path = "/index.html"
    }

    $candidate = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($resolvedRoot, $path.TrimStart("/")))
    if (-not $candidate.StartsWith($resolvedRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
      Send-Response $stream 403 "Forbidden" ([System.Text.Encoding]::UTF8.GetBytes("Forbidden"))
      continue
    }

    if (-not [System.IO.File]::Exists($candidate)) {
      Send-Response $stream 404 "Not Found" ([System.Text.Encoding]::UTF8.GetBytes("Not Found"))
      continue
    }

    $bytes = [System.IO.File]::ReadAllBytes($candidate)
    $extension = [System.IO.Path]::GetExtension($candidate).ToLowerInvariant()
    $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
    Send-Response $stream 200 "OK" $bytes $contentType
  }
  catch {
    try {
      Send-Response $stream 500 "Internal Server Error" ([System.Text.Encoding]::UTF8.GetBytes("Internal Server Error"))
    }
    catch {}
  }
  finally {
    $client.Close()
  }
}
