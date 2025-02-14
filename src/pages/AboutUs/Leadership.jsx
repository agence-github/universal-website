import React from "react";
import { Fade } from "react-awesome-reveal";
import leader from "/assets/leader.webp";
import LeaderComponent from "../../components/LeaderComponent";
import { useTranslation } from "react-i18next";

const Leadership = () => {
  const {t}= useTranslation()
  return (
    <section className="lg:py-12 py-6">
      <Fade>
        <div className="text-[#C49E5F] lg:text-8xl md:text-5xl text-4xl cinzel-font lg:mb-10 lg:mt-8 uppercase text-center">
        {t("aboutUs.subparts.leadership.heading")}
        </div>
      </Fade>

      {/* <div className="flex justify-center lg:flex-row flex-col items-center py-5">
        <LeaderComponent
          img={leader}
          name={"sheikh majid hamad saqar al qasimi"}
          position={"(Group Chairman)"}
        />

        <LeaderComponent
          img={leader}
          name={"sheikh majid hamad saqar al qasimi"}
          position={"(Group Chairman)"}
        />

        <LeaderComponent
          img={leader}
          name={"sheikh majid hamad saqar al qasimi"}
          position={"(Group Chairman)"}
        />
      </div> */}

      <div className="flex justify-center  lg:flex-row flex-col items-center pt-5">
        {/* <LeaderComponent
          img={leader}
          name={"sheikh majid hamad saqar al qasimi"}
          position={"(Group Chairman)"}
        /> */}
        <LeaderComponent
          img={leader}
          name={"Siddhartha Gupta"}
          position={"(Head - Sales & Marketing)"}
        />
      </div>
    </section>
  );
};

export default Leadership;
