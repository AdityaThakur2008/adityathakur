import React from 'react';
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import HeroStats from './HeroStats';

export default function Hero() {
  return (
  
    <section className="relative w-full min-h-screen pt-28 pb-12 px-6 md:px-12 lg:px-24 flex flex-col justify-center">
      
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
       
        <HeroLeft />

       
        <HeroRight />
      </div>

      
      <div className="max-w-7xl mx-auto w-full mt-16 lg:mt-12">
        <HeroStats />
      </div>
    </section>
  );
}
