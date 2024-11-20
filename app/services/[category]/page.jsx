"use client"
import React from 'react'
import AstrologerCardDetail from '@/app/_components/homec/AstrologerCardDetail';
import CardCrousal from '@/app/_components/homec/CardCrousal';
import "../../globals.css";
import "../../styles.css";
const page = () => {
  const cards = [
    {
      image: "../sp-dentist@2x.jpg",
      title: "Dentist",
      description: "Teething troubles? Schedule a dental checkup"
    },
    {
      image: "../sp-gynecologist@2x.jpg",
      title: "Gynecologist/Obstetrician",
      description: "Explore for women's health, pregnancy and infertility treatments"
    },
    {
      image: "../sp-dietitian@2x.jpg",
      title: "Dietitian/Nutrition",
      description: "Get guidance on eating right, weight management and sports nutrition"
    },
    {
      image: "../sp-physiotherapist@2x.jpg",
      title: "Physiotherapist",
      description: "Pulled a muscle? Get it treated by a trained physiotherapist"
    },
    {
        image: "../sp-physiotherapist@2x.jpg",
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist"
      },
      {
        image: "../sp-physiotherapist@2x.jpg",
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist"
      },
      {
        image: "../sp-physiotherapist@2x.jpg",
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist"
      },
      {
        image: "../sp-physiotherapist@2x.jpg",
        title: "Physiotherapist",
        description: "Pulled a muscle? Get it treated by a trained physiotherapist"
      },
    // ... add remaining cards
  ];

    const astrologers = [
        {
          image: "../astrologer1.jpg",
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
            image: "../astrologer1.jpg",
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
            image: "../astrologer1.jpg",
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
  return (
    <div>
      <div className='container'>
      <CardCrousal cards={cards} slider={true}/>
      </div>
       <div className="hspace"></div>
    <AstrologerCardDetail cardData={astrologers}/>
    <div className="hspace"></div>
    <div className="hspace"></div>
    <AstrologerCardDetail cardData={astrologers}/>
    <div className="hspace"></div>
    <div className="hspace"></div>
    {/* <AstrologerCardDetail cardData={astrologers}/>
    <div className="hspace"></div> */}
    </div>
  )
}

export default page
