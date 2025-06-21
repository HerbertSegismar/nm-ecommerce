import React from 'react'
import Container from "@/components/Container";

export const dynamic = "force-dynamic"; // Disables prerendering

const Shop = () => {
  return (
    <Container>
      <main>
        <h1 className="text-violet-600 text-2xl font-bold">Shop</h1>
      </main>
    </Container>
  );
}

export default Shop