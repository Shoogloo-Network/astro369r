'use client'
import React ,{useState} from 'react'
import "../../globals.css";
import "../../styles.css";
const CardCrousal = ({cards , slider}) => {
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
  (  slider ?   
  <div className="card-carousel">
    <button className="prev" onClick={prevSlide}>❮</button>
    <div className="card-container" style={{
      transform: `translateX(-${currentSlide * (cards.length + 5)}%)`,
      transition: 'transform 0.3s ease-in-out',
      display: 'flex',
      width: `${cards.length * 25}%`
    }}>
      {cards.map((card, index) => (
        <a key={index} href="./product-detail.html">
             {/* style={{
          flex: '0 0 25%',
          padding: '0 10px'
        }} */}
          <div className="card">
            <img src={card.image} alt={`Image ${index + 1}`} />
            <h1 className="size2">{card.title}</h1>
            <p className="txtsize">{card.description}</p>
          </div>
        </a>
      ))}
    </div>
    <button className="next" onClick={nextSlide}>❯</button>
  </div>
 
:   <div className="card-carousel" style={{display:'flex' , flexWrap:'wrap',marginLeft:'auto',marginRight:'auto',justifyContent:'center',}}>

  {cards.map((card, index) => (
    <a key={index} href="./product-detail.html">
         {/* style={{
      flex: '0 0 25%',
      padding: '0 10px'
    }} */}
      <div className="card">
        <img src={card.image} alt={`Image ${index + 1}`} />
        <h1 className="size2">{card.title}</h1>
        <p className="txtsize">{card.description}</p>
      </div>
    </a>
  ))}
</div>
  )
  )
}

export default CardCrousal
