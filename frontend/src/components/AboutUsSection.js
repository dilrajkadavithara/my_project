// frontend/src/components/AboutUsSection.js
import React from 'react';

function AboutUsSection() {
  // Placeholder for dynamic content from backend (WebsiteContent model)
  const aboutUsContent = {
    heading: "About Our Company (Dynamic)",
    paragraph1: "This is the first paragraph of your About Us section, loaded dynamically from the backend. You can customize this text easily via the Django admin panel.",
    paragraph2: "Here is the second paragraph, providing more details about your company's mission, values, or history. This also comes from the backend.",
    // You can add more paragraphs or even an image URL here from WebsiteContent
  };

  return (
    <section className="about-us-section">
      <h2>{aboutUsContent.heading}</h2>
      <p>{aboutUsContent.paragraph1}</p>
      {aboutUsContent.paragraph2 && <p>{aboutUsContent.paragraph2}</p>}
      {/* Potential placeholder for an About Us image here */}
    </section>
  );
}

export default AboutUsSection;