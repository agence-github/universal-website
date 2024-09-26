import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Fade, Slide } from "react-awesome-reveal";
import vdo from "/assets/supply.mp4";
import Separator from "../../components/Separator";

const SupplyHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <section className="lg:pt-12">
      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase py-4">
        <Slide className="pb-3">A Global Netwrok</Slide>
        <Slide direction="right">For Local Needs</Slide>
      </div>

      <Fade>
        <div className="text-center lg:px-36 text-sm px-8 pt-2 lg:pt-0 lg:text-xl">
          Our international presence guarantees continuity of supply chain and
          provide customers with our manufactured premium products. We’re not
          just global but we are local as well, we’ve got you covered whether
          you are in your local market or you plan on exporting your products to
          different countries
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
