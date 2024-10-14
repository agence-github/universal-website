import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BrandFilter from "../../components/BrandFilter";

const Skino = () => {
  return (
    <main>
      <Navbar />
      <section>
      <section className="py-24">
        <BrandFilter brand={"Skino"} />
      </section>
      </section>
      <Footer />
    </main>
  )
}

export default Skino
