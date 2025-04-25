// src/api/api.js
import axios from "axios";

// Base API instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Example: Register a new user
export const registerUser = (userData) => api.post("/auth/register", userData);

// Example: Login
export const loginUser = (credentials) => api.post("/auth/login", credentials);

// Get all donors
export const getDonors = () => api.get("/donors");

// Get all blood requests
export const getBloodRequests = () => api.get("/requests");

// Add new blood request
export const createBloodRequest = (data) => api.post("/requests", data);

// Add new donor
export const addDonor = (data) => api.post("/donors", data);

// Admin: approve a blood request
export const approveRequest = (requestId) =>
  api.put(`/requests/${requestId}/approve`);

// Admin: reject a blood request
export const rejectRequest = (requestId) =>
  api.put(`/requests/${requestId}/reject`);

// Delete donor
export const deleteDonor = (donorId) => api.delete(`/donors/${donorId}`);

// Export the axios instance in case you need it directly
export default api;
