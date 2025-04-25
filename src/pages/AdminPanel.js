// src/pages/AdminPanel.js
import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  // Sample stats (replace with API calls if needed)
  const stats = {
    donors: 120,
    pendingRequests: 7,
    totalRequests: 45,
    availableBloodUnits: 210,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-red-600 text-center mb-8">🛡️ Admin Panel</h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatBox label="Registered Donors" value={stats.donors} />
        <StatBox label="Pending Requests" value={stats.pendingRequests} />
        <StatBox label="Total Requests" value={stats.totalRequests} />
        <StatBox label="Available Units" value={stats.availableBloodUnits} />
      </div>

      {/* Admin Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AdminAction title="Manage Donors" link="/admin/donors" />
        <AdminAction title="Review Requests" link="/admin/requests" />
        <AdminAction title="Add Blood Units" link="/admin/add-units" />
        <AdminAction title="View Statistics" link="/stats" />
        <AdminAction title="Manage Users" link="/admin/users" />
        <AdminAction title="Logout" link="/login" />
      </div>
    </div>
  );
};

export default AdminPanel;

// Reusable Stat box
const StatBox = ({ label, value }) => (
  <div className="bg-white shadow rounded-xl p-6 text-center border">
    <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
    <p className="text-sm text-gray-500 mt-1">{label}</p>
  </div>
);

// Reusable Admin action card
const AdminAction = ({ title, link }) => (
  <Link
    to={link}
    className="block p-5 rounded-xl bg-white shadow hover:shadow-md transition text-center text-red-600 font-medium border hover:bg-red-50"
  >
    {title}
  </Link>
);
