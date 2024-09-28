import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BrandFilter from "../../components/BrandFilter";

const Care = () => {
  return (
    <main className="bg-[#FAF5EF]">
      <Navbar />
      <section className="py-24">
        <BrandFilter />
      </section>
      <Footer />
    </main>
  );
};

export default Care;
