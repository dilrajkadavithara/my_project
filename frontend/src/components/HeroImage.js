// frontend/src/components/HeroImage.js
import React from 'react';

// Accept imageUrl, altText, and children props
function HeroImage({ imageUrl, altText, children }) { // <--- ADDED children prop
  if (!imageUrl || imageUrl === 'https://via.placeholder.com/800x600?text=Hero+Mobile+Placeholder') {
    return (
      <div className="hero-image-fallback" style={{ backgroundImage: `url('https://via.placeholder.com/800x600?text=No+Mobile+Image')` }}>
        <div className="hero-slide-content-overlay"> {/* New div to hold content */}
          {/* Default mobile text if no slides (or first slide) */}
          <div className="hero-slide-content">
             <h1>No Mobile Hero</h1>
             <p>Please upload a mobile hero image in admin.</p>
          </div>
          {children} {/* Render passed children (LeadCaptureForm) */}
        </div>
      </div>
    );
  }
  return (
    <div className="hero-image-container"> {/* Wrap image and content for positioning */}
      <img src={imageUrl} alt={altText || "Hero Background Image"} className="hero-background-image" />
      <div className="hero-slide-content-overlay"> {/* New div to hold content */}
        {/* Placeholder for mobile-specific text if needed, or simply render children */}
        {children} {/* Render passed children (LeadCaptureForm) */}
      </div>
    </div>
  );
}

export default HeroImage;