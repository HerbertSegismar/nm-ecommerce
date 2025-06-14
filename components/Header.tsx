import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavButton from './FavButton'
import Login from './Login'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header className="bg-white py-5 border-b-black/20 border-b">
      <Container className="flex items-center justify-between">
        <div className='flex items-center justify-center gap-4 md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>
        <Navbar />
        <div className="flex items-center gap-4 text-darkGreen">
          <SearchBar />
          <CartIcon />
          <FavButton />
          <Login />
        </div>
      </Container>
    </header>
  );
}

export default Header