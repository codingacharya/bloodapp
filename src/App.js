// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // Optional: For toasts

// Import Pages
import Home from "./pages/Home";
import Donors from "./pages/Donors";
import Statistics from "./pages/Statistics";
import RequestBlood from "./pages/RequestBlood";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound"; // A 404 page for undefined routes

// Import Layout (if you want a consistent navigation bar across pages)
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Service from './components/Service'; 
 // Import the About Us section
import Slideshow from "./components/Slideshow";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import './index.css';



const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Service />
      <Slideshow/>
      <Testimonial/>
      <Footer/>
      
      <div className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/Donors" element={<Donors />} />
          <Route path="/Statistics" element={<Statistics />} />
          <Route path="/RequestBlood" element={<RequestBlood />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes (Example) */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminPanel />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Toaster /> {/* Optional: Add toast notifications */}
    </Router>
  );
};

export default App;
