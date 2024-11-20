"use client"
import React, { useState } from 'react';
import styles from '../../astro-shop/astroshop.module.css';

const AstroShopNav = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const menuData = {
    jewellery: {
      categories: ['Artificial', 'Natural'],
      subCategories: ['Bracelet', 'Pendant', 'Necklace'],
      subSubCategories: ['Bracelet 1', 'Pendant 2', 'Necklace 3']
    },
    gemstone: {
      categories: ['Artificial', 'Natural'],
      subCategories: ['Bracelet', 'Pendant', 'Necklace']
    }
  };

  return (
    <nav className={styles.astroNav}>
      <div 
        className={styles.mainMenuItem}
        onMouseEnter={() => setActiveMenu('jewellery')}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <span>Jewellery</span>
        {activeMenu === 'jewellery' && (
          <div className={styles.mainMenu}>
            <ul>
              {menuData.jewellery.categories.map((cat, index) => (
                <li 
                  key={index}
                  onMouseEnter={() => setActiveSubMenu(cat)}
                >
                  {cat}
                </li>
              ))}
            </ul>
            {activeSubMenu && (
              <div className={styles.subMenu}>
                <ul>
                  {menuData.jewellery.subCategories.map((sub, index) => (
                    <li key={index}>{sub}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default AstroShopNav; 