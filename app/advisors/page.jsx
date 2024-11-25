'use client'
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
          },
          link:'/advisors/cosmic-advice',
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
            },
            link:'/advisors/cosmic-advice',
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
            },
            link:'/advisors/cosmic-advice',
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
            },
            link:'/advisors/cosmic-advice',
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
              },
              link:'/advisors/cosmic-advice',
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
            },
            link:'/advisors/cosmic-advice',
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
 <div className='advisorList'>
 <AdvisorsList/>
 </div>

 <div className='advisorDetail' ><AstrologerCardDetail cardData={astrologers} style={style}/></div>
 </div>
  <div className="hspace" />
 {/* <DetailsPopUp/> */}
 <style jsx>{`
 
 .advisorList{
 width:20%;
 }
 
 @media only screen and (max-width: 600px) {
 
 .advisorList{
 
 display:none;
 
 
 }

 .advisorDetail{
 
margin-left:auto;
margin-right:auto; 
 
 
}
 
 }
 `}</style>
    </div>
  )
}

export default page
