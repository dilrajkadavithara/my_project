import React from "react";

// --- SVG ICONS ---
const PhoneIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffcc00" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M4 4h5l2 7-3 2c1.5 2.5 4.5 5.5 7 7l2-3 7 2v5c0 1.104-.896 2-2 2C5.373 22 2 18.627 2 14c0-1.104.896-2 2-2h5l2 7z" /></svg>
);
const EmailIcon = () => (
  <svg width="28" height="28" fill="none" stroke="#ffcc00" strokeWidth="2.2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
);
const ClockIcon = () => (
  <svg width="26" height="26" fill="none" stroke="#ffcc00" strokeWidth="2.2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
);
const LocationIcon = () => (
  <svg width="26" height="26" fill="none" stroke="#ffcc00" strokeWidth="2.1" viewBox="0 0 24 24"><path d="M12 21s-6-5.686-6-10A6 6 0 1 1 18 11c0 4.314-6 10-6 10z" /><circle cx="12" cy="11" r="2.5" /></svg>
);

// --- SOCIAL ICONS (use brand color fills) ---
const FacebookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="#3b5998"><circle cx="16" cy="16" r="16" fill="#3b5998"/><path d="M21.755 16.001h-3.02v10h-4v-10h-2v-3h2v-2.1c0-2.617 1.245-4.1 4.1-4.1h2.9v3h-2.1c-.692 0-.9.175-.9.9V13h3l-.38 3z" fill="#fff"/></svg>
);
const InstagramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="#E1306C"><circle cx="16" cy="16" r="16" fill="#E1306C"/><path d="M20.5 10a2.5 2.5 0 012.5 2.5v7a2.5 2.5 0 01-2.5 2.5h-9a2.5 2.5 0 01-2.5-2.5v-7A2.5 2.5 0 0111.5 10h9zm0 1.5h-9A1 1 0 0010.5 12.5v7a1 1 0 001 1h9a1 1 0 001-1v-7a1 1 0 00-1-1zm-4.5 2a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.25-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill="#fff"/></svg>
);
const WhatsappIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="#25D366"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M16 10a6 6 0 00-6 6c0 1.26.397 2.426 1.073 3.389l-1.039 3.121 3.201-1.041A5.98 5.98 0 0016 22a6 6 0 000-12zm2.782 8.713c-.191.52-.987.986-1.37 1.013-.352.024-.79.035-1.272-.08-.285-.067-.65-.21-1.13-.463-.97-.51-1.58-1.27-1.77-1.492-.188-.221-.422-.487-.604-.804-.183-.316-.19-.586-.13-.772.06-.185.22-.298.479-.46.156-.098.351-.173.492-.112.14.061.265.221.41.445l.237.364c.13.199.273.433.477.682.204.249.37.398.584.463.215.064.359.017.491-.067.13-.085.544-.451.69-.606.146-.155.285-.136.481-.085.195.05.539.252.792.482.253.23.456.422.507.658.05.235-.096.383-.183.492z" fill="#fff"/></svg>
);

// Placeholder for missing content
const subtlePlaceholder = (text) => (
  <span style={{ color: "#bbb", fontStyle: "italic" }}>{text}</span>
);

const Footer = ({ websiteContent }) => {
  // Social media URLs
  const socials = [
    {
      icon: <FacebookIcon />,
      url: websiteContent?.social_facebook_url?.value,
      label: "Facebook",
    },
    {
      icon: <InstagramIcon />,
      url: websiteContent?.social_instagram_url?.value,
      label: "Instagram",
    },
    {
      icon: <WhatsappIcon />,
      url: websiteContent?.social_whatsapp_phone?.value
        ? `https://wa.me/${websiteContent.social_whatsapp_phone.value.replace(/\D/g, "")}`
        : null,
      label: "WhatsApp",
    },
  ];

  // Content, with fallbacks
  const phone = websiteContent?.footer_phone?.value || subtlePlaceholder("Phone coming soon");
  const email = websiteContent?.footer_email?.value || subtlePlaceholder("Email coming soon");
  const weekdays = websiteContent?.footer_hours_weekdays?.value || subtlePlaceholder("Information coming soon");
  const sunday = websiteContent?.footer_hours_sunday?.value || subtlePlaceholder("Information coming soon");
  const usp = websiteContent?.footer_usp?.value || subtlePlaceholder("Information coming soon");
  const location1 = websiteContent?.footer_location_1?.value || subtlePlaceholder("Information coming soon");
  const location2 = websiteContent?.footer_location_2?.value || subtlePlaceholder("Information coming soon");
  const copyright = websiteContent?.footer_copyright?.value || "© 2025 Jos Car Care. All rights reserved.";

  // Render
  return (
    <footer className="main-footer" id="contact-section">
      <div className="footer-content">
        {/* LEFT COLUMN: 3 CARDS */}
        <div className="footer-left">
          {/* Direct Contact */}
          <div className="footer-card direct-contact">
            <h3>Direct Contact</h3>
            <div className="flex-align-center" style={{ marginBottom: 16 }}>
              <span className="footer-icon"><PhoneIcon /></span>
              <a href={websiteContent?.footer_phone?.value ? `tel:${websiteContent.footer_phone.value}` : "#"} style={{ color: "#fff", fontSize: "1.5rem", textDecoration: "none" }}>{phone}</a>
            </div>
            <div className="flex-align-center">
              <span className="footer-icon"><EmailIcon /></span>
              <a href={websiteContent?.footer_email?.value ? `mailto:${websiteContent.footer_email.value}` : "#"} style={{ color: "#fff", fontSize: "1.25rem", textDecoration: "none" }}>{email}</a>
            </div>
          </div>
          {/* Operating Hours */}
          <div className="footer-card operating-hours">
            <h3>Operating Hours</h3>
            <div className="flex-align-center" style={{ marginBottom: 12 }}>
              <span className="footer-icon"><ClockIcon /></span>
              <span style={{ fontSize: "1.18rem" }}>{weekdays}</span>
            </div>
            <div className="flex-align-center">
              <span className="footer-icon"><ClockIcon /></span>
              <span style={{ fontSize: "1.18rem" }}>{sunday}</span>
            </div>
          </div>
          {/* USP Message */}
          <div className="footer-card usp-message special-message-card">
            <p style={{ fontSize: "1.25rem", width: "100%", textAlign: "center" }}>{usp}</p>
          </div>
        </div>

        {/* RIGHT COLUMN: 2 CARDS */}
        <div className="footer-right">
          {/* Locations */}
          <div className="footer-card locations">
            <h3>Our Locations</h3>
            <div className="flex-align-start" style={{ marginBottom: 14 }}>
              <span className="footer-icon"><LocationIcon /></span>
              <span style={{ fontWeight: "600" }}>Main Office:&nbsp;</span>
              <span>{location1}</span>
            </div>
            <div className="flex-align-start">
              <span className="footer-icon"><LocationIcon /></span>
              <span style={{ fontWeight: "600" }}>Studio &amp; Service Point:&nbsp;</span>
              <span>{location2}</span>
            </div>
          </div>
          {/* Connect With Us */}
          <div className="footer-card connect-with-us">
            <h3>Connect With Us</h3>
            <div className="social-icons" style={{ marginTop: "1.3rem" }}>
              {socials.some(s => s.url)
                ? socials
                    .filter(s => s.url)
                    .map(s => (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="social-icon"
                        style={{ background: "none", border: "none", padding: 0 }}
                      >
                        {s.icon}
                      </a>
                    ))
                : subtlePlaceholder("Links coming soon")
              }
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom" style={{ marginTop: 28, fontSize: "1rem" }}>
        {copyright}
      </div>
    </footer>
  );
};

export default Footer;
