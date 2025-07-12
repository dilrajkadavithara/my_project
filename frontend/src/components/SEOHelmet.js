// frontend/src/components/SEOHelmet.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEOHelmet = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    "name": "JOS CAR CARE",
    "description": "Jos Car Care is a leading car detailing and paint protection center in Udayamperoor, Kerala. We specialize in car painting, ceramic coating, borophine coating, paint protection film, underbody coating, car washing, and more.",
    "image": "https://joscarcare.com/JCC_og.webp",
    "@id": "https://joscarcare.com",
    "url": "https://joscarcare.com",
    "telephone": "+91-6238804932",
    "email": "info@joscarcare.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1, Kandanad, Valiyakulam",
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
      {/* Optional: Open Graph and Twitter Card meta tags for rich social sharing */}
      <meta property="og:title" content="Jos Car Care – Car Detailing & Paint Protection, Udayamperoor" />
      <meta property="og:description" content="Your one-stop shop for car detailing, paint protection, ceramic/borophine coating, car painting, and more. Book now!" />
      <meta property="og:image" content="https://joscarcare.com/JCC_og.webp" />
      <meta property="og:url" content="https://joscarcare.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Jos Car Care – Car Detailing & Paint Protection, Udayamperoor" />
      <meta name="twitter:description" content="Expert car detailing, paint protection, ceramic & borophine coatings, and more. Visit Jos Car Care at Valiyakulam, Udayamperoor, Kerala." />
      <meta name="twitter:image" content="https://joscarcare.com/JCC_og.webp" />
    </Helmet>
  );
};

export default SEOHelmet;
