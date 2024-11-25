'use client'
import React , {useState}from 'react'
import "../../globals.css";
import "../../styles.css";
import { useRouter } from 'next/navigation'
import DetailsPopUp from '../advisorsc/DetailsPopUp';

const AstrologerCardDetail = ({cardData , style}) => {
  const router = useRouter();
  const [popUp,setPopUp] = useState(false);
  const popUpfunc =(value)=>{
    setPopUp(value);
  }
  
  return (
    <div>
      {/* Desktop View */}
      <section className="astrologer-details container desktop-view" style={style}>
        {cardData?.map((astrologer, index) => (
          <div key={index} className="astrologer-container" >
            <div className="astrologer-image-section" onClick={()=>{
             router.push(astrologer?.link);

            }}>
              <img
                src={astrologer?.image}
                alt="astrologer-image"
                className="astrologer-image"
              />
              <div className="availability-section">
                <img
                  src="onlinePhone1.gif"
                  alt="Online"
                  className="onlineImage"
                />
                <p className="availability-text">Available</p>
              </div>
            </div>
            <div className="astrologer-info">
              <h1 className="astrologer-name txtsize">{astrologer?.name}</h1>
              <p className="greeting">
                <span>
                  <i className="fa-solid fa-graduation-cap" /> {astrologer?.experience}
                </span>
              </p>
              <p className="greeting">{astrologer?.expertise}</p>
              <p className="greeting">{astrologer?.languages}</p>
            </div>
            <div className="astrologer-rating txtsize">
              <p className="rating-score">{astrologer?.rating}</p>
              <div className="rating-stars">
                {[...Array(5)]?.map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="rating-count">({astrologer?.reviews})</p>
            </div>
            <div className="astrologer-details-section">
              <div className="detail-item txtsize">{astrologer?.price?.offer}</div>
              <div className="detail-item2 txtsize">{astrologer?.price?.regular}</div>
            </div>
            <div className="astrologer-actions">
              <div className="call-button txtsize">
                <i className="fa-solid fa-phone" />
                <p>Call</p>
              </div>
              <div className="call-button2 txtsize white" onClick={()=>{setPopUp(!popUp)}}>
                <i className="fa-solid fa-message" />
                <p className="white" >Chat</p>
              </div>
            </div>
          </div>
        ))}
      </section>
{
  popUp && <DetailsPopUp popUp={popUpfunc}/>
}
      {/* Mobile View */}
      <section className="astrologer-details container mobile-view">
        {cardData?.map((astrologer, index) => (
          <div key={index} className="astrologer-card-mobile">
            <div className="card-header-mobile">
              <div className="astrologer-image-wrapper">
                <img
                  src={astrologer?.image}
                  alt="astrologer-image"
                  className="astrologer-image-mobile"
                />
                <div className="availability-badge">
                  <img
                    src="onlinePhone1.gif"
                    alt="Online"
                    className="online-indicator"
                  />
                  <span>Available</span>
                </div>
              </div>
              
              <div className="astrologer-brief">
                <h2 className="name">{astrologer?.name}</h2>
                <div className="rating-mobile">
                  <span className="rating-score">{astrologer?.rating}</span>
                  <div className="stars">
                    {[...Array(5)]?.map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <span className="reviews">({astrologer?.reviews})</span>
                </div>
              </div>
            </div>

            <div className="card-body-mobile">
              <div className="expertise-details">
                <p><i className="fa-solid fa-graduation-cap" /> {astrologer?.experience}</p>
                <p>{astrologer?.expertise}</p>
                <p>{astrologer?.languages}</p>
              </div>
              
              <div className="pricing-mobile">
                <span className="offer">{astrologer?.price?.offer}</span>
                <span className="regular">{astrologer?.price?.regular}</span>
              </div>

              <div className="action-buttons-mobile">
                <button className="call-btn">
                  <i className="fa-solid fa-phone" />
                  Call
                </button>
                <button className="chat-btn">
                  <i className="fa-solid fa-message" />
                  Chat
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default AstrologerCardDetail
