// frontend/src/components/Header.js
import React, { useState } from 'react'; // <--- Import useState
import { Link } from 'react-router-dom'; // <--- Import Link for navigation

// Accept navLinks prop from App.js
function Header({ logoText, navLinks }) { // <--- Accept navLinks prop
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="logo">
        <Link to="/"><h1>{logoText || "My Project"}</h1></Link> {/* Make logo a link to home */}
      </div>

      <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}> {/* Add 'open' class for styling */}
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