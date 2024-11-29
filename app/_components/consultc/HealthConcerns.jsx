'use client';
import { useState } from 'react';
import '../../consult.css';
import '../../globals.css';

const HealthConcerns = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
const healthConcernsData = [
  {
    image: "performance-issues-bed-v1.jpg",
    alt: "Period Problems",
    title: "Period Problems?",
    price: 499
  },
  {
    image: "skin-problems-v1.jpg",
    alt: "Performance issues",
    title: "Performance issues in bed?",
    price: 499
  },
  {
    image: "skin-problems-v1.jpg",
    alt: "Skin Problems",
    title: "Skin Problems?",
    price: 499
  },
  {
    image: "skin-problems-v1.jpg",
    alt: "Depression",
    title: "Depression or anxiety",
    price: 499
  },
  {
    image: "skin-problems-v1.jpg",
    alt: "Loose Weight",
    title: "Want to loose weight?",
    price: 499
  },
  {
    image: "skin-problems-v1.jpg",
    alt: "stomach-issues",
    title: "Stomach issues",
    price: 499
  },
  {
    image: "skin-problems-v1.jpg",
    alt: "vaginal-infections",
    title: "Vaginal infections?",
    price: 499
  },
  {
    image: "skin-problems-v1.jpg",
    alt: "sick kid",
    title: "Sick Kid?",
    price: 499
  },
  {
    image: "skin-problems-v1.jpg",
    alt: "mental health",
    title: "Depression or anxiety",
    price: 499
  }
];
  const nextSlideHealth = () => {
    setCurrentSlide(prev => 
      prev < healthConcernsData.length - 4 ? prev + 1 : 0
    );
  };

  const prevSlideHealth = () => {
    setCurrentSlide(prev => 
      prev > 0 ? prev - 1 : healthConcernsData.length - 4
    );
  };

  return (
    <section className="specialities-section-health container">
      <div className="specialities-header-health">
        <div className="specialities-info-health">
          <h1 className="specialities-title-health size1">Common Health Concerns</h1>
          <p className="specialities-description-health size2">
            Consult a doctor online for any health
          </p>
        </div>
        <button className="specialities-button-health txtsize">See all Symptoms</button>
      </div>

      <div className="card-carousel-health">
        <button className="prev-health" onClick={prevSlideHealth}>
          &#10094;
        </button>
        <div 
          className="card-container-health"
          style={{
            transform: `translateX(-${currentSlide * 25}%)`,
            transition: 'transform 0.3s ease'
          }}
        >
          {healthConcernsData.map((concern, index) => (
            <div key={index} className="health-concern-card">
              <img
                src={`${concern.image}`}
                alt={concern.alt}
                className="card-image-health-concern"
              />
              <h2 className="card-title-consultation-heading-health">
                {concern.title}
              </h2>
              <p className="card-title-consultation">₹{concern.price}</p>
              <p className="card-action-consultation">
                CONSULT NOW
                <span className="arrow-icon">
                  <i className="fa-solid fa-circle-right" aria-hidden="true"></i>
                </span>
              </p>
            </div>
          ))}
        </div>
        <button className="next" onClick={nextSlideHealth}>&#10095;</button>
      </div>
    </section>
  );
};

// Update your healthConcernsData array to match all the cards:


export default HealthConcerns; 