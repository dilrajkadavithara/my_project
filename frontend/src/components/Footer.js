// frontend/src/components/Footer.js
import React from "react";

// SVG ICON COMPONENTS
const PhoneIcon = () => (
  <svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M2.25 3.5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 1.93 1.39l.56 1.68a2 2 0 0 1-.45 2.11l-.98.98a15.72 15.72 0 0 0 6.36 6.36l.98-.98a2 2 0 0 1 2.11-.45l1.68.56a2 2 0 0 1 1.39 1.93v2.09a2 2 0 0 1-2 2A17.5 17.5 0 0 1 2.25 3.5z"/></svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M2.5 4A2.5 2.5 0 0 1 5 1.5h10A2.5 2.5 0 0 1 17.5 4v12A2.5 2.5 0 0 1 15 18.5H5A2.5 2.5 0 0 1 2.5 16V4zm1.75 1L10 9.5 15.75 5H4.25zm-.25 1.618V16A1 1 0 0 0 5 17h10a1 1 0 0 0 1-1V6.618l-6 4.364-6-4.364z"/></svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M10 2a8 8 0 1 1 0 16A8 8 0 0 1 10 2zm0 1.5A6.5 6.5 0 1 0 10 16.5 6.5 6.5 0 0 0 10 3.5zm.75 3.75a.75.75 0 0 0-1.5 0v3.38l-2.14 2.13a.75.75 0 0 0 1.06 1.06l2.37-2.36A.75.75 0 0 0 10.75 9V7.25z"/></svg>
);

const LocationIcon = () => (
  <svg width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M10 2a6 6 0 0 1 6 6c0 4.63-5.23 9.15-5.45 9.34a.75.75 0 0 1-1.1 0C9.23 17.15 4 12.63 4 8A6 6 0 0 1 10 2zm0 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"/></svg>
);

const FacebookIcon = () => (
  <svg width="22" height="22" fill="currentColor" aria-hidden="true" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72V195.3H22.89V288h81.39v224h100.2V288z"/></svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" fill="currentColor" aria-hidden="true" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-115 51.4-115 115 0 63.6 51.4 115 115 115 63.6 0 115-51.4 115-115 0-63.6-51.4-115-115-115zm0 186c-39.3 0-71-31.7-71-71s31.7-71 71-71 71 31.7 71 71-31.7 71-71 71zm146.4-194.1c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.3-92.1S372.7 9.6 337.4 7.9C302 6.2 242 6.2 206.6 7.9c-35.3 1.7-66.7 9.9-92.1 36.3S9.6 139.3 7.9 174.6C6.2 210 6.2 270 7.9 305.4c1.7 35.3 9.9 66.7 36.3 92.1s56.8 34.6 92.1 36.3c35.4 1.7 95.4 1.7 130.8 0 35.3-1.7 66.7-9.9 92.1-36.3s34.6-56.8 36.3-92.1c1.7-35.4 1.7-95.4 0-130.8zM398.8 388c-7.8 19.5-22.8 34.5-42.3 42.3-29.2 11.6-98.5 9-132.5 9s-103.3 2.6-132.5-9c-19.5-7.8-34.5-22.8-42.3-42.3-11.6-29.2-9-98.5-9-132.5s-2.6-103.3 9-132.5c7.8-19.5 22.8-34.5 42.3-42.3 29.2-11.6 98.5-9 132.5-9s103.3-2.6 132.5 9c19.5 7.8 34.5 22.8 42.3 42.3 11.6 29.2 9 98.5 9 132.5s2.6 103.3-9 132.5z"/></svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="22" fill="currentColor" aria-hidden="true" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.725-24.957-42.23-48.791-48.508C465.424 64 288 64 288 64s-177.424 0-212.864 11.575c-23.834 6.278-42.51 24.783-48.791 48.508C16 159.524 16 256 16 256s0 96.476 10.345 131.917c6.281 23.725 24.957 42.23 48.791 48.508C110.576 448 288 448 288 448s177.424 0 212.864-11.575c23.834-6.278 42.51-24.783 48.791-48.508C560 352.476 560 256 560 256s0-96.476-10.345-131.917zM232 336V176l142.857 80L232 336z"/></svg>
);

const WhatsappIcon = () => (
  <svg width="22" height="22" fill="currentColor" aria-hidden="true" viewBox="0 0 448 512"><path d="M380.9 97.1C339-35.3 181.5-15.1 144.7 78.3 122.5 134 148.7 201.5 205.7 231.2c-10.4 11.3-25.3 16.7-39.9 13.9-7.6-1.4-17.7-2.5-25.7-4.7-37.5-10.5-74.5-44.8-83-85.2-11.8-52.3 21.8-104.3 72.2-117.8 44.5-11.5 84.7 10.9 103.7 54.5 16.8 38.1 15.6 83.7-6.2 122.4 0 0-8.6 10.6-22.8 27.8-11.2 13.4-23.3 28-36.7 41.1C143.8 366.6 170.8 400 208.1 410.3c37.1 10.1 75.2-1.8 102.7-30.8 37.2-39.2 50.7-94.7 29.8-143.5zm-156.2 226c-49.6 0-97.7-16.7-137.3-47.7-35.8-28.4-60.3-68.4-67.3-111.3-1.4-8.9-2-17.9-2-26.9s.6-18 2-26.9c7-42.9 31.5-82.9 67.3-111.3C127.2 59.7 175.3 43 224.9 43c49.6 0 97.7 16.7 137.3 47.7 35.8 28.4 60.3 68.4 67.3 111.3 1.4 8.9 2 17.9 2 26.9s-.6 18-2 26.9c-7 42.9-31.5 82.9-67.3 111.3-39.6 31-87.7 47.7-137.3 47.7z"/></svg>
);

const Footer = ({ websiteContent }) => {
  const socials = [
    {
      icon: <FacebookIcon />,
      url: websiteContent['social_facebook_url']?.value,
      label: "Facebook",
    },
    {
      icon: <InstagramIcon />,
      url: websiteContent['social_instagram_url']?.value,
      label: "Instagram",
    },
    {
      icon: <YoutubeIcon />,
      url: websiteContent['social_youtube_url']?.value,
      label: "YouTube",
    },
    {
      icon: <WhatsappIcon />,
      url: websiteContent['social_whatsapp_phone']?.value
        ? `https://wa.me/${websiteContent['social_whatsapp_phone'].value.replace(/\D/g, '')}`
        : null,
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="main-footer" id="contact-section">
      <div className="footer-grid-container">
        {/* LEFT 3 Cards */}
        <div className="footer-left">
          <div className="footer-card">
            <h3>Direct Contact</h3>
            <div className="footer-contact-list">
              {websiteContent['footer_phone']?.value && (
                <div className="flex-align-center">
                  <span className="footer-icon"><PhoneIcon /></span>
                  <a href={`tel:${websiteContent['footer_phone'].value}`}>{websiteContent['footer_phone'].value}</a>
                </div>
              )}
              {websiteContent['footer_email']?.value && (
                <div className="flex-align-center">
                  <span className="footer-icon"><EmailIcon /></span>
                  <a href={`mailto:${websiteContent['footer_email'].value}`}>{websiteContent['footer_email'].value}</a>
                </div>
              )}
            </div>
          </div>
          <div className="footer-card">
            <h3>Operating Hours</h3>
            {websiteContent['footer_hours_weekdays']?.value && (
              <div className="flex-align-center">
                <span className="footer-icon"><ClockIcon /></span>
                {websiteContent['footer_hours_weekdays'].value}
              </div>
            )}
            {websiteContent['footer_hours_sunday']?.value && (
              <div className="flex-align-center">
                <span className="footer-icon"><ClockIcon /></span>
                {websiteContent['footer_hours_sunday'].value}
              </div>
            )}
          </div>
          <div className="footer-card special-message-card">
            {websiteContent['footer_usp']?.value ? (
              <p dangerouslySetInnerHTML={{ __html: websiteContent['footer_usp'].value }} />
            ) : null}
          </div>
        </div>
        {/* RIGHT 2 Cards */}
        <div className="footer-right">
          <div className="footer-card">
            <h3>Our Locations</h3>
            {websiteContent['footer_location_1']?.value && (
              <div className="flex-align-center">
                <span className="footer-icon"><LocationIcon /></span>
                {websiteContent['footer_location_1'].value}
              </div>
            )}
            {websiteContent['footer_location_2']?.value && (
              <div className="flex-align-center">
                <span className="footer-icon"><LocationIcon /></span>
                {websiteContent['footer_location_2'].value}
              </div>
            )}
          </div>
          <div className="footer-card">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              {socials
                .filter(s => s.url)
                .map((s) => (
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
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        {websiteContent['footer_copyright']?.value ||
          "© 2025 Jos Car Care. All rights reserved."}
      </div>
    </footer>
  );
};

export default Footer;
