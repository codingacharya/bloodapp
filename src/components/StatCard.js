// src/components/StatCard.js
import React from 'react';

const StatCard = ({ label, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between space-x-4">
      {/* Icon */}
      <div className="p-4 bg-red-500 text-white rounded-full">
        <img src={icon} alt={label} className="h-8 w-8" />
      </div>

      {/* Stat Text */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{value}</h3>
        <p className="text-sm text-gray-500 mt-1">{label}</p>
      </div>

      {/* Optional: Add a line to separate icon and text */}
      <div className="border-l border-gray-300 h-12" />
    </div>
  );
};

export default StatCard;
