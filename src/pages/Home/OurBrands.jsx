import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import HomeBrand from "../../components/HomeBrand";
import freya from "/assets/brand_logo/freyalogo.svg"
import luv from "/assets/brand_logo/luvlogo.svg"
import care from "/assets/brand_logo/carelogo.webp"
import maxcleanlogo from "/assets/brand_logo/maxcleanlogo.svg"
import maxstyle from "/assets/brand_logo/maxstylinggellogo.svg"
import skino from "/assets/brand_logo/skinologo.svg"
import gel from "/assets/brand_logo/maxstylinggellogo.svg"

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

      <div className="flex justify-center gap-8 lg:gap-28 flex-col lg:flex-row items-center py-10 md:gap-16">
        <Slide direction="up"><HomeBrand img={freya} /></Slide>
        <Slide direction="down"><HomeBrand img={luv} /></Slide>
        <Slide direction="up"><HomeBrand img={care} /></Slide>
        <Slide direction="down"><HomeBrand img={maxcleanlogo} /></Slide>
      </div>

      <div className="flex justify-center gap-8 lg:gap-28 flex-col lg:flex-row items-center pb-10 md:gap-16">
        <Slide direction="up"><HomeBrand img={maxstyle} /></Slide>
        <Slide direction="down"><HomeBrand img={skino} /></Slide>
        <Slide direction="up"><HomeBrand img={gel} /></Slide>
      </div>
    </section>
  );
};

export default OurBrands;
