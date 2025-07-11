// frontend/src/components/Footer.js
import React from 'react';
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

function Footer({ websiteContent, navLinks }) {
  return (
    <footer className="main-footer">
      <div className="footer-grid-container">
        {/* Left Column: 2 Cards */}
        <div className="footer-col footer-col-left">
          {/* Direct Contact */}
          <div className="footer-card footer-direct-contact">
            <h3>Direct Contact</h3>
            <div className="flex-align-center">
              <FaPhoneAlt className="footer-icon" />
              <a href={`tel:${websiteContent['header_phone_number']?.value || ''}`}>
                {websiteContent['header_phone_number']?.value || 'Not Provided'}
              </a>
            </div>
            <div className="flex-align-center">
              <FaWhatsapp className="footer-icon" />
              <a href={`https://wa.me/${websiteContent['whatsapp_number']?.value || ''}`} target="_blank" rel="noopener noreferrer">
                {websiteContent['whatsapp_number']?.value || 'Not Provided'}
              </a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="footer-card footer-operating-hours">
            <h3>Operating Hours</h3>
            <div className="flex-align-center">
              <FaClock className="footer-icon" />
              <span>{websiteContent['operating_hours']?.value || 'Mon - Sat: 9:00 AM - 6:00 PM'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Cards */}
        <div className="footer-col footer-col-right">
          {/* Our Locations */}
          <div className="footer-card footer-locations">
            <h3>Our Locations</h3>
            <div className="flex-align-center">
              <FaMapMarkerAlt className="footer-icon" />
              <span>{websiteContent['location_address']?.value || 'Thripunithura, Ernakulam, Kerala'}</span>
            </div>
          </div>

          {/* Special Message */}
          <div className="special-message-card">
            <p>{websiteContent['special_footer_message']?.value || 'Experience premium car care and detailing with Jose Car Care.'}</p>
          </div>

          {/* Social Links */}
          <div className="footer-card footer-connect">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href={websiteContent['facebook_link']?.value || '#'} className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href={websiteContent['instagram_link']?.value || '#'} className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={`https://wa.me/${websiteContent['whatsapp_number']?.value || ''}`} className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Jose Car Care. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
