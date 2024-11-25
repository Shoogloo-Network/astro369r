'use client'
import React from 'react'
import { useState } from 'react';
import "../../globals.css";
import "../../styles.css";
import Link from 'next/link';
const ConsultCard = ({consultationCards , slider}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
      setCurrentSlide((prev) => 
        prev === consultationCards.length - 4 ? 0 : prev + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => 
        prev === 0 ? consultationCards.length - 4 : prev - 1
      );
    };
  return (
    (slider? 
    
    <div className="consultation-cards card-carousel ">
         <button className="prev" onClick={prevSlide}>❮</button>
    <div className="card-container" style={{
      transform: `translateX(-${currentSlide * (consultationCards.length -8 ) }%)`,
      transition: 'transform 0.3s ease-in-out',
      display: 'flex',
      width: `${consultationCards.length * 20}%`
    }}>
    {consultationCards.map((card, index) => (
      <div key={index} className="consultation-card"  style={{width:"150px"}}>
        <Link href={card?.link}>
        <img
          src={card.image}
          alt={card.title.toLowerCase()}
          className="card-image-consultation"
          style={{margin:'0 auto'}}
        />
        <h2 className="card-title-consultation txtsize">{card.title}</h2>
        <p className="card-action-consultation txtsizesm">CONSULT NOW</p>
        </Link>
      </div>
    ))}
    </div> <button className="next" onClick={nextSlide}>❯</button> </div> : <div className="consultation-cards">
    {consultationCards.map((card, index) => (
      <div key={index} className="consultation-card">
        <Link href={card?.link}>
        <img
          src={card.image}
          alt={card.title.toLowerCase()}
          className="card-image-consultation"
          style={{margin:'0 auto'}}
        />
        <h2 className="card-title-consultation txtsize">{card.title}</h2>
        <p className="card-action-consultation txtsizesm">CONSULT NOW</p>
        </Link>
      </div>
    ))}
  </div> )
  )
}

export default ConsultCard
