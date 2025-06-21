import React from 'react'
import { Title } from './Title'
import Link from 'next/link';
import Image from 'next/image';
import { banner_1 } from '@/images';

const HomeBanner = () => {
  return (
    <div className="py-10 md:py-0 px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-4">
        <Title>
          Grab <span className='text-red-500 uppercase text-3xl'>huge discounts</span> online now, <br /> Enjoy up to 50%
          off on selected items
        </Title>
        <Link href={"/shop"}>
          <div className="hover:scale-105 w-fit bg-darkGreen/80 text-white py-2 px-2 rounded-md text-sm font-semibold hover:bg-lightGreen/80 hoverEffect">
            Shop Now
          </div>
        </Link>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner"
          className="hidden md:inline-flex w-96"
          priority
        />
      </div>
    </div>
  );
    
}

export default HomeBanner