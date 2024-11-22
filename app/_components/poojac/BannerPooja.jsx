'use client'
import React from 'react'
import styles from '../../pooja.module.css'
import '../../globals.css';
import Link from 'next/link';
const BannerPooja = ({pickIndex}) => {
    const btnName =[{
        title:'Grah Shanti',
        url:'/pooja/grah-shanti',
    },{
        title:'Job & Business',
        url:'/pooja/job-and-bussiness',
    },
    {
        title:'Marriage & Divorce',
        url:'/pooja/marriage-and-divorce',
    },
   
    {
        title:'Progeny',
        url:'/pooja/progeny',
    }
]
  return (
    <section className={styles.bannerPooja}>
    <h2 className={styles.size2xl }  style={{color:'#fff',fontSize:'24px'}}>Find your perfect investment match!</h2>
    <p className={styles.size2} style={{color:'#fff',fontSize:'18px'}}>
      Expert Portfolios is an all-in-one screening tool...
    </p>
    <div className={styles.buttonsPooja}  >
   {
     
    btnName.map((item , index)=>{
        return (
          
            <Link href={item.url} key={index} >
              {" "}
              <button className={styles.btnPooja} style={(pickIndex===index ) ? {backgroundColor:'rgb(0, 115, 230)',color:'#fff'}:undefined}>{item.title}</button>
            </Link>
            
        
        );
    })
   }
   </div>
  </section>
  )
}

export default BannerPooja
