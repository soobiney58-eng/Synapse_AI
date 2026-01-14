import http.server
import socketserver
import os
import sys

# 프로젝트 디렉토리 찾기
def find_project_dir():
    user_profile = os.environ.get('USERPROFILE', '')
    onedrive_path = os.path.join(user_profile, 'OneDrive', '바탕 화면', 'Synapse_landingpage')
    
    if os.path.exists(onedrive_path) and os.path.exists(os.path.join(onedrive_path, 'preview.html')):
        return onedrive_path
    
    # 대체 방법: 현재 스크립트 위치에서 찾기
    script_dir = os.path.dirname(os.path.abspath(__file__))
    if os.path.exists(os.path.join(script_dir, 'preview.html')):
        return script_dir
    
    return None

# 프로젝트 디렉토리로 이동
project_dir = find_project_dir()
if project_dir:
    os.chdir(project_dir)
    print(f"서버 시작: {project_dir}")
    print(f"파일 확인: preview.html 존재 = {os.path.exists('preview.html')}")
else:
    print("프로젝트 디렉토리를 찾을 수 없습니다.")
    sys.exit(1)

PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # /try 경로를 try.html로 매핑
        if self.path == '/try' or self.path == '/try/':
            self.path = '/try.html'
        # / 경로를 preview.html로 매핑
        elif self.path == '/':
            self.path = '/preview.html'
        return super().do_GET()

Handler = CustomHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"서버가 http://localhost:{PORT} 에서 실행 중입니다.")
    print(f"브라우저에서 http://localhost:{PORT}/ 또는 http://localhost:{PORT}/try 를 열어보세요.")
    httpd.serve_forever()

