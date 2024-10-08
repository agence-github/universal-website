import React from "react";
import { motion } from "framer-motion";
import supplier from "/assets/supplier_network.webp";

const SupplierNetwork = () => {
  return (
    <section className="lg:pt-20">
      <div className="relative">
        <img
          src={supplier}
          alt="hero"
          className="mx-auto object-cover w-full"
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl lg:text-7xl text-left text-white lg:tracking-wider absolute top-[35%] lg:left-10 left-4 z-10 cinzel-font"
        >
          supplier <p></p>Relationships
          <p className="text-2xl font-sans pt-4 w-[700px] hidden lg:block">
            We appreciate the good working relationships we have with our
            suppliers and ensure that we will continue to support our suppliers
            with an aim of cultivating mutual and strategic partnership. Our
            suppliers are local hence we can easily monitor their operations
            with an aim of delivering high quality products and services.
          </p>
        </motion.h1>
      </div>
    </section>
  );
};

export default SupplierNetwork;
