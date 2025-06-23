import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavButton from './FavButton'
import Login from './Login'
import MobileMenu from './MobileMenu'
import { currentUser } from '@clerk/nextjs/server'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'

const Header = async() => {
  const user = await currentUser()

  return (
    <header className="bg-white py-5 border-b-black/20 border-b">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2 md:gap-0">
          <MobileMenu />
          <Logo className="hover:scale-105"/>
        </div>
        <Navbar />
        <div className="flex items-center gap-4 text-darkGreen">
          <SearchBar />
          <CartIcon />
          <FavButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <Login />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}

export default Header
