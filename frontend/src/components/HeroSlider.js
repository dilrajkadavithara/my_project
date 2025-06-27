// frontend/src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';

// Accept 'slides' and 'children' props
function HeroSlider({ slides, children }) { // <--- ADDED children prop
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) {
      // If only one slide, ensure it's displayed, no interval needed
      setCurrentSlideIndex(0); // Ensure first slide is active if only one
      return; // Do nothing more if 0 or 1 slide
    }

    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [slides]); // Re-run effect if slides prop changes

  if (!slides || slides.length === 0) {
    // Fallback if no slides are provided
    return (
      <div className="hero-slider-fallback" style={{ backgroundImage: `url('https://via.placeholder.com/1500x800?text=No+Hero+Slides')` }}>
        <div className="hero-slide-content-overlay">
          <div className="hero-slide-content">
            <h1>No Slides Available</h1>
            <p>Please add content to Hero Slides in the admin.</p>
          </div>
          {children} {/* Render children (LeadCaptureForm) here for fallback */}
        </div>
      </div>
    );
  }

  const currentSlide = slides[currentSlideIndex]; // Get the active slide object

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`hero-slide ${index === currentSlideIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        ></div>
      ))}

      {/* This is the content overlay that moves with the slider */}
      <div className="hero-slide-content-overlay">
        <div className="hero-slide-content">
          <h1>{currentSlide.heading}</h1> {/* <--- RENDER DYNAMIC TEXT */}
          <h2>{currentSlide.sub_heading}</h2> {/* <--- RENDER DYNAMIC TEXT */}
          <p>{currentSlide.tagline}</p>      {/* <--- RENDER DYNAMIC TEXT */}
        </div>
        {children} {/* <--- RENDER CHILDREN (LeadCaptureForm) */}
      </div>
    </div>
  );
}

export default HeroSlider;