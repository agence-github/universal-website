import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const CareerMarquee = () => {
  const {t} = useTranslation()
  return (
    <section className="bg-[#C49E5F] text-white lg:text-4xl text-2xl py-12">
      <Marquee pauseOnHover={true}>
        <h1>{t("careers.subparts.afterhero.marque")}</h1>
        <h1>{t("careers.subparts.afterhero.marque")}</h1>
        <h1>{t("careers.subparts.afterhero.marque")}</h1>
        <h1>{t("careers.subparts.afterhero.marque")}</h1>
        <h1>{t("careers.subparts.afterhero.marque")}</h1>
        <h1>{t("careers.subparts.afterhero.marque")}</h1>
        <h1>{t("careers.subparts.afterhero.marque")}</h1>
        <h1>{t("careers.subparts.afterhero.marque")}</h1>
        
      </Marquee>
    </section>
  );
};

export default CareerMarquee;
