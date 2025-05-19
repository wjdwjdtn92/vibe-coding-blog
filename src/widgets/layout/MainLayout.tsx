import React from 'react'
import { Header } from '@/widgets/header/Header'
import { Footer } from '@/widgets/footer/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}
