"use client"
import React, { useState } from 'react';
import styles from '../../astro-shop/astroshop.module.css';
import ProductSlider from './ProductSlider';

// Product data
const productData = [
  {
    id: 1,
    name: "Money Magnet Bracelet",
    image: "/sp-dentist@2x.jpg",
    price: 512,
    originalPrice: 1999,
    category: "Bracelet"
  },
  {
    id: 2,
    name: "Love Attraction Bracelet",
    image: "/sp-dentist@2x.jpg",
    price: 512,
    originalPrice: 1999,
    category: "Bracelet"
  },
  // Add more products...
];

const AstroFilterProduct = () => {
  const [products, setProducts] = useState(productData);
  const [currentSort, setCurrentSort] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  // Sorting function
  const handleSort = (sortType) => {
    let sortedProducts = [...products];
    
    switch (sortType) {
      case 'Low to High':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'High to Low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'Newest First':
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        sortedProducts = [...productData]; // Reset to default order
    }
    
    setProducts(sortedProducts);
    setCurrentSort(sortType);
  };

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className={styles.astroShopContainer}>
      {/* Filter and Sort Section */}
      <div className={styles.filterSection}>
        <div className={styles.filterHeader}>
          <div>
            <span>Bracelets</span>
            <span className={styles.productCount}>
              (Showing {indexOfFirstProduct + 1} – {Math.min(indexOfLastProduct, products.length)} of {products.length} products)
            </span>
          </div>
          <div className={styles.sortOptions}>
            <span>Sort By: </span>
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

      {/* Product Slider */}
      <ProductSlider products={products} />

      {/* Products Grid */}
      <div className={styles.productsGrid}>
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
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
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
      </div>
    </div>
  );
};

export default AstroFilterProduct;
