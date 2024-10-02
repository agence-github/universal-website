import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SupplyHero from "./SupplyHero";
import DistributionCenter from "./DistributionCenter";
import Transport from "./Transport";
import QualityControl from "./QualityControl";
import SupplierNetwork from "./SupplierNetwork";

const SupplyChainpage = () => {
  return (
    <main className="bg-[#FAF5EF] overflow-hidden">
      <Navbar />
      <section className="py-20">
        <SupplyHero />
      </section>

      {/* <section>
        <DistributionCenter />
      </section> */}

      <section>
        <Transport />
      </section>

      <section>
        <QualityControl />
      </section>

      <section>
        <SupplierNetwork />
      </section>
      <Footer />
    </main>
  );
};

export default SupplyChainpage;
