'use client'
import React from 'react'
import styles from './BannerServices.module.css';
import "../../globals.css";
import "../../styles.css";

const BannerServices = () => {
 
    
  return (
    <div>
      <div className={styles.divStyle}  >
        <div className={styles.divStyle2}  >
            <h1 className={styles.divStyle2H} >
            Make Your Next Party Mystical
            </h1>
            <div className={styles.combineDiv} >
            <p className={styles.divStyle2P} >Book a Psychic for your next event</p>
            <button className={styles.divStyle2Btn} >Explore Advisors</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BannerServices
