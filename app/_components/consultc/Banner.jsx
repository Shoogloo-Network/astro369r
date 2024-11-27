'use client';
import { useState, useEffect } from 'react';
import '../../consult.css';
import '../../globals.css';


const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const imageSliderCurrentSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="banner-section">
      <div className="banner-section container">
        <div className="left-banner-content">
          <div className="banner-content">
            <h1 className="main-heading size3xl">Bypass the travel chaos &amp; save time!</h1>
            <h1 className="sub-heading size3xl">Take Online Astrology Consultation</h1>
            <p className="consultation-info size1">
              Private consultation + Audio call · Starts at just ₹199
            </p>
            <div className="doctor-availability">
              <div className="doctor-image">
                <span className="each-image">
                  <img src="thumbnail1.jpg" alt="doctor1" />
                </span>
                <span className="each-image">
                  <img src="thumbnail1.jpg" alt="doctor1" />
                </span>
                <span className="each-image">
                  <img src="thumbnail1.jpg" alt="doctor1" />
                </span>
              </div>
              <p className="doctor-count size2">+126 Advisors are online</p>
              <span className="pulse"></span>
            </div>
          </div>

          <button className="consult-button size2">Consult Now</button>
          <div className="features-list">
            <div className="feature-item">
              <i className="fa-solid fa-medal"></i>
              <p className="feature-text txtsize">Verified Experts</p>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-file-prescription"></i>
              <p className="feature-text txtsize">Hand Written Horoscopes</p>
            </div>
            <div className="feature-item">
              <i className="fa-solid fa-message"></i>
              <p className="feature-text txtsize">Free Followup</p>
            </div>
          </div>
        </div>
        <div className="hero-image-slider-container">
          <div className="image-slider-slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <img 
                key={index}
                src="homepage-hero-image-web-v1.png" 
                alt="woman scrolling mobile" 
                className="image-slider-hero-image"
              
              />
            ))}
          </div>
          <div className="image-slider-dots">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <span 
                key={index}
                className={`image-slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => imageSliderCurrentSlide(index)}
               
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 