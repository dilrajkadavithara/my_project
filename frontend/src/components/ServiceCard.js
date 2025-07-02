import React from 'react';

function ServiceCard({ service }) {
  const imageUrl =
    service.images && service.images.length > 0
      ? service.images.find(img => img.is_thumbnail)?.image
      : 'placeholder_image_url.jpg';

  return (
    <article className="service-card">
      <img
        src={imageUrl}
        alt={service.alt_text || service.title}
        className="service-card-image"
        loading="lazy"
      />
      <h3>{service.title || "Service Title (Dynamic)"}</h3>
      <p>{service.short_description || "Short description of the service."}</p>
    </article>
  );
}

export default ServiceCard;
