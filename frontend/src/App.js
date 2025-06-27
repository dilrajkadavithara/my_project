// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'; // No 'BrowserRouter' or 'Router' here
import SuccessPage from './pages/SuccessPage';

import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection'; // Corrected import path previously
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

  const location = useLocation(); // useLocation is now correctly within a Router context (from index.js)

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
        setHeroSlides(heroSlidesResponse.data); // Corrected: Uses heroSlidesResponse.data

      } catch (err) {
        console.error("Error fetching content:", err);
        setErrorContent("Failed to load website content.");
      } finally {
        setLoadingContent(false);
      }
    };

    fetchAllContent();
  }, []); // Dependency array remains empty for initial fetch

  // Effect for smooth scrolling to sections based on URL hash
  useEffect(() => {
    if (location.hash) {
      // Decode the hash to handle any special characters
      const id = decodeURIComponent(location.hash.substring(1)); // Remove '#'
      const element = document.getElementById(id);

      if (element) {
        // Get the height of the fixed header
        const header = document.querySelector('.main-header');
        const headerOffset = header ? header.offsetHeight : 0;
        
        // Calculate the target scroll position
        // Subtract headerOffset to make sure the content starts below the fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Optional: Scroll to top if no hash is present (e.g., on initial load or "/" path)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]); // Re-run effect when location (especially hash) changes


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

  const aboutUsProps = {
    heading: websiteContent['about_us_heading']?.value || "About Our Company (Default)",
    paragraph1: websiteContent['about_us_paragraph_1']?.value || "Default first paragraph.",
    paragraph2: websiteContent['about_us_paragraph_2']?.value || "Default second paragraph.",
  };

  const contactUsProps = {
    heading: websiteContent['contact_us_heading']?.value || "Let's Build Something Great Together (Default)",
    phone: websiteContent['contact_us_phone']?.value || "+1234567890",
    email: websiteContent['contact_us_email']?.value || "default@example.com", // Corrected email property assignment
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
    // NO <Router> TAGS HERE - BrowserRouter is now in index.js
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
  );
}

export default App;
