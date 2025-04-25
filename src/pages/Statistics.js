// src/pages/Statistics.js
import React, { useState, useEffect } from 'react';
import './Statistics.css'; // Importing the CSS file

const Statistics = () => {
  // Example data for statistics (can be fetched from an API or database in a real-world scenario)
  const [donors, setDonors] = useState([
    { name: 'John Doe', bloodType: 'A+', lastDonated: '2023-01-15' },
    { name: 'Jane Smith', bloodType: 'O-', lastDonated: '2023-03-20' },
    { name: 'Robert Brown', bloodType: 'B+', lastDonated: '2023-04-10' },
    { name: 'Emily Davis', bloodType: 'AB-', lastDonated: '2023-05-05' },
    { name: 'Michael Johnson', bloodType: 'O+', lastDonated: '2023-02-25' },
  ]);

  // Statistics calculations
  const totalDonors = donors.length;
  const bloodTypeStats = donors.reduce((acc, donor) => {
    acc[donor.bloodType] = acc[donor.bloodType] ? acc[donor.bloodType] + 1 : 1;
    return acc;
  }, {});

  return (
    <div className="statistics-page p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Blood Donation Statistics</h1>

      <div className="statistics-overview mb-8">
        <div className="stat-card">
          <h2>Total Donors</h2>
          <p>{totalDonors}</p>
        </div>
        <div className="stat-card">
          <h2>Blood Type Breakdown</h2>
          <ul>
            {Object.keys(bloodTypeStats).map((bloodType) => (
              <li key={bloodType}>
                {bloodType}: {bloodTypeStats[bloodType]} donors
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="donors-list">
        <h2 className="text-xl font-semibold mb-4">Donors List</h2>
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
    </div>
  );
};

export default Statistics;
