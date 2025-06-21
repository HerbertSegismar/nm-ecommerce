import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import React from 'react'

export const dynamic = "force-dynamic"; // Disables prerendering

const Home = () => {
  return (
    <Container className='bg-lightBrown rounded-md'>
      <HomeBanner />
    </Container>
  );
}

export default Home