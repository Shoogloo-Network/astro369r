"use client";
import React, { useState, useEffect } from "react";
import IconCard from "./IconCard";
import "../../globals.css";
import "../../styles.css";
import Link from "next/link";
const Banner = ({ cardData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      id: 1,
      icon: "prediction.png",
      title: "Prediction Report",
      description: "Safe and trusted Experts",
      link:'/prediction-report'
  },
  {
      id: 2,
      icon: "consult-thumbnail.png",
     
      title: "Instant Video Consultation",
      description: "Connect within 60 secs",
      link:'/consult'
  },
  {
      id: 3,
      icon: "talk-astrologer-thumbnail.png",
      title: "Talk to Astrologer",
      description: "Safe and trusted Experts",
      link:'/talk-to-astrologer'
  },
  {
      id: 4,
      icon: "chat-thumbnail.png",
      title: "Chat with Astrologer",
      description: "Connect within 60 secs",
      link:'/chat-with-astrologer'
  }
  ];

  return (
    <section className="bannerSection container-fullWidth">
      <div className="cardBannerDiv">
        <div className="cardBannerDiv1">
          {cards.slice(0, 2).map((card, index) => (
            <div key={index} className="card1">
              <div className="card-image-container">
                <a href={card.link}>
                  <img src={card.icon} alt={card.title} className="card-image" />
                </a>
              </div>
              <div className="card-content">
                <h2 className="card-title size2">
                  <a href={card.link}>{card.title}</a>
                </h2>
                <p className="card-description txtsize">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="cardBannerDiv2">
          {cards.slice(2).map((card, index) => (
            <div key={index} className="card1">
              <div className="card-image-container">
                <a href={card.link}>
                  <img src={card.icon} alt={card.title} className="card-image" />
                </a>
              </div>
              <div className="card-content">
                <h2 className="card-title size2">
                  <a href={card.link}>{card.title}</a>
                </h2>
                <p className="card-description txtsize">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-image-slider-container" style={{width: "100%",maxWidth: "100%",height: "100%"}}>
        <div 
          className="image-slider-slides"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {[1, 2].map((_, index) => (
            <div key={index} className="image-slider-hero-image" style={{ backgroundImage: `url('/homeBanner.png')` }}>
              <div className="bannerText">
                <p className="white">100% Authentic & Trustworthy Puja Services</p>
                <h1 className="white">Performed by Experienced Pandits</h1>
                <h1 className="white">To Attain Relief From Your Problems!</h1>
                <Link href='/pooja/grah-shanti'>
                  <button>Book Puja now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="image-slider-dots">
          {[0, 1].map((index) => (
            <span
              key={index}
              className={`image-slider-dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner; 