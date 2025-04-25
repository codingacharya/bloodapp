// src/pages/Donors.js

import React, { useState } from 'react';
import './Donors.css';  // Import the CSS file

const Donors = () => {
  // State to store donors data
  const [donors, setDonors] = useState([
    { name: 'John Doe', bloodType: 'A+', lastDonated: '2023-01-15' },
    { name: 'Jane Smith', bloodType: 'O-', lastDonated: '2023-03-20' },
    // Add more sample donors if needed
  ]);

  // State to handle form input
  const [newDonor, setNewDonor] = useState({
    name: '',
    bloodType: '',
    lastDonated: '',
  });

  // Handle input change for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDonor((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new donor to the donors list
    setDonors((prev) => [...prev, newDonor]);
    // Clear the form
    setNewDonor({
      name: '',
      bloodType: '',
      lastDonated: '',
    });
  };

  return (
    <div className="donors-page p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Donors List</h1>

      {/* Donors List */}
      <div className="donors-list mb-8">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Blood Type</th>
              <th className="border px-4 py-2">Last Donated</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{donor.name}</td>
                <td className="border px-4 py-2">{donor.bloodType}</td>
                <td className="border px-4 py-2">{donor.lastDonated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Donor Form */}
      <div className="donor-form bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Add New Donor</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newDonor.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg" htmlFor="bloodType">
              Blood Type:
            </label>
            <input
              type="text"
              id="bloodType"
              name="bloodType"
              value={newDonor.bloodType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg" htmlFor="lastDonated">
              Last Donated:
            </label>
            <input
              type="date"
              id="lastDonated"
              name="lastDonated"
              value={newDonor.lastDonated}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Donor
          </button>
        </form>
      </div>
    </div>
  );
};

export default Donors;
