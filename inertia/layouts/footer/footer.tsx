import React from 'react'
import { Link } from '@inertiajs/react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>VSC Instance</h3>
            <p className="footer-description">
              A powerful and intuitive manager for VSCode and Cursor editor instances
            </p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <Link href="/features" className="footer-link">Features</Link>
            <Link href="/download" className="footer-link">Download</Link>
            <Link href="/docs" className="footer-link">Documentation</Link>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <a href="https://github.com/yourusername/vscode-instance-manager" 
               className="footer-link" 
               target="_blank" 
               rel="noopener noreferrer">
              GitHub
            </a>
            <Link href="/docs/getting-started" className="footer-link">
              Getting Started
            </Link>
            <Link href="/docs/guides" className="footer-link">
              Guides
            </Link>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <a href="https://github.com/yourusername/vscode-instance-manager/issues" 
               className="footer-link"
               target="_blank" 
               rel="noopener noreferrer">
              Report an Issue
            </a>
            <Link href="/contact" className="footer-link">Contact</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} VSC Instance. All rights reserved.
          </p>
          <div className="footer-meta-links">
            <Link href="/privacy" className="footer-meta-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-meta-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
