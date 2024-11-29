'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../../pooja.module.css'
import BannerPooja from '../../../_components/poojac/BannerPooja'
import ContainerPooja from '../../../_components/poojac/ContainerPooja'
import '../../../globals.css';
import PoojaProductDetail from '../../../_components/poojac/PoojaProductDetail'
import ProductComponent from '@/app/_components/poojac/ProductComponent';
import HomeShimmer from '@/app/_components/homec/HomeShimmer';
const Page =  () => {
  const [poojaData, setPoojaData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const data = {
        title: 'Angarak Yog Shanti Puja',
        description: 'Performing the Angarak Yog Shanti Puja is beneficial because it helps alleviate the negative effects of the Angarak yoga formed when Mars and Rahu are conjoined in the birth chart. This yoga brings negative energy, leading to adverse effects in specific areas of life. By performing this puja, one can neutralize these negative energies and mitigate their impact, promoting positivity and harmony in those areas.',
        details: {
          days: '5 days',
          idealDays: 'Muhurta will be calculated and determined by the Astrologers at Anytime Astro as per the Janam Kundali (Birth Chart) of the concerned person.',
          godOrGoddess: 'Lord Hanuman, Mangal, Rahu',
          mantraType: 'Vedic',
          gender: 'Both',
        },
        rules: 'Perform self-practice or recitation at least 11 or 21 times daily to include your Karma with your Puja. Connect your actions with your practice, and continue the practice until completion. In the morning, after bathing, light a ghee lamp and humbly request your chosen deity to accept the worship being offered to you. Seek blessings and, if possible, observe a fast. If unable to observe a fast, at least abstain from meat, alcohol, smoking, etc., and consume a sattvic diet.'
      };
      setPoojaData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <HomeShimmer/>;
  }

  return (
    <div className="container">
      {/* <PoojaProductDetail poojaData={poojaData} /> */}
      <ProductComponent/>
    </div>
  );
}

export default Page;
