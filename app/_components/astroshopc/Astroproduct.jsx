"use client"
import React, { useState } from 'react'
import styles from '../../astro-shop/astroshop.module.css'
import ProductSlider from './ProductSlider'

const AstroProduct = ({ categories, products }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeMainCategory, setActiveMainCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const handleMainCategoryHover = (mainCategory) => {
    setActiveMainCategory(mainCategory);
  };

  const handleSubCategoryHover = (subCategory) => {
    setActiveSubCategory(subCategory);
  };

  return (
    <div className={styles.astroProductContainer}>
      {/* Category Navigation */}
      <nav className={styles.categoryNav}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.categoryItem}
            onMouseEnter={() => handleCategoryHover(category)}
            onMouseLeave={() => handleCategoryHover(null)}
          >
            <div className={styles.categoryHeader}>
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
            </div>

            {activeCategory === category && (
              <div className={styles.mainCategoryMenu}>
                {category.mainCategories.map((main, idx) => (
                  <div
                    key={idx}
                    className={styles.mainCategoryItem}
                    onMouseEnter={() => handleMainCategoryHover(main)}
                  >
                    <span>{main.name}</span>

                    {activeMainCategory === main && (
                      <div className={styles.subCategoryMenu}>
                        {main.subCategories.map((sub, subIdx) => (
                          <div
                            key={subIdx}
                            className={styles.subCategoryItem}
                            onMouseEnter={() => handleSubCategoryHover(sub)}
                          >
                            <span>{sub.name}</span>

                            {activeSubCategory === sub && (
                              <div className={styles.itemsMenu}>
                                {sub.items.map((item, itemIdx) => (
                                  <div key={itemIdx} className={styles.menuItem}>
                                    {item}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <ProductSlider products={products} />
    </div>
  );
};

export default AstroProduct