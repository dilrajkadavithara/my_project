// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css'; // Make sure your global styles are imported
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';
import SuccessPage from './pages/SuccessPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
  // You can retain your state/data-fetching as before
  const [websiteContent, setWebsiteContent] = useState({});
  const [navLinks, setNavLinks] = useState([
    { id: 1, text: 'Home', url_path: '/' },
    { id: 2, text: 'About Us', url_path: '/about' },
    { id: 3, text: 'Services', url_path: '/services' },
    { id: 4, text: 'Contact', url_path: '/contact' }
  ]);
  const [loadingContent, setLoadingContent] = useState(true);
  const [errorContent, setErrorContent] = useState(null);

  useEffect(() => {
    // You can replace this with your actual API endpoint
    axios.get('/api/website-content/')
      .then(res => {
        setWebsiteContent(res.data || {});
        setLoadingContent(false);
      })
      .catch(() => {
        setErrorContent('Could not fetch content.');
        setLoadingContent(false);
      });
  }, []);

  // You can add your loading/error logic if needed

  return (
    <Router>
      <div className="App">
        {/* HERO SECTION with HEADER inside */}
        <section className="hero-section" id="hero-section">
          <Header
            logoText="JOS CAR CARE"
            navLinks={navLinks}
            headerPhoneNumber={websiteContent['footer_phone']?.value}
          />
          <HeroSection websiteContent={websiteContent} />
        </section>

        {/* MAIN ROUTES */}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <AboutUsSection websiteContent={websiteContent} />
                <ServicesSection websiteContent={websiteContent} />
                <ContactUsSection websiteContent={websiteContent} />
              </>
            } />
            <Route path="/success" element={<SuccessPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer websiteContent={websiteContent} />
      </div>
    </Router>
  );
}

export default App;
