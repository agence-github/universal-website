import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutHero from "./AboutHero";
import MissionVision from "./MissionVision";
import Sustainability from "./Sustainability";
import AboutSection from "./AboutSection";
import ProductImg from "./ProductImg";
import Leadership from "./Leadership";

const AboutPage = () => {
  return (
    <main className="bg-[#FAF5EF] overflow-hidden">
      <Navbar />

      <section className= "pt-20">
        <AboutHero />
      </section>

      <section>
        <MissionVision />
      </section>

      <section>
        <Leadership />
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

      

      <Footer />
    </main>
  );
};

export default AboutPage;
