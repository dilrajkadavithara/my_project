// frontend/src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import HeroSlider from './HeroSlider';
import HeroImage from './HeroImage';

// Accept heroSlides and mobileImage props from App.js
function HeroSection({ heroSlides, mobileImage }) { // <--- MODIFIED PROPS
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assuming 768px as mobile breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use the first slide's image for mobile if no specific mobileImage is provided
  const actualMobileImage = mobileImage || (heroSlides[0] && heroSlides[0].image);
  const mobileAltText = heroSlides[0]?.heading || "Hero Background Image";


  return (
    <section className="hero-section">
      {isMobile ? (
        <HeroImage imageUrl={actualMobileImage} altText={mobileAltText}>
          {/* Pass LeadCaptureForm as a child to HeroImage for overlay */}
          <div className="hero-form-container">
            <LeadCaptureForm />
          </div>
        </HeroImage>
      ) : (
        <HeroSlider slides={heroSlides}>
          {/* Pass LeadCaptureForm as a child to HeroSlider for overlay */}
          <div className="hero-form-container">
            <LeadCaptureForm />
          </div>
        </HeroSlider>
      )}
    </section>
  );
}

export default HeroSection;