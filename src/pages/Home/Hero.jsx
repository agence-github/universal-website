import React from "react";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import Separator from "../../components/Separator";
import hero_one from "/assets/hero_one.webp";
import hero_two from "/assets/hero_two.webp";
import WaveButton from "../../components/WaveButton";

const Hero = () => {
  return (
    <section className="bg-[#FAF5EF] lg:py-10 py-6 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center lg:text-xl text-lg uppercase tracking-wider text-gray-500"
        >
          BETTER LIVING, BETTER SUPPLY
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl sm:text-7xl lg:text-[160px] md:text-[120px] text-center text-[#C49E5F] lg:tracking-wider relative z-10 top-3 cinzel-font lg:top-4"
        >
          Truly Yours
        </motion.h1>

        <div className="relative top-8 lg:-top-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-4/4 ml-auto lg:mx-auto"
          >
            <img
              src={hero_one}
              alt="Makeup brushes"
              className="w-full h-auto shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute lg:left-10 left-4 -bottom-32 lg:top-3/4 w-1/2 -mb-12 z-20"
          >
            <img
              src={hero_two}
              alt="Serum bottle"
              className="shadow-lg"
              loading="lazy"
            />
          </motion.div>
        </div>

        <Slide direction="up" className="lg:pt-0 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="lg:mt-5 mt-48 max-w-lg lg:ml-[500px] ml-auto"
          >
            <p className="text-gray-700 mb-4 lg:text-lg">
            At Universal Distribution LLC, we are more than just a supply distributor, we are your partners in progress. We strive to offer the best quality products, services, and distribution. Get the taste of partnering with a distributor that understands your business.
            </p>
            <WaveButton text={"Read more"} />
          </motion.div>
        </Slide>
      </div>

      <Separator />
    </section>
  );
};

export default Hero;
