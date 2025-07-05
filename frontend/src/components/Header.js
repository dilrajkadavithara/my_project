// frontend/src/components/Header.js
import React, { useState } from 'react';

function Header({ logoText, navLinks, headerPhoneNumber }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getPhoneLink = (phoneNumber) => {
    if (!phoneNumber) return '#';
    return `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  // Map backend URL paths to section IDs
  const sectionIdMap = {
    '/': 'hero-section',
    '/about': 'about-us-section',
    '/services': 'services-section',
    '/contact': 'contact-section',
  };

  // Handle navlink click for smooth scroll
  const handleNavClick = (e, targetId) => {
    if (targetId) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update the URL hash without page jump
        window.history.replaceState(null, '', `#${targetId}`);
      }
    }
    // Else: let it proceed as a normal navigation (e.g., for true routes)
  };

  return (
    <header className="main-header">
      <div className="logo">
        <a href="#hero-section" onClick={e => handleNavClick(e, 'hero-section')}>
          <h1>{logoText || "My Project"}</h1>
        </a>
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
            const targetId = sectionIdMap[link.url_path];
            const targetHash = targetId ? `#${targetId}` : link.url_path;

            return (
              <li key={link.id}>
                <a
                  href={targetHash}
                  onClick={e => handleNavClick(e, targetId)}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Hamburger Menu */}
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;
