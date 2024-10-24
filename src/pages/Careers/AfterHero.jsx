import React, { useState } from "react";
import ReactPlayer from "react-player";
import vdo from "/assets/video.mp4";
import { useTranslation } from "react-i18next";

const Afterhero = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const {t}= useTranslation() 
  return (
    <section className="py-8">
      <div
        className={`max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-20 `}
      >
        <div className="lg:w-2/3">
          <div className="text-[#C49E5F] lg:text-7xl text-5xl cinzel-font my-6 text-center lg:text-left">
          {t("careers.subparts.afterhero.heading1")}
            <p className="pt-2">{t("careers.subparts.afterhero.heading2")}</p>
          </div>
          <div className="text-black lg:text-xl text-center lg:text-left px-10 lg:px-0 mt-0 tracking-normal font-medium">
          {t("careers.subparts.afterhero.description")}
          </div>
        </div>

        <div className="mt-8 lg:w-[60%]">
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

export default Afterhero;
