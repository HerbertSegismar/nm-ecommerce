import React from 'react'
import { data } from './Data'
import { SubTitle } from './Title';

const FooterTop = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b my-2'>
      {data?.map((item, index) => (
        <div key={index} className="flex items-center gap-2 py-2 group cursor-pointer hover:scale-110 hoverEffect">
          <div>{item.icon}</div>
          <div className="flex flex-col">
            <span className="font-semibold text-md">{item.title}</span>
            <SubTitle>{item.subtitle}</SubTitle>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FooterTop