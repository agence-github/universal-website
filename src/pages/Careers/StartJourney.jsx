import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { motion } from "framer-motion";
import CareerForm from '../../components/CareerForm';
import { useTranslation } from 'react-i18next';

const StartJourney = () => {
  const {t}= useTranslation()

  return (
    <section className="pt-10 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-xl text-lg uppercase tracking-wider text-gray-500"
      >
        {t("careers.subparts.job.heading1")}
      </motion.h2>

      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase lg:py-8 py-4">
        <Fade>
        {t("careers.subparts.job.heading1")}
        </Fade>
      </div>

      <div>
        <CareerForm />
      </div>
    </section>
  )
}

export default StartJourney
