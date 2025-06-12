'use client'
import { navbarData } from '@/constants/navbarData'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const pathname = usePathname()
  return (
    <div className="hidden md:inline-flex w-1/3 items-center justify-between gap-7 text-sm capitalize font-semibold">
      {navbarData.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`text-darkGreen hover:text-lightGreen hoverEffect relative group hover:scale-105 ${
            pathname === item.path && "text-lightGreen"
          }`}
        >
          {item.name}
          <span
            className={`${
              pathname === item.path
                ? "group-hover:w-0 w-1/2"
                : "group-hover:w-1/2 w-0"
            } absolute left-1/2 -bottom-0.5 h-0.5 bg-lightGreen hoverEffect group-hover:left-0`}
          />
          <span
            className={`${
              pathname === item.path
                ? "group-hover:w-0 w-1/2"
                : "group-hover:w-1/2 w-0"
            } absolute right-1/2 -bottom-0.5 h-0.5 bg-lightGreen hoverEffect group-hover:right-0`}
          />
          <div className='absolute -bottom-0.5 size-full'/>
        </Link>
      ))}
    </div>
  );
}

export default Navbar