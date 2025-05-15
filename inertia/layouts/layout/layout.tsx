import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.css'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </div>
  )
}
