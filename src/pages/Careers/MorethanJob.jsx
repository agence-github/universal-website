import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import EmployeeBenefits from "../../components/EmployeeBenefits";
import { TbTargetArrow } from "react-icons/tb";
import { BsSuitcaseLg } from "react-icons/bs";
import { TbHearts } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const MorethanJob = () => {
  const {t}= useTranslation()
  return (
    <section className="pt-10 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-xl text-lg uppercase tracking-wider text-gray-500"
      >
        {t("careers.subparts.job.topheading")}
      </motion.h2>

      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase lg:py-8 py-4">
        <Fade delay={1e3} cascade damping={1e-1}>
        {t("careers.subparts.job.heading")}
        </Fade>
      </div>

      <div className="flex justify-center gap-5 lg:gap-10  lg:px-0 py-6 lg:flex-row flex-col px-8">
        <Slide direction="left">
          <EmployeeBenefits
            text={t("careers.subparts.job.description1")}
            heading={t("careers.subparts.job.title1")}
            icon={<TbTargetArrow />}
          />
        </Slide>
        <Slide direction="down">
          <EmployeeBenefits
            text={t("careers.subparts.job.description2")}
            heading={t("careers.subparts.job.title2")}
            icon={<BsSuitcaseLg />}
          />
        </Slide>
        <Slide direction="right">
          <EmployeeBenefits
            text={t("careers.subparts.job.description2")}
            heading={t("careers.subparts.job.title2")}
            icon={<TbHearts />}
          />
        </Slide>
      </div>
    </section>
  );
};

export default MorethanJob;
