import React from "react";
import { motion } from "framer-motion";
import abouthero from "/assets/about-hero.webp";
import { Fade } from "react-awesome-reveal";

const AboutHero = () => {
  return (
    <section>
      <div className="lg:pt-10 pb-6 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-[160px] text-center text-[#C49E5F] lg:tracking-wider relative z-10 top-3 cinzel-font lg:top-4"
          >
            About Us
          </motion.h1>

          <div className="relative top-8 lg:-top-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-4/4 ml-auto lg:mx-auto"
            >
              <img
                src={abouthero}
                alt="Makeup brushes"
                className="w-full h-auto shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Fade>
      <div className="text-center lg:px-20 text-sm px-8 pt-8 lg:pt-0 lg:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. ullamco laboris nisi ut aliquip ex ea commodo
        consequat. ullamco laboris nisi ut aliquip ex ea commodo consequat.
        commodo consequat. ullamco laboris nisi ut.
      </div>
      </Fade>
    </section>
  );
};

export default AboutHero;
