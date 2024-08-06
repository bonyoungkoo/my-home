import type { Metadata, Viewport } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/theme-provider'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  applicationName: '마이홈',
  title: {
    default: '마이홈',
    template: '마이홈',
  },
  description: '마이홈',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '마이홈',
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: '마이홈',
    title: {
      default: '마이홈',
      template: '마이홈',
    },
    description: '마이홈',
  },
  twitter: {
    card: 'summary',
    title: {
      default: '마이홈',
      template: '마이홈',
    },
    description: '마이홈',
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
