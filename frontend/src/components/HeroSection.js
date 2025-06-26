// frontend/src/components/HeroSection.js
import React from 'react';
import LeadCaptureForm from './LeadCaptureForm';

// Accept props from App.js
function HeroSection({ mainHeading, subHeading, tagline }) {
  // We will handle dynamic background images/slider here in a later step,
  // potentially based on additional props for image URLs

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{mainHeading}</h1> {/* Use dynamic content */}
        <h2>{subHeading}</h2> {/* Use dynamic content */}
        <p>{tagline}</p>      {/* Use dynamic content */}
      </div>
      <div className="hero-form-container">
        <LeadCaptureForm />
      </div>
    </section>
  );
}

export default HeroSection;