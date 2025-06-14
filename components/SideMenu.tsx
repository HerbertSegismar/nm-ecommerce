import React, { FC } from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'

interface SideBarProps {
    isOpen: boolean
    onClose: () => void
}

const SideMenu:FC<SideBarProps> = ({ isOpen, onClose}) => {
  return (
    <div
      className={`fixed inset-y-0 h-screen w-full left-0 z-50 bg-black/50 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div className="text-white flex flex-col justify-between gap-6 px-10 bg-black h-screen min-w-1/3 max-w-2/3 border-r border-lightGreen">
        <div className='flex items-center justify-between gap-5 py-4'>
          <Logo className="text-white" spanDesign="text-lightGreen group-hover:text-white"/>
          <button onClick={onClose} className='hoverEffect hover:text-lightGreen cursor-pointer'><X/></button>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default SideMenu