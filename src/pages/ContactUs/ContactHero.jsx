import React from "react";
import { motion } from "framer-motion";
import contacthero from "/assets/contact_hero.webp";
import { Fade } from "react-awesome-reveal";

const ContactHero = () => {
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
            Contact Us
          </motion.h1>

          <div className="relative top-8 lg:-top-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-4/4 ml-auto lg:mx-auto"
            >
              <img
                src={contacthero}
                alt="Makeup brushes"
                className="w-full h-auto shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <Fade>
        <div className="text-center lg:px-36 text-xl px-8 pt-8 lg:pt-0 lg:text-3xl">
          If you have comments or queries, write to us{" "}
          <span className="text-[#0493FC]">udl@gmail.com</span> and we’ll
          contact you as soon as we can.
        </div>
      </Fade>
    </section>
  );
};

export default ContactHero;