// frontend/src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';
import HeroSlider from './HeroSlider';
import HeroImage from './HeroImage';


// Accept heroSlides and mobileImage props from App.js
function HeroSection({ heroSlides, mobileImage }) {
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
    // Added id="hero-section" to the main section tag
    <section className="hero-section" id="hero-section">
      {isMobile ? (
        <> {/* Use a React Fragment to return multiple elements */}
          <HeroImage imageUrl={actualMobileImage} altText={mobileAltText}>
            {/* The content overlay for mobile text */}
            <div className="hero-slide-content-overlay">
              <div className="hero-slide-content">
                {/* We can decide if we want text here or purely in App.js */}
                {heroSlides[0] && (
                  <>
                    <h1>{heroSlides[0].heading}</h1>
                    <h2>{heroSlides[0].sub_heading}</h2>
                    <p>{heroSlides[0].tagline}</p>
                  </>
                )}
              </div>
            </div>
          </HeroImage>
          {/* Mobile-specific form container - NOW OUTSIDE HeroImage */}
          <div className="hero-form-mobile-container">
            <LeadCaptureForm />
          </div>
        </>
      ) : (
        <HeroSlider slides={heroSlides}>
          {/* Desktop-specific form container - STILL INSIDE HeroSlider */}
          <div className="hero-form-desktop-container">
            <LeadCaptureForm />
          </div>
        </HeroSlider>
      )}
    </section>
  );
}

export default HeroSection;