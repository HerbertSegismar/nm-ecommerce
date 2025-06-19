import React from 'react'
import { Title } from './Title'
import Link from 'next/link';
import Image from 'next/image';
import { banner_1 } from '@/images';

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 px-10 lg:px-24 flex items-center justify-between">
      <div className='space-y-4'>
        <Title>
          Grab a cup of coffee and chat with me, <br /> Enjoy 50% increase in
          PRICE
        </Title>
        <Link 
        href={"/shop"} 
        className='bg-darkGreen/90 text-white/90 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-lightGreen hover:text-white hoverEffect'
        >
          Shop Now
        </Link>
      </div>
      <div>
        <Image src={banner_1} alt="banner" className='hidden md:inline-flex w-96'/>
      </div>
        
    </div>
  );
    
}

export default HomeBanner