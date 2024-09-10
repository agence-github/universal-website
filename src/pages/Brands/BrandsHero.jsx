import React from "react";
import Brands_hero from "/assets/brands_hero.webp";
import { motion } from "framer-motion";

const BrandsHero = () => {
  return (
    <section className="pt-20">
      <div className="relative">
        <img
          src={Brands_hero}
          alt="hero"
          className="mx-auto object-cover w-full"
        />

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-[120px] text-left text-white lg:tracking-wider absolute top-[25%] lg:left-10 left-4 z-10 cinzel-font"
        >
          Our <p></p>Brands

          <p className="text-2xl font-sans pt-4 w-[700px] hidden lg:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </motion.h1>
      </div>
    </section>
  );
};

export default BrandsHero;
