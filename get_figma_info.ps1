$envToken = $env:FIGMA_TOKEN
$fileKey = '6IsCxTR3EQMiYCU411xVAO'
$token = if ($envToken) { $envToken } else { '' }
$headers = @{
    'X-Figma-Token' = $token
}

try {
    $response = Invoke-RestMethod -Uri "https://api.figma.com/v1/files/$fileKey" -Headers $headers -Method Get
    Write-Host "파일 이름: $($response.name)"
    Write-Host "마지막 수정: $($response.lastModified)"
    Write-Host "버전: $($response.version)"
    
    $response | ConvertTo-Json -Depth 3 | Out-File -FilePath 'figma_file_info.json' -Encoding UTF8
    Write-Host "`n상세 정보가 figma_file_info.json에 저장되었습니다."
} catch {
    Write-Host "오류 발생: $($_.Exception.Message)"
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "응답 내용: $responseBody"
    }
}










