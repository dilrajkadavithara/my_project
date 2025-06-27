// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SuccessPage from './pages/SuccessPage';

import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import ContactUsSection from './components/ContactUsSection';
import Header from './components/Header';
import axios from 'axios';

// REMOVED: getSliderImages helper function (no longer needed, HeroSlides will provide structured data)

function App() {
  const [websiteContent, setWebsiteContent] = useState({});
  const [navLinks, setNavLinks] = useState([]);
  const [heroSlides, setHeroSlides] = useState([]); // <--- NEW STATE for Hero Slides
  const [loadingContent, setLoadingContent] = useState(true);
  const [errorContent, setErrorContent] = useState(null);

  useEffect(() => {
    const fetchAllContent = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        if (!API_URL) {
            throw new Error("REACT_APP_API_URL is not defined in .env.development");
        }

        // Fetch Website Content (for About Us, Contact Us, Logo, Mobile Hero Image)
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

        // Fetch Nav Links
        const navLinksResponse = await axios.get(`${API_URL}navlinks/`);
        setNavLinks(navLinksResponse.data);

        // <--- NEW: Fetch Hero Slides
        const heroSlidesResponse = await axios.get(`${API_URL}heroslides/`);
        setHeroSlides(heroSlidesResponse.data);
        // --- END NEW ---

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

  // Pass down content as props
  const heroProps = {
    // <--- MODIFIED: Pass heroSlides directly, and get mobileImage from WebsiteContent
    heroSlides: heroSlides,
    mobileImage: websiteContent['hero_background_image_mobile']?.value || 'https://via.placeholder.com/800x600?text=Hero+Mobile+Placeholder'
  };

  const aboutUsProps = {
    heading: websiteContent['about_us_heading']?.value || "About Our Company (Default)",
    paragraph1: websiteContent['about_us_paragraph_1']?.value || "Default first paragraph.",
    paragraph2: websiteContent['about_us_paragraph_2']?.value || "Default second paragraph.",
  };

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
    <Router>
      <div className="App">
        <Header {...headerProps} />

        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection {...heroProps} />
              <AboutUsSection {...aboutUsProps} />
              <ServicesSection />
              <ContactUsSection {...contactUsProps} />
            </main>
          } />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>

        {/* Footer will go here later */}
      </div>
    </Router>
  );
}

export default App;