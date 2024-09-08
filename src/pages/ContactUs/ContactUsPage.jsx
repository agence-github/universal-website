import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactHero from "./ContactHero";

const ContactUsPage = () => {
  return (
    <main className="bg-[#FAF5EF]">
      <Navbar />
      <section className="pt-20">
        <ContactHero />
      </section>
      <Footer />
    </main>
  );
};

export default ContactUsPage;
