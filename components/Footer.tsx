import React from 'react'
import FooterTop from './FooterTop';
import Container from './Container';
import Logo from './Logo';
import SocialMediaIcons from './SocialMediaIcons';
import { SubText } from './Title';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <Logo className="text-md" />
            <SubText>
              Discover the best products for your home, office, and more.
              <br /> Shop with confidence on our secure website.
              <br /> Hurry up! Limited time offer.
            </SubText>
            <SocialMediaIcons iconClassName="text-darkGreen" />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
      <div className="w-full text-sm flex flex-col items-center justify-center text-slate-200">
        &copy; Copyright {new Date().getFullYear()} Herb Segismar. All rights reserved!
      </div>
    </footer>
  );
}

export default Footer