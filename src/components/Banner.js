import React from 'react';

import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[50px] font-semibold leading-none mb-6'>
             Best <span className='text-green-600'>Real Estate</span>  services in the city.
          </h1>
          <p className='max-w-[480px] mb-8'>
          We know how to invest, let’s do it together.
          The real estate agent you can trust.
          Professionalism first.
           </p>
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' width="400%" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
