// frontend/src/pages/SuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // To link back to home

function SuccessPage() {
  return (
    <section className="success-page-section">
      <h2>Thank You!</h2>
      <p>Your request has been successfully submitted. We will get in touch with you shortly.</p>
      <Link to="/">Go back to Home</Link>
    </section>
  );
}

export default SuccessPage;