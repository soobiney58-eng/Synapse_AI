import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '시냅스 체험하기 - Synapse AI',
  description: 'Synapse AI를 체험해보세요.',
}

export default function TryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}




























