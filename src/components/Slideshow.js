import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
  process.env.PUBLIC_URL + '/images/a.png',
  process.env.PUBLIC_URL + '/images/b.jpg',
  process.env.PUBLIC_URL + '/images/c.webp'
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer); // Clean up on unmount
  }, []);

  return (
    <div className="slideshow-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
