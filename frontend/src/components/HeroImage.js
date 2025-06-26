// frontend/src/components/HeroImage.js
import React from 'react';

function HeroImage({ imageUrl, altText }) {
  if (!imageUrl || imageUrl === 'placeholder_mobile.jpg') {
    return <div className="hero-image-fallback" style={{ backgroundImage: `url('https://via.placeholder.com/800x600?text=Hero+Mobile+Image')` }}></div>;
  }
  return (
    <img src={imageUrl} alt={altText || "Hero Background Image"} className="hero-background-image" />
  );
}

export default HeroImage;