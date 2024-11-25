"use client";
import React from 'react';
import "../../globals.css";
import "../../styles.css";
import ConsultCard from './ConsultCard';
import Link from 'next/link';
const ConsultationSection = ({ cardData }) => {
 
  const consultationCards = [
    {
      image: "Astro icons 80x80-01.png",
      title: "Psychic Readings",
      link:'/services/psychic-readings'
    },
    {
      image: "Astro icons 80x80-02.png",
      title: "Love And Relationships",
     link:'/services/love-and-relationships'
    },
    {
      image: "Astro icons 80x80-03.png",
      title: "Tarot Readings",
      link:'/services/tarot-readings'
    },
    {
      image: "Astro icons 80x80-04.png",
      title: "Psychic Mediums",
     link:'/services/psychic-mediums'
    },
    {
      image: "Astro icons 80x80-05.png",
      title: "Financial Outlook",
     link:'/services/financial-outlook'
    },
    {
      image: "Astro icons 80x80-06.png",
      title: "Life Questions",
       link:'/services/life-questions'
    },
    {
      image: "Astro icons 80x80-07.png",
      title: "Spiritual Readings",
       link:'/services/spiritual-readings'
    },
    {
      image: "Astro icons 80x80-08.png",
      title: "Astrology Advice",
      link:'/services/astrology-advice'
    }
  ];
  return (
    <section className="consultation-section container">
      <div className="consultation-container">
        <div className="consultation-header">
          <div className="header-content">
            <h1 className="header-title size1">
              Consult Top Indian Astrologers online for any health, career, progeny concern
            </h1>
            <p className="header-description txtsize">
              Private online consultations with verified experts
            </p>
          </div>
          <Link href='/services' >  <button className="view-specialists-button txtsize">
          View All specialists
          </button></Link>
        </div>
      <ConsultCard consultationCards={consultationCards} slider={false}/>
      </div>
    </section>
  );
};

export default ConsultationSection; 