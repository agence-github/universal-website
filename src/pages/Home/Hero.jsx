import React from "react";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import Separator from "../../components/Separator";
import hero_one from "/assets/hero_one.webp"
import hero_two from "/assets/hero_two.webp"

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
          Lorem ipsum dolor sit amet.
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl sm:text-7xl lg:text-[160px] text-center text-[#C49E5F] lg:tracking-wider relative z-10 top-3 cinzel-font lg:top-4"
        >
          Lorem Ipsum
        </motion.h1>

        <div className="relative top-8 lg:-top-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-3/4 ml-auto"
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
            className="absolute left-0 -bottom-32 w-1/2 -mb-12 z-20"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-[#C49E5F] border-2 mt-4 hover:text-white text-[#B38D4E] rounded-full hover:bg-[#B38D4E] transition duration-300 text-xl"
            >
              Read more
            </motion.button>
          </motion.div>
        </Slide>
      </div>

      <Separator />
    </section>
  );
};

export default Hero;
