

import { AboutSectionData } from '@/constant/aboutSectionData';
import React from 'react';
import Image from 'next/image';

function AboutSection() {
  return (
    <section className="mx-4 sm:mx-10 grid grid-cols-1 sm:grid-cols-2 gap-10 mt-28">
      {AboutSectionData.map((item, index) => {
        return (
          <div key={index} className='w-full max-w-[600px] h-[200px] border-2 border-gray-300 flex flex-col space-y-2 px-4 sm:px-10'>
            <div className='flex items-center justify-center rounded-full mt-4 w-14 h-14 bg-[#7C4EE4]'>
              <Image src={item.src} alt="chef" width={30} height={30} className='text-white' />
            </div>
            <h1 className='text-xl sm:text-2xl font-semibold'>{item.h1}</h1>
            <p className='text-sm sm:text-base'>{item.p}</p>
          </div>
        );
      })}
    </section>
  );
}

export default AboutSection;