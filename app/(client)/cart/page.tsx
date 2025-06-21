import React from 'react'
import Container from "@/components/Container";

export const dynamic = "force-dynamic"; // Disables prerendering

const Cart = () => {
  return (
    <Container>
      <main>
        <h1 className="text-violet-600 text-2xl font-bold">Cart</h1>
      </main>
    </Container>
  );
};

export default Cart