import React from 'react'
import FooterTop from './FooterTop';
import Container from './Container';
import Logo from './Logo';
import SocialMediaIcons from './SocialMediaIcons';
import { SubText, SubTitle, Title } from './Title';
import { categoriesData, quickLinksData } from '@/constants/NavData';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-lg" />
            <SubText>
              Discover the best products for your home, office, and more.
              <br /> Shop with confidence on our secure website.
              <br /> Hurry up! Limited time offer.
            </SubText>
            <SocialMediaIcons iconClassName="text-darkGreen" />
          </div>
          <div>
            <Title className="text-md lg:text-lg">Quick Links</Title>
            <ul className="-space-y-2 text-sm">
              {quickLinksData?.map((item, index) => (
                <li key={index} className="py-2 hover:scale-105 hoverEffect">
                  <Link href={item?.path}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Title className="text-md lg:text-lg">Categories</Title>
            <ul className="space-y-0 text-sm">
              {categoriesData?.map((item, index) => (
                <li key={index} className="py-2 hover:scale-105 hoverEffect">
                  <Link href={`/category${item?.path}`}>{item?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Title className="text-md lg:text-lg">Newsletter</Title>
            <SubText>
              Subscribe to our newsletter to get the latest updates.
            </SubText>
            <form action="">
              <Input
                id="newsletter-email"
                placeholder="Enter your email"
                className="my-2"
                required
              />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>
      </Container>
      <div className="w-full text-sm flex flex-col items-center justify-center text-slate-200">
        &copy; Copyright {new Date().getFullYear()} Herb Segismar. All rights
        reserved!
      </div>
    </footer>
  );
}

export default Footer