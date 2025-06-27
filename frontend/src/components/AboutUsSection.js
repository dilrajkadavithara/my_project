// frontend/src/components/AboutUsSection.js
import React from 'react';

// Accept props from App.js
function AboutUsSection({ heading, paragraph1, paragraph2 }) {
  // Potential image will be handled here if passed as a prop
  return (
    // Added id="about-us-section" to the main section tag
    <section className="about-us-section" id="about-us-section">
      <h2>{heading}</h2> {/* Use dynamic content */}
      <p>{paragraph1}</p> {/* Use dynamic content */}
      {paragraph2 && <p>{paragraph2}</p>} {/* Use dynamic content, render only if paragraph2 exists */}
    </section>
  );
}

export default AboutUsSection;