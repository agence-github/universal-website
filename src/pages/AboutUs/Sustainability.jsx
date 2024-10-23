import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Fade } from "react-awesome-reveal";
import vdo from "/assets/video.mp4";
import { useTranslation } from "react-i18next";

const Sustainability = () => {
  const {t}= useTranslation()
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="lg:py-12 py-6">
      <Fade delay={1e3} cascade damping={1e-1}>
        <div className="text-[#C49E5F] lg:text-8xl md:text-5xl text-4xl cinzel-font lg:mb-10 lg:mt-8 uppercase text-center">
        {t("aboutUs.subparts.sustainibility.heading")}
        </div>
      </Fade>

      <Fade>
        <div className="text-center lg:px-20 text-sm px-8 py-5 lg:pt-0 lg:text-xl">
        {t("aboutUs.subparts.sustainibility.description")}
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
    </section>
  );
};

export default Sustainability;
