import React from "react";
import aboyimg from "/assets/aboutimg.webp";


const AboutSection = () => {
  return (
    <section className="py-10 lg:flex">
      <div className="bg-[#C49E5F] w-full lg:flex lg:justify-center lg:items-center">
        <div className="lg:pr-12 lg:pb-10 p-10 lg:p-0">
          <h1 className="text-center lg:text-xl text-lg uppercase tracking-wider text-[#ebebeb] pt-6 lg:pt-0">
            LOREM IPSUM
          </h1>

          <p className="lg:text-7xl text-5xl  text-center text-white lg:tracking-wider cinzel-font py-2">
            lorem ipsum
          </p>

          <p className="py-4 text-white text-center lg:px-20 px-3 lg:text-lg text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ore
            et dolore magna aliqua. Ut enim ad minim venia, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit met, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco labor
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <img
        src={aboyimg}
        alt="img"
        className="p-12 lg:relative z-30 lg:right-32"
      />
    </section>
  );
};

export default AboutSection;
