import React from 'react';

// Illustration pour Multiple Instances
export const MultipleInstancesIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="windowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(87, 157, 255, 0.1)" />
        <stop offset="100%" stopColor="rgba(12, 102, 228, 0.2)" />
      </linearGradient>
      <linearGradient id="windowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255, 255, 255, 0.05)" />
        <stop offset="100%" stopColor="rgba(87, 157, 255, 0.1)" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Fenêtres VSCode multiples */}
    <rect x="50" y="80" width="120" height="80" rx="8" fill="url(#windowGradient1)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" filter="url(#glow)"/>
    <rect x="60" y="90" width="100" height="8" rx="4" fill="rgba(87, 157, 255, 0.4)"/>
    <rect x="60" y="110" width="60" height="4" rx="2" fill="rgba(255, 255, 255, 0.6)"/>
    <rect x="60" y="120" width="40" height="4" rx="2" fill="rgba(255, 255, 255, 0.4)"/>
    <rect x="60" y="130" width="80" height="4" rx="2" fill="rgba(255, 255, 255, 0.3)"/>
    
    <rect x="180" y="60" width="120" height="80" rx="8" fill="url(#windowGradient2)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" filter="url(#glow)"/>
    <rect x="190" y="70" width="100" height="8" rx="4" fill="rgba(87, 157, 255, 0.4)"/>
    <rect x="190" y="90" width="70" height="4" rx="2" fill="rgba(255, 255, 255, 0.6)"/>
    <rect x="190" y="100" width="50" height="4" rx="2" fill="rgba(255, 255, 255, 0.4)"/>
    <rect x="190" y="110" width="90" height="4" rx="2" fill="rgba(255, 255, 255, 0.3)"/>
    
    <rect x="310" y="100" width="120" height="80" rx="8" fill="url(#windowGradient1)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" filter="url(#glow)"/>
    <rect x="320" y="110" width="100" height="8" rx="4" fill="rgba(87, 157, 255, 0.4)"/>
    <rect x="320" y="130" width="80" height="4" rx="2" fill="rgba(255, 255, 255, 0.6)"/>
    <rect x="320" y="140" width="60" height="4" rx="2" fill="rgba(255, 255, 255, 0.4)"/>
    <rect x="320" y="150" width="70" height="4" rx="2" fill="rgba(255, 255, 255, 0.3)"/>
    
    {/* Lignes de connexion */}
    <path d="M170 120 L180 100" stroke="rgba(87, 157, 255, 0.4)" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M300 140 L310 120" stroke="rgba(87, 157, 255, 0.4)" strokeWidth="2" strokeDasharray="4 4"/>
    
    {/* Particules flottantes */}
    <circle cx="100" cy="200" r="2" fill="rgba(87, 157, 255, 0.6)" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="250" cy="180" r="1.5" fill="rgba(87, 157, 255, 0.5)" opacity="0.6">
      <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="220" r="2.5" fill="rgba(87, 157, 255, 0.7)" opacity="0.9">
      <animate attributeName="opacity" values="0.9;0.3;0.9" dur="3.5s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

// Illustration pour Smart Sync
export const SmartSyncIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="syncGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(87, 157, 255, 0.1)" />
        <stop offset="100%" stopColor="rgba(12, 102, 228, 0.2)" />
      </linearGradient>
      <filter id="syncGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Cercle central */}
    <circle cx="200" cy="150" r="80" fill="url(#syncGradient)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="2" filter="url(#syncGlow)"/>
    
    {/* Flèches de synchronisation */}
    <g transform="rotate(0 200 150)">
      <path d="M200 70 L200 90 M190 80 L200 70 L210 80" stroke="rgba(87, 157, 255, 0.8)" strokeWidth="3" fill="none">
        <animateTransform attributeName="transform" type="rotate" values="0 200 150;360 200 150" dur="4s" repeatCount="indefinite"/>
      </path>
    </g>
    
    <g transform="rotate(120 200 150)">
      <path d="M200 70 L200 90 M190 80 L200 70 L210 80" stroke="rgba(87, 157, 255, 0.6)" strokeWidth="3" fill="none">
        <animateTransform attributeName="transform" type="rotate" values="120 200 150;480 200 150" dur="4s" repeatCount="indefinite"/>
      </path>
    </g>
    
    <g transform="rotate(240 200 150)">
      <path d="M200 70 L200 90 M190 80 L200 70 L210 80" stroke="rgba(87, 157, 255, 0.7)" strokeWidth="3" fill="none">
        <animateTransform attributeName="transform" type="rotate" values="240 200 150;600 200 150" dur="4s" repeatCount="indefinite"/>
      </path>
    </g>
    
    {/* Points de connexion */}
    <circle cx="200" cy="70" r="4" fill="rgba(87, 157, 255, 0.8)">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="230" r="4" fill="rgba(87, 157, 255, 0.8)">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.5s"/>
    </circle>
    <circle cx="130" cy="150" r="4" fill="rgba(87, 157, 255, 0.8)">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1s"/>
    </circle>
    <circle cx="270" cy="150" r="4" fill="rgba(87, 157, 255, 0.8)">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="1.5s"/>
    </circle>
  </svg>
);

// Illustration pour Theme Customization
export const ThemeCustomizationIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="paletteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(87, 157, 255, 0.1)" />
        <stop offset="100%" stopColor="rgba(12, 102, 228, 0.2)" />
      </linearGradient>
      <filter id="paletteGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Palette de couleurs */}
    <circle cx="200" cy="150" r="60" fill="url(#paletteGradient)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="2" filter="url(#paletteGlow)"/>
    
    {/* Couleurs de la palette */}
    <circle cx="180" cy="130" r="12" fill="#0c66e4" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="220" cy="130" r="12" fill="#579dff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="0.5s"/>
    </circle>
    <circle cx="200" cy="170" r="12" fill="#85b8ff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1s"/>
    </circle>
    <circle cx="160" cy="170" r="12" fill="#cce0ff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="1.5s"/>
    </circle>
    <circle cx="240" cy="170" r="12" fill="#ffffff" opacity="0.8">
      <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" begin="2s"/>
    </circle>
    
    {/* Pinceau */}
    <g transform="translate(280, 100)">
      <rect x="0" y="0" width="4" height="40" rx="2" fill="rgba(87, 157, 255, 0.6)" transform="rotate(45 2 20)"/>
      <ellipse cx="2" cy="35" rx="8" ry="4" fill="rgba(87, 157, 255, 0.4)" transform="rotate(45 2 35)"/>
    </g>
    
    {/* Particules de couleur */}
    <circle cx="120" cy="120" r="3" fill="#0c66e4" opacity="0.6">
      <animate attributeName="cy" values="120;100;120" dur="4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="320" cy="180" r="2" fill="#579dff" opacity="0.7">
      <animate attributeName="cy" values="180;160;180" dur="3.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="100" cy="200" r="2.5" fill="#85b8ff" opacity="0.5">
      <animate attributeName="cy" values="200;180;200" dur="4.5s" repeatCount="indefinite"/>
    </circle>
  </svg>
);

// Illustration pour Import/Export
export const ImportExportIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="exportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(87, 157, 255, 0.1)" />
        <stop offset="100%" stopColor="rgba(12, 102, 228, 0.2)" />
      </linearGradient>
      <filter id="exportGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Boîte source */}
    <rect x="80" y="120" width="80" height="60" rx="8" fill="url(#exportGradient)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="2" filter="url(#exportGlow)"/>
    <rect x="90" y="130" width="60" height="8" rx="4" fill="rgba(87, 157, 255, 0.4)"/>
    <rect x="90" y="150" width="40" height="4" rx="2" fill="rgba(255, 255, 255, 0.6)"/>
    <rect x="90" y="160" width="50" height="4" rx="2" fill="rgba(255, 255, 255, 0.4)"/>
    
    {/* Boîte destination */}
    <rect x="240" y="120" width="80" height="60" rx="8" fill="url(#exportGradient)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="2" filter="url(#exportGlow)"/>
    <rect x="250" y="130" width="60" height="8" rx="4" fill="rgba(87, 157, 255, 0.4)"/>
    <rect x="250" y="150" width="40" height="4" rx="2" fill="rgba(255, 255, 255, 0.6)"/>
    <rect x="250" y="160" width="50" height="4" rx="2" fill="rgba(255, 255, 255, 0.4)"/>
    
    {/* Flèches de transfert */}
    <g>
      <path d="M160 150 L200 150 L200 140 L210 150 L200 160 L200 150" stroke="rgba(87, 157, 255, 0.8)" strokeWidth="3" fill="none">
        <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="3s" repeatCount="indefinite"/>
      </path>
      <path d="M190 150 L230 150 L230 140 L240 150 L230 160 L230 150" stroke="rgba(87, 157, 255, 0.6)" strokeWidth="3" fill="none">
        <animate attributeName="stroke-dasharray" values="0,100;100,0;0,100" dur="3s" repeatCount="indefinite" begin="1.5s"/>
      </path>
    </g>
    
    {/* Particules de données */}
    <circle cx="180" cy="150" r="2" fill="rgba(87, 157, 255, 0.8)">
      <animate attributeName="cx" values="180;220;180" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="190" cy="145" r="1.5" fill="rgba(87, 157, 255, 0.6)">
      <animate attributeName="cx" values="190;230;190" dur="2.5s" repeatCount="indefinite" begin="0.5s"/>
    </circle>
    <circle cx="185" cy="155" r="1.8" fill="rgba(87, 157, 255, 0.7)">
      <animate attributeName="cx" values="185;225;185" dur="2.2s" repeatCount="indefinite" begin="1s"/>
    </circle>
  </svg>
);

// Illustration pour Instance Settings
export const InstanceSettingsIllustration: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="settingsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(87, 157, 255, 0.1)" />
        <stop offset="100%" stopColor="rgba(12, 102, 228, 0.2)" />
      </linearGradient>
      <filter id="settingsGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Engrenage central */}
    <g transform="translate(200, 150)">
      <circle cx="0" cy="0" r="50" fill="url(#settingsGradient)" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="2" filter="url(#settingsGlow)"/>
      
      {/* Dents de l'engrenage */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
        <rect
          key={index}
          x="-3"
          y="-25"
          width="6"
          height="15"
          fill="rgba(87, 157, 255, 0.6)"
          transform={`rotate(${angle} 0 0)`}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values={`${angle} 0 0;${angle + 360} 0 0`}
            dur="8s"
            repeatCount="indefinite"
          />
        </rect>
      ))}
      
      {/* Cercle central */}
      <circle cx="0" cy="0" r="15" fill="rgba(87, 157, 255, 0.4)"/>
      <circle cx="0" cy="0" r="8" fill="rgba(255, 255, 255, 0.8)"/>
    </g>
    
    {/* Fenêtres d'instances autour */}
    <g transform="translate(100, 80)">
      <rect x="0" y="0" width="40" height="30" rx="4" fill="rgba(87, 157, 255, 0.2)" stroke="rgba(87, 157, 255, 0.4)" strokeWidth="1"/>
      <rect x="5" y="5" width="30" height="4" rx="2" fill="rgba(87, 157, 255, 0.6)"/>
      <rect x="5" y="15" width="20" height="2" rx="1" fill="rgba(255, 255, 255, 0.6)"/>
    </g>
    
    <g transform="translate(260, 80)">
      <rect x="0" y="0" width="40" height="30" rx="4" fill="rgba(87, 157, 255, 0.2)" stroke="rgba(87, 157, 255, 0.4)" strokeWidth="1"/>
      <rect x="5" y="5" width="30" height="4" rx="2" fill="rgba(87, 157, 255, 0.6)"/>
      <rect x="5" y="15" width="20" height="2" rx="1" fill="rgba(255, 255, 255, 0.6)"/>
    </g>
    
    <g transform="translate(100, 190)">
      <rect x="0" y="0" width="40" height="30" rx="4" fill="rgba(87, 157, 255, 0.2)" stroke="rgba(87, 157, 255, 0.4)" strokeWidth="1"/>
      <rect x="5" y="5" width="30" height="4" rx="2" fill="rgba(87, 157, 255, 0.6)"/>
      <rect x="5" y="15" width="20" height="2" rx="1" fill="rgba(255, 255, 255, 0.6)"/>
    </g>
    
    <g transform="translate(260, 190)">
      <rect x="0" y="0" width="40" height="30" rx="4" fill="rgba(87, 157, 255, 0.2)" stroke="rgba(87, 157, 255, 0.4)" strokeWidth="1"/>
      <rect x="5" y="5" width="30" height="4" rx="2" fill="rgba(87, 157, 255, 0.6)"/>
      <rect x="5" y="15" width="20" height="2" rx="1" fill="rgba(255, 255, 255, 0.6)"/>
    </g>
    
    {/* Lignes de connexion */}
    <path d="M140 95 L180 120" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3"/>
    <path d="M260 95 L220 120" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3"/>
    <path d="M140 205 L180 180" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3"/>
    <path d="M260 205 L220 180" stroke="rgba(87, 157, 255, 0.3)" strokeWidth="1" strokeDasharray="3 3"/>
  </svg>
); 