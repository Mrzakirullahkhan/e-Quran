import React from 'react';
import Crousel from './Crousel.jsx';
import WhatweOffer from './WhatweOffer.jsx';
import WhyChoseMe from './WhyChoseMe.jsx';
import FreeTrail from "../../Pages/AboutUs/FreeTrail";
import Footer from "../../Components/Footer";
import FeesPlans from '../../Pages/Pricing/FeesPlans';
const index = () => {
  return (
    <div>
      
      <Crousel />
      <div className="px-4 md:px-10">
        <FreeTrail />
      </div>
      <WhyChoseMe />
      <WhatweOffer />
      <FeesPlans />

      <Footer />
    </div>
  );
};
export default index;
