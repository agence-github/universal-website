import React from "react";
import contactImg from "/assets/contact.webp";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const WhereToFind = () => {
  const {t}= useTranslation()
  return (
    <section className="py-10">
      <Fade>
        <div
          className={`max-w-7xl mx-auto flex flex-col lg:flex-row-reverse justify-between items-center gap-10 `}
        >
          <div className="lg:w-2/3">
            <div className="text-[#C49E5F] lg:text-7xl text-4xl cinzel-font my-6 text-center lg:text-left">
            {t('contactUs.subparts.locations.heading1')}
              <p className="pt-2">
              {t('contactUs.subparts.locations.heading2')}
              </p>
            </div>

            {/* Address */}
            <h1 className="text-black text-xl mb-3 lg:w-2/3 mt-0 tracking-normal font-semibold text-center lg:text-left">
            {t('contactUs.subparts.locations.title1')}
            </h1>
            <div className="text-black text-xl mt-0 tracking-normal font-medium text-center lg:text-left px-8 lg:px-0">
              P.O. Box: 181815 | Office No - 301, Dubai Financial Market, Al
              Quoz, Bur Dubai, UAE
            </div>

            {/* Telephone */}
            <h1 className="text-black text-xl mb-3 lg:w-2/3 mt-2 tracking-normal font-semibold text-center lg:text-left">
            {t('contactUs.subparts.locations.title2')}
            </h1>
            <div className="text-black text-xl lg:w-2/3 mt-0 tracking-normal font-medium text-center lg:text-left">
              <a
                href="tel:+911234567890"
                className="text-[#0493FC] hover:underline"
              >
                +971-4-2321818
              </a>
              ,{" "}
              <a
                href="tel:+911234567890"
                className="text-[#0493FC] hover:underline"
              >
                +9171-50-9400443
              </a>
            </div>

            {/* Email */}
            <h1 className="text-black text-xl mb-3 lg:w-2/3 mt-2 tracking-normal font-semibold text-center lg:text-left">
            {t('contactUs.subparts.locations.title3')}
            </h1>
            <div className="text-black text-xl lg:w-2/3 mt-0 tracking-normal font-medium text-center lg:text-left">
              <a
                href="mailto:info@udllcdxb.com"
                className="text-[#0493FC] hover:underline"
              >
                info@udllcdxb.com
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.2867771191245!2d55.28585717523605!3d25.227264177691648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42e96b7df683%3A0xb163e763a5771309!2sDubai%20Financial%20Market!5e0!3m2!1sen!2sin!4v1728885605330!5m2!1sen!2sin"
              className="rounded-lg lg:h-[550px] lg:w-[750px] h-[350px] w-[400px]"
              allowFullScreen=""
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
