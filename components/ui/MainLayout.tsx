import React from 'react'
import Header from './Header'
import Footer from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export default function MainLayout({ children, className = "" }: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-[#ffffff] ${className}`}>
      <Header />
      
      <div className="bg-[#f9f9f9]">
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}
