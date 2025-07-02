// frontend/src/components/Footer.js
import React from 'react';

const Footer = ({ websiteContent, navLinks }) => {
  return (
    <footer className="main-footer" id="contact-section"> {/* ID used for scroll target */}
      <h2 className="footer-heading">
        {websiteContent['contact_us_heading']?.value}
      </h2>

      <div className="footer-content">
        {/* Left Column: Direct Contact and Operating Hours */}
        <div className="footer-left">
          <div className="footer-card">
            <h3>Direct Contact</h3>
            <p className="flex-align-center">
              <i className="fas fa-phone-alt footer-icon"></i>
              {websiteContent['contact_us_phone']?.value}
            </p>
            <p className="flex-align-center">
              <i className="fas fa-envelope footer-icon"></i>
              {websiteContent['contact_us_email']?.value}
            </p>
          </div>

          <div className="footer-card">
            <h3>Operating Hours</h3>
            <p className="flex-align-center">
              <i className="fas fa-clock footer-icon"></i>
              Mon – Sat: 9:00 AM – 6:00 PM
            </p>
            <p className="flex-align-center">
              <i className="fas fa-clock footer-icon"></i>
              Sunday: Closed
            </p>
          </div>
        </div>

        {/* Right Column: Locations, Message, Social */}
        <div className="footer-right">
          <div className="footer-card">
            <h3>Our Locations</h3>
            <p className="flex-align-start">
              <i className="fas fa-map-marker-alt footer-icon"></i>
              {websiteContent['contact_us_address']?.value}
            </p>
            <p className="flex-align-start">
              <i className="fas fa-map-marker-alt footer-icon"></i>
              {websiteContent['contact_us_address_2']?.value}
            </p>
          </div>

          <div className="footer-card special-message-card">
            <p>{websiteContent['about_us_feature_1']?.value}</p>
          </div>

          <div className="footer-card">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              {websiteContent['social_facebook_url']?.value && (
                <a
                  href={websiteContent['social_facebook_url'].value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              )}
              {websiteContent['social_instagram_url']?.value && (
                <a
                  href={websiteContent['social_instagram_url'].value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              )}
              {websiteContent['social_youtube_url']?.value && (
                <a
                  href={websiteContent['social_youtube_url'].value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              )}
              {websiteContent['social_whatsapp_phone']?.value && (
                <a
                  href={`https://wa.me/${websiteContent['social_whatsapp_phone'].value}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="footer-bottom">
        © 2025 Jos Car Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
