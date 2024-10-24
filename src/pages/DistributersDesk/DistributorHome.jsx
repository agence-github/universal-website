import React from 'react';
import { Link } from 'react-router-dom';
import WaveButton from '../../components/WaveButton';
import { useTranslation } from 'react-i18next';

const DistributorHome = () => {
  const {t}= useTranslation()
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl cinzel-font xl:text-7xl text-[#C49E5F] leading-relaxed mb-4">
            {t("distributorDesk.subparts.hero.heading")}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
            {t("distributorDesk.subparts.hero.description")}
            </p>
            <Link to="/contact">
              <WaveButton text={t("distributorDesk.subparts.hero.buttonText")} />
            </Link>
          </div>

          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/assets/distriHome.webp"
              alt="Woman standing in a kitchen"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributorHome;