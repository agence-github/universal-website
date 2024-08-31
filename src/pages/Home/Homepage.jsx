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
    <main className="bg-[#FAF5EF]">
      <div>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>

      <div className="bg-green-500 w-full h-20" />

      <div>
        <WhoWeAre />
      </div>

      <div className="bg-green-500 w-full h-20" />

      <div>
        <OurBrands />
      </div>

      <div className="bg-green-500 w-full h-20" />

      <div>
        <BecomeDistributor />
      </div>

      <div className="bg-green-500 w-full h-20" />

      <div>
        <WorkTogether />
      </div>

      <div className="bg-green-500 w-full h-20" />

      <div>
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
