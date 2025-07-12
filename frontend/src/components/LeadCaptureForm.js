// frontend/src/components/LeadCaptureForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Helper function to get a cookie value by name (for CSRF)
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

function LeadCaptureForm() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (!/^[a-zA-Z\s]*$/.test(value)) {
      setNameError('Name can only contain letters and spaces.');
    } else {
      setNameError('');
    }
    setName(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) {
      setPhoneError('Phone number can only contain digits.');
    } else {
      setPhoneError('');
    }
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setNameError('');
    setPhoneError('');

    let isValid = true;

    if (!name.trim()) {
      setNameError('Name is required.');
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      setNameError('Name must contain only letters and spaces.');
      isValid = false;
    }

    if (!phoneNumber.trim()) {
      setPhoneError('Phone number is required.');
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
      setPhoneError('Phone number must be 10 digits and start with 6, 7, 8, or 9.');
      isValid = false;
    }

    if (!isValid) return;

    const formData = {
      name: name.trim(),
      phone_number: phoneNumber.trim(),
    };

    try {
      const API_URL = process.env.REACT_APP_API_URL;
      if (!API_URL) {
        throw new Error("REACT_APP_API_URL is not defined in .env");
      }

      // CSRF token from cookie
      const csrfToken = getCookie('csrftoken');

      await axios.post(
        `${API_URL}leads/`,
        formData,
        {
          headers: {
            'X-CSRFToken': csrfToken
          },
          withCredentials: true // Important for cookies/session!
        }
      );

      navigate('/success');
    } catch (error) {
      console.error('Error submitting lead:', error);
      alert('Failed to submit. Please try again later.');
    }
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
