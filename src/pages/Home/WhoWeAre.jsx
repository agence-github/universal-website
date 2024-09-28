import React from "react";
import image2 from "/assets/image2.svg";
import image1 from "/assets/image1.svg";
import imagegrp from "/assets/imagegrp.webp";
import image3 from "/assets/image3.svg";
import { Fade, Slide } from "react-awesome-reveal";

const WhoWeAre = () => {
  return (
    <section className="text-[#b19872] p-8 lg:p-16">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col items-center lg:items-end">
          <Slide>
            {" "}
            <div className="text-center w-full">
              <h2 className="hidden lg:block text-5xl lg:text-9xl font-light lg:text-right cinzel-font">
                Who
                <br />
                <span className="mt-2 md:mt-4 cinzel-font">We Are</span>
              </h2>

              <h2 className="lg:hidden text-5xl font-light cinzel-font">
                Who We Are
              </h2>
            </div>
          </Slide>

          <Slide>
            {" "}
            <div className="mt-8">
              <img src={image3} alt="" className="lg:h-[80%] object-cover" />
            </div>
          </Slide>
        </div>

        <div className="flex-1 flex flex-col mt-8 lg:mt-0 lg:pl-8">
          <Slide direction="up">
            {" "}
            <p className="text-gray-600 text-lg leading-relaxed mb-10 lg:w-3/4">
            Universal Distribution LLC is your total distributor solution—we don’t just supply products; we help you succeed. This is what we call our “Better Living, Better Supply” approach, to serve you best. We confidently step forward to become your preferred online marketplace for all your customers’ requirements.
            </p>
          </Slide>

          <div className="relative lg:block hidden">
            <Slide direction="right">
              <div className="h-full w-[65%] lg:w-[70%]">
                <img src={image1} alt="" className="object-cover w-full" />
              </div>
            </Slide>

            <Fade>
              <div className="absolute bottom-[-40%] right-[18%] lg:right-[15%] w-[50%] lg:w-[50%]">
                <img src={image2} alt="" className="object-cover" />
              </div>
            </Fade>
          </div>

          <div className="flex justify-center lg:hidden">
            <img src={imagegrp} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
