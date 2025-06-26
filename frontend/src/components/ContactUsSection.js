// frontend/src/components/ContactUsSection.js
import React from 'react';

function ContactUsSection() {
  // Placeholder for dynamic content from backend (WebsiteContent model)
  const contactContent = {
    heading: "Get in Touch (Dynamic)",
    phone: "+91 98765 43210 (Dynamic)", // Backend key: contact_us_phone
    email: "info@myproject.com (Dynamic)", // Backend key: contact_us_email
    address: "123 Main Street, Ernakulam, Kerala, India (Dynamic)", // Backend key: contact_us_address

    // NEW: Social Media Links (Dynamic from backend)
    facebookUrl: "https://facebook.com/yourprofile (Dynamic)", // Backend key: social_facebook_url
    instagramUrl: "https://instagram.com/yourprofile (Dynamic)", // Backend key: social_instagram_url
    whatsappPhone: "919876543210 (Dynamic)", // Backend key: social_whatsapp_phone (just number)
    youtubeUrl: "https://youtube.com/yourchannel (Dynamic)", // Backend key: social_youtube_url
  };

  // Helper to generate WhatsApp link
  const getWhatsAppLink = (phoneNumber) => {
    if (!phoneNumber || phoneNumber === "919876543210 (Dynamic)") return '#'; // Fallback
    // Assuming country code '91' for India, format as international for WhatsApp
    return `https://wa.me/${phoneNumber.replace(/\s/g, '')}`;
  };

  // Helper to generate Phone link
  const getPhoneLink = (phoneNumber) => {
    if (!phoneNumber || phoneNumber === "+91 98765 43210 (Dynamic)") return '#'; // Fallback
    return `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  return (
    <section className="contact-us-section">
      <h2>{contactContent.heading}</h2>
      <p>Phone: <a href={getPhoneLink(contactContent.phone)}>{contactContent.phone}</a></p>
      <p>Email: <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a></p>
      <p>Address: {contactContent.address}</p>

      <div className="social-links">
        {contactContent.facebookUrl && (
          <a href={contactContent.facebookUrl} target="_blank" rel="noopener noreferrer">Facebook (Icon)</a>
        )}
        {contactContent.instagramUrl && (
          <a href={contactContent.instagramUrl} target="_blank" rel="noopener noreferrer">Instagram (Icon)</a>
        )}
        {contactContent.whatsappPhone && (
          <a href={getWhatsAppLink(contactContent.whatsappPhone)} target="_blank" rel="noopener noreferrer">WhatsApp (Icon)</a>
        )}
        {contactContent.phone && ( // Using the main phone field for the phone link
          <a href={getPhoneLink(contactContent.phone)}>Call Us (Icon)</a>
        )}
        {contactContent.youtubeUrl && (
          <a href={contactContent.youtubeUrl} target="_blank" rel="noopener noreferrer">YouTube (Icon)</a>
        )}
        {/* Real icons will replace the text later */}
      </div>
    </section>
  );
}

export default ContactUsSection;