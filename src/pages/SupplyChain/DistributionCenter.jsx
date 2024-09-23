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
          Our distribution centers ensure seamless supply of soap and cleaning
          products, prioritizing quality and efficiency. We guarantee timely
          deliveries and a reliable supply chain to meet all your hygiene needs.
        </div>
      </Slide>

      <div className="flex justify-center gap-5 lg:gap-10  lg:px-12 py-12 lg:flex-row flex-col px-8">
        <Slide direction="left">
          <EmployeeBenefits
            text={
              "We see to it that our employees grow as the company. We let our employees be a part of engaging activities include various training programs, workshops and mentorship to build on the skills a worker possesses to enable them to grow professionally."
            }
            heading={"Professional Growth Opportunities"}
          />
        </Slide>
        <Slide direction="down">
          <EmployeeBenefits
            text={
              "We respect family life hence forth we believe in work –life balance. We have flexible working conditions to meet the personal needs and interests of the employees."
            }
            heading={"Flexible Work Arrangements"}
          />
        </Slide>
        <Slide direction="right">
          <EmployeeBenefits
            text={
              "These core values are in our foundation and educate our employees on the trends and processes such as teamwork, innovation, and socioeconomic responsibility. Companies focus on inclusion and acceptance of various cultures people work with and seek to achieve a proper work-life harmony."
            }
            heading={"Culture and Values"}
          />
        </Slide>
      </div>
    </section>
  );
};

export default DistributionCenter;
