'use client'
import React from 'react'
import styles from '../../pooja.module.css'
import '../../globals.css';
import Link from 'next/link';
const BannerPooja = ({pickIndex ,dynamicRoute}) => {
  function compareStrings(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    const chars1 = new Set(str1);
    const chars2 = new Set(str2);
    const commonChars = [...chars1].filter(char => chars2.has(char));
    const commonCount = commonChars.length;
    return commonCount >= 7;
  }
  
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
              <button className={styles.btnPooja} style={( compareStrings(item.title , dynamicRoute)) ? {backgroundColor:'rgb(0, 115, 230)',color:'#fff'}:undefined}>{item.title}</button>
            </Link>
            
        
        );
    })
   }
   </div>
  </section>
  )
}

export default BannerPooja
