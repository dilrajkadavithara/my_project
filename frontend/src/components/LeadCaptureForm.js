// frontend/src/components/LeadCaptureForm.js
import React, { useState } from 'react';
import axios from 'axios'; // <--- Uncomment this line
import { useNavigate } from 'react-router-dom'; // <--- Uncomment this line and import

function LeadCaptureForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const navigate = useNavigate(); // <--- Activate useNavigate hook

  const handleNameChange = (e) => {
    const value = e.target.value;
    // Allow only letters and spaces, disallow numbers
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setNameError('Name can only contain letters and spaces.');
    } else {
      setNameError('');
    }
    setName(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    // Allow only digits
    if (!/^\d*$/.test(value)) {
      setPhoneError('Phone number can only contain digits.');
    } else {
      setPhoneError('');
    }
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setNameError('');
    setPhoneError('');

    let isValid = true;

    // Final validation before submission
    if (!name.trim()) {
      setNameError('Name is required.');
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) { // Ensure at least one letter
        setNameError('Name must contain only letters and spaces.');
        isValid = false;
    }

    // Phone number validation: strictly 10 digits, starting with 6, 7, 8, or 9
    if (!phoneNumber.trim()) {
      setPhoneError('Phone number is required.');
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      setPhoneError('Phone number must be 10 digits and start with 6, 7, 8, or 9.');
      isValid = false;
    }

    if (!isValid) {
      return; // Stop submission if validation fails
    }

    // Prepare data for API
    const formData = {
      name: name.trim(),
      phone_number: phoneNumber.trim(), // Match backend model field name
    };

    // <--- Activate API call and redirection
    try {
      const API_URL = process.env.REACT_APP_API_URL;
      if (!API_URL) {
          throw new Error("REACT_APP_API_URL is not defined in .env.development");
      }
      await axios.post(`${API_URL}leads/`, formData);
      console.log('Lead submitted successfully:', formData);
      navigate('/success'); // Redirect to success page
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('Failed to submit lead. Please try again.'); // Or set state for error message
    }
    // End API call and redirection
  };

  return (
    <div className="lead-capture-form">
      <h3>Get a Call</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          {nameError && <p className="error-message">{nameError}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
          {phoneError && <p className="error-message">{phoneError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LeadCaptureForm;