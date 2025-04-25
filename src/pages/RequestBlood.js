// src/pages/RequestBlood.js
import React, { useState } from 'react';
import './RequestBlood.css'; // Import the corresponding CSS file for styling

const RequestBlood = () => {
  const [name, setName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRequestBlood = (e) => {
    e.preventDefault();
    if (name === '' || bloodType === '' || quantity === '' || location === '') {
      setErrorMessage('All fields are required');
    } else {
      setErrorMessage('');
      // Assuming this sends the request to the server
      setSuccessMessage('Blood request submitted successfully!');
      // Clear the form after submission
      setName('');
      setBloodType('');
      setQuantity('');
      setLocation('');
    }
  };

  return (
    <div className="request-blood-page">
      <div className="request-blood-form-container">
        <h2>Request Blood</h2>
        <form onSubmit={handleRequestBlood}>
          <input
            type="text"
            className="input-field"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="input-field"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <input
            type="number"
            className="input-field"
            placeholder="Quantity (in units)"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default RequestBlood;
