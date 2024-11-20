"use client";
import React from 'react';
import "../../globals.css";
import "../../styles.css";
const TopAstrologers = () => {
  const astrologers = [
    {
      image: "pawan-sharma.png",
      name: "Acharya Pawan",
      rating: "4.1",
      backgroundColor: "rgb(111, 226, 111)"
    },
    {
      image: "bhola-datta.png",
      name: "Astro B.Datta",
      rating: "4.3",
      backgroundColor: "rgb(235, 120, 200)"
    },
    {
      image: "vipin-kumar-bhardwaj.png",
      name: "Acharya V.Bhardwaj",
      rating: "3.8",
      backgroundColor: "rgb(79, 216, 240)"
    },
    {
        image: "pawan-sharma.png",
        name: "Acharya Pawan",
        rating: "4.1",
        backgroundColor: "rgb(111, 226, 111)"
      },
      {
        image: "bhola-datta.png",
        name: "Astro B.Datta",
        rating: "4.3",
        backgroundColor: "rgb(235, 120, 200)"
      },
      {
        image: "vipin-kumar-bhardwaj.png",
        name: "Acharya V.Bhardwaj",
        rating: "3.8",
        backgroundColor: "rgb(79, 216, 240)"
      },
    // Add remaining astrologers
  ];

  return (
    <div className="top-free-apps-section container-fullWidth">
      <div className="container size1">
        <h2 className="size1">
          Top Indian Astrologers<a href="#">›</a>
        </h2>
        <div className="apps-grid">
          {astrologers.map((astrologer, index) => (
            <div key={index} className="app-card container-flex">
              <div
                className="app-card-image-div"
                style={{ backgroundColor: astrologer.backgroundColor }}
              >
                <a href="./advisorProfile.html">
                  <img src={astrologer.image} alt={astrologer.name} />
                </a>
              </div>
              <div className="app-info size1">
                <h3 className="txtsize">{astrologer.name}</h3>
                <span className="rating txtsize">{astrologer.rating} ★ Social</span>
                <span className="free-badge1 txtsizesm">Free</span>
              </div>
              <span className="free-badge txtsizesm">Free</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAstrologers; 