// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import SuccessPage from './pages/SuccessPage';

import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import ContactUsSection from './components/ContactUsSection';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [websiteContent, setWebsiteContent] = useState({});
  const [navLinks, setNavLinks] = useState([]);
  const [heroSlides, setHeroSlides] = useState([]);
  const [loadingContent, setLoadingContent] = useState(true);
  const [errorContent, setErrorContent] = useState(null);

  const location = useLocation();

  // Effect to fetch all dynamic content
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

  // Effect for smooth scrolling to sections based on URL hash
  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.substring(1));
      const element = document.getElementById(id);

      if (element) {
        const header = document.querySelector('.main-header');
        const headerOffset = header ? header.offsetHeight : 0;
        
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);


  if (loadingContent) {
    return <div className="App">Loading website content...</div>;
  }

  if (errorContent) {
    return <div className="App">Error: {errorContent}</div>;
  }

  // Pass down content as props
  const heroProps = {
    heroSlides: heroSlides,
    mobileImage: websiteContent['hero_background_image_mobile']?.value || 'https://via.placeholder.com/800x600?text=Hero+Mobile+Placeholder'
  };

  // --- NEW/UPDATED About Us Props ---
  // Collect all features into an array
  const aboutUsFeatures = [
    websiteContent['about_us_feature_1']?.value,
    websiteContent['about_us_feature_2']?.value,
    websiteContent['about_us_feature_3']?.value,
    websiteContent['about_us_feature_4']?.value,
    websiteContent['about_us_feature_5']?.value,
  ].filter(feature => feature); // Filter out any null/undefined/empty string features

  const aboutUsProps = {
    heading: websiteContent['about_us_heading']?.value || "About Our Company (Default)",
    paragraph1: websiteContent['about_us_paragraph_1']?.value || "Default first paragraph.",
    paragraph2: websiteContent['about_us_paragraph_2']?.value, // No default fallback, relies on Django content
    aboutUsImage: websiteContent['about_us_main_image']?.value || 'https://via.placeholder.com/600x400?text=About+Us+Image+Placeholder',
    features: aboutUsFeatures, // Pass the array of features
    badgeYearsText: websiteContent['about_us_badge_years_text']?.value,
    badgeCustomersText: websiteContent['about_us_badge_customers_text']?.value,
    ctaText: websiteContent['about_us_cta_text']?.value,
    ctaLink: websiteContent['about_us_cta_link']?.value,
  };
  // --- END NEW/UPDATED About Us Props ---


  const contactUsProps = {
    heading: websiteContent['contact_us_heading']?.value || "Let's Build Something Great Together (Default)",
    phone: websiteContent['contact_us_phone']?.value || "+1234567890",
    email: websiteContent['contact_us_email']?.value || "default@example.com",
    address: websiteContent['contact_us_address']?.value || "Default Address, City",
    facebookUrl: websiteContent['social_facebook_url']?.value || '#',
    instagramUrl: websiteContent['social_instagram_url']?.value || '#',
    whatsappPhone: websiteContent['social_whatsapp_phone']?.value || '1234567890',
    youtubeUrl: websiteContent['social_youtube_url']?.value || '#',
  };

  const headerProps = {
    logoText: websiteContent['logo_text']?.value || "my_project",
    navLinks: navLinks,
    headerPhoneNumber: websiteContent['header_phone_number']?.value || null,
  };


  return (
    <div className="App">
      <Header {...headerProps} />

      <Routes>
        <Route path="/" element={
          <main>
            <HeroSection {...heroProps} />
            <AboutUsSection {...aboutUsProps} /> {/* Pass aboutUsProps */}
            <ServicesSection />
            <ContactUsSection {...contactUsProps} />
          </main>
        } />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>

      {/* Footer will go here later */}
    </div>
  );
}

export default App;