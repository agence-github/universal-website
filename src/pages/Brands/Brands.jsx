import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Brandcard from "../../components/Brandcard";
import freya from "/assets/freya.webp";
import luv from "/assets/luv.webp";
import care from "/assets/care.webp";
import brand_end from "/assets/brand_end.webp"

const Brands = () => {
  return (
    <section className="py-10">
      <div className="lg:text-7xl text-5xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase lg:py-8 py-4">
        <Slide direction="down">Explore our Brands</Slide>
      </div>

      <Fade>
        <div className="flex justify-center gap-12 lg:flex-row flex-col pt-6">
          <Brandcard
            img={freya}
            link={"/brands/freya"}
            heading={"Freya"}
            subheading1={"Lorem ipsum"}
            subheading2={"dolor sit amet"}
          />
          <Brandcard
            img={luv}
            link={"/brands/luv"}
            heading={"Luv"}
            subheading1={"Lorem ipsum"}
            subheading2={"dolor sit amet"}
          />
          <Brandcard
            img={care}
            link={"/brands/care"}
            heading={"Care"}
            subheading1={"Lorem ipsum"}
            subheading2={"dolor sit amet"}
          />
        </div>
      </Fade>

      <Fade>
        <img src={brand_end} alt="img " className="mx-auto mt-16" />
      </Fade>
    </section>
  );
};

export default Brands;
