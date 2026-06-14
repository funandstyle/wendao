import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Robot Dog - 智能四足陪伴机器人',
  description: '搭载世界模型 AI 的四足机器狗，为家庭提供安全、智能的陪伴体验',
  keywords: 'AI机器狗, 四足机器人, 智能陪伴, 家庭机器人, 世界模型',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
