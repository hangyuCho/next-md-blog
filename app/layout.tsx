import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'h9 blog',
  description: 'for memo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`justify-center flex overflow-auto bg-indigo-100`}>{children}</body>
    </html>
  )
}
