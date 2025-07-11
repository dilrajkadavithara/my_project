function HeroImage({ imageUrl, altText, children }) {
  if (!imageUrl || imageUrl === 'https://via.placeholder.com/800x600?text=Hero+Mobile+Placeholder') {
    return null; // Don't render anything at all
  }

  return (
    <div className="hero-image-container">
      <img src={imageUrl} alt={altText || "Hero Background Image"} className="hero-background-image" />
      <div className="hero-slide-content-overlay">
        {children}
      </div>
    </div>
  );
}
export default HeroImage;