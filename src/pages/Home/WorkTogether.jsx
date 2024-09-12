import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import work_one from "/assets/work_one.webp";
import work_two from "/assets/work_two.webp";
import work_three from "/assets/work_three.webp";
import WaveButton from "../../components/WaveButton";

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
        Explore an open position with Universal Distributor LLC and get wellness
        and entrepreneurship experience along the way! We're always appealing to
        talented people who love self-care and brand building. If you're driven,
        creative, and ready to make a positive change. Then contact us!
      </Fade>

      <div className="flex justify-center py-6">
        <WaveButton text={"Career options"} />
      </div>

      <div className="flex justify-center gap-5 py-6 lg:flex-row flex-col px-8 lg:px-0">
        <Slide direction="left">
          <img src={work_one} alt="img" />
        </Slide>
        <Slide direction="up">
          <img src={work_three} alt="img" />
        </Slide>
        <Slide direction="right">
          <img src={work_two} alt="img" />
        </Slide>
      </div>
    </section>
  );
};

export default WorkTogether;
