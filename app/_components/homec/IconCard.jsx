"use client";
import React from 'react';
import "../../globals.css";
import "../../styles.css";
const IconCard = ({ data, style }) => {
  if (!data) return null;

  return (
    <div className="icon-card-container" style={style?.container}>
      {data.map((item, index) => (
        <div key={index} className="card1" style={style?.card1}>
          <img 
            src={item.image} 
            alt={item.title}
            className="card-image"
            style={style?.cardImage}
          />
          <div className="card-content" style={style?.cardContent}>
            <h3 className="card-title" style={style?.cardTitle}>
              {item.title}
            </h3>
            <p className="card-description" style={style?.cardDescription}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconCard;
