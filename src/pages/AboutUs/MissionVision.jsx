import React from "react";
import Mission from "/assets/Mission.webp";
import Vision from "/assets/Vision.webp";
import { Fade, Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const MissionVision = () => {
  const {t}= useTranslation()
  return (
    <section className="p-10">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t-2 border-[#C49E5F]">
        <div className="md:w-2/3">
          <Slide>
            <div className="text-[#C49E5F] lg:text-7xl md:text-5xl text-4xl cinzel-font mb-10 mt-8">
            {t("aboutUs.subparts.mission.heading")}
            </div>
          </Slide>
          <Fade>
            <div className=" text-black lg:text-xl mt-0 tracking-normal font-medium lg:mr-14">
            {t("aboutUs.subparts.mission.description")}
            </div>
          </Fade>
        </div>

        <Slide direction="right">
          <div className=" mt-8">
            <img
              src={Mission}
              alt=""
              className="h-auto w-[100%] object-cover"
            />
          </div>
        </Slide>
      </div>

      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t-2 border-[#C49E5F] mt-10">
        <Slide>
          <div className=" mt-8">
            <img src={Vision} alt="" className="h-auto w-[100%] object-cover" />
          </div>
        </Slide>

        <div className="md:w-2/3 p-10">
          <Slide direction="right">
            <div className="text-[#C49E5F] lg:text-7xl md:text-5xl text-4xl cinzel-font lg:text-end mb-10">
            {t("aboutUs.subparts.vision.heading")}
            </div>
          </Slide>
          <Fade>
            <div className=" text-black lg:text-xl mt-0 tracking-normal font-medium lg:text-end lg:ml-14">
            {t("aboutUs.subparts.vision.description")}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
