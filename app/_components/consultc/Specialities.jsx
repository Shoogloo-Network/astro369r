'use client';
import { useState, useEffect } from 'react';
import '../../consult.css';
import '../../globals.css';


const specialitiesData = [
  {
    image: "../../irregular-painful+period.webp",
    alt: "Sexology",
    title: "Sexology",
    price: 499
  },
  {
    image: "../../Acne.webp",
    alt: "Gynaecology",
    title: "Gynaecology",
    price: 599
  },
  {
    image: "../../top-speciality-sexology.svg",
    alt: "Psychiatry",
    title: "Psychiatry",
    price: 499
  },
  {
    image: "../../coughing.webp",
    alt: "Dermatology",
    title: "Dermatology",
    price: 599
  },
  {
    image: "../../irregular-painful+period.webp",
    alt: "Sexology",
    title: "Sexology",
    price: 499
  },
  {
    image: "../../Acne.webp",
    alt: "Gynaecology",
    title: "Gynaecology",
    price: 599
  },
  {
    image: "../../top-speciality-sexology.svg",
    alt: "Psychiatry",
    title: "Psychiatry",
    price: 499
  },
  {
    image: "../../coughing.webp",
    alt: "Dermatology",
    title: "Dermatology",
    price: 599
  },
];

const Specialities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Wait for client-side hydration to complete
  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === specialitiesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? specialitiesData.length - 1 : prevIndex - 1
    );
  };

  // Don't render the slider until client-side hydration is complete
  if (!isClient) {
    return null;
  }

  return (
    <>
      <div className="hspace"></div>
      <section className="specialities-section container">
        <div className="specialities-header">
          <div className="specialities-info">
            <h1 className="specialities-title size1">25+ Specialities</h1>
            <p className="specialities-description size2">
              Consult with top doctors specialities
            </p>
          </div>
          <button className="specialities-button txtsize">See all Specialities</button>
        </div>
        
        <div className="card-carousel">
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <div className="card-container" style={{ transform: `translateX(-${currentIndex * 25}%)`, transition: 'transform 0.3s' }}>
            {specialitiesData.map((specialty, index) => (
              <ConsultationCard
                key={`specialty-${index}`}
                image={`assets/images/${specialty.image}`}
                title={specialty.title}
                price={specialty.price}
              />
            ))}
          </div>
          <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
      </section>
    </>
  );
};

// You might want to create a separate ConsultationCard component
const ConsultationCard = ({ image, title, price }) => {
  return (
    <div className="consultation-card">
      <img
        src={image}
        alt={title}
        className="card-image-consultation"
      />
      <h2 className="card-title-consultation-heading">{title}</h2>
      <p className="card-title-consultation">₹{price}</p>
      <p className="card-action-consultation">
        CONSULT NOW
        <span className="arrow-icon">
          <i className="fa-solid fa-circle-right" aria-hidden="true"></i>
        </span>
      </p>
    </div>
  );
};

export default Specialities; 