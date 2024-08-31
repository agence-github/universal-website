import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import work_one from "/assets/work_one.webp";
import work_two from "/assets/work_two.webp";
import work_three from "/assets/work_three.webp";

const WorkTogether = () => {
  return (
    <section className="py-12 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-xl text-lg uppercase tracking-wider text-gray-500"
      >
        Careers
      </motion.h2>

      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase lg:py-8 py-4">
        <Fade delay={1e3} cascade damping={1e-1}>
          let’s work together
        </Fade>
      </div>

      <Fade className="text-center lg:px-40 lg:text-xl px-10 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Fade>

      <div className="flex justify-center py-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 border-[#C49E5F] border-2 mt-4 hover:text-white text-[#B38D4E] rounded-full hover:bg-[#B38D4E] transition duration-300 text-xl"
        >
          Career Options
        </motion.button>
      </div>

      <div className="flex justify-center gap-5 py-6 lg:flex-row flex-col px-8 lg:px-0">
        <Slide direction="left"><img src={work_one} alt="img" /></Slide>
        <Slide direction="up"><img src={work_three} alt="img" /></Slide>
        <Slide direction="right"><img src={work_two} alt="img" /></Slide>
       
      </div>
    </section>
  );
};

export default WorkTogether;
