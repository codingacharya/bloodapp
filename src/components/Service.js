import React from 'react';
import './Service.css';

const services = [
  {
    title: 'Elephant Care',
    description: 'We have a large elephant care hospital is the most advanced and specialized in the industry.',
    icon: '🐘',
  },
  {
    title: 'Cheeta care',
    description: 'We are started rescuing cheetahs from the wild and providing them with a safe environment for rehabilitation.',
    icon: '🐆',
  },
  {
    title: 'Birds',
    description: 'We have several types of birds that we care for, including rehabilitation and rescue efforts.',
    icon: '🐦',
  },
];

const Service = () => {
  return (
    <section className="service-section">
      <h2 className="service-title">Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
