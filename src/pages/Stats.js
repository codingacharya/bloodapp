// src/pages/Stats.js
import React from "react";
import StatCard from "../components/StatCard"; // Reusable StatCard component

const Stats = () => {
  // Dummy stats (replace with actual API data)
  const stats = {
    totalDonors: 120,
    totalRequests: 200,
    fulfilledRequests: 150,
    availableBloodUnits: 300,
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-8">🩸 Blood Stats</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Donors" value={stats.totalDonors} />
        <StatCard label="Total Requests" value={stats.totalRequests} />
        <StatCard label="Fulfilled Requests" value={stats.fulfilledRequests} />
        <StatCard label="Available Blood Units" value={stats.availableBloodUnits} />
      </div>
    </div>
  );
};

export default Stats;
