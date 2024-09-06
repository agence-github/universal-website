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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique animi explicabo veniam? Blanditiis perferendis, nesciunt
              cupiditate alias praesentium id iure sequi, consequuntur placeat
              qui nostrum quae quidem voluptatum beatae aspernatur! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Similique animi
              explicabo veniam? Blanditiis perferendis, nesciunt cupiditate
              alias praesentium id iure sequi, consequuntur placeat qui nostrum
              quae quidem voluptatum beatae aspernatur!
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique animi explicabo veniam? Blanditiis perferendis, nesciunt
              cupiditate alias praesentium id iure sequi, consequuntur placeat
              qui nostrum quae quidem voluptatum beatae aspernatur! Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Similique animi
              explicabo veniam? Blanditiis perferendis, nesciunt cupiditate
              alias praesentium id iure sequi, consequuntur placeat qui nostrum
              quae quidem voluptatum beatae aspernatur!
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
