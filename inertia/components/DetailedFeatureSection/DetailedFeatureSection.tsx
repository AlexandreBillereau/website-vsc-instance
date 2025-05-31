import React from 'react';
import './DetailedFeatureSection.css';

export interface FeatureDetail {
  id: string;
  icon?: string | React.ReactNode; // Emoji, character, or SVG component
  title: string;
  description: string | React.ReactNode; // Can be a string or more complex JSX for formatting
}

interface DetailedFeatureSectionProps {
  features: FeatureDetail[];
}

const DetailedFeatureSection: React.FC<DetailedFeatureSectionProps> = ({ features }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="detailed-feature-section-wrapper">
      <div className="detailed-feature-section-container">
        <h2 className="detailed-feature-section-main-title">Discover the Power of VSCode Instance Manager</h2>
        {features.map((feature) => (
          <div key={feature.id} className="feature-detail-item">
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
        ))}
      </div>
    </section>
  );
};

export default DetailedFeatureSection; 