'use client'

import React, { useState, useEffect } from 'react';
import styles from '../../pooja.module.css';
import BannerPooja from '../../_components/poojac/BannerPooja';
import ContainerPooja from '../../_components/poojac/ContainerPooja';
import '../../globals.css';

const Page = ({ params }) => {
  const [index, setIndex] = useState(0);
  const [poojaCat, setPoojaCat] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(  () => {
    async function paramValue(){
      if (params) {
        const { poojaCat } = await params;
        setPoojaCat(poojaCat);
      }
    }
    paramValue();
   
  }, [params]);

  const pickIndex = (index) => {
    setIndex(index);
  };

  if (!poojaCat) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.desktop}>
      {/* <h1>{poojaCat}</h1> */}
      <BannerPooja pickIndex={index} dynamicRoute={poojaCat}/>
      <div className={styles.hspace} />
      <div className={styles.hspace} />
      <ContainerPooja pickIndex={pickIndex} dynamicRoute={poojaCat} />
    </section>
  );
};

export default Page;
