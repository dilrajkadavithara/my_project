// frontend/src/components/Footer.js
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const subtlePlaceholder = (text) => (
  <span style={{ color: "#bbb", fontStyle: "italic" }}>{text}</span>
);

const Footer = ({ websiteContent }) => {
  const socials = [
    {
      icon: <FaFacebookF />,
      url: websiteContent['social_facebook_url']?.value,
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: websiteContent['social_instagram_url']?.value,
      label: "Instagram",
    },
    {
      icon: <FaWhatsapp />,
      url: websiteContent['social_whatsapp_phone']?.value
        ? `https://wa.me/${websiteContent['social_whatsapp_phone'].value.replace(/\D/g, '')}`
        : null,
      label: "WhatsApp",
    },
  ];
  const anySocials = socials.some((s) => s.url);

  const phone = websiteContent['footer_phone']?.value || subtlePlaceholder("Phone coming soon");
  const email = websiteContent['footer_email']?.value || subtlePlaceholder("Email coming soon");
  const weekdays = websiteContent['footer_hours_weekdays']?.value || subtlePlaceholder("Information coming soon");
  const sunday = websiteContent['footer_hours_sunday']?.value || subtlePlaceholder("Information coming soon");
  const usp = websiteContent['footer_usp']?.value || subtlePlaceholder("Information coming soon");
  const location1 = websiteContent['footer_location_1']?.value || subtlePlaceholder("Information coming soon");
  const location2 = websiteContent['footer_location_2']?.value || subtlePlaceholder("Information coming soon");
  const copyright = websiteContent['footer_copyright']?.value || "© 2025 Jos Car Care. All rights reserved.";

  return (
    <footer className="main-footer" id="contact-section">
      <div className="footer-grid-container">
        {/* Left column */}
        <div className="footer-col footer-col-left">
          <div className="footer-card direct-contact">
            <h3>Direct Contact</h3>
            <div className="footer-contact-list">
              <div className="flex-align-center">
                <span className="footer-icon"><FaPhone /></span>
                <a href={websiteContent['footer_phone']?.value ? `tel:${websiteContent['footer_phone'].value}` : "#"}>
                  {phone}
                </a>
              </div>
              <div className="flex-align-center">
                <span className="footer-icon"><FaEnvelope /></span>
                <a href={websiteContent['footer_email']?.value ? `mailto:${websiteContent['footer_email'].value}` : "#"}>
                  {email}
                </a>
              </div>
            </div>
          </div>

          <div className="footer-card operating-hours">
            <h3>Operating Hours</h3>
            <div className="flex-align-center">
              <span className="footer-icon"><FaClock /></span>
              {weekdays}
            </div>
            <div className="flex-align-center">
              <span className="footer-icon"><FaClock /></span>
              {sunday}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="footer-col footer-col-right">
          <div className="footer-card locations">
            <h3>Our Locations</h3>
            <div className="flex-align-center">
              <span className="footer-icon"><FaMapMarkerAlt /></span>
              <span>{location1}</span>
            </div>
            <div className="flex-align-center">
              <span className="footer-icon"><FaMapMarkerAlt /></span>
              <span>{location2}</span>
            </div>
          </div>

          <div className="footer-card usp-message special-message-card">
            <p>{usp}</p>
          </div>

          <div className="footer-card connect-with-us">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              {anySocials
                ? socials.filter(s => s.url).map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="social-icon"
                    >
                      {s.icon}
                    </a>
                  ))
                : subtlePlaceholder("Links coming soon")}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">{copyright}</div>
    </footer>
  );
};

export default Footer;
