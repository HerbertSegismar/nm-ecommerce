import { ShoppingBag } from 'lucide-react'
import React from 'react'

const CartIcon = () => {
  return (
    <div className="hoverEffect hover:text-lightGreen hover:scale-105">
      <ShoppingBag />
    </div>
  );
}

export default CartIcon