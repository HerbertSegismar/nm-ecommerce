import Link from 'next/link'
import React from 'react'
import SocialLink from './SocialLinks';

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      {SocialLink?.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className='hoverEffect hover:text-lightGreen hover:scale-105 size-5'
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default SocialMediaIcons