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
            Universal Distributor LLC aims at providing an efficient and
            reliable distribution to its customers regardless of the country
            that they reside. We have logistics and transportation systems that
            we put in place to enhance timely delivery of goods and services
            with minimal interruptions. With our devotion in obtaining prime raw
            materials and managing an effective calendar of delivery from
            manufacturers to distributors in both local and international
            markets our company only collaborates with reliable partners. Due to
            our elaborate transport networks and tracking technologies we can
            track all deliveries and provide a schedule delivery estimate. This
            commitment of excellence makes it possible for our clients to get
            their orders delivered as per the required time line each time.
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
  );
};

export default Transport;
