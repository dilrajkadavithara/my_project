// frontend/src/components/ServicesSection.js
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';

// Accept new heading and subheading props
function ServicesSection({ servicesHeading, servicesSubheading }) { 
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        if (!API_URL) {
            throw new Error("REACT_APP_API_URL is not defined in .env.development");
        }
        
        // Fetch real services data from the API
        const response = await axios.get(`${API_URL}services/`);
        setServices(response.data);

      } catch (err) {
        setError('Failed to load services.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array means this runs once on mount

  // Display loading, error, or no services messages while maintaining the section structure
  if (loading) return <section className="services-section" id="services-section"><div className="section-loading-message">Loading Services...</div></section>;
  if (error) return <section className="services-section" id="services-section"><div className="section-error-message">Error: {error}</div></section>;
  
  return (
    <section className="services-section" id="services-section">
      {/* Conditionally render headings only if content is not empty and not in loading/error state */}
      {!loading && !error && (
        <>
          {servicesHeading && <h2 className="services-heading">{servicesHeading}</h2>}
          {servicesSubheading && <p className="services-subheading">{servicesSubheading}</p>}
        </>
      )}

      {services.length === 0 && !loading && !error && (
        <div className="section-no-content-message">No services available.</div>
      )}

      {services.length > 0 && ( // Only render grid if services are available
        <div className="service-cards-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ServicesSection;