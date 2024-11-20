"use client"
import React from 'react'
import styles from './astroshop.module.css'
import '../globals.css'
import AstroProduct from '../_components/astroshopc/astroproduct.jsx'
import AstroFilterProduct from '../_components/astroshopc/astroFilterProduct.jsx'
import AstroShopNav from '../_components/astroshopc/AstroShopNav'

// Define the categories data with more detailed structure
const customCategories = [
  {
    id: 1,
    name: "Jewellery",
    image: "/jewel_7031284.png",
    mainCategories: [
      {
        name: "Artificial",
        subCategories: [
          {
            name: "Bracelet",
            items: ["Crystal Bracelet", "Rudraksha Bracelet", "Gemstone Bracelet"]
          },
          {
            name: "Pendant",
            items: ["Crystal Pendant", "Rudraksha Pendant"]
          },
          {
            name: "Necklace",
            items: ["Crystal Necklace", "Rudraksha Necklace"]
          }
        ]
      },
      {
        name: "Natural",
        subCategories: [
          {
            name: "Bracelet",
            items: ["Natural Crystal Bracelet", "Natural Rudraksha Bracelet"]
          },
          {
            name: "Pendant",
            items: ["Natural Crystal Pendant", "Natural Rudraksha Pendant"]
          }
        ]
      }
    ]
  },
  // Add more categories as needed
];

const products = [
  {
    id: 1,
    name: "Crystal Bracelet",
    price: 1999,
    discountedPrice: 999,
    image: "sp-dentist@2x.jpg",
    category: "Bracelet",
    isNew: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Crystal Bracelet",
    price: 1999,
    discountedPrice: 999,
    image: "sp-dentist@2x.jpg",
    category: "Bracelet",
    isNew: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 3,
    name: "Crystal Bracelet",
    price: 1999,
    discountedPrice: 999,
    image: "sp-dentist@2x.jpg",
    category: "Bracelet",
    isNew: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 4,
    name: "Crystal Bracelet",
    price: 1999,
    discountedPrice: 999,
    image: "sp-dentist@2x.jpg",
    category: "Bracelet",
    isNew: true,
    rating: 4.5,
    reviews: 128
  },
  // Add more products...
];

const AstroShop = () => {
  return (
    <div className={styles.desktop}>
    
      <AstroProduct 
        categories={customCategories} 
        products={products}
      />
      <div className={styles.hspace} />
      <AstroFilterProduct 
      
      />
      <div className={styles.hspace} />
    </div>
  )
}

export default AstroShop
