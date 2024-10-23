import React from "react";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import work_one from "/assets/work_one.webp";
import work_two from "/assets/work_two.webp";
import work_three from "/assets/work_three.webp";
import WaveButton from "../../components/WaveButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const WorkTogether = () => {
  const {t}=useTranslation()
  return (
    <section className="py-12 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-xl text-lg uppercase tracking-wider text-gray-500"
      >
        {t("home.subparts.workWithUs.topheading")}
      </motion.h2>

      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase lg:py-8 py-4 px-8 lg:px-0">
        <Fade delay={1e3} cascade damping={1e-1}>
        {t("home.subparts.workWithUs.heading")}
        </Fade>
      </div>

      <Fade className="text-center lg:px-40 lg:text-xl px-10 text-sm">
      {t("home.subparts.workWithUs.description")}
      </Fade>

      <Link to="/careers" className="flex justify-center py-6">
        <WaveButton text={t("home.subparts.workWithUs.buttonText")} />
      </Link>

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
