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
              At Universal Distribution LLC, we are not only a company that
              offers supply chain management solutions; we are your progress
              team. The major goal of our company is to provide businesses with
              relevant services. These key principles of our strategy are faith
              in partnership and the focus on the individual approach. It’s for
              this reason that we ensure we make every effort to deliver a
              perfect distribution channel experience. Universal Distribution
              LLC is not about supplying; it’s about moving your business to the
              next level.
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
              At Universal Distribution LLC, we strive to set strategic goals
              and guide commercial organizations by creating optimized and
              efficient supply chains. Our vision is to be recognized as the
              best-in-class distributor, renowned for our exceptional
              performance and strong partnerships. We aim to empower businesses
              to achieve their full potential by providing not only the tools
              and services they need but also by fostering long-term
              relationships built on trust, reliability, and innovation. We are
              committed to adapting to the ever-evolving market landscape,
              ensuring that we remain a leader in distribution while supporting
              our partners' growth and success.
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
