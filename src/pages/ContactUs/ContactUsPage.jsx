import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactHero from "./ContactHero";
import Separator from "../../components/Separator";
import WhereToFind from "./WhereToFind";
import KeyContact from "../../components/KeyContact";

const ContactUsPage = () => {
  return (
    <main className="bg-[#FAF5EF] overflow-hidden">
      <Navbar />
      <section className="pt-20">
        <ContactHero />
      </section>

      <Separator />

      <section>
        <WhereToFind />
      </section>

      <section>
        <KeyContact />
      </section>
      <Footer />
    </main>
  );
};

export default ContactUsPage;
