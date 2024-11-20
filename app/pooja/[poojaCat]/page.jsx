
// 'use client'
// import { useRouter } from 'next/router';

// export default async function Page({ params }) {
//   const { poojaCat } = await(params);
  
//   return (
//     <div>
//       <h1>My Post: {poojaCat}</h1>
     
//     </div>
//   );
// }




'use client'
import React, { useState } from 'react'
import styles from '../../pooja.module.css'
import BannerPooja from '../../_components/poojac/BannerPooja'
import ContainerPooja from '../../_components/poojac/ContainerPooja'
import '../../globals.css';
const Page = () => {
  const [index , setIndex]=useState(0);
  const pickIndex = (index)=>{
    setIndex(index);
  }
  return (
    <section className={styles.desktop}>
   <BannerPooja pickIndex={index}/>
    <div className={styles.hspace} />
    <ContainerPooja pickIndex={pickIndex}/>
  </section>
  
  )
}

export default Page;
