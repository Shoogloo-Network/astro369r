"use client"
import React, { useState, useEffect } from 'react';
import styles from '../../astro-shop/astroshop.module.css';

const ProductSlider = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const cardsToShow = 4;

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentSlide < products.length - cardsToShow) {
        setCurrentSlide(prev => prev + 1);
      } else {
        setCurrentSlide(0);
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentSlide, products.length]);

  const nextSlide = () => {
    if (currentSlide < products.length - cardsToShow) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (diff > 50) { // Swipe left
      nextSlide();
      setTouchStart(0);
    }
    if (diff < -50) { // Swipe right
      prevSlide();
      setTouchStart(0);
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <button 
        className={`${styles.sliderButton} ${styles.prevButton}`}
        onClick={prevSlide}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
      >
        ❮
      </button>
      
      <div 
        className={styles.sliderWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div 
          className={styles.sliderTrack}
          style={{
            transform: `translateX(-${currentSlide * (100 / cardsToShow)}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {products.map((product) => (
            <div key={product.id} className={styles.sliderCard}>
              <div className={styles.cardImage}>
                <img src={product.image} alt={product.name} />
                {product.isNew && <span className={styles.newBadge}>New</span>}
              </div>
              <div className={styles.cardContent}>
                <h3>{product.name}</h3>
                <div className={styles.priceContainer}>
                  <span className={styles.discountedPrice}>₹{product.discountedPrice}</span>
                  <span className={styles.originalPrice}>₹{product.price}</span>
                </div>
                <div className={styles.rating}>
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                  <span className={styles.reviews}>({product.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button 
        className={`${styles.sliderButton} ${styles.nextButton}`}
        onClick={nextSlide}
        disabled={currentSlide >= products.length - cardsToShow}
        aria-label="Next slide"
      >
        ❯
      </button>
    </div>
  );
};

export default ProductSlider; 