'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
        <AlignLeft className="hover:text-lightGreen text-darkGreen hoverEffect hover:scale-120 md:hidden cursor-pointer" />
      </button>
      <div className="md:hidden hoverEffect2">
        <SideMenu isOpen={isSideMenuOpen} onClose={() => setIsSideMenuOpen(false)} />
      </div>
    </>
  );
}

export default MobileMenu