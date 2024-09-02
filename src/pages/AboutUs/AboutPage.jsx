import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutHero from "./AboutHero";
import MissionVision from "./MissionVision";
import Sustainability from "./Sustainability";

const AboutPage = () => {
  return (
    <main className="bg-[#FAF5EF]">
      <Navbar />

      <section>
        <AboutHero />
      </section>

      <section>
        <MissionVision />
      </section>

      <section>
        <Sustainability />
      </section>

      <section>
        rest will do supriyo
      </section>

      <section></section>

      <section></section>

      <Footer />
    </main>
  );
};

export default AboutPage;
