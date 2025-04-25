// src/pages/Dashboard.js
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Dummy stats — replace with API data
  const stats = {
    totalDonors: 120,
    bloodRequests: 45,
    fulfilledRequests: 38,
    availableUnits: 210,
  };

  return (
    <div className="min-h-screen bg-red-50 p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
        🩸 BloodCare Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard label="Total Donors" value={stats.totalDonors} color="bg-red-100" />
        <StatCard label="Blood Requests" value={stats.bloodRequests} color="bg-yellow-100" />
        <StatCard label="Fulfilled Requests" value={stats.fulfilledRequests} color="bg-green-100" />
        <StatCard label="Available Units" value={stats.availableUnits} color="bg-blue-100" />
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ActionCard title="Manage Donors" link="/donors" />
        <ActionCard title="Request Blood" link="/request" />
        <ActionCard title="View Statistics" link="/stats" />
        <ActionCard title="Edit Profile" link="/profile" />
        <ActionCard title="Logout" link="/login" />
      </div>
    </div>
  );
};

export default Dashboard;

// Mini components
const StatCard = ({ label, value, color }) => (
  <div className={`p-6 rounded-xl shadow-sm ${color} text-center`}>
    <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
    <p className="text-sm text-gray-600 mt-1">{label}</p>
  </div>
);

const ActionCard = ({ title, link }) => (
  <Link
    to={link}
    className="block p-5 rounded-xl shadow hover:shadow-md transition bg-white text-center text-red-600 font-medium border hover:bg-red-50"
  >
    {title}
  </Link>
);
