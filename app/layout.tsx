import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Synapse AI - 아이디어를 연결하고, 현실로 만듭니다',
  description: 'AI 특화 풀스택 팀이 아이디어를 스펙·견적·제안서로 구체화합니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Force light mode - remove any dark class
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

