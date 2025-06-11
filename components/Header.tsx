import React from 'react'
import Container from './Container'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="bg-white py-5 border-b-black/20 border-b">
      <Container className="flex items-center justify-between">
        <Logo />
        <Navbar />
      </Container>
    </header>
  );
}

export default Header