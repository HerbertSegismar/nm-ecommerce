import { Heart } from 'lucide-react'
import React from 'react'

const FavButton = () => {
  return (
    <div className="hoverEffect hover:text-lightGreen hover:scale-105">
      <Heart />
    </div>
  );
}

export default FavButton