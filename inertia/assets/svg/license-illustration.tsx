import React from 'react';

export const LicenseIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="licenseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(87, 157, 255, 0.1)" />
        <stop offset="100%" stopColor="rgba(12, 102, 228, 0.2)" />
      </linearGradient>
      <filter id="licenseGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Document principal */}
    <rect x="120" y="80" width="160" height="140" rx="8" fill="url(#licenseGradient)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="2" filter="url(#licenseGlow)"/>
    
    {/* En-tête du document */}
    <rect x="130" y="90" width="140" height="12" rx="6" fill="rgba(87, 157, 255, 0.4)"/>
    
    {/* Lignes de texte */}
    <rect x="130" y="120" width="100" height="4" rx="2" fill="rgba(255, 255, 255, 0.7)"/>
    <rect x="130" y="130" width="80" height="4" rx="2" fill="rgba(255, 255, 255, 0.5)"/>
    <rect x="130" y="140" width="120" height="4" rx="2" fill="rgba(255, 255, 255, 0.6)"/>
    <rect x="130" y="150" width="90" height="4" rx="2" fill="rgba(255, 255, 255, 0.4)"/>
    <rect x="130" y="160" width="110" height="4" rx="2" fill="rgba(255, 255, 255, 0.5)"/>
    <rect x="130" y="170" width="70" height="4" rx="2" fill="rgba(255, 255, 255, 0.6)"/>
    <rect x="130" y="180" width="95" height="4" rx="2" fill="rgba(255, 255, 255, 0.4)"/>
    <rect x="130" y="190" width="85" height="4" rx="2" fill="rgba(255, 255, 255, 0.5)"/>
    
    {/* Icône MIT License */}
    <g transform="translate(200, 150)">
      <circle cx="0" cy="0" r="25" fill="rgba(87, 157, 255, 0.2)" stroke="rgba(87, 157, 255, 0.4)" strokeWidth="1"/>
      <text x="0" y="5" textAnchor="middle" fill="rgba(87, 157, 255, 0.8)" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold">MIT</text>
    </g>
    
    {/* Icônes de contribution */}
    <g transform="translate(80, 120)">
      <circle cx="0" cy="0" r="15" fill="rgba(87, 157, 255, 0.1)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1"/>
      <path d="M-8 -8 L8 8 M-8 8 L8 -8" stroke="rgba(87, 157, 255, 0.6)" strokeWidth="2" fill="none"/>
    </g>
    
    <g transform="translate(320, 120)">
      <circle cx="0" cy="0" r="15" fill="rgba(87, 157, 255, 0.1)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1"/>
      <path d="M-6 -6 L6 6 M-6 6 L6 -6" stroke="rgba(87, 157, 255, 0.6)" strokeWidth="2" fill="none"/>
    </g>
    
    {/* Lignes de connexion */}
    <path d="M95 120 L120 150" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3"/>
    <path d="M305 120 L280 150" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3"/>
    
    {/* Particules flottantes */}
    <circle cx="100" cy="200" r="2" fill="rgba(87, 157, 255, 0.6)" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="300" cy="200" r="1.5" fill="rgba(87, 157, 255, 0.5)" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="220" r="2.5" fill="rgba(87, 157, 255, 0.7)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    
    {/* Étoiles de contribution */}
    <g transform="translate(150, 250)">
      <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="rgba(87, 157, 255, 0.6)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
      </path>
    </g>
    
    <g transform="translate(250, 250)">
      <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="rgba(87, 157, 255, 0.5)">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
      </path>
    </g>
  </svg>
); 