"use client"
import React, { useState } from 'react';
import styles from '../../astro-shop/astroshop.module.css';
import "../../globals.css";
import "../../styles.css";
import CardCrousal from '../homec/CardCrousal';
// import ProductSlider from './ProductSlider';

// Product data


const AstroFilterProduct = () => {
  // const [products, setProducts] = useState(productData);
  const [currentSort, setCurrentSort] = useState('Popularity');
  // const [currentPage, setCurrentPage] = useState(1);
  // const productsPerPage = 8;

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
  
  // Sorting function
  const handleSort = (sortType) => {
    // let sortedProducts = [...products];
    
    // switch (sortType) {
    //   case 'Low to High':
    //     sortedProducts.sort((a, b) => a.price - b.price);
    //     break;
    //   case 'High to Low':
    //     sortedProducts.sort((a, b) => b.price - a.price);
    //     break;
    //   case 'Newest First':
    //     sortedProducts.sort((a, b) => b.id - a.id);
    //     break;
    //   default:
    //     sortedProducts = [...productData]; 
    // }
    
    // setProducts(sortedProducts);
    setCurrentSort(sortType);
  };

  // Calculate pagination
  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className={styles.astroShopContainer}>
      {/* Filter and Sort Section */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader}>
          <div className={styles.filterHeaderMainDiv}>
            <h1>Bracelets</h1><span>(Showing 1 – 40 products of 15,083 products)</span>
            {/* <span className={styles.productCount}>
              (Showing {indexOfFirstProduct + 1} – {Math.min(indexOfLastProduct, products.length)} of {products.length} products)
            </span> */}
          </div>
          <div className={styles.sortOptions}>
            <h2 style={{width:'100%'}}>Sort By: </h2>
            {['Popularity', 'Low to High', 'High to Low', 'Newest First'].map((option) => (
              <button
                key={option}
                onClick={() => handleSort(option)}
                className={`${styles.sortButton} ${currentSort === option ? styles.active : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <section className="appointment-section  " style={{margin:'auto'}}>
      <h1 className="size1">
        Book an appointment for horoscope and astrology analysis consultation
      </h1>
      <p className="txtsize">
        Find experienced astrologers across all categories
      </p>
   <div style={{display:'flex',justifyContent:'center'}}>
   <CardCrousal cards={cards} slider={true}/>
   </div>
    </section>
      {/* Product Slider */}
      {/* <ProductSlider products={products} /> */}

      {/* Products Grid */}
      {/* <div className={styles.productsGrid}>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.productImage}>
              <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
              <h3>{product.name}</h3>
              <div className={styles.priceInfo}>
                <span className={styles.currentPrice}>₹{product.price}</span>
                <span className={styles.originalPrice}>₹{product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      

      {/* Pagination */}
      {/* <div className={styles.pagination}>
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          Previous
        </button>
        <span className={styles.pageNumber}>Page {currentPage}</span>
        <button 
          onClick={() => setCurrentPage(prev => prev + 1)}
          disabled={indexOfLastProduct >= products.length}
          className={styles.pageButton}
        >
          Next
        </button>
      </div> */}
    </div>
  );
};

export default AstroFilterProduct;
