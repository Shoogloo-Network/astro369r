"use client";
import React from 'react';
import "../../globals.css";
import "../../styles.css";
import AstrologerCardDetail from './AstrologerCardDetail';
const ReadyToStart = () => {
  const astrologers = [
    {
      image: "astrologer1.jpg",
      name: "Cosmic Advice",
      experience: "35 Years",
      expertise: "Vedic | Career | Empath",
      languages: "Hindi , English",
      rating: "4.7",
      reviews: "1721",
      price: {
        offer: "5 minutes for $1",
        regular: "$2.99/min",
      },link:'/advisors/Cosmic Advice'
    },
    {
        image: "astrologer1.jpg",
        name: "Cosmic Advice",
        experience: "35 Years",
        expertise: "Vedic | Career | Empath",
        languages: "Hindi , English",
        rating: "4.7",
        reviews: "1721",
        price: {
          offer: "5 minutes for $1",
          regular: "$2.99/min"
        },link:'/advisors/Cosmic Advice'
      },
      {
        image: "astrologer1.jpg",
        name: "Cosmic Advice",
        experience: "35 Years",
        expertise: "Vedic | Career | Empath",
        languages: "Hindi , English",
        rating: "4.7",
        reviews: "1721",
        price: {
          offer: "5 minutes for $1",
          regular: "$2.99/min"
        },link:'/advisors/Cosmic Advice'
      },
      {
        image: "astrologer1.jpg",
        name: "Cosmic Advice",
        experience: "35 Years",
        expertise: "Vedic | Career | Empath",
        languages: "Hindi , English",
        rating: "4.7",
        reviews: "1721",
        price: {
          offer: "5 minutes for $1",
          regular: "$2.99/min"
        },link:'/advisors/Cosmic Advice'
      },
    // Duplicate for other astrologers
  ];

  return (
    <>
      <section className="appointment-section container">
        <h1 className="size1">Ready To Get Started?</h1>
        <p className="txtsize">Connect with one of these advisors</p>
      </section>
      <AstrologerCardDetail cardData={astrologers}/>
      
    </>
  );
};

export default ReadyToStart; 