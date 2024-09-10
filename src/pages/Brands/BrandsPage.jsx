import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BrandsHero from "./BrandsHero";
import Brands from "./Brands";

function BrandsPage() {
  return (
    <main className="bg-[#FAF5EF]">
      <Navbar />
      <section>
        <BrandsHero />
      </section>

      <section>
        <Brands />
      </section>
      <Footer />
    </main>
  );
}

export default BrandsPage;
