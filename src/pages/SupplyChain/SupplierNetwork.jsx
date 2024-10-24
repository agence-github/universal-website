import React from "react";
import { motion } from "framer-motion";
import supplier from "/assets/supplier_network.webp";
import { useTranslation } from "react-i18next";

const SupplierNetwork = () => {
  const {t}= useTranslation()
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
          {t("supplyChainNetwork.subparts.supplier.subheading")} <p></p>{t("supplyChainNetwork.subparts.supplier.heading")}
          <p className="text-2xl font-sans pt-4 w-[700px] hidden lg:block">
          {t("supplyChainNetwork.subparts.supplier.description")}
          </p>
        </motion.h1>
      </div>
    </section>
  );
};

export default SupplierNetwork;
