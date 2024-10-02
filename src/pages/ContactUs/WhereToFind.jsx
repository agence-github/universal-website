import React from "react";
import contactImg from "/assets/contact.webp";
import { Fade } from "react-awesome-reveal";

const WhereToFind = () => {
  return (
    <section className="py-10">
      <Fade>
        <div
          className={`max-w-7xl mx-auto flex flex-col lg:flex-row-reverse justify-between items-center gap-10 `}
        >
          <div className="lg:w-2/3">
            <div className="text-[#C49E5F] lg:text-7xl text-4xl cinzel-font my-6 text-center lg:text-left">
              Where to <p className="pt-2">find us</p>
            </div>
            <h1 className="text-black text-xl mb-3 lg:w-2/3 mt-0 tracking-normal font-semibold text-center lg:text-left">
              Address
            </h1>
            <div className="text-black text-xl mt-0 tracking-normal font-medium text-center lg:text-left px-8 lg:px-0">
              P.O. Box: 624654| Jebel Ali Industrial Area - 1 | Dubai, UAE.
            </div>

            <h1 className="text-black text-xl mb-3 lg:w-2/3 mt-2 tracking-normal font-semibold text-center lg:text-left">
              Telephone
            </h1>
            <div className="text-black text-xl lg:w-2/3 mt-0 tracking-normal font-medium text-center lg:text-left">
              +91 1234567890 , +91 1234567890
            </div>

            <h1 className="text-black text-xl mb-3 lg:w-2/3 mt-2 tracking-normal font-semibold text-center lg:text-left">
              Email
            </h1>
            <div className="text-black text-xl lg:w-2/3 mt-0 tracking-normal font-medium text-center lg:text-left">
            info@udllcdxb.com
            </div>
          </div>

          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57857.770021053046!2d55.04358498798508!3d24.996356646926188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f12a5e71425ff%3A0x3d54a7a568db620b!2sJebel%20Ali%20Industrial%20Area%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1727891161845!5m2!1sen!2sin"
              // width="600"
              // height="300"
              className="rounded-lg lg:h-[550px] lg:w-[750px] h-[350px] w-[400px]"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Fade>

      <Fade>
        <img src={contactImg} alt="img " className="mx-auto mt-16" />
      </Fade>
    </section>
  );
};

export default WhereToFind;
