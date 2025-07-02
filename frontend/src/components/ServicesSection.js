import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';

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
  }, []);

  if (loading) {
    return (
      <section
        className="services-section"
        id="services-section"
        role="region"
        aria-label="Car detailing and coating services"
      >
        <div className="section-loading-message">Loading Services...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        className="services-section"
        id="services-section"
        role="region"
        aria-label="Car detailing and coating services"
      >
        <div className="section-error-message">Error: {error}</div>
      </section>
    );
  }

  return (
    <section
      className="services-section"
      id="services-section"
      role="region"
      aria-label="Car detailing and coating services"
    >
      {servicesHeading && <h2 className="services-heading">{servicesHeading}</h2>}
      {servicesSubheading && <p className="services-subheading">{servicesSubheading}</p>}

      {services.length === 0 ? (
        <div className="section-no-content-message">No services available.</div>
      ) : (
        <div className="service-cards-grid" role="list">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ServicesSection;
