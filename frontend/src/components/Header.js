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

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/"><h1>{logoText || "My Project"}</h1></Link>
      </div>

      {headerPhoneNumber && ( // <--- Phone number is here, as a direct child of main-header
        <div className="header-phone">
          <a href={getPhoneLink(headerPhoneNumber)}>
            {headerPhoneNumber}
          </a>
        </div>
      )}

      <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(link => (
            <li key={link.id}>
              <Link to={link.url_path} onClick={() => setIsMobileMenuOpen(false)}>
                {link.text}
              </Link>
            </li>
          ))}
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