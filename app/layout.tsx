import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import SmoothScroll from '@/components/SmoothScroll'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'

export const metadata: Metadata = {
  title: 'adze&axis - Architecture & Design',
  description: 'Award-winning architecture and design studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-dark-bg text-dark-text">
        <SmoothScroll>
          <Preloader />
          <Navigation />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}