// frontend/src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';

// Accept 'slides' and 'children' props
function HeroSlider({ slides, children }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) {
      setCurrentSlideIndex(0);
      return;
    }

    const slideInterval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return (
      <div className="hero-slider-fallback" style={{ backgroundImage: `url('https://via.placeholder.com/1500x800?text=No+Hero+Slides')` }}>
        <div className="hero-slide-content-overlay">
          <div className="hero-slide-content">
            <h1>No Slides Available</h1>
            <p>Please add content to Hero Slides in the admin.</p>
          </div>
          {children}
        </div>
      </div>
    );
  }

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`hero-slide ${index === currentSlideIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Hidden image for SEO */}
          <img
            src={slide.image}
            alt={slide.heading || "Hero Slide Image"}
            style={{ display: 'none' }}
            loading="lazy"
          />
        </div>
      ))}

      <div className="hero-slide-content-overlay">
        <div className="hero-slide-content">
          <h1>{currentSlide.heading}</h1>
          <h2>{currentSlide.sub_heading}</h2>
          <p>{currentSlide.tagline}</p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default HeroSlider;
