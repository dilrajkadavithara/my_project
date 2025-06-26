// frontend/src/components/ServiceCard.js
import React from 'react';

function ServiceCard({ service }) {
  // 'service' prop will have properties like:
  // service.title, service.short_description, service.images (array of image objects)

  const imageUrl = service.images && service.images.length > 0
                   ? service.images.find(img => img.is_thumbnail)?.image // Find thumbnail image
                   : 'placeholder_image_url.jpg'; // Fallback placeholder

  return (
    <div className="service-card">
      <img src={imageUrl} alt={service.alt_text || service.title} className="service-card-image" />
      <h3>{service.title || "Service Title (Dynamic)"}</h3>
      <p>{service.short_description || "Short description of the service, customizable from the backend."}</p>
      {/* Add more details or a "Learn More" link here if needed */}
    </div>
  );
}

export default ServiceCard;