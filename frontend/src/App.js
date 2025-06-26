// frontend/src/App.js
import React, { useState, useEffect } from 'react'; // <--- Import useState, useEffect
import './App.css';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import ContactUsSection from './components/ContactUsSection';
import axios from 'axios'; // <--- Import Axios

function App() {
  const [websiteContent, setWebsiteContent] = useState({});
  const [loadingContent, setLoadingContent] = useState(true);
  const [errorContent, setErrorContent] = useState(null);

  useEffect(() => {
    const fetchWebsiteContent = async () => {
      try {
        const API_URL = process.env.REACT_APP_API_URL;
        if (!API_URL) {
            throw new Error("REACT_APP_API_URL is not defined in .env.development");
        }
        const response = await axios.get(`${API_URL}website-content/`);
        // Transform the array of content objects into a key-value pair object for easier access
        const contentMap = {};
        response.data.forEach(item => {
          contentMap[item.key] = { value: item.value, content_type: item.content_type };
        });
        setWebsiteContent(contentMap);
      } catch (err) {
        console.error("Error fetching website content:", err);
        setErrorContent("Failed to load website content.");
      } finally {
        setLoadingContent(false);
      }
    };

    fetchWebsiteContent();
  }, []); // Run once on component mount

  if (loadingContent) {
    return <div className="App">Loading website content...</div>;
  }

  if (errorContent) {
    return <div className="App">Error: {errorContent}</div>;
  }

  // Pass down content as props
  const heroProps = {
    mainHeading: websiteContent['hero_main_heading']?.value || "Your Main Hero Heading (Default)",
    subHeading: websiteContent['hero_sub_heading']?.value || "Your Sub Heading (Default)",
    tagline: websiteContent['hero_tagline']?.value || "A short, compelling tagline for your service (Default)",
    // Images will be handled later, potentially passed down as an array
    // E.g., sliderImages: [websiteContent['hero_slider_image_1']?.value, ...]
    mobileImage: websiteContent['hero_background_image_mobile']?.value || 'placeholder_mobile.jpg'
  };

  const aboutUsProps = {
    heading: websiteContent['about_us_heading']?.value || "About Our Company (Default)",
    paragraph1: websiteContent['about_us_paragraph_1']?.value || "Default first paragraph.",
    paragraph2: websiteContent['about_us_paragraph_2']?.value || "Default second paragraph.",
    // image: websiteContent['about_us_image']?.value || 'placeholder_about.jpg'
  };

  const contactUsProps = {
    heading: websiteContent['contact_us_heading']?.value || "Get in Touch (Default)",
    phone: websiteContent['contact_us_phone']?.value || "+1234567890",
    email: websiteContent['contact_us_email']?.value || "default@example.com",
    address: websiteContent['contact_us_address']?.value || "Default Address, City",
    facebookUrl: websiteContent['social_facebook_url']?.value || '#',
    instagramUrl: websiteContent['social_instagram_url']?.value || '#',
    whatsappPhone: websiteContent['social_whatsapp_phone']?.value || '1234567890',
    youtubeUrl: websiteContent['social_youtube_url']?.value || '#',
  };


  return (
    <div className="App">
      {/* Header/Navigation will go here later */}

      <main>
        <HeroSection {...heroProps} />
        <AboutUsSection {...aboutUsProps} />
        <ServicesSection />
        <ContactUsSection {...contactUsProps} />
      </main>

      {/* Footer will go here later */}
    </div>
  );
}

export default App;