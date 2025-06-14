import { Facebook, Github, Linkedin, Twitter, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className="flex items-center justify-center gap-10">
      <Link
        className="hoverEffect hover:text-lightGreen hover:scale-105"
        href="https://github.com/herbertsegismar"
      >
        <Github />
      </Link>
      <Link
        className="hoverEffect hover:text-lightGreen hover:scale-105"
        href="https://facebook.com/radicalherbert"
      >
        <Facebook />
      </Link>
      <Link
        className="hoverEffect hover:text-lightGreen hover:scale-105"
        href="https://youtube.com/wavetreader"
      >
        <Youtube />
      </Link>
      <Link
        className="hoverEffect hover:text-lightGreen hover:scale-105"
        href="https://github.com/herbertsegismar"
      >
        <Linkedin />
      </Link>
      <Link
        className="hoverEffect hover:text-lightGreen hover:scale-105"
        href="https://twitter.com/radicalherbert"
      >
        <Twitter />
      </Link>
    </div>
  );
}

export default SocialMediaIcons