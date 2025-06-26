// frontend/src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';

function HeroSlider({ images }) {
  // images prop will be an array of image URLs
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images && images.length > 1) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }
  }, [images]); // Re-run effect if images prop changes

  if (!images || images.length === 0) {
    return <div className="hero-slider-fallback" style={{ backgroundImage: `url('https://via.placeholder.com/1500x800?text=Hero+Slider+Placeholder')` }}></div>;
  }

  return (
    <div className="hero-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
      {/* Add navigation dots/arrows here later if needed */}
    </div>
  );
}

export default HeroSlider;