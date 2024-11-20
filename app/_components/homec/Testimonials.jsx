"use client";
import React, { useState, useEffect } from 'react';
import "../../globals.css";
import "../../styles.css";
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Very good app. Well thought out about booking/rescheduling/canceling an appointment. Also, Doctor's feedback mechanism is good and describes all the basics in a good way",
      user: {
        image: "user.png",
        name: "Avinash Kumar"
      }
    },
    {
      text: "Very helpful. Far easier than doing same things on computer. Allows quick and easy search with speedy booking. Even maintains history of doctors visited.",
      user: {
        image: "user.png",
        name: "Amit Sharma"
      }
    },
    {
      text: "Very easy to book,maintain history. Hassle free from older versions of booking appointment via telephone.. Thanks Astro369 for making it simple.",
      user: {
        image: "user.png",
        name: "Jyothi Bhatia"
      }
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonial-section container-fullWidth">
      <h1 className="size2xl">What our users have to say</h1>
      <button className="testimonial-prev size1" onClick={prevTestimonial} />
      <div className="testimonial-container" style={{
        transform: `translateX(calc(-${currentTestimonial * 100}% - ${currentTestimonial * (window.innerWidth - document.documentElement.clientWidth)}px))`
      }}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card sizexl">
            <p>{testimonial.text}</p>
            <div className="testimonial-user">
              <img
                src={testimonial.user.image}
                alt={testimonial.user.name}
                className="testimonial-image"
              />
              <h3>{testimonial.user.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentTestimonial === index ? 'active' : ''}`}
            onClick={() => setCurrentTestimonial(index)}
          />
        ))}
      </div>
      <button className="testimonial-next size1" onClick={nextTestimonial} />
    </section>
  );
};

export default Testimonials; 