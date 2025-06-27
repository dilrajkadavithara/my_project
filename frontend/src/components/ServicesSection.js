// frontend/src/components/ServicesSection.js
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';

function ServicesSection() {
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

  if (loading) return <section className="services-section" id="services-section"><div>Loading Services...</div></section>;
  if (error) return <section className="services-section" id="services-section"><div>Error: {error}</div></section>;
  if (services.length === 0) return <section className="services-section" id="services-section"><div>No services available.</div></section>;

  return (
    // Added id="services-section" to the main section tag
    <section className="services-section" id="services-section">
      <h2>Our Services (Dynamic)</h2>
      <div className="service-cards-grid">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;