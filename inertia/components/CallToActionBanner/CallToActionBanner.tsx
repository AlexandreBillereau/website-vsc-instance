import React from 'react';
import './CallToActionBanner.css';

interface CallToActionBannerProps {
  // You can add props for URL, or if the button should do something specific via onClick
  downloadUrl?: string; 
  buttonText?: string;
  subText?: string;
}

const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  downloadUrl = '#', // Replace with actual download link or GitHub releases page
  buttonText = 'Download',
  subText = 'Get VSCode Instance Manager and supercharge your workflow!'
}) => {
  return (
    <section className="cta-banner-wrapper">
      <div className="cta-banner-container">
        {subText && <p className="cta-banner-subtext">{subText}</p>}
        <a href={downloadUrl} className="cta-banner-button" target="_blank" rel="noopener noreferrer">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CallToActionBanner; 