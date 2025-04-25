// src/components/AboutUs.js

import React from 'react';
import '../styles/aboutus.css'; // Assuming you are using an external CSS file

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">About Us</h2>
          <p className="text-xl text-gray-700 mb-6">
            We are a community-driven platform dedicated to saving lives through blood donation.
            Our mission is to connect people in need of blood with generous donors who can make a difference.
          </p>
        </div>
        
        <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="about-text">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              BloodCare was founded with the vision to create a global community where blood donations
              are seamlessly organized and accessible. We work with hospitals, clinics, and local health organizations
              to ensure that life-saving blood reaches those who need it most. BloodCare was founded with the vision to create a global community where blood donations
              are seamlessly organized and accessible. We work with hospitals, clinics, and local health organizations
              to ensure that life-saving blood reaches those who need it most. BloodCare was founded with the vision to create a global community where blood donations
              are seamlessly organized and accessible. We work with hospitals, clinics, and local health organizations
              to ensure that life-saving blood reaches those who need it most.  BloodCare was founded with the vision to create a global community where blood donations
              are seamlessly organized and accessible. We work with hospitals, clinics, and local health organizations
              to ensure that life-saving blood reaches those who need it most. 
            </p>
          </div>

          <div className="about-image">
            <img 
              src="images/b.webp" 
              alt="Blood Donation" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
