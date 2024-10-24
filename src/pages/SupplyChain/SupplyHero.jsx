import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Fade, Slide } from "react-awesome-reveal";
import vdo from "/assets/supply.mp4";
import Separator from "../../components/Separator";
import { useTranslation } from "react-i18next";

const SupplyHero = () => {
  const {t}= useTranslation()
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <section className="lg:pt-12">
      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase py-4">
        <Slide className="pb-3">{t("supplyChainNetwork.subparts.hero.heading1")}</Slide>
        <Slide direction="right">{t("supplyChainNetwork.subparts.hero.heading2")}</Slide>
      </div>

      <Fade>
        <div className="text-center lg:px-36 text-sm px-8 pt-2 lg:pt-0 lg:text-xl">
          {t("supplyChainNetwork.subparts.hero.description")}
        </div>
      </Fade>

      <div className="flex justify-center items-center py-5 lg:py-12">
        <div className="relative w-full md:w-3/4 aspect-w-16 aspect-h-9">
          <ReactPlayer
            url={vdo}
            playing={isPlaying}
            controls
            width="100%"
            height="100%"
            config={{
              file: {
                attributes: {
                  controlsList: "nodownload",
                },
              },
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
      </div>

      <Separator />
    </section>
  );
};

export default SupplyHero;
