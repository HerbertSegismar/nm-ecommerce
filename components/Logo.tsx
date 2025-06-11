import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({classname}: {classname?: string}) => {
  return (
    <Link href="/">
        <h1 className={cn("group hover:scale-105 text-2xl hoverEffect tracking-wider font-sans uppercase font-bold text-darkGreen hover:text-lightGreen", classname)}>
            Shopcar<span className='text-lightGreen group-hover:text-darkGreen hoverEffect'>t</span>
        </h1>
    </Link>
  )
}

export default Logo