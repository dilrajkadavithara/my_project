// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import SuccessPage from './pages/SuccessPage';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import Header from './components/Header';
import Footer from './components/Footer';
import SEOHelmet from './components/SEOHelmet'; // ✅ Added

import axios from 'axios';

function App() {
  const [websiteContent, setWebsiteContent] = useState({});
  const [navLinks, setNavLinks] = useState([]);
  const [heroSlides, setHeroSlides] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);
  const [errorContent, setErrorContent] = useState(null);

  useEffect(() => {
    const fetchAllContent = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        if (!API_URL) {
          throw new Error("REACT_APP_API_URL is not defined in .env.development");
        }

        const websiteContentResponse = await axios.get(`${API_URL}website-content/`);
        const contentMap = {};
        websiteContentResponse.data.forEach(item => {
          if (item.content_type === 'image_file' && item.content_image) {
            contentMap[item.key] = { value: item.content_image, content_type: item.content_type };
          } else {
            contentMap[item.key] = { value: item.value, content_type: item.content_type };
          }
        });
        setWebsiteContent(contentMap);

        const navLinksResponse = await axios.get(`${API_URL}navlinks/`);
        setNavLinks(navLinksResponse.data);

        const heroSlidesResponse = await axios.get(`${API_URL}heroslides/`);
        setHeroSlides(heroSlidesResponse.data);

      } catch (err) {
        console.error("Error fetching content:", err);
        setErrorContent("Failed to load website content.");
      } finally {
        setLoadingContent(false);
      }
    };

    fetchAllContent();
  }, []);

  if (loadingContent) {
    return <div className="App">Loading website content...</div>;
  }

  if (errorContent) {
    return <div className="App">Error: {errorContent}</div>;
  }

  const heroProps = {
    heroSlides: heroSlides,
    mobileImage: websiteContent['hero_background_image_mobile']?.value || 'https://via.placeholder.com/800x600?text=Hero+Mobile+Placeholder'
  };

  const aboutUsFeatures = [
    websiteContent['about_us_feature_1']?.value,
    websiteContent['about_us_feature_2']?.value,
    websiteContent['about_us_feature_3']?.value,
    websiteContent['about_us_feature_4']?.value,
    websiteContent['about_us_feature_5']?.value,
  ].filter(Boolean);

  const aboutUsProps = {
    heading: websiteContent['about_us_heading']?.value || "About Our Company (Default)",
    paragraph1: websiteContent['about_us_paragraph_1']?.value || "Default first paragraph.",
    paragraph2: websiteContent['about_us_paragraph_2']?.value,
    aboutUsImage: websiteContent['about_us_main_image']?.value || 'https://via.placeholder.com/600x400?text=About+Us+Image+Placeholder',
    features: aboutUsFeatures,
    badgeYearsText: websiteContent['about_us_badge_years_text']?.value,
    badgeCustomersText: websiteContent['about_us_badge_customers_text']?.value,
    ctaText: websiteContent['about_us_cta_text']?.value,
    ctaLink: websiteContent['about_us_cta_link']?.value,
  };

  const servicesSectionProps = {
    servicesHeading: websiteContent['services_section_heading']?.value || "Our Services",
    servicesSubheading: websiteContent['services_section_subheading']?.value || "Explore our comprehensive range of offerings."
  };

  const headerProps = {
    logoText: websiteContent['logo_text']?.value || "my_project",
    navLinks: navLinks,
    headerPhoneNumber: websiteContent['header_phone_number']?.value || null,
  };

  return (
    <div className="App">
      <SEOHelmet /> {/* ✅ Injects LocalBusiness JSON-LD structured data */}
      <Header {...headerProps} />

      <Routes>
        <Route path="/" element={
          <main>
            <HeroSection {...heroProps} />
            <AboutUsSection {...aboutUsProps} />
            <ServicesSection {...servicesSectionProps} />
          </main>
        } />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>

      <Footer websiteContent={websiteContent} navLinks={navLinks} />
    </div>
  );
}

export default App;
