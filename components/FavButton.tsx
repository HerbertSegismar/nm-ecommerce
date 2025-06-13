import { Heart } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

const FavButton = () => {
  return (
    <Link href="/favorites" className="group relative">
      <Heart className="hoverEffect hover:text-lightGreen hover:scale-105 size-5" />
      <span className="absolute -top-1 -right-2 text-xs size-4 text-center text-white bg-darkGreen rounded-full">
        0
      </span>
    </Link>
  );
}

export default FavButton