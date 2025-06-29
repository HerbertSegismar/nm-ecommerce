import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import React from "react";

export const dynamic = "force-dynamic"; // Disables prerendering

const Home = () => {
  return (
    <Container>
      <HomeBanner />
      <div>
        <ProductGrid />
      </div>
    </Container>
  );
};

export default Home;
