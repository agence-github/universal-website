import React from "react";
import { Slide } from "react-awesome-reveal";
import QualityCard from "../../components/QualityCard";

const QualityControl = () => {
  return (
    <section className="py-6">
      <div className="lg:text-7xl text-4xl text-center text-[#C49E5F] lg:tracking-wider cinzel-font uppercase py-4">
        <Slide className="pb-3">QUALITY CONTROL</Slide>
        <Slide direction="right">AND ASSURANCE</Slide>
      </div>

      <div className="flex justify-center gap-5 lg:gap-10  lg:px-12 py-12 lg:flex-row flex-col px-8">
        <Slide direction="left">
          <QualityCard
            text={
              "Professional Growth Opportunities: We see to it that our employees grow as the company. We let our employees be a part of engaging activities include various training programs, workshops and mentorship to build on the skills a worker possesses to enable them to grow professionally."
            }
          />
        </Slide>
        <Slide direction="down">
          <QualityCard
            text={
              "Flexible Work Arrangements: We respect family life hence forth we believe in work –life balance. We have flexible working conditions to meet the personal needs and interests of the employees."
            }
          />
        </Slide>
        <Slide direction="right">
          <QualityCard
            text={
              "Culture and Values: These core values are in our foundation and educate our employees on the trends and processes such as teamwork, innovation, and socioeconomic responsibility. Companies focus on inclusion and acceptance of various cultures people work with and seek to achieve a proper work-life harmony."
            }
          />
        </Slide>
      </div>
    </section>
  );
};

export default QualityControl;
