import React from 'react'
import "../globals.css";
import "../styles.css";
import ConsultCard from '../_components/homec/ConsultCard'
import CardCrousal from '../_components/homec/CardCrousal';
import AstrologerCardDetail from '../_components/homec/AstrologerCardDetail';
import BannerServices from '../_components/servicesc/BannerServices';
import EventServices from '../_components/servicesc/EventServices';
import ReviewSlider from '../_components/servicesc/ReviewSlider';

const page = () => {
    const consultationCards = [
        {
          image: "Astro icons 80x80-01.png",
          title: "Psychic Readings",
          link:'services/psychic-readings'
        },
        {
          image: "Astro icons 80x80-02.png",
          title: "Love And Relationships",
           link:'services/love-and-relationships'
        },
        {
          image: "Astro icons 80x80-03.png",
          title: "Tarot Readings",
           link:'services/tarot-readings'
        },
        {
          image: "Astro icons 80x80-04.png",
          title: "Psychic Mediums",
           link:'services/psychic-mediums'
        },
        {
          image: "Astro icons 80x80-05.png",
          title: "Financial Outlook",
           link:'services/financial-outlook'
        },
        {
          image: "Astro icons 80x80-06.png",
          title: "Life Questions",
           link:'services/life-questions'
        },
        {
          image: "Astro icons 80x80-07.png",
          title: "Spiritual Readings",
           link:'services/spiritual-readings'
        },
        {
          image: "Astro icons 80x80-08.png",
          title: "Astrology Advice",
           link:'services/astrology-advice'
        },        {
            image: "Astro icons 80x80-04.png",
            title: "Psychic Mediums",
             link:'services/psychic-mediums'
          },
          {
            image: "Astro icons 80x80-05.png",
            title: "Financial Outlook",
             link:'services/financial-outlook'
          },
          {
            image: "Astro icons 80x80-06.png",
            title: "Life Questions",
             link:'services/life-questions'
          },
          {
            image: "Astro icons 80x80-07.png",
            title: "Spiritual Readings",
             link:'services/spiritual-readings'
          },
          {
            image: "Astro icons 80x80-08.png",
            title: "Astrology Advice",
             link:'services/astrology-advice'
          }
      ];
      const cards = [
        {
          image: "sp-dentist@2x.jpg",
          title: "Dentist",
          description: "Teething troubles? Schedule a dental checkup"
        },
        {
          image: "sp-gynecologist@2x.jpg",
          title: "Gynecologist/Obstetrician",
          description: "Explore for women's health, pregnancy and infertility treatments"
        },
        {
          image: "sp-dietitian@2x.jpg",
          title: "Dietitian/Nutrition",
          description: "Get guidance on eating right, weight management and sports nutrition"
        },
        {
          image: "sp-physiotherapist@2x.jpg",
          title: "Physiotherapist",
          description: "Pulled a muscle? Get it treated by a trained physiotherapist"
        },
        {
            image: "sp-physiotherapist@2x.jpg",
            title: "Physiotherapist",
            description: "Pulled a muscle? Get it treated by a trained physiotherapist"
          },
          {
            image: "sp-physiotherapist@2x.jpg",
            title: "Physiotherapist",
            description: "Pulled a muscle? Get it treated by a trained physiotherapist"
          },
          {
            image: "sp-physiotherapist@2x.jpg",
            title: "Physiotherapist",
            description: "Pulled a muscle? Get it treated by a trained physiotherapist"
          },
          {
            image: "sp-physiotherapist@2x.jpg",
            title: "Physiotherapist",
            description: "Pulled a muscle? Get it treated by a trained physiotherapist"
          },
        // ... add remaining cards
      ];



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
        //   {
        //     image: "astrologer1.jpg",
        //     name: "Cosmic Advice",
        //     experience: "35 Years",
        //     expertise: "Vedic | Career | Empath",
        //     languages: "Hindi , English",
        //     rating: "4.7",
        //     reviews: "1721",
        //     price: {
        //       offer: "5 minutes for $1",
        //       regular: "$2.99/min"
        //     }
        //   },
        // Duplicate for other astrologers
      ];
      const astrologersReview = [
        {
          image: "astrologer1.jpg",
          name: "Anthony Kumar",
         review:'Really amazing Powerfull very on point. picked up on exactly what I am feeling Thank You picked up on exactly what I am feeling Thank You Really amazing Powerfull picked up on exactly what I am feeling Thank You Really amazing Powerfull',
         rating: "4.7",
         reviews: "1721",

          
        },
        {
            image: "astrologer1.jpg",
            name: "Abhishek Singh",
           review:'picked up on exactly what I am feeling Thank You Really amazing Powerfull picked up on exactly what I am feeling Thank You Really amazing Powerfull picked up on exactly what I am feeling Thank You Really amazing Powerfull',
           rating: "4.7",
           reviews: "1721",
            
          },  {
            image: "astrologer1.jpg",
            name: "Nikhil Sharma",
            review:'Really amazing Powerfull very on point. picked up on exactly what I am feeling Thank You picked up on exactly what I am feeling Thank You Really amazing Powerfull picked up on exactly what I am feeling Thank You Really amazing Powerfull',
           rating: "4.7",
           reviews: "1721",
            
          },  {
            image: "astrologer1.jpg",
            name: "Lavanya Mishra",
            review:'Really amazing Powerfull very on point. picked up on exactly what I am feeling Thank You picked up on exactly what I am feeling Thank You Really amazing Powerfull picked up on exactly what I am feeling Thank You Really amazing Powerfull',
           rating: "4.7",
           reviews: "1721",
            
          },  {
            image: "astrologer1.jpg",
            name: "Ravi Prakash",
            review:'Really amazing Powerfull very on point. picked up on exactly what I am feeling Thank You picked up on exactly what I am feeling Thank You Really amazing Powerfull picked up on exactly what I am feeling Thank You Really amazing Powerfull',
           rating: "4.7",
           reviews: "1721",
            
          },  {
            image: "astrologer1.jpg",
            name: "Cosmic Advice",
            review:'Really amazing Powerfull very on point. picked up on exactly what I am feeling Thank You picked up on exactly what I am feeling Thank You Really amazing Powerfull picked up on exactly what I am feeling Thank You Really amazing Powerfull',
           rating: "4.7",
           reviews: "1721",
            
          },  {
            image: "astrologer1.jpg",
            name: "Cosmic Advice",
            review:'Really amazing Powerfull very on point. picked up on exactly what I am feeling Thank You picked up on exactly what I am feeling Thank You Really amazing Powerfull picked up on exactly what I am feeling Thank You Really amazing Powerfull',
           rating: "4.7",
           reviews: "1721",
            
          },
      ];
  return (
    <div className='desktop'>
        <BannerServices/>
        <div className="hspace1"></div>
       
  <div className='container'>
  <ConsultCard consultationCards={consultationCards} slider={true} />
  </div>
 
  <div className="hspace1"></div>
  <div className="container">
  <CardCrousal cards={cards} slider={false}/>
  </div>
  <div className="hspace"></div>
    <AstrologerCardDetail cardData={astrologers}/>
    <div className="hspace"></div>
    <EventServices/>
    <div className="hspace"></div>
    <div className='container' style={{ overflowX:'hidden',margin:'auto',}}>
    <ReviewSlider cards={astrologersReview} />
    </div>
  
    <div className="hspace"></div>
    </div>
  )
}

export default page
