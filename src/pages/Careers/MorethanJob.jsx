import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import EmployeeBenefits from "../../components/EmployeeBenefits";
import { TbTargetArrow } from "react-icons/tb";
import { BsSuitcaseLg } from "react-icons/bs";
import { TbHearts } from "react-icons/tb";

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
              " We see to it that our employees grow as the company. We let our employees be a part of engaging activities include various training programs, workshops and mentorship to build on the skills a worker possesses to enable them to grow professionally."
            }
            heading={"Professional Growth Opportunities"}
            icon={<TbTargetArrow />}
          />
        </Slide>
        <Slide direction="down">
          <EmployeeBenefits
            text={
              " We respect family life hence forth we believe in work –life balance. We have flexible working conditions to meet the personal needs and interests of the employees."
            }
            heading={"Flexible Work Arrangements"}
            icon={<BsSuitcaseLg />}
          />
        </Slide>
        <Slide direction="right">
          <EmployeeBenefits
            text={
              " These core values are in our foundation and educate our employees on the trends and processes such as teamwork, innovation, and socioeconomic responsibility. Companies focus on inclusion and acceptance of various cultures people work with and seek to achieve a proper work-life harmony."
            }
            heading={"Culture and Values"}
            icon={<TbHearts />}
          />
        </Slide>
      </div>
    </section>
  );
};

export default MorethanJob;
