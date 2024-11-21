// components/Slider.js
import { useState, useEffect } from 'react';
import styles from './Slider.module.css';
import "../../globals.css";
import "../../styles.css";
const slides = [
  {
    image: '/homeBanner.png',
    title: ['Performed by Experienced Pandits', 'To Attain Relief From Your Problems!'],
    text: '100% Authentic & Trustworthy Puja Services',
    buttonText: 'Book Puja now',
    buttonLink: './pooja.html'
  },
  {
    image: '/homeBanner.png',
    title: ['Performed by Experienced Pandits', 'To Attain Relief From Your Problems!'],
    text: '100% Authentic & Trustworthy Puja Services',
    buttonText: 'Book Puja now',
    buttonLink: './pooja.html'
  },
  {
    image: '/homeBanner.png',
    title: ['Performed by Experienced Pandits', 'To Attain Relief From Your Problems!'],
    text: '100% Authentic & Trustworthy Puja Services',
    buttonText: 'Book Puja now',
    buttonLink: './pooja.html'
  }
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.heroImageSliderContainer} style={{height: '182.75px' , overflow: 'hidden'}}>
      <div className={styles.imageSliderSlides} >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.imageSliderHeroImage} ${
              index === currentIndex ? styles.active : ''
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className={styles.bannerText} style={{
              
             
              color: '#fff',
            //   marginLeft: '11.7%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '2px'
            }}>
              <p className="white">{slide.text}</p>
              {slide.title.map((titleLine, i) => (
                <h1 
                  key={i} 
                  className="white"
                  style={{
                    
                        fontSize: '26px',
                
                    fontWeight: 'bold',
                 
                  }}
                >
                  {titleLine}
                </h1>
              ))}
              <a href={slide.buttonLink}>
                <button 
                  style={{
                    padding: '10px',
                        backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',  
                  }}
                >
                  {slide.buttonText}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.imageSliderDots} style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.imageSliderDot} ${
              index === currentIndex ? styles.active : ''
            }`}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              margin: '0 5px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? '#ff5722' : '#fff',
              cursor: 'pointer',
              border: '2px solid #fff'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
