import React from "react";
import { Slide } from "react-awesome-reveal";
import QualityCard from "../../components/QualityCard";
import { useTranslation } from "react-i18next";

const QualityControl = () => {
  const {t}= useTranslation()
  return (
    <section className="py-6">
      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase py-4">
        <Slide className="pb-3">{t("supplyChainNetwork.subparts.quality.subheading")}</Slide>
        <Slide direction="right">{t("supplyChainNetwork.subparts.quality.heading")}</Slide>
      </div>

      <div className="flex justify-center gap-5 lg:gap-10  lg:px-12 py-12 lg:flex-row flex-col px-8">
        <Slide direction="left">
          <QualityCard
            text={t("supplyChainNetwork.subparts.quality.description1")}
      
            heading={t("supplyChainNetwork.subparts.quality.title1")}
          />
        </Slide>
        <Slide direction="down">
          <QualityCard
             text={t("supplyChainNetwork.subparts.quality.description2")}
      
             heading={t("supplyChainNetwork.subparts.quality.title2")}
          />
        </Slide>
        <Slide direction="right">
          <QualityCard
             text={t("supplyChainNetwork.subparts.quality.description3")}
      
             heading={t("supplyChainNetwork.subparts.quality.title3")}
          />
        </Slide>
      </div>
    </section>
  );
};

export default QualityControl;
