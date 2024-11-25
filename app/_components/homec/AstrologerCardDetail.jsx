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
      <section className="astrologer-details-mobile container">
  {cardData?.map((astrologer, index) => (
    // <div key={index} class="astrologer-container-mobile">
    //   <div class="astrologer-image-section-mobile">
    //     <div class="astrologer-actions-image-online-mobile">
    //       <div class="astrologer-actions-online-mobile">
    //         <img src={astrologer?.image} alt="astrologer-image" class="astrologer-image-mobile"/>
    //         <div class="availability-section-mobile">
    //           <img src="onlinePhone1.gif" alt="Online" class="onlineImage-mobile"/>
    //           <p class="availability-text-mobile">Available</p>
    //         </div>
    //       </div>
    //       <div class="astrologer-details-section-mobile">
    //         <div class="detail-item-mobile txtsize">{astrologer?.price?.offer}</div>
    //         <div class="detail-item2-mobile txtsize">{astrologer?.price?.regular}</div>
    //       </div>
    //     </div>
    //     <div class="astrologer-info-mobile">
    //       <h1 class="astrologer-name-mobile txtsize">{astrologer?.name}</h1>
    //       <p class="greeting-mobile"><span><i class="fa-solid fa-graduation-cap"></i> {astrologer?.experience}</span></p>
    //       <p class="greeting-mobile">{astrologer?.expertise}</p>
    //       <p class="greeting-mobile">{astrologer?.languages}</p>
    //       <div class="astrologer-rating-mobile txtsize">
    //         <p class="rating-score-mobile">{astrologer?.rating}</p>
    //         <div class="rating-stars-mobile">
    //           {[...Array(5)]?.map((_, i) => (
    //             <span key={i} class="star-mobile">★</span>
    //           ))}
    //         </div>
    //         <p class="rating-count-mobile">({astrologer?.reviews})</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="astrologer-actions-mobile">
    //     <div class="call-button-mobile txtsize">
    //       <i class="fa-solid fa-phone"></i>
    //       <p>Call</p>
    //     </div>
    //     <div class="call-button2-mobile txtsize white">
    //       <i class="fa-solid fa-message"></i>
    //       <p class="white">Chat</p>
    //     </div>
    //   </div>
    // </div>



    <div className="astrologer-container-mobile" key={index}>
  <div className="astrologer-image-section-mobile">
    <div className="astrologer-actions-image-online-mobile">
      <div className="astrologer-actions-online-mobile">
        <img
          src="astrologer1.jpg"
          alt="astrologer-image"
          className="astrologer-image-mobile"
        />
        <div className="availability-section-mobile">
          {/* <div class="availability-dot"></div> */}
          <img
            src="assets/images/onlinePhone1.gif"
            alt="Online"
            className="onlineImage-mobile"
          />
          <p className="availability-text-mobile">OffLine</p>
        </div>
      </div>
      <div className="astrologer-details-section-mobile">
        <div className="detail-item-mobile txtsize">5 minutes for $1</div>
        <div className="detail-item2-mobile txtsize">$2.99/min</div>
      </div>
    </div>
    <div className="astrologer-info-mobile">
      <h1 className="astrologer-name-mobile txtsize">Cosmic Advice</h1>
      <p className="greeting-mobile">
        <span>
          <i className="fa-solid fa-graduation-cap" /> 35 Years
        </span>
      </p>
      <p className="greeting-mobile">Vedic | Career | Empath</p>
      <p className="greeting-mobile">Hindi , English</p>
      <div className="astrologer-rating-mobile txtsize">
        <p className="rating-score-mobile">4.7</p>
        <div className="rating-stars-mobile">
          <span className="star-mobile" />
          <span className="star-mobile">★</span>
          <span className="star-mobile">★</span>
          <span className="star-mobile">★</span>
          <span className="star-mobile">★</span>
        </div>
        <p className="rating-count-mobile">(1721)</p>
      </div>
    </div>
  </div>
  <div className="astrologer-actions-mobile">
    {/* <button class="call-button">Call</button> */}
    <div className="call-button-mobile txtsize">
      <i className="fa-solid fa-phone" />
      <p>Call</p>
    </div>
    {/* Icon */}
    {/* <button class="chat-button">Chat</button> */}
    <div className="call-button2-mobile txtsize white">
      <i className="fa-solid fa-message" />
      <p className="white">Chat</p>
    </div>
  </div>
</div>

  ))}
</section>

      <style jsx>{`
.astrologer-details-mobile {
    display: none;
  }
    .desktop-view {
    display: flex;
  }
/* Media Queries */
@media (max-width: 768px) {
  .desktop-view {
    display: none;
  }
  
  .astrologer-details-mobile {
    display: block;
  }
}
      `}</style>
    </div>
  )
}

export default AstrologerCardDetail
