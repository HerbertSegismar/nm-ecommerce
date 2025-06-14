import { Search } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

const SearchBar = () => {
  return (
    <Link href="/search" className="group relative cursor-pointer">
      <Search className="hoverEffect hover:text-lightGreen hover:scale-105 size-5" />
    </Link>
  );
}

export default SearchBar