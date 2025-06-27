// frontend/src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Accept headerPhoneNumber prop from App.js
function Header({ logoText, navLinks, headerPhoneNumber }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper to generate phone link
  const getPhoneLink = (phoneNumber) => {
    if (!phoneNumber) return '#';
    return `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  // Define a map to translate Django url_path to frontend section IDs
  const sectionIdMap = {
    '/': 'hero-section',       // Django path for Home maps to hero-section
    '/about': 'about-us-section',
    '/services': 'services-section',
    '/contact': 'contact-us-section',
    // Add any other specific mappings if needed in the future
  };

  return (
    <header className="main-header">
      <div className="logo">
        {/* Link to home section using its ID */}
        <Link to="#hero-section"><h1>{logoText || "My Project"}</h1></Link>
      </div>

      {headerPhoneNumber && (
        <div className="header-phone">
          <a href={getPhoneLink(headerPhoneNumber)}>
            {headerPhoneNumber}
          </a>
        </div>
      )}

      <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => {
            // Get the corresponding section ID from the map
            // Use the map, or fallback to a default if the path isn't mapped
            const targetId = sectionIdMap[link.url_path]; 
            const targetHash = targetId ? `#${targetId}` : link.url_path; // Fallback to original path if not mapped

            return (
              <li key={link.id}>
                <Link
                  to={targetHash} // Use the mapped hash link as the target
                  onClick={() => setIsMobileMenuOpen(false)} // Close mobile menu when a link is clicked
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Hamburger menu icon for mobile */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;