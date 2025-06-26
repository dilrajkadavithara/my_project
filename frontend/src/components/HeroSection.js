// frontend/src/components/HeroSection.js
import React from 'react';
import LeadCaptureForm from './LeadCaptureForm'; // Import the LeadCaptureForm component

function HeroSection() {
  // Placeholder for dynamic content from backend
  const heroContent = {
    mainHeading: "Your Main Hero Heading (Dynamic)",
    subHeading: "Your Sub Heading (Dynamic)",
    tagline: "A short, compelling tagline for your service (Dynamic)",
    // backgroundImage: "url_to_dynamic_image.jpg" // Will come from WebsiteContent
    // For slider background, we'll fetch a list of image URLs here
    // For mobile single image, we'll fetch one specific image URL here
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{heroContent.mainHeading}</h1>
        <h2>{heroContent.subHeading}</h2>
        <p>{heroContent.tagline}</p>
      </div>
      <div className="hero-form-container">
        <LeadCaptureForm /> {/* The Lead Capture Form component is now placed here */}
      </div>
    </section>
  );
}

export default HeroSection;