import React from 'react';
import './LicenseSection.css';

const LicenseSection: React.FC = () => {
  return (
    <section className="license-section-wrapper">
      <div className="license-section-container">
        <h2 className="license-section-title">License & Contributions</h2>
        <div className="license-content">
          <p>
            VSCode Instance Manager is released under the&nbsp;
            <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" className="license-link">
              MIT License
            </a>.
          </p>
          <p>
            We warmly welcome contributions from the community! If you'd like to help improve the application or add new features, 
            please feel free to fork the project on&nbsp;
            <a href="#" /* Replace # with your actual GitHub repository URL */ 
               target="_blank" 
               rel="noopener noreferrer" 
               className="license-link">
              GitHub
            </a> 
            &nbsp;and submit your pull requests. Your input is valuable tous.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LicenseSection; 