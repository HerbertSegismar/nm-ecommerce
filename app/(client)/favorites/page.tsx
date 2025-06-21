import React from 'react'
import Container from "@/components/Container";

export const dynamic = "force-dynamic"; // Disables prerendering

const Favorites = () => {
  return (
    <Container>
      <main>
        <h1 className="text-violet-600 text-2xl font-bold">Favorites</h1>
      </main>
    </Container>
  );
};

export default Favorites