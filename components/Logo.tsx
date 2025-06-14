import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({className, spanDesign}: {className?: string, spanDesign?: string}) => {
  return (
    <Link href="/">
      <h1
        className={cn(
          "group hover:scale-105 text-2xl hoverEffect tracking-wider cursor-pointer font-sans uppercase font-bold text-darkGreen hover:text-lightGreen",
          className
        )}
      >
        Shopcar
        <span className={cn("text-lightGreen group-hover:text-darkGreen hoverEffect", spanDesign)}>
          t
        </span>
      </h1>
    </Link>
  );
}

export default Logo