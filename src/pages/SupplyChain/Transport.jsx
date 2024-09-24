import React from "react";
import { motion } from "framer-motion";
import aboyimg from "/assets/transport.svg";

const Transport = () => {
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
            LOGISTICS AND
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
            TRANSPORTATION
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
            Universal Distributor LLC offers unique Luv, Care, and Freya brands
            for each of these. Our portfolio of products serves a wide range of
            consumer needs and tastes-from Oral Care Accessories to Personal
            Care Products, among others. As part of its initiative to ensure the
            success of its associates, full marketing and promotional support is
            given to each of the brands to drive improved sales and build brand
            equity. Plus, competitive rates and terms to help you improve your
            bottom line. We're a loyal partner-we're here to help craft just the
            right consistent experience that moves your business forward
            and takes it there.
          </motion.p>
        </div>
      </motion.div>
      <motion.img
        src={aboyimg}
        alt="img"
        className=""
        initial={{ opacity: 0, x: 100, rotate: -10 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        viewport={{ once: false, amount: 0.3 }}
      />
    </section>
  )
}

export default Transport
