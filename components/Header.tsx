import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavButton from './FavButton'

const Header = () => {
  return (
    <header className="bg-white py-5 border-b-black/20 border-b cursor-pointer">
      <Container className="flex items-center justify-between">
        <Logo />
        <Navbar />
        <div className='flex items-center gap-4 text-darkGreen'>
          <SearchBar />
          <CartIcon/>
          <FavButton/>
        </div>
      </Container>
    </header>
  );
}

export default Header