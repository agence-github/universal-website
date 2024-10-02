import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DistributerBenefit from "./DistributerBenefit";
import DistributorHome from "./DistributorHome";
import DistributerFeatures from "./DistributerFeatures";
import FaqSection from "./FaqSection";
import KeyContact from "../../components/KeyContact";

function DistributerPage() {
  return (
    <main className="bg-[#FAF5EF] overflow-hidden">
      <Navbar />
      <section className="lg:pt-12">
        <DistributorHome />
      </section>
      <section>
        <DistributerBenefit />
      </section>
      <section>
        <DistributerFeatures />
      </section>
      <section>
        <FaqSection />
      </section>

      <section>
        <KeyContact />
      </section>

      <Footer />
    </main>
  );
}

export default DistributerPage;
