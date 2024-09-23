import React from "react";
import Mission from "/assets/Mission.webp";
import Vision from "/assets/Vision.webp";
import { Fade, Slide } from "react-awesome-reveal";

const MissionVision = () => {
  return (
    <section className="p-10">
      <div className=" max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 border-t-2 border-[#C49E5F]">
        <div className="md:w-2/3">
          <Slide>
            <div className="text-[#C49E5F] lg:text-7xl md:text-5xl text-4xl cinzel-font mb-10 mt-8">
              Our Mission
            </div>
          </Slide>
          <Fade>
            <div className=" text-black lg:text-xl mt-0 tracking-normal font-medium lg:mr-14">
            At Universal Distribution LLC, we are not only a company that offers supply chain management solutions; we are your progress team. The major goal of our company is to provide businesses with relevant services. These key principles of our strategy are faith in partnership and the focus on the individual approach. It’s for this reason that we ensure we make every effort to deliver a perfect distribution channel experience. Universal Distribution LLC is not about supplying; it’s about moving your business to the next level.
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
              Our Vision
            </div>
          </Slide>
          <Fade>
            <div className=" text-black lg:text-xl mt-0 tracking-normal font-medium lg:text-end lg:ml-14">
            The vision we strive for at the Universal Distribution LLC is to identify strategic goals and navigate for commercial organisations through creating optimal supply chains. Our vision is to be the best distributor and well-admired company for the outstanding performance with our partners. The vision is to help businesses become all that they can be by offering a helping hand in the way of tools and services.
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
