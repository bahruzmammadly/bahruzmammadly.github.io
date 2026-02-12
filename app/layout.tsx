import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Bahruz Mammadly - Front End & Mobile Developer',
  description:
    'Bahruz Mammadly - Front End & Mobile Developer crafting modern digital experiences. View portfolio and connect on LinkedIn and GitHub.',
}

export const viewport: Viewport = {
  themeColor: '#1a1e2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${_inter.variable} ${_jetbrainsMono.variable} font-mono antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
