import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutHero from "./AboutHero";
import MissionVision from "./MissionVision";
import Sustainability from "./Sustainability";
import AboutSection from "./AboutSection";
import ProductImg from "./ProductImg";

const AboutPage = () => {
  return (
    <main className="bg-[#FAF5EF]">
      <Navbar />

      <section className= "pt-20">
        <AboutHero />
      </section>

      <section>
        <MissionVision />
      </section>

      <section>
        <Sustainability />
      </section>

      <section>
       <AboutSection />
      </section>

      <section>
        <ProductImg />
      </section>

      <section></section>

      <Footer />
    </main>
  );
};

export default AboutPage;
