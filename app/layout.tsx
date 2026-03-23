import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Jay Shrivastava - Architecture & Design',
  description: 'Award-winning architecture and design studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-bg text-dark-text">
        <SmoothScroll>
          <Navigation />
          <CustomCursor />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}