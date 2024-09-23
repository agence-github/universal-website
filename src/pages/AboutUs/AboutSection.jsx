import React from "react";
import { motion } from "framer-motion";
import aboyimg from "/assets/aboutimg.webp";

const AboutSection = () => {
  return (
    <section className="py-10 lg:flex overflow-hidden">
      <motion.div
        className="bg-[#C49E5F] w-full lg:flex lg:justify-center lg:items-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="lg:pr-12 lg:pb-10 p-10 lg:p-0">
          <motion.h1
            className="text-center lg:text-xl text-lg uppercase tracking-wider text-[#ebebeb] pt-6 lg:pt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            QUALITY ASSURED
          </motion.h1>

          <motion.p
            className="lg:text-7xl text-5xl text-center text-white lg:tracking-wider cinzel-font py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Always
          </motion.p>

          <motion.p
            className="py-4 text-white text-center lg:px-20 px-3 lg:text-lg text-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            At Universal Distributor LLC, we seek to provide our partners with
            the best quality products. These precautionary measures guarantee
            the company that all its products are of high quality standard. This
            focus captures the whole supply chain process, from purchasing to
            distribution, as we strive to provide the best quality. We promise
            to deliver your customers with products that will not only work but
            also are safe and are of high quality.
          </motion.p>
        </div>
      </motion.div>
      <motion.img
        src={aboyimg}
        alt="img"
        className="p-12 lg:relative z-30 lg:right-32"
        initial={{ opacity: 0, x: 100, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: false, amount: 0.3 }}
      />
    </section>
  );
};

export default AboutSection;
