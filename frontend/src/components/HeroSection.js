// frontend/src/components/HeroSection.js
import React, { useState, useEffect } from 'react'; // <--- Import useState, useEffect
import LeadCaptureForm from './LeadCaptureForm';
import HeroSlider from './HeroSlider';     // <--- Import HeroSlider
import HeroImage from './HeroImage';       // <--- Import HeroImage

// Accept props from App.js, including new image-related props
function HeroSection({ mainHeading, subHeading, tagline, sliderImages, mobileImage }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assuming 768px as mobile breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Run once on mount to set up listener

  return (
    <section className="hero-section">
      {isMobile ? (
        <HeroImage imageUrl={mobileImage} altText={mainHeading} />
      ) : (
        <HeroSlider images={sliderImages} />
      )}
      <div className="hero-content-overlay"> {/* New div to layer content on top of background */}
          <div className="hero-content">
            <h1>{mainHeading}</h1>
            <h2>{subHeading}</h2>
            <p>{tagline}</p>
          </div>
          <div className="hero-form-container">
            <LeadCaptureForm />
          </div>
      </div>
    </section>
  );
}

export default HeroSection;