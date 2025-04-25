import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Product Manager",
    quote: "This team is fantastic! They brought our vision to life with incredible precision and creativity.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "James Smith",
    title: "CEO at Startly",
    quote: "Professional, prompt, and reliable. Working with them was a smooth and rewarding experience.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily Davis",
    title: "Marketing Specialist",
    quote: "Their attention to detail and commitment to excellence truly sets them apart. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p className="title">{testimonial.title}</p>
            <p className="quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
