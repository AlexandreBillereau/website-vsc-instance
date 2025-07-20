import React from 'react';
import './DetailedFeatureSection.css';

export interface FeatureDetail {
  id: string;
  icon?: string | React.ReactNode; // Emoji, character, or SVG component
  title: string;
  description: string | React.ReactNode; // Can be a string or more complex JSX for formatting
  illustration?: React.ReactNode; // Nouvelle propriété pour l'illustration
}

interface DetailedFeatureSectionProps {
  features: FeatureDetail[];
}

const DetailedFeatureSection: React.FC<DetailedFeatureSectionProps> = ({ features }) => {
  if (!features || features.length === 0) {
    return null;
  }

  // Mapping des images par ID - vous pouvez remplacer par vos propres images
  const imageMap = {
    'multiple-instances': '/inertia/assets/images/feature-multiple-instances.png',
    'smart-sync': '/inertia/assets/images/feature-smart-sync.png',
    'theme-customization': '/inertia/assets/images/feature-theme-customization.png',
    'import-export': '/inertia/assets/images/feature-import-export.png',
    'instance-settings': '/inertia/assets/images/feature-instance-settings.png',
  };

  return (
    <section className="detailed-feature-section-wrapper">
      <div className="detailed-feature-section-container">
        <h2 className="detailed-feature-section-main-title">Discover the Power of VSCode Instance Manager</h2>
        {features.map((feature, index) => (
          <div key={feature.id} className={`feature-detail-item ${index % 2 === 1 ? 'feature-detail-item-reverse' : ''}`}>
            <div className="feature-detail-content">
              <div className="feature-detail-header">
                {typeof feature.icon === 'string' ? (
                  <span className="feature-detail-icon-emoji">{feature.icon}</span>
                ) : feature.icon ? (
                  <div className="feature-detail-icon-svg">{feature.icon}</div>
                ) : null}
                <h3 className="feature-detail-title">{feature.title}</h3>
              </div>
              <div className="feature-detail-description">
                {typeof feature.description === 'string' ? (
                  <p>{feature.description}</p>
                ) : (
                  feature.description
                )}
              </div>
            </div>
            <div className="feature-detail-illustration">
              {imageMap[feature.id as keyof typeof imageMap] ? (
                <img 
                  src={imageMap[feature.id as keyof typeof imageMap]} 
                  alt={feature.title}
                  className="feature-illustration"
                  onError={(e) => {
                    // Fallback si l'image n'existe pas encore
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              ) : feature.illustration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedFeatureSection; 