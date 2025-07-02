// frontend/src/components/SEOHelmet.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "JOS CAR CARE",
    "image": "https://www.joscarcare.com/og-image.jpg",
    "@id": "https://www.joscarcare.com",
    "url": "https://www.joscarcare.com",
    "telephone": "+91-6238804932",
    "email": "info@joscarcare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1, Kandanad",
      "addressLocality": "Udayamperoor",
      "addressRegion": "Kerala",
      "postalCode": "682307",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "makesOffer": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Detailing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Borophine Coating" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Paint Protection Film" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Nano Diamond Coating" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ceramic Coating" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Underbody Coating" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Washing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Car Accessorizing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scratch Removal" } }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;
