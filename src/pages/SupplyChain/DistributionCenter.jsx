import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import EmployeeBenefits from "../../components/EmployeeBenefits";

const DistributionCenter = () => {
  return (
    <section className="py-12">
      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase py-4">
        <Fade className="pb-3">Distribution Centers</Fade>
      </div>

      <Slide>
        <div className="text-center lg:px-36 text-sm px-8 pt-2 lg:pt-0 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </div>
      </Slide>

      <div className="flex justify-center gap-5 lg:gap-10  lg:px-12 py-12 lg:flex-row flex-col px-8">
        <Slide direction="left">
          <EmployeeBenefits
            text={
              "Professional Growth Opportunities: We see to it that our employees grow as the company. We let our employees be a part of engaging activities include various training programs, workshops and mentorship to build on the skills a worker possesses to enable them to grow professionally."
            }
          />
        </Slide>
        <Slide direction="down">
          <EmployeeBenefits
            text={
              "Flexible Work Arrangements: We respect family life hence forth we believe in work –life balance. We have flexible working conditions to meet the personal needs and interests of the employees."
            }
          />
        </Slide>
        <Slide direction="right">
          <EmployeeBenefits
            text={
              "Culture and Values: These core values are in our foundation and educate our employees on the trends and processes such as teamwork, innovation, and socioeconomic responsibility. Companies focus on inclusion and acceptance of various cultures people work with and seek to achieve a proper work-life harmony."
            }
          />
        </Slide>
      </div>
    </section>
  );
};

export default DistributionCenter;
