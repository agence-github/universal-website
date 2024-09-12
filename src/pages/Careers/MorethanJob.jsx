import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import EmployeeBenefits from "../../components/EmployeeBenefits";

const MorethanJob = () => {
  return (
    <section className="pt-10 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-xl text-lg uppercase tracking-wider text-gray-500"
      >
        Employee Benefits
      </motion.h2>

      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase lg:py-8 py-4">
        <Fade delay={1e3} cascade damping={1e-1}>
          More than just a job
        </Fade>
      </div>

      <div className="flex justify-center gap-5 lg:gap-10  lg:px-0 py-6 lg:flex-row flex-col px-8">
        <Slide direction="left">
          <EmployeeBenefits
            text={
              "Professional Growth Opportunities: We see to it that our employees grow as the company. We let our employees be a part of engaging activities include various training programs, workshops and mentorship to build on the skills a worker possesses to enable them to grow professionally."
            }
          />
        </Slide>
        <Slide direction="down">
          <EmployeeBenefits
            text={
              "Flexible Work Arrangements: We respect family life hence forth we believe in work –life balance. We have flexible working conditions to meet the personal needs and interests of the employees."
            }
          />
        </Slide>
        <Slide direction="right">
          <EmployeeBenefits
            text={
              "Culture and Values: These core values are in our foundation and educate our employees on the trends and processes such as teamwork, innovation, and socioeconomic responsibility. Companies focus on inclusion and acceptance of various cultures people work with and seek to achieve a proper work-life harmony."
            }
          />
        </Slide>
      </div>
    </section>
  );
};

export default MorethanJob;
