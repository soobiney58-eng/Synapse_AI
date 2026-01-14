$envToken = $env:FIGMA_TOKEN
$fileKey = '6IsCxTR3EQMiYCU411xVAO'
$token = if ($envToken) { $envToken } else { '' }
$nodeId = '466-1261'
$headers = @{
    'X-Figma-Token' = $token
}

try {
    $response = Invoke-RestMethod -Uri "https://api.figma.com/v1/files/$fileKey/nodes?ids=$nodeId" -Headers $headers -Method Get
    $response | ConvertTo-Json -Depth 10 | Out-File -FilePath 'figma_section4_node.json' -Encoding UTF8
    Write-Host "Figma 노드 정보 저장 완료"
    
    # 간단한 정보 출력
    if ($response.nodes.$nodeId) {
        $node = $response.nodes.$nodeId
        Write-Host "노드 이름: $($node.document.name)"
        Write-Host "노드 타입: $($node.document.type)"
    }
} catch {
    Write-Host "오류 발생: $($_.Exception.Message)"
    if ($_.Exception.Response) {
        $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
        $responseBody = $reader.ReadToEnd()
        Write-Host "응답 내용: $responseBody"
    }
}










