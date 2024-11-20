"use client";
import React, { useState } from 'react';
import "../../globals.css";
import "../../styles.css";
import CardCrousal from './CardCrousal';
const AppointmentSection = () => {
 
  const cards = [
    {
      image: "sp-dentist@2x.jpg",
      title: "Dentist",
      description: "Teething troubles? Schedule a dental checkup"
    },
    {
      image: "sp-gynecologist@2x.jpg",
      title: "Gynecologist/Obstetrician",
      description: "Explore for women's health, pregnancy and infertility treatments"
    },
    {
      image: "sp-dietitian@2x.jpg",
      title: "Dietitian/Nutrition",
      description: "Get guidance on eating right, weight management and sports nutrition"
    },
    {
      image: "sp-physiotherapist@2x.jpg",
      title: "Physiotherapist",
      description: "Pulled a muscle? Get it treated by a trained physiotherapist"
    },
    {
        image: "sp-physiotherapist@2x.jpg",
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist"
      },
      {
        image: "sp-physiotherapist@2x.jpg",
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist"
      },
      {
        image: "sp-physiotherapist@2x.jpg",
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist"
      },
      {
        image: "sp-physiotherapist@2x.jpg",
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist"
      },
    // ... add remaining cards
  ];
  

  return (
    <section className="appointment-section container">
      <h1 className="size1">
        Book an appointment for horoscope and astrology analysis consultation
      </h1>
      <p className="txtsize">
        Find experienced astrologers across all categories
      </p>
    <CardCrousal cards={cards} slider={true}/>
    </section>
  );
};

export default AppointmentSection; 