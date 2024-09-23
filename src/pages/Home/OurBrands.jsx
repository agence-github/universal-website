import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import HomeBrand from "../../components/HomeBrand";

const OurBrands = () => {
  return (
    <section className="py-12">
      <div className="lg:text-[130px] text-6xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase py-4">
        <Slide>Our Brands</Slide>
      </div>
      <Slide
        direction="right"
        className="text-center lg:text-xl text-lg uppercase tracking-wider text-gray-500"
      >
        WE CRAFT YOUR RELIANCE
      </Slide>

      <div className="flex justify-center gap-12 lg:gap-40 flex-col lg:flex-row items-center py-10 md:gap-28">
        <Slide direction="up"><HomeBrand text={"Freya"} /></Slide>
        <Slide direction="down"><HomeBrand text={"Luv"} /></Slide>
        <Slide direction="up"><HomeBrand text={"Care"} /></Slide>
      </div>
    </section>
  );
};

export default OurBrands;
