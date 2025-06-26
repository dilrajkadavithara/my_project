// frontend/src/components/ServicesSection.js
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios'; // <--- Uncomment this line

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
        // <--- Uncomment the lines below and remove or comment out the mock data
        const response = await axios.get(`${API_URL}services/`);
        setServices(response.data);

        // // Mock data for now: (DELETE or COMMENT OUT THESE LINES)
        // const mockServices = [
        //   { id: 1, title: "Web Design", short_description: "Stunning websites crafted for impact.", images: [{ image: "https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Web+Design", is_thumbnail: true, alt_text: "Web Design Image" }] },
        //   { id: 2, title: "SEO Optimization", short_description: "Improve your search engine ranking.", images: [{ image: "https://via.placeholder.com/300x200/33FF57/FFFFFF?text=SEO", is_thumbnail: true, alt_text: "SEO Image" }] },
        //   { id: 3, title: "Graphic Design", short_description: "Creative visuals for your brand.", images: [{ image: "https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Graphic+Design", is_thumbnail: true, alt_text: "Graphic Design Image" }] },
        //   { id: 4, title: "Content Writing", short_description: "Engaging content that converts.", images: [{ image: "https://via.placeholder.com/300x200/FF33A1/FFFFFF?text=Content", is_thumbnail: true, alt_text: "Content Writing Image" }] },
        //   { id: 5, title: "Digital Marketing", short_description: "Strategies to grow your online presence.", images: [{ image: "https://via.placeholder.com/300x200/A133FF/FFFFFF?text=Marketing", is_thumbnail: true, alt_text: "Digital Marketing Image" }] },
        //   { id: 6, title: "UI/UX Design", short_description: "Intuitive and beautiful user interfaces.", images: [{ image: "https://via.placeholder.com/300x200/33FFF5/FFFFFF?text=UI/UX", is_thumbnail: true, alt_text: "UI/UX Design Image" }] },
        //   { id: 7, title: "Video Production", short_description: "High-quality video content creation.", images: [{ image: "https://via.placeholder.com/300x200/FF8833/FFFFFF?text=Video", is_thumbnail: true, alt_text: "Video Production Image" }] },
        //   { id: 8, title: "Photography", short_description: "Professional photos for your business.", images: [{ image: "https://via.placeholder.com/300x200/88FF33/FFFFFF?text=Photography", is_thumbnail: true, alt_text: "Photography Image" }] },
        //   { id: 9, title: "Branding", short_description: "Building a strong and recognizable brand.", images: [{ image: "https://via.placeholder.com/300x200/8833FF/FFFFFF?text=Branding", is_thumbnail: true, alt_text: "Branding Image" }] },
        //   { id: 10, title: "Social Media Mgt", short_description: "Grow your social media presence.", images: [{ image: "https://via.placeholder.com/300x200/FF3388/FFFFFF?text=Social", is_thumbnail: true, alt_text: "Social Media Image" }] },
        //   { id: 11, title: "E-commerce Dev", short_description: "Robust online stores for sales.", images: [{ image: "https://via.placeholder.com/300x200/3388FF/FFFFFF?text=E-commerce", is_thumbnail: true, alt_text: "E-commerce Image" }] },
        //   { id: 12, title: "Mobile App Dev", short_description: "Innovative apps for iOS & Android.", images: [{ image: "https://via.placeholder.com/300x200/FFCC33/FFFFFF?text=Mobile+App", is_thumbnail: true, alt_text: "Mobile App Image" }] },
        // ];
        // setServices(mockServices);
      } catch (err) {
        setError('Failed to load services.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <section className="services-section"><div>Loading Services...</div></section>;
  if (error) return <section className="services-section"><div>Error: {error}</div></section>;
  if (services.length === 0) return <section className="services-section"><div>No services available.</div></section>;

  return (
    <section className="services-section">
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