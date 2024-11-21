import React from 'react'
import AdvisorsBanner from '../_components/advisorsc/AdvisorsBanner'

import '../globals.css'
import AdvisorsList from '../_components/advisorsc/AdvisorsList'
import DetailsPopUp from '../_components/advisorsc/DetailsPopUp'
import AstrologerCardDetail from '../_components/homec/AstrologerCardDetail'
const page = () => {
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
            regular: "$2.99/min"
          }
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
            }
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
            }
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
            }
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
              }
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
            }
          },
        // Duplicate for other astrologers
      ];
    const style = {
        display:'flex',
        flexWrap:'wrap' ,
    }
  return (
    <div>
    
    <AdvisorsBanner
        imageUrl="/advisorsBanner.jpg"
        title="Sign Up for Free to consult best astrologers in India"
        buttonText="Sign Up"
      />
  <div className="hspace" />
 
 <div  style={{display:'flex'}}>
 <div style={{width:'20%'}}>
 <AdvisorsList/>
 </div>
 <div  ><AstrologerCardDetail cardData={astrologers} style={style}/></div>
 </div>
  <div className="hspace" />
 {/* <DetailsPopUp/> */}
 
    </div>
  )
}

export default page
