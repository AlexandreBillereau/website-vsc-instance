import React from 'react'
import { Link } from '@inertiajs/react'
import Logo from '../../assets/svg/logo'
import './header.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-left">
          
          
          <div className="nav-links">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/features" className="nav-link">
              Features
            </Link>
            <Link href="/docs" className="nav-link">
              Documentation
            </Link>
          </div>
        </div>
        <Link href="/" className="nav-logo">
            <Logo />
          </Link>
        <div className="nav-right">
          <a 
            href="https://github.com/yourusername/vscode-instance-manager" 
            className="nav-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link href="/download" className="nav-button primary">
            Download
          </Link>
        </div>
      </nav>
    </header>
  )
}
