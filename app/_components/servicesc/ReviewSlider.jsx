'use client'
import React ,{useState} from 'react'
import "../../globals.css";
import "../../styles.css";
import './ReviewSlider.module.css'
const ReviewSlider = ({cards }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
      setCurrentSlide((prev) => 
        prev === cards.length - 4 ? 0 : prev + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => 
        prev === 0 ? cards.length - 4 : prev - 1
      );
    };
return (
   
<div style={{display:'flex',justifyContent:'center'}}>
    <button className="prev" onClick={prevSlide}  style={{position:'relative',left:'0', top:'150px',margin:'0 30px',width:'60px',height:'60px',fontWeight:'bold'}}>❮</button>
<div className="card-carousel"  style={{width:'70%',}}>
  
 
  <div className="card-container " style={{
    transform: `translateX(-${currentSlide * 25}%)`,
    transition: 'transform 0.3s ease-in-out',
    display: 'flex',
    width: `${cards.length * 35}%`,
//   padding:'40px',
   
  }}>
    {cards?.map((astrologer, index) => (
          <div key={index} className="astrologer-container" style={{margin:"10px"}}>
            <div className="astrologer-image-section">
              <img
                src={astrologer?.image}
                alt="astrologer-image"
                className="astrologer-image"
            style={{height:'auto',width:'112px'}}
              />
              <div className="availability-section">
                <img
                  src="onlinePhone1.gif"
                  alt="Online"
                  className="onlineImage"
                />
                
              </div>
            </div>
            <div className="astrologer-info">
              <h1 className="astrologer-name txtsize1">{astrologer?.name}</h1>
              <p className="greeting">
                <span>
                 {astrologer?.review}
                </span>
              </p>
             
            </div>
            <div className="astrologer-rating txtsize1">
              <p className="rating-score">{astrologer?.rating}</p>
              <div className="rating-stars">
                {[...Array(5)]?.map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="rating-count">({astrologer?.reviews})</p>
            </div>
            
             

          </div>
        ))}
  </div>
 
 
</div>
<button className="next" onClick={nextSlide} style={{position:'relative',right:'0', top:'150px',margin:'0 30px',width:'60px',height:'60px',fontWeight:'bold'}} >❯</button>
</div>


)
}

export default ReviewSlider
