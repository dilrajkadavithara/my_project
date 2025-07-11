// frontend/src/components/AboutUsSection.js
import React from 'react';

// Accept all new props from App.js for features, badges, and CTA
function AboutUsSection({ 
  heading, 
  paragraph1, 
  paragraph2, // Will be empty/null now
  aboutUsImage, 
  features, // New: array of feature strings
  badgeYearsText, // New: text for years badge
  badgeCustomersText, // New: text for customers badge
  ctaText, // New: text for CTA button
  ctaLink // New: link for CTA button
}) { 
  return (
    <section className="about-us-section" id="about-us-section">
      {/* Moved heading outside grid for full width, consistent with inspiration image */}
      <h2>{heading}</h2> 
      
      <div className="about-us-grid-container">
        <div className="about-us-content">
          {/* Render paragraph1 using dangerouslySetInnerHTML */}
          {paragraph1 && <p dangerouslySetInnerHTML={{ __html: paragraph1 }}></p>}
          {/* We already removed paragraph2 from Django, so this will no longer render */}
          {/* {paragraph2 && <p dangerouslySetInnerHTML={{ __html: paragraph2 }}></p>} */} 

          {features && features.length > 0 && ( // Render features list if available
            <ul className="about-us-features">
              {features.map((feature, index) => (
                // Render each feature using dangerouslySetInnerHTML
                <li key={index} dangerouslySetInnerHTML={{ __html: feature }}></li>
              ))}
            </ul>
          )}

          {ctaText && ctaLink && ( // Render CTA button if text and link are available
            <a href={ctaLink} className="cta-button">{ctaText}</a>
          )}
        </div>

        {aboutUsImage && (
          <div className="about-us-image-container">
            <img 
              src={aboutUsImage} 
              alt="About Us" 
              className="about-us-image" 
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=About+Us+Image'; }}
            />
            {/* Badges positioned absolutely over the image in CSS */}
            {badgeYearsText && (
              <div className="about-us-badge years-badge">{badgeYearsText}</div>
            )}
            {badgeCustomersText && (
              <div className="about-us-badge customers-badge">{badgeCustomersText}</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default AboutUsSection;