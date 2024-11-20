
// 'use client'
// import { useRouter } from 'next/router';

// export default async function Page({ params }) {
//   const { subCat } = await(params);
  
//   return (
//     <div>
//       <h1>My Post: {subCat}</h1>
     
//     </div>
//   );
// }




'use client';
import Banner from '../../_components/consultc/Banner';
import Specialities from '../../_components/consultc/Specialities';
import HowItWorks from '../../_components/consultc/HowItWorks';
import Offers from '../../_components/consultc/Offers';
import HealthConcerns from '../../_components/consultc/HealthConcerns';
import '../../globals.css';
import '../../consult.css';

const Page = () => {
  return (
    <section className="desktop">
      <div className="consult-page">
        <Banner />
        <Specialities />
       
       
        <HealthConcerns />
        <Offers />
        <HowItWorks />
        
      </div>
    </section>
  );
};

export default Page;
