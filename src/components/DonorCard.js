// src/components/DonorCard.js
import React from "react";

const DonorCard = ({ donor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 border hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-red-600">{donor.name}</h2>
        <span className="text-sm font-bold px-3 py-1 rounded-full bg-red-100 text-red-700">
          {donor.bloodType}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-1">
        📍 Location: <span className="font-medium">{donor.location}</span>
      </p>
      <p className="text-sm text-gray-600 mb-1">
        📞 Contact: <span className="font-medium">{donor.phone}</span>
      </p>
      <p className="text-sm text-gray-600">
        🕐 Last Donation:{" "}
        <span className="font-medium">{donor.lastDonation || "N/A"}</span>
      </p>
    </div>
  );
};

export default DonorCard;
