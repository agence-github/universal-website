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
              "Corporate governance in our supply chain is informed by best practices that are at par with industry best practices. Our quality assurance is carried out systematically, and all the company’s products pass through the quality checks from the procurement of raw materials to the end products."
            }
            heading={"Stringent Quality Standards"}
          />
        </Slide>
        <Slide direction="down">
          <QualityCard
            text={
              " In this regard, we have our quality control personnel who inspect and test all incoming raw material and final products. This you ensure that the products that you are offering meet the set quality standards and do not have major or minor defects."
            }
            heading={"In-House Quality Control"}
          />
        </Slide>
        <Slide direction="right">
          <QualityCard
            text={
              " We firmly believe that the quality control does not end with the manufacturing of our products but it is a never-ending process. The quality of products is constantly observed and improved according to trends to make sure that the products quality is above customer expectations."
            }
            heading={"Continuous Improvement"}
          />
        </Slide>
      </div>
    </section>
  );
};

export default QualityControl;
