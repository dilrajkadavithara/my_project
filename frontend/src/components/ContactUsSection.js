// frontend/src/components/ContactUsSection.js
import React from 'react';

// Accept props from App.js
function ContactUsSection({ heading, phone, email, address, facebookUrl, instagramUrl, whatsappPhone, youtubeUrl }) {

  // Helper to generate WhatsApp link
  const getWhatsAppLink = (phoneNumber) => {
    if (!phoneNumber) return '#'; // Fallback if prop is empty
    // Assuming country code '91' for India, format as international for WhatsApp
    // Removes any spaces from the number
    return `https://wa.me/${phoneNumber.replace(/\s/g, '')}`;
  };

  // Helper to generate Phone link
  const getPhoneLink = (phoneNumber) => {
    if (!phoneNumber) return '#'; // Fallback if prop is empty
    return `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  return (
    <section className="contact-us-section">
      <h2>{heading}</h2> {/* Use dynamic content */}
      <p>Phone: <a href={getPhoneLink(phone)}>{phone}</a></p> {/* Use dynamic content */}
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p> {/* Use dynamic content */}
      <p>Address: {address}</p> {/* Use dynamic content */}

      <div className="social-links">
        {facebookUrl && facebookUrl !== '#' && ( // Render only if URL is provided and not default placeholder
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook (Icon)</a>
        )}
        {instagramUrl && instagramUrl !== '#' && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram (Icon)</a>
        )}
        {whatsappPhone && whatsappPhone !== '#' && (
          <a href={getWhatsAppLink(whatsappPhone)} target="_blank" rel="noopener noreferrer">WhatsApp (Icon)</a>
        )}
        {phone && phone !== '#' && ( // Using the main phone field for the phone link icon
          <a href={getPhoneLink(phone)}>Call Us (Icon)</a>
        )}
        {youtubeUrl && youtubeUrl !== '#' && (
          <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">YouTube (Icon)</a>
        )}
        {/* Real icons will replace the text later, maybe using a library like React Icons */}
      </div>
    </section>
  );
}

export default ContactUsSection;