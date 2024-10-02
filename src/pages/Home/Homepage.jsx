import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import OurBrands from "./OurBrands";
import BecomeDistributor from "./BecomeDistributor";
import WorkTogether from "./WorkTogether";

const Homepage = () => {
  return (
    <main className="bg-[#FAF5EF] overflow-hidden">
      <Navbar />
      
      <div className="pt-20"> 
        <Hero />
      </div>

      <section>
        <WhoWeAre />
      </section>

      <div className="" />

      <section>
        <OurBrands />
      </section>

      <div className="" />

      <section>
        <BecomeDistributor />
      </section>

      <div className=" w-full h-20" />

      <section>
        <WorkTogether />
      </section>

      <div className=" w-full h-20" />

      <Footer />
    </main>
  );
};

export default Homepage;